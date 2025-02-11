"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form"; // Added Controller
import { useEffect } from "react";
import { useUpdateSchoolteacherMutation } from "@/redux/api/userApi";
import { toast } from "sonner";
import CustomLoader from "@/components/CustomLoader/CustomLoader";

const UpdateUserModal = ({ isOpen, onOpenChange, user }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("status", user.status);
    }
  }, [user, setValue]);

  const id = user?._id;
  const [updateSchoolteacher, { isLoading }] = useUpdateSchoolteacherMutation();

  const onSubmit = async (data) => {
    try {
      const res = await updateSchoolteacher({ id, data }).unwrap();
      if (res.success) {
        toast.success("Teacher details updated successfully");
        onOpenChange(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message || error?.message || "An error occurred.",
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <h1 className="text-center text-2xl">Update {user?.name} details</h1>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* Name */}
          <div>
            <Label htmlFor="name"> Name</Label>
            <Input
              id="name"
              className="border-black"
              {...register("name", { required: "Name is required" })}
              placeholder="John"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          {/* Email (Disabled) */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              className="border-black"
              type="email"
              disabled
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Status Select (Using Controller for react-hook-form) */}
          <div>
            <Label htmlFor="status">Status</Label>
            <Controller
              name="status"
              control={control}
              rules={{ required: "Status is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="status" className="w-full border-black">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Active</SelectItem>
                    <SelectItem value="0">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.status && (
              <p className="text-sm text-red-600">{errors.status.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-darkBlue text-white">
            {isLoading ? <CustomLoader /> : "Update"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserModal;
