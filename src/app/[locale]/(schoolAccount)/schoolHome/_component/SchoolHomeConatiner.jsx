import React from "react";
import AddTeacher from "./AddTeacher";
import TeachersTable from "@/components/SchoolAccount/TeachersTable";
import { useTranslations } from "next-intl";

const SchoolHomeConatiner = () => {
  const t = useTranslations("personalInformation");
  return (
    <div
      className="h-full bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(/schoolAccount.png)" }}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-10 bg-[#AED2D2] bg-opacity-60 py-20">
        <div className="mx-2 mt-10 space-y-5 rounded-md bg-white p-5 py-10 md:mx-auto md:w-[80%]">
          <h1 className="text-center text-2xl font-bold">
            {t("Bulk Teacher Addition")}
          </h1>
          <p className="text-center">{t("Description")}.</p>
        </div>
        <AddTeacher />
        <TeachersTable />
      </div>
    </div>
  );
};

export default SchoolHomeConatiner;
