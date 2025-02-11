
import SchoolTeacherAccountSideber from "@/components/SchoolAccount/SchoolTeacherprofileSidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-mainColor  h-full flex min-h-screen">

      {/* Sidebar */}
     <div className="md:flex mx-auto lg:w-[80%] md:p-5 w-full">
    <div className="mt-[130px]">
 <SchoolTeacherAccountSideber/>
    </div>
     <main className="lg:flex-1  md:p-8 md:mt-[85px] p-5 ">{children}</main>
     </div>
     


    </div>
  );
};

export default Layout;
