import Link from "next/link"
import { Home, Building2, Droplets, Fence, WallpaperIcon as Wall } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="h-6 w-6" />
      case "Building2":
        return <Building2 className="h-6 w-6" />
      case "Droplets":
        return <Droplets className="h-6 w-6" />
      case "Fence":
        return <Fence className="h-6 w-6" />
      case "Wall":
        return <Wall className="h-6 w-6" />
      default:
        return <Home className="h-6 w-6" />
    }
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
        {getIcon(icon)}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <Link href={href} className="inline-flex items-center text-brand-red hover:text-brand-darkRed">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
