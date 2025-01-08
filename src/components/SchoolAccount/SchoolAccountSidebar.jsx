"use client";
import { Link, usePathname } from "@/i18n/routing";

import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const SchoolAccountSideber = () => {
  const pathname = usePathname();

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
      icon: <FaCog />,
    },
    {
      label: "Account Settings",
      path: "/schoolAccountSettings",
      icon: <FaCog />,
    },

    {
      label: "Log Out",
      path: "/guestAuth/welComePage",
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div className="h-[400px] w-80 bg-lightBlue p-6">
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
      </ul>
    </div>
  );
};

export default SchoolAccountSideber;
