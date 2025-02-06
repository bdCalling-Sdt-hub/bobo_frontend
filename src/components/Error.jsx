"use client";
import { useRouter } from "@/i18n/routing";
import React from "react";
import { Button } from "./ui/button";

const ErrorPage = ({ statusCode, message }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-center text-4xl font-bold text-red-500">
          {statusCode || "Opps !"}
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          {message || "Oops! Something went wrong. Please try again later."}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button
            onClick={() => router.back()}
            className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
