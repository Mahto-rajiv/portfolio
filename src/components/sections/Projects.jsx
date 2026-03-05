import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from '../cards/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => (
    <section id="projects" className="py-16 section-padding">
        <div className="max-w-7xl mx-auto">
            <SectionHeader subtitle="Browse My Recent" title="Projects" />

            <div className="space-y-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
