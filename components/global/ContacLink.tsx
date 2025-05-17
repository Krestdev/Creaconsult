"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { Dictionary } from "@/lib/i18n";

interface ContactLinkProps {
  dictionary: Dictionary;
}

const ContacLink = ({ dictionary }: ContactLinkProps) => {
  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.png" className="py-0">
      <div className="p-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold hidden md:block text-center">
            {dictionary.contact.title.main}
          </h2>
          <h4 className="font-semibold md:hidden text-center">
            {dictionary.contact.title.main}
          </h4>
          <div className="space-y-3 md:space-y-8">
            <h5 className=" text-center mt-2 text-[16px] md:text-[25px]">
              {dictionary.contact.title.sub}
            </h5>
            <h4 className="flex flex-col md:flex-row items-center justify-center mt-4">
              <Link
                href={"/contact"}
                className="text-[16px] md:text-[31px] px-6 py-2 bg-[var(--primary)] text-white mt-2 md:mt-0 md:ml-2 w-fit flex items-center"
              >
                {dictionary.contact.buttons.link}
                <ArrowRight size={24} weight="bold" className="ml-2" />
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContacLink;
