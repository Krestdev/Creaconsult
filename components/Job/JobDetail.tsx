/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import clsx from "clsx";
import { FilePdf, Link, Suitcase } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";
import { useEffect, useState } from "react";
import directus from "@/lib/directus/directus";

const JobDetail = ({ JobData }: { JobData: any }) => {
  const [Job, setJob] = useState<Record<string, any>>();
  useEffect(() => {
    setJob(JobData);
  }, []);

  return (
    <SectionContainer className="pb-0">
      {Job && (
        <>
          <div className="flex gap-4 justify-center items-start flex-col">
            <img
              src={`${directus.url}assets/${Job.illustration}`}
              alt="job"
              className="md:w-1/2 h-[300px] object-cover"
            />

            <div className="w-1/2 space-y-2 hidden md:block">
              <h3>{Job.title}</h3>
              {/* <h5>
                <span className="font-semibold">Posts:</span> 3
              </h5>
              <h5>
                <span className="font-semibold">Education:</span>BAC+5
              </h5>
              <h5>
                <span className="font-semibold">Address:</span>CircleBox
                Creative
              </h5>
              <h5>
                <span className="font-semibold">Contract:</span>CDD
              </h5>
              <h5>
                <span className="font-semibold">Due Date:</span> 23/07/2025
              </h5> */}
            </div>
            <div className="space-y-2 md:hidden">
              <h5 className="font-bold">{Job.title}</h5>
              {/* <h6>
                <span className="font-semibold">Posts:</span> 3
              </h6>
              <h6>
                <span className="font-semibold">Education:</span>BAC+5
              </h6>
              <h6>
                <span className="font-semibold">Address:</span>CircleBox
                Creative
              </h6>
              <h6>
                <span className="font-semibold">Contract:</span>CDD
              </h6>
              <h6>
                <span className="font-semibold">Due Date:</span> 23/07/2025
              </h6> */}
            </div>
          </div>
          <hr className="w-full border-1 mt-4 border-[#700032]/50" />
          <div className="flex">
            <div className="md:w-2/3 w-full">
              <div className="space-y-4 my-[24px]">
                <div>
                  <h3 className="font-semibold hidden md:block">Skills</h3>
                  <h5 className="font-semibold md:hidden">Skills</h5>
                  <ul className="flex gap-2 my-4 flex-wrap">
                    {Job.tags.map((filter: string, index: number) => {
                      return (
                        <li key={index}>
                          <button
                            className={clsx(
                              "px-2 py-1 shadow-md shadow-gray-500",
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
                </div>
                <div>
                  <h3 className="font-semibold hidden md:block">Description</h3>
                  <h5 className="font-semibold md:hidden">Description</h5>
                  <div dangerouslySetInnerHTML={{ __html: Job.description }} />
                </div>
              </div>
              <div className="flex gap-4 flex-col md:flex-row">
                {[
                  { title: "Apply for this job", icon: <Suitcase size={16} /> },
                  { title: "Copy Job URL", icon: <Link size={16} /> },
                  { title: "Download PDF", icon: <FilePdf size={16} /> },
                ].map((btn, index) => {
                  return (
                    <button
                      key={index}
                      className={clsx(
                        "text-white px-6 py-4 flex gap-2 justify-center shadow-md shadow-gray-500",
                        btn.title.toLocaleLowerCase().includes("apply")
                          ? "bg-[var(--primary)]"
                          : btn.title.toLocaleLowerCase().includes("pdf")
                          ? "bg-green-500"
                          : "bg-blue-500"
                      )}
                    >
                      {btn.icon}
                      {btn.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </SectionContainer>
  );
};

export default JobDetail;
