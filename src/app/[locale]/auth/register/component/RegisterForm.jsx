"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useRouter } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/PhoneInput/PhoneInput";
import EyeIconInverse from "@/components/EyeIcon/EyeIcon";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useSignUpMutation } from "@/redux/api/authApi";
import Swal from "sweetalert2";
import CustomFormError from "@/components/CustomError/CustomError";

const DEFAULT_COUNTRY = "US";

const RegisterForm = () => {
  const [formError, setFormError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const role = "2";
  const [signUp, { isLoading }] = useSignUpMutation();

  // Sign up handler
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

        router.push(`/auth/VerifyOtp?next=/auth/login&email=${data.email}`);
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
      className="text-primary-black m-2 w-full rounded-lg bg-white bg-opacity-70 p-2 md:p-5 lg:mx-auto lg:w-[35%] lg:py-12"
    >
      <h1 className="text-center font-bold md:text-2xl">Create Account</h1>
      <div className="space-y-8">
        {/* First Name */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="name"
            className="text-primary-black mb-1 block font-semibold"
          >
            First Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your first name"
            {...register("name", { required: "First Name is required" })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none focus:outline-none"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        {/* Last Name */}
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
            {...register("lastName", { required: "Last Name is required" })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="text-danger">{errors.lastName.message}</p>
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
            // rules={{ required: "Contact is required" }}
            control={control}
            render={({ field }) => (
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                international
                defaultCountry={DEFAULT_COUNTRY}
              />
            )}
          />
          {errors.contact && (
            <p className="text-danger">{errors.contact.message}</p>
          )}
        </div>

        {/* Email */}
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
            {...register("email", { required: "Email is required" })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
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
                    "Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character.",
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
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
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
              id=""
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
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
      </div>

      <Button
        type="submit"
        className="mt-10 h-[2.8rem] w-full rounded-xl bg-purple-950 font-semibold"
        disabled={isLoading}
      >
        {isLoading ? <CustomLoader /> : "Create Account"}
      </Button>

      <div className="mt-5 flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Link href="/auth/login" className="hover-underline font-medium">
          Sign In
        </Link>
      </div>

      {formError && <CustomFormError formError={formError} />}
    </form>
  );
};

export default RegisterForm;
