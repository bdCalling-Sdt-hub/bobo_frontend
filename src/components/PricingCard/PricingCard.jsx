"use client";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import { useRouter } from "@/i18n/routing";
import TeacherQuantityModal from "../TeacherQuantityModal/TeacherQuantityModal";
import { useState } from "react";
export const PricingCard = ({
  price,
  title,
  duration,
  description,
  comments,
  role,
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyForSchool = () => {
    setIsModalOpen(true);
  };

  const handleBuy = () => {
    Swal.fire({
      title: `You have successfully bought the ${title}.`,
      icon: "success",
      draggable: true,
      html: price,
    });
    router.push("/home");
  };

  return (
    <div className="card card1 w-80 cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
        {price}
      </h2>
      <h3 className="text-center text-xl font-bold text-gray-800">{title}</h3>
      <p className="mb-4 text-center text-gray-600">{duration}</p>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <p className="mb-4 text-sm text-gray-600">
        Includes {comments} comments.
      </p>

      {role === "school" ? (
        <Button
          onClick={handleBuyForSchool}
          className="button w-full rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white"
        >
          Buy Now for School
        </Button>
      ) : (
        <Button
          onClick={handleBuy}
          className="button w-full rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white"
        >
          Buy Now
        </Button>
      )}
      <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
      <TeacherQuantityModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};
