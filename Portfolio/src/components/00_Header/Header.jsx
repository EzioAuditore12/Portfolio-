import React, { useState } from 'react'
import MenuIcon from './Assets/01_MenuIcon'
import ThemeSwitcher from './Assets/02_ToggleSwitch'
import HireMeBtn from './Assets/03_HireMeBtn'
import SocialProfiles from './Assets/04_socialProfiles'
import { ResponsiveSidebar } from './Assets/05_sideBar';


function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
    <header className='flex gap-3 p-3'>
        <MenuIcon onClick={toggleSidebar}/>
        <ThemeSwitcher/>
        <SocialProfiles/>
        <HireMeBtn/>
    </header>
  
    <ResponsiveSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    </>
  )
}

export default Header