import { cn } from '@/lib/utils/cn';

interface ExperienceItemProps {
  title: string;
  company: string;
  companyHref?: string;
  dates: string;
  location: string;
  summary: string;
}

function ExperienceItem({
  title,
  company,
  companyHref,
  dates,
  location,
  summary,
}: ExperienceItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.meta}>
        <span className={styles.dates}>{dates}</span>
        <span className={styles.location}>{location}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.role}>{title}</h3>
        {companyHref ? (
          <a
            href={companyHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyLink}>
            {company}
          </a>
        ) : (
          <p className={styles.company}>{company}</p>
        )}
        <p className={styles.summary}>{summary}</p>
      </div>
    </li>
  );
}

const styles = {
  item: cn('flex flex-col gap-2 py-6 sm:flex-row sm:gap-8'),
  meta: cn('flex flex-col gap-0.5 sm:w-36 sm:shrink-0'),
  dates: cn('text-muted font-mono text-xs'),
  location: cn('text-muted font-mono text-xs'),
  body: cn('flex flex-col'),
  role: cn('text-ink font-display text-lg font-semibold'),
  company: cn('text-muted mt-0.5 text-sm'),
  companyLink: cn('text-muted hover:text-accent mt-0.5 w-fit text-sm transition-colors'),
  summary: cn('text-muted mt-2 text-sm leading-relaxed'),
};

export default ExperienceItem;
