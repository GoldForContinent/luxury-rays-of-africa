import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Ship, Anchor, Eye, Camera, Waves, Mountain } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const lakeHighlights = [
  {
    title: "Africa's Largest Man-Made Lake",
    description: "Lake Kariba spans approximately 280 kilometers with 5,000 kilometers of shoreline, creating a vast inland sea perfect for water-based wildlife experiences."
  },
  {
    title: "Drowned Forests",
    description: "The lake's flooded forests create hauntingly beautiful landscapes where tree tops emerge from the water like skeletal fingers, providing unique wildlife viewing."
  },
  {
    title: "Premier Fishing Destination",
    description: "Lake Kariba is famous for tiger fishing, one of Africa's most sought-after game fish. The lake also supports excellent bream fishing and catch-and-release sports fishing."
  },
  {
    title: "Houseboat Adventures",
    description: "Experience the ultimate relaxation on luxury houseboats, drifting past hippos and crocodiles while enjoying fully catered accommodations on the water."
  }
]

const wildlifeList = [
  { category: "Aquatic Life", species: ["Hippopotamus", "Nile Crocodile", "Tiger Fish", "Bream", "Catfish"] },
  { category: "Shore Wildlife", species: ["African Elephant", "Buffalo", "Zebra", "Impala", "Kudu"] },
  { category: "Predators", species: ["Lion", "Leopard", "Crocodile", "Spotted Hyena"] },
  { category: "Birdlife", species: ["African Fish Eagle", "Pelicans", "Herons", "Kingfishers", "300+ species"] }
]

const seasonalData = [
  { month: "January", weather: "Hot & Wet", fishing: "Good", activities: "Houseboating, birdwatching" },
  { month: "February", weather: "Hot & Wet", fishing: "Good", activities: "Houseboating, photography" },
  { month: "March", weather: "Hot & Wet", fishing: "Good", activities: "Boat safaris, wildlife viewing" },
  { month: "April", weather: "Warm", fishing: "Good", activities: "All activities available" },
  { month: "May", weather: "Dry Season Begins", fishing: "Excellent", activities: "Fishing, houseboating, game drives" },
  { month: "June", weather: "Cool & Dry", fishing: "Excellent", activities: "Peak fishing season, all activities" },
  { month: "July", weather: "Cool & Dry", fishing: "Excellent", activities: "Peak fishing season, all activities" },
  { month: "August", weather: "Cool & Dry", fishing: "Excellent", activities: "Peak fishing season, all activities" },
  { month: "September", weather: "Warm & Dry", fishing: "Excellent", activities: "Peak fishing, houseboating" },
  { month: "October", weather: "Hot & Dry", fishing: "Excellent", activities: "Fishing, game viewing" },
  { month: "November", weather: "Hot", fishing: "Good", activities: "Boat safaris, wildlife viewing" },
  { month: "December", weather: "Hot & Wet", fishing: "Good", activities: "Houseboating, birdwatching" }
]

const activities = [
  { icon: <Anchor className="w-8 h-8" />, title: "Houseboat Safaris", description: "Luxury floating accommodations with private decks for wildlife viewing, fully catered with gourmet meals.", timing: "Year-round" },
  { icon: <Waves className="w-8 h-8" />, title: "Tiger Fishing", description: "Challenge the powerful tiger fish with expert guides. Catch-and-release tournaments available.", timing: "May-October" },
  { icon: <Ship className="w-8 h-8" />, title: "Boat Cruises", description: "Sunset cruises, sunrise trips, and day excursions to spot hippos, crocodiles, and elephants along the shore.", timing: "Year-round" },
  { icon: <Eye className="w-8 h-8" />, title: "Game Viewing", description: "Spot elephants swimming between islands, hippos in the shallows, and wildlife along the lake shores.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography Tours", description: "Capture the drowned forests, wildlife, and stunning African sunsets from the water.", timing: "Year-round" },
  { icon: <Mountain className="w-8 h-8" />, title: "Matusadona Safaris", description: "Combine lake adventures with Matusadona National Park for land-based wildlife viewing.", timing: "May-October" }
]

