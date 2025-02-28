import React from "react";
import SchoolRegisterForm from "./_component/SchoolRegisterForm";

const page = () => {
  return (
    <div
      className="flex h-full items-center justify-center bg-cover bg-center p-10 md:h-screen md:p-0"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <SchoolRegisterForm />
    </div>
  );
};

export default page;
