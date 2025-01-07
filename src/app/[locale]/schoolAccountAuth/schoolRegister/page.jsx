import React from "react";
import SchoolRegisterForm from "./_component/SchoolRegisterForm";

const page = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <SchoolRegisterForm />
    </div>
  );
};

export default page;
