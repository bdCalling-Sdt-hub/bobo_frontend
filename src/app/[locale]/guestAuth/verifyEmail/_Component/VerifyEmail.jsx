"use client";

import CustomFormError from "@/components/CustomError/CustomError";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/routing";
import { useGuestAuthSignUpMutation } from "@/redux/api/authApi";
import { Label } from "@radix-ui/react-label";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function VerifyEmailForm() {
  const t = useTranslations("cycleOne");
  const [formError, setFormError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [guestAuthSignUp, { isLoading }] = useGuestAuthSignUpMutation();

  const onSubmit = async (data) => {
    try {
      const res = await guestAuthSignUp(data).unwrap();
      if (res.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email Verification Request Sent",
          showConfirmButton: false,
          timer: 2000,
        });
        router.push("/auth/VerifyOtp");
        reset();
        setFormError(null);
      }
    } catch (error) {
      setFormError(
        error.response?.data?.error ||
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black m-2 rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]"
    >
      <h2 className="mb-3 text-center text-xl font-semibold">
        {t(
          "To proceed as a guest, please enter your email address for verification",
        )}
      </h2>
      <p className="text-primary-black mb-10 text-center">
        {/* Enter your details below to request an OTP for account password reset. */}
      </p>
      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="email"
          className="text-primary-black mb-1 block font-semibold"
        >
          {t("Email")}
        </Label>
        <Input
          type="email"
          id="email"
          placeholder={t("Email")}
          {...register("email", {
            required: true,
          })}
          className="text-primary-black border-2 border-black bg-transparent outline-none"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="mt-6 h-10 w-full rounded-lg bg-purple-950 py-2 text-center text-xl text-white"
      >
        {isLoading ? <CustomLoader /> : t("Submit")}
      </Button>
      {formError && <CustomFormError formError={formError} />}
    </form>
  );
}
