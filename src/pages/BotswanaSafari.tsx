import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Anchor, Palmtree, Camera, Sun, Mountain } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "When is the best time to visit Botswana?",
    answer: "The optimal period is May to October during the dry season. Wildlife viewing is excellent as animals congregate around water sources and vegetation is sparse, making sightings easier."
  },
  {
    question: "Is Botswana safe for tourists?",
    answer: "Botswana is considered one of Africa's safest and most exclusive safari destinations. The country has excellent tourism infrastructure and well-trained guides."
  },
  {
    question: "Why is Botswana known for luxury safaris?",
    answer: "Botswana follows a high-value, low-volume tourism policy with limited visitor numbers and exclusive private reserves. This ensures uncrowded experiences and premium accommodations."
  },
  {
    question: "What makes the Okavango Delta special?",
    answer: "The Okavango Delta is a UNESCO World Heritage site and one of the world's largest inland deltas. It offers unique water-based safaris using traditional mokoro canoes."
  },
  {
    question: "Can I combine Botswana with other destinations?",
    answer: "Absolutely! Many travelers combine Botswana with Victoria Falls in Zimbabwe/Zambia or extend to South Africa's Kruger National Park."
  }
]

const botswanaParks = [
  { name: "Okavango Delta", description: "A UNESCO World Heritage site and Africa's largest inland delta. Experience water-based safaris through winding channels.", image: "/botswana_okavango.jpg", price: "From $2,500/pp/day", path: "/botswana-safaris" },
  { name: "Chobe National Park", description: "Home to Africa's largest elephant population. Witness thousands of elephants gathering along the Chobe River.", image: "/botswana_chobe.jpg", price: "From $2,500/pp/day", path: "/botswana-chobe-national-park" },
  { name: "Moremi Game Reserve", description: "One of Botswana's most beautiful reserves with diverse ecosystems. Excellent predator sightings including lions and leopards.", image: "/botswana_moremi.jpg", price: "From $2,500/pp/day", path: "/botswana-safaris" },
  { name: "Makgadikgadi Pans", description: "Vast salt pans offering otherworldly landscapes. Ancient archaeological sites and unique desert-adapted wildlife.", image: "/botswana_makgadikgadi.jpg", price: "From $2,500/pp/day", path: "/botswana-makgadikgadi-pans" },
  { name: "Central Kalahari", description: "The second largest game reserve in the world. Desert-adapted wildlife and incredible stargazing opportunities.", image: "/botswana_kalahari.jpg", price: "From $2,500/pp/day", path: "/botswana-central-kalahari" },
  { name: "Nxai Pan National Park", description: "Famous for the annual zebra migration. Excellent for big cat sightings and iconic baobab trees.", image: "/botswana_nxai.jpg", price: "From $2,500/pp/day", path: "/botswana-safaris" }
]

const safariActivities = [
  { icon: <Eye className="w-8 h-8" />, title: "Mokoro Safaris", description: "Glide through the delta in traditional dugout canoes for intimate wildlife encounters.", timing: "May-October" },
  { icon: <Anchor className="w-8 h-8" />, title: "River Cruises", description: "Chobe River boat cruises offering incredible elephant and hippo sightings.", timing: "May-October" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography Safaris", description: "Expert-guided photo tours in exclusive private concessions.", timing: "Year-round" },
  { icon: <Mountain className="w-8 h-8" />, title: "Walking Safaris", description: "Explore the bush on foot with experienced trackers in private reserves.", timing: "May-October" },
  { icon: <Sun className="w-8 h-8" />, title: "Night Drives", description: "Spot nocturnal predators and see the African stars in private reserves.", timing: "Year-round" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Fly-In Camps", description: "Luxury tented camps accessible only by small aircraft for exclusive experiences.", timing: "Year-round" }
]

const accommodations = [
  { name: "Xaranna Okavango Delta Camp", location: "Okavango Delta", description: "Luxury tented camp on a private island with stunning delta views and excellent wildlife.", image: "/botswana_luxury1.jpg" },
  { name: "Chobe Game Lodge", location: "Chobe", description: "Elegant lodge on the Chobe River with panoramic views and exceptional elephant sightings.", image: "/botswana_luxury2.jpg" },
  { name: "Camp Kalahari", location: "Makgadikgadi", description: "Authentic safari camp in the ancient salt pans with adventuresome excursions.", image: "/botswana_luxury3.jpg" }
]

const safariPackages = [
  {
    name: "7 Days Okavango Delta Explorer",
    price: "$3,850",
    description: "Experience the magic of the delta with mokoro safaris and Big Five wildlife",
    duration: "7 Days / 6 Nights",
    highlights: ["Mokoro safaris", "Big Five viewing", "Delta flights", "Luxury camps"]
  },
  {
    name: "9 Days Botswana Wildlife Odyssey",
    price: "$4,950",
    description: "Explore Okavango, Chobe and Moremi in one comprehensive journey",
    duration: "9 Days / 8 Nights",
    highlights: ["Okavango Delta", "Chobe River cruise", "Moremi Game Reserve", "Elephant viewing"]
  },
  {
    name: "12 Days Ultimate Botswana Safari",
    price: "$6,850",
    description: "Complete Botswana experience from delta to desert pans",
    duration: "12 Days / 11 Nights",
    highlights: ["Okavango Delta", "Chobe", "Makgadikgadi Pans", "Central Kalahari"]
  }
]

const seasonalData = [
  { park: "Okavango Delta", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
  { park: "Moremi Reserve", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
  { park: "Chobe National Park", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
  { park: "Central Kalahari", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Good", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
  { park: "Makgadikgadi Pans", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
  { park: "Nxai Pan National Park", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function BotswanaSafari() {
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
          src="/botswana_hero.jpg" 
          alt="Botswana Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Botswana Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            BOTSWANA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Exclusive Wilderness
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

      {/* Why Visit Botswana */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY BOTSWANA IS AFRICA'S PREMIER SAFARI DESTINATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Botswana stands apart as Africa's most exclusive safari destination, offering a sophisticated blend of untamed wilderness and luxury. With its pioneering high-value, low-volume approach, the country provides intimate wildlife encounters in pristine private reserves where few travelers venture.
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
                  Okavango Delta
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  This UNESCO World Heritage site transforms annually as the Okavango River spills into the inland delta, creating a lush paradise of waterways, lagoons, and islands.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Explore this water wonderland by traditional mokoro canoe, encountering hippos, crocodiles, and countless bird species in one of Africa's most unique ecosystems.
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
                <img src="/botswana_chobe.jpg" alt="Chobe National Park" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Chobe National Park
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Home to the largest concentration of elephants on Earth, Chobe offers extraordinary wildlife viewing along the eponymous river.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Experience the spectacle of hundreds of elephants crossing the river at sunset—one of Africa's most memorable wildlife moments.
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
              BEST PLACES TO VISIT IN BOTSWANA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {botswanaParks.map((park, index) => (
              <Link key={index} to={park.path} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block">
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
              SAFARI ACTIVITIES IN BOTSWANA
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
              BEST TIME TO VISIT BOTSWANA
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
              <p className="text-[#2C3E50]/70 text-sm">Green Season - lush landscapes, excellent birdwatching, lower prices, baby animals.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April, May & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Mix of green season beauty with improving wildlife viewing. Great value.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Dry season - excellent wildlife viewing, animals congregate at water sources.</p>
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
              BOTSWANA PACKAGES
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
            READY TO EXPLORE BOTSWANA?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Botswana safari. Our experts will create a tailored itinerary for your dream African adventure.
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
