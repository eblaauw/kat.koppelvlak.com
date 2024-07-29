import { CatData } from "./interface";

export interface Env {
  kat: KVNamespace; // The binding for your KV namespace
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    try {
      // Parse the URL to get the UUID from query parameters
      const url = new URL(request.url);
      const uuid = url.searchParams.get("uuid");

      if (!uuid) {
        return new Response("UUID is missing in the request", { status: 400 });
      }

      // Fetch the cat data from KV using the UUID
      const catDataJson = await env.kat.get(uuid);

      if (!catDataJson) {
        return new Response("Cat not found", { status: 404 });
      }

      // Parse the JSON string into a CatData object
      const catData: CatData = JSON.parse(catDataJson);

      // Return the cat data as JSON
      return new Response(JSON.stringify(catData), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching cat data:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
