import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Camera, Sun, Moon, Star, Footprints } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const wildlifeData = [
  { name: "Lion", description: "Large prides hunting on the floodplains", image: "/lion.jpg" },
  { name: "Leopard", description: "Elusive cats in riverine woodlands", image: "/leopard.jpg" },
  { name: "African Elephant", description: "Large herds grazing in the reserve", image: "/elephant.jpg" },
  { name: "Cape Buffalo", description: "Massive herds numbering in the thousands", image: "/buffalo.jpg" },
  { name: "Giraffe", description: "Elegant browsers on acacia savanna", image: "/giraffe.jpg" },
  { name: "Hippo", description: "Large populations in the waterways", image: "/hippo.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Explore the reserve in 4x4 vehicles with expert guides", timing: "Year-round" },
  { icon: <Footprints className="w-10 h-10" />, title: "Walking Safaris", description: "Experience the bush on foot with experienced trackers", timing: "May-October" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Capture predators and diverse wildlife", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Birdwatching", description: "Over 400 bird species in diverse habitats", timing: "Year-round" },
  { icon: <Moon className="w-10 h-10" />, title: "Night Drives", description: "Spot nocturnal predators and wildlife", timing: "Year-round" },
  { icon: <Sun className="w-10 h-10" />, title: "Boat Cruises", description: "Explore the waterways by boat", timing: "May-October" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Excellent predator sightings, big game viewing", conditions: "Animals congregate at waterholes, sparse vegetation" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, newborn wildlife, lush scenery", conditions: "Rain transforms the landscape, some roads impassable" },
  { period: "Peak Season (July - September)", bestFor: "Best wildlife viewing, comfortable weather", conditions: "Optimal conditions, popular with visitors" }
]

const faqData = [
  {
    question: "What makes Moremi special?",
    answer: "Moremi Game Reserve is widely considered one of Botswana's most beautiful reserves. It occupies a unique position in the heart of the Okavango Delta, offering diverse ecosystems from floodplains to woodlands. The reserve is known for excellent predator sightings, particularly lions and leopards."
  },
  {
    question: "How do I get to Moremi?",
    answer: "The main gateway is Maun, reachable by commercial flight from Johannesburg or other major cities. From Maun, most visitors fly to one of the private airstrips within the reserve or take a scenic helicopter transfer. Some visitors also access the reserve by 4x4 vehicle during the dry season."
  },
  {
    question: "What wildlife will I see?",
    answer: "Moremi is famous for its predator populations—lions, leopards, cheetahs, and African wild dogs are regularly spotted. Large herds of elephants, buffalo, giraffes, and hippos are also common. The reserve boasts over 400 bird species, making it a birdwatcher's paradise."
  },
  {
    question: "When is the best time to visit?",
    answer: "The best time is during the dry season from May to October when wildlife viewing is at its peak. Animals congregate around permanent water sources, making sightings more predictable. The weather is pleasant with warm days and cool nights."
  }
]

export default function BotswanaMoremiGameReserve() {
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
          src="/botswana_moremi.jpg" 
          alt="Moremi Game Reserve" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Moremi Game Reserve</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            MOREMI
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            GAME RESERVE
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Predator Paradise
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
              BOTSWANA'S BEAUTIFUL RESERVE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Moremi Game Reserve is widely considered one of Botswana's most beautiful reserves. Located in the heart of the Okavango Delta, it offers diverse ecosystems and some of the best predator sightings in Africa.
          </p>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              PREDATORS & BIG GAME
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
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              MOREMI ADVENTURES
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-display font-bold text-lg text-[#2C3E50] mb-4">{season.period}</h3>
                <p className="text-[#2C3E50] font-semibold mb-2">{season.bestFor}</p>
                <p className="text-[#2C3E50]/70 text-sm">{season.conditions}</p>
              </div>
            ))}
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
            READY FOR MOREMI?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience Botswana's beautiful reserve. Let our experts craft your perfect safari.
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
