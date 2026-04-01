import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "Is Uganda safe to visit for safaris?",
    answer: "Uganda is very safe for luxury safaris. According to the Global Peace Index, Uganda ranks among the safest safari destinations in Africa. Tourism areas like Bwindi, Kibale, and Queen Elizabeth have excellent security."
  },
  {
    question: "Which are the best destinations in Uganda?",
    answer: "Top destinations include Bwindi for gorilla trekking, Kibale for chimpanzees, Queen Elizabeth for tree-climbing lions and Big Five, Murchison Falls for waterfalls, and Jinja for adventure activities."
  },
  {
    question: "How much does a Uganda safari cost?",
    answer: "Luxury Uganda safaris range from $1,500 to $4,000+ per person per day. Gorilla permits cost approximately $700 per person. Peak season (June-September) commands premium pricing."
  },
  {
    question: "What is the best time to visit Uganda?",
    answer: "The best times are June to September and December to February for dry season gorilla trekking and wildlife viewing. These periods offer easier treks and better road conditions."
  },
  {
    question: "How much is a gorilla permit in Uganda?",
    answer: "Gorilla permits in Uganda cost approximately $700 per person for one hour with the gorillas. These must be booked well in advance, especially during peak season."
  },
  {
    question: "What should I pack for Uganda?",
    answer: "Pack lightweight, breathable clothing, hiking boots for gorilla treks, rain gear, insect repellent, binoculars, camera with good zoom, and layers for varying temperatures."
  },
  {
    question: "Can I see the Big Five in Uganda?",
    answer: "Yes, Uganda offers Big Five in Queen Elizabeth National Park and Murchison Falls—lions, elephants, leopards, buffalo, and rhinos can all be spotted."
  },
  {
    question: "What makes Uganda unique for safaris?",
    answer: "Uganda offers the unique combination of Big Five savanna safaris AND primate experiences (gorillas and chimpanzees) in one country—something no other East African destination provides."
  },
  {
    question: "Do I need vaccinations for Uganda?",
    answer: "Yellow fever vaccination is required. Recommended vaccinations include hepatitis A and B, typhoid, and malaria prophylaxis. Consult your doctor 6-8 weeks before travel."
  },
  {
    question: "How long should I plan for a Uganda safari?",
    answer: "A minimum of 7-10 days is recommended to cover gorilla trekking, chimpanzee tracking, and savanna parks. For a comprehensive experience, plan 12-14 days."
  }
]

const ugandaParks = [
  { name: "Bwindi Impenetrable National Park", description: "Home to half the world's mountain gorillas. Ultimate gorilla trekking destination.", image: "/uganda.png" },
  { name: "Kibale Forest National Park", description: "Best place in Africa for chimpanzee tracking with 1,500+ chimpanzees.", image: "/photo_safari.jpg" },
  { name: "Queen Elizabeth National Park", description: "Famous for tree-climbing lions and classic savanna wildlife.", image: "/family_safari.jpg" },
  { name: "Murchison Falls National Park", description: "Dramatic waterfalls where the Nile squeezes through a gorge.", image: "/unfiltered_collage_01.jpg" },
  { name: "Mgahinga Gorilla National Park", description: "Smallest park with volcano hiking and gorilla tracking.", image: "/unfiltered_collage_02.jpg" },
  { name: "Lake Mburo National Park", description: "Compact park with zebra, hippos, and excellent birdlife.", image: "/migration_collage_01.jpg" },
  { name: "Semuliki National Park", description: "Hot springs, forest birds, and cultural experiences.", image: "/destinations_hero.jpg" },
  { name: "Mount Rwenzori National Park", description: "Mythical Mountains of the Moon with unique alpine flora.", image: "/hero_sunrise.jpg" },
  { name: "Jinja & River Nile", description: "Adventure capital with white-water rafting and boat cruises.", image: "/kenya_card.jpg" }
]

