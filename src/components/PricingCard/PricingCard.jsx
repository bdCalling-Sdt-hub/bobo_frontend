"use client";
import { Button } from "../ui/button";
import { useRouter } from "@/i18n/routing";
import TeacherQuantityModal from "../TeacherQuantityModal/TeacherQuantityModal";
import { useState } from "react";
import { useCreateSubsCriptionsMutation } from "@/redux/api/SubsCriptionApi";
import { useCheckOutMutation } from "@/redux/api/PaymentApi";
import { toast } from "sonner";
export const PricingCard = ({
  price,
  title,
  duration,
  description,
  comments,
  role,
  id,
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [CreateSubscription, { isLoading }] = useCreateSubsCriptionsMutation();
  const [checkOut, { isLoading: paymentLoading }] = useCheckOutMutation();

  const handleBuyForSchool = () => {
    setIsModalOpen(true);
  };

  const handleBuy = async (id) => {
    const pakage = id;

    try {
      const res = await CreateSubscription(pakage).unwrap();
      const toastId = toast.loading("Creating SubsCription...");
      if (res.success) {
        const subscription = res?.data._id;

        try {
          const res = await checkOut(subscription);
          if (res.success) {
            toast.success("Order create SuccesFully", toastId);
            toast.dismiss(toastId);
          }

          const paymentLink = res?.data?.data;

          console.log("paymentLink", paymentLink);

          if (!paymentLink) {
            return toast.error("Payment failed");
          }
          if (typeof window !== "undefined") {
            window.location.href = paymentLink;
          }
        } catch (error) {
          toast.error("Failed to create Payment");
        }
      }
    } catch (error) {
      toast.error("Failed to buy subscription");
    }
  };

  return (
    <div className="card1 w-80 cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
        $ {price}
      </h2>
      <h3 className="text-center text-xl font-bold text-gray-800">{title}</h3>
      <p className="mb-4 text-center text-gray-600">{duration}</p>
      <div className="flex-1">
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <p className="mb-4 text-sm text-gray-600">
          Includes {comments} comments.
        </p>
      </div>

      {role === "school" ? (
        <Button
          onClick={handleBuyForSchool}
          className="button w-full rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white"
        >
          Buy Now for School
        </Button>
      ) : (
        <Button
          onClick={() => handleBuy(id)}
          className="button w-full rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white"
        >
          Buy Now
        </Button>
      )}
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
      <TeacherQuantityModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};
