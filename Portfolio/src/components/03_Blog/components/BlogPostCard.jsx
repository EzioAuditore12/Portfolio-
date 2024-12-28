import React from 'react';

function BlogPostCard({ title, summary, date, category, readTime }) {
  return (
    <article className="w-full max-w-md bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-300">{date}</span>
          <span className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{summary}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {readTime} read
          </span>
          <button className="text-blue-500 hover:text-blue-600">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogPostCard;