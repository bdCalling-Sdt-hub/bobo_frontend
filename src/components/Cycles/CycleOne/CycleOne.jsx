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
      {/* Hero Section */}
      <section>
        <CycleHeroSection bgImage="/heroone.png" />
      </section>
      <div className="p-8">
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">{t("User Guide")}</h2>
              <p className="text-gray-700">
                {guide}{" "}
                <Link className="text-blue-600" href="/userguide">
                  {" "}
                  {t("Click Here")}
                </Link>{" "}
              </p>

              <div className="mb-4 flex items-center mt-5">
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
                  className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={closePopup}
                >
                  {t("Close")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feedback Section */}
      <CycleForm></CycleForm>
    </div>
  );
};

export default CycleOne;
