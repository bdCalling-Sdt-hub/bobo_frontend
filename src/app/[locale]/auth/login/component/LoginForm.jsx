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
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import CustomFormError from "@/components/CustomError/CustomError";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { setUser } from "@/redux/features/authSlice";
import { jwtDecode } from "jwt-decode";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  // Login api handlers

  const [signin, { isLoading }] = useSignInMutation();

  const onSubmit = async (data) => {
    try {
      const res = await signin(data).unwrap();
      console.log("API Response:", res.data);
      if (res.success) {
        toast.success("Login successful");

        localStorage.setItem("refreshToken", res?.data?.refreshToken);
        // Set user info into store
        dispatch(
          setUser({
            user: jwtDecode(res?.data?.accessToken),
            token: res?.data?.accessToken,
          }),
        );

        if (res?.data?.user?.role === "2") {
          return router.push("/subscriptionPanel");
        }

        if (res.data?.user?.role === "3") {
          // Redirect to school admin page if user is admin
          return router.push("/premiumPlan");
        }
        setFormError(null);
      }
    } catch (error) {
      setFormError(error?.data?.message || error?.error);
    }
  };

  const t = useTranslations("cycleOne");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black m-4 w-full rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%] lg:py-24"
    >
      <h1 className="text-center text-2xl font-bold">Sign In </h1>
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
          loading={isLoading}
          disabled={isLoading}
          type="submit"
          className={cn(
            "mt-10 h-[2.8rem] w-full rounded-xl border bg-purple-900 font-medium capitalize",
            isLoading && "cursor-not-allowed",
          )}
        >
          {isLoading ? <CustomLoader /> : "SIGN IN"}
        </Button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        <p>Don&apos;t have an account?</p>
        <Link
          href="/guestAuth/upgradeAccount"
          className="text-primary-orange font-medium"
        >
          Register
        </Link>
      </div>
      {/* Show form error message */}
      {formError && <CustomFormError formError={formError} extraClass="mt-4" />}
    </form>
  );
}
