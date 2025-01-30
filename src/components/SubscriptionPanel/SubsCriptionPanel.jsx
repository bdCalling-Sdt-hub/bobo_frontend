import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

const SubsCriptionPanel = () => {
  return (
    <div className="mx-2 mt-28 rounded-lg bg-subs p-8 py-20 text-center md:w-[50%]">
      <h1 className="mb-4 text-2xl font-bold text-white">
        Upgrade to an Individual Teacher Account
      </h1>
      <p className="mb-6 text-base text-white">
        Choose a plan that fits your teaching needs and gain full access to our
        platform.
      </p>
      <div className="justify-center gap-6 space-y-5 md:flex md:space-y-0">
        {/* Standard Plan */}
        <div className="rounded-lg bg-white p-6 text-center shadow-lg md:w-1/2">
          <h2 className="mb-2 text-lg font-semibold text-black">
            Standard Plan
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Access to one cycle of your choice
          </p>
          <Link href={"/standardPlan"}>
            <Button className="w-full rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
              Get Started
            </Button>
          </Link>
        </div>
        {/* Premium Plan */}
        <div className="rounded-lg bg-white p-6 text-center shadow-lg md:w-1/2">
          <h2 className="mb-2 text-lg font-semibold text-black">
            Premium Plan
          </h2>
          <p className="mb-4 text-sm text-gray-600">Access to all cycles</p>
          <Link href={"/premiumPlan"}>
            <Button className="w-full rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubsCriptionPanel;
