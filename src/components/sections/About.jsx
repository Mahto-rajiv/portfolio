import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { profile } from '../../data/profile';

const About = () => (
    <section
        id="about"
        className="py-16 section-padding"
        style={{ background: 'var(--palette-background-paper)' }}
    >
        <div className="max-w-4xl mx-auto">
            <SectionHeader subtitle="Get To Know More" title="About Me" />

            <motion.p
                className="leading-7 sm:leading-relaxed text-justify"
                style={{ color: 'var(--palette-text-secondary)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {profile.about}
            </motion.p>
        </div>
    </section>
);

export default About;
