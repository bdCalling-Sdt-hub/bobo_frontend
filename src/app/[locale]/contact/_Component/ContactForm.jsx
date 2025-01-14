"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="mx-auto mt-40 max-w-5xl rounded-lg bg-lightBlue p-6 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold">Contact Us</h2>
      <p className="mb-6 text-center">
        Feel free to share your feedback; it is valuable to us.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </Label>
          <Input
            type="text"
            id="fullName"
            placeholder="Enter your Name"
            {...register("fullName", { required: "Full Name is required" })}
            className={`mt-1 w-full rounded-md border p-2 ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <Label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className={`mt-1 w-full rounded-md border p-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Indicate Cycle/Term/Stage */}
        <div>
          <Label htmlFor="cycle" className="block text-sm font-medium">
            Indicate your Cycle/Term/Stage
          </Label>
          <Input
            type="text"
            id="cycle"
            placeholder="E.g., Semester 1, Term 2"
            {...register("cycle", { required: "This field is required" })}
            className={`mt-1 w-full rounded-md border p-2 ${
              errors.cycle ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cycle && (
            <p className="mt-1 text-sm text-red-500">{errors.cycle.message}</p>
          )}
        </div>

        {/* Your Suggestion */}
        <div>
          <Label htmlFor="suggestion" className="block text-sm font-medium">
            Your Suggestion
          </Label>
          <Textarea
            id="suggestion"
            rows="4"
            placeholder="Tell us what you'd like to improve or add to the app..."
            {...register("suggestion", { required: "Suggestion is required" })}
            className={`mt-1 w-full rounded-md border p-2 ${
              errors.suggestion ? "border-red-500" : "border-gray-300"
            }`}
          ></Textarea>
          {errors.suggestion && (
            <p className="mt-1 text-sm text-red-500">
              {errors.suggestion.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full rounded-md bg-darkBlue px-4 py-2 text-white hover:bg-blue-800"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
