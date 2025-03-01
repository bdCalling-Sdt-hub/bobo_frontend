"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useCreateSubsCriptionsMutation } from "@/redux/api/SubsCriptionApi";
import { useCheckOutMutation } from "@/redux/api/PaymentApi";
import { toast } from "sonner";

const TeacherQuantityModal = ({ isOpen, onOpenChange, id }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({});
  const [CreateSubscription, { isLoading }] = useCreateSubsCriptionsMutation();
  const [checkOut, { isLoading: paymentLoading }] = useCheckOutMutation();

  const pakage = id;

  const onSubmit = async (data) => {
    const member = data.member;
    try {
      const res = await CreateSubscription({ pakage, member }).unwrap();
      const toastId = toast.loading("Creating SubsCription...");
      if (res.success) {
        const subscription = res?.data._id;

        try {
          const res = await checkOut(subscription);
          if (res.success) {
            toast.success("Order create SuccesFully", toastId);
            toast.dismiss(toastId);
          }

          const paymentLink = res?.data?.data;

          console.log("paymentLink", paymentLink);

          if (!paymentLink) {
            return toast.error("Payment failed");
          }
          if (typeof window !== "undefined") {
            window.location.href = paymentLink;
          }
        } catch (error) {
          toast.error("Failed to create Payment");
        }
      }
    } catch (error) {
      toast.error("Failed to buy subscription");
    }
    console.log(data);
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
              id="member"
              className="border-black"
              type="number"
              {...register("member", {
                required: "Quantity is required",
              })}
            />
            {errors.member && (
              <p className="text-sm text-red-600">{errors.member.message}</p>
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
