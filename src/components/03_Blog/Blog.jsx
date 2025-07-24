import React, { useState } from 'react';
import FeaturedPost from './components/FeaturedPost';
import BlogGrid from './components/BlogGrid';
import ProjectsShowcase from './components/ProjectsShowcase';
import CategoryFilter from './components/CategoryFilter';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'solutions', 'projects'];
  
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Common React Error Solutions",
      summary: "Solutions for the most common React.js errors",
      date: "2024-01-15",
      category: "solutions",
      readTime: "5 min",
      featured: true,
      image: "/blog/react-solutions.jpg",
      tags: ['react', 'debugging']
    },
    {
      id: 2,
      title: "Database Connection Issues Fixed",
      summary: "Solutions for database connectivity problems",
      date: "2024-01-20",
      category: "solutions",
      readTime: "8 min",
      image: "/blog/database-solutions.jpg",
      tags: ['database', 'debugging']
    },
    {
      id: 3,
      title: "API Authentication Errors",
      summary: "Common API auth errors and fixes",
      date: "2024-01-25",
      category: "solutions",
      readTime: "6 min",
      image: "/blog/api-auth.jpg",
      tags: ['api', 'security']
    }
  ]);

  const [projects] = useState([
    {
      id: 1,
      title: "Debug Toolkit",
      launchDate: "2024-02-01",
      status: "Coming Soon",
      description: "All-in-one debugging toolkit for developers",
      signupLink: "#",
      category: "projects",
      type: "tool"
    },
    {
      id: 2,
      title: "Error Scanner",
      launchDate: "2024-03-15",
      status: "In Development",
      description: "Automated error detection and solutions",
      signupLink: "#",
      category: "projects",
      type: "tool"
    }
  ]);

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'all' ? true : post.category === activeCategory
  );

  const filteredProjects = activeCategory === 'projects' || activeCategory === 'all'
    ? projects
    : [];

  return (
    <div className="sectionCSS">
      <div className="w-[90vw] md:w-[72vw] mx-auto py-12 px-4 md:px-8 lg:px-12 space-y-16">
        {/* Featured Post */}
        <FeaturedPost post={blogPosts.find(post => post.featured)} />

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Blog Grid */}
        <BlogGrid posts={filteredPosts} />

        {/* Projects Showcase */}
        <ProjectsShowcase projects={filteredProjects} />
      </div>
    </div>
  );
}

export default Blog;