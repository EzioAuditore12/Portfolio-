import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../actions/projectsSlice';
import Projects_Tile from './Projects_Tile';
// import projectImage3 from './Assets/AnimeImage.png';
// import projectImage4 from './Assets/INKALCHEMY.png';
import projectImage5 from './Assets/minixos.png'
import projectImage6 from './Assets/Real-Estate.png'
import project0 from '../01_About/Assets/projectImages/KnoziChat.png'
import project1 from '../01_About/Assets/projectImages/RagSphere.png'

function Projects() {
  const [projects] = useState([
  {
    id: 0,
    projectTitle: "KnoziChat",
    projectSummary:
      "A real-time Android chat application featuring offline-first messaging, AI-enabled group chats, and scalable one-to-one and group communication.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "NestJS",
      "Socket.IO",
      "FastAPI",
      "LangChain",
      "PostgreSQL",
      "MongoDB",
      "Redis"
    ],
    projectImage: project0,
    githubLink: "https://github.com/EzioAuditore12/KnoziChat",
    liveLink: "https://expo.dev/artifacts/eas/jD1GYnAXZ8PgSLRyHE3TST.apk",
  },

  {
    id: 1,
    projectTitle: "RagSphere",
    projectSummary:
      "A multi-modal RAG platform allowing users to upload PDFs and interact through a context-aware AI chatbot with semantic retrieval and live response streaming.",
    techStack: [
      "Next.js",
      "Express.js",
      "LangChain",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "SSE",
      "Unstructured"
    ],
    projectImage: project1,
    githubLink: "https://github.com/EzioAuditore12/Multi-Modal-RAG",
    liveLink: "https://multi-modal-rag-gamma.vercel.app/",
  },

  {
    id: 2,
    projectTitle: "Rental PG Website",
    projectSummary:
      "A web-based property management platform enabling tenants to explore and managers to manage listings with interactive maps and secure authentication.",
    techStack: [
      "React",
      "Spring Boot",
      "GraphQL",
      "JWT",
      "PostgreSQL",
      "PostGIS",
      "Mapbox API"
    ],
    projectImage: projectImage6,
    githubLink: "https://github.com/EzioAuditore12/Real-Estate-Project",
    liveLink: "",
  },

  {
    id: 3,
    projectTitle: "MinixOsCuda",
    projectSummary:
      "Cross-platform desktop application built with Tauri, React, Tailwind CSS, CUDA, and C for high-performance computing tasks.",
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
