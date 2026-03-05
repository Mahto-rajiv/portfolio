import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks which section is currently in view.
 * @param {string[]} sectionIds - Array of section element IDs to observe.
 * @param {number} offset - Scroll offset in px (default 100).
 * @returns {string} The ID of the currently active section.
 */
export function useScrollSpy(sectionIds, offset = 100) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // run on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
}
