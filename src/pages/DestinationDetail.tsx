import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, ArrowRight, MapPin, Calendar, Star } from 'lucide-react'
import { getCountryById } from '../data/destinations'

gsap.registerPlugin(ScrollTrigger)

export default function DestinationDetail() {
  const { countryId } = useParams<{ countryId: string }>()
  const country = getCountryById(countryId || '')

  useEffect(() => {
    if (!country) return
    
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
  }, [country])

  if (!country) {
    return <Navigate to="/destinations" replace />
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={country.image} 
          alt={country.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-[8vw]">
          <Link 
            to="/destinations" 
            className="absolute top-4 left-4 md:top-8 md:left-[8vw] flex items-center gap-2 text-white/80 hover:text-white"
          >
            <ArrowLeft size={18} /> Back to Destinations
          </Link>
          
          <span className="eyebrow mb-4 text-[#D4A03A]">Destination</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            {country.name}
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            {country.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            {country.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="eyebrow mb-2 block">Places to Visit</span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#F7F2EA]">
                Explore {country.name}
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {country.places.map((place) => (
              <div 
                key={place.id}
                className="fade-section opacity-0 translate-y-8 group"
              >
                <Link 
                  to={`/destinations/${country.id}/${place.id}`}
                  className="block bg-[#1a1410] rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-[#D4A03A] text-sm mb-2">
                        <Calendar size={14} />
                        <span>Best: {place.bestTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-2">
                      {place.name}
                    </h3>
                    <p className="text-[#F7F2EA]/60 text-sm line-clamp-2 mb-4">
                      {place.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {place.highlights.slice(0, 3).map((highlight, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-[#D4A03A]/10 text-[#D4A03A] text-xs rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="text-[#D4A03A]" size={14} fill="#D4A03A" />
                        <span className="text-[#F7F2EA]/80 text-sm">
                          {place.packages.length} packages
                        </span>
                      </div>
                      <span className="flex items-center gap-2 text-[#D4A03A] text-sm font-medium">
                        View Packages <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-6">
              Planning Your {country.name} Safari
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#F7F2EA] mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-[#D4A03A]" /> Getting There
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  International flights arrive at major airports. We arrange all internal transfers and flights.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#F7F2EA] mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-[#D4A03A]" /> Best Time to Visit
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  Each destination has its optimal season. Check individual places for specific timing recommendations.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Plan Your {country.name} Safari <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
