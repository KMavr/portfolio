import { Project } from '@/app/types';

export const PROJECTS: Project[] = [
  {
    title: 'redor.blue',
    description: 'Global social-dilemma app — live votes, per-country breakdown, 12 languages.',
    tags: ['React', 'TypeScript', 'Supabase'],
    links: [
      { label: 'Live', href: 'https://redor.blue' },
      { label: 'GitHub', href: 'https://github.com/KMavr/red-blue-button' },
    ],
    slug: 'redor-blue',
  },
  {
    title: 'GhostDock',
    description:
      'Turn any public GitHub repo into a clean, shareable product landing page in seconds.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    links: [
      { label: 'Live', href: 'https://ghostdock.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/KMavr/ghostdock' },
    ],
    slug: 'ghostdock',
  },

  {
    title: 'debtctl',
    description:
      'Govern npm, pnpm, and yarn dependency overrides as documented technical debt. Fails CI when overrides go stale.',
    tags: ['TypeScript', 'CLI', 'Node.js'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/debtctl' },
      { label: 'GitHub', href: 'https://github.com/KMavr/debtctl' },
    ],
    slug: 'debtctl',
  },
  {
    title: 'eslint-plugin-tailwind-design-tokens',
    description:
      'ESLint plugin that flags hardcoded colors and default Tailwind palette classes, steering you toward your design-system tokens.',
    tags: ['TypeScript', 'ESLint', 'Tailwind'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/eslint-plugin-tailwind-design-tokens' },
      { label: 'GitHub', href: 'https://github.com/KMavr/eslint-plugin-tailwind-design-tokens' },
    ],
    slug: 'eslint-plugin-tailwind-design-tokens',
  },
  {
    title: 'deeplink-doctor',
    description:
      "Statically reconcile an Expo project's route tree, deep-link config, and hosted association files — and report where they disagree.",
    tags: ['TypeScript', 'CLI', 'Expo'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/deeplink-doctor' },
      { label: 'GitHub', href: 'https://github.com/KMavr/deeplink-doctor' },
    ],
    slug: 'deeplink-doctor',
  },
  {
    title: 'unmaintained',
    description:
      'Advisory CI tool that reports which of your dependencies are unmaintained — and which are probably unmaintained.',
    tags: ['TypeScript', 'CLI', 'Node.js'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/unmaintained' },
      { label: 'GitHub', href: 'https://github.com/KMavr/unmaintained' },
    ],
    slug: 'unmaintained',
  },
];
