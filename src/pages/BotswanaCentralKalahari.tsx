import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Moon, Sun, Mountain, Camera, Star, Wind, Footprints, Eye } from 'lucide-react'

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
  { name: "Kalahari Lion", description: "Desert-adapted lions with lighter coats and exceptional hunting skills", image: "/lion.jpg" },
  { name: "Cheetah", description: "Fastest land animals thriving in open savanna plains", image: "/cheetah.jpg" },
  { name: "African Wild Dog", description: "Highly social predators with pack hunting dynamics", image: "/leopard.jpg" },
  { name: "Brown Hyena", description: "Rare scavenger unique to Kalahari and surrounding regions", image: "/buffalo.jpg" },
  { name: "Springbok", description: "Iconic antelope species famous for pronking displays", image: "/giraffe.jpg" },
  { name: "Oryx (Gemsbok)", description: "Majestic antelope adapted to survive without drinking water", image: "/elephant.jpg" }
]

const activities = [
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Explore the vast reserve in 4x4 vehicles with expert guides", timing: "Year-round" },
  { icon: <Moon className="w-10 h-10" />, title: "Stargazing", description: "One of the world's darkest skies, perfect for astronomy", timing: "Year-round" },
  { icon: <Footprints className="w-10 h-10" />, title: "Walking Safaris", description: "Bush walks with experienced trackers for intimate wildlife encounters", timing: "May-October" },
  { icon: <Star className="w-10 h-10" />, title: "Bushmen Cultural Tours", description: "Learn ancient survival skills from indigenous San people", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Expeditions", description: "Capture predators in action and vast desert landscapes", timing: "Year-round" },
  { icon: <Mountain className="w-10 h-10" />, title: "Salt Pan Visits", description: "Day trips to nearby pans for unique landscape photography", timing: "Year-round" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Predator viewing, game drives, stargazing", conditions: "Clear skies, warm days, cold nights, sparse vegetation" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, newborn wildlife, lush landscapes", conditions: "Rainfall transforms the desert, dramatic storms, excellent photography" },
  { period: "Peak Season (June - August)", bestFor: "Optimal predator sightings, comfortable climate", conditions: "Mild temperatures, animals congregate around waterholes" }
]

const faqData = [
  {
    question: "What makes Central Kalahari special?",
    answer: "The Central Kalahari Game Reserve represents one of Africa's last true wilderness areas. Spanning over 52,000 square kilometers, this remote expanse offers unparalleled solitude and the chance to encounter wildlife in its most natural state—far from crowds and development. It's home to exceptional predator populations including lions, cheetahs, and African wild dogs."
  },
  {
    question: "When is the best time to visit Central Kalahari?",
    answer: "The optimal period is May through October during the dry season. As water sources dwindle, wildlife concentrates around remaining watering holes, creating exceptional viewing opportunities. The clear skies and minimal humidity also make this the best time for stargazing."
  },
  {
    question: "What wildlife will I see in the Kalahari?",
    answer: "The Kalahari hosts impressive populations of predators—lions, cheetahs, leopards, and African wild dogs thrive here. Prey species include springbok, oryx, wildebeest, and giraffes. The reserve also supports endangered brown hyenas and provides habitat for over 200 bird species."
  },
  {
    question: "Is Central Kalahari suitable for families?",
    answer: "Yes, though the remote nature of the reserve makes it most suitable for families with older children who appreciate wildlife. Many camps offer child-friendly activities and experienced guides who can engage young minds with the bush. The lack of crowds creates a private, safe environment for exploration."
  },
  {
    question: "How do I get to Central Kalahari?",
    answer: "The main gateway is Maun, reachable by commercial flight from Johannesburg or direct from Cape Town. From Maun, light aircraft transfers to bush camps take approximately 1-2 hours depending on your destination. Some camps offer game drive transfers from Ghanzi, which is also accessible by road."
  },
  {
    question: "What should I pack for a Kalahari safari?",
    answer: "Layered clothing is essential—temperatures can swing from freezing at night to 40°C+ during the day. Bring neutral-colored, breathable fabrics, a wide-brimmed hat, sunscreen, and quality binoculars. A camera with good zoom capabilities will help capture distant wildlife. Comfortable, broken-in walking shoes are recommended for bush walks."
  }
]

export default function BotswanaCentralKalahari() {
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
          src="/botswana_kalahari.jpg" 
          alt="Central Kalahari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Central Kalahari</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            CENTRAL
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            KALAHARI
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            True African Wilderness
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
              AFRICA'S LARGEST GAME RESERVE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Welcome to the Central Kalahari Game Reserve—a vast, untamed wilderness that represents the soul of Botswana's safari tradition. Spanning over 52,000 square kilometers of undulating savanna, acacia woodlands, and ancient riverbeds, this extraordinary reserve offers an authentic wilderness experience unlike any other.
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
                  Predators Paradise
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Central Kalahari boasts one of Africa's highest concentrations of predators. Prides of desert-adapted lions roam these vast plains, while cheetahs leverage their exceptional speed across the open terrain.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The reserve is particularly renowned for its African wild dog populations—the highest density anywhere in Botswana. Watching these highly coordinated hunters work together to pursue prey is an experience that will stay with you forever.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_kalahari.jpg" alt="Kalahari Lion" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/botswana_makgadikgadi.jpg" alt="Kalahari Stars" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Celestial Displays
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Far from any light pollution, the Central Kalahari offers some of the clearest stargazing on Earth. The Milky Way stretches across the sky in breathtaking detail, while shooting stars are a common nightly occurrence.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Many camps offer astronomy tours led by expert guides who can identify constellations, planets, and deep-sky objects. There's something profound about watching the universe unfold while sitting around a campfire in the African bush.
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
              DESERT PREDATORS & PREY
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
              KALAHARI ADVENTURES
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
                Pair the desert with the delta's waterways for a complete Botswana experience. From dry savanna to water-based adventures.
              </p>
            </Link>
            <Link to="/botswana-makgadikgadi-pans" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Makgadikgadi Pans</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Explore the neighboring salt pans for a contrasting landscape experience. Ancient lakebeds and unique wildlife await.
              </p>
            </Link>
            <Link to="/botswana-chobe-national-park" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Chobe National Park</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Add the river to your safari for elephant encounters and boat cruises. A completely different wildlife experience.
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
            READY FOR THE KALAHARI?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Discover one of Africa's last true wilderness areas. Let our experts craft your perfect Kalahari safari adventure.
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
