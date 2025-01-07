import React from "react";
import AddTeacher from "./_component/AddTeacher";
import RecentUser from "@/components/UpgradeAccount/RecentUser/RecentUser";

const page = () => {
  return (
    <div
      className="h-full bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(/schoolAccount.png)" }}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-10 bg-[#AED2D2] bg-opacity-60 py-20">
        <div className="mx-auto mt-40 w-[80%] space-y-5 rounded-md bg-white p-5 py-10">
          <h1 className="text-center text-2xl font-bold">
            Bulk Teacher Addition
          </h1>
          <p className="text-center">
            School administrators can add new teachers anytime during the
            subscription period.
          </p>
        </div>
        <AddTeacher />
        <RecentUser />
      </div>
    </div>
  );
};

export default page;
