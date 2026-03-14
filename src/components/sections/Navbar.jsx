import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { profile } from '../../data/profile';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''
                }`}
            style={{
                background: scrolled
                    ? 'var(--palette-nav-background)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
                borderBottom: scrolled
                    ? '1px solid var(--palette-nav-border)'
                    : '1px solid transparent',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#profile" className="flex items-center gap-2 font-bold text-xl">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                            style={{ background: 'var(--palette-primary-main)' }}
                        >
                            R
                        </div>
                        <span style={{ color: 'var(--palette-text-primary)' }}>Portfolio</span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {profile.navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="nav-link transition-colors relative group"
                                style={{
                                    color:
                                        activeSection === item.toLowerCase().replace(/\s+/g, '-')
                                            ? 'var(--palette-primary-main)'
                                            : 'var(--palette-text-secondary)',
                                    fontWeight: activeSection === item.toLowerCase().replace(/\s+/g, '-') ? 600 : 400,
                                }}
                            >
                                {item}
                                {/* Active underline */}
                                <span
                                    className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                                    style={{
                                        width: activeSection === item.toLowerCase().replace(/\s+/g, '-') ? '100%' : '0%',
                                        background: 'var(--palette-primary-main)',
                                    }}
                                />
                                {/* Hover underline — only visible when not active */}
                                {activeSection !== item.toLowerCase().replace(/\s+/g, '-') && (
                                    <span className="nav-hover-underline" />
                                )}
                            </a>
                        ))}

                        <ThemeToggle />
                    </div>

                    {/* Mobile controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            className="p-2 rounded-lg transition-colors"
                            style={{ color: 'var(--palette-text-primary)' }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isMenuOpen && (
                <div
                    className="md:hidden border-t"
                    style={{
                        background: 'var(--palette-card-background)',
                        borderColor: 'var(--palette-divider)',
                    }}
                >
                    <div className="px-4 py-4 space-y-3 flex flex-col items-center text-center">
                        {profile.navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block py-1 transition-colors"
                                style={{ color: 'var(--palette-text-secondary)' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
