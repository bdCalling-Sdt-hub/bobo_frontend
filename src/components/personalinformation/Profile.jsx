"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import profilePlaceholder from "/public/PImage.jpg";
import { useTranslations } from "next-intl";
import { useGetUserQuery, useUpdateUserMutation } from "@/redux/api/userApi";
import ErrorPage from "../Error";
import CustomLoader from "../CustomLoader/CustomLoader";
import { toast } from "sonner";

const ProfileForm = () => {
  const t = useTranslations("personalInformation");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(profilePlaceholder);

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
        {" "}
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

  // 🔹 Update profile function
  const onSubmit = async (formData) => {
    const submitData = new FormData();

    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("contact", formData.contact || "");
    submitData.append("school", formData.school || "");

    if (image) {
      submitData.append("image", image);
    }

    try {
      const res = await updateUser(submitData).unwrap();
      if (res.success) {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error("Failed to update user profile", error);
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
    <div className="mx-auto mt-2 w-full max-w-5xl bg-white bg-opacity-70 pt-0">
      <CardHeader>
        <CardTitle className="text-center">
          {t("Personal Information")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          {/* 🔹 Profile Image */}
          <Image
            src={imagePreview || profilePlaceholder}
            alt="Profile"
            width={96}
            height={96}
            className="mx-auto h-24 w-24 rounded-full border-2 border-black object-cover"
          />

          {/* 🔹 Change Picture Button with Hidden Input */}
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

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* 🔹 Full Name */}
          <div>
            <Label htmlFor="name">{t("Full Name")}</Label>
            <Input
              type="text"
              id="name"
              placeholder={t("Enter your full name")}
              className="border-black"
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* 🔹 Email Address (Disabled) */}
          <div>
            <Label htmlFor="email">{t("Email Address")}</Label>
            <Input
              type="email"
              id="email"
              className="border-black"
              disabled
              placeholder={t("Enter your email address")}
              {...register("email")}
            />
          </div>

          {/* 🔹 Phone Number */}
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

          {/* 🔹 School Name */}
          <div>
            <Label htmlFor="school">{t("School Name (Optional)")}</Label>
            <Input
              type="text"
              id="school"
              className="border-black"
              placeholder={t("Enter your school name")}
              {...register("school")}
            />
          </div>

          {/* 🔹 Save Changes */}
          <Button
            type="submit"
            className="w-full bg-darkBlue text-white"
            disabled={updateLoading}
          >
            {updateLoading ? <CustomLoader /> : t("Save Changes")}
          </Button>
        </form>
      </CardContent>
    </div>
  );
};

export default ProfileForm;
