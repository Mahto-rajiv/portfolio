import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const educationData = [
    {
        emoji: '🎓',
        school: 'Gujarat University',
        degree: 'Bachelor of Computer Applications (BCA)',
        years: '2021 - 2024',
        gradient: 'linear-gradient(135deg, var(--palette-primary-light), var(--palette-background-paper))',
    },
    {
        emoji: '🏫',
        school: 'Raja Ram Vidhya Vihar',
        degree: 'Higher Secondary School',
        years: '2019 - 2021',
        gradient: 'linear-gradient(135deg, var(--palette-accent-main), var(--palette-background-paper))',
    },
];

const Education = () => (
    <section
        id="education"
        className="py-12 md:py-16 section-padding"
        style={{ background: 'var(--palette-background-paper)' }}
    >
        <div className="max-w-4xl mx-auto">
            <SectionHeader
                title={
                    <span className="flex items-center justify-center gap-2 md:gap-3">
                        Education Journey <GraduationCap className="w-7 h-7 md:w-10 md:h-10" />
                    </span>
                }
            />

            <div className="space-y-6 md:space-y-8">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.school}
                        className="rounded-2xl p-5 md:p-8"
                        style={{
                            background: edu.gradient,
                            boxShadow: 'var(--palette-card-shadow)',
                        }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <div className="flex items-start gap-3 md:gap-4">
                            <div className="text-2xl md:text-4xl">{edu.emoji}</div>
                            <div>
                                <h3
                                    className="text-lg md:text-2xl font-bold mb-2"
                                    style={{ color: 'var(--palette-text-primary)' }}
                                >
                                    {edu.school}
                                </h3>
                                <p
                                    className="text-base md:text-lg mb-2"
                                    style={{ color: 'var(--palette-text-secondary)' }}
                                >
                                    {edu.degree}
                                </p>
                                <p style={{ color: 'var(--palette-text-muted)' }}>{edu.years}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
