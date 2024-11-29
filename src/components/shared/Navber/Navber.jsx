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
    <div className=" md:flex justify-between w-[80%] mx-auto shadow-md px-4 p-1 rounded-2xl bg-white bg-opacity-60 ">
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

      <div className="flex md:gap-5 justify-center items-center">

{/* user guide button */}

        <Button
          onClick={handleToggleNavigation}
          className="px-4 py-2 text-white rounded "
        >
          {isUserGuide ? t("Go Back" ): t("User Guide")}
        </Button>




        {!isLanguageLoading && (
          <div className="flex justify-center items-center p-1 px-2 rounded-2xl bg-white w-32 ">
            <Button
              onClick={() => handleChangeLanguage("fr")}
              className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${
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
              className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${
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
