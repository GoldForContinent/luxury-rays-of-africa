import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Mountain, Ship, Eye, MapPin, Camera } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const parkHighlights = [
  {
    title: "The Place of Elephants",
    description: "Gonarezhou lives up to its name, hosting large herds of elephants that wander the park's diverse landscapes. The park supports one of Zimbabwe's most significant elephant populations."
  },
  {
    title: "Iconic Chilojo Cliffs",
    description: "The spectacular red sandstone Chilojo Cliffs rise dramatically along the Runde River, offering breathtaking panoramic views and excellent photography opportunities."
  },
  {
    title: "Part of Great Limpopo Park",
    description: "As part of the Great Limpopo Transfrontier Conservation Area, Gonarezhou connects with South Africa's Kruger and Mozambique's Limpopo, creating a vast cross-border ecosystem."
  },
  {
    title: "Untamed Wilderness",
    description: "One of Zimbabwe's most remote and less-visited parks, offering genuine wilderness experiences with low tourist densities and authentic safari adventures."
  }
]

const wildlifeList = [
  { category: "Big Five", species: ["African Elephant", "African Lion", "African Leopard", "African Buffalo", "Black Rhino", "White Rhino"] },
  { category: "Large Mammals", species: ["Giraffe", "Zebra", "Wildebeest", "Eland", "Kudu", "Sable Antelope"] },
  { category: "Predators", species: ["Lion", "Leopard", "Cheetah", "Spotted Hyena", "Wild Dog"] },
  { category: "Aquatic Life", species: ["Nile Crocodile", "Hippo", "Various fish species"] },
  { category: "Birdlife", species: ["Bald Eagle", "Pelicans", "Storks", "Kingfishers", "450+ species"] }
]

const seasonalData = [
  { month: "January", weather: "Hot & Wet", wildlife: "Good", activities: "Birdwatching, game drives" },
  { month: "February", weather: "Hot & Wet", wildlife: "Good", activities: "Birdwatching, game drives" },
  { month: "March", weather: "Hot & Wet", wildlife: "Fair", activities: "Photography, birdwatching" },
  { month: "April", weather: "Warm & Transitional", wildlife: "Good", activities: "Game drives, walking safaris" },
  { month: "May", weather: "Dry Season Begins", wildlife: "Very Good", activities: "All activities available" },
  { month: "June", weather: "Cool & Dry", wildlife: "Excellent", activities: "Game drives, walking safaris" },
  { month: "July", weather: "Cool & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "August", weather: "Cool & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "September", weather: "Warm & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "October", weather: "Hot & Dry", wildlife: "Excellent", activities: "Game drives, photography" },
  { month: "November", weather: "Hot & Transitional", wildlife: "Good", activities: "Game drives, birdwatching" },
  { month: "December", weather: "Hot & Wet", wildlife: "Good", activities: "Birdwatching, photography" }
]

const parkActivities = [
  { icon: <Eye className="w-8 h-8" />, title: "Game Drives", description: "Explore the park's diverse habitats in 4x4 vehicles. Best for spotting elephants, lions, and the diverse plains game.", timing: "Year-round" },
  { icon: <Mountain className="w-8 h-8" />, title: "Walking Safaris", description: "Experience the bush intimately on foot. Discover smaller wildlife, tracks, and plant life with expert guides.", timing: "May-October" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography Safaris", description: "Capture the park's dramatic landscapes and wildlife. The Chilojo Cliffs provide stunning backdrops.", timing: "Year-round" },
  { icon: <MapPin className="w-8 h-8" />, title: "Chilojo Cliffs Visit", description: "Hike or drive to the iconic red sandstone cliffs for panoramic views and photographic opportunities.", timing: "Year-round" },
  { icon: <Ship className="w-8 h-8" />, title: "River Safaris", description: "Explore the Runde River by boat for hippos, crocodiles, and waterbird viewing.", timing: "Year-round" },
  { icon: <Eye className="w-8 h-8" />, title: "Night Drives", description: "Discover nocturnal wildlife with spotlight drives in private concessions. Spot leopards, hyenas, and smaller mammals.", timing: "May-October" }
]

const nearbyAttractions = [
  { name: "Kruger National Park", description: "South Africa's premier park - cross-border safari experience", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop" },
  { name: "Great Zimbabwe Ruins", description: "Ancient stone city and UNESCO World Heritage Site", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop" },
  { name: "Mana Pools", description: "UNESCO site for walking safaris along the Zambezi", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop" }
]

export default function ZimbabweGonarezhouNationalPark() {
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
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&auto=format&fit=crop" 
          alt="Gonarezhou National Park" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/zimbabwe-safaris" className="hover:text-[#D4A03A] transition-colors">Zimbabwe Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Gonarezhou National Park</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            GONAREZHOU
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            NATIONAL PARK
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            The Place of Elephants
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
              ZIMBABWE'S WILDERNESS TREASURE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Gonarezhou National Park, meaning "Place of Elephants" in the local Shona language, stands as Zimbabwe's second-largest national park and one of the country's most spectacular wilderness areas. Spanning over 5,000 square kilometers, the park encompasses diverse landscapes from semi-arid plains to riverine forests.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                The park forms part of the Great Limpopo Transfrontier Conservation Area, a massive cross-border conservation initiative linking Zimbabwe, South Africa, and Mozambique. This transfrontier status allows wildlife to roam freely across international boundaries, creating one of Africa's most significant conservation landscapes.
              </p>
              <div className="bg-[#FAF3E0] p-6 rounded-xl">
                <h4 className="font-bold text-[#2C3E50] mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-[#2C3E50]/80">
                  <li>• Location: Southeastern Zimbabwe</li>
                  <li>• Size: 5,053 km² (1.25 million acres)</li>
                  <li>• Established: 1975</li>
                  <li>• Best for: Elephants, Chilojo Cliffs, remote safaris</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop" 
                alt="Gonarezhou Landscape" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Gonarezhou */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WHY VISIT GONAREZHOU
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
              WILDLIFE IN GONAREZHOU
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
              WHEN TO VISIT GONAREZHOU
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #16a34a' }}>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Best Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">May to October</h4>
                <p className="text-[#2C3E50]/70 text-sm">Dry season provides optimal wildlife viewing. Animals gather at remaining water sources, making sightings more predictable and concentrated.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #f97316' }}>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">April & November</h4>
                <p className="text-[#2C3E50]/70 text-sm">Transitional periods offer good conditions. Pleasant weather with fewer visitors and developing wildlife activity.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #3b82f6' }}>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase mb-3">Green Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">December to March</h4>
                <p className="text-[#2C3E50]/70 text-sm">Summer rains create lush landscapes. Excellent birdwatching with migratory species, though some roads may be difficult.</p>
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
              <h4 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Getting to Gonarezhou</h4>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Air</h5>
                  <p className="text-[#2C3E50]/80">Private charter flights to Chipinda Pools airstrip within the park. Alternatively, fly to Buffalo Range Airport and enjoy a 3-hour scenic transfer to the park.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Road</h5>
                  <p className="text-[#2C3E50]/80">From Chiredzi, follow the tarred road towards Mutare for 21km, then turn south at the Chipinda Pools signpost. The park entrance is approximately 55km from Chiredzi via gravel roads. A 4x4 vehicle is recommended.</p>
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
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&auto=format&fit=crop" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            DISCOVER GONAREZHOU
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Experience one of Zimbabwe's most remote and authentic wilderness areas. From the iconic Chilojo Cliffs to impressive elephant herds, Gonarezhou offers unforgettable safari adventures.
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
