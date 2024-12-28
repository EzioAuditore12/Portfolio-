import React from 'react';
import BlogPostCard from './BlogPostCard';

function BlogGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <BlogPostCard
          key={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          category={post.category}
          readTime={post.readTime}
        />
      ))}
    </div>
  );
}

export default BlogGrid;
