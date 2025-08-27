'use client';

import { useEffect } from 'react';

export function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = (isDark: boolean) => {
      const faviconPath = isDark ? '/images/favicon-white.svg' : '/images/favicon-black.svg';
      
      // Update all favicon links
      const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll("link[rel*='icon']");
      links.forEach(link => {
        link.href = faviconPath;
      });
      
      // If no favicon links exist, create them
      if (links.length === 0) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = faviconPath;
        document.head.appendChild(link);
      }
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