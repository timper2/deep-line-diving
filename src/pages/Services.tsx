export default function Services() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-32 text-slate-300 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
        <section>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Cave Guiding
          </h1>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-400">
            <li>
              Guided cave diving excursions tailored to your comfort level across North Florida&apos;s springs, including Peacock, Ginnie, and Cow Springs.
            </li>
            <li>
              Full logistics coordination, site briefing, and gas planning support.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mentoring
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-400">
            <li>
              One-on-one technical diving mentorship focusing on skill mastery, situational awareness, and overhead environment progression.
            </li>
            <li>
              Personalized video review, gear configuration optimization, and posture workshops.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
