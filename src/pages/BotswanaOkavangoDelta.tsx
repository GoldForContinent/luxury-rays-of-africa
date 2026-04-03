import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Anchor, Camera, Star, Footprints, Ship } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const wildlifeData = [
  { name: "African Elephant", description: "Large herds inhabiting the delta's floodplains", image: "/elephant.jpg" },
  { name: "Hippopotamus", description: "Abundant in the waterways and lagoons", image: "/hippo.jpg" },
  { name: "Crocodile", description: "Nile crocodiles basking on riverbanks", image: "/leopard.jpg" },
  { name: "Lion", description: "Predators stalking prey on the islands", image: "/lion.jpg" },
  { name: "Leopard", description: "Elusive cats hiding in riverine vegetation", image: "/leopard.jpg" },
  { name: "African Buffalo", description: "Large herds grazing on floodplains", image: "/buffalo.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Explore the delta in 4x4 vehicles with expert guides", timing: "Year-round" },
  { icon: <Anchor className="w-10 h-10" />, title: "Mokoro Safaris", description: "Glide through shallow channels in traditional dugout canoes", timing: "May-October" },
  { icon: <Ship className="w-10 h-10" />, title: "Motorboat Trips", description: "Explore deeper waterways and lagoons", timing: "Year-round" },
  { icon: <Footprints className="w-10 h-10" />, title: "Walking Safaris", description: "Explore the bush on foot with experienced trackers", timing: "May-October" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Capture wildlife in one of Africa's most scenic settings", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Birdwatching", description: "Over 400 species including African skimmers and Pel's fishing owl", timing: "Year-round" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Excellent wildlife viewing, mokoro trips", conditions: "Animals congregate around water sources, sparse vegetation" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, lush landscapes, newborn wildlife", conditions: "Rain transforms the delta, some areas inaccessible" },
  { period: "Peak Season (July - August)", bestFor: "Optimal wildlife viewing, comfortable weather", conditions: "Mild temperatures, maximum wildlife sightings" }
]

const faqData = [
  {
    question: "What makes the Okavango Delta special?",
    answer: "The Okavango Delta is a UNESCO World Heritage site and one of the world's largest inland deltas. Each year, the Okavango River spills into the flat savanna, creating a lush paradise of waterways, lagoons, and islands that sustain incredible biodiversity."
  },
  {
    question: "How do I get to the Okavango Delta?",
    answer: "The main gateway is Maun, reachable by commercial flight from Johannesburg or direct from Cape Town. Most camps are accessible only by light aircraft, which is part of the adventure. Flights from Maun to delta camps take 15-45 minutes depending on your destination."
  },
  {
    question: "What activities can I do in the delta?",
    answer: "The delta offers unique water-based activities including mokoro (traditional canoe) excursions, motorboat trips, walking safaris, and traditional game drives. You can also enjoy birdwatching, photography tours, and fishing."
  },
  {
    question: "When is the best time to visit?",
    answer: "The best time is during the dry season from May to October when wildlife viewing is excellent. Animals congregate around permanent water sources and vegetation is sparse, making sightings easier."
  },
  {
    question: "Is the Okavango Delta suitable for families?",
    answer: "Yes, many lodges are family-friendly. However, most camps are accessible only by small aircraft, and activities may need to be tailored for young children. Consult with your safari operator about family-specific accommodations."
  }
]

export default function BotswanaOkavangoDelta() {
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
          src="/botswana_okavango.jpg" 
          alt="Okavango Delta" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Okavango Delta</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            OKAVANGO
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            DELTA
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Africa's Water Wonderland
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/botswana-safaris" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View All Botswana
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              AFRICA'S LARGEST INLAND DELTA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Welcome to the Okavango Delta—a UNESCO World Heritage site and one of Africa's most remarkable ecosystems. Each year, the Okavango River spills into the flat savanna, creating a lush paradise of waterways, lagoons, and islands that sustain incredible biodiversity.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  A Unique Ecosystem
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Okavango Delta is one of the world's largest inland deltas, a maze of lagoons, channels, and islands covering approximately 16,000 square kilometers.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Unlike most deltas that flow into the ocean, the Okavango empties into the Kalahari Desert, creating an oasis that supports one of Africa's highest concentrations of wildlife.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_okavango.jpg" alt="Okavango Delta" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/botswana_chobe.jpg" alt="Mokoro Safari" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Mokoro Adventures
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  One of the most unique ways to explore the delta is by mokoro—a traditional dugout canoe poled by an expert guide through shallow channels.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  This silent and intimate experience allows you to glide past hippos, crocodiles, and countless waterbirds while experiencing the delta up close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              DELTA WILDLIFE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeData.map((animal, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{animal.name}</h3>
                  <p className="text-[#2C3E50]/70 text-sm">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              DELTA ADVENTURES
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
              BEST TIME TO VISIT
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seasonalData.map((season, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-display font-bold text-lg text-[#2C3E50] mb-4">{season.period}</h3>
                <p className="text-[#2C3E50] font-semibold mb-2">{season.bestFor}</p>
                <p className="text-[#2C3E50]/70 text-sm">{season.conditions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              DELTA ACCOMMODATIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/botswana-wilderness-tubu-tree-camp" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(/botswana_tubu.jpg)` }}>
                <div className="h-full bg-black/30"></div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">Wilderness Tubu Tree Camp</h3>
                <p className="text-[#D4A03A] text-sm mb-3">Okavango Delta</p>
                <p className="text-[#2C3E50] text-sm">Intimate camp on Hunda Island with stunning floodplain views.</p>
              </div>
            </Link>
            <Link to="/botswana-camp-kalahari" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(/botswana_makgadikgadi.jpg)` }}>
                <div className="h-full bg-black/30"></div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">Camp Kalahari</h3>
                <p className="text-[#D4A03A] text-sm mb-3">Makgadikgadi Pans</p>
                <p className="text-[#2C3E50] text-sm">Relaxed camp on edge of the salt pans with desert adventures.</p>
              </div>
            </Link>
            <Link to="/botswana-chobe-safari-lodge" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(/botswana_chobe.jpg)` }}>
                <div className="h-full bg-black/30"></div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">Chobe Safari Lodge</h3>
                <p className="text-[#D4A03A] text-sm mb-3">Chobe River</p>
                <p className="text-[#2C3E50] text-sm">Well-established lodge with river views and easy park access.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Questions</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
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
            READY FOR THE DELTA?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience the magic of the Okavango Delta. Let our experts craft your perfect safari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/botswana-safaris" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View All Botswana
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
