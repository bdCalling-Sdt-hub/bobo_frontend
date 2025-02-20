import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export async function middleware(req) {
  const { nextUrl } = req;
  const isLoggedIn = req.cookies.get("bobo-accessToken")?.value;

  const isAuthRoute =
    nextUrl.pathname.startsWith("/fr/auth/") ||
    ["/fr/schoolAccountAuth/schoolRegister", "/fr/schoolAccountAuth/initialForm", "/fr/guestAuth/upgradeAccount", "/fr/guestAuth/verifyEmail"].includes(nextUrl.pathname);
  const isGuestRoute = nextUrl.pathname === "/fr/guestAuth/welComePage";
  const isRootRoute = nextUrl.pathname === "/";

  console.log("Middleware triggered:", nextUrl.pathname);

    // Run next-intl middleware first to handle language redirection
    const response = await intlMiddleware(req);
    if (response) return response;

 

  // Allow access to the guest welcome page without redirection
  if (isGuestRoute) {
    return NextResponse.next();
  }

  // Redirect root path to home page
  if (isRootRoute) {
    return NextResponse.redirect(new URL("/fr/home", req.url));
  }

  // Allow access to authentication routes
  if (isAuthRoute) {
    return NextResponse.next();
  }

  // Redirect logged-in users away from auth routes or the root page
  if (isLoggedIn) {
    return NextResponse.next();
  }

  // Redirect non-logged-in users to the welcome page, except for guest/auth routes
  if (!isLoggedIn && !isAuthRoute) {
    return NextResponse.redirect(new URL("/fr/guestAuth/welComePage", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
