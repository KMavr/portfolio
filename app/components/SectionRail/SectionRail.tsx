'use client';

import { SECTIONS } from '@/app/config/sections';
import useActiveSectionDetection from '@/app/hooks/useActiveSectionDetection';
import { cn } from '@/lib/utils/cn';

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
                <span
                  className={cn(styles.label, isActive ? styles.labelActive : styles.labelIdle)}>
                  {label}
                </span>
                <span className={cn(styles.dot, isActive ? styles.dotActive : styles.dotIdle)} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  rail: cn('fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 lg:block'),
  list: cn('flex flex-col items-end gap-4'),
  link: cn('group flex items-center justify-end gap-2 py-1'),
  label: cn(
    'hidden font-mono text-xs transition-all duration-200 ease-out xl:inline',
    'translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
  ),
  labelIdle: cn('text-muted'),
  labelActive: cn('text-accent translate-x-0 opacity-100'),
  dot: cn('size-2 rounded-full transition-all duration-200 ease-out'),
  dotIdle: cn('bg-faint group-hover:bg-muted'),
  dotActive: cn('bg-accent scale-125'),
};

export default SectionRail;
