"use client";
import CycleHeroSection from "@/components/shared/Navber/CycleHeroSection";
import CycleForm from "./CycleForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const CycleOne = () => {
  const searchParams = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const [neverShowAgain, setNeverShowAgain] = useState(false);
  const guide = searchParams.get("guide");

  const t = useTranslations("cycleOne");

  useEffect(() => {
    const hasSeenGuide = localStorage.getItem("hasSeenGuideCycleOne");

    if (!hasSeenGuide && guide) {
      setShowPopup(true);
    }
  }, [guide]);

  const closePopup = () => {
    if (neverShowAgain) {
      localStorage.setItem("hasSeenGuideCycleOne", "true");
    }
    setShowPopup(false);
  };

  const handleCheckboxChange = (e) => {
    setNeverShowAgain(e.target.checked);
  };

  return (
    <div>
      {/* ============================Hero Section================================ */}
      <section>
        <CycleHeroSection bgImage="/heroone.png" />
      </section>
      <div className="p-8">
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-semibold">{t("User Guide")}</h2>
              <p className="text-gray-700">
                {guide}{" "}
                <Link className="text-blue-600" href="/userguide">
                  {" "}
                  {t("Click Here")}
                </Link>{" "}
              </p>

              <div className="mb-4 mt-5 flex items-center">
                <input
                  type="checkbox"
                  id="neverShowAgain"
                  checked={neverShowAgain}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="neverShowAgain" className="text-purple-900">
                  {t("Never show this again")}
                </label>
              </div>

              <div className="flex justify-end">
                <Button
                  className="rounded bg-purple-900 px-4 py-2 text-white hover:bg-gray-600"
                  onClick={closePopup}
                >
                  {t("Close")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===============================Feedback Section===================================== */}
      <div className="">
        <CycleForm></CycleForm>
      </div>
    </div>
  );
};

export default CycleOne;
