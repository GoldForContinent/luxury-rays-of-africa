import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, DollarSign, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tourHighlights = [
  "The Kandt Museum, the first colonial building in Rwanda (Entrance $12)",
  "Camp Kigali, where 10 Belgian UN Blue Berets were killed on the first day of the genocide",
  "New Kigali and the City Centre",
  "Old City, The Muslim Quarter, Nyamirambo (the oldest quarter of Kigali)",
  "The craft market (displaying local art and crafts depicting Rwanda's heritage)",
  "Genocide Memorial Visit",
  "Visit to one of the Kigali markets",
  "The Hôtel des Mille Collines, the hotel-turned-refugee camp made famous by the movie Hotel Rwanda",
  "Presidential Museum (Kanombe) (Entrance $15)"
]

export default function RwandaKigaliCityTour() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/2619964/pexels-photo-2619964.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Kigali City Tour" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <Link to="/rwanda-safaris" className="hover:text-[#D4A03A] transition-colors">Rwanda</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Kigali City Tour</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Full Day Excursion</span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            KIGALI CITY TOUR
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            Explore one of Africa's cleanest cities - A historic journey through Rwanda's capital
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">
              Book This Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-[#2B1E1A] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <MapPin className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">Kigali City Centre</span>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">$60 per person</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
            Tour Overview
          </h2>
          <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
            Kigali is the capital and largest city of Rwanda, located geographically in the heart of the country and one of Africa's / World's cleanest cities. The history of Rwanda dates back centuries and Kigali has been a part of it for over 100 years. Founded in 1907 as a German settlement, Kigali did not become the capital until Rwanda's independence in 1962.
          </p>
          <p className="text-[#2C3E50] text-lg leading-relaxed mb-8">
            Today, the city offers a remarkable mix of rural and urban town overflowing on contrasting hilly terrain. The Kigali City Tour begins as a historic journey through the city with a guided tour from the first modern building from which the capital city was first founded, to the rapidly growing neighbourhoods that are changing the face of the city.
          </p>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">Tour Highlights</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {tourHighlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#D4A03A] flex-shrink-0" size={18} />
                  <span className="text-[#2C3E50] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#2C3E50] mb-4">
                Kigali's Fascinating History
              </h2>
              <p className="text-[#2C3E50]/80 mb-4">
                Kigali was founded in 1907 as a small colonial outpost by Dr. Richard Kandt, the first German colonial resident of Rwanda. His residence at the base of Mount Jali and Mount Kigali in the heart of the city has been converted into the Natural History Museum in honour of Dr. Kandt's work, and is one of the first stops on the tour.
              </p>
              <p className="text-[#2C3E50]/80">
                Along the tour, we will pass by Kigali's older commercial "quartiers", business and residential areas. The city is one of the friendliest, cleanest and safest of African cities attracting numerous visitors and investors.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/2304775/pexels-photo-2304775.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Kigali City" 
                className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Genocide Memorial Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">Genocide Memorial</h3>
            <p className="text-[#2C3E50]/80 mb-4">
              Visit the Genocide Memorial site, a grim reminder of a senseless massacre of innocent lives in 1994. The memorial is an exhibition on the history of genocide in Rwanda, a children's memorial exhibition. Learn about Rwanda's history from pre-colonial times to the 1994 genocide; learn about other genocides in the world and how Rwanda has dealt with that past.
            </p>
            <p className="text-[#2C3E50]/80">
              Gisozi is also a burial site with over 250,000 victims of genocide. The large memorial garden contains 10 mass graves where families and visitors may pay their respects. Rwanda's recovery has been incredible, a testament to humankind's resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Investment</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mt-2">
              Pricing
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#D4A03A] px-6 py-4">
              <h3 className="text-white font-bold">Throughout the Year</h3>
            </div>
            <div className="p-8 text-center">
              <span className="text-[#2C3E50] text-4xl font-bold">$60</span>
              <span className="text-[#2C3E50]/60 text-lg ml-2">per person</span>
              <p className="text-[#2C3E50]/60 text-sm mt-4">*Pricing depends on number of travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
            Discover Kigali's Hidden Gems
          </h2>
          <p className="text-[#F7F2EA]/70 mb-8">
            Book this insightful city tour and discover the heart of Rwanda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
            <Link to="/rwanda-safaris" className="px-8 py-3 border-2 border-[#F7F2EA]/30 text-[#F7F2EA] rounded-full font-semibold hover:bg-[#F7F2EA] hover:text-[#2C3E50] transition-all">
              View All Rwanda Safaris
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}