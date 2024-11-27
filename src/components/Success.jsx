"use client";
import React, { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

const Success = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // To track the fade-out state

  // Update the window dimensions when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set the confetti to start on success and stop after a specific time
  useEffect(() => {
    // Simulating success event by triggering after the component mounts
    const successTimeout = setTimeout(() => {
      setIsConfettiVisible(true); // Trigger confetti on success
    }, 0.0); // Wait 1 second before triggering confetti

    // Set a timer to start fading out the confetti after 9 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true); // Start fade-out effect
    }, 9000); // 9000ms = 9 seconds

    // Set a timer to stop the confetti after 10 seconds
    const stopConfettiTimer = setTimeout(() => {
      setIsConfettiVisible(false);
    }, 15000); // 10000ms = 10 seconds

    // Cleanup timers if the component unmounts
    return () => {
      clearTimeout(successTimeout);
      clearTimeout(fadeOutTimer);
      clearTimeout(stopConfettiTimer);
    };
  }, []);

  return (
    <div>
      {isConfettiVisible && (
        <ReactConfetti
          width={windowDimensions.width} // Full width of the window
          height={windowDimensions.height} // Full height of the window
          style={{
            opacity: isFadingOut ? 0 : 1, // Apply fade-out effect
            transition: "opacity 1s ease-out", // Smooth transition for opacity
          }}
        />
      )}
    </div>
  );
};

export default Success;
