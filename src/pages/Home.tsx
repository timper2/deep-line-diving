import { ArrowRight, Compass, Gauge, LifeBuoy, Waves, Wind } from 'lucide-react';
import { COURSES } from '@/data/courses';
import type { RouteId } from '@/lib/routes';
import type { NavigateFn } from '@/lib/useRouter';
import CtaBanner from '@/components/CtaBanner';

interface HomeProps {
  navigate: NavigateFn;
}

const FEATURED: { id: RouteId; title: string; blurb: string; image: string }[] = [
  {
    id: 'sidemount',
    title: 'Sidemount',
    blurb: 'Streamlined, balanced diving with independent side-mounted cylinders.',
    image: COURSES.sidemount.heroImage,
  },
  {
    id: 'cave',
    title: 'Cave Diving',
    blurb: 'Disciplined training for the flooded passages beyond the light.',
    image: COURSES.cave.heroImage,
  },
  {
    id: 'technical',
    title: 'Technical Diving',
    blurb: 'Decompression, mixed gases and extended-range dive planning.',
    image: COURSES.technical.heroImage,
  },
  {
    id: 'rebreather',
    title: 'Rebreather',
    blurb: 'Closed-circuit training on the KISS Sidewinder and AP Inspiration.',
    image: COURSES.rebreather.heroImage,
  },
];

const APPROACH = [
  {
    icon: Compass,
    title: 'Procedure first',
    text: 'Every skill is drilled until it is calm and automatic, long before it is ever needed.',
  },
  {
    icon: LifeBuoy,
    title: 'Full redundancy',
    text: 'Gas, lights and team protocols are built so a single failure is never a crisis.',
  },
  {
    icon: Gauge,
    title: 'Small teams',
    text: 'Low student ratios mean real water time and detailed, personal feedback.',
  },
];

export default function Home({ navigate }: HomeProps) {
  return (
    <div className="animate-fade-in">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/10519070/pexels-photo-10519070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Diver exploring an underwater cave"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

        <div className="relative mx-auto w-full max-w-7xl container-px pt-28">
          <div className="flex animate-fade-up flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Wind className="h-3.5 w-3.5" />
              KISS Sidewinder CCR
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
              <Wind className="h-3.5 w-3.5" />
              AP Inspiration CCR
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
              <Wind className="h-3.5 w-3.5" />
              Open Circuit
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Explore beyond the light.
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 sm:text-xl">
            I am an active cave diver and closed-circuit rebreather instructor. I dive the KISS
            Sidewinder and AP Inspiration rebreathers as well as open circuit, and I teach divers to
            move through overhead and technical environments with precision, redundancy and calm.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-4">
            <button
              onClick={() => navigate('tryout')}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
            >
              Try a 1-day tech taster
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => navigate('cave')}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Explore courses
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 container-px py-10 sm:grid-cols-4">
          {[
            { value: 'KISS · AP · OC', label: 'Three platforms' },
            { value: 'Active', label: 'Still in the water' },
            { value: 'Full Cave', label: 'Certified explorer' },
            { value: '1:2', label: 'Instructor ratio' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/35508959/pexels-photo-35508959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Rebreather diver underwater"
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
                  <Waves className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">Silent running</p>
                  <p className="text-xs text-slate-400">Bubble-free on the loop</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              The diver behind the training
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Active diver. Obsessively prepared instructor.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300">
              <p>
                I dive the KISS Sidewinder and the AP Inspiration rebreathers as well as open
                circuit, and I teach across all three. That means you train on the unit you actually
                want to dive, with an instructor who is in the water on the same gear.
              </p>
              <p>
                Whether you are starting sidemount, pushing into cave, or stepping across to
                closed-circuit, we build every skill deliberately until it holds up under pressure.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {APPROACH.map((a) => (
                <div key={a.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                  <a.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-display text-sm font-semibold text-white">{a.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/30">
        <div className="mx-auto max-w-7xl container-px py-20 sm:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Training paths
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Choose your next descent.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              From your first streamlined sidemount dive to closed-circuit exploration, each path is
              built to move you forward safely.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FEATURED.map((f) => (
              <button
                key={f.id}
                onClick={() => navigate(f.id)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 text-left transition-colors hover:border-accent/50"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-300">{f.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View course
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        navigate={navigate}
        title="Not sure where to start?"
        text="Book a 1-day technical try-out and get hands-on with sidemount, doubles and closed-circuit configurations before you commit to a full course."
      />
    </div>
  );
}
