'use client';

import { SECTIONS } from '@/app/config/sections';
import useActiveSectionDetection from '@/app/hooks/useActiveSectionDetection';
import { cn } from '@/lib/utils/cn';

function MobileSectionNav() {
  const activeId = useActiveSectionDetection(SECTIONS);

  return (
    <nav aria-label="Page sections" className={styles.nav}>
      <ul className={styles.list}>
        {SECTIONS.map(({ id, label, shortLabel }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? 'true' : undefined}
                className={styles.link}>
                {isActive ? (
                  <span className={styles.label}>{shortLabel}</span>
                ) : (
                  <span className={styles.dot} />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  nav: cn('fixed bottom-4 left-1/2 z-40 -translate-x-1/2 lg:hidden'),
  list: cn(
    'border-line bg-paper/80 flex items-center gap-1 rounded-full border',
    'px-2 py-1.5 shadow-sm backdrop-blur-md',
  ),
  link: cn('flex items-center justify-center rounded-full px-3 py-2'),
  dot: cn('bg-faint size-2 rounded-full'),
  label: cn('text-accent font-mono text-xs'),
};

export default MobileSectionNav;
