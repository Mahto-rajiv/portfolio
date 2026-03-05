import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/**
 * Animated sun / moon toggle for light ↔ dark mode.
 */
const ThemeToggle = () => {
    const { mode, toggleTheme } = useTheme();
    const isDark = mode === 'dark';

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="relative p-2 rounded-full transition-colors"
            style={{
                background: 'var(--palette-action-hover)',
                color: 'var(--palette-text-primary)',
            }}
        >
            <motion.div
                key={mode}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
