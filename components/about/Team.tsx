"use client";

import { FacebookLogo, GoogleLogo, LinkedinLogo } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";
import { Dictionary } from "@/lib/i18n";
import Member from "./Member";
import { EquipeCar } from "./EqupeCar";

interface TeamProps {
  dictionary: Dictionary;
}

const Team = ({ dictionary }: TeamProps) => {
  return (
    <SectionContainer>
      <div className="mb-4">
        <h2 className="font-semibold hidden md:block">
          {dictionary.team.title}
        </h2>
        <h4 className="font-semibold md:hidden">{dictionary.team.title}</h4>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-end gap-4">
        {dictionary.team.posts.map((personel, index) => {
          console.log(personel);
          
          return (
            <div key={index} className="w-full">
              <Member personel={personel} />
            </div>
          );
        })}
      </div> */}
      <div className="flex flex-col gap-8">
        <EquipeCar personel={dictionary.team.posts} direction={"droite"} />
        <EquipeCar personel={dictionary.team.posts} direction={"gauche"} />
      </div>
    </SectionContainer>
  );
};

export default Team;
