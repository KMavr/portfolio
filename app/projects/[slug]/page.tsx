import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/app/components/ProjectDetail/ProjectDetail';
import { PROJECT_DETAILS } from '@/app/config/projectDetails';
import { PROJECTS } from '@/app/config/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS.find((project) => project.slug === slug);
  const detail = PROJECT_DETAILS?.[slug];

  if (!project || !detail) {
    return {};
  }

  return {
    title: `${project.title} - Konstantinos Mavrikas`,
    description: detail.tagline,
  };
}

async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = PROJECTS.find((project) => project.slug === slug);
  const detail = PROJECT_DETAILS?.[slug];

  if (!project || !detail) {
    notFound();
  }

  return <ProjectDetail project={project} detail={detail} />;
}

export default ProjectPage;
