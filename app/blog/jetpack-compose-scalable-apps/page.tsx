'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function JetpackComposeBlogPost() {
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
            {['Android', 'Kotlin', 'Jetpack Compose'].map((tag, index) => (
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
            Building Scalable Android Apps with Jetpack Compose
          </h1>

          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              October 15, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              7 min read
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
              src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/logo.png?alt=media&token=2762109c-c9f7-46b3-8e4d-3626c6ae8087"
              alt="Jetpack Compose"
              width={300}
              height={300}
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
            Jetpack Compose has revolutionized Android UI development by introducing a modern, declarative approach to building user interfaces. In this article, I'll share my experience building scalable Android applications using Compose and the architectural patterns that make it successful.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Why Jetpack Compose?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Declarative UI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Describe what your UI should look like, and Compose takes care of the rest. No more findViewById or XML layouts.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Less Code</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Write significantly less code compared to traditional XML-based UI development.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Intuitive</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build UIs with Kotlin code that's easy to read, write, and maintain.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Reactive</h3>
              <p className="text-gray-600 dark:text-gray-400">
                UI automatically updates when state changes, making reactive programming natural.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Clean Architecture with Compose
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Building scalable apps requires a solid architecture. Here's how I structure my Compose applications:
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-8">
            <pre className="text-sm"><code>{`// UI Layer - Composable
@Composable
fun ProductScreen(
    viewModel: ProductViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsState()
    
    when (uiState) {
        is UiState.Loading -> LoadingIndicator()
        is UiState.Success -> ProductList(uiState.data)
        is UiState.Error -> ErrorMessage(uiState.message)
    }
}

// ViewModel Layer
@HiltViewModel
class ProductViewModel @Inject constructor(
    private val getProductsUseCase: GetProductsUseCase
) : ViewModel() {
    
    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()
    
    init {
        loadProducts()
    }
    
    private fun loadProducts() {
        viewModelScope.launch {
            getProductsUseCase()
                .onSuccess { products ->
                    _uiState.value = UiState.Success(products)
                }
                .onFailure { error ->
                    _uiState.value = UiState.Error(error.message)
                }
        }
    }
}`}</code></pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Key Principles for Scalable Compose Apps
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">1. State Hoisting</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Move state up to make composables stateless and reusable. This makes testing easier and components more flexible.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code>{`@Composable
fun SearchBar(
    query: String,
    onQueryChange: (String) -> Unit
) {
    TextField(
        value = query,
        onValueChange = onQueryChange
    )
}`}</code>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">2. Single Source of Truth</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Use StateFlow or State to manage UI state. Never duplicate state across multiple places.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">3. Unidirectional Data Flow</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Events flow up, state flows down. This makes your app predictable and easier to debug.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">4. Composition over Inheritance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Build complex UIs by combining simple composables rather than creating deep inheritance hierarchies.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Performance Optimization Tips
          </h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Use remember and derivedStateOf:</strong> Avoid unnecessary recompositions by memoizing expensive calculations
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Lazy layouts:</strong> Use LazyColumn and LazyRow for efficient list rendering
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Keys in lists:</strong> Always provide stable keys to help Compose identify items
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Avoid reading state in composition:</strong> Read state only when needed to prevent unnecessary recompositions
              </div>
            </li>
          </ul>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 rounded-2xl border border-[#7F52FF]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#7F52FF]">Real-World Example: S-Ecom</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I built <strong>S-Ecom</strong>, an e-commerce Android application using Kotlin and Jetpack Compose. The app features:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Clean architecture with MVVM pattern</li>
              <li>• Product browsing with category filtering</li>
              <li>• Dark mode support</li>
              <li>• Firebase authentication</li>
              <li>• Efficient state management with StateFlow</li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://github.com/Seme30/S-Ecom/releases/download/v1.0.0/S-Ecom.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#7F52FF] hover:bg-[#6B44D8] text-white font-semibold rounded-lg transition-all"
              >
                Download S-Ecom APK
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Conclusion
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Jetpack Compose has transformed how we build Android UIs. By following clean architecture principles and leveraging Compose's declarative nature, you can build scalable, maintainable, and performant Android applications. The learning curve is worth it—once you go Compose, you won't want to go back to XML!
          </p>
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
