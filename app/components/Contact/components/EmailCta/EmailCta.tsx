'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface EmailCtaProps {
  email: string;
}

const CLICK_COOLDOWN_MS = 2000;

function EmailCta({ email }: EmailCtaProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastClickRef = useRef(0);

  useEffect(() => () => clearTimeout(timeoutRef.current ?? undefined), []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const now = Date.now();
    if (now - lastClickRef.current < CLICK_COOLDOWN_MS) {
      event.preventDefault();
      return;
    }
    lastClickRef.current = now;

    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      clearTimeout(timeoutRef.current ?? undefined);
      timeoutRef.current = setTimeout(() => setCopied(false), CLICK_COOLDOWN_MS);
    });
  };

  return (
    <div className={styles.wrapper}>
      <a href={`mailto:${email}`} onClick={handleClick} className={styles.cta}>
        Email me
      </a>
      <span
        role="status"
        aria-live="polite"
        className={cn(styles.tooltip, copied ? styles.tooltipVisible : styles.tooltipHidden)}>
        {copied ? 'Email copied' : ''}
      </span>
    </div>
  );
}

const styles = {
  wrapper: cn('relative mt-8 inline-flex'),
  cta: cn(
    'bg-accent hover:bg-accent-hover text-paper rounded-full',
    'px-6 py-3 text-sm font-medium transition-colors active:translate-y-px',
  ),
  tooltip: cn(
    'bg-ink text-paper pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2',
    'rounded-full px-3 py-1 font-mono text-xs whitespace-nowrap transition-opacity duration-200',
  ),
  tooltipVisible: cn('opacity-100'),
  tooltipHidden: cn('opacity-0'),
};

export default EmailCta;
