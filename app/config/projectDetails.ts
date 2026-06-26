import { ProjectDetail } from '@/app/types';

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  unmaintained: {
    slug: 'unmaintained',
    tagline: 'An advisory CI check for dependency abandonment — is anyone still home?',
    sections: [
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'prose',
            text: 'Plenty of tools tell you a dependency is out of date. Almost none tell you it is abandoned. And the heuristic everyone reaches for — "no release in a year" — is wrong: a small, finished library can sit untouched for years and be perfectly healthy. Punishing "done" is how you train people to ignore the warning.',
          },
          {
            type: 'prose',
            text: 'unmaintained answers the one question the other tools skip: is anyone still home? It reads your package.json, asks a few public data sources whether each dependency still has a pulse, and reports the ones that do not.',
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          {
            type: 'prose',
            text: 'Two principles shape every verdict. Tiers map to confidence, not severity — and the absence of data is never a guilty verdict. If a package has no GitHub repo or a source is rate-limited, that check returns no signal; a blank is a blank, not a conviction.',
          },
          {
            type: 'list',
            items: [
              'Hard tier (always on) — a package is flagged unmaintained only on a hard signal: the repo is archived, the latest npm version is deprecated, or the repo carries an "unmaintained" / "abandoned" / "no-maintenance-intended" topic.',
              'Soft tier (opt in with --soft) — heuristics like a dead release cadence, dormant commits, a stale issue backlog, a solo maintainer, or a low OpenSSF "Maintained" score only ever produce the gentler "probably" tier.',
            ],
          },
        ],
      },
      {
        heading: 'Advisory, not a gate',
        blocks: [
          {
            type: 'prose',
            text: 'By default it is report-only and exits 0 — it advises, it does not block. Teams that want teeth add --strict, which makes a hard-tier finding fail CI. There is no sidecar, no allowlist, nothing to game: just a fresh read of public data each run. A scan with --soft looks like this:',
          },
          {
            type: 'code',
            code: `✗ request@2.88.2 is unmaintained
    • request is flagged deprecated in its latest version 2.88.2.
    • request's last release was 6.3 years ago (2020-02-11).
    • request scores 0/10 on the OpenSSF Scorecard "Maintained" check.

? chalk@5.6.2 is probably unmaintained
    • chalk has a single npm maintainer — a higher bus-factor risk.`,
          },
        ],
      },
      {
        heading: 'Engineering notes',
        blocks: [
          {
            type: 'prose',
            text: 'Two runtime dependencies (commander and chalk) and the built-in fetch — a tool that scrutinizes your dependency health should not drag in a long tail of its own. Every release is published from CI with npm provenance attestations, so each version on npm links back to the exact commit and workflow that built it.',
          },
        ],
      },
    ],
  },
  debtctl: {
    slug: 'debtctl',
    tagline:
      'Govern dependency overrides as documented technical debt — and fail CI when they go stale.',
    sections: [
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'prose',
            text: 'Overrides — npm overrides, pnpm.overrides, yarn resolutions — are routinely added to patch a CVE, force peer compatibility, or pin a transitive dependency. They are almost always meant to be temporary. They are almost never reviewed again.',
          },
          {
            type: 'prose',
            text: 'debtctl treats them as what they actually are: technical debt. A sidecar file (.debtctl.json) records why each override exists, who owns it, and when it should be revisited — then surfaces stale overrides in CI before they rot for another two years.',
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          {
            type: 'prose',
            text: "It enforces three pieces of metadata next to every override and fails CI when one drifts past its expected lifetime. No metadata, no merge. No revisit trigger, no merge. If a reviewer changes an override's range but forgets to update the rationale, CI catches it. A revisit can be anchored three ways:",
          },
          {
            type: 'list',
            items: [
              'version-anchor (recommended for overrides) — fires when the declared range for the package no longer matches what was recorded, so a fix landing upstream automatically prompts a revisit; no human-set deadline required.',
              'date — fires on or after an explicit expiry, for when there is no natural dependency or patch to anchor against.',
              "patch-hash (recommended for patches) — fires when a patch file's content hash drifts, catching silent edits to patch-package, pnpm, or yarn-berry patches.",
            ],
          },
        ],
      },
      {
        heading: 'Not a replacement for Renovate / Dependabot',
        blocks: [
          {
            type: 'prose',
            text: 'Renovate and Dependabot bump dependencies — they open PRs when a new version is available. They say nothing about why an override exists, who owns it, or when to revisit it. debtctl is the layer next to them: they open the bump PR; debtctl fails CI when the override pinning it has no rationale, no owner, or has drifted past its trigger.',
          },
          {
            type: 'code',
            code: `$ debtctl check
Missing metadata (1):
  - some-package

Incomplete (1):
  - other-package: TODO fields present

Due for review (1):
  - third-package: Expired on 2025-09-01

✖ 3 problems: 1 missing, 1 incomplete, 1 due for review`,
          },
        ],
      },
      {
        heading: 'Scope',
        blocks: [
          {
            type: 'prose',
            text: 'It does not patch your package.json, run installs, or talk to a registry — it only reads, classifies, and reports, across npm, pnpm, and yarn (classic and berry). Four small runtime dependencies, exit codes designed for CI, and a versioned sidecar schema that auto-migrates older files on read.',
          },
        ],
      },
    ],
  },
  'eslint-plugin-tailwind-design-tokens': {
    slug: 'eslint-plugin-tailwind-design-tokens',
    tagline:
      'An ESLint plugin that keeps hardcoded colors out of your components and steers you to your design tokens.',
    sections: [
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'prose',
            text: 'A design system defines a finite color palette as tokens — --color-ink, bg-primary, text-soft-green. But nothing stops a raw #0a0a0a, an rgb(10 10 10), or a stock text-red-500 from sneaking into a component, and every one quietly erodes the system.',
          },
          {
            type: 'prose',
            text: 'This plugin catches them at lint time. When a hardcoded value matches one of your tokens, it tells you exactly which token to use instead — and the fix is automatic.',
          },
        ],
      },
      {
        heading: 'Before / after',
        blocks: [
          {
            type: 'code',
            code: `// ✗ flagged — stock palette class + hardcoded hex
<button className="bg-[#0a0a0a] text-red-500" />

// ✓ design-system tokens
// (when #0a0a0a maps to a token, bg-[#0a0a0a] → bg-ink is auto-fixable)
<button className="bg-ink text-primary" />`,
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          {
            type: 'list',
            items: [
              'no-hardcoded-colors scans every string and template literal for color values, normalizes each (so #FFF matches #ffffff), and looks it up in your token map. Hex plus rgb/hsl/hwb/lab/lch/oklab/oklch are all detected — including inside arbitrary values like bg-[#0a0a0a].',
              'no-default-palette splits class strings and flags any default Tailwind palette utility (prefix-family-shade), tolerating important (!) and opacity (/50) modifiers.',
            ],
          },
          {
            type: 'prose',
            text: 'It understands where tokens live across Tailwind versions — a v4 @theme block, a v3 tailwind.config.js, or an inline map — so it works whatever your setup. Token files are read once and cached per ESLint process, invalidated by file mtime.',
          },
        ],
      },
      {
        heading: 'Engineering notes',
        blocks: [
          {
            type: 'prose',
            text: 'Supports ESLint 9+ with both flat and legacy config systems. Every release is published from CI with npm provenance attestations.',
          },
        ],
      },
    ],
  },
  'redor-blue': {
    slug: 'redor-blue',
    tagline:
      'A global social-dilemma experiment — one irreversible choice, live results, no take-backs.',
    sections: [
      {
        heading: 'The premise',
        blocks: [
          {
            type: 'prose',
            text: 'Every visitor makes one irreversible choice. If red is the majority, only those who chose red survive; if blue is the majority, everyone survives. You cannot communicate, and you cannot change your mind. One press, forever.',
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          {
            type: 'prose',
            text: "A vote POSTs to a serverless function that hashes the visitor's IP (SHA-256 + salt) before anything is stored — no raw IP ever touches the database — deduplicates within a 24-hour window on that hash, inserts the vote, and reads current totals. The results page polls every five seconds, and the survived / eliminated outcome is derived from the live majority on each poll, never persisted, so it always reflects the current state rather than the majority at vote time.",
          },
          {
            type: 'code',
            code: `User votes → POST /api/vote
  ├─ IP hashed (SHA-256 + salt) — raw IP never stored
  ├─ 24h dedup check on the hash
  ├─ vote inserted → results recomputed
  └─ outcome derived from current majority

/results polls GET /api/results every 5s
  └─ "survived" recalculated live — never persisted`,
          },
        ],
      },
      {
        heading: 'Engineering highlights',
        blocks: [
          {
            type: 'list',
            items: [
              'Privacy-preserving dedup — IPs are salted and SHA-256 hashed before storage; deduplication runs on the hash over a 24-hour window.',
              'Stateless serverless design — each API function is fully self-contained, with no shared in-memory state.',
              'Real-time results without WebSockets — the results page polls with stale-while-revalidate cache headers; simple, reliable, zero infrastructure overhead.',
              "12 languages with RTL — browser-language auto-detection via i18next; Arabic triggers a full RTL layout through Tailwind's rtl: variants.",
            ],
          },
        ],
      },
      {
        heading: 'Stack',
        blocks: [
          {
            type: 'prose',
            text: 'React 19 + TypeScript + Vite on the front end, Tailwind v4 and Framer Motion for the interface, Vercel serverless functions and Supabase (Postgres) on the back end, deployed on Vercel.',
          },
        ],
      },
    ],
  },
  ghostdock: {
    slug: 'ghostdock',
    tagline:
      'Turn any public GitHub repo into a clean, shareable product landing page — in seconds.',
    sections: [
      {
        heading: 'The idea',
        blocks: [
          {
            type: 'prose',
            text: "Paste a public GitHub repository URL, tweak a few fields, and publish. GhostDock reads the repo's README and metadata and generates a polished public page at /p/<slug> — no configuration, no AI, no manual content entry.",
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          {
            type: 'prose',
            text: 'The core is a deterministic parsing pipeline. There is no AI in the loop, so the output is fast, predictable, and free to run.',
          },
          {
            type: 'list',
            items: [
              'Ingest — the repo URL is validated and GitHub is queried (via Octokit) for metadata, the README, and package.json.',
              'Parse to an AST — the README markdown is parsed into an mdast tree with unified + remark.',
              'Extract sections — headings are matched against known aliases (Features, Installation, Usage…) and the content under each is collected back into markdown.',
              'Derive the tech stack — dependencies, GitHub topics, and the primary language are mapped to display names, prioritized, and de-duplicated.',
              'Render — the parsed data, with any user overrides, is rendered as a themed public page with on-demand revalidation.',
            ],
          },
        ],
      },
      {
        heading: 'Stack',
        blocks: [
          {
            type: 'prose',
            text: 'Next.js 16 (App Router), React 19, and strict TypeScript, with Tailwind v4, Drizzle ORM over Neon Postgres, Clerk for authentication, Octokit for the GitHub API, and unified/remark for markdown parsing. Hosted on Vercel.',
          },
        ],
      },
    ],
  },
  'deeplink-doctor': {
    slug: 'deeplink-doctor',
    tagline:
      "Statically reconcile an Expo project's route tree, native deep-link config, and hosted association files — and report where they disagree.",
    sections: [
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'prose',
            text: 'Deep links break in ways nothing catches until a user taps one in production: an intentFilter advertises a path no screen handles, a screen can never be reached by any link, or the apple-app-site-association file you hosted names the wrong bundle.',
          },
          {
            type: 'prose',
            text: "Apple's validator and Android's pm verify-app-links check the hosted file or the device state — none of them read your repo, so none can tell you the repo and the config disagree. That repo-aware cross-check is the whole point of this tool. Zero config, no setup, runs over npx.",
          },
        ],
      },
      {
        heading: 'How it works',
        blocks: [
          {
            type: 'prose',
            text: 'It reconciles up to three sources of truth and reports where they drift apart:',
          },
          {
            type: 'list',
            items: [
              'Route tree — parses your app/ directory the way expo-router does (dynamic [id], catch-all [...rest], (groups), _layout, +-special and API routes).',
              'Native config — reads the resolved config from npx expo config --json (scheme, ios.associatedDomains/bundleIdentifier, android.package/intentFilters).',
              'Hosted association files (opt-in, --remote) — fetches the apple-app-site-association and assetlinks.json for your domain and checks they point back at your app.',
            ],
          },
        ],
      },
      {
        heading: 'Green offline, red against the live world',
        blocks: [
          {
            type: 'prose',
            text: 'Static checks run offline and are safe on every commit. --remote closes the other half of the handshake — the classic "works in dev, broken in prod" gap — by confirming the hosted files name your app:',
          },
          {
            type: 'code',
            code: `$ npx deeplink-doctor check --remote
  DL202  error  AASA appID does not match ios.bundleIdentifier "com.example.app"
  DL203  error  assetlinks.json has no entry for android.package "com.example.app"

2 issues (2 errors, 0 warnings)`,
          },
        ],
      },
      {
        heading: 'Governed suppressions',
        blocks: [
          {
            type: 'prose',
            text: 'DL002 (a route reachable by no link) is false-positive-prone by design — admin-only or intentionally unlinked screens. Suppressions live in a deeplink.config.json but are governed, not silent: each one needs a reason and an owner, so an ignore is always accountable. A rule missing either raises DL901; a rule targeting an unknown code raises DL902.',
          },
        ],
      },
      {
        heading: 'Scope',
        blocks: [
          {
            type: 'prose',
            text: 'v1 is a focused linter for expo-router projects. Out of scope by design: SHA-256 fingerprint verification against real signing certs (that needs EAS/Play credentials), React Navigation linking.config, and runtime/device testing, which adb and Apple’s validator already own. --json emits a stable schema for CI pipelines, and exit codes are designed to gate pull requests.',
          },
        ],
      },
    ],
  },
};
