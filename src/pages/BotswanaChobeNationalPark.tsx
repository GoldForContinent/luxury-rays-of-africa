import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Anchor, Camera, Star, Wind, Footprints, Eye, Ship, Sun } from 'lucide-react'

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

const keyAreas = [
  { name: "Chobe Riverfront", description: "The most popular and accessible area featuring lush riverbanks, home to a variety of animals and famous for boat safaris." },
  { name: "Savuti Marsh", description: "A dynamic area known for predator-prey interactions with large lion prides, spotted hyenas, and leopards." },
  { name: "Linyanti Marshes", description: "A remote and exclusive area with fewer visitors, known for tranquil scenery and excellent birdwatching." },
  { name: "Nogatsaa Region", description: "Lesser-known with seasonal waterholes attracting elephants and antelope, perfect for those seeking solitude." }
]

const wildlifeData = [
  { name: "African Elephant", description: "The largest population on the continent, with over 120,000 elephants", image: "/elephant.jpg" },
  { name: "Cape Buffalo", description: "Massive herds often numbering in the thousands", image: "/buffalo.jpg" },
  { name: "Lions", description: "Prides that have learned to hunt large prey including elephants", image: "/lion.jpg" },
  { name: "Hippos", description: "Dense populations in the Chobe River waterways", image: "/hippo.jpg" },
  { name: "Nile Crocodile", description: "Ancient reptiles basking on riverbanks", image: "/leopard.jpg" },
  { name: "Sable Antelope", description: "Striking dark coats with impressive curved horns", image: "/giraffe.jpg" }
]

