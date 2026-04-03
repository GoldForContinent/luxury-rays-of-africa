import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Palmtree, Camera, Users, Sun, Anchor } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "When is the best time to visit South Africa for safaris?",
    answer: "The optimal period is May to September during the dry winter months. Wildlife viewing is excellent as animals congregate around water sources and vegetation is sparse, making sightings easier."
  },
  {
    question: "Is South Africa safe for tourists?",
    answer: "Yes, South Africa is considered one of Africa's safer safari destinations. Popular tourist areas and private reserves have excellent security measures and professional guides."
  },
  {
    question: "What wildlife can I see in South Africa?",
    answer: "South Africa offers the full Big Five experience: lion, leopard, rhinoceros, elephant, and Cape buffalo. You can also see giraffes, zebras, wildebeests, and over 500 bird species."
  },
  {
    question: "Do I need malaria medication for South Africa?",
    answer: "The Kruger region requires malaria prophylaxis. However, malaria-free options exist in Madikwe, Eastern Cape reserves, and Addo Elephant Park."
  },
  {
    question: "Can I combine safari with Cape Town?",
    answer: "Absolutely! Many travelers combine Kruger safaris with Cape Town. You can fly or drive between these destinations within a few hours."
  },
  {
    question: "What makes South Africa different from other safari destinations?",
    answer: "South Africa offers incredible diversity - from world-class Big Five safaris to wine tasting, beaches, and city experiences. The private reserves provide exclusive game viewing."
  }
]

const southAfricaParks = [
  { name: "Kruger National Park", description: "One of Africa's largest and most famous game reserves. Home to the highest concentration of Big Five in South Africa.", image: "/south_africa_kruger.jpg", price: "From $650/pp/day" },
  { name: "Sabi Sands Reserve", description: "World-renowned for exceptional leopard sightings. Exclusive private reserve bordering Kruger with luxury lodges.", image: "/south_africa_sabi_sands.jpg", price: "From $650/pp/day" },
  { name: "Madikwe Game Reserve", description: "Top malaria-free destination. Famous for African wild dog sightings and complete Big Five experience.", image: "/south_africa_madikwe.jpg", price: "From $650/pp/day" },
  { name: "Addo Elephant Park", description: "Third largest national park in South Africa. Features large elephant herds and diverse wildlife.", image: "/south_africa_addo.jpg", price: "From $650/pp/day" },
  { name: "Table Mountain National Park", description: "Iconic Cape Town landmark. Cable car to summit offers panoramic views of the city and coastline.", image: "/south_africa_table_mountain.jpg", price: "From $650/pp/day" },
  { name: "Garden Route", description: "Scenic coastal drive featuring forests, beaches, and wildlife. Tsitsikamma and Knysna highlights.", image: "/south_africa_garden_route.jpg", price: "From $650/pp/day" }
]

