import { EMAIL } from '@/app/config/contact';
import { cn } from '@/lib/utils/cn';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.closing}>
        Let&apos;s build something that lasts.{' '}
        <a href={`mailto:${EMAIL}`} className={styles.closingLink}>
          Drop me a line.
        </a>
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
  footer: cn('mx-auto w-full max-w-5xl px-6 py-12'),
  closing: cn('text-muted font-display text-lg'),
  closingLink: cn('text-accent hover:text-accent-hover transition-colors'),
  divider: cn('border-line mt-8 border-t'),
  credit: cn(
    'text-faint mt-6 flex flex-col gap-1 font-mono text-xs',
    'sm:flex-row sm:items-center sm:justify-between',
  ),
};

export default Footer;
