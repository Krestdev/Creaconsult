"use client";

import clsx from "clsx";
import { label, p, s } from "framer-motion/client";
import Link from "next/link";
import { List, Translate, X } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black bg-opacity-50 shadow-md" : "bg-transparent"
      )}
    >
      {/* web navbar version start */}
      <div className="container hidden md:block">
        <div className="flex justify-between items-center">
          <div className="text-white flex items-center gap-6 ">
            {[
              { href: "/", label: "Home" },
              { href: "/About", label: "About" },
              { href: "/Services", label: "Services" },
            ].map((item) => {
              const href = item.href.toLowerCase();
              const isActive =
                pathname === "/en" + href || `${pathname}/` === `/en${href}`;

              return (
                <Link key={item.label} href={href}>
                  <span
                    className={clsx(
                      "transition-all duration-300 cursor-pointer",
                      isActive
                        ? "border-b-4 border-[var(--primary)] text-[var(--primary)] bg-white py-2 px-4"
                        : "hover:bg-[var(--primary)] hover:text-white hover:px-4 text-white hover:py-2"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="nav__logo">
            <Link href="/">
              <img
                src="/ui/creaconsultFootLogo.png"
                alt="logo"
                className=" size-20"
              />
            </Link>
          </div>
          <div className="text-white flex items-center gap-6">
            {[{ href: "/News", label: "News" }].map((item) => {
              const href = `/en${item.href.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <Link key={item.label} href={href}>
                  <span
                    className={clsx(
                      "transition-all duration-300 cursor-pointer",
                      isActive
                        ? "border-b-4 border-[var(--primary)] text-[var(--primary)] bg-white py-2 px-4"
                        : "hover:bg-[var(--primary)] hover:text-white hover:px-4 text-white hover:py-2"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <Link href={"/contact"}>
              <span className="bg-[var(--primary)] text-white hover:px-4 px-4 py-2">
                Contact
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Translate size={24} />
              <Link href="/#">English</Link>
            </div>
          </div>
        </div>
      </div>
      {/* web navbar version end */}

      {/* mobile navbar version start */}
      <div className="container md:hidden px-4">
        <div className="flex justify-between items-center">
          <div
            className="text-white flex items-center gap-6 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </div>
          <div className="nav__logo">
            <a href="/">
              <img
                src="/ui/creaconsultFootLogo.png"
                alt="logo"
                className=" size-20"
              />
            </a>
          </div>
          <div className="text-white flex items-center gap-6">
            <Translate size={24} />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={clsx(
            "absolute top-full left-0 w-full bg-black bg-opacity-50 shadow-md py-4 space-y-4 text-center text-white md:hidden",
            isOpen ? "block" : "hidden"
          )}
        >
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <span className="block py-2 hover:text-gray-400">{item}</span>
            </Link>
          ))}
        </motion.div>
      </div>
      {/* mobile navbar version end */}
    </nav>
  );
};

export default Nav;
