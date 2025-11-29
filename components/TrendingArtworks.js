'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function TrendingArtworks() {
  const artworks = [
    {
      id: 1,
      title: 'Ethereal Morning',
      artist: 'Sarah Chen',
      price: '$1,400',
      image: '/Ethereal Morning.jpeg'
    },
    {
      id: 2,
      title: 'Wings of Rebirth',
      artist: 'Marcus Berg',
      price: '$850',
      image: '/Wings of Rebirth.jpeg'
    },
    {
      id: 3,
      title: 'Bloom of Grace',
      artist: 'Sophia Anders',
      price: '$2,400',
      image: '/Bloom of Grace.jpeg'
    },
    {
      id: 4,
      title: 'Midnight Tokyo',
      artist: 'Yuki Jin',
      price: '$950',
      image: '/Midnight Tokyo.jpeg'
    },
    {
      id: 5,
      title: 'Dreams of Harmony',
      artist: 'James Park',
      price: '$850',
      image: '/Dreams of harmony.jpeg'
    },
    {
      id: 6,
      title: 'Retro Dreams',
      artist: 'Ava Martinez',
      price: '$1,100',
      image: '/Retro Dreams.jpeg'
    }
  ]

  return (
    <section id="Highlights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3">
              Trending Artworks
            </h2>
            <p className="text-gray-600">
              Pieces garnering attention this week.
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-gray-900 font-medium hover:text-gray-700 transition">
            <span>View all collection</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Artworks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-lg mb-4 overflow-hidden transform transition-transform group-hover:scale-105 shadow-md">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {artwork.artist}
                </p>
                <p className="text-gray-900 font-semibold">
                  {artwork.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button className="md:hidden mt-8 w-full flex items-center justify-center space-x-2 text-gray-900 font-medium py-3 border-2 border-gray-200 rounded-full hover:border-gray-300 transition">
          <span>View all collection</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}