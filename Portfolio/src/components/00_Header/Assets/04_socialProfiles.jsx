import React from 'react'
import Github from './Svg/02_SocialProfileIcons/01_Github.svg'
import Linkedin from './Svg/02_SocialProfileIcons/02_Linkedin.svg'
import StackOverflow from './Svg/02_SocialProfileIcons/03_StackOverflow.svg'
import Reddit from './Svg/02_SocialProfileIcons/04_Reddit.svg'
import Twitter from './Svg/02_SocialProfileIcons/05_Twitter.svg'

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
