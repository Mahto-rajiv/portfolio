import { profile } from '../../data/profile';

const Footer = () => (
    <footer
        className="py-8 section-padding"
        style={{
            background: 'var(--palette-background-paper)',
            borderTop: '1px solid var(--palette-divider)',
        }}
    >
        <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center gap-8 mb-6">
                {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="transition-colors hover:opacity-80"
                        style={{ color: 'var(--palette-text-secondary)' }}
                    >
                        {item}
                    </a>
                ))}
            </div>
            <p style={{ color: 'var(--palette-text-muted)' }}>
                Copyright © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
