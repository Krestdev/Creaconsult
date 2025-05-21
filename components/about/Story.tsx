"use client";

import { Dictionary } from "@/lib/i18n";
import SectionContainer from "../global/SectionContainer";

interface StoryType {
  dictionary: Dictionary;
}

const Story = ({ dictionary }: StoryType) => {
  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.webp">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full space-y-4">
          <h2 className="font-semibold hidden md:block">
            {dictionary.about.story.title}
          </h2>
          <h4 className="font-bold md:hidden">
            {dictionary.about.story.title}
          </h4>
          <p>{dictionary.about.story.desc}</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          {dictionary.about.story.boxImages.map((ilus, index) => {
            return (
              <div
                key={index}
                className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4 bg-cover bg-bottom"
                style={{
                  backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('${ilus.img}`,
                }}
              >
                <h6 className="text-white">{ilus.title}</h6>
                {/* <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Story;
