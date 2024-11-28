"use client"
import CycleHeroSection from "@/components/shared/Navber/CycleHeroSection";
import CycleTwoForm from "./CycleTwoForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const CycleTwo = () => {

  const searchParams = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const guide = searchParams.get("guide");

  useEffect(() => {
    // Check if the guide has been shown before
    const hasSeenGuide = localStorage.getItem("hasSeenGuideCycleTwo");

    if (!hasSeenGuide && guide) {
      setShowPopup(true); // Show the popup only if it's the first time
      localStorage.setItem("hasSeenGuideCycleTwo", "true"); // Mark as seen
    }
  }, [guide]);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <section>
        <CycleHeroSection bgImage="/herotow.png" />
      </section>

      <div className="p-8">
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-4">User Guide</h2>
              <p className="text-gray-700 mb-6">{guide}</p>
              <div className="flex justify-end">
                <Button
                  className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={closePopup}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <CycleTwoForm></CycleTwoForm>
    </div>
  );
};

export default CycleTwo;
