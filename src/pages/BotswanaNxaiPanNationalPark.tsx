import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Moon, Sun, Palmtree, Camera, Star, Wind, Footprints, Eye } from 'lucide-react'

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
  { name: "Zebras", description: "The park hosts Africa's second-largest zebra migration", image: "/zebra.jpg" },
  { name: "Lions", description: "Prides that have adapted to the harsh desert environment", image: "/lion.jpg" },
  { name: "Cheetahs", description: "Fastest land animals thriving in open savanna", image: "/cheetah.jpg" },
  { name: "Giraffes", description: "Elegant inhabitants of the acacia woodlands", image: "/giraffe.jpg" },
  { name: "Springbok", description: "Iconic antelope species famous for pronking displays", image: "/giraffe.jpg" },
  { name: "Wildebeest", description: "Part of the seasonal migration through the park", image: "/buffalo.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Explore the park in 4x4 vehicles with expert guides", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Capture the stunning landscapes and wildlife", timing: "Year-round" },
  { icon: <Moon className="w-10 h-10" />, title: "Stargazing", description: "Crystal-clear skies with the Milky Way overhead", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Baobab Tree Views", description: "Visit the iconic ancient baobab trees", timing: "Year-round" },
  { icon: <Footprints className="w-10 h-10" />, title: "Walking Safaris", description: "Guided bush walks with experienced trackers", timing: "May-October" },
  { icon: <Palmtree className="w-10 h-10" />, title: "Self-Drive Safaris", description: "Explore the park at your own pace", timing: "Year-round" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Wildlife viewing, game drives, best for predators", conditions: "Clear skies, warm days, cool nights, animals congregate" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, migration viewing, lush landscapes", conditions: "Rainfall transforms the pans, migratory birds arrive" },
  { period: "Peak Season (July - October)", bestFor: "Best wildlife concentration, excellent predator sightings", conditions: "Hot days, animals gather at waterholes" }
]

const faqData = [
  {
    question: "What makes Nxai Pan National Park special?",
    answer: "Nxai Pan National Park is a captivating wilderness area in northeastern Botswana, covering approximately 2,600 square kilometers. The park is part of the larger Makgadikgadi Pan System and offers strikingly diverse environments, from arid desert plains to grasslands and seasonal wetlands. It's famous for its stunning salt pan, ancient baobab trees, and the annual zebra migration."
  },
  {
    question: "When is the best time to visit Nxai Pan?",
    answer: "The best time to visit Nxai Pan National Park is during the dry season from May to October. This period offers excellent game viewing as animals concentrate around the remaining waterholes, and the sparse vegetation makes wildlife easier to spot. The weather is cooler, and conditions are perfect for safaris."
  },
  {
    question: "What wildlife will I see at Nxai Pan?",
    answer: "Nxai Pan is known for its seasonal wildlife migration, particularly during the wet season when antelopes, zebras, and wildebeest move through the park. Predators such as lions and cheetahs follow the herds. The park also features iconic baobab trees and excellent birdwatching opportunities."
  },
  {
    question: "What activities are available at Nxai Pan?",
    answer: "Activities include game drives in 4x4 vehicles, walking safaris with experienced guides, self-drive safaris, photography tours, and stargazing. The park offers a more tranquil safari experience with fewer visitors compared to other parts of Botswana."
  },
  {
    question: "How do I get to Nxai Pan National Park?",
    answer: "Nxai Pan is accessible by road from Maun, about 240 km away with a 4-5 hour drive. A 4x4 vehicle is highly recommended. The nearest airstrip is Nxai Pan Airstrip, accessible via chartered flights from Maun, taking approximately 30 minutes."
  },
  {
    question: "What is the entry fee for Nxai Pan?",
    answer: "Park entry fees are approximately USD 10 per person per day for international visitors, USD 5 for SADC residents, and USD 2.50 for Botswana citizens. Fees may vary, so it's recommended to confirm when planning your visit."
  }
]

export default function BotswanaNxaiPanNationalPark() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
          src="/botswana_nxai.jpg" 
          alt="Nxai Pan National Park" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Nxai Pan</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            NXAI PAN
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            NATIONAL PARK
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Land of the Giants
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/botswana-safaris" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View All Botswana
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              BOTSWANA'S ZEBRA MIGRATION destination
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Welcome to Nxai Pan National Park—a captivating wilderness in northeastern Botswana where ancient baobab trees stand sentinel over vast salt pans and thousands of zebras traverse the landscape in one of Africa's most spectacular seasonal migrations.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  The Great Zebra Migration
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Nxai Pan is famous for hosting Africa's second-largest zebra migration, second only to the wildebeest migration in the Serengeti. Each year, thousands of zebras cross the salt pans in search of fresh grazing, creating one of nature's most awe-inspiring spectacles.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The migration typically peaks during the wet season (November to April), when the pans transform into lush grasslands attracting not only zebras but also wildebeest, antelopes, and their predators—lions and cheetahs following the herds.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_nxai.jpg" alt="Zebra Migration" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/botswana_kalahari.jpg" alt="Baobab Trees" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Iconic Baobab Trees
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Nxai Pan is home to some of Botswana's most iconic and photographically striking baobab trees. These ancient giants, with their distinctive swollen trunks and branches reaching toward the sky, create a surreal landscape unlike anywhere else in Africa.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The baobabs of Nxai Pan are particularly impressive, standing as silent witnesses to millennia of history. They provide a stunning backdrop for photography and create unforgettable safari moments, especially during sunrise and sunset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              DESERT WILDLIFE & MIGRATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeData.map((animal, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{animal.name}</h3>
                  <p className="text-[#2C3E50]/70 text-sm">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experiences</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              NXAI PAN ADVENTURES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-[#D4A03A] mb-4">{activity.icon}</div>
                <h3 className="text-white font-display font-bold text-xl mb-2">{activity.title}</h3>
                <p className="text-white/80 mb-3">{activity.description}</p>
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {index === 0 && <Sun className="text-[#CD7F32] w-6 h-6" />}
                  {index === 1 && <Wind className="text-[#2E8B57] w-6 h-6" />}
                  {index === 2 && <Star className="text-[#D4A03A] w-6 h-6" />}
                  <h3 className="font-display font-bold text-lg text-[#2C3E50]">{season.period}</h3>
                </div>
                <p className="text-[#2C3E50] font-semibold mb-2">{season.bestFor}</p>
                <p className="text-[#2C3E50]/70 text-sm">{season.conditions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Park Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Combine</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mt-4">
              COMBINE WITH OTHER DESTINATIONS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/botswana-safaris" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Okavango Delta</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Pair the pan experience with the delta's waterways for a complete Botswana safari experience.
              </p>
            </Link>
            <Link to="/botswana-makgadikgadi-pans" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Makgadikgadi Pans</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Extend your salt pan adventure to the larger Makgadikgadi system for more exploration.
              </p>
            </Link>
            <Link to="/botswana-central-kalahari" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Central Kalahari</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Venture into the vast desert wilderness for predator viewing and stargazing.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Questions</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-bold text-lg text-[#2C3E50]">{faq.question}</span>
                  <span className="text-[#D4A03A] text-2xl">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#2C3E50] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            READY FOR NXAI PAN?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience one of Botswana's most underrated safari destinations. Let our experts craft your perfect Nxai Pan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/botswana-safaris" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View All Botswana
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
