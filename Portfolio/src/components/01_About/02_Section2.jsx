import React from 'react'
import ProjectCard from '../../shared/01_projectCard/projectCard'
import project1Img from './Assets/projectImages/projectEcommerce.png'
function Section2() {
  const Projects = [
    { 
      name: 'Ecommerce', 
      href: '#', 
      img: project1Img, 
      psummary: 'This is a project which is built to made a ecoommerce webstore functionality'
    },
    {
      name: 'Daksh',
      img:project1Img,
      psummary:"Hi my name is Daksh"
    }
  ];
  
  return (
    <div className='sectionCSS p-6 dark:border-dark-text bg-light-primary dark:bg-[#161D29] text-light-text dark:text-dark-text'>
        <h1 className='text-3xl font-extrabold'>Featured Projects</h1>
        <p className='mb-4'>
          Here are some of my projects that I have worked on. Click on the project to view more details.
        </p>
        <div className='grid place-items-center gap-y-4'>
        {Projects.map((item, index) => {
          return(
            <ProjectCard 
              key={index}
              projectTitle={item.name} 
              projectImage={item.img}
              projectSummary={item.psummary}
            />
          )
        })}
        </div>
    <button className='customButton'>
      More Projects &rarr;
    </button>
    </div>
  )
}

export default Section2