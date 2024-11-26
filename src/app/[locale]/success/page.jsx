"use client";

import SuccessModal from "@/components/shared/SuccessModal";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const SuccessPage = () => {
  const data = useSearchParams().get("data");
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <SuccessModal
      open={modalOpen}
      setOpen={setModalOpen}
      data={data}
    ></SuccessModal>
  );
};

export default SuccessPage;
