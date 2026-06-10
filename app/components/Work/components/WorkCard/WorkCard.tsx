import Link from 'next/link';
import type { IconType } from 'react-icons';
import { FaGithub, FaGlobe, FaNpm } from 'react-icons/fa';
import { ProjectLink } from '@/app/types';
import { cn } from '@/lib/utils/cn';

const ICONS: Record<ProjectLink['label'], IconType> = {
  npm: FaNpm,
  GitHub: FaGithub,
  Live: FaGlobe,
};

interface WorkCardProps {
  title: string;
  description: string;
  techTags: string[];
  links: ProjectLink[];
  slug?: string;
}

function WorkCard({ title, description, techTags, links, slug }: WorkCardProps) {
  return (
    <article className={styles.card}>
      {slug ? (
        <Link href={`/projects/${slug}`} className={styles.titleLink}>
          {title}
        </Link>
      ) : (
        <h3 className={styles.title}>{title}</h3>
      )}
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags}>
        {techTags.map((techTag) => (
          <li key={techTag} className={styles.tag}>
            {techTag}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {links.map((link) => {
          const Icon = ICONS[link.label];
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}>
              <Icon className={styles.linkIcon} aria-hidden="true" />
              {link.label}
            </a>
          );
        })}
      </div>
    </article>
  );
}

const styles = {
  card: cn(
    'border-line bg-surface rounded-card relative flex h-full flex-col border p-6',
    'shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md',
  ),
  title: cn('text-ink font-display text-lg font-semibold break-words'),
  titleLink: cn(
    'text-ink font-display text-lg font-semibold break-words',
    'hover:text-accent transition-colors',
    "after:absolute after:inset-0 after:content-['']",
  ),
  description: cn('text-muted mt-2 text-sm leading-relaxed'),
  tags: cn('mt-4 flex flex-wrap gap-x-3 gap-y-1'),
  tag: cn('text-muted font-mono text-xs'),
  links: cn('relative z-10 mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-5'),
  link: cn(
    'text-muted hover:text-accent inline-flex items-center gap-1.5',
    'font-mono text-xs transition-colors',
  ),
  linkIcon: cn('size-3.5'),
};

export default WorkCard;
