export function WhyClimb() {
  const items = [
    {
      title: "Be seen first",
      body: "Higher seats sit at the top of a public board people actually open.",
    },
    {
      title: "Rank is public",
      body: "Your position and bid are visible. Share the rank you paid to hold.",
    },
    {
      title: "Discovery follows the board",
      body: "Profile visits follow the list. Climb, then get found.",
    },
  ];

  return (
    <section className="mx-auto mt-4 grid w-full max-w-5xl gap-3 px-4 sm:grid-cols-3 sm:gap-5 sm:px-6">
      {items.map((item) => (
        <div key={item.title}>
          <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
          <p className="mt-0.5 text-[13px] leading-5 text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </section>
  );
}