const safariActivities = [
  { icon: "🦍", title: "Gorilla Trekking", description: "Bwindi hosts half the world's mountain gorillas. Intense one-hour encounter.", timing: "June-September & Dec-Feb" },
  { icon: "🐒", title: "Chimpanzee Tracking", description: "Kibale offers the best chimp viewing in Africa at close range.", timing: "Year-round" },
  { icon: "🦁", title: "Game Drives in Queen Elizabeth", description: "Spot tree-climbing lions, elephants, and herds of buffalo.", timing: "June-October" },
  { icon: "🌊", title: "Murchison Falls", description: "Boat cruise to dramatic waterfall where Nile squeezes through gorge.", timing: "June-October" },
  { icon: "🚣", title: "White Water Rafting", description: "Jinja offers world-class rafting on the source of the Nile.", timing: "October-March" },
  { icon: "🐦", title: "Birdwatching", description: "Over 1,000 species including the prehistoric shoebill stork.", timing: "Year-round" },
  { icon: "🏔️", title: "Mountain Climbing", description: "Summit Mount Rwenzori or hike through the Rwenzori foothills.", timing: "June-October" },
  { icon: "🛶", title: "Boat Safaris", description: "Kazinga Channel cruises for hippos, crocodiles, and waterbirds.", timing: "Year-round" },
  { icon: "🤿", title: "Scuba Diving", description: "Lake Mutanda and other spots for unique freshwater diving.", timing: "November-April" },
  { icon: "🏛️", title: "Cultural Tours", description: "Batwa village visits and community experiences near parks.", timing: "Year-round" }
]

const safariTypes = [
  {
    title: "Gorilla & Chimp Trekking Safari", price: "$1,500 - $2,500", perPerson: "per person per day",
    description: "Combine gorilla trekking in Bwindi with chimpanzee tracking in Kibale. The ultimate primate experience.",
    features: ["Bwindi gorilla permit included", "Kibale chimp tracking", "Expert guides", "Forest lodge stay"]
  },
  {
    title: "Luxury Uganda Fly-In Safari", price: "$2,500 - $4,000+", perPerson: "per person per day",
    description: "Fly between parks in small aircraft. Stay in luxury lodges with all-inclusive service.",
    features: ["Fly-in between camps", "Luxury lodge accommodation", "Private game drives", "All meals & drinks"]
  },
  {
    title: "Uganda Complete Safari", price: "From $3,500", perPerson: "per person (10 days)",
    description: "Cover gorillas, chimps, Queen Elizabeth, and Murchison Falls in one epic journey.",
    features: ["All major parks", "Mixed activities", "Domestic flights", "Professional guide"]
  },
  {
    title: "Primates & Wildlife Combo", price: "$2,000 - $3,500", perPerson: "per person per day",
    description: "Primate experiences combined with classic Big Five game drives in savanna parks.",
    features: ["Gorilla & chimp permits", "Queen Elizabeth game drives", "Boat safaris", "Expert naturalist guide"]
  }
]

const samplePackages = [
  { title: "Gorilla & Chimp Express", nights: "5 Days / 4 Nights", price: "2,800", destinations: ["Entebbe", "Kibale", "Bwindi"] },
  { title: "Ultimate Uganda Safari", nights: "10 Days / 9 Nights", price: "5,500", destinations: ["Kibale", "Queen Elizabeth", "Murchison Falls", "Bwindi"] },
  { title: "Luxury Fly-In Gorilla Safari", nights: "7 Days / 6 Nights", price: "6,200", destinations: ["Bwindi", "Kibale", "Queen Elizabeth"] }
]

const accommodations = [
  { name: "Gorilla Safari Lodge", location: "Bwindi", description: "Luxury lodge overlooking the Impenetrable Forest." },
  { name: "Elephant Plains Lodge", location: "Queen Elizabeth", description: "Premium savanna lodge with game drive access." },
  { name: "Kibale Lodge", location: "Kibale", description: "Forest-edge eco-lodge for chimpanzee tracking." }
]

