export function PaidRankBanner({ rank }: { rank: number }) {
  return (
    <p className="mb-6 text-sm font-medium">
      {rank > 0 ? `You are #${rank} on Climb` : "You're on the board."}
    </p>
  );
}
