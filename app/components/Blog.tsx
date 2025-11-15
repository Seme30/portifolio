'use client'

import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import './Blog.css';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [imageError, setImageError] = useState(false);
  const firstLetter = post.title.charAt(0).toUpperCase();

  return (
    <Link
      href={post.link}
      target={post.link.startsWith('/') ? '_self' : '_blank'}
      rel={post.link.startsWith('/') ? undefined : 'noopener noreferrer'}
      className="blog-card-link"
    >
      <article className="blog-card-quantum">
        {/* Post Image */}
        <div className="blog-image-container">
          <div className="holographic-scan"></div>
          {post.image && !imageError ? (
            <img
              src={post.image}
              alt={post.title}
              className="blog-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="blog-fallback">
              <span>{post.image && imageError ? firstLetter : '📝'}</span>
            </div>
          )}
        </div>

        {/* Post Content */}
        <div className="blog-content">
          {/* Tags */}
          <div className="blog-tags">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="blog-tag">
                <Tag className="tag-icon" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="blog-title">{post.title}</h3>

          {/* Excerpt */}
          <p className="blog-excerpt">{post.excerpt}</p>

          {/* Meta Info */}
          <div className="blog-meta">
            <div className="meta-item">
              <Calendar className="meta-icon" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
            <div className="meta-item">
              <Clock className="meta-icon" />
              {post.readTime}
            </div>
          </div>

          {/* Read More Indicator */}
          <div className="read-more-link">
            {post.link.startsWith('/') ? 'Read Full Article' : 'Read on LinkedIn'}
            <ArrowRight className="link-arrow" />
          </div>
        </div>
      </article>
    </Link>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
  image?: string;
}

interface BlogProps {
  blogRef: React.RefObject<HTMLElement>;
}

const Blog: React.FC<BlogProps> = ({ blogRef }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Blog posts from LinkedIn
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "AI as a Helper, Not a Dictator: Writing Maintainable Code with AI Tools",
      excerpt: "Using tools like GitHub Copilot, Cursor, and Windsurf has been incredible for speeding up development. However, the key is not letting AI generate code blindly—it's using it to write maintainable, clean code. Learn my 4-step approach to working effectively with AI coding assistants.",
      date: "2024-11-15",
      readTime: "5 min read",
      tags: ["AI/ML", "Best Practices", "Development Tools"],
      link: "/blog/ai-helper-not-dictator",
      image: "https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/budget-buddy.png?alt=media&token=7bad6597-9fc5-4f74-a9f6-a05c4ce04593"
    },
    {
      id: 2,
      title: "Kotlin Multiplatform Mobile (KMM): The Future of Cross-Platform Development",
      excerpt: "Kotlin has become the go-to language for Android development, but did you know Kotlin isn't just for Android anymore? With Kotlin Multiplatform Mobile (KMM), we can now use Kotlin for cross-platform development, creating applications for Android, iOS, Desktop, and Web.",
      date: "2024-05-04",
      readTime: "6 min read",
      tags: ["Kotlin", "KMM", "Cross-Platform", "Mobile Development"],
      link: "/blog/kotlin-multiplatform-mobile",
      image: "https://icon.icepanel.io/Technology/svg/Kotlin.svg"
    },
    {
      id: 3,
      title: "Building Scalable Android Apps with Jetpack Compose",
      excerpt: "Exploring modern Android development practices and how Jetpack Compose revolutionizes UI development with declarative programming and clean architecture patterns.",
      date: "2024-10-15",
      readTime: "7 min read",
      tags: ["Android", "Kotlin", "Jetpack Compose"],
      link: "/blog/jetpack-compose-scalable-apps",
      image: "https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/logo.png?alt=media&token=2762109c-c9f7-46b3-8e4d-3626c6ae8087"
    },
    {
      id: 4,
      title: "Clean Architecture in Android: MVVM Pattern",
      excerpt: "Deep dive into implementing clean architecture with MVVM pattern for maintainable and testable Android applications. Learn how to structure your code for long-term success.",
      date: "2024-07-05",
      readTime: "8 min read",
      tags: ["Android", "Architecture", "Best Practices"],
      link: "/blog/clean-architecture-mvvm",
    },
    {
      id: 5,
      title: "Full-Stack Development: From Frontend to Backend",
      excerpt: "My journey transitioning from frontend development to full-stack, covering React, Next.js, Ruby, and backend technologies. Lessons learned and best practices for aspiring full-stack developers.",
      date: "2024-09-20",
      readTime: "6 min read",
      tags: ["Web Development", "React", "Next.js", "Full Stack"],
      link: "/blog/full-stack-development-journey",
      image: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"
    },
    {
      id: 6,
      title: "AI Integration in Mobile Applications: Practical Guide",
      excerpt: "How to integrate AI models into mobile apps for enhanced user experiences. Featuring practical examples with Gemini API and TensorFlow Lite for on-device machine learning.",
      date: "2024-08-10",
      readTime: "7 min read",
      tags: ["AI/ML", "Android", "Innovation"],
      link: "/blog/ai-integration-mobile-apps",
    },
  ];

  // Get all unique tags
  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  // Filter posts by selected tag
  const filteredPosts = selectedTag === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={blogRef} className="blog-section">
      <div className="blog-header">
        <h2 className="section-title">
          Blog & Articles<span className="title-dot">.</span>
        </h2>
        <p className="section-subtitle">
          Sharing insights, experiences, and knowledge about software development, mobile apps, and technology.
        </p>
      </div>

      {/* Tag Filter */}
      <div className="tag-filter">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* No Posts Message */}
      {filteredPosts.length === 0 && (
        <div className="no-posts">
          <p>No posts found for this category.</p>
        </div>
      )}

      {/* View All on LinkedIn */}
      <div className="view-all-section">
        <Link
          href="https://www.linkedin.com/in/semahegn-adugna/"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-link"
        >
          View All Posts on LinkedIn
          <ArrowRight className="link-arrow" />
        </Link>
      </div>
    </section>
  );
};

export default Blog;
