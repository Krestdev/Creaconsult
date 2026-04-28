import { Job } from "./types";

// utils/jobFilters.js
export function filterJobs(
  jobs: Job[],
  filterType: "today" | "active" | "all",
) {
  const today = new Date().toISOString().split("T")[0];
  const now = new Date();

  switch (filterType) {
    case "today":
      return jobs.filter(
        (job) =>
          new Date(job.publishedAt).toISOString().split("T")[0] === today,
      );

    case "active":
      return jobs.filter((job) => {
        const isNotExpired = !job.expire || new Date(job.expire) > now;
        // const isPublished = job.status === "published";
        return isNotExpired;
      });

    case "all":
    default:
      return jobs;
  }
}
