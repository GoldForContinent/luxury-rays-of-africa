import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Anchor, Ship, Mountain, Camera, Fish } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "When is the best time to visit Mafia Island?",
    answer: "The ideal period is June to October and December to February during the dry seasons. These months offer calm seas, excellent visibility for diving, and sunny weather perfect for marine activities."
  },
  {
    question: "How do I get to Mafia Island?",
    answer: "You can fly from Dar es Salaam to Mafia Island Airport (30-40 minutes). Alternatively, boats and ferries connect the island to the mainland at Kilindoni or from Zanzibar."
  },
  {
    question: "Is Mafia Island safe for tourists?",
    answer: "Mafia Island is very safe for visitors. The island has a peaceful atmosphere and welcoming local community. Standard travel precautions are sufficient."
  },
  {
    question: "What marine life can I see?",
    answer: "The Mafia Island Marine Park is home to diverse marine life including whale sharks (October-March), dolphins, sea turtles, and vibrant coral reefs. It's a premier diving and snorkeling destination."
  },
  {
    question: "Can I combine Mafia with other destinations?",
    answer: "Absolutely! Many travelers combine Mafia with a Tanzania safari (Serengeti, Ngorongoro) or continue to Zanzibar. The bush and beach combination is very popular."
  }
]

const mafiaAttractions = [
  { name: "Mafia Island Marine Park", description: "Protected marine reserve with coral reefs, mangroves, and diverse fish species.", image: "/mafia_marine_park.jpg", price: "From $450/pp/day" },
  { name: "Kilindoni", description: "Main town and gateway with local markets and traditional Swahili culture.", image: "/mafia_kilindoni.jpg", price: "From $450/pp/day" },
  { name: "Diving Sites", description: "World-class diving with whale sharks, sea turtles, and colorful coral formations.", image: "/mafia_diving.jpg", price: "From $450/pp/day" },
  { name: "Mangrove Forests", description: "Explore ancient mangrove ecosystems by kayak or boat.", image: "/mafia_mangrove.jpg", price: "From $450/pp/day" },
  { name: "Fishing Villages", description: "Visit traditional fishing communities and experience local Swahili life.", image: "/mafia_village.jpg", price: "From $450/pp/day" },
  { name: "Beaches", description: "Pristine, uncrowded beaches with powder-white sand and clear waters.", image: "/mafia_beach.jpg", price: "From $450/pp/day" }
]

const activities = [
  { icon: <Eye className="w-8 h-8" />, title: "Whale Shark Watching", description: "Swim with gentle whale sharks between October and March.", timing: "October-March" },
  { icon: <Anchor className="w-8 h-8" />, title: "Snorkeling", description: "Explore coral reefs teeming with tropical fish and marine life.", timing: "June-October" },
  { icon: <Ship className="w-8 h-8" />, title: "Dhow Sailing", description: "Traditional sailing trips along the coastline and to nearby islands.", timing: "Year-round" },
  { icon: <Fish className="w-8 h-8" />, title: "Deep Sea Fishing", description: "Catch marlin, tuna, and other big game fish in the Indian Ocean.", timing: "April-November" },
  { icon: <Camera className="w-8 h-8" />, title: "Dolphin Watching", description: "Spot dolphins playing in the shallow waters around the island.", timing: "Year-round" },
  { icon: <Mountain className="w-8 h-8" />, title: "Cultural Tours", description: "Visit fishing villages and learn about traditional Swahili life.", timing: "Year-round" }
]

const accommodations = [
  { name: "Mafia Island Lodge", location: "Kilindoni", description: "Beachfront eco-lodge with comfortable rooms and local cuisine.", image: "/mafia_luxury1.jpg" },
  { name: "Butiama Beach Lodge", location: "Kibiti", description: "Luxury beach resort with diving center and spa.", image: "/mafia_luxury2.jpg" },
  { name: "Sunset Beach Mafia", location: "Mafia Island", description: "Intimate boutique lodge with sunset views.", image: "/mafia_luxury3.jpg" }
]

