import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, DollarSign, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tourHighlights = [
  "Introduction at the centre in Nyamirambo",
  "Culture and language lessons",
  "Guided walk through the backstreets of Nyamirambo",
  "Visit a West African tailor & hair salon",
  "Visit a local market and shop for lunch",
  "Cooking lesson & home lunch over intriguing conversations",
  "Introduction to Islam in Rwanda",
  "Interact with young local musicians",
  "Farewell at the centre"
]

export default function RwandaThisIsAfricaWomensCenter() {
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
          src="https://images.pexels.com/photos/2304775/pexels-photo-2304775.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="This is Africa - Nyamirambo Women's Center" 
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
          <span className="text-[#D4A03A]">This is Africa</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Day Excursion</span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            THIS IS AFRICA
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            Nyamirambo Women's Centre - Experience the authentic African flair of Kigali with this unique cultural tour
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
            <span className="text-[#F7F2EA]">Nyamirambo, Kigali</span>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">$90 per person</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
            Tour Overview
          </h2>
          <p className="text-[#2C3E50] text-lg leading-relaxed mb-8">
            Nyamirambo is a bustling multi-cultural commercial suburb of Kigali that offers visitors a typical African flair. Comparable with South Africa's 'Township Tours', our unique 'This Is Africa' experience brings you right into the heart of the colours, noises and smells of Africa. We are working with the young and charming women of the Nyamirambo Women's Centre (NWC) to take your hand and guide you through their home area.
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

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#2C3E50] mb-4">
                What You'll Experience
              </h2>
              <p className="text-[#2C3E50]/80 mb-4">
                Among others, you will experience the Muslim quarter with its Arab influences, the market, the West African tailors, the hair salons, the recording studio with its local rap music, the butcher, the health centre and the primary school.
              </p>
              <p className="text-[#2C3E50]/80">
                Your hosts will also invite you to one of their homes where you will learn to cook a Rwandan meal, and share lunch over intriguing conversations.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Rwanda Culture" 
                className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
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
              <span className="text-[#2C3E50] text-4xl font-bold">$90</span>
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
            Experience Authentic Rwanda
          </h2>
          <p className="text-[#F7F2EA]/70 mb-8">
            Book this unique cultural experience with the Nyamirambo Women's Centre.
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