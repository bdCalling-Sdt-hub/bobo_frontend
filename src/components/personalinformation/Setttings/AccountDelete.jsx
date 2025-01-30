"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";
import Swal from "sweetalert2";

const AccountDelete = () => {
  const t = useTranslations("personalInformation");
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Account has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="text-primary-black mt-5 space-y-5 rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto">
      <h1 className="text-center text-2xl">{t("Account Delete")}</h1>
      <Button onClick={handleDelete} className="h-[2.7rem] w-full text-xl">
        {t("Delete Account")}
      </Button>
    </div>
  );
};

export default AccountDelete;
