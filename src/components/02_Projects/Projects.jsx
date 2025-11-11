import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../actions/projectsSlice';
import Projects_Tile from './Projects_Tile';
import projectImage1 from './Assets/ByteBoulevardProject.png';
import projectImage2 from './Assets/SpanHamDetection.png';
// import projectImage3 from './Assets/AnimeImage.png';
// import projectImage4 from './Assets/INKALCHEMY.png';
import projectImage5 from "./Assets/minixos.png"
import projectImage6 from './Assets/Real-Estate.png'
import projectImage7 from './Assets/AnimeImage.png'

function Projects() {
  const [projects] = useState([
    {
      id: 0,
      projectTitle: "Rental PG Website",
      projectSummary: "A web-based platform for tenants to view and managers to manage property listings with interactive maps and secure authentication.",
      techStack: ["React", "Tanstack Router", "Typescript", "ShadCn", "MapBox API", "Spring Boot", "PostgreSQL"],
      projectImage: projectImage6,
      githubLink: "https://github.com/EzioAuditore12/Real-Estate-Project",
      liveLink: "",
    },
    {
      id: 1,
      projectTitle: "KnoziChat",
      projectSummary: "A real-time Android chat application supporting one-on-one and group chats, built with React Native (Expo), Typescript, and a Node.js backend.",
      techStack: ["React Native", "Expo", "Typescript", "React Query", "Zustand", "Hono.js", "Node.js", "PostgreSQL", "Socket.IO", "Redis", "BullMQ"],
      projectImage: projectImage7,
      githubLink: "https://github.com/EzioAuditore12/KnoziChat.git",
      liveLink: "",
    },
    {
      id: 2,
      projectTitle: "Ecommerce Project",
      projectSummary: "Frontend for Ecommerce Project including responsive/adaptive design as well as integrating React and TailwindCSS",
      techStack: ["React", "TailwindCSS", "Redux", "Router"],
      projectImage: projectImage1,
      githubLink: "https://github.com/EzioAuditore12/ByteBoulevard.git",
      liveLink: "https://byte-boulevard.vercel.app/",
    },
    {
      id: 3,
      projectTitle: "Span-Ham Detection",
      projectSummary: "A project to find whether the entered message is spam or ham",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      projectImage: projectImage2,
      githubLink: "https://github.com/EzioAuditore12/ECommerce-UsingMERN.git",
      liveLink: "https://spam-ham-detection-manas.onrender.com/",
    },
    {
      id: 4,
      projectTitle: "MinixOsCuda",
      projectSummary: "Cross-platform desktop application built with Tauri, React, Tailwind CSS, CUDA, and C for high-performance computing tasks.",
      techStack: ["Tauri", "React", "TailwindCSS", "CUDA", "C"],
      projectImage: projectImage5,
      githubLink: "https://github.com/EzioAuditore12/MinixOsCuda",
      liveLink: "",
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
