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
  { name: "Cheetah", description: "Fastest land animal, often spotted in open grasslands", image: "/cheetah.jpg" },
  { name: "African Wild Dog", description: "Highly social predators with distinctive coat patterns", image: "/lion.jpg" },
  { name: "Elephant", description: "Large herds migrate through the park seasonally", image: "/elephant.jpg" },
  { name: "Zebra", description: "Common zebra and Crawshay's zebra both present", image: "/giraffe.jpg" },
  { name: "Lion", description: "Prides often seen resting under shade trees", image: "/leopard.jpg" },
  { name: "Hippo", description: "Found in the Kafue River and surrounding waterholes", image: "/hippo.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Explore the park's diverse habitats with expert guides", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Capture wildlife in their natural environment", timing: "May-October" },
  { icon: <Palmtree className="w-10 h-10" />, title: "River Safaris", description: "Boat trips along the Kafue River for hippos and crocodiles", timing: "May-October" },
  { icon: <Star className="w-10 h-10" />, title: "Night Drives", description: "Spot nocturnal animals under African stars", timing: "Year-round" },
  { icon: <Mountain className="w-10 h-10" />, title: "Horseback Safaris", description: "Ride through the wilderness for close wildlife encounters", timing: "June-October" },
  { icon: <Moon className="w-10 h-10" />, title: "Walking Safaris", description: "Explore the bush on foot with experienced trackers", timing: "May-October" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Wildlife viewing, big cats, river activities", conditions: "Clear skies, warm days, cool nights" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, newborn animals, lush landscapes", conditions: "Rainfall possible, dramatic thunderstorms" },
  { period: "Peak Season (July - September)", bestFor: "Optimal wildlife viewing, comfortable weather", conditions: "Warm days, cold mornings, minimal rain" }
]

const faqData = [
  {
    question: "What makes Kafue National Park special?",
    answer: "Kafue National Park stands as one of Zambia's most expansive and varied protected areas, spanning over 22,400 square kilometers in the country's heartland. The park encompasses an extraordinary range of ecosystems, from sweeping grasslands and woodland savannas to riverine forests and wetlands. Its relatively remote location means fewer visitors than other African parks, offering an authentic wilderness experience. The park supports remarkable populations of cheetahs, wild dogs, and elephants, making it a premier destination for serious wildlife enthusiasts."
  },
  {
    question: "When is the best time to visit Kafue?",
    answer: "The optimal period for visiting Kafue National Park runs from May through October during the dry season. As water sources diminish, wildlife congregates around the Kafue River and remaining waterholes, creating exceptional viewing opportunities. July to September represents peak season when animals are most concentrated and vegetation provides clear sightlines. The green season from November to April offers excellent birdwatching and fewer crowds, though some roads may become impassable."
  },
  {
    question: "What wildlife can I expect to see?",
    answer: "Kafue National Park boasts impressive populations of cheetahs and African wild dogs, species rarely found in such numbers elsewhere. Elephants move through the park in seasonal migrations, while lions prowl the grasslands. The Kafue River supports hippos and crocodiles, and over 400 bird species have been recorded, including the iconic African skimmer. Antelope species like sitatunga, red lechwe, and tsessebe thrive in the wetlands and grasslands."
  },
  {
    question: "How do I get to Kafue National Park?",
    answer: "Most visitors access Kafue National Park via a short flight from Lusaka to one of the airstrips within the park or nearby. The drive from Lusaka takes approximately 4-5 hours on good roads, though a 4x4 vehicle is essential during the green season. Many luxury lodges operate their own airstrips, offering convenient fly-in packages that eliminate lengthy road journeys."
  }
]

const accommodationData = [
  { name: "Kafue River Lodge", location: "Kafue River", description: "Riverside camp with excellent boat-based wildlife viewing." },
  { name: "Luangwa Safari House", location: "Northern Kafue", description: "Exclusive-use villa perfect for families or small groups." },
  { name: "Shishibedu Camp", location: "Central Kafue", description: "Authentic bush camp with expert guiding and big cat sightings." }
]

export default function ZambiaKafueNationalPark() {
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
            src="/zambia_kafue.jpg" 
            alt="Kafue National Park" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-[8vw]">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Zambia Safari Destination</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
            Kafue National Park
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mb-8">
            One of Africa's largest and most diverse wildlife havens, offering exceptional cheetah and wild dog sightings in the heart of Zambia.
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
            <p className="text-white font-semibold">Central-Western Zambia</p>
          </div>
          <div className="text-center">
            <ClockIcon />
            <p className="text-white/60 text-sm mt-2">Best Time</p>
            <p className="text-white font-semibold">May - October</p>
          </div>
          <div className="text-center">
            <Mountain />
            <p className="text-white/60 text-sm mt-2">Area</p>
            <p className="text-white font-semibold">22,500 km²</p>
          </div>
          <div className="text-center">
            <Eye />
            <p className="text-white/60 text-sm mt-2">Specialty</p>
            <p className="text-white font-semibold">Cheetah & Wild Dog</p>
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
            The Heart of Zambia's Wilderness
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              Kafue National Park represents Zambia's commitment to preserving vast tracts of untouched wilderness. As one of the continent's largest national parks, it offers an unparalleled safari experience where visitors can explore diverse landscapes ranging from fertile floodplains to miombo woodlands, all while encountering remarkable wildlife populations.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              What sets Kafue apart is its exceptional population of predators. The park supports one of Africa's highest densities of cheetahs, while packs of African wild dogs roam the grasslands in search of prey. Lions, leopards, and spotted hyenas complete the predator ensemble, creating extraordinary wildlife viewing opportunities.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed">
              The Kafue River, the park's lifeblood, provides habitat for hippos and crocodiles while attracting herds of elephants and buffaloes to its banks. Boat-based safaris along this majestic river offer unique perspectives on the park's wildlife, particularly during the dry season when animals congregate for water.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/zambia_kafue.jpg" 
              alt="Kafue National Park landscape" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#D4A03A] text-white p-6 rounded-xl">
              <p className="font-bold text-2xl">22,400 km²</p>
              <p className="text-sm">Protected Wilderness</p>
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
              Big Cats & Wild Dogs
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
              SAFARI ACTIVITIES
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
            Ready to Explore Kafue?
          </h2>
          <p className="text-white/70 text-xl mb-8">
            Let us create your perfect Zambia safari itinerary.
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