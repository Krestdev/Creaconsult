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
      className="containerParent bg-[var(--primary)] text-white bg-cover bg-center py-[24px]"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.6)),url('/ui/global/bglinesDeco2.png')`,
      }}
    >
      <div className="container ">
        <div className="w-full flex flex-col md:flex-row justify-between items-start p-6 gap-10">
          {/* body */}
          <div className="flex flex-col justify-between w-full max-w-[400px] h-full min-h-[250px]">
            <div className="space-y-4">
              <img
                src="/ui/CreaConsultLogoLine.png"
                alt="logo"
                className="w-[150px] h-[50px]"
              />
              <p className="italic">{"Performing for real progress"}</p>
            </div>
            <div className="flex gap-2 overflow-hidden justify-start flex-col md:flex-row">
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
          <div className="w-fit space-y-4">
            <div className="text-white items-center gap-4 hidden sm:flex">
              {dictionary.footer.links.map((link, index) => (
                <Link key={index} href={link.link}>
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-2">
                <h4 className="hidden md:block text-white">
                  {dictionary.footer.info.title}
                </h4>
                <h6 className="font-semibold md:hidden text-white">
                  {dictionary.footer.info.title}
                </h6>
                <ul>
                  {dictionary.footer.info.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} key={index}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {dictionary.footer.service.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="hidden md:block text-white">
                  {dictionary.footer.contact.title}
                </h4>
                <h6 className="font-semibold md:hidden text-white ">
                  {dictionary.footer.contact.title}
                </h6>
                <ul>
                  {dictionary.footer.contact.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className=" flex gap-2 !mt-4">
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
          </div>
        </div>
        <hr />
        <div className="p-4 flex justify-between flex-col md:flex-row text-center text-white">
          <p>© 2023 CreaConsult. All rights reserved.</p>
          <p>
            Designed by{" "}
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
