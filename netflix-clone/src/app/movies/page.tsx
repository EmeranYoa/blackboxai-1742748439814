import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Movies | Netflix',
  description: 'Watch award-winning Netflix original movies, from action and adventure to comedies, dramas, and thrillers.',
  openGraph: {
    title: 'Movies | Netflix',
    description: 'Watch award-winning Netflix original movies, from action and adventure to comedies, dramas, and thrillers.',
    type: 'website'
  }
}

interface Movie {
  id: string
  title: string
  image: string
  rating: string
  year: string
  duration: string
  match: string
}

interface Category {
  title: string
  movies: Movie[]
}

const categories: Category[] = [
  {
    title: "New Releases",
    movies: [
      {
        id: "inception",
        title: "Inception",
        image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
        rating: "PG-13",
        year: "2010",
        duration: "2h 28m",
        match: "95% Match"
      },
      {
        id: "the-dark-knight",
        title: "The Dark Knight",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
        rating: "PG-13",
        year: "2008",
        duration: "2h 32m",
        match: "98% Match"
      },
      {
        id: "interstellar",
        title: "Interstellar",
        image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea",
        rating: "PG-13",
        year: "2014",
        duration: "2h 49m",
        match: "94% Match"
      }
    ]
  },
  {
    title: "Award-Winning Films",
    movies: [
      {
        id: "the-godfather",
        title: "The Godfather",
        image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
        rating: "R",
        year: "1972",
        duration: "2h 55m",
        match: "99% Match"
      }
    ]
  }
]

export default function Movies() {
  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Banner */}
      <div className="relative h-[50vh] w-full mb-8">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1"
            alt="Featured Movie"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-0 left-0 p-12 space-y-4 bg-gradient-to-t from-netflix-black via-netflix-black/80 to-transparent w-full pt-40">
          <h1 className="text-6xl font-bold">Movies</h1>
          <p className="text-xl text-gray-200">From award-winning classics to the latest blockbusters</p>
        </div>
      </div>

      {/* Categories */}
      {categories.map((category, index) => (
        <section key={index} className="px-12 py-8">
          <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.movies.map((movie) => (
              <Link 
                key={movie.id}
                href={`/movies/${movie.id}`}
                className="group relative"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-sm mt-2">
                      <span className="text-green-500">{movie.match}</span>
                      <span className="text-gray-300">{movie.rating}</span>
                      <span className="text-gray-300">{movie.year}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{movie.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Filter Options */}
      <div className="fixed top-20 right-12 z-10 flex gap-4">
        <button className="px-4 py-2 bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2">
          <span>Genres</span>
          <i className="fas fa-chevron-down"></i>
        </button>
        <button className="px-4 py-2 bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2">
          <span>Sort By</span>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  )
}