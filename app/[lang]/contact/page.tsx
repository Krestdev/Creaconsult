import ContactUs from "@/components/global/ContactUs";
import Subscription from "@/components/global/Subscription";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { createItem } from "@directus/sdk";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function createContacts(data: {
  name: string;
  profession: string;
  subject: string;
  message: string;
  email: string;
}) {
  return directus.request(createItem("Contacts", data));
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      {/* Contact */}
      <ContactUs dictionary={dictionary} lang={lang} />
      {/* <ContactUs createContacts={createContacts} /> */}
      {/* socials */}
      {/* map */}
      {/* newsletter */}
      <Subscription dictionary={dictionary} lang={lang} />
    </main>
  );
};

export default Page;
