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
    question: "When is the best time to visit Nosy Be?",
    answer: "The optimal period is April to November during the dry season. The weather is pleasant with minimal rainfall, making it perfect for beach activities, snorkeling, and wildlife viewing."
  },
  {
    question: "How do I get to Nosy Be?",
    answer: "You can fly directly to Nosy Be Airport (Fascene) from Antananarivo or Nosy Komba. Alternatively, ferries and boats connect the island to the mainland from Ankify port."
  },
  {
    question: "Is Nosy Be safe for tourists?",
    answer: "Nosy Be is generally safe for tourists. The island has a relaxed atmosphere and friendly locals. Standard travel precautions are advised."
  },
  {
    question: "What wildlife can I see in Nosy Be?",
    answer: "Nosy Be is famous for its lemurs at Lokiba Reserve, chameleons, and diverse marine life. You can spot humpback whales from July to September during their migration season."
  },
  {
    question: "Can I combine Nosy Be with other destinations?",
    answer: "Absolutely! Many travelers combine Nosy Be with Nosy Komba (the lemur island), Nosy Iranja, or explore the mainland national parks of Madagascar."
  }
]

const nosyBeAttractions = [
  { name: "Lokiba Reserve", description: "Sanctuary home to various lemur species, chameleons, and endemic plants.", image: "/nosybe_lokiba.jpg", price: "From $450/pp/day" },
  { name: "Andilana Beach", description: "Pristine white sand beach with crystal clear waters, perfect for swimming.", image: "/nosybe_andilana.jpg", price: "From $450/pp/day" },
  { name: "Mount Passot", description: "Highest point on the island with panoramic views of the archipelago.", image: "/nosybe_passot.jpg", price: "From $450/pp/day" },
  { name: "Nosy Komba", description: "Neighboring island known for its lemur population and crafts markets.", image: "/nosybe_komba.jpg", price: "From $450/pp/day" },
  { name: "Diving Sites", description: "World-class diving with coral reefs, sea turtles and tropical fish.", image: "/nosybe_diving.jpg", price: "From $450/pp/day" },
  { name: "Tsingy Rouge", description: "Red limestone formations creating a unique lunar landscape.", image: "/nosybe_tsingy.jpg", price: "From $450/pp/day" }
]

