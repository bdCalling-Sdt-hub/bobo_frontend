"use client";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

const CommentDetailsModal = ({ isOpen, onOpenChange, user }) => {
  console.log(user);
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <h1 className="text-center text-xl">
            Comment Was Genareted for {user?.prompt?.name}{" "}
          </h1>
          <p className="text-center text-sm text-gray-600">
            {new Date(user?.createdAt).toLocaleDateString()}
          </p>
          <h1>Comment : </h1>
          <p>{user?.result}</p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDetailsModal;
