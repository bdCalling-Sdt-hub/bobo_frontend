"use client";
import { useGetrunningSubsCriptionsQuery } from "@/redux/api/SubsCriptionApi";
import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorPage from "../Error";

const CurrentPlan = () => {
  const { data, isLoading } = useGetrunningSubsCriptionsQuery({});

  if (isLoading) return <CustomLoader />;
  if (!data || !data.data || data.data.length === 0)
    return <ErrorPage message="No running subscriptions found" />;

  const subscriptions = data.data;

  return (
    <div className="mt-10 grid grid-cols-2 gap-10">
      {subscriptions.map((subscription, index) => {
        // Format expiration date
        const formattedDateTime = new Date(
          subscription.expiredAt,
        ).toLocaleString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });

        return (
          <div
            key={index}
            className="space-y-2 rounded-lg border bg-white p-10 shadow-lg"
          >
            <p className="text-xl font-bold">Plan Name: {subscription.plan}</p>
            <p className="font-semibold text-green-600">
              Comments Remaining:{" "}
              {subscription.comment_generate_limit -
                subscription.comment_generated}
            </p>
            <p className="text-red-500">
              Comment Genareted : {subscription.comment_generated}
            </p>

            <p className="font-semibold text-gray-600">
              Expire Date: {formattedDateTime}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentPlan;
