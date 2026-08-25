import { ImageResponse } from "next/og";
import { ClimbTileOg } from "@/components/brand/climb-tile-og";
import { CLIMB_BACKGROUND, CLIMB_FOREGROUND, CLIMB_MUTED } from "@/lib/brand";

export const alt = "Climb — the public leaderboard for ambitious people";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: CLIMB_BACKGROUND,
        }}
      >
        <ClimbTileOg size={128} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: -1.5,
              color: CLIMB_FOREGROUND,
            }}
          >
            Climb
          </div>
          <div
            style={{
              fontSize: 28,
              color: CLIMB_MUTED,
            }}
          >
            The public leaderboard for ambitious people
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
