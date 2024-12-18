import React from 'react'
import profilePic from './Assets/profileImage.jpg'
function About() {
  return (
    <div className= 'h-[600px] w-[80vw] flex flex-col items-center border-b-2 md:mt-[60px] border-light-text dark:border-dark-text bg-light-primary dark:bg-[#161D29] text-light-text dark:text-dark-text'>
    <div className='h-[180px] w-[180px] rounded-[900px] border-[10px] border-white dark:border-gray-700 absolute top-8 md:top-[70px]'>
    <img src={profilePic} className='object-contain rounded-[900px]'/>
    </div>
     
    </div>
  )
}

export default About