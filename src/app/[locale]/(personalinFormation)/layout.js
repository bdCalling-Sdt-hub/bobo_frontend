
import Sidebar from "@/components/personalinformation/Sideber";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-mainColor lg:h-screen h-full flex">

      {/* Sidebar */}
     <div className="md:flex mx-auto lg:w-[80%] md:p-5  ">
    <div className="mt-[130px]">
    <Sidebar />
    </div>
     <main className="lg:flex-1  md:p-8 md:mt-[85px] ">{children}</main>
     </div>
     


    </div>
  );
};

export default Layout;
