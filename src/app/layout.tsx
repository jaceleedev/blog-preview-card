import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const figTree = localFont({
  src: '../../public/fonts/Figtree-VariableFont_wght.ttf',
  display: 'swap',
  style: 'normal',
  variable: '--font-figTree',
});

export const viewport: Viewport = {
  themeColor: '#F4D04E',
};

export const metadata: Metadata = {
  title: 'Frontend Mentor | Blog preview card',
  description:
    'A responsive blog preview card component built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Blog Preview Card',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Blog preview card',
    'Next.js',
    'Tailwind CSS',
    'CSS Module',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/blog-preview-card',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blog-preview-card-omega-self.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Blog preview card',
    description:
      'A responsive blog preview card component built for a Frontend Mentor challenge.',
    url: 'https://blog-preview-card-omega-self.vercel.app',
    siteName: 'Frontend Mentor | Blog preview card',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1703155661/Challenges/iyh3uk6keluskixx8pz6.jpg',
        width: 1440,
        height: 960,
        alt: 'Blog preview card desktop size',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1703155661/Challenges/kcukxpnovezbphfeaxg9.jpg',
        width: 375,
        height: 812,
        alt: 'Blog preview card mobile size',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Blog preview card',
    description:
      'A responsive blog preview card component built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1703155661/Challenges/iyh3uk6keluskixx8pz6.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figTree.variable}`}>{children}</body>
    </html>
  );
}
