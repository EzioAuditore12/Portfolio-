import React, { useEffect, useState } from 'react'
import profilePic from './Assets/profileImage.jpg'
import {Link} from 'react-router-dom'


function Section1() {
  const [show, setShow] = useState({
    image: false,
    name: false,
    description: false,
    button: false
  });

  useEffect(() => {
    // Stagger the animations
    setTimeout(() => setShow(prev => ({...prev, image: true})), 100);
    setTimeout(() => setShow(prev => ({...prev, name: true})), 600);
    setTimeout(() => setShow(prev => ({...prev, description: true})), 1100);
    setTimeout(() => setShow(prev => ({...prev, button: true})), 1600);
  }, []);

  return (
    <div className='sectionCSS p-4 mt-[60px] md:mt-[82px] bg-gray-50'>
      <div className={`h-[180px] w-[180px] rounded-[900px] border-[10px] border-white dark:border-gray-700 absolute top-8 md:top-[70px] z-30 hover:scale-105 hover:rotate-6 transition-all duration-500 ${show.image ? 'fade-in' : 'invisible'}`}>
        <img src={profilePic} className='object-contain rounded-[900px]'/>
      </div>
      <h1 className={`mt-[80px] md:mt-[100px] text-3xl font-extrabold ${show.name ? 'slide-down' : 'invisible'}`}>
        Daksh Purohit
      </h1>
      <p className={`text-center ${show.description ? 'slide-up' : 'invisible'}`}>
        I'm a beginner full-stack web developer with experience in React for front-end development and Express for back-end programming. Im passionate about learning new technologies and improving my skills to build dynamic, responsive web applications.
      </p>
      <Link to="/resume">
        <button className={`customButton group hover:scale-105 transition-all duration-300 ${show.button ? 'fade-in' : 'invisible'}`}>
          View Resume 
          <span className="inline-block transition-transform group-hover:translate-x-1 duration-200">
            →
          </span>
        </button>
      </Link>
    </div>
  )
}

export default Section1