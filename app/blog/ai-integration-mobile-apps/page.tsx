'use client'

import React from 'react';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import '../blog-detail.css';

export default function AIIntegrationBlogPost() {
  return (
    <div className="blog-detail-page">
      <article className="blog-article">
        <Link href="/#blog" className="back-button">
          <ArrowLeft className="back-icon" />
          Back to Blog
        </Link>

        <header className="article-header">
          <div className="article-tags">
            {['AI/ML', 'Android', 'Innovation'].map((tag, index) => (
              <span
                key={index}
                className="article-tag"
              >
                <Tag className="tag-icon" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="article-title">
            AI Integration in Mobile Applications: Practical Guide
          </h1>

          <div className="article-meta">
            <div className="meta-item">
              <Calendar className="meta-icon" />
              August 10, 2024
            </div>
            <div className="flex items-center">
              <Clock className="meta-icon" />
              7 min read
            </div>
          </div>
        </header>

        <div className="featured-image">
          <div className="featured-image-wrapper">
            <div className="featured-emoji">🔮</div>
          </div>
        </div>

        <div className="article-content">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Artificial Intelligence is transforming mobile applications, enabling features that were once impossible. In this guide, I'll share practical approaches to integrating AI into your mobile apps, featuring real examples from my projects including Budget Buddy and Plant Disease Detection.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Why Integrate AI in Mobile Apps?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Personalization</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI enables apps to learn user preferences and provide personalized experiences.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Automation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Automate complex tasks that would be tedious or impossible manually.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">Predictions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Make intelligent predictions based on historical data and patterns.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-3">Computer Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enable apps to "see" and understand images and videos.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Approaches to AI Integration
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">1. Cloud-Based AI APIs</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Use pre-trained models from cloud providers like Google's Gemini API, OpenAI, or AWS.
              </p>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2 text-[#7F52FF]">Pros:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• No model training required</li>
                  <li>• Always up-to-date models</li>
                  <li>• Easy to implement</li>
                </ul>
                <p className="text-sm font-semibold mt-3 mb-2 text-red-500">Cons:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Requires internet connection</li>
                  <li>• API costs</li>
                  <li>• Privacy concerns</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">2. On-Device ML (TensorFlow Lite)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Run machine learning models directly on the device for offline capabilities.
              </p>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2 text-[#7F52FF]">Pros:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Works offline</li>
                  <li>• Better privacy</li>
                  <li>• Lower latency</li>
                </ul>
                <p className="text-sm font-semibold mt-3 mb-2 text-red-500">Cons:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Limited model size</li>
                  <li>• Requires model optimization</li>
                  <li>• Device performance varies</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-[#7F52FF]">
              <h3 className="text-2xl font-bold mb-3">3. Hybrid Approach</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Combine on-device and cloud-based AI for the best of both worlds.
              </p>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use on-device ML for quick, privacy-sensitive tasks and cloud APIs for complex operations.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Real-World Example: Budget Buddy
          </h2>

          <div className="bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 p-8 rounded-2xl border border-[#7F52FF]/20 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Budget Buddy</strong> is an AI-powered budget planning app I built using Kotlin and the Gemini API. It helps users manage their finances through intelligent insights and recommendations.
            </p>
            <h4 className="font-bold text-lg mb-3 text-[#7F52FF]">Key Features:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• AI-powered spending analysis</li>
              <li>• Personalized budget recommendations</li>
              <li>• Expense categorization</li>
              <li>• Financial insights and predictions</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Implementation with Gemini API</h3>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-8">
            <pre className="text-sm"><code>{`// Gemini API Integration in Kotlin
class BudgetAnalyzer(private val apiKey: String) {
    
    private val generativeModel = GenerativeModel(
        modelName = "gemini-pro",
        apiKey = apiKey
    )
    
    suspend fun analyzeBudget(expenses: List<Expense>): BudgetInsight {
        val prompt = buildPrompt(expenses)
        
        val response = generativeModel.generateContent(prompt)
        
        return parseBudgetInsight(response.text)
    }
    
    private fun buildPrompt(expenses: List<Expense>): String {
        return """
            Analyze the following expenses and provide:
            1. Spending patterns
            2. Budget recommendations
            3. Areas to save money
            
            Expenses: \${expenses.toJson()}
        """.trimIndent()
    }
}`}</code></pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Real-World Example: Plant Disease Detection
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-2xl border-l-4 border-green-500 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Built with Flutter and TensorFlow Lite, this app detects diseases in tomato plants using on-device machine learning.
            </p>
            <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Technical Approach:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• TensorFlow Lite for on-device inference</li>
              <li>• Custom-trained CNN model</li>
              <li>• Image preprocessing pipeline</li>
              <li>• Real-time disease classification</li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://t.me/tomato_detector"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
              >
                Try on Telegram
              </a>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">TensorFlow Lite Implementation</h3>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-8">
            <pre className="text-sm"><code>{`// TensorFlow Lite in Flutter
class PlantDiseaseDetector {
  Interpreter? _interpreter;
  
  Future<void> loadModel() async {
    _interpreter = await Interpreter.fromAsset(
      'assets/plant_disease_model.tflite'
    );
  }
  
  Future<DiseaseResult> detectDisease(File imageFile) async {
    // Preprocess image
    var input = preprocessImage(imageFile);
    
    // Run inference
    var output = List.filled(10, 0.0).reshape([1, 10]);
    _interpreter!.run(input, output);
    
    // Get prediction
    return parseOutput(output);
  }
  
  List<List<List<List<double>>>> preprocessImage(File image) {
    // Resize to 224x224
    // Normalize pixel values
    // Convert to tensor format
    return processedImage;
  }
}`}</code></pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Best Practices for AI Integration
          </h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Start simple:</strong> Begin with pre-trained models before building custom solutions
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Handle errors gracefully:</strong> AI models can fail; always have fallback mechanisms
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Optimize for mobile:</strong> Compress models and use quantization for better performance
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Consider privacy:</strong> Process sensitive data on-device when possible
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Test thoroughly:</strong> AI behavior can be unpredictable; test with diverse inputs
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#7F52FF] mr-3 text-2xl">•</span>
              <div>
                <strong>Monitor performance:</strong> Track model accuracy and user feedback continuously
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7F52FF]">
            Popular AI Tools for Mobile Development
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Cloud APIs</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Google Gemini API</li>
                <li>• OpenAI GPT API</li>
                <li>• AWS Rekognition</li>
                <li>• Azure Cognitive Services</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">On-Device ML</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• TensorFlow Lite</li>
                <li>• ML Kit (Firebase)</li>
                <li>• Core ML (iOS)</li>
                <li>• ONNX Runtime</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#7F52FF]/10 to-[#6B44D8]/10 rounded-2xl border border-[#7F52FF]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#7F52FF]">The Future of AI in Mobile Apps</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              AI integration in mobile apps is no longer optional—it's becoming essential for competitive applications. As models become more efficient and devices more powerful, we'll see even more sophisticated AI features in everyday apps.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              Start experimenting with AI in your apps today. The tools are more accessible than ever, and the possibilities are endless!
            </p>
          </div>
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
