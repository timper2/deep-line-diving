import { Mail, MapPin, Phone, Waves } from 'lucide-react';
import { ROUTES, type RouteId } from '@/lib/routes';
import type { NavigateFn } from '@/lib/useRouter';

interface FooterProps {
  navigate: NavigateFn;
}

export default function Footer({ navigate }: FooterProps) {
  const courseLinks: RouteId[] = ['sidemount', 'cave', 'technical', 'rebreather', 'tryout'];

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl container-px py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 ring-1 ring-accent/40">
                <Waves className="h-5 w-5 text-accent" strokeWidth={2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Deep Line Diving</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Cave and closed-circuit rebreather instruction on the KISS Sidewinder. Careful,
              procedure-driven training for divers who want to explore beyond the light.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
              Courses
            </h4>
            <ul className="mt-4 space-y-2.5">
              {ROUTES.filter((r) => courseLinks.includes(r.id)).map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => navigate(r.id)}
                    className="text-sm text-slate-300 transition-colors hover:text-accent"
                  >
                    {r.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-500">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:dive@deeplinediving.com" className="hover:text-accent">
                  dive@deeplinediving.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                <span>+1 (555) 018-2277</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" />
                <span>High Springs, Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Deep Line Diving. All rights reserved.</p>
          <p>Train deliberately. Dive safely.</p>
        </div>
      </div>
    </footer>
  );
}
