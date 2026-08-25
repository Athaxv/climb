import { CLIMB_PRIMARY, CLIMB_PRIMARY_FOREGROUND } from "@/lib/brand";

type ClimbTileOgProps = {
  size: number;
};

export function ClimbTileOg({ size }: ClimbTileOgProps) {
  const pad = Math.round(size * 0.18);
  const gap = Math.max(2, Math.round(size * 0.07));
  const barWidth = Math.round((size - pad * 2 - gap * 2) / 3);
  const radius = Math.max(2, Math.round(barWidth * 0.28));
  const heights = [0.38, 0.58, 0.78].map((ratio) => Math.round(size * ratio));

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap,
        paddingBottom: pad,
        paddingLeft: pad,
        paddingRight: pad,
        background: CLIMB_PRIMARY,
        borderRadius: Math.round(size * 0.22),
      }}
    >
      {heights.map((height) => (
        <div
          key={height}
          style={{
            width: barWidth,
            height,
            background: CLIMB_PRIMARY_FOREGROUND,
            borderRadius: radius,
          }}
        />
      ))}
    </div>
  );
}
