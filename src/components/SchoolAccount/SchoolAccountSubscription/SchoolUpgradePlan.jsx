import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SchoolUpgradePlan = () => {
  const plans = [
    {
      price: "€16.99",
      title: "Full-Year Plan (2 Terms / 2 Semesters)",
      description:
        "This plan covers an entire year in systems operating by semesters or two terms in systems operating by terms. Includes 60 comments.",
      buttonText: "Upgrade now",
    },
    {
      price: "€24.47",
      title: "Extended-Year Plan (3 Terms / 3 Periods)",
      description:
        "This plan covers a full year in systems operating by terms. Includes 90 comments.",
      buttonText: "Upgrade now",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto mt-5 space-y-8">
      {/* Header */}
      <h2 className="text-center text-2xl font-bold text-darkBlue">
        Upgrade your plan today!
      </h2>

      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="card1 flex w-1/3 flex-col space-y-9 rounded-lg border border-gray-200 bg-white p-3 shadow-md"
          >
            <div>
              <h2 className="text-3xl font-bold text-darkBlue">{plan.price}</h2>
              <div className="mt-2 flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={20} />
                <span className="text-sm font-medium text-gray-700">
                  {plan.title}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>
            <div className="mt-auto">
              <Button className="button w-full bg-darkBlue py-2 text-white">
                {plan.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="space-y-2 text-center">
        <p className="text-sm text-gray-600">
          Need more features or comments and also access all cycle? Upgrade your
          plan today!
        </p>
        <Button
          variant="outline"
          className="border-darkBlue text-darkBlue hover:bg-lightBlue"
        >
          Upgrade to Premium Plan
        </Button>
      </div>
    </div>
  );
};

export default SchoolUpgradePlan;
