import React from "react";
import { PricingCard } from "../PricingCard/PricingCard";

const PricingTable = () => {
  const plans = [
    {
      price: "€8.99",
      title: "Short-Term Plan",
      duration: "(1 Term / 1 Semester)",
      description:
        "This plan covers a single period, ideal for limited use or an extended trial.",
      comments: 30,
    },
    {
      price: "€16.99",
      title: "Full-Year Plan",
      duration: "(2 Terms / 2 Semesters)",
      description:
        "This plan covers an entire year in systems operating by semesters or two terms in systems operating by terms.",
      comments: 60,
    },
    {
      price: "€24.47",
      title: "Extended-Year Plan",
      duration: "(3 Terms / 3 Periods)",
      description:
        "This plan covers a full year in systems operating by terms.",
      comments: 90,
    },
  ];

  return (
    <div className="mx-auto flex h-screen min-h-screen w-full flex-col items-center justify-center bg-[url('/subscription.png')] bg-cover bg-no-repeat py-10 pt-40">
      <div className="bg-subs rounded-md p-20">
        <h1 className="mb-4 text-center text-3xl font-bold text-white">
          Standard Plan: Access to one cycle of your choice
        </h1>
        <p className="mb-8 text-center text-lg text-white">
          Select a single cycle to get started with tailored features for your
          teaching journey.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              price={plan.price}
              title={plan.title}
              duration={plan.duration}
              description={plan.description}
              comments={plan.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
