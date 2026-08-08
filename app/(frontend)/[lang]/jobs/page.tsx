import PageIntro from "@/components/global/PageIntro";
import { getDictionary, Locale } from "@/lib/i18n";
import ClientJobs from "./clientJobs";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <PageIntro
      title={(await params).lang == "en" ? "Job Offers" : "Emplois"}
      img="/ui/intro/jobsintro.webp"
    >
      <ClientJobs dictionary={dictionary} />
    </PageIntro>
  );
};

export default Page;
