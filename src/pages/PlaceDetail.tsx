import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Users, User, UsersRound, Check, Calendar, MapPin, Star, Clock } from 'lucide-react'
import { getPlaceById, type Package } from '../data/destinations'

gsap.registerPlugin(ScrollTrigger)

export default function PlaceDetail() {
  const { countryId, placeId } = useParams<{ countryId: string; placeId: string }>()
  const place = getPlaceById(countryId || '', placeId || '')
  const [selectedType, setSelectedType] = useState<'all' | 'family' | 'solo' | 'group'>('all')

  useEffect(() => {
    if (!place) return
    
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
  }, [place])

  if (!place) {
    return <Navigate to="/destinations" replace />
  }

  const filteredPackages = selectedType === 'all' 
    ? place.packages 
    : place.packages.filter(pkg => pkg.type === selectedType)

  const getPackageIcon = (type: string) => {
    switch (type) {
      case 'family': return <Users className="text-[#D4A03A]" size={20} />
      case 'solo': return <User className="text-[#D4A03A]" size={20} />
      case 'group': return <UsersRound className="text-[#D4A03A]" size={20} />
      default: return <Users className="text-[#D4A03A]" size={20} />
    }
  }

  const getPackageTypeLabel = (type: string) => {
    switch (type) {
      case 'family': return 'Family Package'
      case 'solo': return 'Solo Traveler'
      case 'group': return 'Group Package'
      default: return 'Package'
    }
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-[8vw]">
          <Link 
            to={`/destinations/${countryId}`} 
            className="absolute top-4 left-4 md:top-8 md:left-[8vw] flex items-center gap-2 text-white/80 hover:text-white"
          >
            <ArrowLeft size={18} /> Back to {countryId?.charAt(0).toUpperCase()}{countryId?.slice(1)}
          </Link>
          
          <span className="eyebrow mb-4 text-[#D4A03A]">{countryId?.charAt(0).toUpperCase()}{countryId?.slice(1)}</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            {place.name}
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            {place.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar size={18} className="text-[#D4A03A]" />
              <span>Best time: {place.bestTime}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star size={18} className="text-[#D4A03A]" />
              <span>{place.packages.length} packages available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {place.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-[#D4A03A]/10 text-[#D4A03A] rounded-full text-sm font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow mb-2 block">Safari Packages</span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#F7F2EA]">
                Choose Your Experience
              </h2>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Packages' },
                { key: 'family', label: 'Family' },
                { key: 'solo', label: 'Solo' },
                { key: 'group', label: 'Group' },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedType(filter.key as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === filter.key
                      ? 'bg-[#D4A03A] text-[#2B1E1A]'
                      : 'bg-white/10 text-[#F7F2EA]/80 hover:bg-white/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredPackages.map((pkg: Package) => (
              <div 
                key={pkg.id}
                className="fade-section opacity-0 translate-y-8"
              >
                <div className="glass-card rounded-3xl overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                          {getPackageIcon(pkg.type)}
                        </div>
                        <div>
                          <span className="text-[#D4A03A] text-xs font-medium uppercase tracking-wider">
                            {getPackageTypeLabel(pkg.type)}
                          </span>
                          <h3 className="font-display font-bold text-lg text-[#F7F2EA]">
                            {pkg.name}
                          </h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-display font-bold text-2xl text-[#D4A03A]">
                          Ksh {(pkg.price * 130).toLocaleString()}
                        </p>
                        <p className="text-[#F7F2EA]/50 text-xs">per person</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#F7F2EA]/60 text-sm mb-4">
                      <Clock size={14} />
                      <span>{pkg.duration}</span>
                    </div>
                    
                    <p className="text-[#F7F2EA]/70 text-sm mb-4">
                      {pkg.description}
                    </p>
                    
                    <div className="mb-6">
                      <p className="text-[#F7F2EA]/50 text-xs uppercase tracking-wider mb-2">
                        What's Included
                      </p>
                      <ul className="space-y-1">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-[#F7F2EA]/80 text-sm">
                            <Check size={14} className="text-[#D4A03A]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to="/contact"
                      className="btn-primary w-full text-center block"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#F7F2EA]/60">
                No packages available for this filter. Try selecting a different option.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto text-[#D4A03A] mb-4" size={40} />
          <h2 className="font-display font-bold text-2xl md:text-4xl text-[#F7F2EA] mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-[#F7F2EA]/60 mb-8">
            We can tailor any package to your specific needs, adding extra days, combining destinations, or adjusting activities.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Request Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
