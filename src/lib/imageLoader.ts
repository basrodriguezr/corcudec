import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src }: ImageLoaderProps): string {
  return src;
}
