'use client'

import { useState } from 'react'
import Image from 'next/image'
import VideoPlayer from './VideoPlayer'

interface DetailViewProps {
  item: {
    id: number
    title: string
    image: string
    description?: string
    rating?: string
    year?: string
    duration?: string
    seasons?: string
    match?: string
    genre?: string
    cast?: string[]
    similar?: {
      id: number
      title: string
      image: string
    }[]
  }
  onClose: () => void
}

export default function DetailView({ item, onClose }: DetailViewProps) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
      <div className="relative min-h-screen max-w-7xl mx-auto p-6">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-50"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>

        {/* Content */}
        <div className="bg-netflix-black rounded-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-[60vh]">
            {showVideo ? (
              <VideoPlayer thumbnailUrl={item.image} />
            ) : (
              <div className="relative h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute bottom-8 left-8 bg-white text-black px-8 py-3 rounded-md hover:bg-opacity-80 flex items-center gap-2 font-semibold transition-all"
                >
                  <i className="fas fa-play"></i> Play
                </button>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">{item.title}</h1>
                <div className="flex items-center gap-4 text-sm">
                  {item.match && <span className="text-green-500">{item.match}</span>}
                  {item.year && <span>{item.year}</span>}
                  {item.rating && <span>{item.rating}</span>}
                  {item.seasons && <span>{item.seasons}</span>}
                  {item.duration && <span>{item.duration}</span>}
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

            {/* Description */}
            {item.description && (
              <p className="text-lg text-gray-200 max-w-3xl">
                {item.description}
              </p>
            )}

            {/* Cast */}
            {item.cast && (
              <div className="space-y-2">
                <h3 className="text-gray-400">Cast:</h3>
                <p className="text-sm">{item.cast.join(', ')}</p>
              </div>
            )}

            {/* Genre */}
            {item.genre && (
              <div className="space-y-2">
                <h3 className="text-gray-400">Genre:</h3>
                <p className="text-sm">{item.genre}</p>
              </div>
            )}

            {/* Similar Titles */}
            {item.similar && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">More Like This</h3>
                <div className="grid grid-cols-3 gap-4">
                  {item.similar.map((similar) => (
                    <div key={similar.id} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={similar.image}
                        alt={similar.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-2 left-2">
                          <h4 className="text-sm font-semibold">{similar.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}