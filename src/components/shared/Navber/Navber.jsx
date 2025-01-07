"use client";
import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";

const Navber = () => {
  const locale = Cookies.get("NEXT_LOCALE");
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [language, setLanguage] = useState(locale || "fr"); // Default to "fr"
  const { localeSwitcher, isPending } = useLocaleSwitcher();

  console.log("language :", locale);

  // Language switcher handler
  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    Cookies.set("NEXT_LOCALE", lang); // Save to cookies
    localeSwitcher(lang);
  };

  //
  useEffect(() => {
    if (!locale) {
      // Set default language to "fr" if not defined
      setLanguage("fr");
      Cookies.set("NEXT_LOCALE", "fr");
    } else {
      setLanguage(locale);
    }
    setIsLanguageLoading(false);
  }, [locale]);

  // Translator from next-intl
  const t = useTranslations("navbar");
  const router = useRouter();
  const [isUserGuide, setIsUserGuide] = useState(false);

  useEffect(() => {
    setIsUserGuide(router.pathname === "/userguide");
  }, [router.pathname]);

  const handleToggleNavigation = () => {
    if (isUserGuide) {
      router.back();
    } else {
      router.push("/userguide");
    }
    setIsUserGuide(!isUserGuide);
  };

  return (
    <div className="mx-auto w-[80%] justify-between rounded-2xl bg-white bg-opacity-60 p-1 px-4 shadow-md md:flex">
      <Link href="">
        <Avatar className="flex items-center justify-center gap-x-5">
          <Link href={"/personalInfo"}>
            <AvatarImage
              className="w-10 rounded-full"
              src="https://github.com/shadcn.png"
            />
          </Link>

          <Link href={"/home"}>
            <h1 className="md:text-2xl">{t("Teacher Comment Hub")}</h1>
          </Link>

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>

      {/* ---------------- Language Switcher -------------- */}

      <div className="flex items-center justify-center md:gap-5">
        {/* user guide button */}

        <Button
          onClick={handleToggleNavigation}
          className="rounded px-4 py-2 text-white"
        >
          {isUserGuide ? t("Go Back") : t("User Guide")}
        </Button>

        {!isLanguageLoading && (
          <div className="flex w-32 items-center justify-center rounded-2xl bg-white p-1 px-2">
            <Button
              onClick={() => handleChangeLanguage("fr")}
              className={`rounded px-4 py-2 transition-all duration-300 ease-in-out ${
                language === "fr"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              // disabled={isPending}
            >
              FR
            </Button>

            <button
              onClick={() => handleChangeLanguage("en")}
              className={`rounded px-4 py-2 transition-all duration-300 ease-in-out ${
                language === "en"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              // disabled={isPending}
            >
              EN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