const activities = [
  { icon: <Ship className="w-10 h-10" />, title: "River Cruises", description: "Sunset boat cruises along the Chobe River for unparalleled elephant viewing", timing: "Year-round" },
  { icon: <Eye className="w-10 h-10" />, title: "Game Drives", description: "Morning and afternoon drives through diverse ecosystems", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Photography Tours", description: "Expert-guided photo expeditions capturing elephants at water's edge", timing: "Year-round" },
  { icon: <Footprints className="w-10 h-10" />, title: "Walking Safaris", description: "Guided bush walks on islands along the riverbanks", timing: "May-October" },
  { icon: <Anchor className="w-10 h-10" />, title: "Fishing Expeditions", description: "Catch tiger fish and other species in the Chobe River", timing: "Year-round" },
  { icon: <Star className="w-10 h-10" />, title: "Birdwatching", description: "Over 400 species including African skimmers and giant kingfishers", timing: "Year-round" }
]

const seasonalData = [
  { period: "Dry Season (May - October)", bestFor: "Elephant viewing, river cruises, exceptional wildlife", conditions: "Warm days, cool nights, animals congregate at river" },
  { period: "Green Season (November - April)", bestFor: "Birdwatching, newborn wildlife, lush landscapes", conditions: "Rainfall, dramatic storms, fewer visitors" },
  { period: "Peak Season (July - October)", bestFor: "Best wildlife viewing, comfortable weather", conditions: "Optimal conditions, larger crowds, higher prices" }
]

const entryFees = [
  { category: "International Visitors", fee: "120 BWP (~$9)" },
  { category: "SADC Residents", fee: "70 BWP (~$5.30)" },
  { category: "Botswana Citizens", fee: "10 BWP (~$0.75)" },
  { category: "Vehicle (4x4)", fee: "50 BWP (~$3.75)" },
  { category: "Children under 8", fee: "Free" }
]

const faqData = [
  {
    question: "What makes Chobe National Park special?",
    answer: "Chobe National Park is Botswana's first national park and home to the largest concentration of African elephants on the continent—over 120,000 individuals. The park's signature attraction is the spectacular sight of hundreds of elephants crossing the Chobe River, particularly magical at sunset. Beyond elephants, Chobe supports exceptional populations of lions, buffalo, hippos, and crocodiles."
  },
  {
    question: "When is the best time to visit Chobe?",
    answer: "The optimal period is from May through October during the dry season. As water becomes scarce in the hinterland, wildlife concentrates along the Chobe River, creating unparalleled viewing opportunities. The famous elephant river crossings are most frequent during these months. Peak season, July to October, offers the best wildlife viewing but also draws more visitors."
  },
  {
    question: "What wildlife will I see at Chobe?",
    answer: "Chobe is elephant country—you'll encounter them in staggering numbers, often in herds of 100 or more. The park also supports substantial buffalo populations (herds of thousands are common), prides of lions that have learned to hunt buffalo, hippos by the hundreds, and Nile crocodiles. Over 400 bird species have been recorded, including African skimmers, giant kingfishers, and carmine bee-eaters."
  },
  {
    question: "What activities are available at Chobe?",
    answer: "Chobe offers diverse safari activities including game drives in 4x4 vehicles, river cruises on the Chobe River (the best way to see elephants bathing and swimming), walking safaris on river islands, fishing expeditions for tiger fish, and birdwatching tours. The combination of land and water-based activities makes Chobe one of Africa's most versatile safari destinations."
  },
  {
    question: "How do I get to Chobe National Park?",
    answer: "The main gateway is Kasane, accessible by road from Victoria Falls (approximately 2 hours) or by flight from Maun or Johannesburg. Many travelers combine Chobe with a visit to Victoria Falls in Zimbabwe or Zambia. Once at Chobe, game lodges are a short drive from the park entrance, and river cruises depart directly from Kasane."
  },
  {
    question: "Is Chobe suitable for families?",
    answer: "Absolutely. Chobe's diverse activities appeal to all ages, and the prolific wildlife sightings ensure excitement for children. River cruises are particularly family-friendly, offering a relaxing way to view elephants and other animals from the water. Many lodges offer family accommodations and can arrange child-appropriate activities with experienced guides."
  }
]

export default function BotswanaChobeNationalPark() {
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
          alt="Chobe National Park" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/botswana-safaris" className="hover:text-[#D4A03A] transition-colors">Botswana Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Chobe National Park</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            CHOBE
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            NATIONAL PARK
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Land of Giants
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
              BOTSWANA'S ELEPHANT PARADISE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Welcome to Chobe National Park—Botswana's first national park and home to the largest concentration of African elephants on the continent. Here, you'll witness one of nature's most spectacular displays: hundreds of these magnificent creatures gathering along the banks of the Chobe River, crossing in unforgettable processions at sunset.
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
                  Elephant Spectacular
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Chobe is home to over 120,000 elephants—nearly one-quarter of Africa's entire elephant population. The sight of these gentle giants gathered along the river, bathing, playing, and crossing in ancient rhythms, is nothing short of extraordinary.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Unlike anywhere else in Africa, elephant sightings in Chobe are virtually guaranteed. Herds of 100 or more are common, and the famous "crossing" events—where dozens of elephants wade across the river—create unforgettable photographic opportunities.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/botswana_chobe.jpg" alt="Chobe Elephants" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/botswana_okavango.jpg" alt="Chobe River" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  River-based Safaris
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Chobe River forms the park's lifeblood, drawing wildlife from across the region. A river cruise offers a completely different perspective on the bush—elephants swimming alongside hippos, crocodiles basking on sandbanks, and countless birds in the trees above.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Sunset cruises are particularly magical, as the golden light illuminates elephants on the riverbanks and the famous crossing events unfold before your eyes. It's an experience that defines the African safari tradition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas of Chobe */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              REGIONS OF CHOBE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {keyAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-3">{area.name}</h3>
                <p className="text-[#2C3E50]/80">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              CHOBE'S BIGGEST RESIDENTS
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
              CHOBE ADVENTURES
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

      {/* Entry Fees */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Plan</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              ENTRY FEES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#2C3E50]">
                <tr>
                  <th className="p-4 text-left text-white font-semibold">Category</th>
                  <th className="p-4 text-right text-white font-semibold">Fee</th>
                </tr>
              </thead>
              <tbody>
                {entryFees.map((item, index) => (
                  <tr key={index} className="border-b border-[#D4C5B9]">
                    <td className="p-4 text-[#2C3E50] font-medium">{item.category}</td>
                    <td className="p-4 text-right text-[#D4A03A] font-bold">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-[#2C3E50]/60 text-sm mt-4">Fees are approximate and subject to change. Payable at park gates in Kasane.</p>
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
                Combine river safaris with water-based delta adventures. Experience Botswana's diverse landscapes in one journey.
              </p>
            </Link>
            <Link to="/botswana-makgadikgadi-pans" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Makgadikgadi Pans</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Add the otherworldly salt pans to your itinerary for a contrasting Botswana experience.
              </p>
            </Link>
            <Link to="/botswana-central-kalahari" className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all group">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3 group-hover:text-[#D4A03A] transition-colors">Central Kalahari</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Extend into the desert for predator-rich game viewing and exceptional stargazing.
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
            Witness the world's largest elephant population in their natural habitat. Let our experts craft your perfect Chobe safari adventure.
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
