'use client';

import { useEffect } from 'react';

export function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = (isDark: boolean) => {
      const faviconPath = isDark ? '/images/favicon-white.svg' : '/images/favicon-black.svg';
      
      // Remove ALL existing favicon links to prevent Vercel overrides
      const existingLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll("link[rel*='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']");
      existingLinks.forEach(link => {
        link.remove();
      });
      
      // Create new favicon links with high priority
      const iconLink = document.createElement('link');
      iconLink.rel = 'icon';
      iconLink.type = 'image/svg+xml';
      iconLink.href = faviconPath;
      
      const shortcutLink = document.createElement('link');
      shortcutLink.rel = 'shortcut icon';
      shortcutLink.type = 'image/svg+xml';
      shortcutLink.href = faviconPath;
      
      const appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      appleLink.href = faviconPath;
      
      // Insert at the beginning of head to ensure priority
      const firstChild = document.head.firstChild;
      document.head.insertBefore(iconLink, firstChild);
      document.head.insertBefore(shortcutLink, firstChild);
      document.head.insertBefore(appleLink, firstChild);
    };

    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateFavicon(mediaQuery.matches);

    // Listen for changes
    const handler = (e: MediaQueryListEvent) => updateFavicon(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Also listen for manual theme changes if you have a theme toggle
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      updateFavicon(isDark);
    };

    // Set up a MutationObserver to watch for class changes on html element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      mediaQuery.removeEventListener('change', handler);
      observer.disconnect();
    };
  }, []);

  return null;
}