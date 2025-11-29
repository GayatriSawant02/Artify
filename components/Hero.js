'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-pink-50 via-pink-50 to-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-600 mb-4 font-medium">
              The Modern Art Marketplace
            </p>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Discover art that speaks to your soul.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Explore curated collections from emerging artists worldwide. Buy, sell, and collect unique pieces for your home or gallery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                Browse Gallery
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition">
                Become a Seller
              </button>
            </div>
          </div>

          {/* Right Content - Artwork Display */}
          <div className="relative h-96 lg:h-[500px]">
            <div className="relative z-10 h-full">
              {/* Abstract Art */}
              <div className="absolute top-0 left-0 w-64 h-64 transform -rotate-6">
                <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/Abstract Art.jpeg"
                    alt="Abstract artwork"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              </div>
              
              {/* Minimalist Art */}
              <div className="absolute top-16 right-0 w-56 h-56 transform rotate-6">
                <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/Minimalist Art.jpeg"
                    alt="Minimalist artwork"
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
              </div>
              
              {/* Landscape Art */}
              <div className="absolute bottom-0 right-12 w-64 h-48 transform rotate-3">
                <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/Landscape Art.jpeg"
                    alt="Landscape artwork"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}