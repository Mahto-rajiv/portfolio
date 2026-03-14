import { memo } from 'react';
import { Github, ExternalLink, Box, Server, CheckCircle2 } from 'lucide-react';
import ImageGallery from './ImageGallery';

const ProjectCard = ({ project }) => {
    return (
        <article className="project-card flex flex-col rounded-2xl overflow-hidden transition-all duration-300">
            {/* 1. Project Screenshot */}
            <div className="project-gallery-wrapper relative overflow-hidden">
                <ImageGallery
                    images={project.images}
                    title={project.title}
                    basePath={project.basePath || '/images/'}
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-6 sm:p-8">
                {/* 2. Title */}
                <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: 'var(--palette-text-primary)' }}
                >
                    {project.title}
                </h3>

                {/* 3. Summary */}
                {project.summary && (
                    <p
                        className="text-sm leading-relaxed mb-6"
                        style={{ color: 'var(--palette-text-secondary)' }}
                    >
                        {project.summary}
                    </p>
                )}

                {/* 4. Key Features */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Box className="w-4 h-4" style={{ color: 'var(--palette-primary-main)' }} />
                            <span
                                className="text-xs font-bold uppercase tracking-wider"
                                style={{ color: 'var(--palette-primary-main)' }}
                            >
                                Key Features
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="text-sm leading-relaxed flex items-start gap-2.5"
                                    style={{ color: 'var(--palette-text-secondary)' }}
                                >
                                    <CheckCircle2
                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                        style={{ color: 'var(--palette-accent-main)', opacity: 0.8 }}
                                    />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* 5. Architecture Flow */}
                {project.architectureFlow && (
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Server className="w-4 h-4" style={{ color: 'var(--palette-text-muted)' }} />
                            <span
                                className="text-xs font-bold uppercase tracking-wider"
                                style={{ color: 'var(--palette-text-muted)' }}
                            >
                                Architecture
                            </span>
                        </div>
                        <div
                            className="p-3 rounded-xl text-sm font-medium font-mono text-center overflow-x-auto whitespace-nowrap"
                            style={{
                                background: 'var(--palette-background-elevated)',
                                color: 'var(--palette-primary-main)',
                                border: '1px solid var(--palette-card-border)'
                            }}
                        >
                            {project.architectureFlow}
                        </div>
                    </div>
                )}

                <div className="flex-grow" />

                {/* 6. Stack Tags */}
                {project.tech && project.tech.length > 0 && (
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="stack-tag text-xs font-medium px-2.5 py-1 rounded-md transition-colors duration-200"
                                    style={{
                                        background: 'var(--palette-background-elevated)',
                                        color: 'var(--palette-text-muted)',
                                        border: '1px solid var(--palette-card-border)'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* 7. Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'var(--palette-card-border)' }}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary px-4 py-2"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    )}
                    {project.githubBackend && (
                        <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary px-4 py-2"
                        >
                            <Github className="w-4 h-4" />
                            Backend
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-4 py-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default memo(ProjectCard);
