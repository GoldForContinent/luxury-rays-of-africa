import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Moon, Palmtree, Mountain, Camera, Star, Eye } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const wildlifeData = [
  { name: "Elephant", description: "Large herds often seen crossing the Zambezi near the falls", image: "/elephant.jpg" },
  { name: "Hippo", description: "Pod of hippos frequently seen in the Zambezi River", image: "/hippo.jpg" },
  { name: "Crocodile", description: "Nile crocodiles bask on river banks", image: "/crocodile.jpg" },
  { name: "Zebra", description: "Common zebra graze in the surrounding grasslands", image: "/zebra.jpg" },
  { name: "Warthog", description: "Commonly seen foraging around the park", image: "/warthog.jpg" },
  { name: "Baboon", description: "Large troops of baboons inhabit the area", image: "/baboon.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Victoria Falls View", description: "Witness the magnificent falls from various viewpoints", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography", description: "Capture the spray and rainbow effects at the falls", timing: "Year-round" },
  { icon: <Palmtree className="w-10 h-10" />, title: "Boat Cruises", description: "Sunset cruises on the Zambezi River", timing: "May-October" },
  { icon: <Star className="w-10 h-10" />, title: "Night Game Drives", description: "Spot nocturnal animals in the park", timing: "Year-round" },
  { icon: <Mountain className="w-10 h-10" />, title: "White Water Rafting", description: "Adrenaline-pumping rapids below the falls", timing: "February-June" },
  { icon: <Moon className="w-10 h-10" />, title: "Helicopter Tours", description: "Aerial views of the falls and Zambezi", timing: "Year-round" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Full falls viewing, adventure activities", conditions: "Lower water volume, rainbow mist" },
  { period: "Green Season (November - April)", bestFor: "Full water volume, dramatic scenery", conditions: "Heavy spray, some roads may flood" },
  { period: "Peak Season (July - September)", bestFor: "Best overall experience, comfortable weather", conditions: "Moderate spray, warm days" }
]

const faqData = [
  {
    question: "What is Mosi-oa-Tunya National Park?",
    answer: "Mosi-oa-Tunya National Park, meaning 'The Smoke That Thunders', is home to one of the world's most spectacular natural wonders - Victoria Falls. Located in southern Zambia near Livingstone, the park protects the area surrounding the falls and offers visitors the opportunity to experience this magnificent cascade up close. The park is relatively small but packed with wildlife and natural beauty."
  },
  {
    question: "When is the best time to visit Victoria Falls?",
    answer: "The best time to visit Victoria Falls depends on what you want to experience. From February to June, the water flow is at its highest, creating the famous 'smoke' that rises hundreds of meters. For better viewing conditions and rainbow photography, the dry season from July to October offers lower water levels with excellent visibility. The green season from November to April showcases the falls at their most powerful."
  },
  {
    question: "What wildlife can I see in the park?",
    answer: "Moshi-oa-Tunya National Park is home to a variety of wildlife including elephants, hippos, crocodiles, zebras, warthogs, and baboons. The park also supports populations of buffaloes, giraffes, and various antelope species. Birdlife is abundant with over 400 species recorded, including the African skimmer and various raptor species."
  },
  {
    question: "How do I get to Mosi-oa-Tunya?",
    answer: "Most visitors fly into Livingstone Airport, which is served by international flights from major African hubs. From Livingstone town, the falls are just a 10-minute drive away. You can also travel by road from Lusaka (approximately 5-6 hours) or from Victoria Falls in Zimbabwe (about 1.5 hours via the Victoria Falls Bridge)."
  }
]

const accommodationData = [
  { name: "Royal Zambezi Lodge", location: "Lower Zambezi", description: "Luxury riverside lodge with stunning Zambezi views." },
  { name: "Avani Resort", location: "Livingstone", description: "Modern resort with falls views and pool." },
  { name: "The Elephant Camp", location: "Victoria Falls", description: "Luxury tents with elephants roaming nearby." }
]

export default function ZambiaMosiOaTunyaNationalPark() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/zambia_victoria_falls.jpg" 
            alt="Mosi-oa-Tunya National Park" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-[8vw]">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Zambia Safari Destination</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
            Mosi-oa-Tunya
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mb-8">
            Home to Victoria Falls, one of the Seven Natural Wonders of the World - "The Smoke That Thunders."
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Plan Your Safari <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="text-center">
            <MapPinIcon />
            <p className="text-white/60 text-sm mt-2">Location</p>
            <p className="text-white font-semibold">Southern Zambia</p>
          </div>
          <div className="text-center">
            <ClockIcon />
            <p className="text-white/60 text-sm mt-2">Best Time</p>
            <p className="text-white font-semibold">Feb - Oct</p>
          </div>
          <div className="text-center">
            <Mountain />
            <p className="text-white/60 text-sm mt-2">Area</p>
            <p className="text-white font-semibold">66 km²</p>
          </div>
          <div className="text-center">
            <Eye />
            <p className="text-white/60 text-sm mt-2">Specialty</p>
            <p className="text-white font-semibold">Victoria Falls</p>
          </div>
          <div className="text-center">
            <MapPinIcon />
            <p className="text-white/60 text-sm mt-2">Entry Fee</p>
            <p className="text-white font-semibold">$20 USD/pp</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
            The Smoke That Thunders
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              Mosi-oa-Tunya National Park is synonymous with one of Africa's most awe-inspiring natural wonders. Named for the clouds of spray that rise from the falls - literally "The Smoke That Thunders" in local language - Victoria Falls represents the sheer power and beauty of nature at its most spectacular.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              The falls themselves stretch for nearly 1,700 meters and drop up to 108 meters into the Zambezi Gorge. During the peak flow months, an estimated 500 million cubic meters of water cascade over the falls every minute, creating a spectacle visible from kilometers away.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed">
              Beyond the falls, the park protects diverse habitats along the Zambezi River, where visitors can encounter elephants crossing the river, hippos cooling in the shallows, and crocodiles basking on the banks. The combination of natural wonder and wildlife viewing makes this destination truly unique.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
            <img src="/zambia_victoria_falls.jpg" alt="Victoria Falls" className="relative rounded-2xl shadow-2xl w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              ANIMALS OF MOSI-OA-TUNYA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {wildlifeData.map((animal, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${animal.image})` }}></div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{animal.name}</h3>
                  <p className="text-[#2C3E50]/70">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-4 md:px-[8vw] bg-white">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              THINGS TO DO
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-[#FAF3E0] rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-[#D4A03A] mb-4">{activity.icon}</div>
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{activity.title}</h3>
                <p className="text-[#2C3E50]/70 mb-3">{activity.description}</p>
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
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">When to Go</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              BEST TIME TO VISIT
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seasonalData.map((season, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #D4A03A' }}>
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">{season.period}</h3>
                <p className="text-[#2C3E50]/70 mb-3"><span className="font-semibold">Best For:</span> {season.bestFor}</p>
                <p className="text-[#2C3E50]/70"><span className="font-semibold">Conditions:</span> {season.conditions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-24 px-4 md:px-[8vw] bg-white">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHERE TO STAY
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accommodationData.map((lodging, index) => (
              <div key={index} className="bg-[#FAF3E0] rounded-xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{lodging.name}</h3>
                  <p className="text-[#D4A03A] text-sm mb-3">{lodging.location}</p>
                  <p className="text-[#2C3E50]/70">{lodging.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-bold text-lg text-[#2C3E50]">{faq.question}</span>
                  <span className="text-[#D4A03A] text-2xl">{expandedFaq === index ? '−' : '+'}</span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#2C3E50] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            READY TO WITNESS THE FALLS?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Mosi-oa-Tunya safari experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Plan My Safari <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
