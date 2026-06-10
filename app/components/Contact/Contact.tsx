import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import EmailWithCopyTooltip from '@/app/components/EmailWithCopyTooltip/EmailWithCopyTooltip';
import { EMAIL, SOCIALS } from '@/app/config/contact';
import { CONTACT_SUBLINE } from '@/app/config/site';
import { SocialLink } from '@/app/types';
import { cn } from '@/lib/utils/cn';

const ICONS: Record<SocialLink['label'], IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Let&apos;s work together</h2>
      <p className={styles.subline}>{CONTACT_SUBLINE}</p>
      <EmailWithCopyTooltip email={EMAIL} className={styles.ctaWrapper} linkClassName={styles.cta}>
        Email me
      </EmailWithCopyTooltip>
      <ul className={styles.socials}>
        {SOCIALS.map((social) => {
          const Icon = ICONS[social.label];
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}>
                <Icon className={styles.socialIcon} aria-hidden="true" />
                {social.label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const styles = {
  section: cn(
    'mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-20 text-center sm:py-28',
  ),
  heading: cn('text-ink font-display text-3xl font-semibold sm:text-4xl'),
  subline: cn('text-muted mt-4 text-base leading-relaxed text-balance'),
  ctaWrapper: cn('mt-8 inline-flex'),
  cta: cn(
    'bg-accent hover:bg-accent-hover text-paper rounded-full',
    'px-6 py-3 text-sm font-medium transition-colors active:translate-y-px',
  ),
  socials: cn('mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2'),
  social: cn(
    'text-muted hover:text-accent inline-flex items-center gap-1.5',
    'font-mono text-xs transition-colors',
  ),
  socialIcon: cn('size-3.5'),
};

export default Contact;
