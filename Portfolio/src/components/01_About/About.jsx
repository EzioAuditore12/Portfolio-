import React from 'react'
import Section1 from './01_Section1'
import Section2 from './02_Section2'
import Section3 from './03_Section3'
function About() {
  return (
    <div className='grid border-b-7 border-black gap-5 mb-[100px] md:mb-3'>
    <Section1/>
    <Section2/>
    <Section3/>
    </div>
    
  )
}

export default About