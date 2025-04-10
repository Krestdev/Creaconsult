import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus(
  process.env.NEXT_PUBLIC_BACKOFFICE ?? "http:localhost:8057"
).with(rest());

export default directus;
