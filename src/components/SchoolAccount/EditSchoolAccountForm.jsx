"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { toast } from "@/components/ui/toast";
import Image from "next/image";
import profile from "/public/PImage.jpg";

const EditSchoolAccountForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("/default-profile.jpg");

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
    <div className="mx-auto mt-2 max-w-4xl bg-white bg-opacity-70 pt-0">
      <CardHeader>
        <CardTitle className="text-center">Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="text-center">
              <Image
                src={imagePreview || profile}
                alt="Profile"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-full border-2 border-black object-cover"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-2 bg-darkBlue text-white"
                  >
                    Change Picture
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <Label htmlFor="imageUpload">
                    Upload a new profile picture
                  </Label>
                  <Input
                    type="file"
                    id="imageUpload"
                    accept="image/jpeg, image/png"
                    onChange={handleImageChange}
                    className="mt-2 border-black"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="border-black"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
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
            <Label htmlFor="schoolName">School Name</Label>
            <Input
              type="text"
              id="schoolName"
              className="border-black"
              placeholder="Enter your school name"
              {...register("schoolName")}
            />
          </div>
          {/* School address */}
          <div>
            <Label htmlFor="schooladress">School Address</Label>
            <Input
              type="text"
              id="schooladress"
              className="border-black"
              placeholder="Enter your school name"
              {...register("schooladress")}
            />
          </div>

          {/* job role */}
          <div>
            <Label htmlFor="jobrole">job Role/Position</Label>
            <Input
              type="text"
              id="jobrole"
              className="border-black"
              placeholder="Enter your school name"
              {...register("jobrole")}
            />
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
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

          {/* Save Changes */}
          <Button type="submit" className="w-full bg-darkBlue">
            Save Changes
          </Button>
        </form>
      </CardContent>
    </div>
  );
};

export default EditSchoolAccountForm;
