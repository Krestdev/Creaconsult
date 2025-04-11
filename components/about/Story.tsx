"use client";

import SectionContainer from "../global/SectionContainer";

const Story = () => {
  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.png">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full space-y-4">
          <h2 className="font-semibold hidden md:block">Our Story</h2>
          <h4 className="font-bold md:hidden">Our Story</h4>
          <p>
            {`CREACONSULT, an engineering and project management company founded in 2006, uses its proven expertise to create sustainable living environments. Committed to continuous improvement, we simplify every stage for project owners and investors.`}
          </p>

          <p>
            {`
              Certified ISO 9001 and 14001 (2015 standard), our management combines rigour, quality and environmental commitment. As specialists in institutional, commercial and industrial projects, we apply our cutting-edge technical expertise to ambitious projects.`}
          </p>

          <p>
            {`
              At CREACONSULT, excellence is based on strong professional and ethical values, guaranteeing our customers and partners a privileged and efficient collaboration.`}
          </p>
          <p>
            {
              "Innovative engineering and project management solutions for exceptional projects."
            }
          </p>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            {/* <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div> */}
          </div>
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            {/* <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div> */}
          </div>
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            {/* <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div> */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Story;
