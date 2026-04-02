import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Moon, Sun, Palmtree, Mountain, Camera, Star, Wind } from 'lucide-react'

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
  { name: "Meerkats", description: "Curious desert dwellers often found in large colonies", image: "/cheetah.jpg" },
  { name: "Brown Hyena", description: "Rare desert-adapted predator unique to the Kalahari", image: "/lion.jpg" },
  { name: "Springbok", description: "Graceful antelope adapted to arid environments", image: "/giraffe.jpg" },
  { name: "Secretary Bird", description: "Striking raptor known for hunting snakes", image: "/leopard.jpg" },
  { name: "Ground Squirrel", description: "Desert species with unique social behaviors", image: "/buffalo.jpg" },
  { name: "Oryx (Gemsbok)", description: "Iconic desert antelope with impressive horns", image: "/elephant.jpg" }
]

const activities = [
  { icon: <Moon className="w-10 h-10" />, title: "Salt Pan Excursions", description: "Traverse the vast white expanse of ancient lakebeds", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Stargazing", description: "Crystal-clear skies with the Milky Way overhead", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Capture otherworldly landscapes at sunrise and sunset", timing: "Year-round" },
  { icon: <Wind className="w-10 h-10" />, title: "Quad Bike Adventures", description: "Explore the pans on guided off-road excursions", timing: "May-October" },
  { icon: <Mountain className="w-10 h-10" />, title: "Bushmen Cultural Tours", description: "Learn ancient survival techniques from local guides", timing: "Year-round" },
  { icon: <Palmtree className="w-10 h-10" />, title: "Zulu Bushmen Walks", description: "Guided nature walks through the desert ecosystem", timing: "Year-round" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Wildlife viewing, game drives, stargazing", conditions: "Clear skies, warm days, cool nights" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, lush landscapes, fewer crowds", conditions: "Rainfall possible, dramatic thunderstorms" },
  { period: "Peak Season (June - August)", bestFor: "Optimal wildlife viewing, comfortable weather", conditions: "Warm days, cold nights, minimal rain" }
]

const faqData = [
  {
    question: "What makes Makgadikgadi Pans unique?",
    answer: "Makgadikgadi Pans represents one of Earth's most remarkable geological wonders—a vast ancient lakebed spanning over 16,000 square kilometers. This otherworldly landscape of white salt crust offers unparalleled opportunities for stargazing, wildlife photography, and immersive cultural encounters with the indigenous San and Bakgalagadi peoples."
  },
  {
    question: "When is the best time to visit Makgadikgadi?",
    answer: "The optimal window runs from May through October during the dry season. Wildlife congregates around remaining water holes, making sightings exceptional. For photographers, the green season (November to April) transforms the pans into a lush oasis teeming with migratory birds and newborn antelope."
  },
  {
    question: "What wildlife can I see at Makgadikgadi Pans?",
    answer: "The pans host remarkable desert-adapted species including meerkats, brown hyenas, springbok, and oryx. During the green season, flamingos and pelicans flock to the shallow waters. The area is also renowned for cheetah sightings and serves as a hunting ground for the region’s lions."
  },
  {
    question: "Is Makgadikgadi suitable for families?",
    answer: "Absolutely. Many camps offer family-friendly accommodations and activities. Children can enjoy meerkat encounters, bush walks, and cultural interactions with local communities. The vast open spaces provide safe exploration opportunities under expert guidance."
  },
  {
    question: "What should I pack for a Makgadikgadi safari?",
    answer: "Pack layers for temperature extremes—warm days can give way to freezing nights. Bring sun protection including a wide-brimmed hat and high-SPF sunscreen. Binoculars are essential for wildlife viewing, and a good camera with a zoom lens will capture the dramatic landscapes. Neutral-colored, breathable clothing is recommended."
  },
  {
    question: "How do I get to Makgadikgadi Pans?",
    answer: "The main gateway is Maun, Botswana's safari hub. From Maun, light aircraft transfers to luxury camps take approximately 30-45 minutes. Many travelers combine their Makgadikgadi visit with Okavango Delta or Chobe National Park for a comprehensive Botswana experience."
  }
]

export default function BotswanaMakgadikgadiPans() {
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
          src="/botswana_makgadikgadi.jpg" 
          alt="Makgadikgadi Pans" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Makgadikgadi Pans</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            MAKGADIKGADI
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            PANS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Where Earth Meets Sky
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
              ANCIENT SPLENDOR OF THE SALT PANS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Step into a world unlike any other at Makgadikgadi Pans National Park, Botswana's most otherworldly landscape. Once part of a vast ancient lake that covered much of the Kalahari Desert, these massive salt flats now create a surreal expanse of white crust stretching to the horizon.
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
                  A Landscape of Extremes
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Makgadikgadi Pans represent the remnants of ancient Lake Makgadikgadi, which once covered an area larger than Switzerland. Today, the vast salt crusts create a landscape so expansive and barren that it feels like stepping onto another planet.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Despite the harsh appearance, this extraordinary ecosystem supports remarkable biodiversity. From curious meerkat colonies to endangered brown hyenas, the desert teems with life adapted to survive these extreme conditions.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_makgadikgadi.jpg" alt="Makgadikgadi Salt Pans" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/botswana_kalahari.jpg" alt="Kalahari Desert" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Cultural Heritage
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Makgadikgadi region is home to the indigenous San people and Bakgalagadi communities who have called this harsh landscape home for thousands of years. Their intimate knowledge of survival in these extreme conditions offers visitors unique cultural insights.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Guided walks with local Bushmen provide extraordinary opportunities to learn ancient tracking skills, identify edible plants, and understand how human beings thrived in seemingly impossible environments.
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
              DESERT-ADAPTED SPECIES
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
              ACTIVITIES AT MAKGADIKGADI
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
                Add a water-based safari experience in Africa's largest inland delta. Witness hippos, crocodiles, and incredible birdlife in this UNESCO World Heritage site.
              </p>
            </Link>
            <Link to="/botswana-central-kalahari" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Central Kalahari</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Extend your desert adventure into the world's second-largest game reserve. Experience true wilderness and encounter desert-adapted wildlife.
              </p>
            </Link>
            <Link to="/botswana-chobe-national-park" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Chobe National Park</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Witness the largest elephant population in Africa along the Chobe River. Combine desert expanses with incredible river wildlife viewing.
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
            READY TO EXPLORE MAKGADIKGADI?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Let us help you plan your perfect Makgadikgadi Pans adventure. Our experts will create a tailored itinerary for an unforgettable desert experience.
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
