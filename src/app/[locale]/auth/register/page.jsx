import React from "react";
import RegisterForm from "./component/RegisterForm";

const page = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default page;
