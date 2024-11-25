"use client";
import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Navber = () => {
  const locale = Cookies.get("NEXT_LOCALE");
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [language, setLanguage] = useState(locale);
  const { localeSwitcher, isPending } = useLocaleSwitcher();
  
  console.log("language :",locale)

  // Language switcher handler
  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    localeSwitcher(lang);
  };

  // Set selected locale on mount
  useEffect(() => {
    if (locale) {
      setLanguage(locale);
      setIsLanguageLoading(false);
      return;
    } else if (locale === undefined) {
      return setIsLanguageLoading(false);
    }

    setLanguage("en");
    setIsLanguageLoading(false);
    return;
  }, [locale]);

  // Translator from next-intl
  const t = useTranslations("navbar");

  return (
    <div className=" flex justify-between w-[80%] mx-auto shadow-md px-4 p-1 rounded-2xl bg-white bg-opacity-60 ">
      <Link href="/home">
        <Avatar className=" flex gap-x-5 justify-center items-center">
          <AvatarImage
            className=" w-10 rounded-full"
            src="https://github.com/shadcn.png"
          />
          <h1 className=" md:text-2xl">{t("Teacher Comment Hub")}</h1>

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>

      {/* ---------------- Language Switcher -------------- */}
      {!isLanguageLoading && (
        <div className="flex justify-center items-center p-1 px-2 rounded-2xl bg-white w-32 ">
          <button
            onClick={() => handleChangeLanguage("en")}
            className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${
              language === "en" ? "bg-black text-white" : "bg-white text-black"
            }`}
            // disabled={isPending}
          >
            EN
          </button>

          <button
            onClick={() => handleChangeLanguage("fr")}
            className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${
              language === "fr" ? "bg-black text-white" : "bg-white text-black"
            }`}
            // disabled={isPending}
          >
            FR
          </button>
        </div>
      )}
    </div>
  );
};

export default Navber;
