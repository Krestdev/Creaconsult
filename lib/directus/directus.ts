import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus(process.env.NEXT_PUBLIC_BACKOFFICE ?? "").with(
  rest()
);

export default directus;
