/**
 * MUI-style theme configuration.
 *
 * Modeled after Material UI's createTheme() — a centralized config object
 * with palette, typography, shadows, shape, and transitions.
 * ThemeContext reads this and maps tokens → CSS custom properties on :root.
 *
 * Palette: Violet + Cyan — bold, premium, distinctive.
 */

export const theme = {
    palette: {
        light: {
            background: {
                default: '#f5f3ff',
                paper: '#ffffff',
                elevated: '#f0edff',
            },
            text: {
                primary: '#1e1b4b',
                secondary: '#4c4578',
                muted: '#7c7499',
                inverse: '#ffffff',
            },
            primary: {
                main: '#7c3aed',
                dark: '#6d28d9',
                light: '#c4b5fd',
                contrastText: '#ffffff',
            },
            accent: {
                main: '#06b6d4',
                light: '#a5f3fc',
            },
            divider: '#e5e1f5',
            action: {
                hover: '#f0edff',
                selected: '#e5e1f5',
            },
            card: {
                background: '#ffffff',
                border: '#e5e1f5',
                shadow: '0 4px 6px -1px rgb(124 58 237 / 0.06), 0 2px 4px -2px rgb(124 58 237 / 0.06)',
                hoverShadow: '0 20px 25px -5px rgb(124 58 237 / 0.12), 0 8px 10px -6px rgb(124 58 237 / 0.08)',
            },
            nav: {
                background: 'rgba(255, 255, 255, 0.85)',
                border: 'rgba(229, 225, 245, 0.6)',
            },
            badge: {
                background: '#1e1b4b',
                text: '#ffffff',
            },
            glow: '0 0 60px 10px rgba(124, 58, 237, 0.12), 0 0 100px 40px rgba(6, 182, 212, 0.06)',
        },

        dark: {
            background: {
                default: '#0c0a1d',
                paper: '#161330',
                elevated: '#221e42',
            },
            text: {
                primary: '#f1f0ff',
                secondary: '#e2e0fb',
                muted: '#a9a4d1',
                inverse: '#0c0a1d',
            },
            primary: {
                main: '#a78bfa',
                dark: '#7c3aed',
                light: '#c4b5fd',
                contrastText: '#0c0a1d',
            },
            accent: {
                main: '#22d3ee',
                light: '#67e8f9',
            },
            divider: '#2e2952',
            action: {
                hover: '#1c1838',
                selected: '#2e2952',
            },
            card: {
                background: '#161330',
                border: '#2e2952',
                shadow: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
                hoverShadow: '0 20px 25px -5px rgb(167 139 250 / 0.15), 0 8px 10px -6px rgb(34 211 238 / 0.1)',
            },
            nav: {
                background: 'rgba(12, 10, 29, 0.88)',
                border: 'rgba(46, 41, 82, 0.6)',
            },
            badge: {
                background: '#e2e0ff',
                text: '#0c0a1d',
            },
            glow: '0 0 60px 10px rgba(167, 139, 250, 0.18), 0 0 100px 40px rgba(34, 211, 238, 0.08)',
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
