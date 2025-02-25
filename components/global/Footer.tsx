import { getDictionary, Locale } from "@/lib/i18n";
import Link from "next/link";
import React from "react";
import BorderDecoration from "../utils/BorderDecoration";
import {
  Award,
  Linkedin,
  Mail,
  Mailbox,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

interface FooterProps {
  lang: Locale;
}

const Footer = async ({ lang }: FooterProps) => {
  const dicyionary = await getDictionary(lang);
  return (
    <footer className="h-fit relative text-white bg-black px-[12px] bgLines_black">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-between h-full">
        {/* <div>News letter</div> */}
        <div className="w-full grid grid-cols-7 gap-4 py-[40px] mx-3 p-8">
          <div className="col-span-2">
            <div>
              <img
                src="/ui/CreaConsultLogoLine.png"
                alt=""
                className="w-[250px] object-cover"
              />
              <div className="space-y-2">
                <FooterlistItem>
                  <MapPin strokeWidth={0.8} />
                  1665 Blvd de la République
                </FooterlistItem>
                <FooterlistItem>
                  <Mailbox strokeWidth={0.8} /> 11735 Douala-Cameroun
                </FooterlistItem>
                <FooterlistItem>
                  <Mail strokeWidth={0.8} />
                  fotsondie@betcreaconsult.com
                  <br /> creaconsult@yahoo.fr
                </FooterlistItem>

                <FooterlistItem>
                  <Phone strokeWidth={0.8} /> +237 233 426 385 <br /> +237 699
                  519 585 <br /> +237 650 645 615
                </FooterlistItem>
              </div>
            </div>
          </div>
          <div className="text-white col-span-2 space-y-4 py-[40px] px-[50px]">
            <h6>Usefull links</h6>
            <ul className="space-y-2">
              {dicyionary.footer.slice(1).map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.link} className="hover:text-[--primary]">
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-3 py-[40px]">
            <div className="w-full space-y-6 text-white">
              <h6>Subscribe to our news letter</h6>
              <div className="flex gap-8">
                <input
                  type="email"
                  className="w-full h-[50px] opacity-70 small"
                />
                <BorderDecoration color="--primary">
                  <button>Submit</button>
                </BorderDecoration>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-[24px]">
              <Linkedin strokeWidth={0.8} className="text-[32px]" />
              <p>linkedin</p>
            </div>
          </div>
        </div>
        <div className=" space-y-2 py-2">
          <hr className="opacity-50" />
          <p className="small">© 2025 Krestdev. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterlistItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-2">{children}</div>;
};

export default Footer;
