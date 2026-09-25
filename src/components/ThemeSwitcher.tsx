'use client';

import { useEffect } from 'react';

export const THEMES = [
  { id: 'cosmic', name: 'Studio Noir' },
  { id: 'light', name: 'Light Crystal' },
  { id: 'cyber', name: 'Cyberpunk Cyan' },
  { id: 'emerald', name: 'Emerald Matrix' },
  { id: 'solar', name: 'Solar Flare' },
  { id: 'synthwave', name: 'Synthwave Pink' },
  { id: 'ocean', name: 'Ocean Deep' },
  { id: 'paper', name: 'Paper & Ink' },
  { id: 'sage', name: 'Sage Studio' },
  { id: 'cobalt', name: 'Cobalt Editorial' },
];

export default function ThemeSwitcher() {
  useEffect(() => {
    // Read stored theme from localStorage
    const savedTheme = localStorage.getItem('progic_theme');
    let themeToUse = 'cosmic';

    if (savedTheme && THEMES.some((t) => t.id === savedTheme)) {
      themeToUse = savedTheme;
    } else {
      // Light Crystal as default light, Studio Noir as default dark
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      themeToUse = prefersLight ? 'light' : 'cosmic';
    }

    document.documentElement.setAttribute('data-theme', themeToUse);

    // Listen for system theme changes if user hasn't explicitly set a theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleSchemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('progic_theme')) {
        const newTheme = e.matches ? 'light' : 'cosmic';
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };
    mediaQuery.addEventListener('change', handleSchemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSchemeChange);
    };
  }, []);

  // Palette button and adjacent button hidden as requested
  return null;
}
