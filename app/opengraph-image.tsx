import { SITE_DESCRIPTION, SITE_NAME, SITE_ROLE } from '@/app/config/site';
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = `${SITE_NAME} — ${SITE_ROLE}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

function OpengraphImage() {
  return renderOgImage({
    eyebrow: SITE_ROLE,
    title: SITE_NAME,
    subtitle: SITE_DESCRIPTION,
  });
}

export default OpengraphImage;
