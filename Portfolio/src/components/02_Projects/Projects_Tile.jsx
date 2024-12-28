import React from 'react'

function Projects_Tile({
    projectTitle,
    projectImage,
    projectSummary,
    techStack
}) {
  return (
    <div className='sectionCss'>
       <img src={projectImage} alt={projectTitle} className="w-full h-48 object-cover rounded-md"/>
       <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{projectTitle}</h2>
            <p className="mb-4">{projectSummary}</p>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-sm bg-blue-500 text-white rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
       </div>     
    </div>
  )
}

export default Projects_Tile