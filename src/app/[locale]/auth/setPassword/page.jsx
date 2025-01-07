import React from "react";
import SetPasswordForm from "./_component/SetPasswordForm";

const page = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <SetPasswordForm />
    </div>
  );
};

export default page;
