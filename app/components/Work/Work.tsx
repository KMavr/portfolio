import WorkCard from '@/app/components/Work/components/WorkCard/WorkCard';
import { PROJECTS } from '@/app/config/projects';
import { cn } from '@/lib/utils/cn';

function Work() {
  return (
    <section id="work" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <WorkCard
            key={project.title}
            title={project.title}
            description={project.description}
            techTags={project.tags}
            links={project.links}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: cn('mx-auto w-full max-w-5xl px-6 py-16 sm:py-24'),
  heading: cn('text-ink text-2xl font-semibold sm:text-3xl'),
  grid: cn('mt-10 grid gap-4 sm:grid-cols-2'),
};

export default Work;
