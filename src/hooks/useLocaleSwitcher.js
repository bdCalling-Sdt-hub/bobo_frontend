"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

const localeRegex = /^(?:\/[a-z]{2})?\/(.*)/i;

export default function useLocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const match = pathname ? pathname.match(localeRegex) : null;

  const pathnameWithoutLocale = match ? match[1] : "/";

  const localeSwitcher = (locale) => {
    startTransition(() => {
      router.replace(`/${pathnameWithoutLocale}`, { locale: locale });
    });
  };

  return { localeSwitcher, isPending };
}
