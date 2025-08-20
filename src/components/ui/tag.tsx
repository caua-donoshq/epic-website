interface TagProps {
  category: string
  className?: string
}

const getCategoryDotColor = (category: string) => {
  switch (category?.toLowerCase()) {
    case 'backend':
      return 'bg-blue-500'
    case 'security':
      return 'bg-red-500'
    case 'frontend':
      return 'bg-green-500'
    case 'performance':
      return 'bg-purple-500'
    case 'tests':
      return 'bg-yellow-500'
    case 'setup':
      return 'bg-gray-500'
    default:
      return 'bg-gray-500'
  }
}

export function Tag({ category, className = '' }: TagProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-medium bg-white text-gray-700 text-[8px] ${className}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${getCategoryDotColor(category)}`}></div>
      {category}
    </span>
  )
}