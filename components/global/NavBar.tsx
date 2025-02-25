import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";
import { LanguageSwitcher } from "../utils/LanguageSwitcher";
import Link from "next/link";

const NavBar = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <section className="absolute top-0 w-full z-[100]">
      <div className="text-white flex justify-between items-center max-w-7xl h-[85px] mx-auto px-[15px]">
        <Link href={dictionary.navbar[0].link}>
          <img
            className="w-[170px] h-full object-cover"
            src="/ui/CreaConsultLogoLine.png"
            alt=""
          />
        </Link>
        <div className="flex gap-4">
          {dictionary.navbar.slice(1).map((navLink, index) => {
            return (
              <Link key={index} href={navLink.link}>
                {navLink.title}
              </Link>
            );
          })}
        </div>
        <div>
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
