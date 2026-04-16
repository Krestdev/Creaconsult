"use client";
import JobBanner from "@/components/Job/JobBanner";
import JobList from "@/components/Job/JobList";
import { Dictionary } from "@/lib/i18n/types";
import { jobQuery } from "@/lib/queries/tanstack.queries";

interface LatestJobsProps {
  dictionary: Dictionary;
}

const ClientJobs = ({ dictionary }: LatestJobsProps) => {
  const { data: jobs, isLoading: isAllLoading } = jobQuery.jobs();

  if (isAllLoading) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <>
      {/* Job Offers adds list */}
      {jobs && jobs.length > 0 && (
        <JobBanner Jobs={jobs} dictionary={dictionary} />
      )}
      {/* Job Offers list */}
      {jobs && jobs.length > 0 && (
        <JobList Jobs={jobs} dictionary={dictionary} />
      )}
      {/* News Letter */}
    </>
  );
};

export default ClientJobs;
