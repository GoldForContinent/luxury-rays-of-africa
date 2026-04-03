import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Car, Bike, Footprints, Anchor, Utensils, Plane, Mountain, Ship, Waves, Camera } from 'lucide-react'

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
    question: "When is the best time to visit Zimbabwe for a safari?",
    answer: "The optimal window runs from May through October during the dry season. This period offers exceptional wildlife viewing as animals concentrate around remaining water sources, particularly in Hwange National Park where pumped waterholes attract impressive herds of elephants and other wildlife."
  },
  {
    question: "Is Zimbabwe a safe destination for safari travelers?",
    answer: "Zimbabwe maintains excellent safety records in major safari regions. The country boasts well-established tourism infrastructure with professionally trained guides who prioritize guest safety. Major parks like Hwange, Mana Pools, and Victoria Falls areas welcome visitors with warm hospitality."
  },
  {
    question: "What makes Zimbabwe stand out from other safari destinations?",
    answer: "Zimbabwe pioneered the walking safari concept and remains unmatched in this discipline. The country offers authentic wilderness experiences with lower tourist densities compared to more crowded parks in Kenya and Tanzania. Exceptional guiding standards and exclusive concessions create intimate wildlife encounters."
  },
  {
    question: "Can Victoria Falls be combined with a wildlife safari?",
    answer: "Absolutely. Many travelers begin or end their journey at Victoria Falls, one of the Seven Natural Wonders of the World, before or after exploring Zimbabwe's premier wildlife destinations. The falls lie within easy reach of Hwange National Park and Lake Kariba."
  },
  {
    question: "Which Zimbabwe park offers the best elephant viewing?",
    answer: "Hwange National Park hosts Zimbabwe's largest elephant population, with estimates exceeding 100,000 individuals. The park's innovative waterhole pumping system ensures year-round water access, drawing magnificent herds especially during the dry months."
  },
  {
    question: "What wildlife species can be spotted in Zimbabwe?",
    answer: "Zimbabwe delivers complete Big Five experiences including lions, leopards, elephants, buffalo, and rhinos. The country also harbors endangered African wild dogs, over 400 bird species, and diverse plains game across its numerous national parks and private reserves."
  },
  {
    question: "How many days should I allocate for a Zimbabwe safari?",
    answer: "A minimum of 5-7 days allows comfortable exploration of two to three parks. For a comprehensive experience covering Victoria Falls, Hwange, and Mana Pools, plan 10-12 days to fully appreciate each destination's unique offerings."
  },
  {
    question: "What unique safari activities does Zimbabwe offer?",
    answer: "Zimbabwe offers distinctive experiences including walking safaris in Mana Pools, boat-based wildlife viewing on Lake Kariba and the Zambezi River, catch-and-release tiger fishing, and nocturnal game drives in private concessions. The country also features rhino tracking adventures and cultural encounters with local communities."
  }
]

