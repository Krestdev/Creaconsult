import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";

interface WhyusProps {
  lang: Locale;
}

const Whyus = async ({ lang }: WhyusProps) => {
  const dictionary = await getDictionary(lang);
  return (
    <section className="h-screen bg-[#5c5b5b] relative">
      <div>
        <div className="herobg" />
        <div className="bgLines_Revers" />
        <div className="bgStyle_Revers" />
        <div className="absolute z-[4] top-0 w-full h-screen bg-black opacity-60" />
      </div>
      <div>
        <div className="herobg" />
        <div className="bgStyle" />
      </div>
      <div className="absolute z-[5] w-full flex flex-col space-y-20 justify-center items-center py-[180px] h-screen">
        <div className="max-w-7xl w-full grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="col-span-1 relative space-y-8">
            <div className="w-full flex flex-col items-center">
              <h2 className="leading-[100%]">{dictionary.why.title.main}</h2>
              <p className="small hidden">{dictionary.why.title.sub}</p>
            </div>

            <img src="https://placehold.co/400x500" alt="" />
            <img
              src="https://placehold.co/200x300"
              alt=""
              className="absolute -z-[1] -bottom-10 -left-10"
            />
          </div>
          <div className="col-span-1">
            <div className="space-y-4">
              {dictionary.why.reasons.map((reason, index) => {
                return (
                  <div key={index}>
                    <h6>{reason.title}</h6>
                    <p className="small font-light">{reason.desc}</p>
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
