import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectLinks from '@/app/components/ProjectDetail/components/ProjectLinks/ProjectLinks';
import ProjectSection from '@/app/components/ProjectDetail/components/ProjectSection/ProjectSection';
import { Project, ProjectDetail as ProjectDetailType } from '@/app/types';
import { cn } from '@/lib/utils/cn';

interface ProjectDetailProps {
  project: Project;
  detail: ProjectDetailType;
}

function ProjectDetail({ project, detail }: ProjectDetailProps) {
  return (
    <article className={styles.article}>
      <Link href="/#projects" className={styles.back}>
        <FaArrowLeft className={styles.backIcon} aria-hidden="true" />
        All work
      </Link>
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.tagline}>{detail.tagline}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          {project.links.map((link) => (
            <ProjectLinks key={link.href} label={link.label} href={link.href} />
          ))}
        </div>
      </header>
      <div className={styles.sections}>
        {detail.sections.map((section) => (
          <ProjectSection key={section.heading} section={section} />
        ))}
      </div>
    </article>
  );
}

const styles = {
  article: cn('mx-auto w-full max-w-3xl px-6 py-16 sm:py-24'),
  back: cn(
    'text-muted hover:text-accent inline-flex items-center gap-2',
    'font-mono text-xs transition-colors',
  ),
  backIcon: cn('size-3'),
  header: cn('border-line mt-8 border-b pb-8'),
  title: cn('text-ink font-display text-3xl font-semibold sm:text-4xl'),
  tagline: cn('text-muted mt-3 text-lg leading-relaxed'),
  tags: cn('mt-5 flex flex-wrap gap-x-3 gap-y-1'),
  tag: cn('text-faint font-mono text-xs'),
  links: cn('mt-5 flex flex-wrap gap-x-4 gap-y-1'),
  sections: cn('mt-10 flex flex-col gap-10'),
};

export default ProjectDetail;
