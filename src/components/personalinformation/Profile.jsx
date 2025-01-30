"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/toast";
import Image from "next/image";
import profile from "/public/PImage.jpg";
import { useTranslations } from "next-intl";

const ProfileForm = () => {
  const t = useTranslations("personalInformation");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(profile);

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone || "");
    formData.append("schoolName", data.schoolName || "");

    if (image) {
      formData.append("profileImage", image);
    }

    console.log("Form submitted:", data);
    toast({
      title: "Profile Updated",
      description: "Your changes have been saved.",
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        toast({
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

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName">{t("Full Name")}</Label>
            <Input
              type="text"
              id="fullName"
              placeholder={t("Enter your full name")}
              className="border-black"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="email">{t("Email Address")}</Label>
            <Input
              type="email"
              id="email"
              className="border-black"
              placeholder={t("Enter your email address")}
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

          {/* Phone Number */}
          <div>
            <Label htmlFor="phone">{t("Phone Number (Optional)")}</Label>
            <Input
              type="text"
              id="phone"
              placeholder="+123456789"
              className="border-black"
              {...register("phone", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must contain only digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* School Name */}
          <div>
            <Label htmlFor="schoolName">{t("School Name (Optional)")}</Label>
            <Input
              type="text"
              id="schoolName"
              className="border-black"
              placeholder={t("Enter your school name")}
              {...register("schoolName")}
            />
          </div>

          {/* Save Changes */}
          <Button type="submit" className="w-full bg-darkBlue text-white">
            {t("Save Changes")}
          </Button>
        </form>
      </CardContent>
    </div>
  );
};

export default ProfileForm;
