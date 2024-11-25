import OpenAI from "openai";

const client = new OpenAI({
  
  apiKey: process.env.OPENAI_API_KEY
    
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { feedbackData, language } = body;

    if (!feedbackData) {
      return new Response(JSON.stringify({ error: "Missing feedback data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Define the prompt based on the language
    let prompt = "";

    if (language === "fr") {
      // French language prompt
      prompt = `
      Basé sur les commentaires suivants, générez un commentaire concis (maximum 300 caractères) sur la performance de l'étudiant. Mettez en évidence les points forts et les domaines à améliorer :
      Commentaire : ${JSON.stringify(feedbackData)}
  
      Exemple :
      "Excellents progrès en mathématiques et en travail d'équipe. Doit améliorer la compréhension du français et la participation."
      `;
    } else {
      // English language prompt (default)
      prompt = `
      Based on the following feedback, generate a concise comment (max 300 characters) for the student's performance. Highlight strengths and areas for improvement:
      Feedback: ${JSON.stringify(feedbackData)}
  
      Example:
      "Great progress in mathematics and teamwork. Needs to improve French comprehension and participation."
      `;
    }

    const response = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
      temperature: 0.7,
    });

    const comment = response.choices[0]?.message?.content?.trim();
    if (!comment) {
      throw new Error("No valid comment generated.");
    }

    return new Response(JSON.stringify({ comment }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating feedback:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate feedback" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
