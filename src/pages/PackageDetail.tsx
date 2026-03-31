import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Check, Calendar, MapPin, Clock, Users, DollarSign, Package as PackageIcon } from 'lucide-react'
import { allFeaturedPackages } from '../data/destinations'

gsap.registerPlugin(ScrollTrigger)

export default function PackageDetail() {
  const { packageId } = useParams<{ packageId: string }>()
  const [activeDay, setActiveDay] = useState<number | null>(null)
  
  const pkg = allFeaturedPackages.find(p => p.id === packageId)

  useEffect(() => {
    if (!pkg) return
    
    const sections = document.querySelectorAll('.fade-section')
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(section, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        },
        once: true
      })
    })
  }, [pkg])

  if (!pkg) {
    return <Navigate to="/packages" replace />
  }

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      family: 'Family Safari',
      solo: 'Solo Traveler',
      group: 'Group Package',
      honeymoon: 'Honeymoon Safari',
      luxury: 'Luxury Safari',
      migration: 'Migration Safari'
    }
    return labels[type] || 'Safari Package'
  }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      family: '#FF6B6B',
      solo: '#4A90E2',
      group: '#556B2F',
      honeymoon: '#FF6B9D',
      luxury: '#D4A574',
      migration: '#E67E22'
    }
    return colors[type] || '#D4A574'
  }

  // Parse itinerary if it exists, otherwise create default
  const itinerary = pkg.itinerary && typeof pkg.itinerary === 'string'
    ? pkg.itinerary.split('\n').filter(line => line.trim().startsWith('Day'))
    : pkg.itinerary || []

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/packages/${packageId}-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        <Link 
          to="/packages" 
          className="absolute top-8 left-[8vw] z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> Back to Packages
        </Link>

        <div className="absolute inset-0 flex flex-col justify-end p-[8vw]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span 
                className="px-4 py-2 rounded-full text-white text-sm font-semibold"
                style={{ backgroundColor: getTypeColor(pkg.type) }}
              >
                {getTypeLabel(pkg.type)}
              </span>
              <span className="px-4 py-2 rounded-full text-white text-sm font-semibold bg-[#2B1E1A]">
                ★★★★★ Best Seller
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
              {pkg.name}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              {pkg.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-[#2B1E1A] border-b border-[#D4A574]/20 px-[8vw] py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl">
          <div className="fade-section" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-[#D4A574]" size={20} />
              <span className="text-[#F7F2EA]/60 text-sm">Duration</span>
            </div>
            <p className="font-semibold text-white">{pkg.duration}</p>
          </div>

          <div className="fade-section" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="text-[#D4A574]" size={20} />
              <span className="text-[#F7F2EA]/60 text-sm">From Price</span>
            </div>
            <p className="font-semibold text-white">${pkg.price.toLocaleString()}</p>
          </div>

          <div className="fade-section" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="flex items-center gap-3 mb-2">
              <users className="text-[#D4A574]" size={20} />
              <span className="text-[#F7F2EA]/60 text-sm">Group Size</span>
            </div>
            <p className="font-semibold text-white">2-8 people</p>
          </div>

          <div className="fade-section" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-[#D4A574]" size={20} />
              <span className="text-[#F7F2EA]/60 text-sm">Best Time</span>
            </div>
            <p className="font-semibold text-white">Year-round</p>
          </div>

          <div className="fade-section" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="flex items-center gap-3 mb-2">
              <PackageIcon className="text-[#D4A574]" size={20} />
              <span className="text-[#F7F2EA]/60 text-sm">Type</span>
            </div>
            <p className="font-semibold text-white capitalize">{pkg.type}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#1A120E] px-[8vw] py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Left Column - Itinerary */}
          <div className="md:col-span-2">
            <div className="fade-section" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h2 className="font-display text-4xl font-bold text-[#F7F2EA] mb-8">
                Your Safari Journey
              </h2>

              {/* Itinerary */}
              <div className="space-y-4 mb-12">
                {Array.isArray(itinerary) && itinerary.length > 0 ? (
                  itinerary.map((day: string | any, index: number) => {
                    const dayTitle = typeof day === 'string' 
                      ? day 
                      : `${day.day}: ${day.location}`
                    
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveDay(activeDay === index ? null : index)}
                        className="w-full text-left bg-[#2B1E1A] border border-[#D4A574]/20 rounded-lg p-6 hover:border-[#D4A574]/50 hover:bg-[#3a2a23] transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#D4A574] flex items-center justify-center font-bold text-[#1A120E]">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-[#F7F2EA]">{dayTitle}</h4>
                              {typeof day === 'object' && day.activities && (
                                <p className="text-sm text-[#F7F2EA]/60 mt-1">
                                  {Array.isArray(day.activities) 
                                    ? day.activities.join(' • ') 
                                    : day.activities}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-[#D4A574]">
                            {activeDay === index ? '−' : '+'}
                          </div>
                        </div>
                        
                        {activeDay === index && typeof day === 'object' && (
                          <div className="mt-4 pt-4 border-t border-[#D4A574]/20 text-[#F7F2EA]/80">
                            {day.activities && Array.isArray(day.activities) && (
                              <ul className="space-y-2">
                                {day.activities.map((activity: string, i: number) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <Check size={18} className="text-[#D4A574] mt-0.5 flex-shrink-0" />
                                    <span>{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </button>
                    )
                  })
                ) : (
                  <div className="text-[#F7F2EA]/60">No itinerary details available</div>
                )}
              </div>
            </div>

            {/* Inclusions */}
            <div className="fade-section mt-12" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h3 className="font-display text-2xl font-bold text-[#F7F2EA] mb-6">
                What's Included
              </h3>
              <ul className="space-y-3">
                {pkg.includes && Array.isArray(pkg.includes) ? (
                  pkg.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-[#F7F2EA]/80">
                      <Check size={20} className="text-[#D4A574] flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-[#F7F2EA]/60">No items listed</li>
                )}
              </ul>
            </div>

            {/* Exclusions */}
            {pkg.excludes && (
              <div className="fade-section mt-8" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <h3 className="font-display text-2xl font-bold text-[#F7F2EA] mb-6">
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {Array.isArray(pkg.excludes) ? (
                    pkg.excludes.map((item: string, index: number) => (
                      <li key={index} className="text-[#F7F2EA]/60 flex items-start gap-3">
                        <span className="text-[#D4A574]">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-[#F7F2EA]/60">No exclusions listed</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Booking CTA */}
          <div className="fade-section" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="bg-[#2B1E1A] border border-[#D4A574]/30 rounded-lg p-8 sticky top-32">
              <div className="mb-8">
                <p className="text-[#F7F2EA]/60 text-sm mb-2">Starting from</p>
                <p className="text-5xl font-bold text-[#D4A574] mb-2">
                  ${pkg.price.toLocaleString()}
                </p>
                <p className="text-[#F7F2EA]/60 text-sm">per person</p>
              </div>

              <div className="space-y-3 mb-8">
                <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#E67E22] hover:from-[#FF5252] hover:to-[#D66E1A] text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105">
                  Book Now
                </button>
                <button className="w-full bg-[#D4A574]/20 hover:bg-[#D4A574]/30 text-[#D4A574] font-semibold py-4 rounded-lg transition-all">
                  Request Custom Itinerary
                </button>
              </div>

              <div className="border-t border-[#D4A574]/20 pt-8">
                <h4 className="font-semibold text-[#F7F2EA] mb-4">Why Choose This Safari?</h4>
                <ul className="space-y-3 text-[#F7F2EA]/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#D4A574] mt-1 flex-shrink-0" />
                    <span>Expert local guides with 15+ years experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#D4A574] mt-1 flex-shrink-0" />
                    <span>5-star accommodations in prime safari locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#D4A574] mt-1 flex-shrink-0" />
                    <span>Small group sizes for intimate experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#D4A574] mt-1 flex-shrink-0" />
                    <span>Sustainable tourism practices</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/contact"
                className="block w-full text-center mt-8 text-[#D4A574] hover:text-[#F7F2EA] transition-colors font-semibold"
              >
                Have Questions? Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 px-[8vw]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/cta-safari.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let our safari experts customize this package to match your dreams exactly.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#E67E22] hover:from-[#FF5252] hover:to-[#D66E1A] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            Start Planning Now →
          </Link>
        </div>
      </section>
    </div>
  )
}
