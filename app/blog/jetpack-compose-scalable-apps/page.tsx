'use client'

import React from 'react';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import '../blog-detail.css';

export default function JetpackComposeBlogPost() {
  return (
    <div className="blog-detail-page">
      <article className="blog-article">
        <Link href="/#blog" className="back-button">
          <ArrowLeft className="back-icon" />
          Back to Blog
        </Link>

        <header className="article-header">
          <div className="article-tags">
            {['Android', 'Kotlin', 'Jetpack Compose'].map((tag, index) => (
              <span key={index} className="article-tag">
                <Tag className="tag-icon" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="article-title">
            Building Scalable Android Apps with Jetpack Compose
          </h1>

          <div className="article-meta">
            <div className="meta-item">
              <Calendar className="meta-icon" />
              October 15, 2024
            </div>
            <div className="meta-item">
              <Clock className="meta-icon" />
              7 min read
            </div>
          </div>
        </header>

        <div className="featured-image">
          <div className="featured-image-wrapper">
            <div className="featured-emoji">📱</div>
          </div>
        </div>

        <div className="article-content">
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
        </div>

        <div className="share-section">
          <h3 className="share-title">Connect With Me</h3>
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
