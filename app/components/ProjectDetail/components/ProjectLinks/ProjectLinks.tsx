import type { IconType } from 'react-icons';
import { FaGithub, FaGlobe, FaNpm } from 'react-icons/fa';
import { ProjectLink } from '@/app/types';
import { cn } from '@/lib/utils/cn';

const ICONS: Record<ProjectLink['label'], IconType> = {
  npm: FaNpm,
  GitHub: FaGithub,
  Live: FaGlobe,
};

interface ProjectLinksProps {
  label: 'npm' | 'GitHub' | 'Live';
  href: string;
}

function ProjectLinks({ label, href }: ProjectLinksProps) {
  const Icon = ICONS[label];
  return (
    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <Icon className={styles.linkIcon} aria-hidden="true" />
      {label}
    </a>
  );
}

const styles = {
  link: cn(
    'text-muted hover:text-accent inline-flex items-center gap-1.5',
    'font-mono text-xs transition-colors',
  ),
  linkIcon: cn('size-3.5'),
};

export default ProjectLinks;
