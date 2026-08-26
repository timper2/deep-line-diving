import type { RouteId } from '@/lib/routes';

export interface CourseLevel {
  name: string;
  meta: string;
  description: string;
  points: string[];
}

export interface CourseStat {
  label: string;
  value: string;
}

export interface CoursePillar {
  title: string;
  text: string;
}

export interface CourseContent {
  id: RouteId;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string[];
  stats: CourseStat[];
  pillars: CoursePillar[];
  levels: CourseLevel[];
  gallery: { src: string; caption: string }[];
  prerequisites: string[];
}

export const COURSES: Record<'sidemount' | 'cave' | 'technical' | 'rebreather', CourseContent> = {
  sidemount: {
    id: 'sidemount',
    eyebrow: 'Configuration mastery',
    title: 'Sidemount Diving',
    subtitle: 'Streamlined, balanced and self-sufficient diving with cylinders mounted at your sides.',
    heroImage:
      'https://images.pexels.com/photos/31493483/pexels-photo-31493483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: [
      'Sidemount transforms how you move through the water. By carrying your cylinders alongside your body rather than on your back, you gain a lower profile, superb trim and independent access to every gas source you carry.',
      'These courses build the fine motor skills and mindset that make sidemount feel effortless: valve drills, bungee routing, precise buoyancy and a fully redundant approach to gas management that carries directly into overhead and technical environments.',
    ],
    stats: [
      { label: 'Format', value: 'Recreational to technical' },
      { label: 'Cylinders', value: '2 independent' },
      { label: 'Typical duration', value: '2 - 3 days' },
      { label: 'Min. certification', value: 'Open Water' },
    ],
    pillars: [
      {
        title: 'Perfect trim',
        text: 'Dial in a flat, horizontal position that protects delicate environments and reduces effort on every kick.',
      },
      {
        title: 'Gas redundancy',
        text: 'Two fully independent cylinders mean a genuine bail-out option always stays within reach.',
      },
      {
        title: 'Adaptable rigging',
        text: 'Learn to tune harness, bungees and clips so the system fits your body and the dive.',
      },
    ],
    levels: [
      {
        name: 'Recreational Sidemount',
        meta: 'Entry level · 2 days',
        description:
          'Your introduction to the configuration in open water, focused on comfort, balance and cylinder handling.',
        points: ['Harness and bungee setup', 'Trim and buoyancy refinement', 'S-drills and gas switching', 'Cylinder handling at the surface and at depth'],
      },
      {
        name: 'Advanced Sidemount',
        meta: 'Progression · 2 - 3 days',
        description:
          'Refine the system for demanding dives, adding stages and preparing for overhead and technical progression.',
        points: ['Stage and deco cylinder handling', 'Failure and shutdown drills', 'Restriction and no-mount practice', 'Team protocols and awareness'],
      },
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/7987177/pexels-photo-7987177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Balanced trim in open water',
      },
      {
        src: 'https://images.pexels.com/photos/35541060/pexels-photo-35541060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Rigging the harness before a dive',
      },
    ],
    prerequisites: ['Minimum Open Water certification', 'Comfortable with core buoyancy skills', 'Medically fit to dive'],
  },
  cave: {
    id: 'cave',
    eyebrow: 'The overhead environment',
    title: 'Cave Diving',
    subtitle: 'Explore the flooded passages beyond the light with disciplined training and unshakeable procedures.',
    heroImage:
      'https://images.pexels.com/photos/10519073/pexels-photo-10519073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: [
      'Cave diving is the most demanding and most rewarding form of diving. There is no direct route to the surface, so every skill, every piece of gear and every decision must be deliberate and redundant.',
      'Training progresses in careful stages. You build line-handling, navigation, gas planning and failure management until moving calmly through an overhead environment becomes second nature.',
    ],
    stats: [
      { label: 'Environment', value: 'Full overhead' },
      { label: 'Gas rule', value: 'Rule of thirds' },
      { label: 'Typical duration', value: '4 - 8 days' },
      { label: 'Min. certification', value: 'Nitrox + experience' },
    ],
    pillars: [
      {
        title: 'Guideline mastery',
        text: 'Lay, follow and manage a continuous guideline to the surface in zero visibility.',
      },
      {
        title: 'Failure management',
        text: 'Rehearse light, gas and buddy failures until your response is automatic and calm.',
      },
      {
        title: 'Conservation',
        text: 'Protect fragile cave formations with precise trim, propulsion and awareness.',
      },
    ],
    levels: [
      {
        name: 'Cavern',
        meta: 'Foundation · 2 days',
        description: 'Stay within the light zone while learning the core overhead skills and guideline basics.',
        points: ['Line following in the light zone', 'Non-silting propulsion techniques', 'Gas management fundamentals', 'Emergency procedures'],
      },
      {
        name: 'Intro to Cave',
        meta: 'Progression · 2 - 3 days',
        description: 'Move into the dark zone on a single continuous guideline with limited penetration.',
        points: ['Primary and secondary reels', 'Lost line and lost buddy drills', 'Rule of thirds gas planning', 'Silt-out navigation'],
      },
      {
        name: 'Full Cave',
        meta: 'Certification · 3 - 4 days',
        description: 'Complex navigation, jumps and gaps for confident exploration of the cave system.',
        points: ['Complex navigation and jumps', 'Stage cylinder deployment', 'Complex failure scenarios', 'Dive planning and mapping'],
      },
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/4821643/pexels-photo-4821643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Navigating a flooded passage',
      },
      {
        src: 'https://images.pexels.com/photos/10519046/pexels-photo-10519046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Light beams through a cavern',
      },
    ],
    prerequisites: ['Nitrox certification recommended', 'Solid buoyancy and trim', 'Logged open-water experience', 'Medically fit to dive'],
  },
  technical: {
    id: 'technical',
    eyebrow: 'Beyond recreational limits',
    title: 'Technical Diving',
    subtitle: 'Extend your range with decompression, mixed gases and the discipline that makes deep dives repeatable.',
    heroImage:
      'https://images.pexels.com/photos/32293259/pexels-photo-32293259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: [
      'Technical diving opens up depths, wrecks and durations that lie beyond recreational limits. It demands planned decompression, multiple gases and a team that operates with precision.',
      'These courses build the planning, gas management and problem-solving skills that let you treat a demanding dive as a series of controlled, rehearsed steps rather than a gamble.',
    ],
    stats: [
      { label: 'Range', value: 'Extended depth' },
      { label: 'Gases', value: 'Nitrox, trimix, deco' },
      { label: 'Typical duration', value: '4 - 6 days' },
      { label: 'Min. certification', value: 'Advanced + Nitrox' },
    ],
    pillars: [
      {
        title: 'Decompression planning',
        text: 'Build and understand deco schedules, then execute them with margin and control.',
      },
      {
        title: 'Gas management',
        text: 'Plan bottom, travel and decompression gases and switch between them cleanly.',
      },
      {
        title: 'Team discipline',
        text: 'Operate as a coordinated team with clear communication and shared procedures.',
      },
    ],
    levels: [
      {
        name: 'Intro to Tech',
        meta: 'Foundation · 2 days',
        description: 'Master the doubles or sidemount platform, trim and drills before adding decompression.',
        points: ['Twinset or sidemount handling', 'Valve and shutdown drills', 'Refined trim and propulsion', 'Team awareness'],
      },
      {
        name: 'Decompression Diver',
        meta: 'Certification · 3 - 4 days',
        description: 'Plan and execute staged decompression dives with a single decompression gas.',
        points: ['Decompression theory and planning', 'Deco gas switching', 'Extended-range dive planning', 'Failure management with deco obligation'],
      },
      {
        name: 'Trimix',
        meta: 'Advanced · 4 - 5 days',
        description: 'Add helium to manage narcosis and oxygen exposure on deeper dives.',
        points: ['Helium-based gas planning', 'Managing narcosis and oxygen exposure', 'Multiple deco gases', 'Deep dive logistics'],
      },
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/7970796/pexels-photo-7970796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Descending on an extended-range dive',
      },
      {
        src: 'https://images.pexels.com/photos/7001622/pexels-photo-7001622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Exploring deeper structure',
      },
    ],
    prerequisites: ['Advanced Open Water and Nitrox', 'Comfort in a doubles or sidemount rig', 'Logged deeper experience', 'Medically fit to dive'],
  },
  rebreather: {
    id: 'rebreather',
    eyebrow: 'Closed-circuit diving',
    title: 'Rebreather Courses',
    subtitle: 'Closed-circuit training from your first loop dive to mixed-gas exploration, on the KISS Sidewinder and AP Inspiration.',
    heroImage:
      'https://images.pexels.com/photos/2408692/pexels-photo-2408692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: [
      'A closed-circuit rebreather recycles your breathing gas, removing carbon dioxide and adding oxygen so almost nothing is wasted. The result is dramatically longer dives, warm moist gas and near-silent, bubble-free presence in the water.',
      'Rebreather training is a progression in its own right, independent of any overhead environment. You start with the fundamentals of the loop and build through decompression and mixed-gas diving, with cave-specific CCR work as an later specialism for those who want it. I teach on both the KISS Sidewinder and the AP Inspiration, so you train on the unit you intend to dive.',
    ],
    stats: [
      { label: 'Circuit', value: 'Closed / CCR' },
      { label: 'Units', value: 'KISS Sidewinder · AP Inspiration' },
      { label: 'Typical duration', value: '4 - 7 days' },
      { label: 'Min. certification', value: 'Nitrox + experience' },
    ],
    pillars: [
      {
        title: 'Loop understanding',
        text: 'Learn how the counterlungs, scrubber and cells work together to keep you breathing.',
      },
      {
        title: 'PO2 monitoring',
        text: 'Track and manage your oxygen partial pressure so the loop stays inside safe limits.',
      },
      {
        title: 'Bail-out discipline',
        text: 'Rehearse switching to open-circuit bail-out until it becomes an instinctive response.',
      },
    ],
    levels: [
      {
        name: 'CCR Air Diluent',
        meta: 'Foundation · 4 days',
        description: 'Your entry into closed-circuit diving on either unit, mastering assembly, checklists and loop control with no decompression.',
        points: ['Unit assembly and pre-dive checks', 'Diluent and oxygen management', 'Bail-out to open circuit', 'Buoyancy on a closed loop'],
      },
      {
        name: 'CCR Air Diluent Decompression',
        meta: 'Progression · 2 - 3 days',
        description: 'Add staged decompression to your CCR diving, planning and executing dives with a decompression obligation on the loop.',
        points: ['Decompression planning on CCR', 'Deco gas and bail-out planning', 'Managing the loop through deco', 'Failure drills with a deco obligation'],
      },
      {
        name: 'CCR Mod 1 - KISS Sidewinder',
        meta: 'Sidemount CCR · 5 days',
        description: 'Dedicated training on the chest-mounted KISS Sidewinder sidemount rebreather, focused on the unit-specific handling that makes it shine.',
        points: ['Sidewinder assembly and routing', 'Sidemount CCR trim and handling', 'Scrubber and cell management', 'Failure drills specific to the unit'],
      },
      {
        name: 'CCR Mod 1 - AP Inspiration',
        meta: 'Backmount CCR · 5 days',
        description: 'Dedicated training on the AP Inspiration, building familiarity with its electronic control, integrated decompression and backmount profile.',
        points: ['Inspiration assembly and setup', 'Electronics and controller management', 'Backmount CCR trim and handling', 'Unit-specific failure drills'],
      },
      {
        name: 'CCR Mixed Gas',
        meta: 'Advanced · 5 - 7 days',
        description: 'Extend the rebreather into trimix territory for deep, long-duration diving beyond recreational depths.',
        points: ['Trimix diluent planning', 'Extended decompression on CCR', 'Multiple bail-out strategies', 'Deep dive logistics'],
      },
      {
        name: 'CCR Cave',
        meta: 'Specialism · 4 - 5 days',
        description: 'Apply your closed-circuit skills in the overhead environment, with cave-specific gas planning, line work and bail-out strategies on the loop.',
        points: ['Cave gas planning on CCR', 'Line work and navigation on the loop', 'Overhead bail-out strategies', 'Cave-specific failure management'],
      },
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/73759/sea-ocean-water-light-73759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Silent, bubble-free presence',
      },
      {
        src: 'https://images.pexels.com/photos/13022664/pexels-photo-13022664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Preparing the unit dockside',
      },
    ],
    prerequisites: ['Nitrox certification', 'Solid buoyancy and experience', 'Commitment to checklists', 'Medically fit to dive'],
  },
};
