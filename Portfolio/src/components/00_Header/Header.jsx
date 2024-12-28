import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../Actions/sideBarSlice'
import MenuIcon from './Assets/01_MenuIcon';
import ThemeSwitcher from './Assets/02_ToggleSwitch';
import SocialProfiles from './Assets/04_socialProfiles';
import { ResponsiveSidebar } from './Assets/05_sideBar';
import ContactMeBtn from './Assets/03_ContactMeBtn';

function Header() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.toggle.isSidebarOpen);

  return (
    <>
      <header className='flex gap-3 p-3 bg-inherit'>
        <MenuIcon onClick={() => dispatch(toggleSidebar())} />
        <ThemeSwitcher />
        <SocialProfiles />
        <ContactMeBtn />
      </header>

      <ResponsiveSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => dispatch(toggleSidebar())}
      />
    </>
  );
}

export default Header;
