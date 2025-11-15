'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FullStackBlogPost() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <article className="max-w-4xl mx-auto px-6 py-24">
        <Link 
          href="/#blog" 
          className="inline-flex items-center text-[#7F52FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {['Web Development', 'React', 'Next.js', 'Full Stack'].map((tag, index) => (
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
            Full-Stack Development: From Frontend to Backend
          </h1>

          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              September 20, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              6 min read
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-96 bg-gradient-to-br from-[#7F52FF] to-[#6B44D8] flex items-center justify-center">
            <Image
              src="https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"
              alt="Next.js"
              width={250}
              height={250}
              className="opacity-90"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            My journey from frontend development to full-stack has been transformative. Starting with React and gradually expanding to backend technologies, I've learned valuable lessons about building complete web applications. Here's my story and the insights I've gained along the way.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            The Frontend Foundation
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I started my web development journey with React. The component-based architecture and declarative nature of React made building UIs intuitive and enjoyable. But I quickly realized that to build complete applications, I needed to understand the full stack.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">React Fundamentals</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>• Component lifecycle and hooks</li>
                <li>• State management (Context, Redux)</li>
                <li>• Performance optimization</li>
                <li>• Custom hooks and reusability</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Modern CSS</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>• Tailwind CSS for rapid development</li>
                <li>• Responsive design principles</li>
                <li>• CSS-in-JS solutions</li>
                <li>• Animation and transitions</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Discovering Next.js
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Next.js was a game-changer. It bridged the gap between frontend and backend, allowing me to build full-stack applications with a single framework. The learning curve was smooth since it's built on React.
          </p>

          <div className="bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 p-8 rounded-2xl border border-[#7F52FF]/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Next.js?</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-[#7F52FF] text-xl">✓</span>
                <div>
                  <strong>Server-Side Rendering (SSR):</strong> Better SEO and initial load performance
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7F52FF] text-xl">✓</span>
                <div>
                  <strong>API Routes:</strong> Build backend endpoints without a separate server
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7F52FF] text-xl">✓</span>
                <div>
                  <strong>File-based Routing:</strong> Intuitive and automatic routing system
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7F52FF] text-xl">✓</span>
                <div>
                  <strong>Image Optimization:</strong> Automatic image optimization out of the box
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7F52FF] text-xl">✓</span>
                <div>
                  <strong>TypeScript Support:</strong> First-class TypeScript integration
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Backend Technologies
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            As I expanded into full-stack development, I learned various backend technologies. Each has its strengths, and choosing the right one depends on the project requirements.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">Node.js & Express</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Perfect for JavaScript developers. Build RESTful APIs quickly with a familiar syntax.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code>{`// Express API Example
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});`}</code>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">Ruby on Rails</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Convention over configuration. Rapid development with a mature ecosystem. Currently using it at The Bible House.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code>{`# Rails Controller Example
class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end
end`}</code>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">Next.js API Routes</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Serverless functions integrated with your frontend. Perfect for smaller applications.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code>{`// app/api/products/route.ts
export async function GET() {
  const products = await getProducts();
  return Response.json(products);
}`}</code>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Database Knowledge
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-[#7F52FF]">SQL Databases</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">PostgreSQL, MySQL</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Structured data with relationships</li>
                <li>• ACID compliance</li>
                <li>• Complex queries and joins</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-[#7F52FF]">NoSQL Databases</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">MongoDB, Firebase</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Flexible schema</li>
                <li>• Horizontal scaling</li>
                <li>• Document-based storage</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Key Lessons Learned
          </h2>

          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <span className="text-3xl">1️⃣</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Start with the fundamentals</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Master HTML, CSS, and JavaScript before jumping into frameworks. Understanding the basics makes learning frameworks much easier.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <span className="text-3xl">2️⃣</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Build projects, not just tutorials</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Following tutorials is great, but building your own projects solidifies your knowledge and exposes you to real-world problems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <span className="text-3xl">3️⃣</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Learn one thing at a time</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Don't try to learn everything at once. Master frontend first, then gradually add backend skills.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <span className="text-3xl">4️⃣</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Understand HTTP and REST APIs</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Knowing how frontend and backend communicate is crucial. Learn about HTTP methods, status codes, and RESTful principles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <span className="text-3xl">5️⃣</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Version control is essential</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Git and GitHub are non-negotiable. Learn branching, merging, and collaboration workflows early.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            My Current Tech Stack
          </h2>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#7F52FF]">Frontend</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• React & Next.js 14</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                  <li>• shadcn/ui components</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#7F52FF]">Backend</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Ruby on Rails</li>
                  <li>• Node.js & Express</li>
                  <li>• Next.js API Routes</li>
                  <li>• PostgreSQL & MongoDB</li>
                  <li>• Firebase</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 rounded-2xl border border-[#7F52FF]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#7F52FF]">Advice for Aspiring Full-Stack Developers</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The journey from frontend to full-stack is challenging but incredibly rewarding. Don't rush it—take time to understand each layer of the stack. Build real projects, contribute to open source, and don't be afraid to ask for help.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              Remember: You don't need to know everything. Focus on building things and learning as you go. The best way to learn is by doing!
            </p>
          </div>
        </motion.div>

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

        <div className="mt-12 text-center">
          <Link
            href="https://www.linkedin.com/in/semahegn-adugna/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#7F52FF] hover:bg-[#6B44D8] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </article>
    </div>
  );
}
