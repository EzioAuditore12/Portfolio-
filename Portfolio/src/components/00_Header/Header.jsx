import React, { useState } from 'react'
import MenuIcon from './Assets/01_MenuIcon'
import ThemeSwitcher from './Assets/02_ToggleSwitch'
import HireMeBtn from './Assets/03_HireMeBtn'
import SocialProfiles from './Assets/04_socialProfiles'

function Header() {
    const [darkMode,setDarkMode]=useState(false)
    const toggleDarkmode=()=>{
        setDarkMode(!darkMode)
    }

  return (
    <header className='flex p-4 gap-3'>
        <MenuIcon/>
        <ThemeSwitcher/>
        <SocialProfiles/>
        <HireMeBtn/>
    </header>
  )
}

export default Header