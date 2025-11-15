'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [imageError, setImageError] = useState(false);
  const firstLetter = post.title.charAt(0).toUpperCase();

  return (
    <motion.article
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      whileHover={{ y: -5 }}
    >
      {/* Post Image */}
      {post.image && !imageError ? (
        <div className="relative h-48 bg-gradient-to-br from-[#7F52FF] to-[#6B44D8] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-[#7F52FF] to-[#6B44D8] flex items-center justify-center">
          <span className="text-white text-8xl font-bold">{post.image && imageError ? firstLetter : '📝'}</span>
        </div>
      )}

      {/* Post Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-[#7F52FF]/10 text-[#7F52FF] text-xs rounded-full"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#7F52FF] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={post.link}
          target={post.link.startsWith('/') ? '_self' : '_blank'}
          rel={post.link.startsWith('/') ? undefined : 'noopener noreferrer'}
          className="inline-flex items-center text-[#7F52FF] font-semibold hover:underline group"
        >
          {post.link.startsWith('/') ? 'Read Full Article' : 'Read on LinkedIn'}
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
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
    <motion.section
      ref={blogRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 md:py-24 lg:py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#7F52FF]">Blog & Articles</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Sharing insights, experiences, and knowledge about software development, mobile apps, and technology.
        </p>
      </div>

      {/* Tag Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTag === tag
                ? 'bg-[#7F52FF] text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>

      {/* No Posts Message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No posts found for this category.
          </p>
        </div>
      )}

      {/* View All on LinkedIn */}
      <div className="text-center mt-12">
        <Link
          href="https://www.linkedin.com/in/semahegn-adugna/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-[#7F52FF] hover:bg-[#6B44D8] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          View All Posts on LinkedIn
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </motion.section>
  );
};

export default Blog;
