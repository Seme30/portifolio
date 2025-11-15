'use client'

import React from 'react';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import '../blog-detail.css';

export default function AIHelperBlogPost() {
  return (
    <div className="blog-detail-page">
      <article className="blog-article">
        {/* Back Button */}
        <Link href="/#blog" className="back-button">
          <ArrowLeft className="back-icon" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="article-header">
          <div className="article-tags">
            {['AI/ML', 'Best Practices', 'Development Tools'].map((tag, index) => (
              <span key={index} className="article-tag">
                <Tag className="tag-icon" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="article-title">
            AI as a Helper, Not a Dictator: Writing Maintainable Code with AI Tools
          </h1>

          <div className="article-meta">
            <div className="meta-item">
              <Calendar className="meta-icon" />
              November 15, 2024
            </div>
            <div className="meta-item">
              <Clock className="meta-icon" />
              5 min read
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="featured-image">
          <div className="featured-image-wrapper">
            <div className="featured-emoji">🤖</div>
          </div>
        </div>

        {/* Content */}
        <div className="article-content">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I have been writing code with the help of tools/IDEs like GitHub Copilot, Cursor, Augment Code, and Windsurf, and they are incredible at speeding up development. However, over time, I realized the key is not letting AI generate code blindly; it is using it to write maintainable, clean code.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Here is what I have learned from experience:
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">1. Understand the requirement first</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Know exactly what you want before prompting the model. Clear requirements lead to better AI-generated code and fewer iterations.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">2. Be specific</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Instead of "I want a toggle button," describe behavior, state management, and integration. The more specific you are, the better the output. Detail matters!
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">3. Iterate incrementally</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Start with minimal code, and then ask AI for improvements. This approach gives you better control over readability, structure, and maintainability.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">4. Refactor and Simplify</h3>
              <p className="text-gray-700 dark:text-gray-300">
                AI's suggestions are drafts; I keep control over readability, structure, and maintainability. Always review and refactor the generated code to match your standards.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 rounded-2xl border border-[#7F52FF]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#7F52FF]">Key Takeaway</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Some of the new models are very opinionated, often suggesting patterns or abstractions you might not need. Any improvements/changes in your code should be purposeful and enhance maintainability without over-engineering.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-semibold">
              AI is a helper, not a dictator. It can accelerate your work but don't let it replace understanding or thoughtful design.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">My Recommended AI Tools</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#7F52FF] mr-3 text-xl">•</span>
                <div>
                  <strong>GitHub Copilot:</strong> Great for autocomplete and quick suggestions
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#7F52FF] mr-3 text-xl">•</span>
                <div>
                  <strong>Cursor:</strong> Excellent for context-aware code generation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#7F52FF] mr-3 text-xl">•</span>
                <div>
                  <strong>Windsurf:</strong> Powerful for refactoring and code improvements
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#7F52FF] mr-3 text-xl">•</span>
                <div>
                  <strong>Augment Code:</strong> Helpful for understanding complex codebases
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Share Section */}
        <div className="share-section">
          <h3 className="share-title">Read the Original Post</h3>
          <div className="share-buttons">
            <Link
              href="https://www.linkedin.com/in/semahegn-adugna/"
              target="_blank"
              rel="noopener noreferrer"
              className="share-button"
            >
              View on LinkedIn
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