const zimbabweParks = [
  { name: "Hwange National Park", description: "Zimbabwe's largest park hosting the country's biggest elephant herds. Exceptional predator sightings and over 100 mammal species in diverse habitats.", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop", price: "From $650/pp/day", path: "/zimbabwe-hwange-national-park" },
  { name: "Mana Pools National Park", description: "UNESCO World Heritage Site along the Zambezi River. Renowned for walking safaris and incredible leopard encounters in pristine wilderness.", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop", price: "From $650/pp/day", path: "/zimbabwe-mana-pools-national-park" },
  { name: "Victoria Falls", description: "One of the Seven Natural Wonders of the World. The magnificent falls offer adventure activities and breathtaking panoramic views.", image: "https://images.unsplash.com/photo-1537962882310-41d6b591b3da?w=800&auto=format&fit=crop", price: "From $350/pp/day", path: "/victoria-falls-zimbabwe" },
  { name: "Lake Kariba", description: "Massive man-made lake with excellent fishing and unique water-based wildlife viewing. Famous for tiger fish and houseboat adventures.", image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&auto=format&fit=crop", price: "From $550/pp/day", path: "/lake-kariba-zimbabwe" },
  { name: "Gonarezhou National Park", description: "Zimbabwe's second largest park known for elephants, crocodiles, and the iconic Chilojo Cliffs. Part of Great Limpopo Transfrontier Park.", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop", price: "From $450/pp/day", path: "/zimbabwe-gonarezhou-national-park" },
  { name: "Matusadona National Park", description: "Lake-side wilderness offering both land and water safari experiences. Rich wildlife including elephants, lions, and rhinos.", image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&auto=format&fit=crop", price: "From $500/pp/day", path: "/zimbabwe-matusadona-national-park" }
]

const safariActivities = [
  { icon: Car, title: "Classic Game Drives", description: "Explore premier parks in expert-guided 4x4 vehicles. Best for Big Five viewing in Hwange and Mana Pools.", timing: "May-October" },
  { icon: Footprints, title: "Walking Safaris", description: "Experience the bush intimately on foot with professional trackers. Zimbabwe pioneered this authentic wilderness approach.", timing: "May-October" },
  { icon: Ship, title: "River Safaris", description: "Cruise the Zambezi or Lake Kariba for hippos, crocodiles, and elephants bathing on shores.", timing: "Year-round" },
  { icon: Mountain, title: "Rhino Tracking", description: "Join conservation teams for guided tracking of endangered black and white rhinos in protected areas.", timing: "Year-round" },
  { icon: Waves, title: "Tiger Fishing", description: "Battle trophy tiger fish on the Zambezi or Lake Kariba. Premier fishing destination in Africa.", timing: "June-November" },
  { icon: Anchor, title: "Houseboat Adventures", description: "Float through drowned forests of Lake Kariba while spotting wildlife from your private vessel.", timing: "Year-round" },
  { icon: Bike, title: "Cycling Safaris", description: "Explore quieter regions of national parks on guided mountain bike excursions.", timing: "May-October" },
  { icon: Camera, title: "Photography Tours", description: "Professional photo safaris in exclusive private concessions with expert wildlife photography guides.", timing: "May-October" },
  { icon: Utensils, title: "Bush Dinners", description: "Dine under African stars with lantern-lit settings in remote wilderness locations.", timing: "Year-round" },
  { icon: Plane, title: "Helicopter Excursions", description: "Aerial tours of Victoria Falls and scenic flights over diverse Zimbabwe landscapes.", timing: "Year-round" }
]

const seasonalData = [
  { park: "Hwange", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Mana Pools", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Victoria Falls", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Lake Kariba", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Gonarezhou", jan: "Fair", feb: "Fair", mar: "Good", apr: "Fair", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Fair" },
  { park: "Matusadona", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Good", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function ZimbabweSafari() {
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
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&auto=format&fit=crop" 
          alt="Zimbabwe Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Zimbabwe Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight animate-fade-in">
            ZIMBABWE
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Victoria Falls & Premier Wildlife Adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Help Me Plan <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              Our Safaris
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Best Recommended Safaris in Zimbabwe */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Featured</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              OUR BEST ZIMBABWE SAFARI PACKAGES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zimbabweParks.slice(0, 6).map((pkg, index) => (
              <Link 
                key={index}
                to={pkg.path}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4A03A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2 group-hover:text-[#D4A03A] transition-colors">
                    {pkg.name}
                  </h4>
                  <p className="text-[#2C3E50]/60 text-sm mb-3 line-clamp-2">
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#FAF3E0] text-[#2C3E50]/70 px-3 py-1 rounded-full">
                      Safari
                    </span>
                    <span className="text-xs bg-[#FAF3E0] text-[#2C3E50]/70 px-3 py-1 rounded-full">
                      Wildlife
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D4A03A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B8922F] transition-all"
            >
              Start Planning Your Safari <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Visit Zimbabwe */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY ZIMBABWE FOR YOUR SAFARI
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Zimbabwe stands as one of Africa's most extraordinary safari destinations, offering an unparalleled combination of pristine wilderness, world-class guiding, and authentic wildlife encounters. From the thundering majesty of Victoria Falls to the remote vastness of Hwange National Park, Zimbabwe delivers unforgettable adventures.
          </p>
        </div>
      </section>

      {/* Key Highlights with Alternating Layout */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Victoria Falls & The Zambezi
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Begin your Zimbabwe adventure at Mosi-oa-Tunya, "The Smoke That Thunders" – one of the world's most spectacular natural wonders. Marvel at the massive curtain of falling water before continuing to premium wildlife destinations.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  The Zambezi River offers extraordinary experiences – sunset cruises alongside hippos and crocodiles, tiger fishing expeditions, and helicopter tours providing bird's-eye views of the falls and surrounding landscape.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="https://images.unsplash.com/photo-1537962882310-41d6b591b3da?w=800&auto=format&fit=crop" alt="Victoria Falls" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/zimbabwe_hwange.jpg" alt="Hwange National Park" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Hwange: Elephant Kingdom
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Zimbabwe's largest national park encompasses over 14,600 square kilometers of diverse habitat supporting one of Africa's highest concentrations of elephants. Witness massive herds congregating at pumped waterholes during the dry season.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Beyond elephants, Hwange harbors lions, leopards, cheetahs, and endangered African wild dogs. The park's exclusive concessions ensure intimate wildlife encounters away from crowds.
                </p>
              </div>
            </div>
          </div>

          <div ref={addToRefs}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Walking Safaris & Mana Pools
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Zimbabwe invented the walking safari, and nowhere is the experience better than in Mana Pools. This UNESCO World Heritage Site along the Zambezi offers intimate encounters with elephants, lions, and hippos on foot.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Guided by expert trackers, explore the floodplains and river forests, understanding ecosystem details invisible from vehicles. Canoe trips add aquatic perspectives to this remarkable wilderness.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/zimbabwe_mana_pools.jpg" alt="Mana Pools" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
              READY FOR YOUR ZIMBABWE ADVENTURE?
            </h3>
            <p className="text-[#2C3E50] text-lg">
              Let our Zimbabwe specialists design your perfect safari. From Victoria Falls to remote wilderness, we create personalized experiences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">Plan Your Safari</Link>
            <Link to="/contact" className="px-8 py-3 border-2 border-[#2C3E50] text-[#2C3E50] rounded-full font-semibold hover:bg-[#2C3E50] hover:text-white transition-all">
              Speak to an Expert
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
              BEST PLACES TO VISIT IN ZIMBABWE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zimbabweParks.map((park, index) => (
              <Link 
                key={index}
                to={park.path}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
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
                  <div className="mb-4 pt-3 border-t border-[#D4C5B9]">
                    <span className="text-[#D4A03A] font-bold">{park.price}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[#CD7F32] font-semibold text-sm group-hover:gap-3 transition-all">
                    View Park <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
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
              UNFORGETTABLE ZIMBABWE SAFARI EXPERIENCES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariActivities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#D4C5B9]">
                <div className="w-14 h-14 mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                  <activity.icon size={24} className="text-[#D4A03A]" />
                </div>
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
              COMBINE ZIMBABWE WITH OTHER DESTINATIONS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Zimbabwe & Botswana</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Link Victoria Falls with Chobe's elephant herds and Okavango Delta's waterways. Direct flights connect major destinations.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Zimbabwe, Zambia & South Africa</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                From Victoria Falls to South Africa's Kruger or Cape Town. Multi-country Southern African adventures.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Victoria Falls Express</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Quick getaway combining Victoria Falls thrills with Hwange wildlife. Perfect for time-conscious travelers.
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
              BEST TIME TO VISIT ZIMBABWE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 overflow-x-auto">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] text-center mb-2">Zimbabwe Safari Seasonal Guide</h3>
            <p className="text-center text-[#CD7F32] mb-6">Best Weather Guide</p>
            <table className="w-full min-w-[800px]">
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
                    {Object.entries(row).slice(1).map(([, val], j) => (
                      <td key={j} className={`p-3 text-center text-xs ${getRatingColor(val)}`}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #556B2F' }}>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Green Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">November to April</h4>
              <p className="text-[#2C3E50]/70 text-sm">Lush landscapes, excellent birdwatching with migratory species, newborn wildlife, and lower prices. Afternoon thunderstorms create dramatic skies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Transitional periods with improving wildlife viewing, pleasant weather, and fewer tourists. Great value with excellent experiences.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Prime wildlife viewing as animals gather at water sources. Dry conditions with sparse vegetation make animal spotting exceptional.</p>
            </div>
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
              <p className="text-[#F7F2EA]/60 text-xs">Kenya-based DMC</p>
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
        <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            READY TO EXPLORE ZIMBABWE?
          </h2>
          <p className="text-[#D4A03A] text-lg uppercase tracking-widest mb-8">Let's Create Your Adventure</p>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            From Victoria Falls to Hwange's elephant herds and Mana Pools walking safaris, experience Zimbabwe's finest wilderness with our expert-planned adventures.
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
