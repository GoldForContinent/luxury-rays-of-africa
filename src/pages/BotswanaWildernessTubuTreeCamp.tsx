import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Eye, Anchor, Camera, Moon, Star, Footprints } from 'lucide-react'

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
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Morning and afternoon game drives exploring both the island and surrounding floodplains with excellent chances of spotting lions, leopards, cheetahs, elephants, and giraffes.", timing: "Year-round" },
  { icon: <Moon className="w-10 h-10" />, title: "Night Drives", description: "After-dark safaris revealing the nocturnal side of the delta, where guests may encounter bushbabies, genets, aardwolves, and various owls.", timing: "Year-round" },
  { icon: <Footprints className="w-10 h-10" />, title: "Walking Safaris", description: "Guided walks offering the opportunity to discover smaller details of the ecosystem, from tracks and plants to insect life.", timing: "May-October" },
  { icon: <Anchor className="w-10 h-10" />, title: "Mokoro Excursions", description: "When water levels are high, guests can glide through the shallow channels in traditional dugout canoes.", timing: "May-October" },
  { icon: <Camera className="w-10 h-10" />, title: "Motorboat Trips", description: "For deeper waterways and lagoons, motorboat safaris allow exploration of more remote channels.", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Birdwatching", description: "The area is a paradise for bird lovers, with species such as wattled cranes, African jacanas, and Pel's fishing owls.", timing: "Year-round" }
]

const faqData = [
  {
    question: "Where is Wilderness Tubu Tree Camp located?",
    answer: "Wilderness Tubu Tree Camp is located in the western Okavango Delta on Hunda Island, within the Jao Concession. The camp is accessible by light aircraft to Tubu Airstrip, with flights from Maun taking approximately 45 minutes and from Kasane about 1 hour and 20 minutes."
  },
  {
    question: "What type of accommodation does the camp offer?",
    answer: "The camp features eight traditional style canvas tents raised on wooden decks, each with an en-suite bathroom, indoor and outdoor showers, and a private veranda with sweeping views of the surrounding plains."
  },
  {
    question: "What activities are available at the camp?",
    answer: "Guests can enjoy game drives, night drives, walking safaris, mokoro excursions, motorboat trips, and birdwatching. The diverse habitats mean sightings are varied and plentiful throughout the year."
  },
  {
    question: "What is the best time to visit?",
    answer: "The best time to visit is during the dry season from May to October when wildlife viewing is at its best. Animals congregate around water sources and the sparse vegetation makes sightings easier."
  },
  {
    question: "Is the camp suitable for families?",
    answer: "Yes, the camp is family-friendly and offers activities suitable for children. The intimate setting and experienced guides make it ideal for families seeking a luxury safari experience."
  },
  {
    question: "What is included in the rate?",
    answer: "Rates typically include accommodation, all meals, scheduled safari activities, park fees, and internal transfers. Alcoholic beverages and premium drinks may be additional."
  }
]

const roomFeatures = [
  "Eight canvas tents on wooden decks",
  "En-suite bathrooms with indoor and outdoor showers",
  "Private veranda with floodplain views",
  "Large beds with mosquito netting",
  "Cozy seating areas",
  "Solar-powered with sustainable operations"
]

export default function WildernessTubuTreeCamp() {
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
          src="/botswana_tubu.jpg" 
          alt="Wilderness Tubu Tree Camp" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Wilderness Tubu Tree Camp</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            WILDERNESS
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            TUBU TREE CAMP
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Intimate Delta Safari
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
              AN INTIMATE DELTA EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Wilderness Tubu Tree Camp is an intimate safari camp set on Hunda Island in the Okavango Delta's Jao Concession, an area known for its rich combination of floodplains, dry savannah, and diverse wildlife. Elevated on wooden platforms, the camp provides stunning views over the floodplains and waterways.
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
                  The camp is located in the western Okavango Delta on Hunda Island. The most convenient way to access the camp is by light aircraft to Tubu Airstrip.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The flight from Maun takes approximately 45 minutes, and from Kasane about 1 hour and 20 minutes. Upon arrival, guests are transferred by vehicle in around 5 to 10 minutes to the camp.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Due to seasonal flooding and its island location, access by road from outside the concession is not practical.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_okavango.jpg" alt="Okavango Delta" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
                The camp has eight traditional style canvas tents raised on wooden decks, each with an en-suite bathroom, indoor and outdoor showers, and a private veranda with sweeping views of the surrounding plains. The interiors combine natural materials with comfortable furnishings, including large beds with mosquito netting and cozy seating areas.
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
              <img src="/botswana_tubu.jpg" alt="Tubu Tree Camp" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$850</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$420</td>
                </tr>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">High Season (May-Jun, Nov)</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$1,150</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$580</td>
                </tr>
                <tr className="border-b border-[#D4C5B9]">
                  <td className="p-4 text-[#2C3E50] font-medium">Peak Season (Jul-Oct)</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$1,450</td>
                  <td className="p-4 text-right text-[#D4A03A] font-bold">$720</td>
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
            <Link to="/botswana-camp-kalahari" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Camp Kalahari</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                A relaxed safari camp on the edge of the Makgadikgadi Salt Pans with desert adventures.
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
            READY FOR TUBU TREE?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Experience the magic of the Okavango Delta at Wilderness Tubu Tree Camp. Let our experts craft your perfect safari.
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
