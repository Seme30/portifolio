export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#7F52FF]"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Loading...</p>
      </div>
    </div>
  )
}
