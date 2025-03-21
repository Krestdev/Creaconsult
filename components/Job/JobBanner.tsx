"use client";

import React from "react";
import SectionContainer from "../global/SectionContainer";
import { ArrowRight } from "phosphor-react";

const JobBanner = () => {
  return (
    <SectionContainer className="pb-[24px]">
      <div className="space-y-8">
        <h2 className="font-semibold hidden md:block">New Job Offers</h2>
        <h4 className="font-semibold md:hidden">New Job Offers</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div
            className=" flex flex-col gap-8 text-white justify-center items-center w-full aspect-square bg-cover bg-[var(--primary)]"
            style={{
              backgroundImage: `linear-gradient(to bottom,rgba(255,0,0,0.5),rgba(0,0,0,0.5)),url('/ui/footer/bglines.png')`,
            }}
          >
            <h5 className="text-white font-light flex justify-center items-center">
              <span className="text-7xl">4</span> New Jobs
            </h5>
            <h2 className="text-white mariyam text-center">Apply Now</h2>
          </div>
          {[
            {
              title: "Architect",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job6.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
            {
              title: "Assistena",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job5.jpg",
              tags: ["Bac+5", "CV", "Letre", "12years+"],
            },
            {
              title: "Hydrolist",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job4.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
            {
              title: "Inspector",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job3.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
          ].map((job, index) => {
            console.log(job);
            return (
              <div
                key={index}
                className="flex flex-col justify-between bg-[#700032]/10 p-4 bg-cover bg-center text-white"
                style={{
                  backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.4),rgba(255,0,0,0.5)),url('${job.img}')`,
                }}
              >
                <div className="space-y-2">
                  <h5 className="text-white font-semibold">{job.title}</h5>
                  <p>{job.desc}</p>
                </div>
                <div className="flex gap-2 items-center text-white w-fit px-2 py-1 bg-[var(--primary)] font-semibold">
                  <p>Apply</p> <ArrowRight size={24} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default JobBanner;
