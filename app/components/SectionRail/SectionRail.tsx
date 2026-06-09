'use client';

import useActiveSectionDetection from '@/app/hooks/useActiveSectionDetection';
import { cn } from '@/lib/utils/cn';

const SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function SectionRail() {
  const activeId = useActiveSectionDetection(SECTIONS);

  return (
    <nav aria-label="Page sections" className={styles.rail}>
      <ul className={styles.list}>
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={styles.link}>
                <span className={cn(styles.tick, isActive ? styles.tickActive : styles.tickIdle)} />
                <span
                  className={cn(styles.label, isActive ? styles.labelActive : styles.labelIdle)}>
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  rail: cn('fixed top-1/2 right-8 z-40 hidden -translate-y-1/2 lg:block'),
  list: cn('flex flex-col gap-4'),
  link: cn('group inline-flex items-center gap-3'),
  tick: cn('h-px transition-all duration-300 ease-out'),
  tickIdle: cn('bg-faint w-4 group-hover:w-6'),
  tickActive: cn('bg-accent w-8'),
  label: cn('font-mono text-xs transition-colors'),
  labelIdle: cn('text-faint group-hover:text-muted'),
  labelActive: cn('text-accent'),
};

export default SectionRail;
