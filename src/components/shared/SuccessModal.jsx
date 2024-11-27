"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Copy } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import Swal from "sweetalert2";
import Success from "../Success";

const SuccessModal = ({ open, setOpen, data }) => {
  const t = useTranslations("cycleOne");
  const router = useRouter();
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      />
      <Success></Success>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* Modal Animation using Framer Motion */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg w-full max-w-[50%] mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Dialog.Title className="text-lg font-bold">
            {t("Generated Comment")}
          </Dialog.Title>
          <div className="mt-4">
            <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
              {data ? (
                <p className="break-words mb-2">{data}</p>
              ) : (
                <p>No feedback available. Please try again.</p>
              )}

              {data && (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(data);
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: t("Your comment has been copied"),
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }}
                  className="ml-3 px-3 py-1 rounded"
                >
                  <Copy />
                </button>
              )}
            </div>
          </div>
          <Button
            onClick={() => {
              setOpen(false);
              router.back();
            }}
            className="mt-4 w-full bg-purple-950"
          >
            {t("Close")}
          </Button>
        </motion.div>
      </div>
    </Dialog>
  );
};

export default SuccessModal;
