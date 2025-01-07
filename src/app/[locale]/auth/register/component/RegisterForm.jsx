"use client";

import { Link, redirect } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { PhoneInput } from "@/components/PhoneInput/PhoneInput";
import EyeIconInverse from "@/components/EyeIcon/EyeIcon";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useState } from "react";

const RegisterForm = () => {
  const [formError, setFormError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSignUpSubmit = async (data) => {
    console.log(data);
    redirect("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSignUpSubmit)}
      className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%] lg:py-24"
    >
      <div className="space-y-8">
        {/* first name */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="firstName"
            className="text-primary-black mb-1 block font-semibold"
          >
            First Name
          </Label>

          <Input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            {...register("firstName", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-danger mt-1">First Name is required</p>
          )}
        </div>

        {/* last name */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="lastName"
            className="text-primary-black mb-1 block font-semibold"
          >
            Last Name
          </Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            {...register("lastName", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="text-danger mt-1">Last Name is required</p>
          )}
        </div>

        {/* Contact */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="contact"
            className="text-primary-black mb-1 block font-semibold"
          >
            Contact
          </Label>
          <Controller
            name="contact"
            rules={{ required: "Contact is required" }}
            control={control}
            render={({ field }) => (
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                international
                defaultCountry="US"
              />
            )}
          />

          {errors.contact && (
            <p className="text-danger mt-1">Contact is required</p>
          )}
        </div>

        {/* email */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="email"
            className="text-primary-black mb-1 block font-semibold"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
            })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.email && (
            <p className="text-danger mt-1">Email is required</p>
          )}
        </div>

        {/* new password */}
        <div className="mt-6 grid w-full items-center gap-2">
          <Label
            htmlFor="password"
            className="text-primary-black font-semibold"
          >
            Password
          </Label>

          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must have at least one uppercase, one lowercase letter, one number, one special character and 8 characters long",
                },
              })}
              className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
            />

            <EyeIconInverse
              showPassword={showPass}
              setShowPassword={setShowPass}
            />
          </div>

          {errors.password && (
            <p className="text-danger mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* confirm password */}
        <div className="mt-6 grid w-full items-center gap-2">
          <Label
            htmlFor="confirmPassword"
            className="text-primary-black font-semibold"
          >
            Confirm Password
          </Label>

          <div className="relative">
            <Input
              type={showConfirmPass ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="text-primary-black rounded-xl border-black bg-transparent outline-none"
            />
            <EyeIconInverse
              showPassword={showConfirmPass}
              setShowPassword={setShowConfirmPass}
            />
          </div>

          {errors.confirmPassword && (
            <p className="text-danger mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <Button
        // // loading={isLoading}
        // disabled={isLoading}
        type="submit"
        className="mt-10 h-[2.8rem] w-full rounded-xl bg-black font-semibold"
      >
        {/* {isLoading ? <CustomLoader /> : "Create Account"} */}
        Create Account
      </Button>

      <div className="mt-5 flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Link href="/auth/login" className="hover-underline font-medium">
          Sign In
        </Link>
      </div>

      {/* {formError && <CustomFormError formError={formError} />} */}
    </form>
  );
};

export default RegisterForm;
