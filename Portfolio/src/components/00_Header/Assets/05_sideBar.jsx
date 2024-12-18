import React from 'react';

const menuItems = [
  { name: 'About', href: '#', icon: '👤' },
  { name: 'Projects', href: '#', icon: '💼' },
  { name: 'Blog', href: '#', icon: '✏️' },
  { name: 'Resume', href: '#', icon: '📄' },
  { name: 'Contact', href: '#', icon: '💬' },
];

export function ResponsiveSidebar({ isSidebarOpen, toggleSidebar }) {
  return (
   <aside className={` bg-light-primary dark:bg-[#161D29] text-light-text dark:text-dark-text shadow-[0_0_10px_rgba(0,0,0,0.3)] fixed h-16 w-full bottom-0 md:top-[25%] md:h-[400px] md:w-16 md:ml-2 md:rounded-lg transform ${
   isSidebarOpen ? 'translate-y-0 translate-x-full md:hidden' : 'translate-y-0 translate-x-0'
   }`}>

<nav className='flex p-2 items-center justify-evenly md:flex-col md:gap-3 '>
  {menuItems.map((item) => {
    return (
      <div className='flex flex-col items-center cursor-pointer hover:text-gray-300' key={item.name}>
        <span>{item.icon}</span>
        <span>{item.name}</span>
      </div>
    );
  })}
  <button onClick={toggleSidebar} className="hidden md:block hover:text-gray-300">
            ✕
  </button>
</nav>  
   </aside>
  );
}