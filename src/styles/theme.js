/**
 * MUI-style theme configuration.
 *
 * Modeled after Material UI's createTheme() — a centralized config object
 * with palette, typography, shadows, shape, and transitions.
 * ThemeContext reads this and maps tokens → CSS custom properties on :root.
 */

export const theme = {
    palette: {
        light: {
            background: {
                default: '#f3f4f6',
                paper: '#ffffff',
                elevated: '#f8fafc',
            },
            text: {
                primary: '#111827',
                secondary: '#4b5563',
                muted: '#6b7280',
                inverse: '#ffffff',
            },
            primary: {
                main: '#3b82f6',
                dark: '#2563eb',
                light: '#93bbfd',
                contrastText: '#ffffff',
            },
            accent: {
                main: '#10b981',
            },
            divider: '#e5e7eb',
            action: {
                hover: '#f3f4f6',
                selected: '#e5e7eb',
            },
            card: {
                background: '#ffffff',
                border: '#e5e7eb',
                shadow: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',
                hoverShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            },
            nav: {
                background: 'rgba(255, 255, 255, 0.8)',
                border: 'rgba(229, 231, 235, 0.6)',
            },
            badge: {
                background: '#111827',
                text: '#ffffff',
            },
            glow: '0 0 60px 10px rgba(59, 130, 246, 0.12), 0 0 100px 40px rgba(59, 130, 246, 0.06)',
        },

        dark: {
            background: {
                default: '#0f172a',
                paper: '#1e293b',
                elevated: '#334155',
            },
            text: {
                primary: '#f1f5f9',
                secondary: '#cbd5e1',
                muted: '#94a3b8',
                inverse: '#0f172a',
            },
            primary: {
                main: '#60a5fa',
                dark: '#3b82f6',
                light: '#93bbfd',
                contrastText: '#0f172a',
            },
            accent: {
                main: '#34d399',
            },
            divider: '#334155',
            action: {
                hover: '#1e293b',
                selected: '#334155',
            },
            card: {
                background: '#1e293b',
                border: '#334155',
                shadow: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
                hoverShadow: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
            },
            nav: {
                background: 'rgba(15, 23, 42, 0.85)',
                border: 'rgba(51, 65, 85, 0.6)',
            },
            badge: {
                background: '#e2e8f0',
                text: '#0f172a',
            },
            glow: '0 0 60px 10px rgba(96, 165, 250, 0.15), 0 0 100px 40px rgba(96, 165, 250, 0.08)',
        },
    },

    typography: {
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },

    shape: {
        borderRadius: '1rem',
        borderRadiusSm: '0.75rem',
        borderRadiusLg: '1.5rem',
        borderRadiusFull: '9999px',
    },

    transitions: {
        fast: '150ms ease',
        normal: '250ms ease',
        slow: '350ms ease',
    },
};

/**
 * Flatten a nested palette object into CSS variable entries.
 * e.g. { background: { default: '#fff' } } → ['--palette-background-default', '#fff']
 */
export function flattenPalette(palette, prefix = '--palette') {
    const vars = {};
    for (const [key, value] of Object.entries(palette)) {
        if (typeof value === 'object' && value !== null) {
            const nested = flattenPalette(value, `${prefix}-${key}`);
            Object.assign(vars, nested);
        } else {
            vars[`${prefix}-${key}`] = value;
        }
    }
    return vars;
}
