import { PROJECT_DETAILS } from '@/app/config/projectDetails';
import { PROJECTS } from '@/app/config/projects';
import { SITE_NAME } from '@/app/config/site';
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = `${SITE_NAME} — Project`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

interface OpengraphImageProps {
  params: Promise<{ slug: string }>;
}

async function OpengraphImage({ params }: OpengraphImageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((entry) => entry.slug === slug);
  const detail = PROJECT_DETAILS?.[slug];

  return renderOgImage({
    eyebrow: SITE_NAME,
    title: project?.title ?? 'Projects',
    subtitle: detail?.tagline ?? '',
  });
}

export default OpengraphImage;
