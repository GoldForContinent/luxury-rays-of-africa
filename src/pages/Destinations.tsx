import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin } from 'lucide-react'
import { destinations } from '../data/destinations'

gsap.registerPlugin(ScrollTrigger)

export default function Destinations() {
  useEffect(() => {
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
  }, [])

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="/destinations_hero.jpg" 
          alt="African landscapes" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="eyebrow mb-4 text-[#D4A03A]">Explore</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            African Destinations
          </h1>
          <p className="text-white/80 max-w-2xl">
            Discover the best safari destinations across Africa, from the plains of the Serengeti to the deltas of Botswana.
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((country, index) => (
              <div 
                key={country.id}
                className="fade-section opacity-0 translate-y-8 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link 
                  to={`/destinations/${country.id}`}
                  className="block relative h-[400px] rounded-3xl overflow-hidden"
                >
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#D4A03A] text-[#2B1E1A] text-xs font-semibold rounded-full">
                      {country.places.length} Places
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-display font-bold text-2xl text-white mb-2">
                      {country.name}
                    </h2>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">
                      {country.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#D4A03A]">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow mb-4 block">Why Travel With Us</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-8">
            The Rays of Africa Difference
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Knowledge',
                description: 'Our team has decades of combined experience across all African destinations.'
              },
              {
                title: 'Tailored Itineraries',
                description: 'Every trip is customized to your interests, budget, and travel style.'
              },
              {
                title: '24/7 Support',
                description: 'We\'re with you every step of the way, from planning to your return home.'
              }
            ].map((item, index) => (
              <div key={index} className="fade-section opacity-0 translate-y-8">
                <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#F7F2EA]/60 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto text-[#D4A03A] mb-4" size={40} />
          <h2 className="font-display font-bold text-2xl md:text-4xl text-[#F7F2EA] mb-4">
            Not Sure Where to Go?
          </h2>
          <p className="text-[#F7F2EA]/60 mb-8">
            Our safari experts can help you choose the perfect destination based on your interests, budget, and travel dates.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Expert Advice <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
