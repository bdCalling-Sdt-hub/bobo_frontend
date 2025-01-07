
import Sidebar from "@/components/personalinformation/Sideber";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-mainColor h-screen flex">
      {/* Sidebar */}
     <div className=" mt-20 flex mx-auto w-[80%] ">
    <div className=" mt-10">
    <Sidebar />
    </div>
     <main className="flex-1 p-8">{children}</main>
     </div>
    </div>
  );
};

export default Layout;
