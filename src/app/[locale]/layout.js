import ScrollToTopButton from "@/components/ScroltopBUtton/ScrolTopButton";
import "./globals.css";
import NavbarWithConditionalRendering from "@/components/layouts/NavberwithConditional";
import { redirect, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Roboto_Mono } from "next/font/google";
import { Toaster } from "sonner";
import ReduxProviders from "@/redux/lib/ReduxProviders";
import TopLoader from "@/components/TopLoader/TopLoader";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "Teacher Comment Hub",
  description: "Teacher Comment Hub",
};

export default async function RootLayout({ children, params }) {
  const locale = (await params).locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    return redirect("/not-found");
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <>
          <NextIntlClientProvider messages={messages}>
            <ReduxProviders>
              <div className="absolute top-2 z-50 w-full">
               
                <NavbarWithConditionalRendering></NavbarWithConditionalRendering>
              </div>
              <Toaster richColors position="top-center" />
              <>
              <TopLoader/>
              {children}
              </>
              <ScrollToTopButton></ScrollToTopButton>
            </ReduxProviders>
          </NextIntlClientProvider>
        </>
      </body>
    </html>
  );
}
