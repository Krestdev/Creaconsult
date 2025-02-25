import React from "react";

interface BorderDecorationsProps {
  children: React.ReactNode;
}

const BorderDecorationImage = ({ children }: BorderDecorationsProps) => {
  return (
    <div className=" z-[1] pb-[15px] pl-[15px] flex relative ">
      <div className=" relative">
        <div className=" border-[--primary-transparent] duration-300 hover:bg-[--primary-transparent] tracking-[0.5px] border-[1px] border-solid w-full h-full leading-[24px] cursor-pointer rounded-none no-underline inline-block">
          {children}
        </div>
        <div className=" absolute h-[58px] w-[1px] bg-[--primary-transparent] top-[-58px] right-0 bottom-auto left-auto"></div>
        <div className=" absolute h-[20px] w-[1px] bg-[--primary-transparent] top-[-20px] right-auto bottom-auto left-0"></div>
        <div className=" absolute h-[15px] w-[1px] bg-[--primary-transparent] top-auto right-0 bottom-[-15px] left-auto"></div>
        <div className=" absolute h-[55px] w-[1px] bg-[--primary-transparent] top-auto right-auto bottom-[-55px] left-0"></div>

        <div className=" absolute w-[35px] h-[1px] bg-[--primary-transparent] top-auto right-[-35] bottom-0 left-auto"></div>
        <div className=" absolute w-[33px] h-[1px] bg-[--primary-transparent] top-0 right-[-33] bottom-auto left-auto"></div>
        <div className=" absolute w-[15px] h-[1px] bg-[--primary-transparent] top-auto right-auto bottom-0 left-[-15px]"></div>
        <div className=" absolute w-[45px] h-[1px] bg-[--primary-transparent] top-0 right-auto bottom-auto left-[-45px]"></div>
      </div>
    </div>
  );
};

export default BorderDecorationImage;
