import { useState, useEffect } from 'react';
import ProjectCard from '../../shared/01_projectCard/projectCard';
import project1Img from './Assets/projectImages/KnoziChat.png';
import project2Img from './Assets/projectImages/RagSphere.png';
import project3Img from './Assets/projectImages/Real-Estate.png';
import project4Img from '../02_Projects/Assets/minixos.png';
import '../../styles/sectionAnimations.css';
import { Link } from 'react-router-dom';

function Section2() {
  const Projects = [
    {
      name: 'KnoziChat',
      img: project1Img,
      psummary: 'A real-time Android chat app with offline-first messaging and AI-enabled group chats.',
      websiteLink: 'https://expo.dev/artifacts/eas/jD1GYnAXZ8PgSLRyHE3TST.apk'
    },
    {
      name: 'RagSphere',
      img: project2Img,
      psummary: 'A multi-modal RAG platform with PDF upload, semantic retrieval, and live AI response streaming.',
      websiteLink: 'https://multi-modal-rag-gamma.vercel.app/'
    },
    {
      name: 'Rental PG Website',
      img: project3Img,
      psummary: 'Property management platform with listing management, map integration, and secure authentication.',
      websiteLink: 'https://github.com/EzioAuditore12/Real-Estate-Project'
    },
    {
      name: 'MinixOsCuda',
      img: project4Img,
      psummary: 'Cross-platform desktop app built with Tauri, React, Tailwind CSS, CUDA, and C.',
      websiteLink: 'https://github.com/EzioAuditore12/MinixOsCuda'
    }
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get products based on screen size
  const displayedProducts = isMobile ? Projects.slice(0, 3) : Projects;

  return (
    <div className='sectionCSS p-6 section-fade-in delay-0'>
      <h1 className='text-3xl font-extrabold'>Featured Projects</h1>
      <p className='mb-4'>
        Here are some of my projects that I have worked on. Click on the project to view more details.
      </p>
      <div className='grid place-items-center gap-y-4 md:grid-cols-2'>
        {displayedProducts.map((item, index) => (
          <ProjectCard 
            key={index}
            projectTitle={item.name} 
            projectImage={item.img}
            projectSummary={item.psummary}
            websiteLink={item.websiteLink}
          />
        ))}
      </div>
      <Link to='/projects'>
        <button className='customButton'>
          More Projects &rarr;
        </button>
      </Link>
    </div>
  );
}

export default Section2;
