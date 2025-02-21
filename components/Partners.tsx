import React from "react";

const Partners = ({}) => {
  return (
    <section className="h-[500px] relative">
      {/* <div>
        <div className="herobg" />
        <div className="bgLines_Revers" />
        <div className="bgStyle" />
        <div className="absolute z-[4] top-0 w-full h-[500px] bg-black opacity-60" />
      </div> */}
      <div className="w-full absolute z-[5] flex items-center">
        <div className="w-full max-w-7xl mx-auto flex items-center min-h-[500px]">
          <div className="border-[#9999999c] border-[10px] h-[200px] w-full flex justify-evenly items-center ">
            <img
              src="/ui/partners/banque.png"
              className="w-[100px] h-[100px] object-cover"
              alt=""
            />
            <img
              src="/ui/partners/bicec.png"
              className="w-[100px] h-[100px] object-contain"
              alt=""
            />
            <img
              src="/ui/partners/feicom.png"
              className="w-[100px] h-[100px] object-cover"
              alt=""
            />
            <img
              src="/ui/partners/smt.png"
              className="w-[100px] h-[100px] object-cover"
              alt=""
            />
            <img
              src="/ui/partners/tradex.png"
              className="w-[100px] h-[100px] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
