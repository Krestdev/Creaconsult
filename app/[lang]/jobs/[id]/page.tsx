import { getDictionary, Locale } from "@/lib/i18n";
import { jobQuery } from "@/lib/queries/tanstack.queries";
import ClientDetailJobs from "./clientDetailJobs";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    id: string;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang, id } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <ClientDetailJobs dictionary={dictionary} slug={id} />
      {/* News Letter */}
    </main>
  );
};

export default Page;
