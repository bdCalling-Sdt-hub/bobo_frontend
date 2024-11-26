import CheckboxGroup from "@/components/CheckBox";
import { Popover } from "@headlessui/react";
import { Label } from "@radix-ui/react-label";
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
            title=""
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
            title=""
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
            title=""
            subtitle="Artistic teachings"
            headbgcolor="#D5006D"
            options={["Music Education", "Plastic arts"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.artisticTeachings"
            bgColor="#FFB6C1"
          />

          {/* <CheckboxGroup
            title=""
            subtitle="Foreign Language 1"
            headbgcolor="#303060"
            options={["Participation", "Vocabulary"]}
            register={register}
            setValue={setValue}
            bgColor="#EBEDFE"
            groupKey="learningAreas.foreignLanguage1"
          /> */}
            <div className="mt-8 grid w-full items-center gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="toneOfVoice" className="font-semibold">
              {t("Select Tone Of Voice")}
            </Label>
            <Popover className="relative">
              <Popover.Button className="text-blue-500 cursor-help">
                ?
              </Popover.Button>
              <Popover.Panel className="absolute z-10 bg-white p-4 rounded shadow-lg mt-2 w-48">
                Choose the tone of voice preferred for communication
              </Popover.Panel>
            </Popover>
          </div>
          <div className="relative">
            <select
              id="toneOfVoice"
              placeholder="Tone of voice "
              className="w-full border rounded-md border-black bg-transparent px-4 py-3"
              {...register("toneOfVoice", {
                required: t("Tone of Voice is required"),
              })}
            >
              <option value="Caring">{t("Caring")}</option>
              <option value="Encouraging">{t("Encouraging")}</option>
              <option value="Enthusiastic">{t("Enthusiastic")}</option>
              <option value="Rigorous">{t("Rigorous")}</option>
            </select>
          </div>
         
        </div>

          <CheckboxGroup
            title=""
            subtitle="Foreign Language 2"
            headbgcolor="#33B1FC"
            options={["Participation", "Vocabulary"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.foreignLanguage2"
            bgColor="#C0E7FE"
          />

          <CheckboxGroup
            title=""
            subtitle="Moral and civic education"
            headbgcolor="#D5006D"
            options={["Live together"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.MoralandCivicEducation"
            bgColor="#FFB6C1"
          />

          <CheckboxGroup
            title=""
            subtitle="Physical Education and Sports"
            headbgcolor="#D65F00"
            options={["Participation", "Respectful of the rules"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            title=""
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
            title=""
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
            title=""
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
            title=""
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
            title=""
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
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={["Autonomy", "Dynamic", "Mathmatics", "Reading"]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
            title=""
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
