import CheckboxGroup from "@/components/CheckBox";
import { useTranslations } from "next-intl";

const LearningAreasSection = ({ register, setValue }) => {
  const t = useTranslations("cycleOne");
  return (
    <div className="text-primary-black lg:mx-auto lg:w-[70%] bg-opacity-70 p-5 rounded-lg">
      <div className="mt-6 bg-sky-50 rounded-md border-l border-black p-10">
        <h2 className="text-3xl mb-3 text-purple-600 font-semibold text-center">
          {t("Learning Areas")}
        </h2>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
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
              "Discovering simple words",
              "Expressing oneself clearly",
              "Understanding instructions",
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
            options={["Expressing oneself through rhythm", "Singing"]}
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
              "Knowing how to orient oneself",
              "Understanding time (days, months, seasons)",
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

        <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-10 mt-20">
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

      {/* Behavior Section */}

      <div className="bg-orange-50 mt-20 p-10 border-l border-black rounded-lg">
        <h1 className="text-center text-3xl mb-5 font-bold text-[#D65F00]">
          {t("Behaviors")}
        </h1>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 ">
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#FFB84D33"
            options={[
              "Autonomous",
              "Disruptive",
              "Living together",
              "Talkative",
            ]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#FFB84D33"
            options={["Calm", "Dynamic", "RespectFul of rules", "Voluntary"]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#FFB84D33"
            options={["Curious", "Focused", "Shy"]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
        </div>
      </div>

      {/* Improvement Section */}

      <div className="  bg-green-50 mt-20 p-10 border-l border-black rounded-lg ">
        <h1 className="text-center text-3xl mb-5 font-bold text-[#3EB489]">
          {t("Improvements")}
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={["Autonomy", "Motor skills", "Sociability"]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={[
              "Emotion management",
              "Oral language",
              "Understanding instructions",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={["Listening", "Respect for rules"]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningAreasSection;
