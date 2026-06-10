import EmailWithCopyTooltip from '@/app/components/EmailWithCopyTooltip/EmailWithCopyTooltip';
import { EMAIL } from '@/app/config/contact';
import { cn } from '@/lib/utils/cn';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.closing}>
        Let&apos;s build something that lasts.{' '}
        <EmailWithCopyTooltip
          email={EMAIL}
          className={styles.mailWrapper}
          linkClassName={styles.mailLink}>
          Drop me a line.
        </EmailWithCopyTooltip>
      </p>
      <div className={styles.divider} />
      <div className={styles.credit}>
        <span>© {year} Konstantinos Mavrikas</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: cn('mx-auto mb-5 w-full max-w-5xl px-6 py-12 lg:mb-0'),
  closing: cn('text-muted font-display text-lg'),
  mailWrapper: cn('inline-block'),
  mailLink: cn('text-accent hover:text-accent-hover transition-colors'),
  divider: cn('border-line mt-8 border-t'),
  credit: cn(
    'text-muted mt-6 flex flex-col gap-1 font-mono text-xs',
    'sm:flex-row sm:items-center sm:justify-between',
  ),
};

export default Footer;
