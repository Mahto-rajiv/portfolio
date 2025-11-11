import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { highlightText } from '../utils/highlightText';

const ProjectCard = ({ project }) => {
  // No image column for compact layout

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="p-8">
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-700 mb-6 leading-7 sm:leading-relaxed text-left sm:text-justify">
            {highlightText(project.description, project.highlightTerms || [])}
          </p>

          <h4 className="font-bold text-gray-900 mb-3">TechStack Used</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-sm font-bold bg-black text-white">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a href={project.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
                <Github className="w-4 h-4" />
                Git
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
