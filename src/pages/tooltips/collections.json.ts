import { findTooltips } from "@/util/collections.util.ts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const collections = await findTooltips();
  return new Response(JSON.stringify(collections), {
    headers: {
      "content-type": "application/json",
    },
  });
};
