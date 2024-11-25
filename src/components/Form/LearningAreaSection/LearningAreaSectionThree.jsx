import CheckboxGroup from "@/components/CheckBox";
import { useTranslations } from "next-intl";

const LearningAreaSectionThree = ({ register, setValue }) => {
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
              "Conjugation",
              "Dictation",
              "Grammar",
              "Oral expression",
              "Reading",
              "Text Comprenension",
              "Writing production",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.frenchLanguageLiterature"
            bgColor="#EBEDFE"
          />

          <CheckboxGroup
            subtitle="Mathematics"
            headbgcolor="#33B1FC"
            options={[
              "Data analysis",
              "Geometry",
              "Measurement and units",
              "Numbers and calculation",
              "Problem-solving",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematics"
            bgColor="#C0E7FE"
          />
          <CheckboxGroup
            subtitle="Artistic Education"
            headbgcolor="#D5006D"
            options={["Music Education", "Visual Arts"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.artisticEducation"
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
            subtitle="History and Geography"
            headbgcolor="#D5006D"
            options={["Geography", "History"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.historyandGeography"
            bgColor="#FFB6C1"
          />

          <CheckboxGroup
            subtitle="Citizenship"
            headbgcolor="#D65F00"
            options={["Respect for others", "Sense of responsibility"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.citizenship"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            subtitle="Sports Activitise"
            headbgcolor="#D65F00"
            options={["Participation", "Respect for rule", "Team spirit"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            subtitle="Science and Technology"
            headbgcolor="#D65F00"
            options={["Computer Science", "Life And Earth Science"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.scienceTechnology"
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
              "Distracted",
              "Exemplary",
              "Oral Language",
              "Responsible",
            ]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
           subtitle=""
            bgColor="#FFB84D33"
            options={[
              "Autonomous",
              "Dynamic",
              "Motivated",
              "Passive",
              "Talkative",
            ]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
           subtitle=""
            bgColor="#FFB84D33"
            options={[
              "Class motivator",
              "Disruptive",
              "Organized",
              "Respectful",
            ]}
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
              "Autonomy",
              "Geographic knowledge",
              "Mathematics",
              "Respect for rules",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
           subtitle=""
            bgColor="#3EB489"
            options={[
              "French",
              "Group activities",
              "Physical education",
              "Time management",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
            bgColor="#3EB489"
            subtitle=""
            options={[
              "Foreign language",
              "Historical knowledge",
              "Participation",
              "Quality of work",
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

export default LearningAreaSectionThree;
