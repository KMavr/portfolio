import { ImageResponse } from 'next/og';
import { SITE_DESCRIPTION, SITE_NAME, SITE_ROLE } from '@/app/config/site';

export const alt = `${SITE_NAME} — ${SITE_ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fdfcf9',
        padding: '80px',
        fontFamily: 'sans-serif',
      }}>
      <div
        style={{
          display: 'flex',
          width: '72px',
          height: '8px',
          backgroundColor: '#8f0d0d',
          borderRadius: '4px',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '88px', fontWeight: 700, color: '#2b2724', lineHeight: 1.05 }}>
          {SITE_NAME}
        </div>
        <div style={{ fontSize: '40px', color: '#6e6a66', marginTop: '20px' }}>{SITE_ROLE}</div>
      </div>
      <div style={{ display: 'flex', fontSize: '24px', color: '#6e6a66', maxWidth: '900px' }}>
        {SITE_DESCRIPTION}
      </div>
    </div>,
    size,
  );
}

export default OpengraphImage;
