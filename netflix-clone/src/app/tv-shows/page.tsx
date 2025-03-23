import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TV Shows | Netflix',
  description: 'Watch Netflix original TV shows, award-winning series, popular dramas, and more.',
  openGraph: {
    title: 'TV Shows | Netflix',
    description: 'Watch Netflix original TV shows, award-winning series, popular dramas, and more.',
    type: 'website'
  }
}

interface Show {
  id: string
  title: string
  image: string
  rating: string
  year: string
  seasons: string
  match: string
}

interface Category {
  title: string
  shows: Show[]
}

const categories: Category[] = [
  {
    title: "Popular on Netflix",
    shows: [
      {
        id: "stranger-things",
        title: "Stranger Things",
        image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
        rating: "TV-14",
        year: "2024",
        seasons: "4 Seasons",
        match: "98% Match"
      },
      {
        id: "breaking-bad",
        title: "Breaking Bad",
        image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea",
        rating: "TV-MA",
        year: "2008",
        seasons: "5 Seasons",
        match: "95% Match"
      },
      {
        id: "the-crown",
        title: "The Crown",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
        rating: "TV-MA",
        year: "2016",
        seasons: "6 Seasons",
        match: "96% Match"
      }
    ]
  },
  {
    title: "Trending Now",
    shows: [
      {
        id: "wednesday",
        title: "Wednesday",
        image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
        rating: "TV-14",
        year: "2022",
        seasons: "1 Season",
        match: "97% Match"
      }
    ]
  }
]

export default function TVShows() {
  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Banner */}
      <div className="relative h-[50vh] w-full mb-8">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1594908900066-3f47337549d8"
            alt="Featured Show"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-0 left-0 p-12 space-y-4 bg-gradient-to-t from-netflix-black via-netflix-black/80 to-transparent w-full pt-40">
          <h1 className="text-6xl font-bold">TV Shows</h1>
          <p className="text-xl text-gray-200">Watch award-winning Netflix originals, TV shows, and more</p>
        </div>
      </div>

      {/* Categories */}
      {categories.map((category, index) => (
        <section key={index} className="px-12 py-8">
          <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.shows.map((show) => (
              <Link 
                key={show.id}
                href={`/shows/${show.id}`}
                className="group relative"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                    <div className="flex items-center gap-2 text-sm mt-2">
                      <span className="text-green-500">{show.match}</span>
                      <span className="text-gray-300">{show.rating}</span>
                      <span className="text-gray-300">{show.year}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{show.seasons}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Genre Filter */}
      <div className="fixed top-20 right-12 z-10">
        <button className="px-4 py-2 bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2">
          <span>Genres</span>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  )
}