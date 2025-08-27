import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import { ConsoleEasterEgg } from '@/components/console-easter-egg';
import { ThemeProvider } from '@/lib/theme-context';
import { DynamicFavicon } from '@/components/dynamic-favicon';

export const metadata: Metadata = {
  title: "Epic - AI Product Manager for AI Coding Assistants",
  description: "Transform your vision into structured prompts and tasks that AI coding assistants can execute. Built for vibe-coder founders.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon-black.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/images/favicon-black.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased font-sans light"
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          defaultTheme="light"
          storageKey="epic-theme"
        >
          <DynamicFavicon />
          {children}
          <ConsoleEasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
