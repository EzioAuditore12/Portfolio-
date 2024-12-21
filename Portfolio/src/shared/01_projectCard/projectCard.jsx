import React from 'react'

function ProjectCard({
    projectTitle,
    projectImage,
    projectSummary
}) {
  return (
    <div className='w-[95%] grid h-full rounded-md overflow-hidden'>
        <img className='object-cover h-[300px] w-full' src={projectImage}/>
        <h2 className='text-start'>{projectTitle}</h2>
        <p>{projectSummary}</p>
        <span className='text-blue-500 cursor-pointer'>View more &rarr;</span>
    </div>
  )
}

export default ProjectCard