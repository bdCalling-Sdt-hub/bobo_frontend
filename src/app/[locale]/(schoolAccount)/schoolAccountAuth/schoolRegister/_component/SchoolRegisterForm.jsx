"use client";

import { Link, redirect, useRouter } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { PhoneInput } from "@/components/PhoneInput/PhoneInput";
import EyeIconInverse from "@/components/EyeIcon/EyeIcon";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSignUpMutation } from "@/redux/api/authApi";
import CustomFormError from "@/components/CustomError/CustomError";

const SchoolRegisterForm = () => {
  const [formError, setFormError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const role = "3";
  const [signUp, { isLoading }] = useSignUpMutation();

  const onSignUpSubmit = async (data) => {
    delete data[("confirmPassword", "lastName")];
    const finaldata = { role: role, ...data };
    try {
      const res = await signUp(finaldata).unwrap();
      if (res.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        if (res?.data?.user?.isverified) {
          router.push("/auth/login");
        }
        // set signUptoken in session storage
        localStorage.setItem("signupToken", res.data.otpToken.token);

        router.push("/auth/VerifyOtp?next=/auth/login");
        reset();
        setFormError(null);
      }
    } catch (error) {
      setFormError(
        error?.data?.message || "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSignUpSubmit)}
      className="text-primary-black w-full rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]"
    >
      <h1 className="text-center text-2xl font-bold">Create School Account</h1>
      <div className="space-y-8">
        {/*  name */}
        <div className="grid w-full items-center gap-1">
          <Label
            htmlFor="name"
            className="text-primary-black mb-1 block font-semibold"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-danger">Last Name is required</p>
          )}
        </div>

        {/* Contact */}
        <div className="grid w-full items-center gap-1">
          <Label
            htmlFor="contact"
            className="text-primary-black mb-1 block font-semibold"
          >
            Contact
          </Label>
          <Controller
            name="contact"
            // rules={{ required: "Contact is required" }}
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
            <p className="mt-1 text-danger">Contact is required</p>
          )}
        </div>

        {/* email */}
        <div className="grid w-full items-center gap-1">
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
            <p className="mt-1 text-danger">Email is required</p>
          )}
        </div>

        {/* password */}
        <div className="mt-6 grid w-full items-center gap-1">
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
            <p className="mt-1 text-danger">{errors.password.message}</p>
          )}
        </div>

        {/* confirm password */}
        <div className="mt-6 grid w-full items-center gap-1">
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
            <p className="mt-1 text-danger">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* job role */}
        <div className="grid w-full items-center gap-1">
          <Label
            htmlFor="jobrole"
            className="text-primary-black mb-1 block font-semibold"
          >
            Job Role
          </Label>
          <Input
            type="text"
            id="jobrole"
            placeholder="Enter your job role"
            {...register("job_role", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-danger">Job Role is required</p>
          )}
        </div>

        {/* school name */}
        <div className="grid w-full items-center gap-1">
          <Label
            htmlFor="lastName"
            className="text-primary-black mb-1 block font-semibold"
          >
            School Name
          </Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Enter your School Name"
            {...register("school", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-danger">School Name is required</p>
          )}
        </div>
      </div>

      <Button
        // // loading={isLoading}
        disabled={isLoading}
        type="submit"
        className="mt-10 h-[2.8rem] w-full rounded-xl bg-purple-950 text-xl font-semibold"
      >
        {isLoading ? <CustomLoader /> : "Create Account"}
      </Button>

      <div className="mt-5 flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Link
          href="/schoolAccountAuth/schoolLogin"
          className="hover-underline font-medium"
        >
          Sign In
        </Link>
      </div>

      {formError && <CustomFormError formError={formError} />}
    </form>
  );
};

export default SchoolRegisterForm;
