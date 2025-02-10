import React from "react";
import CurrentPlan from "./CurrentPlan";
import { Link } from "@/i18n/routing";
import { Divide } from "lucide-react";
// import UpgradePlan from "./UpgradePlan";

const SubsCriptionContainer = () => {
  return (
    <div className="mt-2 bg-white bg-opacity-70 p-2 lg:p-10">
      <h1 className="text-xl font-bold">My Running Subcriptions :</h1>
      <CurrentPlan />

      {/* update plan  */}

      <div className="mt-10 flex items-center justify-center gap-10">
        <Link href={"/standardPlan"}>
          <button className="mt-5 w-full items-center rounded-lg border-2 border-black bg-darkBlue p-1 px-3 text-lg text-white hover:border hover:bg-transparent hover:text-black">
            Upgrade Standard
          </button>
        </Link>
        <Link href={"/premiumPlan"}>
          <button className="mt-5 w-full items-center rounded-lg border-2 border-black bg-darkBlue p-1 px-3 text-lg text-white hover:border hover:bg-transparent hover:text-black">
            Upgrade Premium
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubsCriptionContainer;
