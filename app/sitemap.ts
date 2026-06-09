import type { MetadataRoute } from 'next';
import { PROJECT_DETAILS } from '@/app/config/projectDetails';
import { SITE_URL } from '@/app/config/site';

function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectRoutes = Object.keys(PROJECT_DETAILS).map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectRoutes,
  ];
}

export default sitemap;