const safariActivities = [
  { icon: <Eye className="w-8 h-8" />, title: "Big Five Game Drives", description: "Experience the legendary Kruger and private reserves with expert trackers for lion, leopard, rhino, elephant, and buffalo.", timing: "May-September" },
  { icon: <Eye className="w-8 h-8" />, title: "Leopard Tracking", description: "Sabi Sands offers the world's best leopard sightings. Watch these elusive cats in their natural habitat.", timing: "May-September" },
  { icon: <Eye className="w-8 h-8" />, title: "Walking Safaris", description: "Guided bush walks in private reserves provide intimate wildlife encounters and tracking skills.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Hot Air Balloon", description: "Float over the African bush at sunrise for breathtaking views and champagne breakfast.", timing: "May-September" },
  { icon: <Anchor className="w-8 h-8" />, title: "Whale Watching", description: "Hermanus offers world-class whale watching from July to November along the coastline.", timing: "July-November" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Beach Holidays", description: "Explore pristine beaches from Cape Town to the Wild Coast. Crystal clear waters and scenic beauty.", timing: "November-March" },
  { icon: <Sun className="w-8 h-8" />, title: "Wine Tasting", description: "Stellenbosch and Franschhoek offer award-winning wine estates with gourmet experiences.", timing: "Year-round" },
  { icon: <Users className="w-8 h-8" />, title: "Cultural Tours", description: "Visit Robben Island, Cape Town city tours, and authentic township experiences.", timing: "Year-round" }
]

const accommodations = [
  { name: "Singita Boulders Lodge", location: "Sabi Sands", description: "Ultra-luxury lodge with private suites, plunge pools, and world-class game viewing.", image: "/south_africa_luxury1.jpg" },
  { name: "Lion Sands Ivory Lodge", location: "Sabi Sands", description: "Exclusive suites with floor-to-ceiling glass walls. Personal trackers and intimate wildlife encounters.", image: "/south_africa_luxury2.jpg" },
  { name: "Madikwe Safari Lodge", location: "Madikwe Reserve", description: "Malaria-free luxury in a Big Five reserve. Excellent wild dog and rhino sightings.", image: "/south_africa_luxury3.jpg" }
]

const safariPackages = [
  {
    name: "6 Days Kruger Big Five Safari",
    price: "$2,850",
    description: "Experience the best of Kruger National Park with expert guides and luxury lodges",
    duration: "6 Days / 5 Nights",
    highlights: ["Kruger National Park", "Big Five viewing", "Private reserves", "Luxury lodges"]
  },
  {
    name: "10 Days South Africa Safari & Cape",
    price: "$4,450",
    description: "Combine world-class safaris with Cape Town and wine country experiences",
    duration: "10 Days / 9 Nights",
    highlights: ["Kruger", "Cape Town", "Wine tasting", "Table Mountain"]
  },
  {
    name: "14 Days Ultimate South Africa",
    price: "$6,250",
    description: "Complete South Africa experience from Kruger to the Garden Route",
    duration: "14 Days / 13 Nights",
    highlights: ["Kruger", "Sabi Sands", "Garden Route", "Cape Town", "Whale watching"]
  }
]

const seasonalData = [
  { park: "Kruger", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Sabi Sands", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Madikwe", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Addo", jan: "Good", feb: "Good", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Garden Route", jan: "Best", feb: "Best", mar: "Best", apr: "Good", may: "Good", jun: "Good", jul: "Good", aug: "Good", sep: "Good", oct: "Best", nov: "Best", dec: "Best" },
  { park: "Cape Town", jan: "Best", feb: "Best", mar: "Best", apr: "Good", may: "Good", jun: "Fair", jul: "Fair", aug: "Fair", sep: "Good", oct: "Best", nov: "Best", dec: "Best" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function SouthAfricaSafari() {
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
          src="/south_africa_hero.jpg" 
          alt="South Africa Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">South Africa Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            SOUTH AFRICA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Big Five & Beyond
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

      {/* Why Visit South Africa */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY SOUTH AFRICA IS A MUST-VISIT SAFARI DESTINATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            South Africa offers an unparalleled safari experience combining world-class Big Five game viewing with diverse landscapes, from the legendary Kruger National Park to the stunning Cape coastline. With over 20 national parks and premier private reserves, it delivers exceptional wildlife encounters alongside luxury accommodations.
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
                  Kruger National Park
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  South Africa's flagship protected area spans nearly 2 million hectares of diverse savanna. The park hosts the highest concentration of Big Five in the country, with over 1,500 lions and numerous leopards.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Self-drive or guided safaris offer incredible sightings. The park maintains excellent road networks and rest camps for all budgets.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/south_africa_kruger.jpg" alt="Kruger National Park" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/south_africa_sabi_sands.jpg" alt="Sabi Sands Reserve" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Sabi Sands Game Reserve
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  This exclusive private reserve shares an unfenced border with Kruger, offering some of Africa's finest wildlife viewing. World-renowned for leopard encounters with high sighting frequency.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Luxurious lodges provide personal guides and 4x4 vehicles, ensuring intimate wildlife encounters away from crowds.
                </p>
              </div>
            </div>
          </div>

          <div ref={addToRefs}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Cape Town & Winelands
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Beyond wildlife, South Africa offers vibrant city culture, iconic Table Mountain, and world-class wine estates in Stellenbosch and Franschhoek.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Combine safari adventures with gourmet dining, pristine beaches, and unique experiences like penguin viewing at Boulders Beach.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/south_africa_table_mountain.jpg" alt="Cape Town" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
              BEST PLACES TO VISIT IN SOUTH AFRICA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {southAfricaParks.map((park, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
                  <div className="mt-4 pt-4 border-t border-[#D4C5B9]">
                    <span className="text-[#D4A03A] font-bold">{park.price}</span>
                  </div>
                </div>
              </div>
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
              SAFARI ACTIVITIES IN SOUTH AFRICA
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
              BEST TIME TO VISIT SOUTH AFRICA
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
                    {Object.entries(row).slice(1).map(([, val], j) => (
                      <td key={j} className={`p-3 text-center text-xs ${getRatingColor(val)}`}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #556B2F' }}>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Summer</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">November to March</h4>
              <p className="text-[#2C3E50]/70 text-sm">Best for Cape Town and garden route. Warm weather, beach season, whale watching starts.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">March-April & October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Good weather, fewer crowds, excellent for game viewing in Kruger.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Winter (Best)</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May to September</h4>
              <p className="text-[#2C3E50]/70 text-sm">Peak safari season - dry weather, excellent wildlife viewing, animals at waterholes.</p>
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
              SOUTH AFRICA PACKAGES
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
            READY TO EXPLORE SOUTH AFRICA?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect South Africa safari. Our experts will create a tailored itinerary for your dream African adventure.
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
