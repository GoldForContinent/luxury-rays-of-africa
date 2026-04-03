import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Anchor, Camera, Sun, Mountain, Ship } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "When is the best time to visit Zambia?",
    answer: "The optimal period is May to October during the dry season. The Lower Zambezi is best from May to October when water levels are ideal for canoeing and game viewing."
  },
  {
    question: "Is Zambia safe for tourists?",
    answer: "Zambia is generally safe for tourists. The country has well-established tourism infrastructure in major safari areas with professional guides."
  },
  {
    question: "Why are walking safaris so popular in Zambia?",
    answer: "Zambia is known as the birthplace of walking safaris. South Luangwa National Park pioneered this style, offering intimate encounters with wildlife on foot."
  },
  {
    question: "What makes the Lower Zambezi special?",
    answer: "The Lower Zambezi offers incredible river-based activities including canoeing, boat cruises, and fishing, all while overlooking Zambia's stunning escarpment."
  },
  {
    question: "Can I combine Zambia with Victoria Falls?",
    answer: "Absolutely! Many travelers visit Livingstone (Victoria Falls) as part of their Zambia safari, combining wildlife with one of the world's natural wonders."
  }
]

const zambiaParks = [
  { name: "Mosi-oa-Tunya National Park", description: "UNESCO World Heritage Site home to Victoria Falls, one of the Seven Natural Wonders of the World.", image: "/zambia_victoria_falls.jpg", price: "Entry $20 USD/pp", path: "/zambia-mosi-oa-tunya-national-park" },
  { name: "Kafue National Park", description: " Zambia's oldest national park and one of Africa's largest. Excellent cheetah and wild dog sightings.", image: "/zambia_kafue.jpg", price: "Entry $20 USD/pp", path: "/zambia-kafue-national-park" },
  { name: "Kasanka National Park", description: "Famous for hosting the world's largest mammal migration - over 10 million straw-coloured fruit bats.", image: "/zambia_kasanka.jpg", price: "Entry $25 USD/pp", path: "/zambia-kasanka-national-park" }
]

const safariActivities = [
  { icon: <Eye className="w-8 h-8" />, title: "Walking Safaris", description: "Experience the original walking safari in Zambia with expert trackers.", timing: "May-October" },
  { icon: <Ship className="w-8 h-8" />, title: "Canoe Safaris", description: "Paddle through the Zambezi in traditional canoes for close wildlife encounters.", timing: "May-October" },
  { icon: <Anchor className="w-8 h-8" />, title: "River Cruises", description: "Sunset cruises on the Zambezi River with hippos and crocodiles.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Photographic Safaris", description: "Expert-guided photography tours in exclusive private concessions.", timing: "May-October" },
  { icon: <Sun className="w-8 h-8" />, title: "Victoria Falls", description: "Visit the magnificent falls and enjoy white-water rafting and helicopter tours.", timing: "February-May" },
  { icon: <Mountain className="w-8 h-8" />, title: "Bat Migration", description: "Witness the world's largest mammal migration in Kasanka National Park.", timing: "October-December" }
]

const accommodations = [
  { name: "Royal Zambezi Lodge", location: "Lower Zambezi", description: "Luxury safari lodge on the banks of the Zambezi River with breathtaking views.", image: "/zambia_royal_zambezi.jpg", path: "/zambia-royal-zambezi-lodge" }
]

const safariPackages = [
  {
    name: "7 Days South Luangwa Walking Safari",
    price: "$1,450",
    description: "Experience the best walking safaris in Africa in Zambia's premier wildlife reserve",
    duration: "7 Days / 6 Nights",
    highlights: ["Walking safaris", "Big Five viewing", "Night drives", "Luxury camps"]
  },
  {
    name: "10 Days Zambia Wildlife Adventure",
    price: "$2,200",
    description: "Explore South Luangwa, Lower Zambezi and Victoria Falls",
    duration: "10 Days / 9 Nights",
    highlights: ["South Luangwa", "Lower Zambezi", "Victoria Falls", "Canoe safaris"]
  },
  {
    name: "14 Days Ultimate Zambia Safari",
    price: "$3,850",
    description: "Complete Zambia experience from Luangwa valleys to the mighty Victoria Falls",
    duration: "14 Days / 13 Nights",
    highlights: ["South Luangwa", "North Luangwa", "Lower Zambezi", "Victoria Falls"]
  }
]

const seasonalData = [
  { park: "Mosi-oa-Tunya", jan: "Good", feb: "Good", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Kafue", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
  { park: "Kasanka", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function ZambiaSafari() {
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
          src="/zambia_hero.jpg" 
          alt="Zambia Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Zambia Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            ZAMBIA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Walking Safari Capital
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Safaris
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Why Visit Zambia */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY ZAMBIA IS THE ORIGINAL SAFARI DESTINATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Zambia offers an authentic and adventurous safari experience, celebrated as the birthplace of walking safaris. Explore pristine wilderness areas where the focus is on immersive experiences, expert guiding, and getting close to nature on foot.
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
                  South Luangwa National Park
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  This acclaimed park is famous for its walking safari experiences and exceptional predator sightings. The Luangwa River creates a stunning backdrop for wildlife viewing.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  With one of the highest concentrations of leopards in Africa, South Luangwa offers unforgettable encounters with wildlife.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/zambia_south_luangwa.jpg" alt="South Luangwa" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/zambia_victoria_falls.jpg" alt="Victoria Falls" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Victoria Falls (Mosi-oa-Tunya)
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Experience one of the world's most spectacular natural wonders. The falls are known locally as "The Smoke That Thunders."
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Beyond the falls, Livingstone offers adrenaline-pumping activities including white-water rafting, bungee jumping, and helicopter tours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Parks Grid */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              BEST PLACES TO VISIT IN ZAMBIA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zambiaParks.map((park, index) => (
                <Link 
                  key={index}
                  to={park.path}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
                >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={park.image} 
                    alt={park.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-display font-bold text-xl">{park.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E50]">{park.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#D4C5B9] flex items-center justify-between">
                    <span className="text-[#D4A03A] font-bold">{park.price}</span>
                    <span className="text-[#D4A03A] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Activities */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              SAFARI ACTIVITIES IN ZAMBIA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariActivities.map((activity, index) => (
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
              BEST TIME TO VISIT ZAMBIA
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
                    <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.park}</td>
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
              <h4 className="font-bold text-[#2C3E50] mb-2">November to April</h4>
              <p className="text-[#2C3E50]/70 text-sm">Green season - lush landscapes, excellent birdwatching, lower prices, birthing season.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Transitional periods with improving wildlife viewing and great value.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Dry season - excellent wildlife viewing, walking safaris at their best.</p>
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
              ZAMBIA PACKAGES
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
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              LUXURY ACCOMMODATIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accommodations.map((lodging, index) => (
              <Link 
                key={index}
                to={lodging.path}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${lodging.image})` }}>
                  <div className="h-full bg-black/30"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{lodging.name}</h3>
                  <p className="text-[#D4A03A] text-sm mb-3">{lodging.location}</p>
                  <p className="text-[#2C3E50]">{lodging.description}</p>
                  </div>
                </Link>
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
            READY TO EXPLORE ZAMBIA?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Zambia safari. Our experts will create a tailored itinerary for your dream African adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
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
