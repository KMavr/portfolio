import { cn } from '@/lib/utils/cn';

function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#top" className={styles.nameLink}>
          Konstantinos Mavrikas
        </a>
        <a href="#contact" className={styles.contactLink}>
          Get in touch
        </a>
      </nav>
    </header>
  );
}

const styles = {
  header: cn('sticky top-0 z-50 flex justify-center px-4 pt-4'),
  nav: cn(
    'border-line bg-paper/80 inline-flex items-center gap-6',
    'rounded-full border px-5 py-2.5 shadow-sm backdrop-blur-md',
  ),
  nameLink: cn('font-display text-ink text-sm font-medium tracking-tight whitespace-nowrap'),
  contactLink: cn(
    'bg-accent hover:bg-accent-hover',
    'text-paper rounded-full px-4 py-1.5 text-sm font-medium',
    'whitespace-nowrap transition-colors active:translate-y-px',
  ),
};

export default Nav;
