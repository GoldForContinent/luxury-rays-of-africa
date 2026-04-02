import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Calendar, DollarSign, Star, CheckCircle, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Kigali",
    description: "On arrival at Kigali International Airport, you will be welcomed by our representatives, who will transfer you to the Hotel and assist you at check in. The rest of your day will be spent at Leisure. Lunch and Dinner will be on own arrangement.",
    meals: "Bed & Breakfast",
    accommodation: "Kigali Serena Hotel"
  },
  {
    day: 2,
    title: "Kigali - Volcanoes National Park",
    description: "After breakfast you will embark on the Tour of the City of Kigali and the Genocide Memorial Museum, followed by Lunch at a Kigali Serena Hotel. Thereafter drive to the Volcanoes National Park. The journey North passes through the beautiful terraced hillsides that characterize much of Rwanda's landscape and gradually climbs to the base of the Virunga Volcanoes.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Sabyinyo Silverback Lodge"
  },
  {
    day: 3,
    title: "Gorilla Trekking - Departure",
    description: "Today you will have the rare opportunity to observe the famous Rwandan Mountain Gorillas (subject to gorilla permits being available). Tracking the Gorillas through the forested slopes of the Virungas is a magical experience. After Lunch depart from foothills of the Virunga Volcanoes, driving South past coffee, tea and banana plantations on a breathtaking scenic drive back to Kigali. On arrival in Kigali you will be transferred to Kigali International airport for your onward departure flight.",
    meals: "Breakfast, Lunch",
    accommodation: "N/A"
  }
]

const highlights = [
  "Gorilla trekking in Volcanoes National Park",
  "Kigali city tour",
  "Genocide Memorial Museum visit",
  "Scenic drive through terraced hills",
  "Cultural experience in Rwanda"
]

const included = [
  "All airport transfers",
  "Accommodation at Kigali Serena Hotel on Bed and Breakfast basis",
  "Accommodation at Sabyinyo Silverback Lodge on Full board basis",
  "Private transport in a 4×4 tourist converted jeeps",
  "Services of an English speaking driver-guides",
  "Kigali City Tour and Extra Lunch on Day 02",
  "Gorilla Permits (US$ 1,500)",
  "Bottled drinking water while trekking and in vehicle"
]

const notIncluded = [
  "Meals and beverages, other than specified",
  "International, regional and local Airfares",
  "Airport taxes",
  "Passport and visa fees",
  "Excess baggage charges",
  "Gratuities to driver/guides",
  "Laundry and other personal items",
  "Personal accident and trip cancellation insurance"
]

export default function RwandaGorillaTrekkingExpress() {
  const [openDay, setOpenDay] = useState<number | null>(null)
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
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/2619964/pexels-photo-2619964.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Gorilla Trekking Express Safari" 
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
          <span className="text-[#D4A03A]">Gorilla Trekking Express</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">3 Days</span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            GORILLA TREKKING EXPRESS
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            A perfect short safari for travelers with limited time seeking a glimpse of the magnificent gorillas combined with a city tour of Kigali, one of Africa's cleanest cities!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-[#2B1E1A] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <Calendar className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">3 Days / 2 Nights</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">Kigali, Volcanoes National Park</span>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">From $1,785 per person</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
            Safari Overview
          </h2>
          <p className="text-[#2C3E50] text-lg leading-relaxed mb-8">
            A perfect short safari for travelers with limited time seeking a glimpse of the magnificent gorillas combined with a city tour of Kigali, one of Africa's cleanest cities! This express safari offers an unforgettable encounter with mountain gorillas in their natural habitat.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-[#D4A03A] flex-shrink-0" size={20} />
                <span className="text-[#2C3E50]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Day by Day</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mt-2">
              Detailed Itinerary
            </h2>
          </div>

          <div className="space-y-4">
            {itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                  onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                >
                  <div>
                    <span className="text-[#D4A03A] font-semibold text-sm">Day {day.day}</span>
                    <h3 className="font-display font-bold text-lg text-[#2C3E50]">{day.title}</h3>
                  </div>
                  <ChevronDown className={`text-[#D4A03A] transition-transform ${openDay === day.day ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openDay === day.day && (
                  <div className="px-6 pb-6 border-t border-[#D4C5B9]">
                    <div className="pt-4 space-y-4">
                      <p className="text-[#2C3E50]/80 leading-relaxed">{day.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="bg-[#FAF3E0] text-[#2C3E50] px-3 py-1 rounded-full">
                          <Star size={14} className="inline mr-1" /> {day.meals}
                        </span>
                        <span className="bg-[#D4A03A]/10 text-[#D4A03A] px-3 py-1 rounded-full">
                          <MapPin size={14} className="inline mr-1" /> {day.accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
            <div className="bg-[#2B1E1A] px-6 py-4">
              <h3 className="text-[#F7F2EA] font-bold">Green Season (01 April - 31 May 2026)</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#D4C5B9]">
                    <th className="text-left py-3 text-[#2C3E50] font-semibold">Item</th>
                    <th className="text-right py-3 text-[#2C3E50] font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#D4C5B9]">
                    <td className="py-3 text-[#2C3E50]">Per Person Sharing</td>
                    <td className="py-3 text-right text-[#D4A03A] font-bold">$1,785</td>
                  </tr>
                  <tr className="border-b border-[#D4C5B9]">
                    <td className="py-3 text-[#2C3E50]">Single Room Supplement</td>
                    <td className="py-3 text-right text-[#2C3E50] font-bold">$185</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-[#2C3E50]">Gorilla Permit</td>
                    <td className="py-3 text-right text-[#2C3E50] font-bold">$1,500</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[#2C3E50]/60 text-sm mt-4">*Pricing depends on season and number of travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Included/Not Included */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">What's Included</h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4A03A] flex-shrink-0 mt-1" size={16} />
                    <span className="text-[#2C3E50] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">Not Included</h3>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#CD7F32] mt-1">×</span>
                    <span className="text-[#2C3E50] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
            Ready for This Adventure?
          </h2>
          <p className="text-[#F7F2EA]/70 mb-8">
            Contact us to book this incredible Rwanda gorilla trekking experience.
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