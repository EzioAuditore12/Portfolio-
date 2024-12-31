import React, { useState, useEffect } from 'react';
import ProjectCard from '../../shared/01_projectCard/projectCard';
import project1Img from './Assets/projectImages/ByteBoulevardProject.png';
import project2Img from './Assets/projectImages/AnimeImage.png';
import project3Img from './Assets/projectImages/SpanHamDetection.png';
import project4Img from './Assets/projectImages/INKALCHEMY.png';
import '../../styles/sectionAnimations.css';
import { Link } from 'react-router-dom';

function Section2() {
  const Projects = [
    { 
      name: 'Ecommerce', 
      href: '#', 
      img: project1Img, 
      psummary: 'This is the frontend of an ecommerce store using various famous web tools like React',
      websiteLink: 'http://13.232.83.157:8256/'
    },
    {
      name: 'Spam Ham Detection',
      img: project3Img,
      psummary: "This is a project to find whether a message is spam or ham",
      websiteLink: 'https://spam-ham-detection-manas.onrender.com/'
    },
    {
      name: 'Anime Website',
      img: project2Img,
      psummary: "It is a website that showcases the use of Bootstrap to build websites",
      websiteLink: 'http://13.232.83.157:8257/'
    },
    {
      name: 'Ink Alchemy',
      img: project4Img,
      psummary: 'A website to use various AWS functionalities such as translate, sentiment analysis, and image to text',
      websiteLink: 'http://13.232.83.157:5173/'
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
