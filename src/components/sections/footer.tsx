import Link from 'next/link'

export function Footer() {
  return (
    <footer className="text-center py-8" style={{ backgroundColor: '#F6F4F0' }}>
      <p className="text-gray-600 dark:text-gray-400">A product by Donos ©</p>
      <div className="mt-4 space-x-4">
        <Link
          href="/privacy-policy"
          className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  )
}