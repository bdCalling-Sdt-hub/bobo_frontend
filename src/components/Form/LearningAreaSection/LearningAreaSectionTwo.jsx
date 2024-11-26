"use client";

import CheckboxGroup from "@/components/CheckBox";
import { useTranslations } from "next-intl";
import { useState } from "react";

const LearningAreaSectionTwo = ({ register, setValue }) => {
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

          {/* Dropdown for Foreign Language 1 */}
          <div className="mt-3 grid w-full gap-1.5 bg-[#EBEDFE] p-3 rounded-3xl">
            <div>
              <select
                id="ForeignLanguage1"
                defaultValue="" // defaultValue to make it uncontrolled
                className="w-full rounded-2xl bg-purple-900 text-white text-center px-4 py-3"
                {...register("Foreign Language 1", {
                  
                })}
                onChange={
                  (e) => handleDropdownChange("language1", e.target.value) // Identify dropdown by field
                }
              >
                <option value="" disabled hidden>
                  Foreign Language 1
                </option>
                <option value="Anglais">Anglais</option>
                <option value="Arabe">Arabe</option>
                <option value="Espagnol">Espagnol</option>
                <option value="Italien">Italien</option>
                <option value="Portugais">Portugais</option>
              </select>

              {/* Pass the selected dropdown value as groupKey */}
              <CheckboxGroup
                title=""
                subtitle=""
                options={["Participation", "Vocabulary"]}
                register={register}
                setValue={setValue}
                bgColor="#EBEDFE"
                groupKey={`learningAreas.${selectedLanguages.language1}`}
              />
            </div>
          </div>

          {/* Dropdown for Foreign Language 2 */}
          <div className="mt-3 grid w-full gap-1.5 bg-[#EBEDFE] p-3 rounded-3xl">
            <div>
              <select
                id="ForeignLanguage2"
                defaultValue="" // Use defaultValue for an uncontrolled component
                className="w-full rounded-2xl bg-[#33B1FC] text-white text-center px-4 py-3"
                {...register("Foreign Language 2", {
                 
                })}
                onChange={(e) =>
                  handleDropdownChange("language2", e.target.value)
                }
              >
                <option value="" disabled hidden>
                  Foreign Language 2
                </option>
                <option value="Anglais">Anglais</option>
                <option value="Arabe">Arabe</option>
                <option value="Espagnol">Espagnol</option>
                <option value="Italien">Italien</option>
                <option value="Portugais">Portugais</option>
              </select>

              {/* Pass the selected dropdown value as groupKey */}
              <CheckboxGroup
                title=""
                subtitle=""
                options={["Participation", "Vocabulary"]}
                register={register}
                setValue={setValue}
                bgColor="#EBEDFE"
                groupKey={`learningAreas.${selectedLanguages.language2}`}
              />
            </div>
          </div>

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
