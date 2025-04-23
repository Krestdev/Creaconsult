import { Dictionary } from "@/lib/i18n";
import Link from "next/link";
import React from "react";

interface HeroType {
  dictionary: Dictionary;
}

const Hero = ({ dictionary }: HeroType) => {
  return (
    <section className="containerParent bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/ui/home/hero_sky_scapers.jpeg')] bg-cover bg-center">
      <div className="container flex justify-between items-center gap-4 min-h-[700px]">
        <div className="flex flex-col gap-2 text-white mx-4">
          <small className="font-bold uppercase link_button w-fit border-b-white border-b-4">
            {dictionary.hero.title.small}
          </small>
          <h3 className="font-semibold max-w-[600px] md:hidden w-full text-white">
            {/* Turn your projects into reality with Creaconsult. */}
            {dictionary.hero.title.main}
          </h3>
          <h1 className="font-semibold max-w-[600px] hidden md:block text-white">
            {/* Turn your projects into reality with Creaconsult. */}
            {dictionary.hero.title.main}
          </h1>
          <p className="max-w-[750px] text-3xl mb-4">
            {dictionary.hero.title.sub}
          </p>
          <div className="flex gap-2 flex-col md:flex-row">
            <Link href={"/contact"} className="link_button w-fit">
              {dictionary.hero.action.contact}
            </Link>
            <Link href={"/contact"} className="link_button_outline w-fit">
              {dictionary.hero.action.devis}
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="hidden md:flex gap-4 ">
          <div className="flex flex-col gap-4 mt-[50px] w-fit">
            <img
              src="/ui/home/hero_sky_scapers.jpeg"
              className="size-[250px] shadow-black shadow-lg"
              alt=""
            />
            <img
              src="/ui/home/hero_building2.jpeg"
              className="size-[250px] shadow-black shadow-lg"
              alt=""
            />
          </div>
          <img
            src="/ui/home/hero_building1.jpeg"
            className="w-[250px] h-[516px] mb-[50px] shadow-black shadow-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
