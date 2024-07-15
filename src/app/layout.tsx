import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figTree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figTree',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Blog preview card',
  description: 'Blog preview card challenge',
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
