import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/routing";

const page = () => {
  return (
    <div>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/authbg.png)" }}
      >
        <div className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[35%]">
          <h1 className="text-center text-3xl">Welcome!</h1>
          <p className="text-center text-lg text-black">
            Choose how you like to get started
          </p>

          <Link href="/guestAuth/upgradeAccount">
            <Button className="mt-10 block h-[2.7rem] w-full border-2 border-black bg-transparent text-black hover:bg-purple-950 hover:text-white">
              signup
            </Button>
          </Link>

          <Link href="/guestAuth/verifyEmail">
            <Button className="mt-10 block h-[2.7rem] w-full border-2 border-black bg-transparent text-black hover:bg-purple-950 hover:text-white">
              Continue as a Guest
            </Button>
          </Link>
          <div className="mt-5 flex items-center justify-center gap-2">
            <p>Already have an account?</p>
            <Link href="/auth/login" className="hover-underline font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
