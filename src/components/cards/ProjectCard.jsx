import { memo } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { highlightText } from '../../utils/highlightText';
import ImageGallery from './ImageGallery';

const ProjectCard = ({ project }) => {
    return (
        <article className="project-card">
            <div className="project-card-content">
                {/* Left Column — Gallery + Buttons */}
                <div className="project-gallery-section">
                    <ImageGallery
                        images={project.images}
                        title={project.title}
                        basePath={project.basePath || '/images/'}
                    />

                    <div className="project-buttons">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-project"
                                aria-label={`View ${project.title} frontend code on GitHub`}
                            >
                                <Github className="w-4 h-4" />
                                Git frontend
                            </a>
                        )}
                        {project.githubBackend && (
                            <a
                                href={project.githubBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-project"
                                aria-label={`View ${project.title} backend code on GitHub`}
                            >
                                <Github className="w-4 h-4" />
                                Git backend
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-project"
                                aria-label={`View ${project.title} live demo`}
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Column — Project Info */}
                <div className="project-info-section">
                    <h3
                        className="text-3xl font-bold mb-4"
                        style={{ color: 'var(--palette-text-primary)' }}
                    >
                        {project.title}
                    </h3>

                    <p
                        className="text-sm mb-6 leading-normal text-left"
                        style={{ color: 'var(--palette-text-secondary)' }}
                    >
                        {highlightText(project.description, project.highlightTerms || [])}
                    </p>

                    <h4
                        className="text-2xl font-bold mb-3"
                        style={{ color: 'var(--palette-text-primary)' }}
                    >
                        TechStack Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span key={tech} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default memo(ProjectCard);
