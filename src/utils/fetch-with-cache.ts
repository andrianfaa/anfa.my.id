import memoryCache from "memory-cache";
import type { RequestInit } from "next/dist/server/web/spec-extension/request";

export async function FetchWithCache(
  url: string,
  cacheKey: string,
  options: RequestInit
) {
  const value = memoryCache.get(url);

  if (value) {
    return value;
  }

  const cacheTime = 24; // in hours
  const res = await fetch(url, options);
  const data = await res.json();

  // put data to memory
  memoryCache.put(cacheKey || "api", data, cacheTime * 1000 * 60 * 60);

  return data;
}
