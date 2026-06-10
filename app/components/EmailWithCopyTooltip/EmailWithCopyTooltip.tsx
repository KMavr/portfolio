'use client';

import useMailtoCopy from '@/app/hooks/useMailtoCopy';
import { cn } from '@/lib/utils/cn';

interface EmailWithCopyTooltipProps {
  email: string;
  className?: string;
  linkClassName?: string;
  children: React.ReactNode;
}

function EmailWithCopyTooltip({
  email,
  className,
  linkClassName,
  children,
}: EmailWithCopyTooltipProps) {
  const { copied, handleClick } = useMailtoCopy(email);

  return (
    <span className={cn(styles.wrapper, className)}>
      <a href={`mailto:${email}`} onClick={handleClick} className={cn(linkClassName)}>
        {children}
      </a>

      <span
        role="status"
        aria-live="polite"
        className={cn(styles.tooltip, copied ? styles.tooltipVisible : styles.tooltipHidden)}>
        {copied ? 'Email copied' : ''}
      </span>
    </span>
  );
}

const styles = {
  wrapper: cn('relative'),
  tooltip: cn(
    'bg-ink text-paper pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2',
    'rounded-full px-3 py-1 font-mono text-xs whitespace-nowrap transition-opacity duration-200',
  ),
  tooltipVisible: cn('opacity-100'),
  tooltipHidden: cn('opacity-0'),
};

export default EmailWithCopyTooltip;
