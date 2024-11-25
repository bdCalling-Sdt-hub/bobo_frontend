"use client"// ScrollToTopButton.jsx
import { cn } from "@/lib/utils";
import { ChevronsUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to show or hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show button after scrolling down 300px
      } else {
        setIsVisible(false); // Hide button if scrolled up
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-10 right-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black text-black transition-all duration-300 ease-in-out hover:bg-purple-900 hover:text-white",
          isVisible ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
      <ChevronsUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
