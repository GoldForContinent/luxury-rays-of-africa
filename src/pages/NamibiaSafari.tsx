import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Mountain, Palmtree, Camera, Users, Sun } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "When is the best time to visit Namibia?",
    answer: "The best time for Namibia safaris is May to October during the dry season. The temperatures are mild, wildlife gathers around waterholes, and the skies are clear. The cooler winter months (June-August) offer the best game viewing."
  },
  {
    question: "Is Namibia safe for tourists?",
    answer: "Namibia is generally very safe for tourists. The country has a low crime rate, and popular tourist areas like Etosha, Sossusvlei, and the Skeleton Coast are well-established for visitors."
  },
  {
    question: "What makes Namibia unique for safaris?",
    answer: "Namibia offers unique desert-adapted wildlife, the world's tallest sand dunes at Sossusvlei, the vast salt pan of Etosha, and the dramatic Skeleton Coast. It's one of the least densely populated countries in Africa."
  },
  {
    question: "Do I need a 4x4 for Namibia?",
    answer: "Yes, a 4x4 vehicle is essential for Namibia, especially if visiting Sossusvlei, the Skeleton Coast, or Damaraland. Many roads are rough and sandy, and standard vehicles will struggle."
  },
  {
    question: "Can I combine Namibia with other countries?",
    answer: "Absolutely! Namibia pairs well with Botswana, South Africa, or Zambia. Many travelers fly into Johannesburg or Cape Town and connect to Namibia."
  }
]