const seasonalData = [
  { park: "Bwindi", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Kibale", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Queen Elizabeth", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Murchison Falls", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Jinja", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Lake Mburo", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Mgahinga", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function UgandaSafari() {
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
          src="/uganda.png" 
          alt="Uganda Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Uganda Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            UGANDA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            The Pearl of Africa Awaits
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Safaris
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Why Visit Uganda */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY UGANDA IS A TOP SAFARI DESTINATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Known as the "Pearl of Africa," Uganda offers an extraordinary blend of biodiversity—rainforests, volcanic mountains, and the source of the Nile. Here, you can encounter both the Big Five and the majestic mountain gorillas in a single journey.
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
                  Gorillas & Chimpanzees
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Uganda is the only place where you can combine classic savanna safaris with extraordinary primate experiences. Bwindi Impenetrable National Park shelters half the world's remaining mountain gorillas.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Kibale Forest hosts the largest population of chimpanzees in Africa—your chance to track our closest relatives in their natural habitat.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/photo_safari.jpg" alt="Gorilla" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/family_safari.jpg" alt="Queen Elizabeth" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Big Five & Tree-Climbing Lions
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Queen Elizabeth National Park offers classic savanna game drives with the unique Ishasha lions—famous for climbing fig trees to rest. Herds of elephants and buffalo roam the plains.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Murchison Falls adds dramatic waterfall views to your wildlife experience, where the Nile forces through a narrow gorge.
                </p>
              </div>
            </div>
          </div>

          <div ref={addToRefs}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Adventure & Cultural Immersion
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Jinja, the adventure capital, offers white-water rafting on the Nile's source. Mount Rwenzori provides challenging climbs through unique alpine ecosystems.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Experience the Batwa people and local communities for authentic cultural connections. With fewer crowds than Kenya and Tanzania, Uganda offers intimate, personalized encounters.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/unfiltered_collage_01.jpg" alt="Adventure" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section ref={addToRefs} className="py-20 px-4 md:px-[8vw] bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="font-display font-bold text-3xl text-[#2C3E50] mb-4">
              READY FOR AN AFRICAN ADVENTURE?
            </h3>
            <p className="text-[#2C3E50] text-lg">
              Explore 70+ luxury African safaris. Let us craft your perfect Uganda experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/packages" className="btn-primary">Explore Safaris</Link>
            <Link to="/contact" className="px-8 py-3 border-2 border-[#2C3E50] text-[#2C3E50] rounded-full font-semibold hover:bg-[#2C3E50] hover:text-white transition-all">
              Speak to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Top Safari Destinations */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4">
              UGANDA NATIONAL PARKS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugandaParks.map((park, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={park.image} 
                    alt={park.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-display font-bold text-lg text-white">{park.name}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E50]/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {park.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[#CD7F32] font-semibold text-sm group-hover:gap-3 transition-all">
                    Discover <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Types & Costs */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Investment</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#F7F2EA] mt-4">
              UGANDA SAFARI OPTIONS & PRICING
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <p className="text-[#F7F2EA]/80 text-lg text-center mb-12 max-w-3xl mx-auto">
            Uganda safari costs range from $1,500 to $4,000+ per person per day. Gorilla permits are approximately $700 extra.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {safariTypes.map((type, index) => (
              <div key={index} className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A]/50 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-[#F7F2EA]">{type.title}</h3>
                  <span className="bg-[#D4A03A]/20 text-[#D4A03A] px-4 py-2 rounded-full font-bold">
                    {type.price}
                  </span>
                </div>
                <p className="text-[#F7F2EA]/60 text-sm mb-4">{type.perPerson}</p>
                <p className="text-[#F7F2EA]/80 mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-[#F7F2EA]/80">
                      <div className="w-1.5 h-1.5 bg-[#D4A03A] rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Activities */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experiences</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4">
              UNFORGETTABLE UGANDA ADVENTURES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariActivities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#D4C5B9]">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2">{activity.title}</h4>
                <p className="text-[#2C3E50]/80 text-sm mb-3">{activity.description}</p>
                <div className="flex items-center gap-2 text-[#CD7F32] text-xs">
                  <ClockIcon /> {activity.timing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Country Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Combine</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mt-4">
              COMBINE UGANDA WITH OTHER DESTINATIONS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Uganda & Kenya</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Combine gorilla trekking with the Maasai Mara migration. A complete East African adventure from primates to Big Five.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Uganda & Tanzania</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                From Kibale chimps to Serengeti plains. Add gorillas to your migration safari for the ultimate East African experience.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Uganda, Kenya & Tanzania</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                The complete East Africa circuit—gorillas, migration, Big Five, and Zanzibar beaches in one unforgettable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Timing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              BEST TIME TO VISIT UGANDA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 overflow-x-auto">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] text-center mb-2">Uganda Safari Seasonal Guide</h3>
            <p className="text-center text-[#CD7F32] mb-6">Weather & Gorilla Trekking Conditions</p>
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#F5E6D3]">
                  <th className="p-3 text-left text-[#2C3E50] font-semibold">Park</th>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                    <th key={m} className="p-3 text-center text-[#2C3E50] font-semibold">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((row, i) => (
                  <tr key={i} className="border-b border-[#D4C5B9]">
                    <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.park}</td>
                    {Object.entries(row).slice(1).map(([_, val], j) => (
                      <td key={j} className={`p-3 text-center text-xs ${getRatingColor(val)}`}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Low Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">March to May & Oct to Nov</h4>
              <p className="text-[#2C3E50]/70 text-sm">Wet season transforms Uganda into lush green paradise. Lower prices, fewer crowds. Good for birdwatching with migratory species.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #CD7F32' }}>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold uppercase mb-3">High Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">December to February</h4>
              <p className="text-[#2C3E50]/70 text-sm">Short dry season—ideal for trekking. Pleasant weather, firm trails, and migratory birds from Europe. Not as busy as mid-year.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June to September</h4>
              <p className="text-[#2C3E50]/70 text-sm">Best time for gorilla trekking and wildlife viewing. Animals congregate at waterholes. Book gorilla permits months in advance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Packages */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Itineraries</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              SAMPLE UGANDA SAFARI PACKAGES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {samplePackages.map((pkg, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-[#D4C5B9]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#CD7F32] font-semibold">{pkg.nights}</span>
                  <StarIcon />
                </div>
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-4">{pkg.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.destinations.map((d, j) => (
                    <span key={j} className="text-xs bg-[#F5E6D3] text-[#2C3E50] px-2 py-1 rounded">{d}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#D4C5B9]">
                  <div>
                    <span className="text-[#CD7F32] font-bold text-2xl">${pkg.price}</span>
                    <span className="text-[#2C3E50]/60 text-sm"> PPS</span>
                  </div>
                  <Link to="/contact" className="text-[#CD7F32] font-semibold text-sm hover:underline">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stays</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              TOP UGANDA SAFARI LODGES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((camp, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-br from-[#2B1E1A] to-[#4a3528] flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{camp.name[0]}</span>
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{camp.name}</h4>
                  <p className="text-[#CD7F32] text-sm font-semibold mb-3">{camp.location}</p>
                  <p className="text-[#2C3E50]/80 text-sm">{camp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Help</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#D4C5B9] overflow-hidden">
                <button className="w-full px-6 py-5 text-left flex justify-between items-center" onClick={() => toggleFaq(i)}>
                  <span className="font-semibold text-[#2C3E50]">{faq.question}</span>
                  <span className={`text-[#D4A03A] text-2xl font-light transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-[#2C3E50]/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <StarIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">15+ Years</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Safari expertise</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Expert Guides</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Silver & Gold certified</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <StarIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Local Owned</h4>
              <p className="text-[#F7F2EA]/60 text-xs">East Africa specialists</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Safe Payments</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Financial protection</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <StarIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Sustainable</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Wildlife & community</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Positive Impact</h4>
              <p className="text-[#F7F2EA]/60 text-xs">School programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-4 md:px-[8vw] relative overflow-hidden">
        <img src="/uganda.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            PLAN YOUR UGANDA SAFARI?
          </h2>
          <p className="text-[#D4A03A] text-lg uppercase tracking-widest mb-8">Discover the Pearl of Africa</p>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            From mountain gorillas in Bwindi to tree-climbing lions in Queen Elizabeth, we craft Uganda adventures that transform dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">Start Planning</Link>
            <Link to="/contact" className="bg-transparent border-3 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              Speak With Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
