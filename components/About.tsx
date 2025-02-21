import React from "react";

const About = () => {
  return (
    <div className="z-[11] relative">
      <section className="h-[80vh] sticky top-0 overflow-hidden block">
        {/* About main */}
        <div className="h-full flex relative">
          {/* About left */}
          <div className="flex-grow-0 flex-shrink basis-1/2">
            {/* About left main */}
            <div className=" flex px-[15px] h-full items-stretch justify-end">
              {/* About left content */}
              <div className=" flex-1 flex justify-start items-center max-w-[600px]">
                {/* About left content paragraph */}
                <div className=" overflow-hidden max-w-[360px]">
                  <p className="text-[#dcc5b7c7] tracking-[0.5px] mb-[10px] text-[16px] font-medium leading-[25px]">
                    Transform your vision into reality with our innovative
                    designs, creating modern spaces that blend functionality,
                    aesthetics, and sustainability..
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* About right */}
          <div className="flex-1"></div>
          {/* Hero line change position */}
          <div className=" bg-[#dcc5b733] w-full max-w-[1780px] h-[1px] mx-auto absolute inset-y-auto inset-x-0 bottom-1/4"></div>
        </div>
      </section>
      {/* Big text wrapper */}
      <div className="h-[240px] z-[11111] sticky top-[70vh] overflow-hidden">
        <div className=" pb-[10px] w-[1452px]">
          <h2 className="text-[180px] leading-[240px] font-light text-center uppercase">
            Architecture
          </h2>
        </div>
      </div>
      {/* Service */}
      <section className="bg-[#27323a] h-[100vh] pt-[100px] px-[15px] sticky overflow-hidden block">
        {/* main content */}
        <div className="mx-auto max-w-[1230px]">
          {/* Service wrapper */}
          <div className="z-[111] relative flex justify-between gap-[40px] items-stretch ">
            {/* home left */}
            <div className="pr-[300px] flex relative">
              {/* service item left */}
              <div className=" justify-start items-start mt-[60px] flex">
                {/* image one */}
                <div className=" will-change-[opacity] opacity-[1]">
                  <img
                    sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 52vw, (max-width: 1279px) 30vw, 378.875px"
                    src="https://cdn.prod.website-files.com/6655a30f8b93f910e3bf2ef6/66d80261fe4077592fbc3f38_Triangle%20Room.webp"
                    alt="triangle room"
                    className=" object-cover align-middle max-w-full inline-block border-none h-[239px]"
                  />
                </div>
              </div>
              <div className="relative ml-[-210px] mt-[168px]">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6655a30f8b93f910e3bf2ef6/66d80261fe4077592fbc3f38_Triangle%20Room.webp"
                    width={315}
                    height={372}
                    className=" align-middle max-w-full inline-block object-cover border-none w-[315px] h-[372px]"
                    alt=""
                  />
                </div>
              </div>
              {/* service item left right */}
              <div className=" hidden ml-[-40px]"></div>
            </div>
            {/* home line */}
            <div className="bg-[#dcc5b733] w-[1px]"></div>
            {/* home right */}
            <div className=" will-change-[opacity] opacity-[1] flex justify-center items-start flex-col flex-nowrap">
              {/* hero sub heading */}
              <div className="overflow-hidden pb-[10px]">
                <p className=" tracking-[1.8px] uppercase text-[12px] font-bold leading-[17.6px] ">
                  Crafting the Future
                </p>
              </div>
              {/* service heading */}
              <div className=" overflow-hidden pb-[20px]">
                <h2 className="my-0 text-[#dcc5b7] tracking-[-1.5px] font-light text-[42px] leading-[52px]">
                  Expressive finishes
                </h2>
              </div>
              {/* service paragraph */}
              <div className=" overflow-hidden max-w-[390px]">
                <p>
                  Discover expressive finishes that transform architectural
                  spaces, presenting distinctive textures, vibrant colors, and
                  personalized designs to enhance your projects.
                </p>
              </div>
              <div className=" z-[11111111] pt-[40px] pb-[15px] pl-[15px] flex relative ">
                <div className=" relative">
                  <a
                    className=" border-[#dcc5b74d] text-[#dcc5b7] bg-[#dcc5b700] tracking-[0.5px] uppercase border-[1px] border-solid py-[10px] px-[40px] text-[12px] font-semibold leading-[24px] cursor-pointer rounded-none no-underline inline-block"
                    href=""
                  >
                    Discover more
                  </a>
                  <div className=" absolute h-[15px] w-[1px] bg-[#dcc5b7] top-[-15px] right-0 bottom-auto left-auto"></div>
                  <div className=" absolute h-[15px] w-[1px] bg-[#dcc5b7] top-[-15px] right-auto bottom-auto left-0"></div>
                  <div className=" absolute h-[15px] w-[1px] bg-[#dcc5b7] top-auto right-0 bottom-[-15px] left-auto"></div>
                  <div className=" absolute h-[15px] w-[1px] bg-[#dcc5b7] top-auto right-auto bottom-[-15px] left-0"></div>

                  <div className=" absolute w-[15px] h-[1px] bg-[#dcc5b7] top-auto right-[-15] bottom-0 left-auto"></div>
                  <div className=" absolute w-[15px] h-[1px] bg-[#dcc5b7] top-0 right-[-15] bottom-auto left-auto"></div>
                  <div className=" absolute w-[15px] h-[1px] bg-[#dcc5b7] top-auto right-auto bottom-0 left-[-15px]"></div>
                  <div className=" absolute w-[15px] h-[1px] bg-[#dcc5b7] top-0 right-auto bottom-auto left-[-15px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
