import SchoolAccountDelete from "@/components/SchoolAccount/settings/SchoolAccountDelete";
import SchoolChangePassword from "@/components/SchoolAccount/settings/SchoolChangePassword";
import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <SchoolChangePassword />
      <SchoolAccountDelete />
    </div>
  );
};

export default page;
