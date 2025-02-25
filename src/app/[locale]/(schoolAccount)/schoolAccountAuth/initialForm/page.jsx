import InitialForm from "@/components/SchoolAccount/SchoolAccountAuth/InitialForm";
import React from "react";

const page = () => {
  return (
    <div
      className="flex h-full items-center justify-center bg-cover bg-center xl:h-screen"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <InitialForm />
    </div>
  );
};

export default page;
