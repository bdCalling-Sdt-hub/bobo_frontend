"use client";
// import { Link, redirect } from "@/i18n/routing";
import { Checkbox } from "@/components/ui/checkbox";
// import EyeIconInverse from "@/components/EyeIcon/EyeIcon";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import EyeIconInverse from "@/components/EyeIcon/EyeIcon";

import { Link, useRouter } from "@/i18n/routing";
import Swal from "sweetalert2";

export default function SchoolLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const role = "school";

  const onSubmit = async (data) => {
    const maindata = { role, ...data };
    console.log(maindata);
    sessionStorage.setItem("role", maindata.role);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "user signin successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    router.push("/premiumPlanForSchoolAccount");
  };

  const t = useTranslations("cycleOne");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black m-2 w-full rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%] lg:py-24"
    >
      <h1 className="text-center text-2xl font-bold">Sign In </h1>
      {/* email */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email" className="font-semibold">
          {t("Email")}
        </Label>
        <Input
          type="email"
          id="email"
          placeholder={t("Email")}
          className="border-black bg-transparent px-4 py-5"
          {...register("email", {
            required: t("Email is required"),
            validate: (value) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(value)) {
                return "Must be a valid email";
              }
              return true;
            },
          })}
        />
        {errors.email && (
          <span className="shake-hr text-red-500">{errors.email.message}</span>
        )}
      </div>

      {/* password */}

      <div className="mt-8 grid w-full items-center gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="font-semibold">
            Password
          </Label>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="border-black bg-transparent px-4 py-5"
            {...register("password", { required: true })}
          />
          <EyeIconInverse
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>

        {errors.password && (
          <span className={"shake-hr text-red-500"}>Password is required</span>
        )}
      </div>

      <div className="mt-10 flex justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <Link
          href="/auth/forgetPassword"
          className="text-primary-black text-sm font-medium"
        >
          Forgot Password?
        </Link>
      </div>

      <div>
        <Button
          type="submit"
          className="mt-10 block h-[2.7rem] w-full border-2 bg-purple-950 px-12 text-xl text-white hover:bg-purple-950 hover:text-white"
        >
          SignIn
        </Button>

        {/* <Button
          varient="default"
          type="submit"
          className="mt-10 block h-[2.7rem] w-full border-2 border-black bg-transparent text-black hover:bg-purple-950 hover:text-white"
        >
          {t("Continue as a Guest")}
        </Button> */}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        <p>Don&apos;t have an account?</p>
        <Link
          href="/schoolAccountAuth/schoolRegister"
          className="text-primary-orange font-medium"
        >
          Register
        </Link>
      </div>
    </form>
  );
}
