import CheckboxGroup from "@/components/CheckBox";
import { useTranslations } from "next-intl";

const LearningAreasSection = ({ register, setValue }) => {
  const t = useTranslations("cycleOne");
  return (
    <div className="text-primary-black rounded-lg bg-opacity-70 p-5 lg:mx-auto lg:w-[70%]">
      <div className="mt-6 rounded-md border-l border-black bg-sky-50 p-10">
        <h2 className="mb-3 text-center text-3xl font-semibold text-purple-600">
          {t("Learning Areas")}
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <CheckboxGroup
            title="Acquire basic mathematical tools"
            subtitle="Early Mathematical Concepts"
            headbgcolor="#303060"
            options={[
              "Comparing Quantities",

              "Discovery of Numbers",
              "Recognizing Shapes",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematicalTools"
            bgColor="#EBEDFE"
            color="#303060"
          />

          <CheckboxGroup
            title="Mobilize language in all its dimensions"
            subtitle="Oral Language"
            headbgcolor="#33B1FC"
            color="#33B1FC"
            options={[
              "Understanding instructions",
              "Discovering simple words",
              "Expressing oneself clearly",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mobilizelanguage"
            bgColor="#C0E7FE"
          />
          <CheckboxGroup
            title="Act,express,understand through artistic activities"
            subtitle="Music Education"
            headbgcolor="#3EB489"
            color="#3EB489"
            options={["Singing", "Expressing oneself through rhythm"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.artisticactivities"
            bgColor="#BDFCC9"
          />

          <CheckboxGroup
            title=""
            subtitle="Time and Space"
            headbgcolor="#303060"
            options={[
              "Understanding time (days, months, seasons)",
              "Knowing how to orient oneself",
            ]}
            register={register}
            setValue={setValue}
            bgColor="#EBEDFE"
            groupKey="learningAreas.mathematicalTools"
          />

          <CheckboxGroup
            title=""
            subtitle="Written Language"
            headbgcolor="#33B1FC"
            options={[
              "Familiarization with writing",
              "Recognition of letters and words",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mobilizelanguage"
            bgColor="#C0E7FE"
          />

          <CheckboxGroup
            title=""
            subtitle="Visual Arts"
            headbgcolor="#3EB489"
            options={["Collage and assembly", "Drawing and painting"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.artisticactivities"
            bgColor="#BDFCC9"
          />
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-2">
          <CheckboxGroup
            title="Act,express,understand through artistic activities"
            subtitle="Fine Motor Skills"
            headbgcolor="#D65F00"
            color="#D65F00"
            options={["Manipulation of objects", "Precision of movements"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            title="Explore the world"
            subtitle="Discovery of matter"
            headbgcolor="#D5006D"
            color="#D5006D"
            options={["Understanding life cycles"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.exploretheworld"
            bgColor="#FFB6C1"
          />
          <CheckboxGroup
            title=""
            subtitle="Gross Motor Skills"
            headbgcolor="#D65F00"
            options={[
              "Coordination of movements",
              "Participation in physical activities",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            title=""
            subtitle="Discovry of living things"
            headbgcolor="#D5006D"
            options={["Discovering materials and objects"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.exploretheworld"
            bgColor="#FFB6C1"
          />
        </div>
      </div>

      {/*======================================= Behavior Section======================================== */}

      <div className="mt-20 rounded-lg border-l border-black bg-orange-50 p-10">
        <h1 className="mb-5 text-center text-3xl font-bold text-[#D65F00]">
          {t("Behaviors")}
        </h1>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#FFB84D33"
            options={["Autonomous", "Calm", "Disruptive", "Living together"]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#FFB84D33"
            options={[
              "Talkative",
              "Focused",
              "RespectFul of rules",
              "Voluntary",
            ]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#FFB84D33"
            options={["Curious", "Dynamic", "Shy"]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
        </div>
      </div>

      {/* ===========================Improvement Section============================= */}

      <div className="mt-20 rounded-lg border-l border-black bg-green-50 p-10">
        <h1 className="mb-5 text-center text-3xl font-bold text-[#3EB489]">
          {t("Improvements")}
        </h1>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={["Autonomy", "Emotion management", "Respect for rules"]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
            hideMinusFor={[
              "Autonomy",
              "Listening",
              "Emotion management",
              "Motor skills",
              "Respect for rules",
              "Sociability",
            ]}
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={[
              "Understanding instructions",
              "Oral language",
              "Sociability",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
            hideMinusFor={[
              "Emotion management",
              "Oral language",
              "Understanding instructions",
              "Sociability",
            ]}
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={["Listening", "Motor skills"]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
            hideMinusFor={[
              "Motor skills",
              "Listening",
              "Sociability",
              "Oral language",
              "Respect for rules",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningAreasSection;
