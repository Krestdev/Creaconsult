"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const languages = {
  en: "English",
  fr: "French",
} as const;

interface LanguageSwitcherProps {
  lang: Locale;
  text: boolean;
  children: React.ReactNode;
}

export function LanguageSwitcher({
  lang,
  text = true,
  children,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLanguage(newLang: Locale) {
    if (pathname) {
      const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
      router.push(newPathname);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          let newLang: Locale;
          if (lang === "en") {
            newLang = "fr";
          } else {
            newLang = "en";
          }
          switchLanguage(newLang as Locale);
        }}
      >
        {children}
        {text && languages[lang]}
      </button>
    </div>
  );
}
