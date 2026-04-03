import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Mountain, Ship, Anchor, Eye, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const parkHighlights = [
  {
    title: "Lake-Based Safari Adventures",
    description: "Experience unique water-based wildlife viewing on Lake Kariba's serene waters. Watch elephants swim between islands and witness hippos lounging in the shallows."
  },
  {
    title: "Exceptional Elephant Populations",
    description: "Matusadona hosts impressive herds of elephants, particularly during the dry season when they congregate along the lake shores seeking water and grazing."
  },
  {
    title: "Rhino Conservation Success",
    description: "The park serves as a vital sanctuary for both black and white rhinos, with dedicated conservation efforts ensuring growing populations."
  },
  {
    title: "Predator Hotspot",
    description: "Lions thrive in Matusadona's diverse habitats, with excellent opportunities for spotting these apex predators during game drives and walking safaris."
  }
]

const wildlifeList = [
  { category: "Big Five", species: ["African Elephant", "African Lion", "African Leopard", "African Buffalo", "Black Rhino", "White Rhino"] },
  { category: "Herbivores", species: ["Cape Buffalo", "Giraffe", "Zebra", "Wildebeest", "Impala", "Kudu", "Waterbuck"] },
  { category: "Predators", species: ["Lion", "Leopard", "Cheetah", "Spotted Hyena"] },
  { category: "Aquatic Life", species: ["Hippopotamus", "Nile Crocodile", "Various fish species"] },
  { category: "Birdlife", species: ["African Fish Eagle", " Goliath Heron", "Pelicans", "Kingfishers", "Over 400 species"] }
]

const seasonalData = [
  { month: "January", weather: "Hot & Wet", wildlife: "Good", activities: "Boat safaris, birdwatching" },
  { month: "February", weather: "Hot & Wet", wildlife: "Good", activities: "Boat safaris, birdwatching" },
  { month: "March", weather: "Hot & Wet", wildlife: "Good", activities: "Boat safaris, fishing" },
  { month: "April", weather: "Warm & Transitional", wildlife: "Good", activities: "Game drives, walking safaris" },
  { month: "May", weather: "Dry Season Begins", wildlife: "Very Good", activities: "All activities available" },
  { month: "June", weather: "Cool & Dry", wildlife: "Excellent", activities: "Game drives, boat safaris, fishing" },
  { month: "July", weather: "Cool & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "August", weather: "Cool & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "September", weather: "Warm & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "October", weather: "Hot & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "November", weather: "Hot & Transitional", wildlife: "Good", activities: "Game drives, boat safaris" },
  { month: "December", weather: "Hot & Wet", wildlife: "Good", activities: "Boat safaris, birdwatching" }
]

const parkActivities = [
  { icon: <Ship className="w-8 h-8" />, title: "Lake Kariba Safaris", description: "Cruise the massive reservoir for unique water-based wildlife viewing. Spot hippos, crocodiles, and elephants bathing on the shores.", timing: "Year-round" },
  { icon: <Mountain className="w-8 h-8" />, title: "Walking Safaris", description: "Explore the bush on foot with expert guides. Track wildlife and learn about smaller creatures and plant life often missed from vehicles.", timing: "May-October" },
  { icon: <Eye className="w-8 h-8" />, title: "Game Drives", description: "Morning and afternoon drives through diverse habitats. Excellent for Big Five viewing, especially lions and elephants.", timing: "Year-round" },
  { icon: <Anchor className="w-8 h-8" />, title: "Fishing Expeditions", description: "Lake Kariba offers exceptional tiger fishing and bream fishing. Charter boats available for fishing enthusiasts.", timing: "June-November" },
  { icon: <MapPin className="w-8 h-8" />, title: "Rhino Tracking", description: "Join conservation teams for guided rhino tracking experiences. Learn about vital anti-poaching efforts.", timing: "Year-round" },
  { icon: <Ship className="w-8 h-8" />, title: "Canoe Trails", description: "Paddle through hidden channels and floodplains for an intimate water-level perspective of the ecosystem.", timing: "May-October" }
]

