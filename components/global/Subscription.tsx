import React from "react";
import SectionContainer from "./SectionContainer";
import { Dictionary } from "@/lib/i18n";

interface SubscriptionProps {
  dictionary: Dictionary;
}

const Subscription = ({ dictionary }: SubscriptionProps) => {
  return (
    <SectionContainer color="black" img="/ui/global/hands_up.jpg">
      <div className="p-6">
        <div className="flex flex-col items-center justify-center min-h-[350px] text-white">
          <h2 className="font-semibold hidden md:block text-center text-white">
            {dictionary.newsLetter.title.main}
          </h2>
          <h4 className="font-semibold md:hidden text-center text-white">
            {dictionary.newsLetter.title.main}
          </h4>
          <p className=" text-center mt-2">{dictionary.newsLetter.title.sub}</p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <button className="px-6 py-2 bg-[var(--primary)] text-white mt-2 md:mt-0 md:ml-2 w-full md:w-fit">
              {dictionary.newsLetter.buttons.link}
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Subscription;
