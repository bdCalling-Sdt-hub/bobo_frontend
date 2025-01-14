import React from "react";
import CurrentPlan from "./CurrentPlan";
import UpgradePlan from "./UpgradePlan";

const SubsCriptionContainer = () => {
  return (
    <div className="mt-2 bg-white bg-opacity-70 p-2 lg:p-10 ">
      <CurrentPlan />
      <UpgradePlan />
    </div>
  );
};

export default SubsCriptionContainer;