const nearbyAttractions = [
  { name: "Lake Kariba", description: "Africa's largest man-made lake, perfect for houseboat adventures and fishing", image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&auto=format&fit=crop" },
  { name: "Kariba Town", description: "Gateway town with markets and local culture, departure point for lake excursions", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop" },
  { name: "Mana Pools", description: "UNESCO site offering walking safaris along the Zambezi, 4-hour drive away", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop" }
]

export default function ZimbabweMatusadonaNationalPark() {
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
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1600&auto=format&fit=crop" 
          alt="Matusadona National Park" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/zimbabwe-safaris" className="hover:text-[#D4A03A] transition-colors">Zimbabwe Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Matusadona National Park</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            MATUSADONA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            NATIONAL PARK
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Lake Kariba Wilderness Safari Experience
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

      {/* Park Overview */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              THE LAKE-SIDE WILDERNESS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Matusadona National Park encompasses over 1,500 square kilometers of spectacular wilderness along the southern shores of Lake Kariba in Zimbabwe. The park offers a unique combination of terrestrial and aquatic safari experiences, making it a distinctive destination for discerning travelers.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                The name "Matusadona" derives from the local Shona language, reflecting the area's deep cultural heritage. This lakeside sanctuary provides critical habitat for elephants, lions, rhinos, and diverse birdlife, all set against the dramatic backdrop of Lake Kariba's vast waters.
              </p>
              <div className="bg-[#FAF3E0] p-6 rounded-xl">
                <h4 className="font-bold text-[#2C3E50] mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-[#2C3E50]/80">
                  <li>• Location: Southern Zimbabwe, Lake Kariba shore</li>
                  <li>• Size: Approximately 1,500 km²</li>
                  <li>• Established: 1963</li>
                  <li>• Best for: Lake safaris, Big Five, rhino tracking</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&auto=format&fit=crop" 
                alt="Matusadona Landscape" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Matusadona */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[#0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WHY VISIT MATUSADONA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {parkHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-4">{highlight.title}</h4>
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
              WILDLIFE IN MATUSADONA
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

      {/* Safari Activities */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Activities</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4 mb-6">
              SAFARI EXPERIENCES
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
              WHEN TO VISIT MATUSADONA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #16a34a' }}>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Best Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
                <p className="text-[#2C3E50]/70 text-sm">Dry season offers exceptional wildlife viewing. Animals concentrate around water sources, and the vegetation thins making sightings easier.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #f97316' }}>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">April & November</h4>
                <p className="text-[#2C3E50]/70 text-sm">Transitional periods with good conditions. Lush landscapes after rains, fewer tourists, and improving wildlife viewing.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #3b82f6' }}>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase mb-3">Green Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">December to March</h4>
                <p className="text-[#2C3E50]/70 text-sm">Summer rains transform the landscape. Excellent for birdwatching, but wildlife more dispersed and some roads impassable.</p>
              </div>
            </div>
            
            <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-6">Monthly Overview</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[#F5E6D3]">
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Month</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Weather</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Wildlife</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Activities</th>
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
          </div>
        </div>
      </section>

      {/* Location & Access */}
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
              <h4 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Getting to Matusadona</h4>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Air</h5>
                  <p className="text-[#2C3E50]/80">Charter flights from Victoria Falls, Harare, or Kariba Town land at Matusadona's airstrip. Flight duration is approximately 1-1.5 hours from major hubs.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Road</h5>
                  <p className="text-[#2C3E50]/80">Self-drive from Victoria Falls (approximately 6 hours) or Harare (5 hours). A 4x4 vehicle is recommended, especially during the wet season. Most lodges provide transfers.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Boat</h5>
                  <p className="text-[#2C3E50]/80">Houseboats and speedboats from Kariba Town offer scenic lake access to various lodges and camps within the park.</p>
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
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1600&auto=format&fit=crop" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            EXPLORE MATUSADONA
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Combine lake-based adventures with classic Big Five wildlife viewing in one of Zimbabwe's most scenic national parks. Let our experts craft your perfect Matusadona safari.
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
