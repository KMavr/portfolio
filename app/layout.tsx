import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Nav from '@/app/components/Nav/Nav';
import { cn } from '@/lib/utils/cn';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Konstantinos Mavrikas — Senior Front-end Developer',
  description:
    'Senior front-end developer with 9 years building React and React Native products. Open to work.',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className={styles.body}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

const styles = {
  body: cn('flex min-h-dvh flex-col'),
};

export default RootLayout;
