'use client';

import { useState, useEffect } from 'react';

export interface ThemeOption {
  id: string;
  name: string;
  tagline: string;
  primary: string;
  accent: string;
  dark: string;
  badge?: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: 'cosmic',
    name: 'Studio Noir',
    tagline: 'Ink black, electric violet & citrus (Default)',
    primary: '#8B5CF6',
    accent: '#D9F99D',
    dark: '#0D0D12',
    badge: 'Recommended',
  },
  {
    id: 'cyber',
    name: 'Cyberpunk Cyan',
    tagline: 'Electric cyan & indigo glow',
    primary: '#06B6D4',
    accent: '#818CF8',
    dark: '#030712',
  },
  {
    id: 'emerald',
    name: 'Emerald Matrix',
    tagline: 'Vibrant mint green & sky blue',
    primary: '#10B981',
    accent: '#38BDF8',
    dark: '#022C22',
  },
  {
    id: 'solar',
    name: 'Solar Flare',
    tagline: 'Crimson red & sunset gold',
    primary: '#F43F5E',
    accent: '#F59E0B',
    dark: '#18080A',
  },
  {
    id: 'synthwave',
    name: 'Synthwave Pink',
    tagline: 'Hot neon pink & warm amber',
    primary: '#EC4899',
    accent: '#FBBF24',
    dark: '#110A19',
  },
  {
    id: 'ocean',
    name: 'Ocean Deep',
    tagline: 'Royal cobalt blue & emerald',
    primary: '#2563EB',
    accent: '#34D399',
    dark: '#0A1128',
  },
  {
    id: 'light',
    name: 'Light Crystal',
    tagline: 'Modern crisp white light mode',
    primary: '#6D28D9',
    accent: '#D97706',
    dark: '#F8FAFC',
    badge: 'Light Mode',
  },
  {
    id: 'paper',
    name: 'Paper & Ink',
    tagline: 'Warm editorial cream & vermilion',
    primary: '#C2410C',
    accent: '#1D4ED8',
    dark: '#FFF9F0',
  },
  {
    id: 'sage',
    name: 'Sage Studio',
    tagline: 'Soft sage, forest ink & peach',
    primary: '#15803D',
    accent: '#FDBA74',
    dark: '#071A12',
  },
  {
    id: 'cobalt',
    name: 'Cobalt Editorial',
    tagline: 'Cobalt blue, coral & clean white',
    primary: '#2563EB',
    accent: '#FB7185',
    dark: '#08111F',
  },
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<string>('cosmic');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Read stored theme from localStorage
    const savedTheme = localStorage.getItem('progic_theme');
    let themeTimer: number | undefined;
    if (savedTheme && THEMES.some((t) => t.id === savedTheme)) {
      themeTimer = window.setTimeout(() => setActiveTheme(savedTheme), 0);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'cosmic');
    }

    // Listen for external trigger events (e.g., from Navbar)
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-theme-switcher', handleOpenEvent);
    return () => {
      window.removeEventListener('open-theme-switcher', handleOpenEvent);
      if (themeTimer) window.clearTimeout(themeTimer);
    };
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('progic_theme', themeId);
  };

  const activeObj = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="palette-floating-btn"
        aria-label="Color Palette Switcher"
        title="Change UI Color Palette"
      >
        <div className="palette-icon-wrapper">
          <i className="fa-solid fa-palette text-xl"></i>
          <span className="palette-pulse"></span>
        </div>
        <span className="palette-floating-text">Theme</span>
      </button>

      {/* Palette Drawer Modal */}
      {isOpen && (
        <div className="palette-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div
            className="palette-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="palette-modal-header">
              <div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-swatchbook text-accent text-xl"></i>
                  <h3 className="text-lg font-bold text-white">Color Palette Selector</h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Select a theme to instantly transform the app colors
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="palette-close-btn"
                aria-label="Close theme modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Current Active Indicator Banner */}
            <div className="active-theme-banner">
              <span className="text-xs text-slate-300">Active Theme:</span>
              <span className="font-bold text-xs flex items-center gap-1.5" style={{ color: activeObj.accent }}>
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: activeObj.primary }}
                ></span>
                {activeObj.name}
              </span>
            </div>

            {/* Grid of Palette Cards */}
            <div className="palette-grid">
              {THEMES.map((theme) => {
                const isActive = theme.id === activeTheme;
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleSelectTheme(theme.id)}
                    className={`palette-card ${isActive ? 'active' : ''}`}
                  >
                    <div className="palette-card-top">
                      {/* Swatch dots */}
                      <div className="palette-swatches">
                        <span
                          className="swatch-dot"
                          style={{ backgroundColor: theme.primary }}
                          title={`Primary: ${theme.primary}`}
                        ></span>
                        <span
                          className="swatch-dot"
                          style={{ backgroundColor: theme.accent }}
                          title={`Accent: ${theme.accent}`}
                        ></span>
                        <span
                          className="swatch-dot"
                          style={{ backgroundColor: theme.dark, border: '1px solid rgba(255,255,255,0.2)' }}
                          title={`Background: ${theme.dark}`}
                        ></span>
                      </div>

                      {theme.badge && (
                        <span className="palette-badge">{theme.badge}</span>
                      )}

                      {isActive && (
                        <span className="active-check">
                          <i className="fa-solid fa-check"></i>
                        </span>
                      )}
                    </div>

                    <div className="palette-card-body">
                      <div className="palette-name">{theme.name}</div>
                      <div className="palette-tagline">{theme.tagline}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="palette-modal-footer">
              <button
                onClick={() => handleSelectTheme('cosmic')}
                className="palette-reset-btn"
              >
                <i className="fa-solid fa-rotate-left me-1"></i> Reset to Default
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-primary btn-sm"
              >
                Apply & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
