"use client";

import { usePathname } from "@/i18n/routing";
import Navber from "../shared/Navber/Navber";

const NavbarWithConditionalRendering = () => {
  const pathname = usePathname();

  // List of routes where the Navbar should be hidden
  const hiddenRoutes = [
    "/auth",
    "/success",
    "/guestAuth",
    "/schoolAccountAuth",
  ];

  // Check if the current route matches any hidden route
  const shouldHideNavbar = hiddenRoutes.some((route) =>
    pathname.startsWith(route),
  );

  return !shouldHideNavbar ? <Navber /> : null;
};

export default NavbarWithConditionalRendering;
