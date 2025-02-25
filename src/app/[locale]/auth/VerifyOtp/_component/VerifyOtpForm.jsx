"use client";
import CustomFormError from "@/components/CustomError/CustomError";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
// import CustomFormError from "@/components/CustomFormError/CustomFormError";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "@/i18n/routing";
import {
  useResendOtpMutation,
  useVerifyEmailMutation,
} from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { jwtDecode } from "jwt-decode";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import Swal from "sweetalert2";
export default function VerifyOtpForm() {
  const [value, setValue] = useState("");
  const search = useSearchParams();
  const email = search.get("email");
  const nextpath = search.get("next");
  console.log("nextpath", nextpath);
  const [showRequired, setShowRequired] = useState(false);
  const [formError, setFormError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  // verify otp handeler
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [resendOtp, { isLoading: resendOtpLoading }] = useResendOtpMutation();

  // Verify otp handler
  const handleVerifyOtp = async () => {
    if (value.length < 6) {
      setShowRequired(true);
      return;
    }

    try {
      const res = await verifyEmail({ otp: Number(value) }).unwrap();
      if (res.success) {
        toast.success("OTP Verified", "Please login to your account.");
        // Set user info into store
        dispatch(
          setUser({
            user: jwtDecode(res?.data?.accessToken),
            token: res?.data?.accessToken,
          }),
        );
        if (nextpath) {
          router.push(nextpath);
        } else {
          router.push("/home");
          if (res?.data?.user?.role === "1") {
            Swal.fire({
              title: "Welcome!",
              text: "You have joined as a guest and are now eligible to generate up to 5 comments.",
              icon: "info",
              confirmButtonText: "Got it",
              background: "#f0f0f0",
              confirmButtonColor: "#4CAF50",
              footer: "Enjoy your stay!",
            });
          }
        }

        setFormError(null);
      }
    } catch (error) {
      const errorMessage = error?.data?.message;
      setFormError(errorMessage || "Error verifying OTP. Please try again.");
    }
  };

  //============================== Resend otp handler============================
  const handleResendOtp = async () => {
    const toastId = toast.loading("Sending...");
    try {
      const res = await resendOtp(email).unwrap();
      if (res?.success) {
        toast.success("OTP re-sent successfully", toastId);
        toast.dismiss(toastId);
        // Reset forgotPassToken in localStorage
        localStorage.setItem("signupToken", res?.data?.token);
        setFormError(null);
      }
    } catch (error) {
      setFormError(error?.data?.message || error?.error);
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="text-primary-black m-3 w-full rounded-lg bg-white bg-opacity-70 p-1.5 md:p-5 lg:mx-auto lg:w-[35%]">
      <h2 className="mb-3 text-center text-lg font-semibold md:text-4xl">
        Verify OTP
      </h2>
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
          <InputOTPGroup className="flex items-center gap-x-4 md:gap-x-5">
            <InputOTPSlot
              index={0}
              className="h-[63px] border border-black text-3xl font-extrabold md:w-[50px]"
            />
            <InputOTPSlot
              index={1}
              className="h-[63px] border border-black text-3xl font-extrabold md:w-[50px]"
            />
            <InputOTPSlot
              index={2}
              className="h-[63px] border border-black text-3xl font-extrabold md:w-[50px]"
            />
            <InputOTPSlot
              index={3}
              className="h-[63px] border border-black text-3xl font-extrabold md:w-[50px]"
            />
            <InputOTPSlot
              index={4}
              className="h-[63px] border border-black text-3xl font-extrabold md:w-[50px]"
            />
            <InputOTPSlot
              index={5}
              className="h-[63px] border border-black text-3xl font-extrabold md:w-[50px]"
            />
          </InputOTPGroup>
        </InputOTP>

        {showRequired && (
          <p className="mt-3 text-center text-danger">
            Please enter your one-time password correctly
          </p>
        )}
      </div>

      <Button
        disabled={isLoading || value?.length < 6}
        type="submit"
        className="mt-8 h-[2.7rem] w-full bg-black font-medium capitalize text-white"
        onClick={handleVerifyOtp}
      >
        {isLoading ? <CustomLoader /> : "Verify OTP"}
      </Button>
      {/* 
      Resend otp button */}
      <div className="mx-auto my-2 max-w-max">
        <Button
          variant="link"
          disabled={resendOtpLoading}
          onClick={handleResendOtp}
          className=""
        >
          Resend Otp
        </Button>
      </div>

      {formError && <CustomFormError formError={formError} />}
    </div>
  );
}
