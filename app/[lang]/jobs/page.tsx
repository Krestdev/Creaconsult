import JobBanner from "@/components/Job/JobBanner";
import JobList from "@/components/Job/JobList";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItems } from "@directus/sdk";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function getJobs() {
  return directus.request(readItems("Job"));
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary == dictionary);

  const jobs = await getJobs();
  console.log(jobs);

  return (
    <main>
      {/* Job Offers adds list */}
      <JobBanner Jobs={jobs} />
      {/* Job Offers list */}
      <JobList Jobs={jobs} />
      {/* News Letter */}
    </main>
  );
};

export default Page;
