import React from 'react';
import ProjectLaunchCard from './ProjectLaunchCard';

function ProjectsShowcase({ projects }) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Upcoming Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectLaunchCard
            key={project.id}
            title={project.title}
            launchDate={project.launchDate}
            status={project.status}
            description={project.description}
            signupLink={project.signupLink}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsShowcase;
