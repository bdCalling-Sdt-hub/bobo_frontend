import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "@headlessui/react";

const SchoolCurrentPlan = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-darkBlue">
            Plan Type: Standard Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {/* Price */}
          <p className="text-lg font-medium text-black">Price: €8.99</p>

          {/* Duration */}
          <p className="text-gray-600">
            Duration:{" "}
            <span className="font-medium">
              Short-Term Plan (1 Term / 1 Semester)
            </span>
          </p>

          {/* Comments Remaining */}
          <p className="font-medium text-red-600">
            Comments Remaining:{" "}
            <span className="font-bold">10/30 Comments</span>
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-darkBlue py-2 text-white">
            Renew Plan
          </Button>
        </CardFooter>
      </div>
    </div>
  );
};

export default SchoolCurrentPlan;
