"use client";
import { Link, usePathname } from "@/i18n/routing";

import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Personal Information",
      path: "/personalInfo",
      icon: <FaUser />,
    },
    {
      label: "Subscription Details",
      path: "/subscriptionDetails",
      icon: <FaCog />,
    },
    {
      label: "Account Settings",
      path: "/settings",
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

export default Sidebar;
