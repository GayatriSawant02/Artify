'use client'

import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
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
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Connecting the world's best talented artists with collectors who value unique, meaningful art worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Marketplace</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  All Artworks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  NFT Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Artist Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            © 2024 Artify. Crafted for Art. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}