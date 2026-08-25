export function WhyClimb() {
  const items = [
    {
      title: "Be seen first",
      body: "Get discovered by hiring. Higher seats sit where recruiters actually look.",
    },
    {
      title: "Get seen by agents",
      body: "Talent agents watch who is already visible. Climb, then get inbound.",
    },
    {
      title: "Bid for visibility",
      body: "Add your profile and skills, then bid for the seat you want.",
    },
  ];

  return (
    <section className="mx-auto mt-10 grid w-full max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:gap-10 sm:px-6">
      {items.map((item, index) => (
        <div key={item.title} className="climb-enter" style={{ animationDelay: `${index * 80}ms` }}>
          <h2 className="text-sm font-semibold text-primary sm:text-base">{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </section>
  );
}
