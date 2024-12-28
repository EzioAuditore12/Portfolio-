import React from 'react';

function ProjectLaunchCard({ title, launchDate, status, description, signupLink }) {
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <span className={`px-3 py-1 text-sm rounded-full ${
            status === "Coming Soon" 
              ? "bg-green-500 text-white" 
              : "bg-yellow-500 text-gray-800"
          }`}>
            {status}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Launch: {launchDate}
          </span>
          <a href={signupLink} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Sign Up for Early Access
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectLaunchCard;