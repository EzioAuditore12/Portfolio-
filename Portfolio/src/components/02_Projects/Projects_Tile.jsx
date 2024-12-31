import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects_Tile({
    projectTitle,
    projectImage,
    projectSummary,
    techStack,
    githubLink,
    liveLink
}) {
  return (
    <div className='w-full h-full p-4 lg:w-[80%] flex flex-col bg-white dark:bg-gray-800 
                    rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 
                    transition-all duration-300 overflow-hidden'>
       <div className="relative group">
         <img 
           src={projectImage} 
           alt={projectTitle} 
           className="w-full h-[310px] lg:h-[350px] object-center rounded-lg brightness-90 
                      group-hover:brightness-100 transition-all duration-300"
         />
         <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300">
           <a href={githubLink} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-black/80 rounded-full hover:bg-black text-white 
                         transform hover:scale-110 transition-all">
             <FaGithub size={20} />
           </a>
           <a href={liveLink} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-blue-500/80 rounded-full hover:bg-blue-500 
                         text-white transform hover:scale-110 transition-all">
             <FaExternalLinkAlt size={20} />
           </a>
         </div>
       </div>
       <div className="flex-1 p-4 text-center">
            <h2 className="text-2xl font-bold mb-3 text-gray-800 
                          dark:text-white hover:text-blue-500 
                          dark:hover:text-blue-400 transition-colors">
              {projectTitle}
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              {projectSummary}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
                {techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-1.5 text-sm bg-gradient-to-r 
                               from-blue-500 to-blue-600 text-white rounded-full 
                               shadow-sm hover:shadow-md transform hover:-translate-y-0.5 
                               transition-all duration-200"
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