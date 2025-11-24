import type { ImageLoaderProps } from "next/image";

export default function imageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const url = new URL(
    src,
    src.startsWith("http") ? undefined : "http://localhost"
  );

  url.searchParams.set("w", width.toString());

  if (quality) {
    url.searchParams.set("q", quality.toString());
  }

  return src.startsWith("http")
    ? url.toString()
    : `${url.pathname}${url.search}`;
}
