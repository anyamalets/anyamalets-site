import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ds4s4og6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
