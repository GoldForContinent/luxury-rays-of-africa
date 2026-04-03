import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Anchor, Camera, Moon, Star, Ship } from 'lucide-react'

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

const activities = [
  { icon: <Ship className="w-10 h-10" />, title: "River Cruises", description: "Sunset boat cruises along the Chobe River for unparalleled elephant viewing.", timing: "Year-round" },
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Morning and afternoon game drives in Chobe National Park.", timing: "Year-round" },
  { icon: <Anchor className="w-10 h-10" />, title: "Fishing Trips", description: "Guided fishing excursions targeting tigerfish and bream.", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Expert-guided photo expeditions capturing elephants at water's edge.", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Birdwatching", description: "Over 450 recorded species including African fish eagles and kingfishers.", timing: "Year-round" },
  { icon: <Moon className="w-10 h-10" />, title: "Cultural Tours", description: "Visits to nearby villages providing insight into local traditions.", timing: "Year-round" }
]

const faqData = [
  {
    question: "Where is Chobe Safari Lodge located?",
    answer: "Chobe Safari Lodge is situated in Kasane, in the northeastern corner of Botswana, directly overlooking the Chobe River. It is approximately 10 minutes by road from Kasane International Airport."
  },
  {
    question: "What type of accommodation does the lodge offer?",
    answer: "The lodge offers a variety of accommodation types including luxury rooms, river view rooms, rondavels, and family units. All rooms are air-conditioned with en-suite bathrooms and private balconies or patios."
  },
  {
    question: "What activities are available at the lodge?",
    answer: "Guests can enjoy game drives in Chobe National Park, boat cruises on the Chobe River, fishing trips, birdwatching, day trips to Victoria Falls, and cultural village tours."
  },
  {
    question: "How do I get to the lodge?",
    answer: "The lodge is approximately 10 minutes from Kasane International Airport with flights from Maun (1 hour 30 minutes), Gaborone (1 hour 45 minutes), and Johannesburg (2 hours). By road, it's about 8-9 hours from Maun."
  },
  {
    question: "Can I visit Victoria Falls from the lodge?",
    answer: "Yes, the lodge's proximity to the Zimbabwe and Zambia borders makes it ideal for day trips to Victoria Falls. Transfers and border assistance can be arranged."
  },
  {
    question: "What is included in the rate?",
    answer: "Rates typically include accommodation, all meals, and scheduled activities. Alcoholic beverages, premium drinks, and Victoria Falls excursions may be additional."
  }
]

const roomFeatures = [
  "Luxury rooms, river view rooms, rondavels, and family units",
  "Air-conditioned with en-suite bathrooms",
  "Private balconies or patios",
  "Open-air restaurant and cocktail bar",
  "Riverside swimming pool",
  "Curio shop and conference facilities"
]

export default function ChobeSafariLodge() {
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
          src="/botswana_chobe.jpg" 
          alt="Chobe Safari Lodge" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Chobe Safari Lodge</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            CHOBE
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARI LODGE
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Riverfront Luxury
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
              RIVERFRONT SAFARI EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Chobe Safari Lodge is a well-established property located on the banks of the Chobe River in Kasane, Botswana. It serves as a gateway to Chobe National Park, one of Africa's most famous wildlife destinations. The lodge blends comfort with authentic African charm.
          </p>
        </div>
      </section>

      {/* Location & Access */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Location & Access
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The lodge is situated in Kasane, in the northeastern corner of Botswana, directly overlooking the Chobe River and a short distance from the gate to Chobe National Park.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  It is approximately 10 minutes by road from Kasane International Airport, which has regular flights from Maun, Gaborone, and Johannesburg. Flight times are about 1 hour 30 minutes from Maun and 2 hours from Johannesburg.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  By road, Kasane is well connected—about 1 hour from Victoria Falls or Livingstone, and 8-9 hours from Maun.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_chobe.jpg" alt="Chobe River" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation & Facilities */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              ACCOMMODATION & FACILITIES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-8">
                Chobe Safari Lodge offers a variety of accommodation types, including luxury rooms, river view rooms, rondavels, and family units. All rooms are air-conditioned with en-suite bathrooms and private balconies or patios. The main lodge area features an open-air restaurant, cocktail bar, riverside swimming pool, curio shop, and conference facilities.
              </p>
              <div className="bg-[#FAF3E0] p-6 rounded-xl">
                <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-4">Lodge Features</h4>
                <ul className="space-y-3">
                  {roomFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#2C3E50]">
                      <span className="text-[#D4A03A]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
              <img src="/botswana_luxury2.jpg" alt="Chobe Safari Lodge" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              LODGE ACTIVITIES
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

      {/* Pricing Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Rates</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              2026 SAFARI RATES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#2C3E50]">
                <tr>
                  <th className="p-4 text-left text-white font-semibold">Room Type</th>
                  <th className="p-4 text-right text-white font-semibold">Per Person Sharing</th>
                  <th className="p-4 text-right text-white font-semibold">Single Supplement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">Standard Room</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$350</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$180</td>
                </tr>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">River View Room</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$450</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$220</td>
                </tr>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">Rondavel</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$550</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$280</td>
                </tr>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">Family Unit</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$650</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$320</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-[#2C3E50]/60 text-sm mt-4">Rates include all meals, park fees, and scheduled activities. Victoria Falls excursions are additional.</p>
        </div>
      </section>

      {/* Other Camps Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mt-4">
              OTHER BOTSWANA CAMPS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/botswana-wilderness-tubu-tree-camp" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Wilderness Tubu Tree</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                An intimate safari camp in the Okavango Delta with stunning floodplain views.
              </p>
            </Link>
            <Link to="/botswana-camp-kalahari" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Camp Kalahari</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                A relaxed safari camp on the edge of the Makgadikgadi Salt Pans.
              </p>
            </Link>
            <Link to="/botswana-safaris" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">All Botswana</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Explore more safari options across Botswana's premier destinations.
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
            READY FOR CHOBE?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience the magic of Chobe National Park from Chobe Safari Lodge. Let our experts craft your perfect safari.
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
