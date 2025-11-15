'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AIHelperBlogPost() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <article className="max-w-4xl mx-auto px-6 py-24">
        {/* Back Button */}
        <Link 
          href="/#blog" 
          className="inline-flex items-center text-[#7F52FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {['AI/ML', 'Best Practices', 'Development Tools'].map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 bg-[#7F52FF]/10 text-[#7F52FF] text-sm rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI as a Helper, Not a Dictator: Writing Maintainable Code with AI Tools
          </h1>

          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              November 15, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              5 min read
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-96 bg-gradient-to-br from-[#7F52FF] to-[#6B44D8]">
            <div className="absolute inset-0 flex items-center justify-center text-white text-8xl">
              🤖
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
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
        </motion.div>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010"
                alt="Semahegn Adugna"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg">Semahegn Adugna</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Software Engineer | Android & Full Stack Developer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Share Section */}
        <div className="mt-12 text-center">
          <Link
            href="https://www.linkedin.com/in/semahegn-adugna/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#7F52FF] hover:bg-[#6B44D8] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Read Original Post on LinkedIn
          </Link>
        </div>
      </article>
    </div>
  );
}
