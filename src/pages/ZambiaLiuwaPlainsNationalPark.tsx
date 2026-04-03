import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Moon, Sun, Mountain, Camera, Star, Wind, Eye } from 'lucide-react'

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
  { name: "Wildebeest", description: "Over 30,000 participate in Africa's second-largest migration", image: "/zambia_liuwa.jpg" },
  { name: "Zebra", description: "Thousands of plains zebra join the seasonal movement", image: "/giraffe.jpg" },
  { name: "Lion", description: "Prides follow the migration herds across the plains", image: "/lion.jpg" },
  { name: "Cheetah", description: "Open grasslands provide perfect hunting grounds", image: "/cheetah.jpg" },
  { name: "Hyena", description: "Spotted hyenas track the large herbivore herds", image: "/leopard.jpg" },
  { name: "Elephant", description: "Seasonal herds pass through the park throughout the year", image: "/elephant.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Migration Viewing", description: "Witness the dramatic wildebeest migration across the plains", timing: "November - June" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Safaris", description: "Capture the drama of predator-prey interactions", timing: "May - October" },
  { icon: <Star className="w-10 h-10" />, title: "Stargazing", description: "Untouched wilderness with crystal clear night skies", timing: "Year-round" },
  { icon: <Moon className="w-10 h-10" />, title: "Walking Safaris", description: "Explore the bush on foot with expert guides", timing: "May-October" },
  { icon: <Sun className="w-10 h-10" />, title: "Sunset Drives", description: "Experience Africa's most spectacular sunset views", timing: "Year-round" },
  { icon: <Wind className="w-10 h-10" />, title: "Birdwatching", description: "Over 400 bird species in this birding paradise", timing: "November - April" }
]

const seasonalData = [
  { period: "Green Season (November - April)", bestFor: "Migration viewing, newborn animals, birdwatching", conditions: "Rainfall, lush green plains, dramatic skies" },
  { period: "Dry Season (May - October)", bestFor: "Wildlife viewing, predator action, comfortable weather", conditions: "Clear skies, warm days, cool nights" },
  { period: "Peak Season (June - August)", bestFor: "Optimal migration viewing, large herds", conditions: "Warm days, cold mornings, minimal rain" }
]

const faqData = [
  {
    question: "What makes Liuwa Plains unique?",
    answer: "Liuwa Plains National Park hosts Africa's second-largest wildebeest migration, with over 30,000 animals crossing these vast grasslands annually. Unlike the famous Serengeti migration, Liuwa remains one of Africa's best-kept secrets, offering uncrowded wildlife viewing in a truly remote wilderness. The park's flat, open landscape provides exceptional visibility, making it a paradise for wildlife photography and the classic African safari experience."
  },
  {
    question: "When is the best time to see the migration?",
    answer: "The wildebeest migration at Liuwa Plains typically occurs from November through June. Calving season peaks around February and March, when thousands of newborns take their first steps on the green plains. The best overall wildlife viewing runs from May to October during the dry season, when animals congregate around water sources and vegetation provides clear sightlines."
  },
  {
    question: "How remote is Liuwa Plains?",
    answer: "Liuwa Plains is among Africa's most remote and least-visited major parks. Located in Zambia's far western region near the Angola border, the park receives only a few thousand visitors annually. This isolation has preserved the authentic wilderness character, where visitors can experience Africa as it existed decades ago, without the crowds found in more famous destinations."
  },
  {
    question: "What other wildlife can I see?",
    answer: "Beyond the migration, Liuwa Plains supports healthy populations of lions, cheetahs, and hyenas that track the herds. herds of elephants move through the park seasonally, while giraffes, zebras, and various antelope species graze the plains. Over 400 bird species have been recorded, including the legendary Kalahari sandgrouse and various raptors."
  }
]

const accommodationData = [
  { name: "Liuwa Plains Camp", location: "Central Plains", description: "Seasonal luxury camp with prime migration viewing." },
  { name: "Kingujula Camp", location: "Western Liuwa", description: "Authentic safari camp in the heart of the migration route." },
  { name: "Kalabo Lodge", location: "Park Gateway", description: "Comfortable base for exploring the remote plains." }
]

export default function ZambiaLiuwaPlainsNationalPark() {
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
            src="/zambia_liuwa.jpg" 
            alt="Liuwa Plains National Park" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-[8vw]">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Zambia Safari Destination</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
            Liuwa Plains National Park
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mb-8">
            Witness Africa's second-largest wildebeest migration in one of the continent's most remote and untouched wilderness areas.
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
            <p className="text-white font-semibold">Western Zambia</p>
          </div>
          <div className="text-center">
            <ClockIcon />
            <p className="text-white/60 text-sm mt-2">Best Time</p>
            <p className="text-white font-semibold">May - October</p>
          </div>
          <div className="text-center">
            <Mountain />
            <p className="text-white/60 text-sm mt-2">Area</p>
            <p className="text-white font-semibold">3,660 km²</p>
          </div>
          <div className="text-center">
            <Eye />
            <p className="text-white/60 text-sm mt-2">Specialty</p>
            <p className="text-white font-semibold">Wildebeest Migration</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
            The Wildebeest Migration
          </h2>
          <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              Liuwa Plains National Park offers one of Africa's most spectacular yet underrated wildlife experiences. Each year, over 30,000 wildebeest traverse these vast grasslands in Africa's second-largest migration, creating a breathtaking display of nature's raw power and the timeless rhythm of wildlife movement.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed mb-6">
              What makes Liuwa truly special is its relative obscurity. While the Serengeti migration draws millions of visitors, Liuwa remains one of Africa's best-kept secrets, with only a few thousand visitors annually. This means you can witness this incredible spectacle in near-solitude, experiencing the African wilderness as it was meant to be.
            </p>
            <p className="text-[#2C3E50]/70 text-lg leading-relaxed">
              The flat, expansive landscape provides exceptional visibility in all directions. Watch as predator-prey interactions unfold across the plains, with lions, cheetahs, and hyenas following the herds. The dry season transforms the landscape into a photographer's paradise, with golden grasses, dramatic skies, and wildlife concentrated around remaining water sources.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/zambia_liuwa.jpg" 
              alt="Liuwa Plains landscape" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#D4A03A] text-white p-6 rounded-xl">
              <p className="font-bold text-2xl">30,000+</p>
              <p className="text-sm">Migrating Wildebeest</p>
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
              The Great Plains
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
            Experience the Migration
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