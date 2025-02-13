"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/authSlice";
import { toast } from "sonner";

const Sidebar = () => {
  const pathname = usePathname();
  const t = useTranslations("personalInformation");
  const dispatch = useDispatch();
  const router = useRouter();

  const navItems = [
    {
      label: t("Personal Information"),
      path: "/personalInfo",
      icon: <FaUser />,
    },
    {
      label: t("Subscription Details"),
      path: "/subscriptionDetails",
      icon: <GiTakeMyMoney />,
    },
    {
      label: "Comment history",
      path: "/commentHistory",
      icon: <GiTakeMyMoney />,
    },
    {
      label: t("Account Settings"),
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  const handlelogout = () => {
    dispatch(logout());
    toast.success("Logout successful");
    router.push("/");
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden h-[400px] w-80 bg-lightBlue p-6 md:block">
        <h2 className="mb-8 text-lg font-bold">{t("Teacher Comment Hub")}</h2>
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-4">
              <Link
                href={item.path}
                className={`flex items-center gap-4 rounded-md p-2 ${
                  pathname === item.path
                    ? "bg-darkBlue text-white"
                    : "text-gray-600"
                } hover:bg-white hover:text-darkBlue`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <>
              <div
                onClick={handlelogout}
                className="flex cursor-pointer items-center gap-4 rounded-md p-2 hover:bg-white hover:text-darkBlue"
              >
                <>
                  <FaSignOutAlt />
                  {t("Log Out")}
                </>
              </div>
            </>
          </li>
        </ul>
      </div>

      {/* Tab Navigation for smaller screens */}
      <div className="z-50 mt-20 flex justify-center gap-10 bg-lightBlue p-4 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`group relative flex flex-col items-center gap-1 ${
              pathname === item.path
                ? "font-bold text-darkBlue"
                : "text-gray-600"
            }`}
          >
            {item.icon}
            <span className="absolute bottom-full z-50 hidden text-[12px] font-bold text-black group-hover:block">
              {item.label}
            </span>
          </Link>
        ))}
        <Link>
          <div className="flex gap-2">
            <Button className="bg-black">
              <FaSignOutAlt />
              {t("Log Out")}
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
