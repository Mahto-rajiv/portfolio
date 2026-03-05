import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { experiences } from '../../data/experiences';
import SectionHeader from '../common/SectionHeader';

// Render inline **bold** while keeping existing Title: rest behavior
const renderBold = (txt) => {
    if (!txt) return null;
    const parts = txt.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={i} style={{ color: 'var(--palette-text-primary)' }} className="font-bold">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return <span key={i}>{part}</span>;
    });
};

const renderHighlight = (text) => {
    if (!text) return null;
    const idx = text.indexOf(':');
    if (idx > 0) {
        const title = text.slice(0, idx).trim();
        const rest = text.slice(idx + 1).trim();
        return (
            <span>
                <strong className="font-bold" style={{ color: 'var(--palette-text-primary)' }}>
                    {title}:
                </strong>{' '}
                {renderBold(rest)}
            </span>
        );
    }
    return <span>{renderBold(text)}</span>;
};

const Experience = () => (
    <section
        id="experience"
        className="py-16 section-padding"
        style={{ background: 'var(--palette-background-paper)' }}
    >
        <div className="max-w-7xl mx-auto">
            <SectionHeader title="Professional Experience" />

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5"
                        style={{
                            background: 'var(--palette-card-background)',
                            borderColor: 'var(--palette-card-border)',
                            boxShadow: 'var(--palette-card-shadow)',
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ boxShadow: 'var(--palette-card-hoverShadow)' }}
                    >
                        {/* Header */}
                        <div className="px-6 md:px-8 pt-6 pb-3">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                <h3
                                    className="text-base sm:text-lg font-semibold"
                                    style={{ color: 'var(--palette-text-primary)' }}
                                >
                                    {exp.company}
                                </h3>
                                <div className="mt-1 md:mt-0 text-left md:text-right">
                                    <p
                                        className="text-xs sm:text-sm font-bold"
                                        style={{ color: 'var(--palette-text-primary)' }}
                                    >
                                        {exp.role}
                                    </p>
                                    <div className="flex items-center justify-start md:justify-end gap-2">
                                        <FaCalendarAlt
                                            className="w-3 h-3 sm:w-4 sm:h-4"
                                            style={{ color: 'var(--palette-text-primary)' }}
                                        />
                                        <span
                                            className="text-xs sm:text-sm font-bold"
                                            style={{ color: 'var(--palette-text-primary)' }}
                                        >
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-4 border-b-2"
                                style={{ borderColor: 'var(--palette-text-primary)' }}
                            />
                        </div>

                        {/* Body */}
                        <div className="px-6 md:px-8 pb-6">
                            <ul
                                className="list-disc pl-6 space-y-3 text-xs md:text-sm"
                                style={{ color: 'var(--palette-text-secondary)' }}
                            >
                                {exp.highlights.map((h, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {renderHighlight(h)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
