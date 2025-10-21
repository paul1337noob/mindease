import { NextRequest } from "next/server";

// Simple in-memory token bucket rate limiter
// Suitable for single-instance demos (e.g., Vercel single region)
interface TokenBucket {
  tokens: number;
  lastRefill: number;
}

const buckets = new Map<string, TokenBucket>();

const RATE_LIMIT = {
  maxTokens: 10, // max requests
  refillRate: 1, // tokens per second
  windowMs: 60000, // cleanup old entries after 1 minute
};

export async function limit(req: NextRequest): Promise<{ ok: boolean; remaining: number }> {
  const ip = req.ip || req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
  
  const now = Date.now();
  let bucket = buckets.get(ip);

  if (!bucket) {
    bucket = { tokens: RATE_LIMIT.maxTokens, lastRefill: now };
    buckets.set(ip, bucket);
  }

  // Refill tokens based on time elapsed
  const timePassed = (now - bucket.lastRefill) / 1000;
  bucket.tokens = Math.min(
    RATE_LIMIT.maxTokens,
    bucket.tokens + timePassed * RATE_LIMIT.refillRate
  );
  bucket.lastRefill = now;

  // Check if request can proceed
  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    return { ok: true, remaining: Math.floor(bucket.tokens) };
  }

  return { ok: false, remaining: 0 };
}

// Periodic cleanup of old entries (optional, for memory management)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets.entries()) {
      if (now - bucket.lastRefill > RATE_LIMIT.windowMs) {
        buckets.delete(key);
      }
    }
  }, RATE_LIMIT.windowMs);
}

