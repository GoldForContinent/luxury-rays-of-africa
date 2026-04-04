import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Camera, Footprints, Mountain } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const parkHighlights = [
  {
    title: "Ancient Rock Formations",
    description: "Matobo National Park features dramatic granite kopjes and balancing rocks that have been shaped by millions of years of erosion. These ancient formations create a surreal landscape unlike anywhere else in Africa."
  },
  {
    title: "San Rock Art Heritage",
    description: "The park contains one of the highest concentrations of San rock paintings in Zimbabwe, some dating back over 13,000 years. These artistic treasures provide fascinating insights into the lives of indigenous peoples."
  },
  {
    title: "Rhino Conservation Success",
    description: "Matobo is a sanctuary for both black and white rhinos, with successful conservation programs having boosted populations. Guided rhino tracking walks offer unforgettable encounters with these magnificent creatures."
  },
  {
    title: "Panoramic Views",
    description: "The park offers breathtaking vistas from its highest points, including the iconic World's View. On clear days, you can see for miles across the rolling Zimbabwean countryside."
  }
]

const wildlifeList = [
  { category: "Big Five", species: ["African Elephant", "African Lion", "African Leopard", "African Buffalo", "Black Rhino", "White Rhino"] },
  { category: "Antelope", species: ["Kudu", "Eland", "Impala", "Zebra", "Wildebeest", "Gemsbok"] },
  { category: "Smaller Mammals", species: ["Warthog", "Porcupine", "Wild Cat", "Civet", "Genet"] },
  { category: "Birdlife", species: ["Black Eagle", "Lappet-faced Vulture", "Kori Bustard", "Pel's Fishing Owl", "250+ species"] }
]

const seasonalData = [
  { month: "January", weather: "Hot & Wet", wildlife: "Good", activities: "Rock art viewing, birdwatching" },
  { month: "February", weather: "Hot & Wet", wildlife: "Good", activities: "Rock art viewing, photography" },
  { month: "March", weather: "Hot & Wet", wildlife: "Fair", activities: "Game drives, rock art tours" },
  { month: "April", weather: "Warm & Transitional", wildlife: "Good", activities: "Game drives, walking safaris" },
  { month: "May", weather: "Dry Season Begins", wildlife: "Very Good", activities: "Game drives, photography" },
  { month: "June", weather: "Cool & Dry", wildlife: "Excellent", activities: "Rhino tracking, all activities" },
  { month: "July", weather: "Cool & Dry", wildlife: "Excellent", activities: "All activities available" },
  { month: "August", weather: "Cool & Dry", wildlife: "Excellent", activities: "Rock art tours, game drives" },
  { month: "September", weather: "Warm & Dry", wildlife: "Excellent", activities: "All activities - peak season" },
  { month: "October", weather: "Hot & Dry", wildlife: "Excellent", activities: "Rhino tracking, game drives" },
  { month: "November", weather: "Hot & Transitional", wildlife: "Good", activities: "Photography, rock art" },
  { month: "December", weather: "Hot & Wet", wildlife: "Good", activities: "Rock art, green season views" }
]

const parkActivities = [
  { icon: <Eye className="w-8 h-8" />, title: "Game Drives", description: "Explore the park's diverse landscapes in guided 4x4 vehicles. Morning and afternoon drives offer optimal wildlife viewing opportunities.", timing: "Year-round" },
  { icon: <Footprints className="w-8 h-8" />, title: "Rhino Tracking", description: "Join conservation teams for guided walking excursions to track and observe endangered black and white rhinos.", timing: "May-October" },
  { icon: <Mountain className="w-8 h-8" />, title: "Rock Art Tours", description: "Visit caves and shelters featuring ancient San rock paintings. Expert guides explain the history and significance of these cultural treasures.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography Tours", description: "Capture the dramatic landscapes, ancient rock formations, and wildlife with professional photography guidance.", timing: "Year-round" },
  { icon: <Footprints className="w-8 h-8" />, title: "Walking Safaris", description: "Explore the bush on foot with experienced guides. Discover smaller wildlife, plant life, and geological features.", timing: "May-October" },
  { icon: <Eye className="w-8 h-8" />, title: "Hill Top Treks", description: "Hike to panoramic viewpoints including the famous World's View. Spectacular views especially at sunrise and sunset.", timing: "Year-round" }
]

const nearbyAttractions = [
  { name: "Bulawayo", description: "Zimbabwe's second city - 45 minute drive", image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&auto=format&fit=crop" },
  { name: "Great Zimbabwe", description: "Ancient ruins - 3 hour drive", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop" },
  { name: "Victoria Falls", description: "World-famous falls - 5 hour drive", image: "https://images.unsplash.com/photo-1537962882310-41d6b591b3da?w=800&auto=format&fit=crop" }
]

export default function ZimbabweMatoboNationalPark() {
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
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1600&auto=format&fit=crop" 
          alt="Matobo National Park" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/zimbabwe-safaris" className="hover:text-[#D4A03A] transition-colors">Zimbabwe</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Matobo National Park</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
            MATOBO
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            NATIONAL PARK
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Ancient Rocks & Rhino Sanctuaries
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
              THE MATOBO HILLS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Matobo National Park, a UNESCO World Heritage Site, encompasses some of Africa's most dramatic granite landscapes. The park is renowned for its ancient San rock art, successful rhino conservation, and breathtaking views from its Balancing Rocks and World's View outlooks.
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
              WILDLIFE IN MATOBO
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
              THINGS TO DO IN MATOBO
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
              BEST TIME TO VISIT MATOBO
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
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Green Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">November to April</h4>
              <p className="text-[#2C3E50]/70 text-sm">Lush landscapes, excellent birdwatching, and fewer tourists. Rock art tours available year-round.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May</h4>
              <p className="text-[#2C3E50]/70 text-sm">Transitional period with improving wildlife viewing and pleasant weather.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Prime wildlife viewing, especially for rhino tracking. Dry conditions make animal spotting easier.</p>
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
            READY TO EXPLORE MATOBO?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let our experts help you plan your Matobo National Park adventure. Experience ancient rock art and incredible wildlife.
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