const activities = [
  { icon: <Eye className="w-8 h-8" />, title: "Lemur Watching", description: "Visit Lokiba Reserve to see endangered lemurs in their natural habitat.", timing: "Year-round" },
  { icon: <Anchor className="w-8 h-8" />, title: "Snorkeling", description: "Explore vibrant coral reefs and swim with tropical fish.", timing: "April-November" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Beach Relaxation", description: "Unwind on pristine white sand beaches like Andilana.", timing: "April-November" },
  { icon: <Ship className="w-8 h-8" />, title: "Island Hopping", description: "Visit neighboring islands including Nosy Komba and Nosy Iranja.", timing: "October-April" },
  { icon: <Mountain className="w-8 h-8" />, title: "Hiking", description: "Climb Mount Passot for breathtaking views of the island.", timing: "April-November" },
  { icon: <Camera className="w-8 h-8" />, title: "Whale Watching", description: "Spot humpback whales during their migration from July to September.", timing: "July-September" }
]

const accommodations = [
  { name: "Mitsinjo Lodge", location: "Andilana", description: "Beachfront villa with infinity pool and spa.", image: "/nosybe_luxury1.jpg" },
  { name: "Hotel Sakalava", location: "Hell-Ville", description: "Colonial-style hotel with ocean views.", image: "/nosybe_luxury2.jpg" },
  { name: "Corail Lodge", location: "Andilana", description: "Boutique eco-lodge with private beach access.", image: "/nosybe_luxury3.jpg" }
]

const safariPackages = [
  {
    name: "5 Days Nosy Be Paradise",
    price: "$1,650",
    description: "Relax on pristine beaches with lemur watching and snorkeling",
    duration: "5 Days / 4 Nights",
    highlights: ["Lokiba Reserve", "Andilana Beach", "Snorkeling", "Island tour"]
  },
  {
    name: "7 Days Madagascar Safari & Beach",
    price: "$2,950",
    description: "Combine wildlife safari with Nosy Be beach relaxation",
    duration: "7 Days / 6 Nights",
    highlights: ["Andasibe National Park", "Nosy Be island", "Whale watching", "Beach time"]
  },
  {
    name: "10 Days Grand Madagascar Adventure",
    price: "$4,250",
    description: "Complete Madagascar experience from parks to beaches",
    duration: "10 Days / 9 Nights",
    highlights: ["Antananarivo", "Lemur parks", "Nosy Be", "Beach relaxation"]
  }
]

const seasonalData = [
  { season: "Lokiba Reserve", jan: "Best", feb: "Best", mar: "Good", apr: "Best", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Good" },
  { season: "Beaches", jan: "Good", feb: "Good", mar: "Good", apr: "Best", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Good" },
  { season: "Diving", jan: "Fair", feb: "Fair", mar: "Good", apr: "Best", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Best", dec: "Fair" },
  { season: "Whale Watching", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Good", nov: "Fair", dec: "Fair" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function NosyBeSafari() {
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
          src="/nosybe_hero.jpg" 
          alt="Nosy Be Island" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Nosy Be Island</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            NOSY BE
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            MADAGASCAR
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Island Paradise
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

      {/* Why Visit Nosy Be */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY VISIT NOSY BE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Nosy Be is Madagascar's premier beach destination, a lush volcanic island floating in the warm waters of the Indian Ocean. Known as the "Island of Perfume" due to its ylang-ylang plantations, Nosy Be offers a unique blend of pristine beaches, vibrant marine life, and encounters with some of the world's most endangered primates—the lemurs.
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
                  Lokiba Reserve
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  This sacred sanctuary is home to several lemur species, including the elusive mongoose lemur and the black lemur. The reserve also shelters chameleons, geckos, and Madagascar's unique flora.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Guided tours offer incredible opportunities to observe these curious creatures in their natural habitat, swinging through trees and sunbathing on branches.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/nosybe_lokiba.jpg" alt="Lokiba Reserve" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/nosybe_andilana.jpg" alt="Andilana Beach" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Andilana Beach
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The crown jewel of Nosy Be, Andilana Beach stretches for miles with powder-white sand and waters that shift from turquoise to deep blue.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Perfect for swimming, sunbathing, and water sports. The beach is lined with resorts and restaurants offering fresh seafood and local cuisine.
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
            {nosyBeAttractions.map((place, index) => (
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
              THINGS TO DO IN NOSY BE
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
              BEST TIME TO VISIT NOSY BE
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
              <h4 className="font-bold text-[#2C3E50] mb-2">December to March</h4>
              <p className="text-[#2C3E50]/70 text-sm">Rainy season with higher humidity. Fewer tourists and lower prices. Some activities may be limited due to weather.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Transitional periods with good weather and fewer crowds. Great time for whale watching at the end of the season.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Dry season with perfect weather. Ideal for all activities including diving, beach visits, and wildlife viewing.</p>
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
              HOW TO GET TO NOSY BE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">By Air</h3>
              <p className="text-[#2C3E50] leading-relaxed mb-4">
                Fly directly to Nosy Be Airport (Fascene) from Antananarivo (the capital) or from other regional hubs. The flight takes about 2.5 hours from Antananarivo.
              </p>
              <p className="text-[#2C3E50] leading-relaxed">
                Several airlines operate daily flights. From the airport, taxis and resort transfers are available.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">By Sea</h3>
              <p className="text-[#2C3E50] leading-relaxed mb-4">
                Ferry services connect Nosy Be to the mainland at Ankify port. The journey takes about 1.5 hours. Speed boats are also available for private transfers.
              </p>
              <p className="text-[#2C3E50] leading-relaxed">
                Once on Nosy Be, explore by taxi-brousse (shared taxi), bike, or on foot. Many resorts offer complimentary airport transfers.
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
              NOSY BE PACKAGES
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
            READY TO EXPLORE NOSY BE?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Nosy Be escape. Our experts will create a tailored itinerary for your dream Madagascar adventure.
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
