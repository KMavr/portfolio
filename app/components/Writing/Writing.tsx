import { ARTICLES } from '@/app/config/articles';
import { cn } from '@/lib/utils/cn';

function Writing() {
  return (
    <section id="writing" className={styles.section}>
      <h2 className={styles.heading}>Writing</h2>
      <ul className={styles.list}>
        {ARTICLES.map((article) => (
          <li key={article.href} className={styles.item}>
            <span className={styles.date}>{article.date}</span>
            <div className={styles.body}>
              <h3>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}>
                  {article.title}
                </a>
              </h3>
              <p className={styles.description}>{article.description}</p>
              <ul className={styles.tags}>
                {article.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: cn('mx-auto w-full max-w-5xl px-6 py-16 sm:py-24'),
  heading: cn('text-ink text-2xl font-semibold sm:text-3xl'),
  list: cn('divide-line mt-10 divide-y'),
  item: cn('flex flex-col gap-2 py-6 sm:flex-row sm:gap-8'),
  date: cn('text-muted font-mono text-xs sm:w-36 sm:shrink-0'),
  body: cn('flex flex-col'),
  link: cn('text-ink hover:text-accent font-display text-lg font-semibold transition-colors'),
  description: cn('text-muted mt-2 text-sm leading-relaxed'),
  tags: cn('mt-4 flex flex-wrap gap-x-3 gap-y-1'),
  tag: cn('text-muted font-mono text-xs'),
};

export default Writing;