const namibiaParks = [
  { name: "Etosha National Park", description: "Famous salt pan with excellent wildlife viewing at waterholes. Home to lions, elephants, giraffes, and springboks.", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", price: "From $2,400/pp/day", path: "/namibia-etosha-national-park" },
  { name: "Sossusvlei & Deadvlei", description: "Iconic red sand dunes including Dune 45 and Deadvlei clay pan with ancient camel thorn trees.", image: "https://images.unsplash.com/photo-1509316975850-ff9b5deb2cd4?w=800&auto=format&fit=crop", price: "From $2,400/pp/day", path: "/contact" },
  { name: "Skeleton Coast", description: "Remote and dramatic coastline with shipwrecks, seal colonies, and desert-adapted elephants.", image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&auto=format&fit=crop", price: "From $2,400/pp/day", path: "/contact" },
  { name: "Damaraland", description: "Home to desert-adapted elephants, black rhinos, and the famous Twyfelfontein rock engravings.", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", price: "From $2,400/pp/day", path: "/contact" },
  { name: "Namib Desert", description: "One of the oldest deserts in the world, spanning along the Atlantic coast with towering dunes.", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop", price: "From $2,400/pp/day", path: "/contact" },
  { name: "Kaokoveld", description: "Remote wilderness area in the northwest, known for desert lions and Himba communities.", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop", price: "From $2,400/pp/day", path: "/contact" }
]

const safariActivities = [
  { icon: <Eye className="w-8 h-8" />, title: "Game Drives", description: "Explore Etosha's waterholes in search of lions, elephants, and rhinos.", timing: "May-October" },
  { icon: <Mountain className="w-8 h-8" />, title: "Dune Climbing", description: "Climb the iconic dunes of Sossusvlei for breathtaking sunrise views.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography", description: "Capture dramatic landscapes, ancient trees, and desert wildlife.", timing: "Year-round" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Desert Walks", description: "Guided walks through desert landscapes to spot adapted wildlife.", timing: "May-October" },
  { icon: <Users className="w-8 h-8" />, title: "Cultural Visits", description: "Visit Himba communities and experience ancient traditions.", timing: "Year-round" },
  { icon: <Sun className="w-8 h-8" />, title: "Sunset Tours", description: "Watch the sun set over the Namib Desert dunes.", timing: "Year-round" }
]

const accommodations = [
  { name: "Ongava Lodge", location: "Etosha", description: "Luxury lodge overlooking a private waterhole with excellent game viewing.", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop" },
  { name: "Sossusvlei Lodge", location: "Sossusvlei", description: "Premium desert lodge with views of the dunes and star-filled skies.", image: "https://images.unsplash.com/photo-1509316975850-ff9b5deb2cd4?w=800&auto=format&fit=crop" },
  { name: "Okonjima Lodge", location: "DamaraLand", description: "Home to the AfriCat Foundation with leopard and rhino tracking.", image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&auto=format&fit=crop" }
]

const safariPackages = [
  {
    name: "10 Days Namibia Desert & Wildlife",
    price: "$3,850",
    description: "Experience the dunes of Sossusvlei and wildlife of Etosha in this classic journey",
    duration: "10 Days / 9 Nights",
    highlights: ["Sossusvlei dunes", "Etosha wildlife", "Desert adaptations", "Luxury lodges"]
  },
  {
    name: "14 Days Complete Namibia Experience",
    price: "$5,250",
    description: "From the Namib Desert to the Skeleton Coast and Damaraland",
    duration: "14 Days / 13 Nights",
    highlights: ["Namib Desert", "Skeleton Coast", "Damaraland", "Himba culture"]
  },
  {
    name: "18 Days Ultimate Namibia Safari",
    price: "$7,450",
    description: "The complete Namibian adventure covering all major highlights",
    duration: "18 Days / 17 Nights",
    highlights: ["Sossusvlei", "Etosha", "Skeleton Coast", "Kaokoveld", "Caprivi Strip"]
  }
]

const seasonalData = [
  { park: "Etosha", jan: "Good", feb: "Good", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Sossusvlei", jan: "Good", feb: "Good", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Skeleton Coast", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Good", jun: "Good", jul: "Good", aug: "Good", sep: "Good", oct: "Fair", nov: "Fair", dec: "Fair" },
  { park: "Damaraland", jan: "Good", feb: "Good", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Namib Desert", jan: "Good", feb: "Good", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Kaokoveld", jan: "Fair", feb: "Fair", mar: "Good", apr: "Good", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function NamibiaSafari() {
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
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&auto=format&fit=crop" 
          alt="Namibia Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Namibia Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            NAMIBIA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Desert & Wildlife
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

      {/* Why Visit Namibia */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY NAMIBIA IS A MUST-VISIT DESTINATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Namibia offers an extraordinary safari experience unlike any other. From the towering red dunes of Sossusvlei to the vast salt pan of Etosha, this land of contrast delivers unforgettable wildlife encounters in some of Africa's most dramatic landscapes.
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
                  Etosha National Park
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  One of Africa's largest national parks, Etosha is centered around a vast salt pan visible from space. The park supports abundant wildlife, with over 114 mammal species including lions, elephants, giraffes, and rhinos.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The park's waterholes provide exceptional game viewing, especially during the dry season when animals congregate to drink.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop" alt="Etosha National Park" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="https://images.unsplash.com/photo-1509316975850-ff9b5deb2cd4?w=800&auto=format&fit=crop" alt="Sossusvlei Dunes" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Sossusvlei Dunes
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Home to the world's tallest sand dunes, Sossusvlei offers otherworldly landscapes of deep orange and red dunes. The famous Dune 45 stands 325 meters high.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Visit Deadvlei, a white clay pan dotted with ancient dead camel thorn trees—a photographer's paradise.
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
              BEST PLACES TO VISIT IN NAMIBIA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {namibiaParks.map((park, index) => (
              <Link key={index} to={park.path} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
              SAFARI ACTIVITIES IN NAMIBIA
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
              BEST TIME TO VISIT NAMIBIA
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
              <h4 className="font-bold text-[#2C3E50] mb-2">November to April</h4>
              <p className="text-[#2C3E50]/70 text-sm">Hot temperatures, green season, excellent birdwatching, fewer tourists.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Transitional periods with pleasant weather and good wildlife viewing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Winter (Best)</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Cooler temperatures, excellent wildlife viewing, animals gather at waterholes.</p>
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
              NAMIBIA PACKAGES
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
            READY TO EXPLORE NAMIBIA?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Namibia safari. Our experts will create a tailored itinerary for your dream African adventure.
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
