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
  { name: "Fruit Bats", description: "Over 10 million straw-coloured fruit bats roost here annually", image: "/bat.jpg" },
  { name: "Elephant", description: "Large herds migrate through the park seasonally", image: "/elephant.jpg" },
  { name: "Sitatunga", description: "Rare antelope species found in the wetlands", image: "/sitatunga.jpg" },
  { name: "Shoebill", description: "Elusive bird species found in the marshes", image: "/shoebill.jpg" },
  { name: "Buffalo", description: "Large herds of African buffalo roam the park", image: "/buffalo.jpg" },
  { name: "Hippo", description: "Hippos frequent the Luwangwa River", image: "/hippo.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Bat Migration Viewing", description: "Witness the world's largest bat migration", timing: "October - December" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Capture wildlife in their natural environment", timing: "May-October" },
  { icon: <Palmtree className="w-10 h-10" />, title: "Boat Safaris", description: "Explore the river and wetlands by boat", timing: "May-October" },
  { icon: <Star className="w-10 h-10" />, title: "Night Drives", description: "Spot nocturnal animals under African stars", timing: "Year-round" },
  { icon: <Mountain className="w-10 h-10" />, title: "Walking Safaris", description: "Explore the bush on foot with experienced trackers", timing: "May-October" },
  { icon: <Moon className="w-10 h-10" />, title: "Bird Watching", description: "Over 400 bird species including shoebills", timing: "November - April" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Wildlife viewing, bat migration", conditions: "Clear skies, warm days, cool nights" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, newborn animals, lush landscapes", conditions: "Rainfall possible, dramatic thunderstorms" },
  { period: "Peak Season (November - December)", bestFor: "Bat migration viewing, excellent wildlife", conditions: "Warm days, spectacular sunsets" }
]

const faqData = [
  {
    question: "What makes Kasanka National Park special?",
    answer: "Kasanka National Park is a hidden gem in Zambia, famous for hosting the world's largest mammal migration - over 10 million straw-coloured fruit bats that converge on the park from October to December each year. This incredible natural spectacle draws wildlife enthusiasts from around the world to witness the bats filling the sky at dusk."
  },
  {
    question: "When is the best time to see the bat migration?",
    answer: "The bat migration occurs from late October through December, with peak activity typically in November. During this time, up to 10 million bats can be seen roosting in the mushitu swamp forest, creating an unforgettable spectacle at sunset when they emerge to feed."
  },
  {
    question: "What wildlife can I expect to see?",
    answer: "Beyond the bats, Kasanka is home to elephants, buffaloes, sitatungas, hippos, and over 400 bird species including the elusive shoebill stork. The park's diverse habitats support a wide variety of wildlife throughout the year."
  },
  {
    question: "How do I get to Kasanka National Park?",
    answer: "Kasanka is located in the Luangwa Valley. Most visitors fly into Lusaka and then take a connecting flight to the park, or drive approximately 6-7 hours from Lusaka. The park is best accessed with a 4x4 vehicle, especially during the green season."
  }
]

const accommodationData = [
  { name: "Kasanka Bush Camp", location: "Kasanka", description: "Authentic bush camp with excellent bat viewing." },
  { name: "Luangwa Safari House", location: "Nearby Luangwa", description: "Exclusive-use villa perfect for families." },
  { name: "Shishibedu Camp", location: "Central Kafue", description: "Authentic bush camp with expert guiding." }
]

export default function ZambiaKasankaNationalPark() {
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
            src="/zambia_kasanka.jpg" 
            alt="Kasanka National Park" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-[8vw]">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Zambia Safari Destination</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
            Kasanka National Park
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mb-8">
            Home to the world's largest mammal migration - over 10 million fruit bats.
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
            <p className="text-white font-semibold">Central Zambia</p>
          </div>
          <div className="text-center">
            <ClockIcon />
            <p className="text-white/60 text-sm mt-2">Best Time</p>
            <p className="text-white font-semibold">Oct - Dec</p>
          </div>
          <div className="text-center">
            <Mountain />
            <p className="text-white/60 text-sm mt-2">Area</p>
            <p className="text-white font-semibold">4,500 km²</p>
          </div>
          <div className="text-center">
            <Eye />
            <p className="text-white/60 text-sm mt-2">Specialty</p>
            <p className="text-white font-semibold">Bat Migration</p>
          </div>
          <div className="text-center">
            <MapPinIcon />
            <p className="text-white/60 text-sm mt-2">Entry Fee</p>
            <p className="text-white font-semibold">$25 USD/pp</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
            Africa's Best Kept Secret
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              Kasanka National Park is one of Zambia's smallest and most remote parks, yet it hosts one of the most extraordinary wildlife spectacles on Earth. From late October through December, over 10 million straw-coloured fruit bats descend upon the park's mushitu swamp forest, creating the largest mammal migration in the world.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              This incredible phenomenon sees the sky fill with bats at sunset as they emerge to feed on fruiting trees across the Luangwa Valley. The sight is nothing short of breathtaking - a swirling mass of millions of creatures creating patterns against the African sunset.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed">
              Beyond the bats, Kasanka offers an authentic, off-the-beaten-path safari experience. The park's diverse habitats - from riverine forests to grasslands - support elephants, buffaloes, sitatungas, and over 400 bird species, making it a paradise for wildlife enthusiasts.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
            <img src="/zambia_kasanka.jpg" alt="Kasanka National Park" className="relative rounded-2xl shadow-2xl w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              ANIMALS OF KASANKA
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
            WITNESS THE MIGRATION?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Kasanka safari to witness this incredible spectacle.
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
