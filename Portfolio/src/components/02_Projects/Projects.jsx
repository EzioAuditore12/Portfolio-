import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../Actions/projectsSlice';
import Projects_Tile from './Projects_Tile';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      projectTitle: "Portfolio Website",
      projectSummary: "Personal portfolio built with React and TailwindCSS",
      techStack: ["React", "TailwindCSS", "Redux"],
      projectImage: "/path-to-image",
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com"
    },
    {
      id: 2,
      projectTitle: "E-commerce Platform",
      projectSummary: "Full-stack e-commerce solution with payment integration",
      techStack: ["Next.js", "MongoDB", "Stripe"],
      projectImage: "/path-to-image",
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://yourecommerce.com"
    },
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.projects);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    dispatch(setSearchQuery(query));
  }, [searchParams, dispatch]);

  const handleSearch = (e) => {
    const query = e.target.value;
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };

  const filteredProjects = projects.filter(project =>
    project.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.projectSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className='w-[100vw] min-h-screen flex justify-center p-6 transition-all duration-500 animate-slideInFromRight mb-[55px] md:mb-2'>
      <div className="w-full max-w-7xl flex flex-col items-center">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full md:w-[60%] p-4 mb-8 border rounded-lg shadow-sm 
                   dark:bg-gray-800 dark:border-gray-700 focus:ring-2 
                   focus:ring-blue-500 focus:border-transparent transition-all
                   text-lg placeholder-gray-400 outline-none"
        />
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
          {filteredProjects.map(project => (
            <Projects_Tile
              key={project.id}
              projectTitle={project.projectTitle}
              projectImage={project.projectImage}
              projectSummary={project.projectSummary}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;