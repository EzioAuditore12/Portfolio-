import React from 'react'

function Projects_Tile({
    projectTitle,
    projectImage,
    projectSummary,
    techStack
}) {
  return (
    <div className='w-full max-w-2xl p-4 flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
       <img 
         src={projectImage} 
         alt={projectTitle} 
         className="w-full h-48 object-cover rounded-md"
       />
       <div className="w-full p-4 text-center">
            <h2 className="text-2xl font-bold mb-3">{projectTitle}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{projectSummary}</p>
            <div className="flex flex-wrap gap-2 justify-center">
                {techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
       </div>     
    </div>
  )
}

export default Projects_Tile