import React from "react";
import ForgetPasswordForm from "./component/ForgetPasswordForm";

const page = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/authbg.png)" }}
      >
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default page;
