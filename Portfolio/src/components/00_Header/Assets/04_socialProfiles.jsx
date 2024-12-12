import React from 'react'
import Github from './Svg/Github.svg'
import Linkedin from './Svg/Linkedin.svg'
import StackOverflow from './Svg/StackOverflow.svg'
import Twitter from './Svg/Twitter.svg'
import Reddit from './Svg/Reddit.svg'
function SocialProfiles() {
  return (
    <div className='hidden md:block ml-auto '>
        <div className='flex items-center justify-center gap-2'>
        <img className='h-[40px] w-[40px]'src={Github}/>
        <img className='h-[35px] w-[40px]'src={Linkedin}/>
        <img className='h-[35px] w-[40px]'src={StackOverflow}/>
        <img className='h-[35px] w-[40px]'src={Reddit}/>
        <img className='h-[35px] w-[40px]'src={Twitter}/>
     
        </div>
    </div>
  )

}
export default SocialProfiles
