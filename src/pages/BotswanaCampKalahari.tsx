import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Camera, Moon, Star, Footprints, Palmtree } from 'lucide-react'

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
  { icon: <Eye className="w-10 h-10" />, title: "Guided Game Drives", description: "Explore the Makgadikgadi Pans and surrounding grasslands in open 4x4 vehicles.", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Meerkat Encounters", description: "Spend time with habituated meerkat colonies, watching them forage up close.", timing: "Year-round" },
  { icon: <Palmtree className="w-10 h-10" />, title: "Quad Bike Adventures", description: "Ride across the vast open salt pans on quad bikes during the dry season.", timing: "May-November" },
  { icon: <Footprints className="w-10 h-10" />, title: "Bushman Walks", description: "Walk with San Bushman guides who share ancient survival skills.", timing: "Year-round" },
  { icon: <Moon className="w-10 h-10" />, title: "Stargazing", description: "Experience one of the clearest night skies in Africa.", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Migration Viewing", description: "Witness Africa's second-largest zebra migration in the green season.", timing: "November-April" }
]

const faqData = [
  {
    question: "Where is Camp Kalahari located?",
    answer: "Camp Kalahari is situated on Brown Hyena Island, near the Makgadikgadi Pans National Park in north central Botswana. Access is primarily by light aircraft to Tsigaro Airstrip from Maun (around 1 hour) or Kasane (about 1 hour 45 minutes)."
  },
  {
    question: "What type of accommodation does the camp offer?",
    answer: "The camp offers twelve Meru style canvas tents, including two family tents, each with en-suite bathrooms, hot running water, and flush toilets. Interiors are simple yet charming with locally woven textiles and wooden furniture."
  },
  {
    question: "What activities are available?",
    answer: "Guests can enjoy guided game drives, meerkat encounters, quad bike adventures, Bushman walks, horseback safaris, and stargazing. The camp also offers zebra and wildebeest migration viewing during the green season."
  },
  {
    question: "When is the best time to visit?",
    answer: "The best time to visit is during the dry season (May to November) for game viewing and quad biking. The green season (November to April) offers the spectacular zebra migration and lush landscapes."
  },
  {
    question: "Is the camp suitable for families?",
    answer: "Yes, Camp Kalahari is more family-friendly and casual compared to its sister properties Jack's Camp and San Camp. It offers a great balance of adventure and comfort for families."
  },
  {
    question: "What is included in the rate?",
    answer: "Rates typically include accommodation, all meals, scheduled safari activities, park fees, and internal transfers. Premium alcoholic beverages may be additional."
  }
]

const roomFeatures = [
  "Twelve Meru style canvas tents",
  "Two family tents available",
  "En-suite bathrooms with hot water",
  "Locally inspired decor",
  "Central mess tent with dining area",
  "Solar-powered operations"
]

export default function CampKalahari() {
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
          alt="Camp Kalahari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Camp Kalahari</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            CAMP
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            KALAHARI
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Desert Safari Adventure
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
              A RELAXED DESERT ESCAPE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Camp Kalahari is a relaxed yet stylish safari camp located on the edge of Botswana's Makgadikgadi Salt Pans, offering a comfortable base for exploring one of the most unique desert ecosystems in Africa. Part of the trio of sister properties, it is more family friendly and casual.
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
                  Camp Kalahari is situated on Brown Hyena Island, near the Makgadikgadi Pans National Park in north central Botswana.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Access is primarily by light aircraft to Tsigaro Airstrip from Maun (around 1 hour) or Kasane (about 1 hour 45 minutes), followed by a short game drive to the camp.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  For self-drive travelers, access is possible in the dry season with a suitable 4x4 vehicle, although most guests arrive as part of a fly-in safari.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_makgadikgadi.jpg" alt="Makgadikgadi Pans" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
                The camp offers twelve Meru style canvas tents, including two family tents, each with en-suite bathrooms, hot running water, and flush toilets. Interiors are simple yet charming, decorated with locally woven textiles, wooden furniture, and vintage campaign style pieces.
              </p>
              <div className="bg-[#FAF3E0] p-6 rounded-xl">
                <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-4">Camp Features</h4>
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
              <img src="/botswana_kalahari.jpg" alt="Camp Kalahari" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
              CAMP ACTIVITIES
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
                  <th className="p-4 text-left text-white font-semibold">Season</th>
                  <th className="p-4 text-right text-white font-semibold">Per Person Sharing</th>
                  <th className="p-4 text-right text-white font-semibold">Single Supplement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">Low Season (Nov-Apr)</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$650</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$320</td>
                </tr>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">High Season (May-Jun, Nov)</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$950</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$480</td>
                </tr>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">Peak Season (Jul-Oct)</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$1,250</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$620</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-[#2C3E50]/60 text-sm mt-4">Rates include all meals, scheduled activities, park fees, and internal transfers.</p>
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
            <Link to="/botswana-chobe-safari-lodge" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Chobe Safari Lodge</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                A well-established lodge on the banks of the Chobe River in Kasane.
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
            READY FOR CAMP KALAHARI?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience the magic of the Makgadikgadi Salt Pans at Camp Kalahari. Let our experts craft your perfect safari.
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
