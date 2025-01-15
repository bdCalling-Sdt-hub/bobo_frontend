"use client";
import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { HiMenu, HiX } from "react-icons/hi";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const role = sessionStorage.getItem("role");

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
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
      {/* ---------------- Avatar -------------- */}
      <Link href="">
        <Avatar className="flex items-center justify-center gap-x-5">
          {role === "school" ? (
            <Link href={"/editschoolAcount"}>
              <AvatarImage
                className="w-10 rounded-full"
                src="https://github.com/shadcn.png"
              />
            </Link>
          ) : (
            <Link href={"/personalInfo"}>
              <AvatarImage
                className="w-10 rounded-full"
                src="https://github.com/shadcn.png"
              />
            </Link>
          )}
          {role === "school" ? (
            <Link href={"/schoolHome"}>
              <h1 className="md:text-2xl">{t("Teacher Comment Hub")}</h1>
            </Link>
          ) : (
            <Link href={"/home"}>
              <h1 className="md:text-2xl">{t("Teacher Comment Hub")}</h1>
            </Link>
          )}

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>

      {/* ---------------- Navigation Menu -------------- */}
      <div className="mx-auto justify-center rounded-2xl md:flex">
        {/* Drawer Button for Small Screens */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleDrawer} className="mt-2 text-2xl">
            {isDrawerOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Drawer Content */}
        <div
          className={`fixed left-0 top-0 z-40 h-full w-3/4 max-w-xs bg-white shadow-md transition-transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <button
            onClick={toggleDrawer}
            className="absolute right-4 top-4 text-2xl"
          >
            <HiX />
          </button>
          <nav className="mt-16 flex flex-col gap-4 p-4">
            <Link
              href={role === "school" ? "/editschoolAcount" : "/personalInfo"}
            >
              <Button
                onClick={toggleDrawer}
                className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white sm:w-auto"
              >
                Dashboard
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                onClick={toggleDrawer}
                className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white sm:w-auto"
              >
                Contact
              </Button>
            </Link>

            <Button
              onClick={() => {
                toggleDrawer();
                handleToggleNavigation();
              }}
              className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white sm:w-auto"
            >
              {isUserGuide ? t("Go Back") : t("User Guide")}
            </Button>
          </nav>
        </div>

        {/* Normal Nav for Medium and Larger Screens */}
        <div className="hidden flex-col items-center justify-center gap-2 md:flex md:flex-row md:gap-5">
          <Link
            href={role === "school" ? "/editschoolAcount" : "/personalInfo"}
          >
            <Button className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white sm:w-auto">
              Dashboard
            </Button>
          </Link>

          <Link href="/contact">
            <Button className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white sm:w-auto">
              Contact
            </Button>
          </Link>

          <Button
            onClick={handleToggleNavigation}
            className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white sm:w-auto"
          >
            {isUserGuide ? t("Go Back") : t("User Guide")}
          </Button>
        </div>
      </div>

      <div className="-mt-8 flex items-center justify-center md:mt-0 md:gap-5">
        {/* ---------------- Language Switcher -------------- */}
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
