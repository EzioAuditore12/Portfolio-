import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../../shared/01_projectCard/projectCard'
import project1Img from './Assets/projectImages/projectEcommerce.png'
import '../../styles/sectionAnimations.css'
import { setAnimationsPlayed } from '../../Actions/animationSlice';

function Section2() {
  const dispatch = useDispatch();
  const hasPlayed = useSelector((state) => state.animation.hasPlayed);
  
  useEffect(() => {
    if (!hasPlayed) {
      dispatch(setAnimationsPlayed());
    }
  }, [hasPlayed, dispatch]);

  const Projects = [
    { 
      name: 'Ecommerce', 
      href: '#', 
      img: project1Img, 
      psummary: 'This is a project which is built to made a ecoommerce webstore functionality'
    },
    {
      name: 'Daksh',
      img: project1Img,
      psummary: "Hi my name is Daksh"
    },
    {
      name: 'Manas',
      img: project1Img,
      psummary: "Hi my name is Manas"
    },
  ];
  
  return (
    <div className={`sectionCSS p-6 ${!hasPlayed ? 'section-fade-in delay-0' : ''}`}>
      <h1 className='text-3xl font-extrabold'>Featured Projects</h1>
      <p className='mb-4'>
        Here are some of my projects that I have worked on. Click on the project to view more details.
      </p>
      <div className='grid place-items-center gap-y-4 md:grid-cols-2'>
        {Projects.map((item, index) => (
          <ProjectCard 
            key={index}
            projectTitle={item.name} 
            projectImage={item.img}
            projectSummary={item.psummary}
          />
        ))}
      </div>
      <button className='customButton'>
        More Projects &rarr;
      </button>
    </div>
  )
}

export default Section2