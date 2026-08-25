import { ImageResponse } from "next/og";
import { ClimbTileOg } from "@/components/brand/climb-tile-og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<ClimbTileOg size={32} />, { ...size });
}
