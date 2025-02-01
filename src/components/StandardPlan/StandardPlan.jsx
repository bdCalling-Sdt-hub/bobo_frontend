"use client";
import React from "react";
import { PricingCard } from "../PricingCard/PricingCard";
import { useGetStanderdPackagesQuery } from "@/redux/api/packageApi";
import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorPage from "../Error";

const PricingTable = () => {
  const {
    data: plans,
    isError,
    isLoading,
    error,
  } = useGetStanderdPackagesQuery();

  if (!plans)
    return (
      <ErrorPage message="Something went wrong please try again latter " />
    );

  console.log("plans: ", plans?.data);

  const Pakage = plans?.data;

  if (isLoading)
    return (
      <div>
        <CustomLoader />
      </div>
    );
  if (isError)
    return (
      <ErrorPage
        statusCode={error?.status}
        message="Failed to fetch pricing plans."
      />
    );

  const decodeHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="mx-auto flex h-full min-h-screen w-full flex-col items-center justify-center bg-[url('/subscription.png')] bg-cover bg-no-repeat py-10 pt-40">
      <div className="m-5 rounded-md bg-subs p-2 pb-10 md:p-20">
        <h1 className="mb-4 text-center text-lg font-bold text-white md:text-3xl">
          Standard Plan: Access to one cycle of your choice
        </h1>
        <p className="mb-8 text-center text-lg text-white">
          Select a single cycle to get started with tailored features for your
          teaching journey.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {Pakage.map((plan, index) => (
            <PricingCard
              id={plan._id}
              key={index}
              price={plan.price}
              title={decodeHTML(plan.shortTitle)}
              duration={plan.duration}
              description={plan.shortDescription}
              comments={plan.comment_limit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
