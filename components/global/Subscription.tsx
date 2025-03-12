import React from "react";
import SectionContainer from "./SectionContainer";

const Subscription = () => {
  return (
    <SectionContainer color="black" img="/ui/global/hands_up.jpg">
      <div className="p-6">
        <div className="flex flex-col items-center justify-center min-h-[350px] text-white">
          <h2 className="font-semibold hidden md:block text-center text-white">
            Subscribe to our newsletter
          </h2>
          <h4 className="font-semibold md:hidden text-center text-white">
            Subscribe to our newsletter
          </h4>
          <p className=" text-center mt-2">
            Get the latest news and updates from Creacosult
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <button className="px-6 py-2 bg-[var(--primary)] text-white mt-2 md:mt-0 md:ml-2 w-full md:w-fit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Subscription;
