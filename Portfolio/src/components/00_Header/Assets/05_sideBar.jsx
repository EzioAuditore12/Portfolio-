import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCode, FaBlog, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const menuItems = [
  { name: 'About', link: '/about', icon: <FaUser size={24} /> },
  { name: 'Projects', link: '/projects', icon: <FaCode size={24} /> },
  /*{ name: 'Blog', link: '/blog', icon: <FaBlog size={24} /> },*/
  { name: 'Resume', link: '/resume', icon: <FaFileAlt size={24} /> },
  { name: 'Contact', link: '/contact', icon: <FaEnvelope size={24} /> },
];

export function ResponsiveSidebar({ isSidebarOpen, toggleSidebar }) {
  const location = useLocation();

  return (
    <aside className={`bg-light-primary dark:bg-[#161D29] text-light-text dark:text-dark-text shadow-[0_0_10px_rgba(0,0,0,0.3)] fixed h-16 w-full bottom-0 z-50 h-sm:h-16 h-sm:w-full h-sm:bottom-0 h-sm:top-auto h-sm:ml-0 h-sm:rounded-none md:top-[28%] md:h-[300px] md:w-16 md:ml-2 md:rounded-lg transform ${
      isSidebarOpen ? 'translate-y-0 translate-x-full md:hidden' : 'translate-y-0 translate-x-0'
    }`}>
      <nav className='flex p-2 items-center justify-evenly md:flex-col md:gap-3 h-sm:flex-row'>
        {menuItems.map((item) => (
          <Link
            to={item.link}
            key={item.name}
            className={`flex flex-col items-center cursor-pointer hover:text-gray-300 ${
              location.pathname === item.link ? 'text-red-600' : ''
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
        <button onClick={toggleSidebar} className="hidden h-sm:hidden md:block hover:text-gray-300">
          ✕
        </button>
      </nav>  
    </aside>
  );
}