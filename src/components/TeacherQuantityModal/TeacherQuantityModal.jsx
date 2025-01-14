"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/routing";

const TeacherQuantityModal = ({ isOpen, onOpenChange }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({});
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    onOpenChange(false);
    router.push("/schoolHome");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* Title */}
          <h1 className="text-center text-2xl">
            Specifies the number of teachers to include
          </h1>
          {/* quantity */}
          <div>
            <Label htmlFor="email">Number of Teachers</Label>
            <Input
              id="quantity"
              className="border-black"
              type="number"
              {...register("quantity", {
                required: "quantity is required",
              })}
            />
            {errors.quantity && (
              <p className="text-sm text-red-600">{errors.quantity.message}</p>
            )}
          </div>

          {/* Footer */}

          <Button type="submit" className="w-full bg-darkBlue text-white">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherQuantityModal;
