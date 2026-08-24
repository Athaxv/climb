export default function ClimbListLoading() {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-5xl flex-col gap-4 px-4 sm:px-6" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading people</span>
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="h-16 animate-pulse rounded-[var(--radius)] bg-muted" />
      ))}
    </div>
  );
}
