import React from "react";

interface BorderDecorationsProps {
  children: React.ReactNode;
  color?: string;
}

const BorderDecoration = ({ children, color }: BorderDecorationsProps) => {
  const bg = color ? color : "#000000ab";
  return (
    <div className=" z-[1] pb-[15px] pl-[15px] flex relative ">
      <div className=" relative">
        <div
          className={` 
           border-[${bg}] duration-300 hover:bg-[--primary-transparent] bg-[#dcc5b700] tracking-[0.5px] uppercase border-[1px] border-solid py-[10px] px-[40px] leading-[24px] cursor-pointer rounded-none no-underline inline-block`}
        >
          {children}
        </div>
        <div
          className={` absolute h-[18px] w-[1px] bg-[--primary] top-[-18px] right-0 bottom-auto left-auto`}
        ></div>
        <div
          className={` absolute h-[20px] w-[1px] bg-[--primary] top-[-20px] right-auto bottom-auto left-0`}
        ></div>
        <div
          className={` absolute h-[15px] w-[1px] bg-[--primary] top-auto right-0 bottom-[-15px] left-auto`}
        ></div>
        <div
          className={` absolute h-[25px] w-[1px] bg-[--primary] top-auto right-auto bottom-[-25px] left-0`}
        ></div>

        <div
          className={` absolute w-[15px] h-[1px] bg-[--primary] top-auto right-[-15] bottom-0 left-auto`}
        ></div>
        <div
          className={` absolute w-[23px] h-[1px] bg-[--primary] top-0 right-[-23] bottom-auto left-auto`}
        ></div>
        <div
          className={` absolute w-[15px] h-[1px] bg-[--primary] top-auto right-auto bottom-0 left-[-15px]`}
        ></div>
        <div
          className={` absolute w-[15px] h-[1px] bg-[--primary] top-0 right-auto bottom-auto left-[-15px]`}
        ></div>
      </div>
    </div>
  );
};

export default BorderDecoration;
