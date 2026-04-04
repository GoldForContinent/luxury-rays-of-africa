import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Anchor, Palmtree, Ship, Mountain, Camera } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "When is the best time to visit Lamu Island?",
    answer: "The optimal period is June to October during the dry season. The weather is pleasant, the seas are calm, and it's perfect for beach activities and dhow sailing."
  },
  {
    question: "How do I get to Lamu Island?",
    answer: "You can fly directly to Lamu Airport from Nairobi or Mombasa. Alternatively, ferries and boats connect the mainland at Lamu Port to the island. Once on Lamu, donkey carts and walking are the main modes of transport."
  },
  {
    question: "Is Lamu Island safe for tourists?",
    answer: "Lamu is generally safe for tourists. The island has a peaceful atmosphere and friendly locals. As with any travel destination, it's advisable to take standard precautions."
  },
  {
    question: "What makes Lamu unique?",
    answer: "Lamu is one of the oldest settlements in East Africa, dating back to the 12th century. It's the best-preserved Swahili town in Kenya, with no motor vehicles allowed in the old town, preserving its traditional charm."
  },
  {
    question: "Can I combine Lamu with other destinations?",
    answer: "Absolutely! Many travelers combine Lamu with Manda Island, Zanzibar, or the Kenya coast. Dhow trips to nearby islands are popular day excursions."
  }
]

const lamuAttractions = [
  { name: "Lamu Old Town", description: "Explore the narrow winding streets and ancient Swahili architecture of this UNESCO World Heritage site.", image: "/lamu_old_town.jpg", price: "From $350/pp/day" },
  { name: "Shela Beach", description: "Relax on pristine white sand beaches perfect for swimming and sunset walks.", image: "/lamu_shela.jpg", price: "From $350/pp/day" },
  { name: "Manda Island", description: "Visit this tranquil island with beautiful beaches and archaeological ruins.", image: "/lamu_manda.jpg", price: "From $350/pp/day" },
  { name: "Lamu Museum", description: "Discover the rich history and culture of the Swahili people.", image: "/lamu_museum.jpg", price: "From $350/pp/day" },
  { name: "Pate Island", description: "Explore ancient Islamic ruins and traditional villages.", image: "/lamu_pate.jpg", price: "From $350/pp/day" },
  { name: "Dhow Trips", description: " Sail traditional dhow boats to sandbanks and nearby islands.", image: "/lamu_dhow.jpg", price: "From $350/pp/day" }
]

