import React from 'react'
import ProjectCard from '../../shared/01_projectCard/projectCard'
import project1Img from './Assets/projectImages/ByteBoulevardProject.png'
import project2Img from './Assets/projectImages/AnimeImage.png'
import project3Img from './Assets/projectImages/SpanHamDetection.png'
import '../../styles/sectionAnimations.css'

function Section2() {
  const Projects = [
    { 
      name: 'Ecommerce', 
      href: '#', 
      img: project1Img, 
      psummary: 'This is the frontend of a ecommerece store using various famous webtools like react'
    },
    {
      name: 'Spam Ham Detection',
      img: project3Img,
      psummary: "This is a project to find whether a message is spam or ham"
    },
    {
      name: 'Anime Website',
      img: project2Img,
      psummary: "It is a website that showcases use of bootstrap to build websites"
    },
  ];
  
  return (
    <div className='sectionCSS p-6 section-fade-in delay-0 '>
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