'use client'

import Image from 'next/image'
import VideoPlayer from '@/components/VideoPlayer'

export default function Home() {
  const featuredContent = {
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    thumbnailUrl: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
    rating: "TV-14",
    year: "2024",
    seasons: "4 Seasons"
  }

  const trendingShows = [
    {
      id: 1,
      title: "Breaking Bad",
      image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea",
      category: "Intense • Crime • Drama"
    },
    {
      id: 2,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      category: "Royal • Drama • Historical"
    },
    {
      id: 3,
      title: "Bridgerton",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
      category: "Romance • Period Drama"
    }
  ]

  const popularNow = [
    {
      id: 1,
      title: "The Witcher",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
      match: "98% Match"
    },
    {
      id: 2,
      title: "Wednesday",
      image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea",
      match: "95% Match"
    },
    {
      id: 3,
      title: "Dark",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      match: "96% Match"
    }
  ]

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Section with Video */}
      <div className="relative h-[85vh] w-full">
        <VideoPlayer thumbnailUrl={featuredContent.thumbnailUrl} />
        <div className="absolute bottom-[20%] left-0 p-12 space-y-4 z-20">
          <h1 className="text-7xl font-bold max-w-2xl">{featuredContent.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-red-600 font-semibold">{featuredContent.rating}</span>
            <span>{featuredContent.year}</span>
            <span>{featuredContent.seasons}</span>
            <span className="px-2 py-1 bg-red-600 rounded text-xs">TOP 10</span>
          </div>
          <p className="max-w-2xl text-lg text-gray-200">{featuredContent.description}</p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-white text-black rounded-md hover:bg-opacity-80 flex items-center gap-2 font-semibold transition-all">
              <i className="fas fa-play"></i> Play
            </button>
            <button className="px-8 py-3 bg-[rgba(255,255,255,0.1)] rounded-md hover:bg-[rgba(255,255,255,0.2)] flex items-center gap-2 font-semibold transition-all">
              <i className="fas fa-info-circle"></i> More Info
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-20 -mt-32">
        {/* Trending Now Section */}
        <section className="px-12 py-8">
          <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingShows.map((show) => (
              <div key={show.id} className="group relative">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                    <p className="text-sm text-gray-300">{show.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular on Netflix Section */}
        <section className="px-12 py-8">
          <h2 className="text-2xl font-bold mb-6">Popular on Netflix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {popularNow.map((show) => (
              <div key={show.id} className="group relative">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">{show.match}</span>
                      <span className="text-sm">New</span>
                    </div>
                    <h3 className="text-xl font-bold mt-1">{show.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
