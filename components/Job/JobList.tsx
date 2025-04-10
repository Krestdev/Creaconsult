/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";

const JobList = ({ Jobs }: { Jobs: any }) => {
  const [jobs, setJobs] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    setJobs(Jobs);
  }, []);
  // console.log(jobs);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {jobs.length > 0 &&
            jobs.map((job, index) => {
              return (
                <div key={index} className="shadow-md shadow-black">
                  <div className="w-full flex flex-col gap-4 mb-4">
                    <img
                      src={`${process.env.NEXT_IMAGE_BASE}assets/${job.illustration}`}
                      alt="articel"
                      className="w-full h-[250px] object-cover bg-slate-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold hidden md:block">
                      {job.title}
                    </h4>
                    <button
                      className={clsx(
                        "rounded-full px-2 py-1",
                        "bg-green-500 text-white"
                      )}
                    >
                      {/* Active expire */}
                      Active
                    </button>
                    {/* <h6 className="font-semibold md:hidden">{job.title}</h6> */}
                    <ul className="flex gap-2 my-4 flex-wrap">
                      {job.tags.map((filter: string, index: number) => {
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
                      })}
                    </ul>
                    <p>{job.summary}</p>
                    <Link
                      href={`jobs/${job.id}`}
                      className="flex gap-2 items-center text-[var(--primary)] font-semibold"
                    >
                      <p>Apply</p> <ArrowRight size={24} />
                    </Link>
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
