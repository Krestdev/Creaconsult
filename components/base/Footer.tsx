"use client";

import { Dictionary } from "@/lib/i18n";
import Link from "next/link";
import { FacebookLogo, GoogleLogo, LinkedinLogo } from "phosphor-react";

interface FooterProps {
  dictionary: Dictionary;
}

const Footer = ({ dictionary }: FooterProps) => {
  return (
    <footer
      className="containerParent bg-[var(--primary)] text-white bg-cover bg-center py-[24px] !text-[14px]"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url('/ui/global/bglinesDeco2.png')`,
      }}
    >
      <div className="container">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-2 p-4">

          {/* body */}
          <div className="flex flex-col justify-between w-full max-w-[400px] col-span-2">
            <div className="">
              <img
                src="/ui/CreaConsultLogoLine.png"
                alt="logo"
                className="w-[150px] h-[50px]"
              />
              <p className="italic !text-[12px]">{"Performing for real progress"}</p>
            </div>
            <div className="flex gap-2 overflow-hidden justify-start flex-col md:flex-row ">
              <div className="flex gap-4 items-center">
                <img
                  src="/ui/certificates/isoveritas.png"
                  alt="certificates"
                  className="h-[4rem] "
                />
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="/ui/certificates/isoveritas2.png"
                  alt="certificates"
                  className="h-[4rem] object-cover"
                />
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="/ui/certificates/ukasMS.png"
                  alt="certificates"
                  className="h-[4rem] w-[3rem] object-cover"
                />
              </div>
            </div>
          </div>

          {/* footer body */}
          <div className="w-fit">
            <div className="flex flex-col">
              <div className="">
                <h6 className="hidden md:block text-[#DE9BB8] text-[16px]">
                  {dictionary.footer.info.title}
                </h6>
                <h6 className="md:hidden text-[#DE9BB8] font-bold">
                  {dictionary.footer.info.title}
                </h6>
                <ul>
                  {dictionary.footer.info.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} key={index} className="!text-[14px]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {dictionary.footer.service.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="!text-[14px]">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          </div>
          <div className="text-white gap-1 flex flex-col">
            <h6 className="text-[#DE9BB8] text-[16px]">{dictionary.lien}</h6>
            {dictionary.footer.links.map((link, index) => (
              <Link key={index} href={link.link} className="!text-[14px]">
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col lg:flex space-y-2 !text-[14px]">
            <h6 className="hidden md:block text-[#DE9BB8] w-full text-nowrap text-[16px]">
              {dictionary.footer.contact.title}
            </h6>
            <h6 className="md:hidden text-[#DE9BB8] ">
              {dictionary.footer.contact.title}
            </h6>
            <ul>
              {dictionary.footer.contact.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="!text-[10px]">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 !mt-4">
              <Link
                href={
                  "https://www.facebook.com/share/15VLXDHCRP/?mibextid=wwXIfr"
                }
                className="flex p-1 md:p-2 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit"
              >
                <FacebookLogo size={24} />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/betcreaconsult/"}
                className="flex p-1 md:p-2 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit"
              >
                <LinkedinLogo size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-5">
        </div>
        <hr />
        <div className="p-4 flex justify-between flex-col md:flex-row text-center text-white !text-[14px]">
          <p className="!text-[14px]">© 2023 CreaConsult. {dictionary.droit}</p>
          <p className="!text-[14px]">
            {dictionary.design}{" "}
            <Link href="https://creaconsult.com" className="text-blue-500">
              KrestDev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
