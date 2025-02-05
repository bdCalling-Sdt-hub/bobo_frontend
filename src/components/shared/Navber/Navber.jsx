"use client";
import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/authSlice";

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

  const user = useSelector(selectUser);
  const role = user?.role;

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

  // Translator from next-intl================================================
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
    <div className="mx-auto flex w-[90%] flex-col items-center justify-between rounded-2xl bg-white bg-opacity-60 p-2 px-4 shadow-md md:flex-row">
      {/* ---------------- Avatar & Title Section -------------- */}
      <div className="flex w-full items-center justify-between md:w-auto">
        <div className="flex justify-between">
          <div>
            <Avatar>
              <Link href={role === "3" ? "/editschoolAcount" : "/personalInfo"}>
                <AvatarImage
                  className="w-10 rounded-full"
                  src="https://github.com/shadcn.png"
                />
              </Link>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Link href={role === "3" ? "/schoolHome" : "/home"}>
              <h1 className="ml-12 text-lg font-bold md:text-2xl">
                {t("Teacher Comment Hub")}
              </h1>
            </Link>
          </div>
        </div>

        {/* Mobile Drawer Button */}
        <button onClick={toggleDrawer} className="text-2xl md:hidden">
          {isDrawerOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ---------------- Drawer Menu for Small Screens -------------- */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-3/4 max-w-xs bg-white shadow-md transition-transform ${
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
            href={role === "3" ? "/editschoolAcount" : "/personalInfo"}
            onClick={toggleDrawer}
          >
            <Button className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white">
              {t("Dashboard")}
            </Button>
          </Link>

          <Link href="/contact" onClick={toggleDrawer}>
            <Button className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white">
              Contact
            </Button>
          </Link>

          <Button
            onClick={() => {
              toggleDrawer();
              handleToggleNavigation();
            }}
            className="w-full rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white"
          >
            {isUserGuide ? t("Go Back") : t("User Guide")}
          </Button>
        </nav>
      </div>

      {/* ---------------- Normal Menu for Larger Screens -------------- */}
      <div className="hidden items-center gap-5 md:flex">
        <Link href={role === "3" ? "/editschoolAcount" : "/personalInfo"}>
          <Button className="rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white">
            {t("Dashboard")}
          </Button>
        </Link>

        <Link href="/contact">
          <Button className="rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white">
            Contact
          </Button>
        </Link>

        <Button
          onClick={handleToggleNavigation}
          className="rounded border border-darkBlue bg-transparent px-4 py-2 text-black hover:bg-darkBlue hover:text-white"
        >
          {isUserGuide ? t("Go Back") : t("User Guide")}
        </Button>
      </div>

      {/* ---------------- Language Switcher -------------- */}
      <div className="mt-4 flex items-center justify-center md:mt-0">
        <div className="flex w-28 items-center justify-center rounded-2xl bg-white p-1 px-2">
          <Button
            onClick={() => handleChangeLanguage("fr")}
            className={`w-12 px-3 py-1 transition-all duration-300 ease-in-out ${
              language === "fr" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            FR
          </Button>

          <Button
            onClick={() => handleChangeLanguage("en")}
            className={`w-12 px-3 py-1 transition-all duration-300 ease-in-out ${
              language === "en" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            EN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
