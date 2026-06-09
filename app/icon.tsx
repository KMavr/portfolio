import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#8f0d0d',
        color: '#fdfcf9',
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: '-1px',
        borderRadius: 6,
        fontFamily: 'sans-serif',
      }}>
      KM
    </div>,
    size,
  );
}

export default Icon;
