import React from 'react'
import profilePic from './Assets/profileImage.jpg'

function Section1() {
  return (
    <div className= 'sectionCSS p-4 mt-[60px] md:mt-[82px] dark:border-dark-text bg-light-primary dark:bg-[#161D29] dark:text-dark-text'>
    <div className='h-[180px] w-[180px] rounded-[900px] border-[10px] border-white dark:border-gray-700 absolute top-8 md:top-[70px]'>
    <img src={profilePic} className='object-contain rounded-[900px]'/>
    </div>
     <h1 className='mt-[140px] md:mt-[125px] text-3xl font-extrabold'>Daksh Purohit</h1>
     <p className='text-center'>
     I'm a beginner full-stack web developer with experience in React for front-end development and Express for back-end programming. Im passionate about learning new technologies and improving my skills to build dynamic, responsive web applications.
     </p>
     <button className='customButton'>
      View Resume &rarr;
     </button>
    </div>
  )
}

export default Section1