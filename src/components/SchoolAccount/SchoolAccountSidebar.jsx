"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";

import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const SchoolAccountSideber = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handlelogout = () => {
    sessionStorage.removeItem("role");
    router.push("/guestAuth/welComePage");
  };

  const navItems = [
    {
      label: "Edit School Account",
      path: "/editschoolAcount",
      icon: <FaUser />,
    },
    {
      label: "Teachers Account",
      path: "/teachersProfile",
      icon: <FaCog />,
    },
    {
      label: "Subscription Management ",
      path: "/subsCriptionManagement",
      icon: <GiTakeMyMoney />,
    },
    {
      label: "Account Settings",
      path: "/schoolAccountSettings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden h-[400px] w-80 bg-lightBlue p-6 md:block">
        <h2 className="mb-8 text-lg font-bold">Teacher Comment Hub</h2>
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
            <button
              onClick={handlelogout}
              className="flex w-full items-center gap-4 rounded-md p-2 hover:bg-white hover:text-darkBlue"
            >
              <FaSignOutAlt /> Logout
            </button>
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
        <button onClick={handlelogout}>
          <FaSignOutAlt />
        </button>
      </div>
    </>
  );
};

export default SchoolAccountSideber;
