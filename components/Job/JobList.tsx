"use client";

import React from "react";
import SectionContainer from "../global/SectionContainer";
import clsx from "clsx";
import { ArrowRight } from "phosphor-react";

const JobList = () => {
  return (
    <SectionContainer>
      <div className="space-y-2 mb-4">
        <h2 className="font-semibold hidden md:block">Job Offers</h2>
        <h4 className="font-semibold md:hidden">Job Offers</h4>
        <h6 className="max-w-[700px]">
          {
            "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
          }
        </h6>
      </div>
      <div className="space-y-4">
        <ul className="flex gap-2 flex-wrap">
          {["All", "New", "Last Week", "Date"].map((filter, index) => {
            const selected = index == 0;
            return (
              <li key={index}>
                <button
                  className={clsx(
                    "rounded-full px-4 py-2",
                    selected
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[#700032]/10"
                  )}
                >
                  {filter}
                </button>
              </li>
            );
            //
          })}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            {
              title: "On site Tecnician",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job7.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
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
            {
              title: "Secretary",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job2.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
            {
              title: "Archive guy",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job1.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
            {
              title: "On site Tecnician",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job7.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
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
            {
              title: "Secretary",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job2.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
            {
              title: "Archive guy",
              desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laborum possimus debitis obcaecati a esse corrupti quod.",
              img: "/ui/jobs/job1.jpg",
              tags: ["Bac+5", "CV", "Letre", "27years+"],
            },
          ].map((job, index) => {
            return (
              <div key={index} className="shadow-md shadow-black">
                <div className="w-full flex flex-col gap-4 mb-4">
                  <img
                    src={job.img}
                    alt="articel"
                    className="w-full h-[250px] object-cover bg-slate-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold hidden md:block">{job.title}</h4>
                  <h6 className="font-semibold md:hidden">{job.title}</h6>
                  <ul className="flex gap-2 my-4 flex-wrap">
                    {["cv", "Architecture", "Bac+15", "letter"].map(
                      (filter, index) => {
                        const selected = index == 0;
                        return (
                          <li key={index}>
                            <button
                              className={clsx(
                                "rounded-full px-2 py-1",
                                "bg-[var(--primary)] text-white"
                              )}
                            >
                              {filter}
                            </button>
                          </li>
                        );
                        //
                      }
                    )}
                  </ul>
                  <p>{job.desc}</p>
                  <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
                    <p>Apply</p> <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default JobList;