const nearbyAttractions = [
  { name: "Matusadona National Park", description: "Lake-side wilderness with Big Five - boat transfer", image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&auto=format&fit=crop" },
  { name: "Mana Pools", description: "UNESCO walking safari site - 4 hour drive", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop" },
  { name: "Victoria Falls", description: "World-famous falls - 5 hour drive", image: "https://images.unsplash.com/photo-1537944431265-5b30d01d5db9?w=800&auto=format&fit=crop" }
]

export default function LakeKaribaZimbabwe() {
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
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1600&auto=format&fit=crop" 
          alt="Lake Kariba" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/zimbabwe-safaris" className="hover:text-[#D4A03A] transition-colors">Zimbabwe Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Lake Kariba</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            LAKE
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            KARIBA
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Houseboat Adventures & Tiger Fishing
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
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

      {/* Overview */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              AFRICA'S INLAND SEA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Lake Kariba is one of Africa's largest man-made lakes, created in 1959 when the Kariba Dam was constructed across the Zambezi River. This magnificent reservoir stretches for 280 kilometers along the Zambezi Gorge, creating a vast inland sea surrounded by pristine wilderness.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                The lake's flooded tree stumps create a hauntingly beautiful drowned forest, visible above the water's surface. These eerie formations provide unique wildlife viewing opportunities, with elephants often swimming between islands and hippos congregating in the shallows.
              </p>
              <div className="bg-[#FAF3E0] p-6 rounded-xl">
                <h4 className="font-bold text-[#2C3E50] mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-[#2C3E50]/80">
                  <li>• Location: Northwestern Zimbabwe</li>
                  <li>• Length: 280 km</li>
                  <li>• Shoreline: 5,000+ km</li>
                  <li>• Created: 1959</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&auto=format&fit=crop" 
                alt="Lake Kariba" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WHY VISIT LAKE KARIBA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {lakeHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-4">{highlight.title}</h4>
                <p className="text-[#2C3E50]/80 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WILDLIFE AT LAKE KARIBA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeList.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-display font-bold text-lg text-[#D4A03A] mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.species.map((species, i) => (
                    <li key={i} className="text-[#2C3E50]/80 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#D4A03A] rounded-full"></span>
                      {species}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Activities</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4 mb-6">
              LAKE ADVENTURES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
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

      {/* Best Time */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Timing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WHEN TO VISIT LAKE KARIBA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-orange-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #f97316' }}>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Fishing Peak</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
                <p className="text-[#2C3E50]/70 text-sm">Prime tiger fishing season with optimal conditions. Wildlife gathers at water sources, excellent for viewing.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #16a34a' }}>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Green Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">November to April</h4>
                <p className="text-[#2C3E50]/70 text-sm">Lush landscapes, excellent birdwatching with migratory species, and lower prices at lodges.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #3b82f6' }}>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase mb-3">Year-Round</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">Houseboating</h4>
                <p className="text-[#2C3E50]/70 text-sm">Available throughout the year with different seasonal experiences and price points.</p>
              </div>
            </div>
            
            <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-6">Monthly Overview</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[#F5E6D3]">
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Month</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Weather</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Fishing</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Activities</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalData.map((row, i) => (
                    <tr key={i} className="border-b border-[#D4C5B9]">
                      <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.month}</td>
                      <td className="p-3 text-[#2C3E50]/80">{row.weather}</td>
                      <td className="p-3 text-[#2C3E50]/80">{row.fishing}</td>
                      <td className="p-3 text-[#2C3E50]/80">{row.activities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Getting There</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              LOCATION & ACCESS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Getting to Lake Kariba</h4>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Air</h5>
                  <p className="text-[#2C3E50]/80">Charter flights to Kariba Airport from Victoria Falls or Harare. Many lodges offer transfer flights and boat transfers.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Road</h5>
                  <p className="text-[#2C3E50]/80">Self-drive from Victoria Falls (5 hours) or Harare (5 hours). Roads are generally good, though a 4x4 recommended for lodge access.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Boat</h5>
                  <p className="text-[#2C3E50]/80">Speedboat or houseboat transfers from Kariba Town to various lakeside lodges and camps.</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Nearby Attractions</h4>
              <div className="space-y-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg flex">
                    <div className="w-32 h-24 flex-shrink-0">
                      <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-[#2C3E50]">{attraction.name}</h5>
                      <p className="text-[#2C3E50]/70 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-[8vw] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1600&auto=format&fit=crop" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            EXPLORE LAKE KARIBA
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Discover Africa's premier lake destination. From luxury houseboat adventures to trophy tiger fishing, Lake Kariba offers unique water-based experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">Plan Your Safari</Link>
            <Link to="/contact" className="bg-transparent border-3 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              Speak With Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
