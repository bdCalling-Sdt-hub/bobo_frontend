"use client";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import EyeIconInverse from "@/components/EyeIcon/EyeIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/routing";
import { useAddSchoolTeacherMutation } from "@/redux/api/authApi";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddTeacher = () => {
  const router = useRouter();
  const t = useTranslations("personalInformation");
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addSchoolTeacher, { isLoading }] = useAddSchoolTeacherMutation();

  const onSubmit = async (data) => {
    try {
      const res = await addSchoolTeacher(data).unwrap();
      if (res.success) {
        toast.success("Teacher Added Successfully");
        reset();
      }
    } catch (error) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
      router.push("/premiumPlan");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[80%]"
    >
      <h1 className="mb-10 text-center text-2xl font-bold md:text-4xl">
        {t("Manual Entry")}
      </h1>

      <div className="flex gap-10">
        {/* first name */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="firstName"
            className="text-primary-black mb-1 block font-semibold"
          >
            {t("First Name")}
          </Label>

          <Input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            {...register("firstName", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none focus:outline-none"
          />
          {errors.firstName && (
            <p className="mt-1 text-danger">First Name is required</p>
          )}
        </div>

        {/* last name */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="lastName"
            className="text-primary-black mb-1 block font-semibold"
          >
            {t("Last Name")}
          </Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            {...register("lastName", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-danger">Last Name is required</p>
          )}
        </div>
      </div>

      {/* email */}
      <div className="grid w-full items-center gap-2">
        <Label
          htmlFor="email"
          className="text-primary-black mb-1 mt-2 block font-semibold"
        >
          {t("Email")}
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
        {errors.email && <p className="mt-1 text-danger">Email is required</p>}
      </div>

      {/* Password */}
      <div className="mt-6 grid w-full items-center gap-2">
        <Label htmlFor="password" className="text-primary-black font-semibold">
          {t("Password")}
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
          <p className="mt-1 text-danger">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          className="text-blac mt-10 block h-[2.7rem] w-full border-2 border-black bg-purple-950 px-12 text-white"
        >
          {isLoading ? <CustomLoader /> : t("Add Teacher")}
        </Button>
      </div>
    </form>
  );
};

export default AddTeacher;
