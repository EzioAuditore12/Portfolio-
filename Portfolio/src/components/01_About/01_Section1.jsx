import React from 'react'
import profilePic from './Assets/profileImage.jpg'

function Section1() {
  return (
    <div className= ' w-[85vw] p-4 flex flex-col gap-4 items-center border-b-2 md:mt-[60px] rounded-md dark:border-dark-text bg-light-primary dark:bg-[#161D29] text-light-text dark:text-dark-text'>
    <div className='h-[180px] w-[180px] rounded-[900px] border-[10px] border-white dark:border-gray-700 absolute top-8 md:top-[70px]'>
    <img src={profilePic} className='object-contain rounded-[900px]'/>
    </div>
     <h1 className='mt-[140px] md:mt-[125px] text-2xl font-medium'>Daksh Purohit</h1>
     <p className='text-center'>
     I'm a beginner full-stack web developer with experience in React for front-end development and Express for back-end programming. I’m passionate about learning new technologies and improving my skills to build dynamic, responsive web applications.
     </p>
     <button className='bg-gray-600 text-white text-2xl min-w-[200px] min-h-[45px] rounded-lg'>
      View Resume &rarr;
     </button>
    </div>
  )
}

export default Section1