import { useState, useEffect, useRef } from 'react'
import reactIcon from './Assets/skillImages/React.svg'
import nodeIcon from './Assets/skillImages/nodejs.svg'
import mongoIcon from './Assets/skillImages/mongodb.svg'
import javaScriptIcon from './Assets/skillImages/javascript.svg'
import tailwindIcon from './Assets/skillImages/tailwind.svg'
import bootstrapIcon from './Assets/skillImages/bootstrap5.svg'
import postgreSqlIcon from './Assets/skillImages/postgreSql.svg'
import springbootIcon from './Assets/skillImages/spring-boot.svg'
import typeScriptIcon from './Assets/skillImages/typescript.svg'
import expoIcon from './Assets/skillImages/expo.svg'
import expressJsIcon from './Assets/skillImages/express-js.svg'
import graphqlIcon from './Assets/skillImages/graphql.svg'
import javaIcon from './Assets/skillImages/java.svg'
import reactNativeIcon from './Assets/skillImages/react-native.svg'
import nextJsIcon from './Assets/skillImages/nextjs.svg'
import css from './Assets/skillImages/css.svg'
import html from './Assets/skillImages/htnl5.svg'
import '../../styles/sectionAnimations.css'

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
      skillName: 'Spring Boot',
      skillIcon: springbootIcon
    },
    {
      skillName: 'Nextjs',
      skillIcon: nextJsIcon
    },
    {
      skillName: 'Typescript',
      skillIcon: typeScriptIcon
    },
    {
        skillName: 'MongoDB',
        skillIcon: mongoIcon
    },
    {
      skillName: 'Graphql',
      skillIcon: graphqlIcon
    },
    {
      skillName: 'React Native',
      skillIcon: reactNativeIcon
    },
    {
      skillName: 'Java',
      skillIcon: javaIcon
    },
    {
      skillName: 'Express Js',
      skillIcon: expressJsIcon
    },
    {
      skillName: 'Expo',
      skillIcon: expoIcon
    },
    {
      skillName: 'PostgreSql',
      skillIcon: postgreSqlIcon
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
].sort((a, b) => a.skillName.localeCompare(b.skillName));

function Section3() {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Start showing skills one by one when section is visible
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, index]);
            }, index * 200); // 200ms delay between each skill
          });
          // Disconnect observer after animation starts
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='sectionCSS p-6 bg-gray-50 dark:bg-gray-800'>
      <h1 className='text-3xl font-extrabold'>Skills</h1>
      <p>
        Here are some of the skills that I have acquired over the years. I am always looking to learn new technologies and improve my skills.
      </p>
      <div className='mt-6 grid gap-x-6 grid-cols-3 md:grid-cols-4 gap-y-12'>
        {skills.map((item, index) => (
          <div 
            key={index} 
            className={`group flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300`}
            style={{
              opacity: visibleSkills.includes(index) ? 1 : 0,
              transform: visibleSkills.includes(index) ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}
          >
            <img 
              src={item.skillIcon} 
              className='h-[70px] w-[70px] group-hover:animate-bounce'
              alt={item.skillName}
            />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.skillName}
            </span>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default Section3