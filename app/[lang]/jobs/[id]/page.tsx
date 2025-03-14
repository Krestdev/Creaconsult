import JobBanner from "@/components/Job/JobBanner";
import JobDetail from "@/components/Job/JobDetail";
import { getDictionary, Locale } from "@/lib/i18n";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary);

  return (
    <main>
      {/* Job description */}
      <JobDetail />
      {/* Job Offers adds list */}
      <JobBanner />
      {/* News Letter */}
    </main>
  );
};

export default Page;
