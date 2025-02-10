"use client";

import LearningAreaSectionTwo from "@/components/Form/LearningAreaSection/LearningAreaSectionTwo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover } from "@headlessui/react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useRouter } from "@/i18n/routing";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useCreateCommentMutation } from "@/redux/api/commentsApi";
import { toast } from "sonner";
import Swal from "sweetalert2";

const CycleForm = () => {
  const t = useTranslations("cycleOne");

  const locale = Cookies.get("NEXT_LOCALE");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [result, setResult] = useState(null);

  const router = useRouter();

  const cycle = "2";

  const [createComment, { isLoading: commentLoading, error }] =
    useCreateCommentMutation();

  const errormessage = error?.data?.message;

  if (error) {
    Swal.fire({
      title: "Oppss..",
      text: errormessage,
      icon: "error",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Okey",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/home");
      }
    });
  }

  const onSubmit = async (data) => {
    try {
      const response = await createComment({
        feedbackData: data,
        language: locale,
        cycle: cycle,
      });
      let comment = response?.data?.data?.comment;
      if (comment) {
        const splitComment = comment?.replace(/(^"|"$)/g, "");
        console.log("Submitted data: split", splitComment);
        router.push(`/success?data=${splitComment}`);
      }
    } catch (error) {
      console.error("Error generating feedback:", error);

      const errorMessage =
        error?.data?.message ||
        error?.errorSources?.[0]?.message ||
        error?.response?.data?.error ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);

      setResult({
        feedback:
          error.response?.data?.error ||
          "Error generating feedback. Please try again.",
      });
    } finally {
      reset();

      // setIsModalOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mt-8 text-center text-3xl font-bold">
        {t("Personalized Student Feedback Generation Process")}
      </h1>

      <div className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[45%]">
        {/* Student Name Input Field */}
        <div className="mt-8 grid w-full items-center gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="name" className="font-semibold">
              {t("Student Name")}
            </Label>
            <Popover className="relative">
              <Popover.Button className="cursor-help text-blue-500">
                ?
              </Popover.Button>
              <Popover.Panel className="absolute z-10 mt-2 w-48 rounded bg-white p-4 shadow-lg">
                Enter the full name of the student
              </Popover.Panel>
            </Popover>
          </div>
          <div className="relative">
            <Input
              id="name"
              placeholder={t("Name")}
              className="border-black bg-transparent px-4 py-5"
              {...register("name", { required: t("Name is required") })}
            />
          </div>
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Gender Dropdown */}
        <div className="mt-8 grid w-full items-center gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="gender" className="font-semibold">
              {t("Select Gender")}
            </Label>
            <Popover className="relative">
              <Popover.Button className="cursor-help text-blue-500">
                ?
              </Popover.Button>
              <Popover.Panel className="absolute z-10 mt-2 w-48 rounded bg-white p-4 shadow-lg">
                Select the gender of the student
              </Popover.Panel>
            </Popover>
          </div>
          <div className="relative">
            <select
              id="gender"
              className="w-full rounded-md border border-black bg-transparent px-4 py-3"
              {...register("gender", { required: t("Gender is required") })}
            >
              <option value="Boy">{t("Boy")}</option>
              <option value="Girl">{t("Girl")}</option>
            </select>
          </div>
          {errors.gender && (
            <span className="text-red-500">{errors.gender.message}</span>
          )}
        </div>

        {/* Tone of Voice Dropdown */}

        <div className="mt-8 grid w-full items-center gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="toneOfVoice" className="font-semibold">
              {t("Select Tone Of Voice")}
            </Label>
            <Popover className="relative">
              <Popover.Button className="cursor-help text-blue-500">
                ?
              </Popover.Button>
              <Popover.Panel className="absolute z-10 mt-2 w-48 rounded bg-white p-4 shadow-lg">
                Choose the tone of voice preferred for communication
              </Popover.Panel>
            </Popover>
          </div>
          <div className="relative">
            <select
              id="toneOfVoice"
              className="w-full rounded-md border border-black bg-transparent px-4 py-3"
              {...register("toneOfVoice", {
                required: t("Tone of Voice is required"),
              })}
            >
              <option value="Caring">{t("Caring")}</option>
              <option value="Encouraging">{t("Encouraging")}</option>
              <option value="Enthusiastic">{t("Enthusiastic")}</option>
              <option value="Rigorous">{t("Rigorous")}</option>
            </select>
          </div>
          {errors.toneOfVoice && (
            <span className="text-red-500">{errors.toneOfVoice.message}</span>
          )}
        </div>
      </div>

      <h1 className="my-4 text-center text-3xl font-bold">
        {t("PathWay To Growth")}
      </h1>
      <hr />
      <LearningAreaSectionTwo
        register={register}
        setValue={setValue}
      ></LearningAreaSectionTwo>

      {/* Submit Button */}
      <div className="text-primary-black rounded-lg bg-opacity-70 p-5 lg:mx-auto lg:w-[70%]">
        <Button
          type="submit"
          className="mb-20 w-full bg-purple-950"
          disabled={commentLoading}
        >
          {commentLoading ? (
            <h1 className="flex gap-2">
              <CustomLoader />
              Genarating Comment ...
            </h1>
          ) : (
            t("Generate Comment")
          )}
        </Button>
      </div>
    </form>
  );
};

export default CycleForm;
