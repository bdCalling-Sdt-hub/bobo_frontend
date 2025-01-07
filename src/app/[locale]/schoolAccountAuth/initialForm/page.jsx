import InitialForm from "@/components/SchoolAccountAuth/InitialForm";
import React from "react";

const page = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <InitialForm />
    </div>
  );
};

export default page;
