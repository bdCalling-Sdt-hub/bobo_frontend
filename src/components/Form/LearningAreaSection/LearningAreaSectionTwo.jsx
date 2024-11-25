import CheckboxGroup from "@/components/CheckBox";
import { useTranslations } from "next-intl";

const LearningAreaSectionTwo = ({ register, setValue }) => {
  const t = useTranslations("cycleOne");
  return (
    <div className="text-primary-black lg:mx-auto lg:w-[70%] bg-opacity-70 p-5 rounded-lg">
      <div className="mt-6 bg-sky-50 rounded-md border-l-2 border-black p-10">
        <h2 className="text-3xl mb-3 text-purple-600 font-semibold text-center">
          {t("Learning Areas")}
        </h2>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          <CheckboxGroup
            subtitle="French (Language and Literature)"
            headbgcolor="#303060"
            options={[
              "Grammar",
              "Oral expression",
              "Reading",
              "Spelling",
              "Text Comprenension",
              "Writting",
              "Writing production",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.frenchLanguageLiterature"
            bgColor="#EBEDFE"
          />

          <CheckboxGroup
            subtitle="Math"
            headbgcolor="#33B1FC"
            options={[
              "Calculations",
              "Geometry",
              "Measures",
              "Numbers",
              "Problems",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.math"
            bgColor="#C0E7FE"
          />
          <CheckboxGroup
            subtitle="Artistic teachings"
            headbgcolor="#D5006D"
            options={["Music Education", "Plastic arts"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.artisticTeachings"
            bgColor="#FFB6C1"
          />

          <CheckboxGroup
            subtitle="Foreign Language 1"
            headbgcolor="#303060"
            options={["Participation", "Vocabulary"]}
            register={register}
            setValue={setValue}
            bgColor="#EBEDFE"
            groupKey="learningAreas.foreignLanguage1"
          />

          <CheckboxGroup
            subtitle="Foreign Language 2"
            headbgcolor="#33B1FC"
            options={["Participation", "Vocabulary"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.foreignLanguage2"
            bgColor="#C0E7FE"
          />

          <CheckboxGroup
            subtitle="Moral and civic education"
            headbgcolor="#D5006D"
            options={["Live together"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.MoralandCivicEducation"
            bgColor="#FFB6C1"
          />

          <CheckboxGroup
            subtitle="Physical Education and Sports"
            headbgcolor="#D65F00"
            options={["Participation", "Respectful of the rules"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            subtitle="Questioning the world"
            headbgcolor="#D65F00"
            options={["Geograpy", "History", "The lessons"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#FFB84D99"
          />
        </div>
      </div>

      {/* Behavior Section */}

      <div className="bg-orange-50 mt-20 p-10 rounded-2xl border-l border-black ">
        <h1 className="text-center text-3xl mb-5 font-bold text-[#D65F00]">
          {t("Behaviors")}
        </h1>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 ">
          <CheckboxGroup
           subtitle=""
            bgColor="#FFB84D33"
            options={[
              "Attentive",
              "Class Driver",
              "Disruptive",
              "Motivate",
              "Shy",
            ]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
           subtitle=""
            bgColor="#FFB84D33"
            options={[
              "Autonomy",
              "Distracted",
              "Focused",
              "RespectFull of the rules",
              "Talkative",
            ]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
           subtitle=""
            bgColor="#FFB84D33"
            options={["Calm", "Dynamism", "Invested", "serious", "Voluntary"]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
        </div>
      </div>

      {/* Improvement Section */}

      <div className="  bg-green-50 mt-20 p-10 rounded-2xl border-l border-black">
        <h1 className="text-center text-3xl mb-5 font-bold text-[#3EB489]">
          {t("Improvements")}
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          <CheckboxGroup
           subtitle=""
            bgColor="#3EB489"
            options={[
              "Attentive",
              "Concentration",
              "Learning",
              "Quality of work",
              "UnderStanding instructions",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
           subtitle=""
            bgColor="#3EB489"
            options={["Autonomy", "Dynamic", "Mathmatics", "Reading"]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
           subtitle=""
            bgColor="#3EB489"
            options={[
              "AttenTion",
              "French",
              "Problem-solving",
              "Understanding reading text",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningAreaSectionTwo;
