import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_URL } from '@/app/config/site';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

// satori can't read oklch tokens, so the OG card uses literal hex equivalents
// of the site palette (paper / ink / muted / accent from app/globals.css).
const COLORS = {
  paper: '#fdfcf9',
  ink: '#2b2724',
  muted: '#6e6a66',
  accent: '#8f0d0d',
};

function loadFont(weight: 400 | 500 | 700) {
  return readFile(join(process.cwd(), `assets/fonts/SpaceGrotesk-${weight}.woff`));
}

interface OgCardProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

async function renderOgImage({ eyebrow, title, subtitle }: OgCardProps) {
  const [regular, medium, bold] = await Promise.all([loadFont(400), loadFont(500), loadFont(700)]);
  const host = new URL(SITE_URL).host;

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: COLORS.paper,
        padding: '80px',
        fontFamily: 'Space Grotesk',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div
          style={{
            display: 'flex',
            width: '72px',
            height: '8px',
            backgroundColor: COLORS.accent,
            borderRadius: '4px',
          }}
        />
        <div style={{ display: 'flex', fontSize: '26px', fontWeight: 500, color: COLORS.muted }}>
          {eyebrow}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '84px',
            fontWeight: 700,
            color: COLORS.ink,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}>
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '34px',
            fontWeight: 400,
            color: COLORS.muted,
            marginTop: '24px',
            maxWidth: '960px',
            lineHeight: 1.3,
          }}>
          {subtitle}
        </div>
      </div>
      <div style={{ display: 'flex', fontSize: '24px', fontWeight: 400, color: COLORS.muted }}>
        {host}
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Space Grotesk', data: regular, style: 'normal', weight: 400 },
        { name: 'Space Grotesk', data: medium, style: 'normal', weight: 500 },
        { name: 'Space Grotesk', data: bold, style: 'normal', weight: 700 },
      ],
    },
  );
}

export { renderOgImage };
