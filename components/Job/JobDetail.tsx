"use client";

import clsx from "clsx";
import { Buildings, FilePdf, Link, Suitcase } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";

const JobDetail = () => {
  return (
    <SectionContainer className="pb-0">
      <div className="flex gap-4 justify-center items-start md:flex-row flex-col">
        <img
          src="/ui/jobs/job6.jpg"
          alt="job"
          className="md:w-1/2 h-[300px] object-cover"
        />

        <div className="w-1/2 space-y-2 hidden md:block">
          <h3>Conception architect</h3>
          <h5>
            <span className="font-semibold">Posts:</span> 3
          </h5>
          <h5>
            <span className="font-semibold">Education:</span>BAC+5
          </h5>
          <h5>
            <span className="font-semibold">Address:</span>CircleBox Creative
          </h5>
          <h5>
            <span className="font-semibold">Contract:</span>CDD
          </h5>
          <h5>
            <span className="font-semibold">Due Date:</span> 23/07/2025
          </h5>
        </div>
        <div className="space-y-2 md:hidden">
          <h5 className="font-bold">Conception architect</h5>
          <h6>
            <span className="font-semibold">Posts:</span> 3
          </h6>
          <h6>
            <span className="font-semibold">Education:</span>BAC+5
          </h6>
          <h6>
            <span className="font-semibold">Address:</span>CircleBox Creative
          </h6>
          <h6>
            <span className="font-semibold">Contract:</span>CDD
          </h6>
          <h6>
            <span className="font-semibold">Due Date:</span> 23/07/2025
          </h6>
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
                {["cv", "Architecture", "Bac+15", "letter"].map(
                  (filter, index) => {
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
                  }
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold hidden md:block">Description</h3>
              <h5 className="font-semibold md:hidden">Description</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                officia vel dolor ipsum iure optio, quia cum amet id excepturi
                qui neque, ut quam aliquid ea est impedit deserunt incidunt!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                blanditiis sed a voluptas similique, earum quibusdam totam dicta
                nobis nesciunt dolorum labore nostrum incidunt numquam dolore
                laboriosam corporis perferendis quaerat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold hidden md:block">
                Responsabilities
              </h3>
              <h5 className="font-semibold md:hidden">Responsabilities</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                optio debitis eveniet esse numquam reprehenderit placeat, iusto
                omnis porro dolorem ad magnam vero maiores doloremque sint quod,
                vel, illo cupiditate. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum reprehenderit odit soluta. Quos
                itaque, tempora ipsa repellat temporibus animi vero deleniti
                quibusdam optio modi minus explicabo harum at laborum eos.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            {[
              { title: "Apply for this job", icon: <Suitcase size={16} /> },
              { title: "Copy Job URL", icon: <Link size={16} /> },
              { title: "View compnay", icon: <Buildings size={16} /> },
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
    </SectionContainer>
  );
};

export default JobDetail;
