import React from 'react'

function ProjectCard({
    projectTitle,
    projectImage,
    projectSummary
}) {
  return (
    <div className='w-[95%] grid h-full rounded-md overflow-hidden'>
        <img className='object-center h-[260px] w-full sm:h-[330px] md:h-[250px] lg:h-[300px] xl:h-[450px]' src={projectImage}/>
        <h2 className='text-start'>{projectTitle}</h2>
        <p>{projectSummary}</p>
        <span className='text-blue-500 cursor-pointer'>View more &rarr;</span>
    </div>
  )
}

export default ProjectCard