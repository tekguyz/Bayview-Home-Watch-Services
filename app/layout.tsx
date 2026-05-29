import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bayviewhomewatchservices.vercel.app'),
  title: 'Bayview Home Watch Services | Premium Broward County Property Monitoring',
  description: 'Professional, licensed, and detail-obsessed home watch protection for seasonal South Florida residents. Safely monitoring your premium estate lines from the beach to the bay while you are away.',
  keywords: [
    'Home Watch South Florida',
    'Broward County home sitting',
    'luxury property management',
    'snowbird house care',
    'mold detection Florida',
    'seasonal house openings'
  ],
  openGraph: {
    title: 'Bayview Home Watch Services | Premium Broward County Property Monitoring',
    description: 'Professional, licensed, and detail-obsessed home watch protection for seasonal South Florida residents. Safely monitoring your premium estate lines from the beach to the bay while you are away.',
    url: 'https://bayviewhomewatchservices.vercel.app',
    siteName: 'Bayview Home Watch Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bayview Home Watch Services - Premium Property Monitoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bayview Home Watch Services | Premium Broward County Property Monitoring',
    description: 'Professional, licensed, and detail-obsessed home watch protection for seasonal South Florida residents. Safely monitoring your premium estate lines from the beach to the bay while you are away.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
