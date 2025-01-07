import React from "react";
import RegisterForm from "./component/RegisterForm";

const page = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default page;
