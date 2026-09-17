import { buildLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

export async function GET() {
  const body = await buildLlmsTxt(true);
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
