import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Camera, Mountain, Palmtree, Plane } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const parkHighlights = [
  {
    title: "Iconic Table Mountain",
    description: "Rising 1,085 meters above Cape Town, Table Mountain is one of the world's most recognizable landmarks. The flat-topped mountain creates a dramatic backdrop to the city and offers panoramic views from its summit."
  },
  {
    title: "UNESCO World Heritage Site",
    description: "Table Mountain National Park was designated a UNESCO World Heritage Site in 2004, recognized for its exceptional biodiversity and unique fynbos vegetation found nowhere else on Earth."
  },
  {
    title: "Fynbos Biodiversity Hotspot",
    description: "The park protects the Cape Floristic Region, one of Earth's six floral kingdoms. Over 2,200 species of fynbos plants, including hundreds of proteas and ericas, thrive in this unique ecosystem."
  },
  {
    title: "Adventure Activities",
    description: "From cable car rides to hiking trails, rock climbing to paragliding, Table Mountain offers adventure for every fitness level and appetite for excitement."
  }
]

const wildlifeList = [
  { category: "Mammals", species: ["Cape Mountain Zebra", "Klipspringer", "Caracal", "Cape Ghost Frog", "Rodents", "Mongoose"] },
  { category: "Birdlife", species: ["Black Eagle", "Sugarbird", "Sunbird", "Orange Thrush", "Cape Canary", "200+ species"] },
  { category: "Reptiles", species: ["Angulate Tortoise", "Cape Cobra", "Puff Adder", "Montane Adder"] },
  { category: "Flora", species: ["Proteas", "Ericas", "Restios", "Fynbos", "Succulents", "2000+ species"] }
]

const seasonalData = [
  { month: "January", weather: "Summer - Warm & Dry", wildlife: "Excellent", activities: "Hiking, cable car, views" },
  { month: "February", weather: "Summer - Warm", wildlife: "Excellent", activities: "All activities available" },
  { month: "March", weather: "Autumn - Mild", wildlife: "Good", activities: "Hiking, photography" },
  { month: "April", weather: "Autumn - Mild", wildlife: "Good", activities: "Hiking, scenic drives" },
  { month: "May", weather: "Winter - Cool", wildlife: "Good", activities: "Waterfall visits, forest walks" },
  { month: "June", weather: "Winter - Rainy", wildlife: "Good", activities: "Forest trails, photography" },
  { month: "July", weather: "Winter - Rainy", wildlife: "Good", activities: "Wildflower season begins" },
  { month: "August", weather: "Winter - Rainy", wildlife: "Good", activities: "Peak waterfall season" },
  { month: "September", weather: "Spring - Transitional", wildlife: "Good", activities: "Wildflowers, hiking" },
  { month: "October", weather: "Spring - Warming", wildlife: "Excellent", activities: "Peak wildflower season" },
  { month: "November", weather: "Spring - Warm", wildlife: "Excellent", activities: "All activities available" },
  { month: "December", weather: "Summer - Warm", wildlife: "Excellent", activities: "Hiking, views, sunsets" }
]

const parkActivities = [
  { icon: <Plane className="w-8 h-8" />, title: "Cable Car Ride", description: "Ascend to the summit in rotating cable cars offering 360-degree views. A must-do experience for all visitors.", timing: "Year-round" },
  { icon: <Mountain className="w-8 h-8" />, title: "Hiking Trails", description: "Explore over 350 kilometers of trails ranging from easy walks to challenging climbs. Guides available for safety.", timing: "Year-round" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography Tours", description: "Capture stunning landscapes, unique fynbos, and dramatic rock formations with expert photography guidance.", timing: "Year-round" },
  { icon: <Eye className="w-8 h-8" />, title: "Rock Climbing", description: "World-class climbing routes on Table Mountain's granite face. Guides and equipment available for all skill levels.", timing: "Year-round" },
  { icon: <Palmtree className="w-8 h-8" />, title: "Fynbos Walks", description: "Discover the unique Cape Floristic Region with expert botanists. See proteas, ericas, and rare flowers.", timing: "August-November" },
  { icon: <Eye className="w-8 h-8" />, title: "Sunset Views", description: "Experience magical sunsets from the summit. The flat mountaintop glows orange and pink as the sun sets over the ocean.", timing: "Year-round" }
]

const nearbyAttractions = [
  { name: "Cape Town City", description: "World-class urban experiences - at base", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop" },
  { name: "Robben Island", description: "Historic UNESCO site - 30 min away", image: "https://images.unsplash.com/photo-1509316975850-ff9b5deb2cd4?w=800&auto=format&fit=crop" },
  { name: "Cape Winelands", description: "Wine tasting - 1 hour drive", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop" }
]

export default function SouthAfricaTableMountainNationalPark() {
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
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&auto=format&fit=crop" 
          alt="Table Mountain National Park" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/south-africa-safaris" className="hover:text-[#D4A03A] transition-colors">South Africa</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Table Mountain</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
            TABLE MOUNTAIN
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            NATIONAL PARK
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Cape Town's Iconic Landmark
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan Your Visit <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Experiences
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
              CAPE TOWN'S NATURAL ICON
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Table Mountain National Park protects the iconic flat-topped mountain that defines Cape Town's dramatic skyline. This UNESCO World Heritage Site offers breathtaking views, unique fynbos vegetation, and world-class hiking alongside one of Africa's most vibrant cities.
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
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife & Flora</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              NATURE ON TABLE MOUNTAIN
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
              THINGS TO DO ON TABLE MOUNTAIN
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
              BEST TIME TO VISIT TABLE MOUNTAIN
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-[#2C3E50]">
                  <th className="p-3 text-left text-white font-semibold">Month</th>
                  <th className="p-3 text-left text-white font-semibold">Weather</th>
                  <th className="p-3 text-left text-white font-semibold">Visiting</th>
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
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #CD7F32' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Summer</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">November to March</h4>
              <p className="text-[#2C3E50]/70 text-sm">Peak tourist season with warm, dry weather. Perfect for hiking, cable car rides, and sunset viewing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Wildflowers</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">August to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Spring brings spectacular wildflower displays. Best time for botany enthusiasts and photographers.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2C3E50' }}>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase mb-3">Winter</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June to August</h4>
              <p className="text-[#2C3E50]/70 text-sm">Rainy season brings waterfalls and lush landscapes. Fewer crowds and dramatic cloud formations.</p>
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
            READY TO EXPLORE TABLE MOUNTAIN?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience Cape Town's most iconic landmark. Let our experts help you plan your Table Mountain adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Visit <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View All Experiences
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
