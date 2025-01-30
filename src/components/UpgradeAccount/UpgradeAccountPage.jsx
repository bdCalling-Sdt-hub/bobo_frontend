import Image from "next/image";
import React from "react";
import up1 from "/public/up1.png";
import up2 from "/public/up2.png";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
const UpgradeAccountPage = () => {
  const card = [
    {
      title: "Upgrade to an Individual Teacher Account",
      features: [
        "Gain exclusive access to your selected cycle or all cycles based on your subscription plan.",
        "Perfect for teachers who prefer managing their own accounts independently.",
        "Choose from short-term, full-year, or extended-year plans based on your needs.",
        "View and manage your subscription details directly from your profile.",
        "Designed for individual teachers with budget-friendly options.",
      ],
      buttonText: "Upgrade",
      image: up1,
      path: "/auth/register",
    },
    {
      title: "Upgrade to a School Account",
      features: [
        "Provide access to multiple teachers under one account, ensuring your school benefits as a team.",
        "Manage teacher accounts easily, including bulk teacher additions and subscription management.",
        "Access all available cycles for comprehensive teaching support across the academic year.",
        "Easily add new teachers to the account at any point during the subscription period.",
        "Generate invoices for school records and also access detailed reporting on teacher usage.",
      ],
      buttonText: "Upgrade",
      image: up2,
      path: "/schoolAccountAuth/initialForm",
    },
  ];

  return (
    <div
      className="h-screen items-center justify-center bg-cover bg-center md:flex"
      style={{ backgroundImage: "url(/authbg.png)" }}
    >
      <div className="flex-col items-center rounded-lg bg-gray-50 p-5 md:flex md:px-20 md:py-20">
        <h1 className="mb-6 text-center font-semibold text-gray-800 md:text-2xl">
          Your trial has ended! Continue using our platform by upgrading to one
          of the plans below.
        </h1>
        <div className="grid w-full grid-cols-1 gap-10 md:w-[900px] md:grid-cols-2">
          {card.map((card, index) => (
            <div
              key={index}
              className="w-full flex-col items-center rounded-lg border bg-white p-6 text-center shadow-md md:flex"
            >
              <Image
                src={card.image}
                width={1200}
                height={1200}
                alt={card.title}
                className="mb-4 h-auto w-full translate-x-0 cursor-pointer bg-white duration-1000 hover:scale-95"
              />
              <h2 className="mb-4 text-xl font-bold text-gray-700">
                {card.title}
              </h2>
              <ul className="mb-6 space-y-2 text-gray-600">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-xl text-green-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={card.path} className="w-full">
                <Button className="hover: w-full rounded-md bg-purple-950 px-6 py-2 text-xl text-white hover:border-2 hover:border-black hover:bg-transparent hover:text-black">
                  {card.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpgradeAccountPage;
