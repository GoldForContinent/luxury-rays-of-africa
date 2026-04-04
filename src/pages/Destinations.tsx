import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Compass, Palmtree, Mountain, Sun } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const easternAfrica = [
  { name: 'Kenya', path: '/kenya-safaris', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop', description: 'Masai Mara, Amboseli & more' },
  { name: 'Tanzania', path: '/tanzania-safaris', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop', description: 'Serengeti, Ngorongoro & more' },
  { name: 'Uganda', path: '/uganda-safaris', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop', description: 'Gorilla trekking & more' },
  { name: 'Rwanda', path: '/rwandasafaris', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop', description: 'Mountain gorillas & more' },
]

const southernAfrica = [
  { name: 'Botswana', path: '/botswana-safaris', image: 'https://images.unsplash.com/photo-1534177616072-ef7dc12044f9?w=800&auto=format&fit=crop', description: 'Okavango Delta & more' },
  { name: 'Zambia', path: '/zambia-safaris', image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&auto=format&fit=crop', description: 'Walking safaris & more' },
  { name: 'Zimbabwe', path: '/zimbabwe-safaris', image: 'https://images.unsplash.com/photo-1584559586116-b3611d9778b9?w=800&auto=format&fit=crop', description: 'Victoria Falls & more' },
  { name: 'Namibia', path: '/namibia-safaris', image: 'https://images.unsplash.com/photo-1509316975850-ff9b5deb2cd4?w=800&auto=format&fit=crop', description: 'Desert landscapes & more' },
  { name: 'South Africa', path: '/south-africa-safaris', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop', description: 'Kruger & more' },
]

const islandsAndBeaches = [
  { name: 'Zanzibar', path: '/zanzibar-island', image: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&auto=format&fit=crop', description: 'Spice island paradise' },
  { name: 'Lamu', path: '/lamu-island', image: 'https://images.unsplash.com/photo-1523639772472-c8d1a731c9d9?w=800&auto=format&fit=crop', description: 'Swahili culture' },
  { name: 'Mafia', path: '/mafia-island', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&auto=format&fit=crop', description: 'Marine sanctuary' },
  { name: 'Nosy Be', path: '/nosy-be-island', image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&auto=format&fit=crop', description: 'Madagascar beaches' },
]

const regionData = [
  {
    id: 'eastern',
    title: 'East Africa',
    subtitle: 'The Birthplace of Safari',
    description: 'Experience the original safari with world-famous parks, the Great Migration, and unforgettable wildlife encounters.',
    icon: <Compass className="w-8 h-8" />,
    destinations: easternAfrica,
    accentColor: 'text-[#D4A03A]'
  },
  {
    id: 'southern',
    title: 'Southern Africa',
    subtitle: 'Wild & Luxurious',
    description: 'Discover exclusive wildlife destinations from the Okavango Delta to Victoria Falls.',
    icon: <Mountain className="w-8 h-8" />,
    destinations: southernAfrica,
    accentColor: 'text-[#E07A5F]'
  },
  {
    id: 'islands',
    title: 'Islands & Beaches',
    subtitle: 'Paradise Found',
    description: 'Extend your safari with pristine beaches and rich cultural experiences.',
    icon: <Palmtree className="w-8 h-8" />,
    destinations: islandsAndBeaches,
    accentColor: 'text-[#81B29A]'
  }
]

export default function Destinations() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section.querySelectorAll('.destination-card'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop" 
            alt="African Safari" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Discover</span>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            DESTINATIONS
          </h1>
          <p className="text-white/80 max-w-2xl text-lg md:text-xl mb-8">
            Explore our curated selection of safari destinations across Africa. From the iconic savannas of East Africa to the pristine beaches of the Indian Ocean.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform">
              Plan Your Safari <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Regions */}
      {regionData.map((region) => (
        <section 
          key={region.id}
          ref={addToRefs}
          className="py-24 px-4 md:px-[8vw] bg-[#1a1410]"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className={`flex items-center justify-center gap-3 mb-4 ${region.accentColor}`}>
                {region.icon}
                <span className="font-mono text-sm uppercase tracking-[0.3em]">{region.subtitle}</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
                {region.title}
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                {region.description}
              </p>
            </div>

            {/* Destination Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {region.destinations.map((dest, idx) => (
                <Link 
                  key={idx}
                  to={dest.path}
                  className="destination-card group relative h-[350px] rounded-2xl overflow-hidden"
                >
                  <img 
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[#D4A03A] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-white/70 text-sm">{dest.description}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-[#D4A03A] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Explore</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sun className="w-8 h-8 text-[#D4A03A]" />
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#D4A03A]">Ready to Go</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            READY FOR YOUR SAFARI?
          </h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
            Let our expert team help you craft the perfect African safari experience tailored to your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan Your Safari <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
