'use client'

import { Check } from 'lucide-react'

export default function PricingPlans() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      features: [
        '3 Portfolio uploads',
        'Basic profile',
        'Standard commission'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited uploads',
        'Analytics dashboard',
        'Reduced commission',
        'Priority support'
      ],
      cta: 'Try for Free',
      popular: true
    },
    {
      name: 'Gallery',
      price: '$99',
      period: '/month',
      features: [
        'Curated exhibition',
        'Team user manager',
        'Zero commission'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section id="Pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Plans for Artists
          </h2>
          <p className="text-gray-600 text-lg">
            Start your journey to scale your art business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-white border-2 border-black shadow-2xl scale-105' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 text-lg">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}