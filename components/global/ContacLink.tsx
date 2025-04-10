"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";

const ContacLink = () => {
  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.png">
      <div className="p-6">
        <div className="flex flex-col items-center justify-center min-h-[350px] space-y-[30px]">
          <h2 className="font-semibold hidden md:block text-center">
            Contact us
          </h2>
          <h4 className="font-semibold md:hidden text-center">Contact us</h4>
          <div className="space-y-8">
            <h5 className=" text-center mt-2">
              {`Share your projects and let's work together`}
            </h5>
            <h4 className="flex flex-col md:flex-row items-center justify-center mt-4">
              <Link
                href={"/contact"}
                className="px-6 py-2 bg-[var(--primary)] text-white mt-2 md:mt-0 md:ml-2 w-fit flex items-center"
              >
                Contact us{" "}
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