const safariPackages = [
  {
    name: "5 Days Mafia Island & Zanzibar Escape",
    price: "$2,450",
    description: "Combine the pristine waters of Mafia with the historic charm of Zanzibar",
    duration: "5 Days / 4 Nights",
    highlights: ["Whale shark swimming", "Marine park snorkeling", "Stone Town tour", "Beach relaxation"]
  },
  {
    name: "7 Days Tanzania Safari & Mafia Beach",
    price: "$3,850",
    description: "Experience the Serengeti migration then unwind on Mafia's pristine beaches",
    duration: "7 Days / 6 Nights",
    highlights: ["Serengeti game drives", "Ngorongoro Crater", "Mafia island stay", "Marine activities"]
  },
  {
    name: "10 Days Grand Tanzania Experience",
    price: "$5,200",
    description: "Complete Tanzania circuit ending with a luxurious beach retreat on Mafia",
    duration: "10 Days / 9 Nights",
    highlights: ["Tarangire", "Serengeti", "Ngorongoro", "Mafia Island relaxation", "Whale shark encounter"]
  }
]

const seasonalData = [
  { season: "Marine Park", jan: "Good", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { season: "Beaches", jan: "Best", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { season: "Diving", jan: "Best", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Best" },
  { season: "Whale Sharks", jan: "Best", feb: "Best", mar: "Best", apr: "Fair", may: "Fair", jun: "Good", jul: "Good", aug: "Good", sep: "Good", oct: "Best", nov: "Best", dec: "Best" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function MafiaSafari() {
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
          src="/mafia_hero.jpg" 
          alt="Mafia Island" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Mafia Island</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            MAFIA ISLAND
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            TANZANIA
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Untouched Marine Paradise
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

      {/* Why Visit Mafia */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY VISIT MAFIA ISLAND
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Mafia Island is a hidden gem in the Tanzanian Zanzibar Archipelago, offering an authentic escape from the crowds. This untouched paradise covers approximately 394 square kilometers and is home to the Mafia Island Marine Park, protecting coral reefs, mangroves, and incredible marine biodiversity. Unlike busier destinations, Mafia retains its peaceful atmosphere where life moves at the rhythm of fishing boats and tide schedules.
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
                  Mafia Island Marine Park
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The heart of Mafia's appeal lies in its protected marine park, one of Tanzania's finest. Crystal-clear waters provide exceptional visibility for snorkeling and diving among vibrant coral gardens.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The park shelters sea turtles, dolphins, and from October to March, gentle whale sharks. Mangrove forests line the coast, providing nurseries for fish and unique kayaking opportunities.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/mafia_marine_park.jpg" alt="Mafia Marine Park" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/mafia_kilindoni.jpg" alt="Kilindoni" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Kilindoni Town
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The main gateway to the island, Kilindoni offers a glimpse into traditional Swahili life. Wander through local markets, visit fishing docks, and sample fresh seafood at simple restaurants.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The town has limited vehicle access, preserving its authentic character. Small boats and bicycles are the main ways to explore this charming settlement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              BEST PLACES TO VISIT
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mafiaAttractions.map((place, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-display font-bold text-xl">{place.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E50]">{place.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#D4C5B9]">
                    <span className="text-[#D4A03A] font-bold">{place.price}</span>
                  </div>
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
              THINGS TO DO IN MAFIA
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

      {/* Safari Packages */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Packages</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              MAFIA ISLAND PACKAGES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {safariPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-6 border-b border-[#D4C5B9]">
                  <span className="text-[#D4A03A] text-sm font-semibold uppercase">{pkg.duration}</span>
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mt-2 mb-2">{pkg.name}</h3>
                  <p className="text-[#2C3E50]/70 text-sm mb-4">{pkg.description}</p>
                </div>
                <div className="p-6 bg-[#FFF8F0]">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-[#D4A03A]/20 text-[#D4A03A] rounded-full text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-3xl text-[#2C3E50]">{pkg.price}</span>
                    <Link to="/contact" className="btn-primary text-sm py-2 px-4">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">When to Go</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              BEST TIME TO VISIT MAFIA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-[#2C3E50]">
                  <th className="p-3 text-left text-white font-semibold">Activity</th>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                    <th key={m} className="p-3 text-center text-white font-semibold">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((row, i) => (
                  <tr key={i} className="border-b border-[#D4C5B9]">
                    <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.season}</td>
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
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Low Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">March to May & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Rainy periods bring lower prices and fewer visitors. Marine activities may be limited, but the island remains peaceful and lush.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June</h4>
              <p className="text-[#2C3E50]/70 text-sm">Early dry season offers improving weather and value. Great time to enjoy marine activities before peak season crowds arrive.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">July to October & December</h4>
              <p className="text-[#2C3E50]/70 text-sm">Dry season with perfect conditions. Whale shark sightings are excellent from October. Book early for best accommodations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Travel</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              HOW TO GET TO MAFIA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">By Air</h3>
              <p className="text-[#2C3E50] leading-relaxed mb-4">
                Daily flights operate from Dar es Salaam to Mafia Island Airport. The flight takes approximately 30-40 minutes, offering stunning aerial views of the archipelago.
              </p>
              <p className="text-[#2C3E50] leading-relaxed">
                Charter flights can also be arranged from Zanzibar or other regional hubs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">By Sea</h3>
              <p className="text-[#2C3E50] leading-relaxed mb-4">
                Ferries and speed boats connect Mafia to the mainland at Kilindoni. boats also run from Zanzibar and other nearby islands.
              </p>
              <p className="text-[#2C3E50] leading-relaxed">
                Once on the island, explore by small vehicles, bicycles, boats, or simply on foot. The limited road network adds to Mafia's peaceful character.
              </p>
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
              WHERE TO STAY
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accommodations.map((lodging, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${lodging.image})` }}>
                  <div className="h-full bg-black/30"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{lodging.name}</h3>
                  <p className="text-[#D4A03A] text-sm mb-3">{lodging.location}</p>
                  <p className="text-[#2C3E50]">{lodging.description}</p>
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
            READY TO EXPLORE MAFIA?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Mafia Island escape. Our experts will create a tailored itinerary for your dream Tanzania beach adventure.
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

      {/* Explore Other Island Destinations */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover More</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              EXPLORE OTHER ISLAND DESTINATIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/zanzibar-island" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/zanzibar_hero.jpg" 
                  alt="Zanzibar Island" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-display font-bold text-xl">Zanzibar Island</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2C3E50]">The legendary Spice Island with pristine beaches and rich Swahili heritage.</p>
                <div className="mt-4 pt-4 border-t border-[#D4C5B9] flex items-center justify-between">
                  <span className="text-[#D4A03A] font-bold">From $400/pp/day</span>
                  <ArrowRight className="w-5 h-5 text-[#D4A03A] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            <Link to="/lamu-island" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lamu_hero.jpg" 
                  alt="Lamu Island" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-display font-bold text-xl">Lamu Island</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2C3E50]">Ancient Swahili culture and pristine beaches on Kenya's oldest settlement.</p>
                <div className="mt-4 pt-4 border-t border-[#D4C5B9] flex items-center justify-between">
                  <span className="text-[#D4A03A] font-bold">From $350/pp/day</span>
                  <ArrowRight className="w-5 h-5 text-[#D4A03A] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            <Link to="/nosy-be-island" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/nosybe_hero.jpg" 
                  alt="Nosy Be Island" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-display font-bold text-xl">Nosy Be Island</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2C3E50]">Madagascar's premier beach destination with lemurs and pristine reefs.</p>
                <div className="mt-4 pt-4 border-t border-[#D4C5B9] flex items-center justify-between">
                  <span className="text-[#D4A03A] font-bold">From $450/pp/day</span>
                  <ArrowRight className="w-5 h-5 text-[#D4A03A] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
