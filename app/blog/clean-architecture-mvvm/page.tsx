'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CleanArchitectureBlogPost() {
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
            {['Android', 'Architecture', 'Best Practices'].map((tag, index) => (
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
            Clean Architecture in Android: MVVM Pattern
          </h1>

          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              July 5, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              8 min read
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-96 bg-gradient-to-br from-[#7F52FF] to-[#6B44D8] flex items-center justify-center text-white text-9xl">
            🏗️
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Clean Architecture combined with the MVVM pattern creates maintainable, testable, and scalable Android applications. In this deep dive, I'll share how to structure your code for long-term success.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            What is Clean Architecture?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Clean Architecture, introduced by Robert C. Martin (Uncle Bob), is a software design philosophy that separates concerns into layers. Each layer has a specific responsibility and depends only on inner layers, never on outer ones.
          </p>

          <div className="bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 p-8 rounded-2xl border border-[#7F52FF]/20 mb-12">
            <h3 className="text-2xl font-bold mb-4">The Three Layers</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Presentation Layer (UI)</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Activities, Fragments, Composables, ViewModels - Everything the user sees and interacts with
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚙️</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Domain Layer (Business Logic)</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Use Cases, Business Rules, Domain Models - The core logic of your application
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">💾</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Data Layer</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Repositories, Data Sources (Remote/Local), API Services - How you get and store data
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            MVVM Pattern Explained
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Model-View-ViewModel (MVVM) is the recommended architecture pattern for Android apps. It separates UI logic from business logic and makes testing easier.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-[#7F52FF]">Model</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Represents the data and business logic. Includes domain models, repositories, and data sources.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-[#7F52FF]">View</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                The UI layer that displays data and captures user interactions. Activities, Fragments, or Composables.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-[#7F52FF]">ViewModel</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Bridges the View and Model. Manages UI state and handles business logic calls.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Project Structure
          </h2>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-8">
            <pre className="text-sm"><code>{`app/
├── data/
│   ├── local/
│   │   ├── dao/
│   │   └── database/
│   ├── remote/
│   │   ├── api/
│   │   └── dto/
│   └── repository/
│       └── ProductRepositoryImpl.kt
├── domain/
│   ├── model/
│   │   └── Product.kt
│   ├── repository/
│   │   └── ProductRepository.kt
│   └── usecase/
│       ├── GetProductsUseCase.kt
│       └── GetProductByIdUseCase.kt
└── presentation/
    ├── ui/
    │   ├── home/
    │   │   ├── HomeScreen.kt
    │   │   └── HomeViewModel.kt
    │   └── detail/
    │       ├── DetailScreen.kt
    │       └── DetailViewModel.kt
    └── navigation/
        └── NavGraph.kt`}</code></pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Implementation Example
          </h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Domain Layer</h3>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6">
            <pre className="text-sm"><code>{`// Domain Model
data class Product(
    val id: String,
    val name: String,
    val price: Double,
    val imageUrl: String
)

// Repository Interface
interface ProductRepository {
    suspend fun getProducts(): Result<List<Product>>
    suspend fun getProductById(id: String): Result<Product>
}

// Use Case
class GetProductsUseCase @Inject constructor(
    private val repository: ProductRepository
) {
    suspend operator fun invoke(): Result<List<Product>> {
        return repository.getProducts()
    }
}`}</code></pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Data Layer</h3>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6">
            <pre className="text-sm"><code>{`// Repository Implementation
class ProductRepositoryImpl @Inject constructor(
    private val remoteDataSource: ProductRemoteDataSource,
    private val localDataSource: ProductLocalDataSource
) : ProductRepository {
    
    override suspend fun getProducts(): Result<List<Product>> {
        return try {
            // Try to fetch from remote
            val products = remoteDataSource.getProducts()
            // Cache locally
            localDataSource.saveProducts(products)
            Result.success(products)
        } catch (e: Exception) {
            // Fallback to local cache
            try {
                val cachedProducts = localDataSource.getProducts()
                Result.success(cachedProducts)
            } catch (e: Exception) {
                Result.failure(e)
            }
        }
    }
}`}</code></pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Presentation Layer</h3>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6">
            <pre className="text-sm"><code>{`// ViewModel
@HiltViewModel
class HomeViewModel @Inject constructor(
    private val getProductsUseCase: GetProductsUseCase
) : ViewModel() {
    
    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()
    
    init {
        loadProducts()
    }
    
    private fun loadProducts() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            getProductsUseCase()
                .onSuccess { products ->
                    _uiState.value = UiState.Success(products)
                }
                .onFailure { error ->
                    _uiState.value = UiState.Error(error.message ?: "Unknown error")
                }
        }
    }
    
    fun retry() {
        loadProducts()
    }
}

// UI State
sealed class UiState {
    object Loading : UiState()
    data class Success(val products: List<Product>) : UiState()
    data class Error(val message: String) : UiState()
}`}</code></pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Benefits of Clean Architecture + MVVM
          </h2>

          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold mb-2">Testability</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Each layer can be tested independently. Business logic is isolated from UI and data sources.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold mb-2">Maintainability</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Clear separation of concerns makes code easier to understand and modify.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold mb-2">Scalability</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Easy to add new features without affecting existing code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold mb-2">Reusability</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Domain layer can be shared across different platforms (Android, iOS with KMM).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold mb-2">Team Collaboration</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Different team members can work on different layers simultaneously.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Best Practices
          </h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Use Dependency Injection:</strong> Hilt or Koin makes managing dependencies easier
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Keep ViewModels lean:</strong> Delegate business logic to Use Cases
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Use sealed classes for UI state:</strong> Makes state management type-safe
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Implement repository pattern:</strong> Abstract data sources behind interfaces
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Write unit tests:</strong> Test each layer independently
              </div>
            </li>
          </ul>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 rounded-2xl border border-[#7F52FF]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#7F52FF]">Conclusion</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Clean Architecture with MVVM might seem like overkill for small projects, but it pays off as your app grows. The initial setup time is worth the long-term benefits of maintainability, testability, and scalability. Start with this architecture from day one, and your future self will thank you!
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
