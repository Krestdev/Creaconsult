import React from "react";
import ButtonLine from "../utils/ButtonLine";
import { getDictionary, Locale } from "@/lib/i18n";

interface HeroProps {
  lang: Locale;
}

const Hero = async ({ lang }: HeroProps) => {
  const dictionary = await getDictionary(lang);
  return (
    <section className="min-h-screen h-fit relative text-white">
      <div>
        <div className="herobg" />
        <div className="bgLines" />
        {/* <div className="bgStyle" /> */}
        <div className="absolute z-[2] top-0 w-full h-screen bg-gradient-to-b from-black via-transparent to-transparent" />
      </div>
      <div className="absolute z-[5] w-full flex justify-center items-center py-[180px] h-screen">
        <div className="max-w-7xl w-full grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="col-span-1 space-y-4">
            <p className=" uppercase small font-extrabold">
              {dictionary.hero.title.small}
            </p>
            <h1 className="leading-[100%]">{dictionary.hero.title.main}</h1>
            <p>{dictionary.hero.title.sub}</p>
            <div className="flex gap-10">
              <ButtonLine text="Contactez-nous" />
              <ButtonLine text="Demandez un devis" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="ml-auto w-full space-y-10">
              <div className=" text-right">
                <h1 className="extra">{dictionary.hero.experience.years}</h1>
                <p className="leading-[100%]">
                  {dictionary.hero.experience.message}
                </p>
              </div>
              <div className=" text-right">
                <h1 className="extra">{dictionary.hero.workers.number}</h1>
                <p className="leading-[100%]">
                  {dictionary.hero.workers.number}
                </p>
              </div>
              <div className="text-right">
                <h5>{dictionary.hero.certification.title}</h5>
                <div className="flex gap-4 w-full justify-end">
                  <div className="flex flex-col items-center">
                    <img
                      src="/ui/isoveritas.png"
                      className="w-[150px] h-[70px] object-cover"
                      alt="veritas sertificate iso 14001"
                    />
                    <p className="small">
                      ISO 14001:2015 <br />
                      <span className="mariyam">Veritas</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[160px] h-[70px] object-cover"
                      src="/ui/isoveritas2.png"
                      alt="veritas sertificate iso 9001"
                    />
                    <p className="small">
                      ISO 9001:2015 <br />
                      <span className="mariyam">Veritas</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[40px] h-[70px] object-cover"
                      src="/ui/ukasMS.png"
                      alt="ukas managment system certificate 0006"
                    />
                    <p className="small">
                      0006 <br />
                      <span className="mariyam">Ukas</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
