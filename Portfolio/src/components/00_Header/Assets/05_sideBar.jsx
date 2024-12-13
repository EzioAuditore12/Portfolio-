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
    <>
      <aside
        className={`fixed sm:left-0 sm:top-0 bottom-0 left-0 sm:h-full h-16 sm:w-64 w-full bg-gray-800 transform ${
          isSidebarOpen 
            ? 'translate-y-0 sm:translate-y-0 sm:translate-x-0' 
            : 'translate-y-full sm:translate-y-0 sm:-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Show header only on desktop */}
        <div className="hidden sm:flex items-center justify-between h-16 bg-gray-900 px-4">
          <h1 className="text-white text-xl font-semibold">My App</h1>
          <button onClick={toggleSidebar} className="text-white hover:text-gray-300">
            ✕
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="h-full">
          {/* Desktop menu */}
          <div className="hidden sm:block sm:mt-5">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-6 py-2 mt-1 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile bottom menu */}
          <div className="sm:hidden h-full flex justify-around items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center text-gray-300 hover:text-white"
              >
                <span className="text-xl mb-1">{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}