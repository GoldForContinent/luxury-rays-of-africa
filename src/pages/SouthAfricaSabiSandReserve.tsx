import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Camera, Footprints, Sun, Palmtree } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const parkHighlights = [
  {
    title: "World-Class Leopard Viewing",
    description: "Sabi Sand Reserve is globally recognized as the best place to see leopards in the wild. The reserve's open terrain and abundant prey make these elusive cats easier to spot than anywhere else in Africa."
  },
  {
    title: "Exclusive Private Reserve",
    description: "As a private reserve, Sabi Sand offers an intimate safari experience with fewer vehicles, off-road driving permissions, and night game viewing capabilities that public parks cannot match."
  },
  {
    title: " Kruger Border Location",
    description: "Bordering the world-famous Kruger National Park, Sabi Sand shares an unfenced boundary allowing wildlife to migrate freely between the two areas, creating a massive ecosystem for animals."
  },
  {
    title: "Luxury Lodge Experience",
    description: "The reserve hosts some of Africa's most prestigious safari lodges, offering world-class accommodation, gourmet dining, and exceptional service in the heart of Big Five territory."
  }
]

const wildlifeList = [
  { category: "Big Five", species: ["African Lion", "African Leopard", "African Elephant", "African Buffalo", "White Rhino", "Black Rhino"] },
  { category: "Predators", species: ["Cheetah", "Spotted Hyena", "Wild Dog", "Crocodile"] },
  { category: "Plains Game", species: ["Zebra", "Giraffe", "Wildebeest", "Impala", "Kudu", "Sable Antelope", "Waterbuck"] },
  { category: "Birdlife", species: ["African Fish Eagle", "Kori Bustard", "Grey Hornbill", "Lilac-breasted Roller", "500+ species"] }
]

const seasonalData = [
  { month: "January", weather: "Hot & Summer", wildlife: "Good", activities: "Birdwatching, photography" },
  { month: "February", weather: "Hot & Summer", wildlife: "Good", activities: "Game drives, photography" },
  { month: "March", weather: "Warm & Autumn", wildlife: "Good", activities: "Game drives, walking safaris" },
  { month: "April", weather: "Warm & Transitional", wildlife: "Good", activities: "All activities available" },
  { month: "May", weather: "Mild & Dry", wildlife: "Very Good", activities: "Game drives, photography" },
  { month: "June", weather: "Cool & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "July", weather: "Cool & Dry", wildlife: "Excellent", activities: "Leopard viewing, game drives" },
  { month: "August", weather: "Cool & Dry", wildlife: "Excellent", activities: "All activities available" },
  { month: "September", weather: "Warm & Dry", wildlife: "Excellent", activities: "Predator action, photography" },
  { month: "October", weather: "Hot & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "November", weather: "Hot & Transitional", wildlife: "Good", activities: "Birdwatching, game drives" },
  { month: "December", weather: "Hot & Rainy", wildlife: "Good", activities: "Newborn wildlife, green season" }
]

const parkActivities = [
  { icon: <Eye className="w-8 h-8" />, title: "Morning Game Drives", description: "Depart at dawn to catch predators on the hunt. Expert trackers locate wildlife using spoor, calls, and local knowledge.", timing: "Year-round" },
  { icon: <Eye className="w-8 h-8" />, title: "Afternoon Drives & Night Safaris", description: "Experience the bush after dark with spotlights revealing nocturnal creatures like leopards, hyenas, and civets.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography Safaris", description: "Specialized photo vehicles and guides help capture professional wildlife images. Close encounters allow exceptional shots.", timing: "Year-round" },
  { icon: <Footprints className="w-8 h-8" />, title: "Bush Walks", description: "Experience the African bush on foot. Learn tracking skills, identify plants, and enjoy intimate wildlife encounters.", timing: "Year-round" },
  { icon: <Sun className="w-8 h-8" />, title: "Sundowner Drives", description: "Classic African experience - drinks in hand while watching sunset over the savannah with wildlife in view.", timing: "Year-round" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Bush Dining", description: "Dine under the African sky with lantern-lit dinners in remote locations. Authentic wilderness culinary experiences.", timing: "Year-round" }
]

const nearbyAttractions = [
  { name: "Kruger National Park", description: "Africa's premier wildlife reserve - open border", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop" },
  { name: "Cape Town", description: "World-class city experiences - 6 hour drive", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop" },
  { name: "Panorama Route", description: "Blyde River Canyon, God's Window - 4 hours", image: "https://images.unsplash.com/photo-1509316975850-ff9b5deb2cd4?w=800&auto=format&fit=crop" }
]

export default function SouthAfricaSabiSandReserve() {
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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&auto=format&fit=crop" 
          alt="Sabi Sand Reserve" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/south-africa-safaris" className="hover:text-[#D4A03A] transition-colors">South Africa</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Sabi Sand Reserve</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
            SABI SAND
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            RESERVE
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Premier Leopard Viewing in Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan Your Visit <ArrowRight size={18} />
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

      {/* Park Overview */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              AFRICA'S PREMIER WILDLIFE RESERVE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Sabi Sand Reserve is a prestigious private game reserve bordering the Kruger National Park. Renowned worldwide as the premier destination for leopard sightings, this exclusive reserve offers an unmatched Big Five safari experience with luxury lodges and intimate wildlife encounters.
          </p>
        </div>
      </section>

      {/* Park Highlights */}
      <section ref={addToRefs} className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {parkHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">{highlight.title}</h3>
                <p className="text-[#2C3E50]/80 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WILDLIFE IN SABI SAND
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeList.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-display font-bold text-lg text-[#D4A03A] mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.species.map((species, i) => (
                    <li key={i} className="text-[#2C3E50]/80 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A03A]"></span>
                      {species}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experiences</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4 mb-6">
              THINGS TO DO IN SABI SAND
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parkActivities.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-[#D4A03A] mb-4">{activity.icon}</div>
                <h3 className="text-white font-display font-bold text-xl mb-2">{activity.title}</h3>
                <p className="text-white/80 mb-3 text-sm">{activity.description}</p>
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
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Timing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              BEST TIME TO VISIT SABI SAND
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-[#2C3E50]">
                  <th className="p-3 text-left text-white font-semibold">Month</th>
                  <th className="p-3 text-left text-white font-semibold">Weather</th>
                  <th className="p-3 text-left text-white font-semibold">Wildlife Viewing</th>
                  <th className="p-3 text-left text-white font-semibold">Activities</th>
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((row, i) => (
                  <tr key={i} className="border-b border-[#D4C5B9]">
                    <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.month}</td>
                    <td className="p-3 text-[#2C3E50]/80">{row.weather}</td>
                    <td className="p-3 text-[#2C3E50]/80">{row.wildlife}</td>
                    <td className="p-3 text-[#2C3E50]/80">{row.activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #556B2F' }}>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Summer</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">November to April</h4>
              <p className="text-[#2C3E50]/70 text-sm">Green season with lush landscapes. Excellent birdwatching with migratory species. Newborn wildlife.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Transitional periods with pleasant weather and good wildlife viewing. Great value with fewer crowds.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Prime wildlife viewing. Dry conditions concentrate animals around water. Best for leopard sightings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              NEARBY ATTRACTIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${attraction.image})` }}>
                  <div className="h-full bg-black/30"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{attraction.name}</h3>
                  <p className="text-[#2C3E50]/70">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            READY TO EXPLORE SABI SAND?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience Africa's most exclusive wildlife reserve. Let our experts design your perfect Sabi Sand safari.
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
