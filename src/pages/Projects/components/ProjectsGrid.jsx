import React from 'react';

import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
