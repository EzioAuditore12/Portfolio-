import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../actions/projectsSlice';
import Projects_Tile from './Projects_Tile';
import projectImage1 from './Assets/ByteBoulevardProject.png';
import projectImage2 from './Assets/SpanHamDetection.png';
import projectImage3 from './Assets/AnimeImage.png';
import projectImage4 from './Assets/INKALCHEMY.png';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      projectTitle: "Ecommerce Project",
      projectSummary: "Frontend for Ecommerce Project including responsive/adaptive design as well as integrating React and TailwindCSS",
      techStack: ["React", "TailwindCSS", "Redux", "Router"],
      projectImage: projectImage1,
      githubLink: "https://github.com/EzioAuditore12/ECommerce-UsingMERN.git",
      liveLink: "http://13.232.83.157:8256/",
    },
    {
      id: 2,
      projectTitle: "Span-Ham Detection",
      projectSummary: "A project to find whether the entered message is spam or ham",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      projectImage: projectImage2,
      githubLink: "https://github.com/EzioAuditore12/ECommerce-UsingMERN.git",
      liveLink: "https://spam-ham-detection-manas.onrender.com/",
    },
    {
      id: 3,
      projectTitle: 'Anime Website',
      projectImage: projectImage3,
      projectSummary: "It is a website that showcases the use of bootstrap to build websites",
      liveLink: 'http://13.232.83.157:8257/',
      githubLink: 'https://github.com/EzioAuditore12/VisualAnime.git',
      techStack: ["BOOTSTRAP", "HTML", "CSS"]
    },
    {
      id: 4,
      name: 'Ink Alchemy',
      projectImage: projectImage4,
      projectSummary: 'A website to use various AWS functionalities such as translate, sentimental analysis, and image to text',
      liveLink: 'http://13.232.83.157:5173/',
      githubLink: 'https://github.com/EzioAuditore12/InkAlchemy.git',
      techStack: ["React", "Router", "TailwindCSS"]
    }
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
    (project.projectTitle?.toLowerCase().includes(searchQuery.toLowerCase()) || '') ||
    (project.projectSummary?.toLowerCase().includes(searchQuery.toLowerCase()) || '') ||
    (project.techStack?.some(tech => tech?.toLowerCase().includes(searchQuery.toLowerCase())) || false)
  );

  return (
    <section className='w-[100vw] min-h-screen flex justify-center p-6 transition-all duration-500 animate-slideInFromRight mb-[55px] md:mb-2'>
      <div className="w-full max-w-7xl flex flex-col items-center">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full md:w-[60%] p-4 mb-8 border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg placeholder-gray-400 outline-none"
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
