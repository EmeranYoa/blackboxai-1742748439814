import Image from 'next/image'

export default function MyList() {
  const myListItems = [
    {
      id: 1,
      title: "The Witcher",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8",
      rating: "TV-MA",
      year: "2019",
      seasons: "2 Seasons"
    },
    {
      id: 2,
      title: "Money Heist",
      image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea",
      rating: "TV-MA",
      year: "2017",
      seasons: "5 Seasons"
    },
    {
      id: 3,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      rating: "TV-MA",
      year: "2016",
      seasons: "6 Seasons"
    }
  ]

  return (
    <div className="px-12 py-8">
      <h1 className="text-4xl font-bold mb-8">My List</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {myListItems.map((item) => (
          <div key={item.id} className="group relative">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform group-hover:scale-110 duration-300"
              />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.rating} • {item.year} • {item.seasons}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}