'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KMMBlogPost() {
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
            {['Kotlin', 'KMM', 'Cross-Platform', 'Mobile Development'].map((tag, index) => (
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
            Kotlin Multiplatform Mobile (KMM): The Future of Cross-Platform Development
          </h1>

          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              May 4, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              6 min read
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
          <div className="relative h-96 bg-gradient-to-br from-[#7F52FF] to-[#6B44D8] flex items-center justify-center">
            <Image
              src="https://icon.icepanel.io/Technology/svg/Kotlin.svg"
              alt="Kotlin Logo"
              width={200}
              height={200}
              className="opacity-90"
            />
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
            We all know that <strong>Kotlin</strong> has become a go-to language for Android development. But did you know that Kotlin isn't just for Android anymore? With <strong>Kotlin Multiplatform Mobile (KMM)</strong>, we can now use Kotlin for cross-platform development, creating applications for Android, iOS, Desktop, and Web.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Let's dive into the world of cross-platform Kotlin and see what it has to offer!
          </h2>

          <div className="bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 p-8 rounded-2xl border border-[#7F52FF]/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">What is KMM?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>KMM</strong> allows developers to write the business logic once and share it across multiple platforms. This leads to significant benefits such as code reusability, and reduced development time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Moreover, <strong>KMM compiles code into the format of the targeted platform</strong>, ensuring native performance.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Key Benefits of KMM
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Code Reusability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Write your business logic once and share it across Android, iOS, Desktop, and Web platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Native Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                KMM compiles to native code, ensuring optimal performance on each platform.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3">Reduced Development Time</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share common code while maintaining platform-specific UI implementations.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Flexible UI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use native UI frameworks or Jetpack Compose Multiplatform for shared UI.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Jetpack Compose Multiplatform
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you decide to focus on UI, <strong>Jetpack Compose Multiplatform</strong> allows sharing UIs across Android, iOS, desktop, and web.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This means you can build beautiful, modern UIs once and deploy them everywhere, while still maintaining the flexibility to customize for each platform when needed.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            A Simple KMM Example
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Let's take a look at a simple yet effective demonstration of KMM. Nothing fancy, just an about screen to showcase KMM.
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-8">
            <h3 className="text-lg font-bold mb-4 text-[#7F52FF]">Android Implementation</h3>
            <pre className="text-sm"><code>{`// Shared business logic
expect class Platform() {
    val name: String
}

// Android-specific implementation
actual class Platform {
    actual val name: String = "Android"
}

// Shared function
fun getPlatformName(): String {
    return "Running on \${Platform().name}"
}`}</code></pre>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-2xl border-l-4 border-green-500 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Key Insight
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The beauty of KMM is that you write the business logic once in the shared module, and each platform (Android, iOS, Desktop, Web) gets its own optimized implementation automatically.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            When Should You Use KMM?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-lg mb-2">You have a mobile app for both Android and iOS</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Share business logic, networking, and data layers while keeping native UI.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-lg mb-2">You want to expand to desktop or web</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  KMM makes it easy to target multiple platforms from a single codebase.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-lg mb-2">You're already using Kotlin for Android</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Leverage your existing Kotlin knowledge to build cross-platform apps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-lg mb-2">You need native performance</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Unlike JavaScript-based solutions, KMM compiles to native code.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            KMM vs Other Cross-Platform Solutions
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#7F52FF] text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">KMM</th>
                  <th className="p-4 text-left">Flutter</th>
                  <th className="p-4 text-left">React Native</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-semibold">Language</td>
                  <td className="p-4">Kotlin</td>
                  <td className="p-4">Dart</td>
                  <td className="p-4">JavaScript/TypeScript</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-semibold">UI Approach</td>
                  <td className="p-4">Native or Compose MP</td>
                  <td className="p-4">Custom widgets</td>
                  <td className="p-4">Native components</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-semibold">Performance</td>
                  <td className="p-4">Native</td>
                  <td className="p-4">Near-native</td>
                  <td className="p-4">Bridge overhead</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Code Sharing</td>
                  <td className="p-4">Business logic</td>
                  <td className="p-4">Full app</td>
                  <td className="p-4">Full app</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 rounded-2xl border border-[#7F52FF]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#7F52FF]">Final Thoughts</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kotlin Multiplatform Mobile represents a pragmatic approach to cross-platform development. Instead of forcing you to share everything, it gives you the flexibility to share what makes sense (business logic, networking, data) while keeping platform-specific code where it matters (UI, platform APIs).
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              If you're already invested in Kotlin and want to expand beyond Android, KMM is definitely worth exploring!
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Resources to Get Started</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#7F52FF] mr-3 text-xl">•</span>
                <div>
                  <a href="https://kotlinlang.org/docs/multiplatform.html" target="_blank" rel="noopener noreferrer" className="text-[#7F52FF] hover:underline font-semibold">
                    Official Kotlin Multiplatform Documentation
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#7F52FF] mr-3 text-xl">•</span>
                <div>
                  <a href="https://www.jetbrains.com/compose-multiplatform/" target="_blank" rel="noopener noreferrer" className="text-[#7F52FF] hover:underline font-semibold">
                    Jetpack Compose Multiplatform
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#7F52FF] mr-3 text-xl">•</span>
                <div>
                  <a href="https://github.com/JetBrains/compose-multiplatform" target="_blank" rel="noopener noreferrer" className="text-[#7F52FF] hover:underline font-semibold">
                    KMM Sample Projects on GitHub
                  </a>
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
