"use client";

import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/routing";
import { useForgetPasswordMutation } from "@/redux/api/authApi";
import { Label } from "@radix-ui/react-label";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();

  const onSubmit = async (data) => {
    try {
      const res = await forgetPassword(data).unwrap();
      if (res.success) {
        toast.success("Check Your Email for OTP password");

        localStorage.setItem("signupToken", res?.data?.token);

        router.push("/auth/VerifyOtp?next=/auth/setPassword");
      }
    } catch (error) {
      toast.error("Error resetting password. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black m-2 rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]"
    >
      <h2 className="mb-3 text-center text-lg font-semibold md:text-4xl">
        Forgot Password?
      </h2>
      <p className="text-primary-black mb-10 text-center">
        Enter your details below to request an OTP for account password reset.
      </p>
      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="email"
          className="text-primary-black mb-1 block font-semibold"
        >
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
          className="text-primary-black border-2 border-black bg-transparent outline-none"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>

      <Button
        disabled={isLoading}
        className="mt-6 h-10 w-full rounded-lg bg-purple-950 py-2 text-center text-xl text-white"
      >
        {isLoading ? <CustomLoader /> : "Submit"}
      </Button>
    </form>
  );
}
