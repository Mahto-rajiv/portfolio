import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

const educationData = [
    {
        year: '2021 — 2024',
        institution: 'Gujarat University',
        degree: 'Bachelor of Computer Applications (BCA)',
        description: 'Studied core computer science fundamentals — data structures, algorithms, database management, networking, and software engineering principles.',
    },
    {
        year: '2019 — 2021',
        institution: 'Raja Ram Vidhya Vihar',
        degree: 'Higher Secondary School',
        description: 'Completed higher secondary education in Commerce. Developed a strong interest in programming and problem solving, which led me to pursue software engineering independently.',
    },
];

const Education = () => (
    <section
        id="education"
        className="py-16 section-padding"
        style={{ background: 'var(--palette-background-paper)' }}
    >
        <div className="max-w-3xl mx-auto">
            <SectionHeader subtitle="Learning Path" title="Education Journey" />

            {/* Timeline */}
            <div className="timeline-container">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.institution}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {/* Timeline Node */}
                        <div className="timeline-node">
                            <div className="timeline-dot" />
                            {index < educationData.length - 1 && <div className="timeline-line" />}
                        </div>

                        {/* Content */}
                        <div className="timeline-content">
                            <span
                                className="text-xs font-semibold tracking-wider uppercase"
                                style={{ color: 'var(--palette-accent-main)' }}
                            >
                                {edu.year}
                            </span>
                            <h4
                                className="text-lg font-bold mt-1"
                                style={{ color: 'var(--palette-text-primary)' }}
                            >
                                {edu.institution}
                            </h4>
                            <p
                                className="text-sm font-medium mt-0.5"
                                style={{ color: 'var(--palette-text-secondary)' }}
                            >
                                {edu.degree}
                            </p>
                            <p
                                className="text-xs mt-2 leading-relaxed"
                                style={{ color: 'var(--palette-text-muted)' }}
                            >
                                {edu.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
