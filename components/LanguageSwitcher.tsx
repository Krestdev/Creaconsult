"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const languages = {
  en: "English",
  fr: "French",
} as const;

interface LanguageSwitcherProps {
  lang: Locale;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLanguage(newLang: Locale) {
    if (pathname) {
      const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
      router.push(newPathname);
    }
  }

  return (
    <div className="flex gap-4">
      {Object.entries(languages).map(([code, name]) => (
        <span
          key={code}
          onClick={() => switchLanguage(code as Locale)}
          className="cursor-pointer small"
        >
          {name}
        </span>
      ))}
    </div>
  );
}
