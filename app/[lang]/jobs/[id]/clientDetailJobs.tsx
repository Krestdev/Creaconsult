"use client";
import JobBanner from "@/components/Job/JobBanner";
import JobDetail from "@/components/Job/JobDetail";
import { Dictionary } from "@/lib/i18n/types";
import { jobQuery } from "@/lib/queries/tanstack.queries";

interface LatestJobsProps {
  dictionary: Dictionary;
  slug: string;
}

const ClientDetailJobs = ({ dictionary, slug }: LatestJobsProps) => {
  const { data: job, isLoading: isAllLoading } = jobQuery.jobById(slug);
  const { data: jobs, isLoading: isJobsListLoading } = jobQuery.jobs();

  if (isAllLoading || isJobsListLoading) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <>
      {/* Job description */}
      {job && <JobDetail JobData={job} dictionary={dictionary} />}
      {/* Job Offers adds list */}
      {jobs && <JobBanner Jobs={jobs} dictionary={dictionary} />}
    </>
  );
};

export default ClientDetailJobs;
