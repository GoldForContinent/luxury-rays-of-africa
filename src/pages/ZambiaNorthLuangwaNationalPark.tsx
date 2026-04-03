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
  { name: "Buffalo", description: "Massive herds of over 1,000 animals congregate near water", image: "/buffalo.jpg" },
  { name: "Elephant", description: "Large herds migrate through the valley seasonally", image: "/elephant.jpg" },
  { name: "Lion", description: "Prides thrive in this remote wilderness environment", image: "/lion.jpg" },
  { name: "Leopard", description: "Excellent spotting opportunities in riverine areas", image: "/leopard.jpg" },
  { name: "Zebra", description: "Crawshay's zebra graze on the valley floor", image: "/giraffe.jpg" },
  { name: "Hippo", description: "Found in the Luangwa River and Mwaleshi River pools", image: "/hippo.jpg" }
]

const activities = [
  { icon: <Moon className="w-10 h-10" />, title: "Walking Safaris", description: "Only walking safaris allowed - truly immersive wilderness experience", timing: "June - October" },
  { icon: <Eye className="w-10 h-10" />, title: "Game Viewing", description: "Spot buffalo, elephants, and lions in their natural habitat", timing: "June - October" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography", description: "Capture the raw beauty of untouched Africa", timing: "May - October" },
  { icon: <Star className="w-10 h-10" />, title: "Stargazing", description: "Crystal clear skies in one of Africa's darkest parks", timing: "Year-round" },
  { icon: <Palmtree className="w-10 h-10" />, title: "River Exploration", description: "Follow the Mwaleshi River through pristine wilderness", timing: "June - October" },
  { icon: <Mountain className="w-10 h-10" />, title: "Escarpment Views", description: "Panoramic views of the Muchinga Escarpment backdrop", timing: "Year-round" }
]

const seasonalData = [
  { period: "Green Season (November - April)", bestFor: "Birdwatching, lush landscapes, newborn animals", conditions: "Heavy rainfall, park largely closed, few operators" },
  { period: "Dry Season (May - October)", bestFor: "Walking safaris, wildlife viewing, accessible wilderness", conditions: "Clear skies, warm days, cool nights" },
  { period: "Peak Season (July - September)", bestFor: "Optimal wildlife encounters, perfect walking conditions", conditions: "Warm days, cold mornings, minimal rain" }
]

const faqData = [
  {
    question: "What makes North Luangwa unique?",
    answer: "North Luangwa National Park represents Zambia's most exclusive and remote safari experience. Unlike South Luangwa, this park is accessible only through organized walking safaris with licensed operators—no self-driving or game drives permitted. This restriction has preserved the park's wild character and offers one of Africa's most authentic wilderness experiences where you can explore on foot with expert guides."
  },
  {
    question: "How do I access North Luangwa?",
    answer: "North Luangwa is accessible only through organized safari operators. The nearest major airport is Mfuwe International Airport, approximately a four-hour drive from the park. Alternatively, charter flights can land at one of two airstrips serving the park. No independent travel is permitted—all visits must be arranged through registered safari operators who specialize in walking safaris."
  },
  {
    question: "What wildlife will I see?",
    answer: "North Luangwa is famous for its massive buffalo herds, sometimes numbering over 1,000 animals. Elephants migrate through the valley seasonally, while lions and leopards are regularly spotted. The Mwaleshi River supports hippos and crocodiles, and the riverine forests provide habitat for various antelope species. The park offers excellent predator sightings, particularly for lions that have adapted to this remote environment."
  },
  {
    question: "When is the best time to visit?",
    answer: "The only permitted time to visit North Luangwa is during the dry season from June to October. This is when walking safaris operate and wildlife viewing is at its best. July to September offers the optimal combination of comfortable temperatures and excellent animal sightings as they congregate around remaining water sources. The park is closed during the green season from November to April due to flooding and operator closures."
  }
]

const accommodationData = [
  { name: "Mwaleshi Camp", location: "Mwaleshi River", description: "Exclusive walking safari camp with river views and exceptional guiding." },
  { name: "Kalamazoo Camp", location: "Central Luangwa", description: "Pioneering safari operator offering authentic wilderness walks." },
  { name: "Remote Bush Camp", location: "Park Interior", description: "Fly-camp style camping for the ultimate adventure experience." }
]

export default function ZambiaNorthLuangwaNationalPark() {
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
            src="/zambia_north_luangwa.jpg" 
            alt="North Luangwa National Park" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-[8vw]">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Zambia Safari Destination</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
            North Luangwa National Park
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mb-8">
            Zambia's most exclusive wilderness area - only accessible by walking safari with expert guides through untouched African bush.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary flex items-center gap-2">
              Plan Your Safari <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <MapPinIcon />
            <p className="text-white/60 text-sm mt-2">Location</p>
            <p className="text-white font-semibold">Northern Zambia</p>
          </div>
          <div className="text-center">
            <ClockIcon />
            <p className="text-white/60 text-sm mt-2">Best Time</p>
            <p className="text-white font-semibold">June - October</p>
          </div>
          <div className="text-center">
            <Mountain />
            <p className="text-white/60 text-sm mt-2">Area</p>
            <p className="text-white font-semibold">4,636 km²</p>
          </div>
          <div className="text-center">
            <Eye />
            <p className="text-white/60 text-sm mt-2">Specialty</p>
            <p className="text-white font-semibold">Walking Safaris Only</p>
          </div>
          <div className="text-center">
            <MapPinIcon />
            <p className="text-white/60 text-sm mt-2">Entry Fee</p>
            <p className="text-white font-semibold">$25 USD</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
            The Authentic Wilderness
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              North Luangwa National Park offers what many consider the most authentic safari experience in Africa. This remote wilderness area was closed to the public for over thirty years and remains accessible only through organized walking safaris with licensed operators—making it one of the continent's most exclusive wildlife destinations.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              The park stretches across 4,636 square kilometers of pristine Luangwa Valley, bordered to the east by the dramatic Muchinga Escarpment, which rises over 1,000 meters from the valley floor. Several tributary rivers, including the crystal-clear Mwaleshi River, flow through the park into the Luangwa, creating essential water sources that draw wildlife during the dry season.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed">
              What sets North Luangwa apart is the absence of roads and vehicles—exploration is strictly on foot. This provides an intimate connection with the bush that vehicle-based safaris cannot match. Walking through the same terrain as elephants and lions offers a profound understanding of the African wilderness that transforms the safari experience entirely.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/zambia_north_luangwa.jpg" 
              alt="North Luangwa landscape" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#D4A03A] text-white p-6 rounded-xl">
              <p className="font-bold text-2xl">Walking Only</p>
              <p className="text-sm">No Vehicles Permitted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              The Big Herds
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeData.map((animal, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-display font-bold text-xl">{animal.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E50]">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experiences</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              WALKING SAFARIS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-[#D4A03A] mb-4">{activity.icon}</div>
                <h3 className="text-white font-display font-bold text-xl mb-2">{activity.title}</h3>
                <p className="text-white/70 mb-4">{activity.description}</p>
                <div className="flex items-center gap-2 text-[#D4A03A] text-sm">
                  <ClockIcon />
                  <span>{activity.timing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Planning</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
            Best Time to Visit
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {seasonalData.map((season, index) => (
            <div key={index} className="bg-[#F5F5F5] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">{season.period}</h3>
              <p className="text-[#2C3E50]/70 mb-4"><span className="font-semibold">Best for:</span> {season.bestFor}</p>
              <p className="text-[#2C3E50]/70"><span className="font-semibold">Conditions:</span> {season.conditions}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accommodations */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Where to Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              Safari Accommodations
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accommodationData.map((camp, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{camp.name}</h3>
                  <p className="text-[#D4A03A] text-sm mb-4">{camp.location}</p>
                  <p className="text-[#2C3E50]/70">{camp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Information</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-[#D4C5B9] rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F5F5F5] transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-display font-bold text-lg text-[#2C3E50]">{faq.question}</span>
                <ArrowRight 
                  className={`text-[#D4A03A] transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} 
                  size={20}
                />
              </button>
              {expandedFaq === index && (
                <div className="p-6 bg-[#F5F5F5]">
                  <p className="text-[#2C3E50]/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            Experience True Wilderness
          </h2>
          <p className="text-white/70 text-xl mb-8">
            Let us arrange your walking safari to North Luangwa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              Start Planning
            </Link>
            <Link to="/zambia-safaris" className="bg-transparent border-3 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              View All Zambia Safaris
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}