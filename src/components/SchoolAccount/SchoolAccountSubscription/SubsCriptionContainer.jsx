import React from "react";
import CurrentPlan from "@/components/SubsCription/CurrentPlan";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const SchoolSubsCriptionContainer = () => {
  const t = useTranslations("personalInformation");
  return (
    <div className="bg-white bg-opacity-70 p-10">
      <CurrentPlan />
      <div className="mt-10 flex items-center justify-center gap-10">
        <Link href={"/premiumPlanForSchoolAccount"}>
          <button className="mt-5 w-full items-center rounded-lg border-2 border-black bg-darkBlue p-1 px-3 text-lg text-white hover:border hover:bg-transparent hover:text-black">
            {t("Upgrade Premium")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolSubsCriptionContainer;
