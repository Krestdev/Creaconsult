"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { useEffect } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


const locales = ["en", "fr"] as const;
const languages = {
  en: "English",
  fr: "Français",
} as const;

interface LanguageSwitcherProps {
  lang: Locale;
  text?: boolean;
  children?: React.ReactNode;
}

export function LanguageSwitcher({
  lang,
  text = true,
  children,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Initialize language preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check cookie first
      const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1];

      // Then check localStorage
      const storageLocale = localStorage.getItem("NEXT_LOCALE");

      // If neither exists, set both
      if (!cookieLocale && !storageLocale) {
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
        localStorage.setItem("NEXT_LOCALE", lang);
      }
    }
  }, [lang]);

  function switchLanguage(newLang: Locale) {
    if (!pathname) return;

    // Update both storage mechanisms
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    localStorage.setItem("NEXT_LOCALE", newLang);

    // Update URL
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLang;
    } else {
      segments.splice(1, 0, newLang);
    }
    router.push(segments.join("/"));
  }

  return (
    // <button
    //   onClick={() => switchLanguage(lang === "en" ? "fr" : "en")}
    //   className="flex gap-2 items-center"
    //   aria-label="Switch language"
    // >
    //   {children}
    //   {text && (
    //     <span className="hidden sm:inline">
    //       {languages[lang === "en" ? "fr" : "en"]}
    //     </span>
    //   )}
    // </button>
    <Select defaultValue={lang} onValueChange={switchLanguage}>
      <SelectTrigger className="w-fit text-black">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            locales.map((locale) => (
              <SelectItem
                key={locale}
                value={locale}
                onClick={() => switchLanguage(locale)}
              >
                {languages[locale]}
              </SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
