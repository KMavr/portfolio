import ExperienceItem from '@/app/components/Experience/components/ExperienceItem/ExperienceItem';
import { EXPERIENCE } from '@/app/config/experience';
import { cn } from '@/lib/utils/cn';

function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Experience</h2>
        <a
          href="/Konstantinos%20Mavrikas%20-%20CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvLink}>
          Download CV
        </a>
      </div>
      <ul className={styles.list}>
        {EXPERIENCE.map((role) => (
          <ExperienceItem
            key={`${role.company}-${role.dates}`}
            title={role.title}
            company={role.company}
            companyHref={role.companyHref}
            dates={role.dates}
            location={role.location}
            summary={role.summary}
          />
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: cn('mx-auto w-full max-w-5xl px-6 py-20 sm:py-28'),
  header: cn('flex items-baseline justify-between gap-4'),
  heading: cn('text-ink text-2xl font-semibold sm:text-3xl'),
  cvLink: cn('text-muted hover:text-accent font-mono text-xs transition-colors'),
  list: cn('divide-line mt-10 divide-y'),
};

export default Experience;
