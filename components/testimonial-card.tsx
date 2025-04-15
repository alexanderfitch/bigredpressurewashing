import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export default function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="mb-4 text-gray-600">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  )
}
