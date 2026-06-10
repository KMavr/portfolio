import type { NextConfig } from 'next';

// CV PDF is built + published by the separate `cv` repo's CI to Vercel Blob.
// Proxy the stable site path to the blob so the link/filename stay unchanged
// and the download stays same-origin (keeps the `download` attribute working).
const CV_BLOB_URL =
  'https://g3kfihysr2afuisb.public.blob.vercel-storage.com/Konstantinos_Mavrikas_CV.pdf';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/Konstantinos_Mavrikas_CV.pdf',
        destination: CV_BLOB_URL,
      },
    ];
  },
};

export default nextConfig;
