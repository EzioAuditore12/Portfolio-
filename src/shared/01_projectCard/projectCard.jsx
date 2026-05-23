import React from 'react'

function ProjectCard({
  projectTitle,
  projectImage,
  projectSummary,
  websiteLink
}) {
return (
  <div className='w-[95%] grid h-full rounded-md overflow-hidden'>
      <div className='w-full aspect-[16/10] bg-gray-100 dark:bg-gray-900 rounded-md overflow-hidden'>
        <img
          className='h-full w-full object-contain object-center'
          src={projectImage}
          alt={projectTitle}
          loading='lazy'
        />
      </div>
      <h2 className='text-start'>{projectTitle}</h2>
      <p>{projectSummary}</p>
      <span className='text-blue-500 cursor-pointer'>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">View Website &rarr;</a>
      </span>
  </div>
)
}

export default ProjectCard