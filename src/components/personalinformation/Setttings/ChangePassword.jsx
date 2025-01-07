"use client";
// import CustomLoader from "@/components/CustomLoader/CustomLoader";
import EyeIconInverse from "@/components/EyeIcon/EyeIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/routing";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const router = useRouter();

  const onUpdatePassSubmit = (data) => {
    console.log(data);
    router.push("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onUpdatePassSubmit)}
      className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto"
    >
      <h1 className="mb-5 text-center text-2xl font-semibold">
        Change Password
      </h1>
      <div className="grid w-full items-center gap-2">
        <Label
          htmlFor="newPassword"
          className="text-primary-black mb-1 font-semibold"
        >
          Enter New Password
        </Label>

        <div className="relative">
          <Input
            type={showNewPass ? "text" : "password"}
            id="newPassword"
            placeholder="New Password"
            {...register("newPassword", {
              required: "New Password is required",
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
            showPassword={showNewPass}
            setShowPassword={setShowNewPass}
          />
        </div>

        {errors.newPassword && (
          <p className="text-danger mt-1">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="mt-10 grid w-full items-center gap-2">
        <Label
          htmlFor="confirmPassword"
          className="text-primary-black mb-1 font-semibold"
        >
          Confirm Password
        </Label>

        <div className="relative">
          <Input
            type={showConfirmPass ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("newPassword") || "Passwords do not match",
            })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
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

      <Button
        type="submit"
        //   disabled={isLoading}
        className="mt-10 h-[2.7rem] w-full rounded-xl border-black bg-black text-center text-xl"
      >
        {/* {isLoading ? <CustomLoader /> : "Submit"} */}
        Submit
      </Button>

      {/* {formError && <CustomFormError formError={formError} />} */}
    </form>
  );
};

export default ChangePassword;
