import React from "react";

const Hero = () => {
  return (
    <section className="z-[11] h-screen sticky top-0 overflow-hidden">
      <div className="h-full flex relative">
        {/* Hero left */}
        <div className="will-change-[transform] flex-grow-0 flex-shrink basis-1/2 relative hero-left-slide-out">
          {/* hero left main */}
          <div className=" bg-[#27323a] flex justify-end items-stretch h-full px-[15px]">
            {/* hero left content */}
            <div className=" z-[111] gap-[80px] relative pt-[140px] max-w-[600px] flex justify-center items-start flex-1 flex-col flex-nowrap">
              {/* hero top text */}
              <div>
                {/*  */}
                <div className="overflow-hidden pb-10">
                  <div className=" tracking-[1.8px] uppercase text-[12px] font-bold leading-[17.6px] ">
                    crafting the future
                  </div>
                </div>
                {/* building your modern Space */}
                <div className="max-w-[475px] overflow-hidden pb-[25px]">
                  <h1 className="my-0 text-[60px] tracking-[-2px] font-light leading-[66px]">
                    Building your modern space
                  </h1>
                </div>
                {/* Transform your vision into reality with our innovative designs, creating modern spaces that blend funtionality, aesthetics, and sustainability. */}
                <div className="max-w-[475px] overflow-hidden">
                  <p className="tracking-[0.5px] mb-[10px] text-[16px] leading-[25px] font-medium text-[#dcc5b7c7]">
                    Transform your vision into reality with our innovative
                    designs, creating modern spaces that blend funtionality,
                    aesthetics, and sustainability.{" "}
                  </p>
                </div>
              </div>
              {/* Hero buttom text */}
              <div className="z-[11] gap-[20px] flex justify-start items-end">
                {/* Hero slide Image */}
                <div className=" overflow-hidden max-w-[186px] pb-10">
                  <h2 className="uppercase text-[40px] font-light leading-[50px] my-0 tracking-[-1.5px] text-[#dcc5b7c7]">
                    Live Project
                  </h2>
                </div>
                {/* hero slide Image */}
                <div className="z-[111] w-[283px] h-[318px] relative">
                  <div className="z-[111] h-full relative overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=" bg-[url('/ui/hero.jpg')] object-cover z-[-100] bg-[50%] bg-cover w-full h-full m-auto absolute -inset-full align-baseline inline-block"
                    >
                      <source src="https://cdn.prod.website-files.com/66d1476206d9b1b69ee2b899%2F66d5470b435f3588b0fea103_4065357-hd_1920_1080_25fps-transcode.mp4" />
                      <source src="https://cdn.prod.website-files.com/66d1476206d9b1b69ee2b899%2F66d5470b435f3588b0fea103_4065357-hd_1920_1080_25fps-transcode.webm" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero right */}
        <div className="flex-1"></div>
        {/* hero line */}
        <div className="w-full h-[1px] bg-[#dcc5b733] max-w-[1780px] mx-auto absolute inset-x-0 top-auto bottom-1/4 hero-line-slide-right"></div>
      </div>
    </section>
  );
};

export default Hero;
