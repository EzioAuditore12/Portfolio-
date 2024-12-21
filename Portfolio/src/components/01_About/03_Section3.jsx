import React from 'react'
import reactIcon from './Assets/skillImages/React.svg'
import nodeIcon from './Assets/skillImages/nodejs.svg'
import mongoIcon from './Assets/skillImages/mongodb.svg'
import javaScriptIcon from './Assets/skillImages/javascript.svg'
import tailwindIcon from './Assets/skillImages/tailwind.svg'
import bootstrapIcon from './Assets/skillImages/bootstrap5.svg'
import css from './Assets/skillImages/css.svg'
import html from './Assets/skillImages/htnl5.svg'
const skills = [
    {
        skillName: 'React',
        skillIcon: reactIcon
    },
    {
        skillName: 'Node.js',
        skillIcon: nodeIcon
    },
    {
        skillName: 'MongoDB',
        skillIcon: mongoIcon
    },
    {
        skillName: 'JavaScript',
        skillIcon: javaScriptIcon
    },
    {
        skillName: 'Tailwind CSS',
        skillIcon: tailwindIcon
    },
    {
        skillName: 'Bootstrap',
        skillIcon: bootstrapIcon
    },
    {
        skillName: 'CSS',
        skillIcon: css
    },
    {
        skillName: 'HTML',
        skillIcon: html
    }
]

function Section3() {
  return (
    <div className='sectionCSS p-6'>
     <h1 className='text-3xl font-extrabold'>Skills</h1>
        <p>
        Here are some of the skills that I have acquired over the years. I am always looking to learn new technologies and improve my skills.
        </p>
        <div className='mt-6 grid gap-x-6 grid-cols-3 md:grid-cols-4 gap-y-12 '>
        {skills.map((item, index) => {
          return(
            <div key={index} >
              <img src={item.skillIcon} className='h-[70px] w-[70px]'/>
            </div> 
          )
        })}
    </div>
    </div>
    )
}
export default Section3;