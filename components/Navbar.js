'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Artify Logo"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="text-xl font-serif font-semibold">Artify</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Home
            </a>
            <a href="#Features" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Features
            </a>
            <a href="#Highlights" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Highlights
            </a>
            <a href="#Pricing" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Pricing
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Log In
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}