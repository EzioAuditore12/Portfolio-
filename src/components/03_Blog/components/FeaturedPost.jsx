import React from 'react';

function FeaturedPost({ post }) {
  if (!post) return null;

  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl">
      <div className="aspect-video relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="absolute bottom-0 p-6 text-white">
        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </span>
        <h2 className="text-3xl font-bold mt-4 mb-2">{post.title}</h2>
        <p className="text-gray-200 line-clamp-2">{post.summary}</p>
      </div>
    </div>
  );
}

export default FeaturedPost;
