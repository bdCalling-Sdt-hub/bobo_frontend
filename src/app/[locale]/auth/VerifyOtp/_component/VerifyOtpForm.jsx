"use client";

import CustomLoader from "@/components/CustomLoader/CustomLoader";
// import CustomFormError from "@/components/CustomFormError/CustomFormError";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "@/i18n/routing";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { useState } from "react";

export default function VerifyOtpForm() {
  const [value, setValue] = useState("");
  const [showRequired, setShowRequired] = useState(false);
  //   const [formError, setFormError] = useState(null);
  const router = useRouter();

  // Verify otp handler
  const handleVerifyOtp = async () => {
    if (value.length < 6) {
      setShowRequired(true);
      return;
    }
    console.log("value: " + value);
    router.push("/auth/setPassword");
  };

  // Resend otp handler
  //   const handleResendOtp = async () => {
  //     const toastId = toast.loading("Sending...");

  //     try {
  //       const res = await resendOtp().unwrap();

  //       if (res?.success) {
  //         successToast("OTP re-sent successfully", toastId);

  //         // Reset signUpToken in session-storage
  //         setToSessionStorage("signUpToken", res?.data?.token);
  //       }
  //     } catch (error) {
  //       setFormError(error?.data?.message || error?.error);
  //       toast.dismiss(toastId);
  //     }
  //   };

  return (
    <div className="text-primary-black relative rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]">
      <h2 className="mb-3 text-center text-4xl font-semibold">Verify OTP</h2>
      <p className="font-kumbh-sans text-primary-black mb-10 text-center">
        We&apos;ll send a verification code to your email. Check your inbox and
        enter the code here:
      </p>
      <div className="mx-auto w-max">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="flex items-center gap-x-5">
            <InputOTPSlot
              index={0}
              className="h-[63px] w-[50px] border border-black text-3xl font-extrabold"
            />
            <InputOTPSlot
              index={1}
              className="h-[63px] w-[50px] border border-black text-3xl font-extrabold"
            />
            <InputOTPSlot
              index={2}
              className="h-[63px] w-[50px] border border-black text-3xl font-extrabold"
            />
            <InputOTPSlot
              index={3}
              className="h-[63px] w-[50px] border border-black text-3xl font-extrabold"
            />
            <InputOTPSlot
              index={4}
              className="h-[63px] w-[50px] border border-black text-3xl font-extrabold"
            />
            <InputOTPSlot
              index={5}
              className="h-[63px] w-[50px] border border-black text-3xl font-extrabold"
            />
          </InputOTPGroup>
        </InputOTP>

        {showRequired && (
          <p className="text-danger mt-3 text-center">
            Please enter your one-time password correctly
          </p>
        )}
      </div>

      {/* Resend otp button */}
      {/* <Button
        variant="outline"
        className="absolute -top-9 right-0 h-6 rounded-full border border-primary-black text-xs font-medium"
        disabled={resendOtpLoading}
        onClick={handleResendOtp}
      >
        Resend Otp <RotateCw size={14} className="ml-2" />
      </Button> */}

      <Button
        // disabled={isLoading || value?.length < 6}
        type="submit"
        className="mt-8 h-[2.7rem] w-full bg-black font-medium capitalize text-white"
        onClick={handleVerifyOtp}
      >
        {/* {isLoading ? <CustomLoader /> : "Verify OTP"} */}
        Verify OTP
      </Button>

      {/* Resend otp button */}
      <div className="mx-auto my-2 max-w-max">
        <Button
          variant="link"
          //   disabled={resendOtpLoading}
          //   onClick={handleResendOtp}
          className=""
        >
          Resend Otp
        </Button>
      </div>

      {/* {formError && <CustomFormError formError={formError} />} */}
    </div>
  );
}
