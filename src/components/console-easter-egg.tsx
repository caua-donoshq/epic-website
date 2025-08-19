"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    epicMode?: () => string;
  }
}

export function ConsoleEasterEgg() {
  useEffect(() => {
    const crown = `
     ♔♔♔♔♔♔♔♔♔
   ♔♔♔     ♔♔♔
  ♔♔ ♔     ♔ ♔♔
 ♔♔  ♔♔   ♔♔  ♔♔
♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔
    `;

    // Clear console first for clean display
    console.clear();
    
    // Display crown ASCII art
    console.log('%c' + crown, 'color: #8B5CF6; font-size: 16px; line-height: 1.2;');
    
    // Main message
    console.log(
      '%cBuild something epic.',
      'font-size: 24px; font-weight: bold; color: #1a1a1a; margin: 20px 0;'
    );
    
    
    // Fun developer message
    console.log('\n');
    console.log(
      '%c🚀 Hey there, curious developer!',
      'font-size: 16px; color: #8B5CF6; font-weight: bold;'
    );
    console.log(
      '%cLooks like you enjoy peeking under the hood. We like that.',
      'font-size: 14px; color: #666;'
    );
    
    // Hidden challenge
    console.log('\n');
    console.log(
      '%c🎯 Challenge accepted?',
      'font-size: 14px; color: #8B5CF6; font-weight: bold;'
    );
    console.log(
      '%cTry this: window.epicMode()',
      'font-size: 12px; color: #999; font-family: monospace;'
    );
    
    // Add the hidden function
    if (typeof window !== 'undefined') {
      window.epicMode = () => {
        console.clear();
        const epicArt = `
        ███████╗██████╗ ██╗ ██████╗
        ██╔════╝██╔══██╗██║██╔════╝
        █████╗  ██████╔╝██║██║     
        ██╔══╝  ██╔═══╝ ██║██║     
        ███████╗██║     ██║╚██████╗
        ╚══════╝╚═╝     ╚═╝ ╚═════╝
        `;
        console.log('%c' + epicArt, 'color: #8B5CF6; font-size: 12px;');
        console.log(
          '%c🎉 Epic mode activated! You found the secret!',
          'font-size: 18px; color: #8B5CF6; font-weight: bold;'
        );
        console.log(
          '%cNow go build something amazing with Epic + your favorite AI assistant!',
          'font-size: 14px; color: #666;'
        );
        return '🚀 Epic mode: ON';
      };
    }
  }, []);

  return null;
}