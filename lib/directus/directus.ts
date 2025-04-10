import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import Collections from "./schema";

const directus = createDirectus(
  process.env.NEXT_BACKOFFICE ?? "http://localhost:8057"
).with(rest());

directus.request(readItems("Job"));

export default directus;
