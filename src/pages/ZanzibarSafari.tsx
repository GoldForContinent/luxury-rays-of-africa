import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Palmtree, Anchor, Camera, Waves, Utensils, Ship } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "When is the best time to visit Zanzibar?",
    answer: "The best time is June to October during the dry season. December to March also offers excellent weather. The rainy seasons are April-May and November."
  },
  {
    question: "Is Zanzibar safe for tourists?",
    answer: "Zanzibar is generally very safe for tourists. The island has well-developed tourism infrastructure and friendly local communities."
  },
  {
    question: "What activities can I do in Zanzibar?",
    answer: "Zanzibar offers world-class snorkeling, diving, dhow sailing, spice tours, Stone Town exploration, and relaxing on pristine beaches."
  },
  {
    question: "Can I combine safari with Zanzibar?",
    answer: "Absolutely! Many travelers combine a Tanzania safari (Serengeti, Ngorongoro) with a beach extension in Zanzibar—the classic bush and beach experience."
  },
  {
    question: "What is the food like in Zanzibar?",
    answer: "Zanzibar offers a unique blend of Swahili, Indian, and Arab cuisines. Fresh seafood, spices, and tropical fruits are highlights."
  }
]

const zanzibarBeaches = [
  { name: "Nungwi Beach", description: "Famous white sand beach in the north. Perfect for sunset views and traditional dhow sailing.", image: "/zanzibar_nungwi.jpg" },
  { name: "Kendwa Beach", description: "Pristine beach known for its stunning rock formations and lively beach parties.", image: "/zanzibar_kendwa.jpg" },
  { name: "Paje Beach", description: "Popular kitesurfing destination on the east coast with consistent winds.", image: "/zanzibar_paje.jpg" },
  { name: "Stone Town", description: "UNESCO World Heritage site with narrow streets, markets, and rich Swahili culture.", image: "/zanzibar_stone_town.jpg" },
  { name: "Mnemba Atoll", description: "Private island paradise with world-class snorkeling and diving reefs.", image: "/zanzibar_mnemba.jpg" },
  { name: "Kizimkazi", description: "Southern beach famous for dolphin watching and snorkeling with dolphins.", image: "/zanzibar_kizimkazi.jpg" }
]

