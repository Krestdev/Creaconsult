import React from "react";
import SectionContainer from "./SectionContainer";

const Partners = () => {
  return (
    <SectionContainer>
      <div className="space-y-6">
        <h2 className="font-semibold hidden md:block">Partners</h2>
        <h4 className="font-bold md:hidden">Partners</h4>
        <div className="flex gap-6 flex-wrap md:flex-nowrap">
          <div className="flex justify-center items-center p-2 bg-gray-200 w-[100px] h-[150px] shadow-md shadow-black/50">
            <img
              src="/ui/partners/feicom.png"
              alt="feicom"
              className="w-full object-cover saturate-0 hover:saturate-100"
            />
          </div>
          <div className="flex justify-center items-center p-2 bg-gray-200 w-[100px] h-[150px] shadow-md shadow-black/50">
            <img
              src="/ui/partners/smt.png"
              alt="feicom"
              className="w-full object-cover saturate-0 hover:saturate-100"
            />
          </div>
          <div className="flex justify-center items-center p-2 bg-gray-200 w-[100px] h-[150px] shadow-md shadow-black/50">
            <img
              src="/ui/partners/tradex.png"
              alt="feicom"
              className="w-full object-cover saturate-0 hover:saturate-100"
            />
          </div>
          <div className="flex justify-center items-center p-2 bg-gray-200 w-[100px] h-[150px] shadow-md shadow-black/50">
            <img
              src="/ui/partners/bicec.png"
              alt="feicom"
              className="w-full object-cover saturate-0 hover:saturate-100"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Partners;
