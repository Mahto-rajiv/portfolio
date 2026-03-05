import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { theme, flattenPalette } from '../styles/theme';

const ThemeContext = createContext(undefined);

/** Apply palette CSS variables to the document root. */
function applyPalette(mode) {
    const palette = theme.palette[mode];
    const vars = flattenPalette(palette);
    const root = document.documentElement;

    for (const [prop, value] of Object.entries(vars)) {
        root.style.setProperty(prop, value);
    }

    // Also set non-palette tokens
    root.style.setProperty('--font-primary', theme.typography.fontFamily);
    root.style.setProperty('--transition-fast', theme.transitions.fast);
    root.style.setProperty('--transition-normal', theme.transitions.normal);
    root.style.setProperty('--transition-slow', theme.transitions.slow);
    root.style.setProperty('--radius', theme.shape.borderRadius);
    root.style.setProperty('--radius-sm', theme.shape.borderRadiusSm);
    root.style.setProperty('--radius-lg', theme.shape.borderRadiusLg);
    root.style.setProperty('--radius-full', theme.shape.borderRadiusFull);

    // Set a data attribute for Tailwind / CSS selectors
    root.setAttribute('data-theme', mode);
}

/** Detect initial theme: localStorage → system preference → 'light' */
function getInitialMode() {
    if (typeof window === 'undefined') return 'light';

    const stored = localStorage.getItem('theme-mode');
    if (stored === 'dark' || stored === 'light') return stored;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
    const [mode, setMode] = useState(getInitialMode);

    // Apply palette whenever mode changes
    useEffect(() => {
        applyPalette(mode);
        localStorage.setItem('theme-mode', mode);
    }, [mode]);

    const value = useMemo(
        () => ({
            mode,
            toggleTheme: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
            theme,
        }),
        [mode],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/** Hook to access theme context. */
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
    return ctx;
}