const activities = [
  { icon: <Waves className="w-8 h-8" />, title: "Snorkeling & Diving", description: "Explore vibrant coral reefs and diverse marine life at Mnemba Atoll and other dive sites.", timing: "Year-round" },
  { icon: <Ship className="w-8 h-8" />, title: "Dhow Sailing", description: "Traditional wooden sailing boats for sunset cruises and coastal exploration.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Spice Tours", description: "Discover Zanzibar's spice heritage with tours through plantations of cloves, nutmeg, and cinnamon.", timing: "Year-round" },
  { icon: <Anchor className="w-8 h-8" />, title: "Dolphin Watching", description: "Swim with wild dolphins in their natural habitat at Kizimkazi.", timing: "Year-round" },
  { icon: <Utensils className="w-8 h-8" />, title: "Food Tours", description: "Experience Swahili cuisine through cooking classes and food market tours.", timing: "Year-round" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Beach Relaxation", description: "Unwind on pristine white sand beaches with crystal clear turquoise waters.", timing: "Year-round" }
]

const accommodations = [
  { name: "The Residence Zanzibar", location: "West Coast", description: "Luxury villas with private pools on pristine beachfront.", image: "/zanzibar_luxury1.jpg" },
  { name: "Baraza Resort & Spa", location: "East Coast", description: "Elegant boutique hotel with Swahili-inspired architecture.", image: "/zanzibar_luxury2.jpg" },
  { name: "Zanzibar Serena Hotel", location: "Stone Town", description: "Historic luxury hotel overlooking the harbor and Spice Market.", image: "/zanzibar_luxury3.jpg" }
]

const seasonalData = [
  { beach: "Nungwi", jan: "Best", feb: "Best", mar: "Best", apr: "Good", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { beach: "Kendwa", jan: "Best", feb: "Best", mar: "Best", apr: "Good", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { beach: "Paje", jan: "Best", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { beach: "Stone Town", jan: "Best", feb: "Best", mar: "Best", apr: "Good", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { beach: "Mnemba", jan: "Best", feb: "Best", mar: "Best", apr: "Good", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { beach: "Kizimkazi", jan: "Best", feb: "Best", mar: "Best", apr: "Good", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function ZanzibarSafari() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      )

      gsap.to('.hero-bg', {
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      contentRefs.current.forEach((el) => {
        if (el) {
          gsap.fromTo(el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <img 
          src="/zanzibar_hero.jpg" 
          alt="Zanzibar Beach" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Zanzibar Island</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            ZANZIBAR
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            ISLAND
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Spice Island Paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Trip <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Packages
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Why Visit Zanzibar */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY ZANZIBAR IS THE ULTIMATE BEACH DESTINATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Known as the Spice Island, Zanzibar offers a magical blend of pristine beaches, rich history, and vibrant culture. This Tanzanian archipelago in the Indian Ocean promises unforgettable experiences from reef diving to sunset dhow cruises.
          </p>
        </div>
      </section>

      {/* Best Places */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Nungwi Beach
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Located on Zanzibar's northern tip, Nungwi boasts pristine white sands and crystal-clear waters. It's famous for traditional dhow building and sunset views.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The beach offers excellent swimming conditions year-round and a lively atmosphere with beach bars and restaurants.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/zanzibar_nungwi.jpg" alt="Nungwi Beach" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/zanzibar_stone_town.jpg" alt="Stone Town" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Stone Town
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  A UNESCO World Heritage site, Stone Town is a maze of narrow streets, ancient buildings, and bustling markets. The historic heart of Zanzibar.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Explore the House of Wonders, the old Fort, and the famous Forodhani night food market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beaches Grid */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              BEST BEACHES IN ZANZIBAR
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zanzibarBeaches.map((beach, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={beach.image} 
                    alt={beach.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-display font-bold text-xl">{beach.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E50]">{beach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              ACTIVITIES IN ZANZIBAR
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-[#D4A03A] mb-4">{activity.icon}</div>
                <h3 className="text-white font-display font-bold text-xl mb-2">{activity.title}</h3>
                <p className="text-white/80 mb-3">{activity.description}</p>
                <div className="flex items-center gap-2 text-[#D4A03A]">
                  <ClockIcon />
                  <span className="text-sm font-medium">{activity.timing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">When to Go</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              BEST TIME TO VISIT ZANZIBAR
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-[#2C3E50]">
                  <th className="p-3 text-left text-white font-semibold">Beach Area</th>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                    <th key={m} className="p-3 text-center text-white font-semibold">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((row, i) => (
                  <tr key={i} className="border-b border-[#D4C5B9]">
                    <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.beach}</td>
                    {Object.entries(row).slice(1).map(([_, val], j) => (
                      <td key={j} className={`p-3 text-center text-xs ${getRatingColor(val)}`}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #556B2F' }}>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Rainy Seasons</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April to May & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Short rains - fewer crowds, lower prices, still plenty of sunshine.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Dry Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Peak beach weather - sunny days, low humidity, perfect for water activities.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Best Overall</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">December to March</h4>
              <p className="text-[#2C3E50]/70 text-sm">Warm and sunny, perfect for beach and diving. Great for whale shark encounters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              LUXURY RESORTS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accommodations.map((resort, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${resort.image})` }}>
                  <div className="h-full bg-black/30"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{resort.name}</h3>
                  <p className="text-[#D4A03A] text-sm mb-3">{resort.location}</p>
                  <p className="text-[#2C3E50]">{resort.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Questions</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-bold text-lg text-[#2C3E50]">{faq.question}</span>
                  <span className="text-[#D4A03A] text-2xl">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#2C3E50] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            READY TO EXPLORE ZANZIBAR?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Zanzibar beach holiday. Combine with a safari for the ultimate African experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Trip <ArrowRight size={18} />
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
