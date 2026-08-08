import Terms from "@/components/global/Terms";
import { Locale } from "@/lib/i18n";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = ({ params }: contactPageProps) => {
  return (
    <main>
      <Terms />
    </main>
  );
};

export default Page;
