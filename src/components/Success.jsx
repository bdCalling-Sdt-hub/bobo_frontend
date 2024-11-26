"use client"
import React, { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

const Success = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isConfettiVisible, setIsConfettiVisible] = useState(true);

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

  // Set the confetti to stop after a specific time (e.g., 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiVisible(false);
    }, 10000); // 5000ms = 5 seconds

    // Cleanup timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isConfettiVisible && (
        <ReactConfetti
          width={windowDimensions.width} // Full width of the window
          height={windowDimensions.height} // Full height of the window
        />
      )}

    </div>
  );
};

export default Success;
