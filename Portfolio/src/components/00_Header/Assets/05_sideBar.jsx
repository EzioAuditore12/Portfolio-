import React from 'react';

const menuItems = [
  { name: 'Home', href: '#', icon: '🏠' },
  { name: 'Profile', href: '#', icon: '👤' },
  { name: 'Settings', href: '#', icon: '⚙️' },
];

export function ResponsiveSidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
          <h1 className="text-white text-xl font-semibold">My App</h1>
          <button onClick={toggleSidebar} className="text-white hover:text-gray-300">
            ✕
          </button>
        </div>
        <nav className="mt-5">
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
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </>
  );
}
