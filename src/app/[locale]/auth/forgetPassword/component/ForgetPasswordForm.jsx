"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { useForm } from "react-hook-form";

export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black lg:mx-auto lg:w-[35%] bg-white bg-opacity-70 p-5 rounded-lg"
    >
      <h2 className="mb-3 text-4xl font-semibold">Forgot Password?</h2>
      <p className="mb-10  text-primary-black">
        Enter your details below to request an OTP for account password reset.
      </p>
      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="email"
          className="mb-1 block font-semibold text-primary-black"
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
          className=" border-2 border-black bg-transparent text-primary-black outline-none"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>

      <Button className="mt-6 w-full rounded-lg bg-purple-950 text-white py-1 text-center">
        Submit
      </Button>
    </form>
  );
}
