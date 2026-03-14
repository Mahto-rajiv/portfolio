import { motion } from 'framer-motion';

/**
 * Reusable card for a group of skills.
 *
 * @param {string}  title  - Category name (e.g. "Backend Development")
 * @param {Array}   skills - Array of { name, icon } objects
 * @param {number}  index  - Position index used for stagger delay
 */
const SkillCategory = ({ title, skills, index = 0 }) => (
    <motion.div
        className="skill-card-glow rounded-2xl p-6"
        style={{
            background: 'var(--palette-card-background)',
            boxShadow: 'var(--palette-card-shadow)',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
    >
        <h3
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: 'var(--palette-text-primary)' }}
        >
            {title}
        </h3>

        <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="skill-item flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                    style={{ background: 'var(--palette-background-elevated)' }}
                >
                    <skill.icon
                        size={22}
                        className="skill-icon transition-all duration-200"
                        style={{ color: 'var(--palette-text-secondary)' }}
                    />
                    <span
                        className="font-medium text-sm"
                        style={{ color: 'var(--palette-text-primary)' }}
                    >
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    </motion.div>
);

export default SkillCategory;
