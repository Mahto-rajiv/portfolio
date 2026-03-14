import { motion } from 'framer-motion';
import { Target, Server, Wrench, Layers } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const principles = [
    {
        title: 'Problem First',
        description: 'Focus on solving real operational problems rather than building unnecessary features.',
        icon: Target,
        color: 'var(--palette-primary-main)'
    },
    {
        title: 'Backend Reliability',
        description: 'Prioritize data integrity, transaction safety, and scalable database design.',
        icon: Server,
        color: 'var(--palette-accent-main)'
    },
    {
        title: 'Automation Mindset',
        description: 'Repetitive processes should always be automated.',
        icon: Wrench,
        color: 'var(--palette-success)'
    },
    {
        title: 'Simple Architecture',
        description: 'Prefer maintainable systems over over-engineered solutions.',
        icon: Layers,
        color: 'var(--palette-warning)'
    }
];

const EngineeringApproach = () => {
    return (
        <section id="approach" className="py-16 section-padding">
            <div className="max-w-6xl mx-auto">
                <SectionHeader subtitle="Core Principles" title="Engineering Approach" />

                <div className="grid md:grid-cols-2 gap-6">
                    {principles.map((env, i) => {
                        const Icon = env.icon;
                        return (
                            <motion.div
                                key={env.title}
                                className="p-6 md:p-8 rounded-2xl border transition-all duration-300 group"
                                style={{
                                    background: 'var(--palette-card-background)',
                                    borderColor: 'var(--palette-card-border)'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{
                                    borderColor: env.color || 'var(--palette-primary-main)',
                                    transform: 'translateY(-4px)'
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 transition-colors duration-300"
                                        style={{
                                            background: 'var(--palette-background-elevated)',
                                            borderColor: 'var(--palette-card-border)',
                                            color: env.color || 'var(--palette-text-primary)'
                                        }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg font-bold mb-2 transition-colors duration-300"
                                            style={{ color: 'var(--palette-text-primary)' }}
                                        >
                                            {env.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: 'var(--palette-text-secondary)' }}
                                        >
                                            {env.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EngineeringApproach;
