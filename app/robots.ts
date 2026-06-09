import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/app/config/site';

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

export default robots;
