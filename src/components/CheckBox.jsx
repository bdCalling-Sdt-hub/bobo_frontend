"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const CheckboxGroup = ({
  title,
  options,
  groupKey,
  setValue,
  bgColor,
  subtitle,
  headbgcolor,
  color,
  hideMinusFor = [], // Add this prop to specify which checkboxes should hide the minus button
}) => {
  const [selectedOptions, setSelectedOptions] = useState(
    options.reduce((acc, option) => {
      acc[option] = null; // null means no selection (reset state)
      return acc;
    }, {}),
  );

  const t = useTranslations("cycleOne");

  // Handle selecting an option (turning it into true)
  const handlePlus = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: true,
    }));
    setValue(`${groupKey}.${option}`, true);
  };

  // Handle deselecting an option (turning it into false)
  const handleMinus = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: false,
    }));
    setValue(`${groupKey}.${option}`, false);
  };

  // Reset an individual option to null (no selection)
  const handleReset = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: null,
    }));
    setValue(`${groupKey}.${option}`, null);
  };

  return (
    <div>
      <h3
        className="mb-2 text-center text-2xl font-bold"
        style={{ color: color }}
      >
        {t(`${title}`)}
      </h3>
      <div
        className="flex flex-col space-y-2 rounded-3xl p-4"
        style={{ backgroundColor: bgColor }}
      >
        <h1
          className="rounded-3xl p-2 text-center text-white"
          style={{ backgroundColor: headbgcolor }}
        >
          {t(`${subtitle}`)}
        </h1>

        {/*================================ Render options========================== */}
        {options.map((option) => (
          <div
            key={option}
            className="flex items-center justify-between rounded p-2"
          >
            <div className="flex items-center">{t(`${option}`)}</div>

            {/* =======================Buttons for +, -, and reset======================== */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className={`rounded px-2 py-1 ${
                  selectedOptions[option] === true
                    ? "bg-green-500 text-white"
                    : "bg-white"
                } text-black`}
                onClick={() => handlePlus(option)}
              >
                +
              </button>

              {/* ===========================Conditionally render the minus button======================= */}
              {!hideMinusFor.includes(option) && (
                <button
                  type="button"
                  className={`rounded px-2 py-1 ${
                    selectedOptions[option] === false
                      ? "bg-red-500 text-white"
                      : "bg-white"
                  } text-black`}
                  onClick={() => handleMinus(option)}
                >
                  -
                </button>
              )}

              <button
                type="button"
                className={`rounded px-2 py-1 ${selectedOptions[option] === null ? "bg-white" : "bg-gray-400"} text-black`}
                onClick={() => handleReset(option)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
