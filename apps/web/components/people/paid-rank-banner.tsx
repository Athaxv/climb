export function PaidRankBanner({ rank }: { rank: number }) {
  return (
    <p className="mb-6 rounded-[var(--radius)] border border-primary/30 bg-primary/[0.06] px-4 py-3 text-sm font-medium">
      {rank > 0 ? `You are #${rank} on Climb` : "Payment received. Your rank will appear on the board shortly."}
    </p>
  );
}
