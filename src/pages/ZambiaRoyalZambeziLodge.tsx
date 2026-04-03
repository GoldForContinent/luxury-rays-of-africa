import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Moon, Palmtree, Mountain, Camera, Star, Eye, Wifi, Coffee, UtensilsCrossed, Waves } from 'lucide-react'

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

const roomFeatures = [
  { name: "Luxury Tent", description: "Spacious tented accommodation with en-suite bathroom", image: "/zambia_royal_zambezi.jpg" },
  { name: "Private Deck", description: "Individual deck overlooking the Zambezi River", image: "/zambia_royal_zambezi.jpg" },
  { name: "River Views", description: "Stunning panoramic views of the Zambezi", image: "/zambia_royal_zambezi.jpg" }
]

const amenities = [
  { icon: <UtensilsCrossed className="w-10 h-10" />, title: "Fine Dining", description: "Gourmet cuisine served on the riverside deck" },
  { icon: <Waves className="w-10 h-10" />, title: "River Activities", description: "Canoeing, boat cruises, and fishing" },
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Expert-guided game drives in the national park" },
  { icon: <Wifi className="w-10 h-10" />, title: "WiFi", description: "Complimentary internet access" },
  { icon: <Coffee className="w-10 h-10" />, title: "Bar & Lounge", description: "Full bar service with sunset views" },
  { icon: <Star className="w-10 h-10" />, title: "Spa", description: "Relaxing massage treatments available" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Canoe Safaris", description: "Paddle past elephants and hippos on the Zambezi", timing: "May - October" },
  { icon: <Camera className="w-10 h-10" />, title: "Game Drives", description: "Morning and afternoon game drives in Lower Zambezi", timing: "Year-round" },
  { icon: <Palmtree className="w-10 h-10" />, title: "Boat Cruises", description: "Sunset cruises on the Zambezi with drinks", timing: "May - October" },
  { icon: <Star className="w-10 h-10" />, title: "Fishing", description: "Tiger fish and Nile perch fishing excursions", timing: "June - October" },
  { icon: <Mountain className="w-10 h-10" />, title: "Walking Safaris", description: "Guided bush walks with expert trackers", timing: "May - October" },
  { icon: <Moon className="w-10 h-10" />, title: "Night Drives", description: "Spot nocturnal wildlife under the stars", timing: "Year-round" }
]

const faqData = [
  {
    question: "Where is Royal Zambezi Lodge located?",
    answer: "Royal Zambezi Lodge is situated on the banks of the Zambezi River in Zambia's Lower Zambezi National Park. The lodge offers a stunning riverside location with views across to the Zambezi escarpment in Zimbabwe. This prime position provides easy access to excellent wildlife viewing and water-based activities."
  },
  {
    question: "What accommodation options are available?",
    answer: "Royal Zambezi Lodge features luxury tented accommodation, each with en-suite facilities and a private deck overlooking the Zambezi River. The tents are spacious and elegantly furnished, combining comfort with authentic safari charm. Some units offer family-friendly configurations for those traveling with children."
  },
  {
    question: "What activities are included?",
    answer: "The lodge offers a range of activities including morning and afternoon game drives in Lower Zambezi National Park, canoeing safaris on the Zambezi River, boat cruises, fishing expeditions, and guided walking safaris. Most rates include two activities per day, with additional activities available at extra cost."
  },
  {
    question: "What is the best time to visit?",
    answer: "The best time to visit Royal Zambezi Lodge is from May to October during the dry season. This period offers the best wildlife viewing as animals congregate around the river. Water levels are ideal for canoeing, and the weather is comfortable. The green season from November to April offers lush scenery and excellent birdwatching."
  },
  {
    question: "How do I get to the lodge?",
    answer: "The most convenient way to reach Royal Zambezi Lodge is by light aircraft from Lusaka to the Lower Zambezi airstrip, followed by a short transfer to the lodge. The flight takes approximately 45 minutes and offers stunning aerial views of the Zambezi River and surrounding wilderness."
  }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Game drives, canoeing, wildlife viewing", conditions: "Clear skies, warm days, cool nights" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, lush landscapes, fewer crowds", conditions: "Rainfall possible, dramatic scenery" },
  { period: "Peak Season (July - September)", bestFor: "Optimal wildlife viewing, comfortable weather", conditions: "Warm days, cold mornings" }
]

export default function ZambiaRoyalZambeziLodge() {
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
            src="/zambia_royal_zambezi.jpg" 
            alt="Royal Zambezi Lodge" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-[8vw]">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Zambia Safari Lodge</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
            Royal Zambezi Lodge
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mb-8">
            Luxury riverside lodge on the banks of the Zambezi River with stunning views and world-class safari experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Book Your Stay <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <MapPinIcon />
            <p className="text-white/60 text-sm mt-2">Location</p>
            <p className="text-white font-semibold">Lower Zambezi</p>
          </div>
          <div className="text-center">
            <ClockIcon />
            <p className="text-white/60 text-sm mt-2">Best Time</p>
            <p className="text-white font-semibold">May - October</p>
          </div>
          <div className="text-center">
            <Mountain />
            <p className="text-white/60 text-sm mt-2">Style</p>
            <p className="text-white font-semibold">Luxury Tented</p>
          </div>
          <div className="text-center">
            <Eye />
            <p className="text-white/60 text-sm mt-2">Experience</p>
            <p className="text-white font-semibold">River Safari</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
            The Ultimate River Safari Experience
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              Royal Zambezi Lodge offers an exclusive safari experience on the banks of the Zambezi River in Zambia's stunning Lower Zambezi National Park. This luxury lodge combines exceptional wildlife viewing with the tranquility of riverside living, creating unforgettable African adventures.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              The lodge features spacious luxury tents, each with private decks overlooking the Zambezi. From your bed, you can watch elephants crossing the river or hippos wallowing in the shallows. The experienced guides and trackers ensure outstanding wildlife encounters both on land and water.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed">
              What sets Royal Zambezi apart is its location and the activities it offers. Canoe safaris allow you to drift silently past wildlife, while sunset boat cruises provide the perfect setting for reflection. After a day of adventure, the riverside deck offers fine dining under the African sky.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
            <img src="/zambia_royal_zambezi.jpg" alt="Royal Zambezi Lodge" className="relative rounded-2xl shadow-2xl w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Accommodation</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              LUXURY TENTED CAMPS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roomFeatures.map((room, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }}></div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{room.name}</h3>
                  <p className="text-[#2C3E50]/70">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 px-4 md:px-[8vw] bg-white">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Amenities</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              lodge facilities
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-[#FAF3E0] rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-[#D4A03A] mb-4">{amenity.icon}</div>
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{amenity.title}</h3>
                <p className="text-[#2C3E50]/70">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              ACTIVITIES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow">
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
      <section className="py-24 px-4 md:px-[8vw] bg-white">
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
              <div key={index} className="bg-[#FAF3E0] p-8 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #D4A03A' }}>
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">{season.period}</h3>
                <p className="text-[#2C3E50]/70 mb-3"><span className="font-semibold">Best For:</span> {season.bestFor}</p>
                <p className="text-[#2C3E50]/70"><span className="font-semibold">Conditions:</span> {season.conditions}</p>
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
            EXPERIENCE ROYAL ZAMBEZI?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you book your stay at this exclusive Lower Zambezi lodge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Book Your Stay <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
