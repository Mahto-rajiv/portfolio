import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowDown } from 'lucide-react';
import { profile } from '../../data/profile';

const Hero = () => (
    <section id="profile" className="hero-section section-padding relative overflow-hidden">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left — Content */}
                <div className="text-center lg:text-left">
                    {/* Credibility line */}
                    <motion.p
                        className="text-xs font-medium tracking-wider uppercase mb-4 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1"
                        style={{ color: 'var(--palette-text-muted)' }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span>Software Engineer</span>
                        <span style={{ color: 'var(--palette-primary-main)' }}>•</span>
                        <span>Backend Systems</span>
                        <span style={{ color: 'var(--palette-primary-main)' }}>•</span>
                        <span>2+ Years Experience</span>
                    </motion.p>

                    {/* Headline — short, constrained */}
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5 leading-tight max-w-lg mx-auto lg:mx-0"
                        style={{ color: 'var(--palette-text-primary)' }}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        I build systems that solve real problems.
                    </motion.h1>

                    {/* Description — max 2 lines */}
                    <motion.p
                        className="text-sm sm:text-base mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
                        style={{ color: 'var(--palette-text-muted)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        Software engineer building APIs and automation systems using Python, Django/DRF, FastAPI, PostgreSQL, and React.
                    </motion.p>

                    {/* CTAs — clear hierarchy */}
                    <motion.div
                        className="flex flex-wrap justify-center lg:justify-start gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="#projects" className="btn-primary px-6 py-2.5">
                            <ArrowDown className="w-4 h-4" />
                            View Projects
                        </a>
                        <a
                            href={profile.social.github}
                            className="btn-secondary px-5 py-2.5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                        <a
                            href={profile.resumePath}
                            className="btn-secondary px-5 py-2.5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Resume
                        </a>
                    </motion.div>
                </div>

                {/* Right — Architecture Diagram */}
                <motion.div
                    className="arch-diagram"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -4 }}
                >
                    <div className="arch-diagram-header">
                        <span className="arch-diagram-title">System Architecture</span>
                    </div>

                    <div className="arch-diagram-body">
                        {/* Vertical flow layout */}
                        <div className="flex flex-col items-center gap-2">
                            {/* React */}
                            <motion.div
                                className="arch-node w-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <span className="arch-node-label">React</span>
                                <span className="arch-node-sub">Frontend</span>
                            </motion.div>

                            <motion.span className="arch-connector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>↓</motion.span>

                            {/* FastAPI / Django */}
                            <motion.div
                                className="arch-node w-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.65 }}
                            >
                                <span className="arch-node-label">FastAPI / Django REST API</span>
                                <span className="arch-node-sub">API Layer</span>
                            </motion.div>

                            <motion.span className="arch-connector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>↓</motion.span>

                            {/* PostgreSQL */}
                            <motion.div
                                className="arch-node w-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.85 }}
                            >
                                <span className="arch-node-label">PostgreSQL</span>
                                <span className="arch-node-sub">Database</span>
                            </motion.div>

                            <motion.span className="arch-connector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}>↓</motion.span>

                            {/* Background Jobs */}
                            <motion.div
                                className="arch-node w-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 1.05 }}
                            >
                                <span className="arch-node-label">Async Workers</span>
                                <span className="arch-node-sub">Background Jobs</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Hero;
