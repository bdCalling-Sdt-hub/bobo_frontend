"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    toast.success("Teacher added successfully");
    reset();
  };
  const t = useTranslations("cycleOne");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[80%]"
    >
      <h1 className="mb-10 text-center text-2xl font-bold md:text-4xl">
        {" "}
        Manual Entry{" "}
      </h1>

      <div className="flex gap-10">
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
      </div>

      {/* email */}
      <div className="grid w-full items-center gap-2">
        <Label
          htmlFor="email"
          className="text-primary-black mb-1 mt-2 block font-semibold"
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
        {errors.email && <p className="mt-1 text-danger">Email is required</p>}
      </div>

      <div>
        <Button
          type="submit"
          className="text-blac mt-10 block h-[2.7rem] w-full border-2 border-black bg-purple-950 px-12 text-white"
        >
          Add Teacher
        </Button>
      </div>
    </form>
  );
};

export default AddTeacher;
