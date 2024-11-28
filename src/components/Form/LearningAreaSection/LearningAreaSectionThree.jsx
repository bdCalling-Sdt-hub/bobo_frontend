"use client";

import CheckboxGroup from "@/components/CheckBox";
import { useTranslations } from "next-intl";
import { useState } from "react";

const LearningAreaSectionThree = ({ register, setValue }) => {
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
              "Conjugation",
              "Text Comprehension",
              "Dictation",
              "Oral expression",
              "Grammar",
              "Reading",
              "Writing production",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.frenchLanguageLiterature"
            bgColor="#C0E7FE"
          />

          <CheckboxGroup
            title=""
            subtitle="Mathematics"
            headbgcolor="#D65F00"
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
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            title=""
            subtitle="Artistic Education"
            headbgcolor="#D5006D"
            options={[ "Visual Arts","Music Education", ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.artisticEducation"
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
                <option value="Espagnol">Espagnol</option>
                <option value="Italien">Italien</option>
                <option value="Portugais">Portugais</option>
              </select>

              {/* Show the selected language title */}
              {selectedLanguages.language1 && (
                <h3 className="mt-2 text-xl text-purple-600 font-semibold">
                  {t("Foreign Language 1")}:( {selectedLanguages.language1})
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
                <option value="Espagnol">Espagnol</option>

                <option value="Portugais">Portugais</option>
              </select>

              {/* Show the selected language title */}
              {selectedLanguages.language2 && (
                <h3 className="mt-2 text-xl text-purple-600 font-semibold">
                  {t("Foreign Language 2")}: ({selectedLanguages.language2})
                </h3>
              )}

              <CheckboxGroup
                title=""
                subtitle=""
                options={["Participation", "Vocabulary"]}
                register={register}
                setValue={setValue}
                bgColor=""
                groupKey={`learningAreas.${selectedLanguages.language2}`}
              />
            </div>
          </div>
          {/* 
          <CheckboxGroup
            title=""
            subtitle="Foreign Language 2"
            headbgcolor="#33B1FC"
            options={["Participation", "Vocabulary"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.foreignLanguage2"
            bgColor="#C0E7FE"
          /> */}

          <CheckboxGroup
            title=""
            subtitle="History and Geography"
            headbgcolor="#000080"
            options={["Geography", "History"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.historyandGeography"
            bgColor="#5A7CA533"
          />

          <CheckboxGroup
            title=""
            subtitle="Citizenship"
            headbgcolor="#303060"
            options={["Respect for others", "Sense of responsibility"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.citizenship"
            bgColor="#EBEDFE"
          />
          <CheckboxGroup
            title=""
            subtitle="Sports Activitise"
            headbgcolor="#3EB489"
            options={["Team spirit","Participation", "Respect for rule", ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.physicalactivity"
            bgColor="#BDFCC9"
          />
          <CheckboxGroup
            title=""
            subtitle="Science and Technology"
            headbgcolor="#4E4E4E"
            options={["Computer Science", "Life And Earth Science"]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.scienceTechnology"
            bgColor="#D3D3D3"
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
              "Distracted",
             
              "Oral Language",
              "Organized",
              "Responsible",
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
              "Autonomous",
             
              "Dynamic",
              "Motivated",
              "Passive",
              "Respectful",
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
              "Talkative",
              "Exemplary",
              "Class motivator",
             
              "Disruptive",
         
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
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={[
              
              "Group activities",
              "Geographic knowledge",
              
              "Time management",
              "Participation",
            
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
            hideMinusFor={[
              "Group activities",
              "Time management",
              
              "Time management",
              "Autonomy ",
              "Geographic knowledge",
              "Mathematics",
              "Participation",
              "Respect for rules",
            ]}
          />
          <CheckboxGroup
            title=""
            subtitle=""
            bgColor="#3EB489"
            options={[
              "Autonomy ",
           
              "Physical education",
              "Foreign language",
              "Respect for rules",
             
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
            hideMinusFor={[
              "Autonomy ",
              "Foreign language",
              "French",
              "Group activities",
              "Physical education",
              "Time management",
              "Respect for rules",
            ]}
          />
          <CheckboxGroup
            title=""
            bgColor="#3EB489"
            subtitle=""
            options={[
              "Historical knowledge",
              "French",
              "Mathematics",
             
              "Quality of work",
            ]}
            register={register}
            setValue={setValue}
            groupKey="improvements"
            hideMinusFor={[
              "French",
              "Foreign language",
              "Historical knowledge",
              "Participation",
              "Quality of work",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningAreaSectionThree;
