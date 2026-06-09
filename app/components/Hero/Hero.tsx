import { HERO_STATUS, YEARS_EXPERIENCE } from '@/app/config/site';
import { cn } from '@/lib/utils/cn';

function Hero() {
  return (
    <section id="top" className={styles.section}>
      {HERO_STATUS && (
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {HERO_STATUS}
        </p>
      )}
      <h1 className={styles.headline}>
        Front-end engineering for <span className={styles.accent}>production</span> systems.
      </h1>
      <p className={styles.subline}>
        Senior front-end engineer with {YEARS_EXPERIENCE} years of experience, building React and
        React Native products. Based in Thessaloniki, working remotely across Europe.
      </p>
    </section>
  );
}

const styles = {
  section: cn('mx-auto w-full max-w-5xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28'),
  status: cn(
    'border-line text-muted inline-flex items-center gap-2 rounded-full border',
    'px-3 py-1 font-mono text-xs',
  ),
  dot: cn('bg-accent size-1.5 rounded-full'),
  headline: cn('text-ink text-display mt-6 max-w-4xl font-semibold'),
  accent: cn('text-accent'),
  subline: cn('text-muted mt-5 max-w-xl text-lg'),
};

export default Hero;