const activities = [
  { icon: <Ship className="w-8 h-8" />, title: "Dhow Sailing", description: "Experience traditional sailing aboard hand-crafted dhow boats along the coastline.", timing: "Year-round" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Beach Relaxation", description: "Unwind on pristine beaches like Shela with white sands and clear waters.", timing: "June-October" },
  { icon: <Eye className="w-8 h-8" />, title: "Cultural Tours", description: "Wander through Lamu Old Town's narrow streets and discover Swahili heritage.", timing: "Year-round" },
  { icon: <Anchor className="w-8 h-8" />, title: "Snorkeling", description: "Explore coral reefs and marine life in the clear Indian Ocean waters.", timing: "March-May, October" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography", description: "Capture stunning architecture, landscapes, and cultural moments.", timing: "Year-round" },
  { icon: <Mountain className="w-8 h-8" />, title: "Island Hopping", description: "Visit neighboring islands including Manda and Pate by boat.", timing: "June-October" }
]

const accommodations = [
  { name: "Lamu House", location: "Lamu Old Town", description: "Elegant boutique hotel with stunning views and rooftop terrace.", image: "/lamu_luxury1.jpg" },
  { name: "Peponi Hotel", location: "Shela Beach", description: "Beachfront paradise with infinity pool and seafood restaurant.", image: "/lamu_luxury2.jpg" },
  { name: "Kizingo Beach Resort", location: "Manda Island", description: "Luxurious eco-lodge on private island with pristine beaches.", image: "/lamu_luxury3.jpg" }
]

const safariPackages = [
  {
    name: "4 Days Lamu Cultural Escape",
    price: "$1,450",
    description: "Explore ancient Swahili culture with donkey rides and dhow sailing",
    duration: "4 Days / 3 Nights",
    highlights: ["Lamu Old Town", "Shela Beach", "Dhow cruise", "Cultural tour"]
  },
  {
    name: "6 Days Lamu & Safari Combo",
    price: "$2,850",
    description: "Combine Lamu beaches with a Kenya safari adventure",
    duration: "6 Days / 5 Nights",
    highlights: ["Masai Mara", "Lamu Island", "Dhow sailing", "Beach relaxation"]
  },
  {
    name: "8 Days Kenya Coast & Lamu",
    price: "$3,450",
    description: "Experience Diani Beach and Lamu Island in one journey",
    duration: "8 Days / 7 Nights",
    highlights: ["Diani Beach", "Lamu Island", "Safari addition", "Snorkeling"]
  }
]

const seasonalData = [
  { season: "Lamu Old Town", jan: "Best", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Best" },
  { season: "Shela Beach", jan: "Best", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Best" },
  { season: "Manda Island", jan: "Best", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Best" },
  { season: "Dhow Activities", jan: "Best", feb: "Best", mar: "Good", apr: "Fair", may: "Fair", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Best" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function LamuSafari() {
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
          src="/lamu_hero.jpg" 
          alt="Lamu Island" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Lamu Island</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            LAMU ISLAND
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            KENYA
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Ancient Swahili Culture
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

      {/* Why Visit Lamu */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY VISIT LAMU ISLAND
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Lamu Island is a timeless escape where ancient Swahili culture meets pristine Indian Ocean beaches. As a UNESCO World Heritage Site, Lamu Old Town offers narrow winding streets lined with coral stone buildings, carved wooden doors, and centuries of history. Unlike anywhere else in East Africa, life here moves at the pace of donkeys and dhows—there are no motor vehicles in the old town, preserving an atmosphere that feels frozen in time.
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
                  Lamu Old Town
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Step back in time as you wander through Lamu Old Town, the oldest and best-preserved Swahili settlement in East Africa. The narrow alleys are lined with coral-stone houses featuring carved wooden doors and Arabic-inspired arches.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Visit the Lamu Museum, explore ancient mosques, and soak in the atmosphere of this trading hub that once connected East Africa with the Arabian Peninsula, India, and beyond.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/lamu_old_town.jpg" alt="Lamu Old Town" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/lamu_shela.jpg" alt="Shela Beach" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Shela Beach
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Just a short walk from Lamu Old Town, Shela Beach offers miles of pristine white sand and crystal-clear waters. The beach is perfect for long sunset walks, swimming, and unwinding in peaceful solitude.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Enjoy beachfront dining at local restaurants, watch traditional dhows sail by, or simply relax beneath a palm tree with the gentle ocean breeze.
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
            {lamuAttractions.map((place, index) => (
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
              THINGS TO DO IN LAMU
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
              BEST TIME TO VISIT LAMU
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-[#2C3E50]">
                  <th className="p-3 text-left text-white font-semibold">Destination</th>
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
              <h4 className="font-bold text-[#2C3E50] mb-2">March to May</h4>
              <p className="text-[#2C3E50]/70 text-sm">Green season with occasional rainfall. Fewer tourists, lower prices, and lush scenery. Some marine activities may be limited.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Short rainy season with improving conditions. Good value and fewer crowds before the peak season.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Dry season with perfect weather. Ideal for all activities including dhow sailing, beach visits, and cultural tours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Travel</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              HOW TO GET TO LAMU
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">By Air</h3>
              <p className="text-[#2C3E50] leading-relaxed mb-4">
                Fly directly to Lamu Airport from Nairobi (1 hour) or Mombasa (45 minutes). Several airlines operate daily flights. From the airport, a short boat ride or drive takes you to Lamu town.
              </p>
              <p className="text-[#2C3E50] leading-relaxed">
                Lamu Airport is located on the mainland near Mokowe, with boats available to Lamu Island.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">By Sea</h3>
              <p className="text-[#2C3E50] leading-relaxed mb-4">
                Ferries and speed boats run from Mokowe Jetty to Lamu Island. The boat ride takes about 15 minutes. Private dhow charters can also be arranged for a more traditional experience.
              </p>
              <p className="text-[#2C3E50] leading-relaxed">
                Once on Lamu, explore on foot or by donkey cart—the island has no motor vehicles in the old town, preserving its authentic charm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Packages */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Packages</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              LAMU PACKAGES
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

      {/* Accommodations */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
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
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
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
            READY TO EXPLORE LAMU?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Lamu Island escape. Our experts will create a tailored itinerary for your dream African beach adventure.
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
            <Link to="/mafia-island" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/mafia_hero.jpg" 
                  alt="Mafia Island" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-display font-bold text-xl">Mafia Island</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#2C3E50]">Unspoiled marine paradise with whale sharks and coral reefs in Tanzania.</p>
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
