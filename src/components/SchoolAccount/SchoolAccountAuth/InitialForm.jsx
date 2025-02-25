"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "@/i18n/routing";
import { useGuestAuthInitialFormMutation } from "../../../redux/api/authApi";
import CustomFormError from "@/components/CustomError/CustomError";

const InitialForm = () => {
  const [formError, setFormError] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [GuestAuthInitialForm, { isLoading }] =
    useGuestAuthInitialFormMutation();

  const onSignUpSubmit = async (data) => {
    try {
      const res = await GuestAuthInitialForm(data).unwrap();
      if (res.success) {
        Swal.fire({
          position: "center",
          title: "Email sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/guestAuth/welComePage");
        setFormError(null);
      } else {
        setFormError(res.error);
      }
    } catch (error) {
      setFormError("An error occurred while trying to sign up.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSignUpSubmit)}
      className="text-primary-black m-2 rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]"
    >
      <h2 className="mb-3 text-center text-lg font-semibold md:text-4xl">
        Welcome
      </h2>
      <p className="text-primary-black mb-10 text-center">
        Please provide the contact details of the admin from your school who
        will handle the process on your behalf.
      </p>
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
            <p className="mt-1 text-danger">First Name is required</p>
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
            <p className="mt-1 text-danger">Last Name is required</p>
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
            <p className="mt-1 text-danger">Email is required</p>
          )}
        </div>
        {/* job role */}
        <div className="grid w-full items-center gap-2">
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
            {...register("jobrole", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-danger">Job Role is required</p>
          )}
        </div>

        {/* school name */}
        <div className="grid w-full items-center gap-2">
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
            {...register("Schoolname", { required: true })}
            className="text-primary-black rounded-xl border border-black bg-transparent outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-danger">School Name is required</p>
          )}
        </div>
      </div>

      <Button
        // // loading={isLoading}
        // disabled={isLoading}
        type="submit"
        className="mt-10 h-[2.8rem] w-full rounded-xl bg-purple-950 font-semibold"
      >
        {isLoading ? <CustomLoader /> : "Create Account"}
      </Button>

      {formError && <CustomFormError formError={formError} />}
    </form>
  );
};

export default InitialForm;
