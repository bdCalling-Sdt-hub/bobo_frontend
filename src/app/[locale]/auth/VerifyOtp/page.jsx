import React from "react";
import VerifyOtpForm from "./_component/VerifyOtpForm";

const page = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <VerifyOtpForm />
    </div>
  );
};

export default page;
