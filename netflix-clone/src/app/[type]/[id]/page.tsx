import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import VideoPlayer from '@/components/VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'

interface ContentItem {
  id: string
  title: string
  image: string
  rating: string
  year: string
  duration?: string
  seasons?: string
  match: string
  description: string
  genre: string
  cast: string[]
  similar: {
    id: string
    title: string
    image: string
  }[]
}

interface ContentDatabase {
  movies: Record<string, ContentItem>
  shows: Record<string, ContentItem>
}

// This is a sample database - in a real app, this would come from your actual database
const contentDatabase: ContentDatabase = {
  movies: {
    "inception": {
      id: "inception",
      title: "Inception",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
      rating: "PG-13",
      year: "2010",
      duration: "2h 28m",
      match: "95% Match",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      genre: "Action • Sci-Fi • Thriller",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      similar: [
        {
          id: "the-matrix",
          title: "The Matrix",
          image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
        },
        {
          id: "interstellar",
          title: "Interstellar",
          image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea"
        }
      ]
    }
  },
  shows: {
    "stranger-things": {
      id: "stranger-things",
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
      rating: "TV-14",
      year: "2024",
      seasons: "4 Seasons",
      match: "98% Match",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      genre: "Sci-Fi • Horror • Drama",
      cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
      similar: [
        {
          id: "the-oa",
          title: "The OA",
          image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea"
        },
        {
          id: "dark",
          title: "Dark",
          image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
        }
      ]
    }
  }
}

type Props = {
  params: {
    type: 'movies' | 'shows'
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = contentDatabase[params.type]?.[params.id]
  
  if (!content) {
    return {
      title: 'Not Found | Netflix',
      description: 'The requested content was not found.'
    }
  }

  return {
    title: `${content.title} | Netflix`,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      images: [content.image],
      type: params.type === 'movies' ? 'video.movie' : 'video.episode'
    }
  }
}

export default function DetailPage({ params }: Props) {
  const content = contentDatabase[params.type]?.[params.id]

  if (!content) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Section with Video */}
      <div className="relative h-[70vh] w-full">
        <VideoPlayer thumbnailUrl={content.image} />
        <Link 
          href={`/${params.type}`}
          className="absolute top-4 left-4 z-50 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>

      {/* Content Details */}
      <div className="relative -mt-32 z-20 px-12 pb-12">
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">{content.title}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-green-500">{content.match}</span>
                <span>{content.year}</span>
                <span>{content.rating}</span>
                {content.seasons && <span>{content.seasons}</span>}
                {content.duration && <span>{content.duration}</span>}
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 rounded-full border border-white/40 hover:border-white/60 transition-all">
                <i className="fas fa-plus"></i>
              </button>
              <button className="p-3 rounded-full border border-white/40 hover:border-white/60 transition-all">
                <i className="fas fa-thumbs-up"></i>
              </button>
            </div>
          </div>

          <p className="text-lg text-gray-200 max-w-3xl">
            {content.description}
          </p>

          <div className="space-y-2">
            <h3 className="text-gray-400">Cast:</h3>
            <p className="text-sm">{content.cast.join(', ')}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-gray-400">Genre:</h3>
            <p className="text-sm">{content.genre}</p>
          </div>

          {/* Similar Titles */}
          <div className="space-y-4 mt-12">
            <h3 className="text-2xl font-bold">More Like This</h3>
            <div className="grid grid-cols-3 gap-4">
              {content.similar.map((similar) => (
                <Link 
                  key={similar.id}
                  href={`/${params.type}/${similar.id}`}
                  className="relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={similar.image}
                    alt={similar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2">
                      <h4 className="text-sm font-semibold">{similar.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}