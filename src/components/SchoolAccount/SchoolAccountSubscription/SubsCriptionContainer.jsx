import React from "react";
import SchoolCurrentPlan from "./SchoolCurrentPlan";
import SchoolUpgradePlan from "./SchoolUpgradePlan";

const SchoolSubsCriptionContainer = () => {
  return (
    <div className="bg-white bg-opacity-70 p-10">
      <SchoolCurrentPlan />
      <SchoolUpgradePlan />
    </div>
  );
};

export default SchoolSubsCriptionContainer;
