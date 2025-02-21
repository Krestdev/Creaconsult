import React from "react";

const Services = () => {
  return (
    <section>
      <div className="max-w-7xl min-h-screen h-full mx-auto space-y-24 py-[160px]">
        <div className="w-full flex flex-col items-center">
          <h2>Nos Service</h2>
          <p className="small text-[#aaaaaac4]">
            Des solutions innovantes en ingénierie et maîtrise d’œuvre pour des
            projets d’exception.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-16">
          <div className="relative">
            <div className="image-box">
              <img src="https://placehold.co/300x400" alt="" />
            </div>
            <img
              className="absolute -z-[1] -bottom-10 -left-14 w-[160px] h-[160px] opacity-35"
              src="/ui/Rectangle1.svg"
              alt=""
            />
          </div>
          <div>
            <div className="image-box">
              <img src="https://placehold.co/300x400" alt="" />
            </div>
          </div>
          <div>
            <div className="image-box">
              <img src="https://placehold.co/300x400" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
