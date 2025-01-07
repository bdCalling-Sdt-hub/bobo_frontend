"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/routing";
import { Label } from "@radix-ui/react-label";

import { useForm } from "react-hook-form";

export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    router.push("/auth/VerifyOtp");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]"
    >
      <h2 className="mb-3 text-center text-4xl font-semibold">
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

      <Button className="mt-6 h-10 w-full rounded-lg bg-purple-950 py-2 text-center text-xl text-white">
        Submit
      </Button>
    </form>
  );
}
