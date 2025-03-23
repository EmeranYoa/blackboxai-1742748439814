'use client'

import { useState, useRef, useEffect } from 'react'

interface VideoPlayerProps {
  thumbnailUrl: string
}

export default function VideoPlayer({ thumbnailUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showPreview, setShowPreview] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreview(false)
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log("Auto-play prevented")
        })
        setIsPlaying(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative w-full h-full group">
      {/* Video Preview Overlay */}
      {showPreview && (
        <div className="absolute inset-0 z-20 bg-black">
          <img
            src={thumbnailUrl}
            alt="Preview"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-gray-400 border-t-red-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Video Player */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          poster={thumbnailUrl}
        >
          <source 
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" 
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/20 to-transparent z-10" />
      
      {/* Video Controls */}
      <div className="absolute bottom-[35%] left-12 flex items-center gap-4 z-20">
        <button
          onClick={togglePlay}
          className="bg-white text-black px-8 py-3 rounded-md hover:bg-opacity-80 flex items-center gap-2 transition-all text-xl font-semibold"
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full hover:bg-[rgba(255,255,255,0.2)] transition-all border border-white/40"
        >
          <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-xl`}></i>
        </button>

        <div className="ml-4 text-white/70 text-sm">
          {isMuted ? 'Unmute' : 'Mute'}
        </div>
      </div>

      {/* Age Rating */}
      <div className="absolute top-[70%] right-12 z-20">
        <div className="border-2 border-white/40 px-2 py-1 text-sm">
          TV-MA
        </div>
      </div>
    </div>
  )
}