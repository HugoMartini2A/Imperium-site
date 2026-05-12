import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

let ratelimitInstance: Ratelimit | null = null;

if (url && token) {
  ratelimitInstance = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    analytics: true,
    prefix: "imperium:contact",
  });
} else if (process.env.NODE_ENV === "production") {
  // eslint-disable-next-line no-console
  console.warn(
    "[rate-limit] UPSTASH_REDIS_REST_URL/TOKEN absents — mode no-op (aucun rate-limit appliqué)."
  );
}

export async function checkRateLimit(identifier: string): Promise<{
  success: boolean;
  remaining: number;
  reset: number;
}> {
  if (!ratelimitInstance) {
    return { success: true, remaining: Number.POSITIVE_INFINITY, reset: 0 };
  }
  const { success, remaining, reset } = await ratelimitInstance.limit(identifier);
  return { success, remaining, reset };
}
