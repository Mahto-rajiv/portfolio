import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';

const Hero = () => (
    <section id="profile" className="pt-28 pb-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
            <motion.p
                className="mb-2"
                style={{ color: 'var(--palette-text-muted)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Hello, I'm
            </motion.p>

            <motion.h1
                className="inline-block text-5xl md:text-6xl font-bold mb-4 leading-[1.2] pb-2"
                style={{
                    backgroundImage: 'linear-gradient(to right, var(--palette-text-primary), var(--palette-text-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                {profile.name}
            </motion.h1>

            <motion.p
                className="text-2xl mb-8"
                style={{ color: 'var(--palette-text-secondary)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {profile.title}
            </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
            >
                <a
                    href={profile.resumePath}
                    className="btn-outline px-6 py-3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Resume
                </a>
                <a
                    href={profile.resumePath}
                    download
                    className="btn-link px-6 py-3"
                >
                    Download Resume
                </a>
            </motion.div>

            <motion.div
                className="flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-2 hover:scale-110 transition-transform"
                    style={{ color: 'var(--palette-text-primary)' }}
                >
                    <Linkedin className="w-6 h-6" />
                </a>
                <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="p-2 hover:scale-110 transition-transform"
                    style={{ color: 'var(--palette-text-primary)' }}
                >
                    <Github className="w-6 h-6" />
                </a>
            </motion.div>
        </div>
    </section>
);

export default Hero;
