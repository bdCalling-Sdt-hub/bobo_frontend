import TeachersTable from "@/components/SchoolAccount/TeachersTable";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import React from "react";

const page = () => {
  return (
    <div className="h-screen space-y-5 rounded-md bg-[#EBF7FF] p-3">
      <h1 className="border-b-2 p-3 text-center text-3xl">Teacher Profile</h1>

      <Link href={"/schoolHome"}>
        <Button className="w-full rounded-sm bg-[#303060] text-white">
          Add Additional Teacher
        </Button>
      </Link>
      <TeachersTable />
    </div>
  );
};

export default page;
