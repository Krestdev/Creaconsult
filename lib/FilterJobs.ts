// utils/jobFilters.js
export function filterJobs(
  jobs: Record<string, any>[],
  filterType: "today" | "active" | "all"
) {
  const today = new Date().toISOString().split("T")[0];
  const now = new Date();

  switch (filterType) {
    case "today":
      return jobs.filter(
        (job) =>
          new Date(job.date_created).toISOString().split("T")[0] === today
      );

    case "active":
      return jobs.filter((job) => {
        const isNotExpired = !job.expire || new Date(job.expire) > now;
        const isPublished = job.status === "published";
        return isNotExpired && isPublished;
      });

    case "all":
    default:
      return jobs;
  }
}
