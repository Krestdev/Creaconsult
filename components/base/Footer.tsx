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
          </div>
          {/* footer body */}
          <div className="flex-1 space-y-4">
            <div className="text-white items-center gap-4 hidden sm:flex">
              {dictionary.footer.links.map((link, index) => (
                <Link key={index} href={link.link}>
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-end">
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
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="hidden md:block text-white">
                  {dictionary.footer.help.title}
                </h4>
                <h6 className="font-semibold md:hidden text-white">
                  {dictionary.footer.help.title}
                </h6>
                <ul>
                  {dictionary.footer.help.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} key={index}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="hidden md:block text-white">
                  {dictionary.footer.service.title}
                </h4>
                <h6 className="font-semibold md:hidden text-white">
                  {dictionary.footer.service.title}
                </h6>
                <ul>
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
              </div>
              <div className=" flex gap-2">
                <div className="flex p-1 md:p-2 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                  <GoogleLogo size={24} />
                </div>
                <div className="flex p-1 md:p-2 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                  <FacebookLogo size={24} />
                </div>
                <div className="flex p-1 md:p-2 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                  <LinkedinLogo size={24} />
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
