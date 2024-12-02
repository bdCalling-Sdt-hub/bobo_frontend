"use client";

import CheckboxGroup from "@/components/CheckBox";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const LearningAreaSectionTwo = ({
  reset,
  resetState,
  register,
  setValue,
  options,
  groupKey,
}) => {
  const t = useTranslations("cycleOne");
  const [selectedLanguages, setSelectedLanguages] = useState({
    language1: "",
    language2: "",
  });

  const handleDropdownChange = (field, value) => {
    setSelectedLanguages((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  useEffect(() => {
    if (resetState) {
      // Reset the checkboxes (but not the dropdown values)
      setSelectedLanguages((prev) => ({
        ...prev,
        language1: "",
        language2: "",
      }));

      // Reset the checkbox form values using reset()
      reset({
        [groupKey]: options.reduce((acc, option) => {
          acc[option] = null; // Reset all options to null for checkboxes
          return acc;
        }, {}),
      });
    }
  }, [resetState, options, reset, groupKey]);
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
            headbgcolor="#33B1FC"
            options={[
              "Text Comprehension",
              "Oral expression",
              "Writing",
              "Grammar",
              "Reading",
              "Spelling",

              "Writing production",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.frenchLanguageLiterature"
            bgColor="#C0E7FE"
          />

          <CheckboxGroup
            title=""
            subtitle="Math"
            headbgcolor="#D65F00"
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
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            title=""
            subtitle="Artistic teachings"
            headbgcolor="#D5006D"
            options={["Plastic arts", "Music Education"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.artisticTeachings"
            bgColor="#FFB6C1"
          />

          {/* Dropdown for Foreign Language 1 */}

          <div className="mt-3 grid w-full gap-1.5 bg-[#FF72564D] p-3 rounded-3xl">
            <div>
              <select
                id="ForeignLanguage1"
                value={selectedLanguages.language1}
                className="w-full rounded-2xl bg-[#CC4A31] text-white text-center px-4 py-3"
                {...register("Foreign Language 1")}
                onChange={(e) =>
                  handleDropdownChange("language1", e.target.value)
                }
              >
                <option value="" disabled hidden>
                  {t("Foreign Language 1")}
                </option>
                <option value="Anglais">Anglais</option>
                <option value="Arabe">Arabe</option>
                <option value="Germany">{t("Germany")}</option>
                <option value="Chinese">{t("Chinese")}</option>
                <option value="Espagnol">Espagnol</option>
                <option value="Italien">Italien</option>
                <option value="Portugais">Portugais</option>
              </select>

              {/* Show the selected language title */}
              {selectedLanguages.language1 && (
                <h3 className="mt-2 text-xl text-purple-600 font-semibold">
                  {t("Foreign Language 1")}:( {t(`${selectedLanguages.language1}`)})
                </h3>
              )}

              <CheckboxGroup
                title=""
                subtitle=""
                options={["Participation", "Vocabulary"]}
                register={register}
                setValue={setValue}
                bgColor=""
                groupKey={`learningAreas.${selectedLanguages.language1}`}
              />
            </div>
          </div>

          {/* Dropdown for Foreign Language 2 */}

          <div className="mt-3 grid w-full gap-1.5 bg-[#FFFFE0] p-3 rounded-3xl">
            <div>
              <select
                id="ForeignLanguage2"
                value={selectedLanguages.language2}
                className="w-full rounded-2xl bg-[#D4A017] text-white text-center px-4 py-3"
                {...register("Foreign Language 2")}
                onChange={(e) =>
                  handleDropdownChange("language2", e.target.value)
                }
              >
                <option value="" disabled hidden>
                  {t("Foreign Language 2")}
                </option>
                <option value="Anglais">Anglais</option>
                <option value="Arabe">Arabe</option>
                <option value="Germany">{t("Germany")}</option>
                <option value="Chinese">{t("Chinese")}</option>
                <option value="Espagnol">Espagnol</option>
                <option value="Italien">Italien</option>
                <option value="Portugais">Portugais</option>
              </select>

              {/* Show the selected language title */}
              {selectedLanguages.language2 && (
                <h3 className="mt-2 text-xl text-purple-600 font-semibold">
                  {t("Foreign Language 2")}: ({t(`${selectedLanguages.language2}`)})
                </h3>
              )}

              <CheckboxGroup
                title=""
                subtitle=""
                options={["Participation", "Vocabulary"]}
                register={register}
                setValue={setValue}
                bgColor="#FFFFE0"
                groupKey={`learningAreas.${selectedLanguages.language2}`}
              />
            </div>
          </div>

          <CheckboxGroup
            title=""
            subtitle="Moral and civic education"
            headbgcolor="#3EB489"
            options={["Live together"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.MoralandCivicEducation"
            bgColor="#BDFCC9"
          />

          <CheckboxGroup
            title=""
            subtitle="Physical Education and Sports"
            headbgcolor="#303060"
            options={["Participation", "Respectful of the rules"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#EBEDFE"
          />

          <CheckboxGroup
            title=""
            subtitle="Questioning the world"
            headbgcolor="#000080"
            options={["Geograpy", "History", "The lessons"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#5A7CA533"
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
            options={["Attentive", "Calm", "Distracted", "Motivate", "serious"]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#FFB84D33"
            options={["Autonomy", "Focused", "Invested", "Disruptive", "Shy"]}
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
              "Dynamism",
              "Class Driver",
              "Respectful of the rules",
              "Voluntary",
            ]}
            register={register}
            setValue={setValue}
            groupKey="behavior"
          />
        </div>
      </div>

      {/* Improvement Section */}

      <div className="bg-green-50 mt-20 p-10 rounded-2xl border-l border-black">
        <h1 className="text-center text-3xl mb-5 font-bold text-[#3EB489]">
          {t("Improvements")}
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={["Learning", "Concentration", "Dynamic", "Mathmatics"]}
            hideMinusFor={[
              "Attentive",
              "Concentration",
              "Learning",
              "Quality of work",
              "Dynamic",
              "UnderStanding instructions",
              "Mathmatics",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={[
              "Autonomy",
              "Understanding reading text",
              "French",
              "Problem-solving",
            ]}
            hideMinusFor={[
              "Autonomy",
              "Dynamic",
              "Understanding reading text",
              "French",
              "Mathmatics",
              "Problem-solving",
              "Reading",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={[
              "Attention",
              "UnderStanding instructions",
              "Reading",
              "Quality of work",
            ]}
            hideMinusFor={[
              "Attention",
              "French",
              "Problem-solving",
              "Understanding reading text",
              "Reading",
              "UnderStanding instructions",
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

export default LearningAreaSectionTwo;
