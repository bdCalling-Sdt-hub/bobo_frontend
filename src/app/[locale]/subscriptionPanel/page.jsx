import SubsCriptionPanel from "@/components/SubscriptionPanel/SubsCriptionPanel";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto flex h-screen w-full items-center justify-center bg-[url('/subscription.png')] bg-cover bg-no-repeat">
      <SubsCriptionPanel />
    </div>
  );
};

export default page;
