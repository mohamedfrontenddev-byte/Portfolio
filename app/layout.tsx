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

export const metadata: Metadata = {
  title: 'Mohamed Allam | Front-End Developer',
  description: 'Professional Front-End Developer Portfolio - React, Next.js, JavaScript, Tailwind CSS',
  keywords: ['Front-End Developer', 'React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Mohamed Allam'],
  authors: [{ name: 'Mohamed Allam' }],
  openGraph: {
    title: 'Mohamed Allam | Front-End Developer',
    description: 'Building modern, scalable and high-performance web experiences',
    type: 'website',
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
