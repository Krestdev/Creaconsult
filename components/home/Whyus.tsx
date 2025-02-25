import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";
import BorderDecorationImage from "../utils/BorderDecorationImage";

interface WhyusProps {
  lang: Locale;
}

const Whyus = async ({ lang }: WhyusProps) => {
  const dictionary = await getDictionary(lang);
  return (
    <section className="h-[1000px] relative text-white">
      <div>
        <div className="herobg" />
        {/* <div className="bgStyle scale-x-[-1]" /> */}
      </div>
      <div>
        <div className="herobg" />
        <div className="bgLines_Revers opacity-15" />
        <div className="bgStyle_Revers" />
        <div className="absolute z-[2] top-0 w-full h-[1000px] bg-black opacity-60" />
      </div>
      <div className="absolute z-[5] w-full flex flex-col space-y-20 justify-center items-center py-[180px] h-screen">
        <div className="max-w-7xl w-full grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="col-span-1 relative space-y-8">
            <BorderDecorationImage>
              <img
                src="/ui/why/whyus.jpeg"
                className="w-full h-full max-w-[450px]"
                alt=""
              />
            </BorderDecorationImage>
            <img
              src="/ui/why/housplan.jpeg"
              alt=""
              className="absolute -z-[1] -bottom-10 max-w-[400px] -left-10 border-[--primary] border-[0.5px]"
            />
          </div>
          <div className="col-span-1 space-y-8">
            <div className="w-full flex flex-col items-center">
              <h2 className="leading-[100%]">{dictionary.why.title.main}</h2>
              <p className="small hidden">{dictionary.why.title.sub}</p>
            </div>
            <div className="space-y-4">
              {dictionary.why.reasons.map((reason, index) => {
                return (
                  <div key={index}>
                    <h4>{reason.title}</h4>
                    <p className="small">{reason.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
