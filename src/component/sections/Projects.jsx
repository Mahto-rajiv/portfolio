import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../cards/ProjectCard';

const Projects = () => (
  <section id="projects" className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
