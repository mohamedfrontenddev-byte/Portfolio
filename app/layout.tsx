import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import GlobalBackground from '@/components/GlobalBackground';
import MouseGlow from '@/components/MouseGlow';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = 'https://portfolio-six-bice-54.vercel.app';
const siteName = 'Mohamed Allam Portfolio';
const pageDescription =
  'Mohamed Allam is a Front-End Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Explore a modern portfolio showcasing web experiences and projects.';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: pageDescription,
  author: {
    '@type': 'Person',
    name: 'Mohamed Allam',
    jobTitle: 'Front-End Developer',
    url: siteUrl,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mohamed Allam | Front-End Developer',
    template: '%s | Mohamed Allam',
  },
  description: pageDescription,
  keywords: [
    'Mohamed Allam',
    'Front-End Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'Web Development',
    'Cairo Egypt',
  ],
  authors: [{ name: 'Mohamed Allam', url: siteUrl }],
  creator: 'Mohamed Allam',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Mohamed Allam | Front-End Developer',
    description: pageDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: '/protfolio.png',
        width: 1200,
        height: 630,
        alt: 'Mohamed Allam Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Allam | Front-End Developer',
    description: pageDescription,
    images: ['/protfolio.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <GlobalBackground />
            <div className="relative z-10">
              <MouseGlow />
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
