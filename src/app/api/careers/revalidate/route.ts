import { createHash, timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { CAREERS_TAG } from "@/lib/careers";

const digest = (value: string) => createHash("sha256").update(value).digest();

/**
 * LifeFlow calls this right after HR changes a job, so the Careers pages show
 * it on the next visit instead of when their timer runs out. Only LifeFlow
 * knows the secret; unset, the route refuses everyone.
 */
export async function POST(request: Request) {
  const secret = process.env.CAREERS_REVALIDATE_SECRET;
  const sent = request.headers.get("authorization")?.replace(/^Bearer /, "") ?? "";
  if (!secret || !timingSafeEqual(digest(sent), digest(secret))) {
    return Response.json({ success: false }, { status: 401 });
  }
  revalidateTag(CAREERS_TAG);
  return Response.json({ success: true });
}
