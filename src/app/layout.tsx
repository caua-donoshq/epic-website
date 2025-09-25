import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import { ConsoleEasterEgg } from '@/components/console-easter-egg';
import { DynamicFavicon } from '@/components/dynamic-favicon';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { EB_Garamond, DM_Sans, Inter, Instrument_Serif } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Epic - AI Product Manager for AI Coding Assistants",
  description: "Transform your vision into structured prompts and tasks that AI coding assistants can execute. Built for vibe-coder founders.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon-black.svg', type: 'image/svg+xml' }
    ],
    shortcut: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon-black.svg', type: 'image/svg+xml' }
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        rel: 'mask-icon',
        url: '/images/favicon-black.svg',
        color: '#000000',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${dmSans.variable} ${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        
        {/* Explicit favicon declarations to override Vercel defaults */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="mask-icon" href="/images/favicon-black.svg" color="#000000" />
        
      </head>
      <body
        className="antialiased font-sans light"
        suppressHydrationWarning={true}
      >
        <DynamicFavicon />
        {children}
        <ConsoleEasterEgg />
        <SpeedInsights />
      </body>
    </html>
  );
}
