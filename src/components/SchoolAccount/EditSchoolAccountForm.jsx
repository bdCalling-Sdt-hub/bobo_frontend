"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import profile from "/public/PImage.jpg";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useGetUserQuery, useUpdateUserMutation } from "@/redux/api/userApi";
import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorPage from "../Error";

const EditSchoolAccountForm = () => {
  const t = useTranslations("personalInformation");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(profile);
  const { data, isError, isLoading, error } = useGetUserQuery();
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (data?.success && data.data) {
      const userData = data.data;
      setValue("name", userData.name || "");
      setValue("email", userData.email || "");
      setValue("contact", userData.contact || "");
      setValue("school", userData.school || "");

      if (userData.image) {
        setImagePreview(userData.image);
      }
    }
  }, [data, setValue]);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <CustomLoader />
      </div>
    );
  if (isError)
    return (
      <ErrorPage
        statusCode={error?.status}
        message="Failed to fetch user profile."
      />
    );

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact || "");
    formData.append("school", data.school || "");

    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await updateUser(formData).unwrap();
      if (res.success) {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
      console.error(error);
    }
  };

  // 🔹 Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        toast.error({
          title: "Invalid file type",
          description: "Please upload a JPG or PNG file.",
          variant: "destructive",
        });
        return;
      }

      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mx-auto mt-2 max-w-4xl bg-white bg-opacity-70 pt-0">
      <CardHeader>
        <CardTitle className="text-center">
          {t("Personal Information")}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-center">
          {/* Profile Image */}
          <Image
            src={imagePreview}
            alt="Profile"
            width={96}
            height={96}
            className="mx-auto h-24 w-24 rounded-full border-2 border-black object-cover"
          />

          {/* Change Picture Button with Hidden Input */}
          <div className="mt-4">
            <Button
              variant="outline"
              className="cursor-pointer bg-darkBlue text-white"
              onClick={() => document.getElementById("imageUpload").click()}
            >
              {t("Change Picture")}
            </Button>
            <Input
              type="file"
              id="imageUpload"
              accept="image/jpeg, image/png"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="name">{t("Full Name")}</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="border-black"
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="email">{t("Email Address")}</Label>
            <Input
              type="email"
              id="email"
              disabled
              className="border-black"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* School Name */}
          <div>
            <Label htmlFor="schoolName">{t("School Name")}</Label>
            <Input
              type="text"
              id="schoolName"
              className="border-black"
              placeholder="Enter your school name"
              {...register("schoolName")}
            />
          </div>

          {/* Job Role */}
          <div>
            <Label htmlFor="jobrole">{t("Job Role/Position")}</Label>
            <Input
              type="text"
              id="jobrole"
              className="border-black"
              placeholder="Enter your job role"
              {...register("job_role")}
            />
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="contact">{t("Phone Number (Optional)")}</Label>
            <Input
              type="text"
              id="contact"
              placeholder="+123456789"
              className="border-black"
              {...register("contact", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must contain only digits",
                },
              })}
            />
            {errors.contact && (
              <p className="text-sm text-red-500">{errors.contact.message}</p>
            )}
          </div>

          {/* Save Changes */}
          <Button type="submit" className="w-full bg-darkBlue">
            {updateLoading ? <CustomLoader /> : t("Save Changes")}
          </Button>
        </form>
      </CardContent>
    </div>
  );
};

export default EditSchoolAccountForm;
