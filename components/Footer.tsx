import { getDictionary, Locale } from "@/lib/i18n";
import { LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import BorderDecoration from "./BorderDecoration";

interface FooterProps {
  lang: Locale;
}

const Footer = async ({ lang }: FooterProps) => {
  const dicyionary = await getDictionary(lang);
  return (
    <footer className="h-screen">
      <div className="max-w-7xl w-full mx-auto py-[180px] flex flex-col justify-between h-full">
        {/* <div>News letter</div> */}
        <div className="w-full grid grid-cols-7 gap-4">
          <div className="col-span-2">
            <div className="gap-4 space-y-4">
              <img
                src="/ui/CreaConsultLogoLine.png"
                alt=""
                className="w-full object-cover"
              />
              <p className="opacity-70">
                {`cabinet d’ingénieurs et de maîtrise d’œuvre basé à Douala,
                spécialisé en études sectorielles, contrôle technique et
                développement d'infrastructures, avec un engagement envers la
                satisfaction client, la durabilité environnementale et la
                responsabilité sociale.`}
              </p>
              <div className="flex items-center gap-2">
                <LinkedinFilled className="text-[32px]" />
                <p>linkedin</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-4 py-[40px] px-[50px]">
            <h6>Usefull links</h6>
            <ul className="space-y-2">
              {dicyionary.footer.slice(1).map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.link}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-3">
            <div className="w-full mx-[12px] bg-[--primary-transparent] p-8 space-y-6">
              <div>Subscribe to our news letter and get updates from us</div>
              <div className="flex gap-8">
                <input
                  type="email"
                  className="w-full h-[50px] opacity-70 small"
                />
                <BorderDecoration>
                  <button>Submit</button>
                </BorderDecoration>
              </div>
            </div>
          </div>
        </div>
        <div className=" sapce-y-4">
          <hr className="opacity-50" />
          <p className="small">© 2025 Krestdev. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
