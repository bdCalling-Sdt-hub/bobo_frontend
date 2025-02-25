import React from "react";
import RegisterForm from "./component/RegisterForm";

const page = () => {
  return (
    <div
      className="flex h-full items-center justify-center bg-cover bg-center xl:h-screen"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default page;
