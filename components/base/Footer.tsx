"use client";

import {
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="containerParent bg-[var(--primary)] text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/ui/footer/bglines.png')`,
      }}
    >
      <div className="container ">
        <div className="w-full flex flex-col md:flex-row justify-between items-start p-6 gap-6">
          {/* body */}
          <div className="space-y-8 max-w-[400px]">
            <div className="space-y-4">
              <img
                src="/ui/CreaConsultLogoLine.png"
                alt="logo"
                className="w-[150px] h-[50px]"
              />
              <p>
                Des solutions innovantes en ingénierie et maîtrise d'œuvre pour
                des projets d'exception.
              </p>
            </div>

            <div className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="@ Enter your email"
                className="px-4 py-2 border-b bg-transparent focus:outline-none focus:border-[var(--primary)]"
              />
              <button className="px-6 py-2 text-[var(--primary)] bg-white mt-2 md:mt-0 md:ml-2">
                Subscribe
              </button>
            </div>
          </div>
          {/* footer body */}
          <div className="flex-1 space-y-4">
            <div className="text-white items-center gap-4 hidden sm:flex">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/news">News</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              <div className="space-y-2">
                <h4 className="hidden md:block text-white">Information</h4>
                <h6 className="font-semibold md:hidden text-white">
                  Information
                </h6>
                <ul>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/news">News</a>
                  </li>
                  <li>
                    <a href="/#">Testimonials</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="hidden md:block text-white">Helpful Links</h4>
                <h6 className="font-semibold md:hidden text-white">
                  Helpful Links
                </h6>
                <ul>
                  <li>
                    <a href="/service">Services</a>
                  </li>
                  <li>
                    <a href="/#">Terms $ Condition</a>
                  </li>
                  <li>
                    <a href="/#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="hidden md:block text-white">Our Services</h4>
                <h6 className="font-semibold md:hidden text-white">
                  Our Services
                </h6>
                <ul>
                  <li>
                    <a href="/services">Expertise</a>
                  </li>
                  <li>
                    <a href="/#">Projects</a>
                  </li>
                  <li>
                    <a href="/#">Case study</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="hidden md:block text-white">Contact Us</h4>
                <h6 className="font-semibold md:hidden text-white ">
                  Contact Us
                </h6>
                <ul>
                  <li>
                    <a href="/#">+91 9999 9999 999</a>
                  </li>
                  <li>
                    <a href="/#">yahoomail@yahoo.fr</a>
                  </li>
                </ul>
              </div>
              <div className=" flex gap-2">
                <div className="flex p-1 md:p-2 lg:p-4 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                  <GoogleLogo size={24} />
                </div>
                <div className="flex p-1 md:p-2 lg:p-4 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                  <FacebookLogo size={24} />
                </div>
                <div className="flex p-1 md:p-2 lg:p-4 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
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
            <a href="https://creaconsult.com" className="text-blue-500">
              KrestDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
