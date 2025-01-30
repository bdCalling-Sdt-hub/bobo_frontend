import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("cycleOne");
  return (
    <div>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/authbg.png)" }}
      >
        <div className="text-primary-black m-2 w-full rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]">
          <h1 className="text-center text-3xl">{t("Welcome")}!</h1>
          <p className="text-center text-lg text-black">
            {t("Choose how you like to get started")}
          </p>

          <Link href="/guestAuth/upgradeAccount">
            <Button className="mt-10 block h-[2.7rem] w-full border-2 border-black bg-purple-950 text-xl hover:text-white">
              {t("Signup")}
            </Button>
          </Link>

          <Link href="/guestAuth/verifyEmail">
            <Button className="mt-10 block h-[2.7rem] w-full border-2 border-black bg-transparent text-xl text-black hover:bg-purple-950 hover:text-white">
              {t("Continue as a Guest")}
            </Button>
          </Link>
          <div className="mt-5 flex items-center justify-center gap-2">
            <p>{t("Already have an account?")}</p>
            <Link href="/auth/login" className="hover-underline font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
