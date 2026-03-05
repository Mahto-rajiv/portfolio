import { motion } from 'framer-motion';

/**
 * Reusable section heading — replaces the repeated subtitle + title pattern.
 *
 * @param {string} subtitle - Small text above the title (e.g. "Get To Know More")
 * @param {string} title    - Main section heading (e.g. "About Me")
 */
const SectionHeader = ({ subtitle, title }) => (
    <div className="text-center mb-8 md:mb-12">
        {subtitle && (
            <motion.p
                className="mb-2"
                style={{ color: 'var(--palette-text-muted)' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {subtitle}
            </motion.p>
        )}
        <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: 'var(--palette-text-primary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {title}
        </motion.h2>
    </div>
);

export default SectionHeader;
