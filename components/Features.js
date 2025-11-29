'use client'

import { Sparkles, CreditCard, BarChart3, Package } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: 'Curated Collections',
      description: 'Hand-picked artworks vetted by our expert curators to ensure high value and quality.'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Encrypted transactions and escrow protection for both buyers and sellers.'
    },
    {
      icon: BarChart3,
      title: 'Artist Dashboard',
      description: 'Powerful analytics and tools to manage your portfolio and sales effortlessly.'
    },
    {
      icon: Package,
      title: 'Worldwide Shipping',
      description: 'Insured global delivery with specialized handling for fine art pieces.'
    }
  ]

  return (
    <section id="Features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Why choose Artify?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We bridge the gap between artists and collectors with a seamless, premium experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}