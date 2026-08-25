import { ImageResponse } from "next/og";
import { ClimbTileOg } from "@/components/brand/climb-tile-og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<ClimbTileOg size={180} />, { ...size });
}
