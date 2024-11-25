"use client";

import { Link, redirect } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    redirect("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black lg:mx-auto lg:w-[35%] w-[80%] bg-white bg-opacity-70 p-5 rounded-lg "
    >
      <h1 className=" text-center text-2xl font-bold">Sign up </h1>

      <div className="mt-8 grid w-full items-center gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="Name" className="font-semibold">
            Name
          </Label>
        </div>

        <div className="relative">
          <Input
            id="name"
            placeholder="Enter your Name"
            className="border-black bg-transparent px-4 py-5"
            {...register("name", { required: true })}
          />
        </div>

        {errors.name && (
          <span className={"shake-hr text-red-500"}>Name is required</span>
        )}
      </div>

      <div className="grid mt-8 w-full items-center gap-1.5">
        <Label htmlFor="name" className="font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="border-black bg-transparent px-4 py-5"
          {...register("email", {
            required: "Email is required",
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
            id="password"
            placeholder="Password"
            className="border-black bg-transparent px-4 py-5"
            {...register("password", { required: true })}
          />
        </div>

        {errors.password && (
          <span className={"shake-hr text-red-500"}>Password is required</span>
        )}
      </div>

      <div className="mt-8 grid w-full items-center gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="font-semibold">
            Confirm Password
          </Label>
        </div>

        <div className="relative">
          <Input
            id="confirmPassword"
            placeholder="Password"
            className="border-black bg-transparent px-4 py-5"
            {...register("confirmPassword", { required: true })}
          />
        </div>

        {errors.confirmPassword && (
          <span className={"shake-hr text-red-500"}>
            {" "}
            Confirm Password is required
          </span>
        )}
      </div>

      <Button
        type="submit"
        className="mt-10 block h-[2.7rem]  border-2 border-black  text-white bg-purple-950 w-full "
      >
        Sign Up
      </Button>

      <h1 className=" text-center text-2xl font-bold mt-5">Or</h1>

      {/* <Button
        variant="default"
        type="submit"
        className="  block h-[2.7rem]  m-auto mt-8   text-black border-2 border-black bg-transparent hover:bg-purple-950 w-full hover:text-white "
      >
        Continue With Google
      </Button> */}

      <Link href="/home">
        <Button
          type="button"
          className="  block h-[2.7rem]  m-auto mt-8   text-black border-2 border-black bg-transparent hover:bg-purple-950 w-full hover:text-white "
        >
          Continue as Guest
        </Button>
      </Link>

      <div className="mt-3 flex items-center justify-center gap-2">
        <p>Allready have an account?</p>
        <Link href="/auth/login" className="font-medium text-primary-orange">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
