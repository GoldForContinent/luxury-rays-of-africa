import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Palmtree, Mountain, Footprints, Wind, Ship, Camera, Sun } from 'lucide-react'

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
    question: "When is the best time to visit Tanzania for safaris?",
    answer: "The optimal time is June to October during the dry season when wildlife gathers near waterholes. A second excellent window is January-February during the calving season when predators are most active."
  },
  {
    question: "What should I pack for Tanzania safaris?",
    answer: "Pack lightweight, neutral-colored clothing, a wide-brimmed hat, sunscreen, binoculars, camera with zoom lens, comfortable walking shoes, and a light jacket for early morning game drives."
  },
  {
    question: "How many days should I book for a Tanzania safari?",
    answer: "A minimum of 5-7 days is recommended to cover major parks like Serengeti, Ngorongoro, and Tarangire. For a comprehensive experience including Zanzibar, plan 10-14 days."
  },
  {
    question: "Do I need a visa and vaccinations for Tanzania?",
    answer: "You'll need a valid eVisa and a passport valid for 6+ months. Yellow fever vaccination is recommended if arriving from endemic areas. Consult your doctor for malaria prophylaxis."
  },
  {
    question: "What accommodations are available during a Tanzania safari?",
    answer: "Options range from luxury tented camps and lodges in private conservancies to mid-range options inside national parks. Zanzibar offers beach resorts for post-safari relaxation."
  },
  {
    question: "Can I see the Great Migration on a Tanzania safari?",
    answer: "Absolutely! The Great Migration passes through Tanzania's Serengeti from June to October, with spectacular river crossings in the northern Serengeti."
  },
  {
    question: "Is Tanzania safe to visit for safaris?",
    answer: "Yes, Tanzania's major safari destinations are extremely safe. The country has invested heavily in tourism security, particularly in Serengeti, Ngorongoro, and Tarangire."
  },
  {
    question: "Which are the best destinations in Tanzania?",
    answer: "Top destinations include Serengeti for the migration, Ngorongoro Crater for Big Five, Tarangire for elephant herds, Ruaha for wild dogs, and Zanzibar for beaches."
  },
  {
    question: "Are Tanzania safaris expensive?",
    answer: "Prices range from $500 per person per day for mid-range to $3,000+ for ultra-luxury experiences. Peak season (June-October) commands premium pricing."
  },
  {
    question: "What wildlife can I see in Tanzania?",
    answer: "Tanzania offers the complete Big Five, plus cheetahs, giraffes, wildebeest, hippos, crocodiles, over 500 bird species, and chimpanzee tracking in Gombe and Mahale."
  }
]

const tanzaniaParks = [
  { name: "Serengeti National Park", description: "Home to millions of wildlife and the legendary Great Migration.", image: "/tanzania_card.jpg", price: "From $800/pp/day" },
  { name: "Ngorongoro Crater", description: "The largest unbroken caldera in the world with unmatched wildlife density.", image: "/destinations_hero.jpg", price: "From $800/pp/day" },
  { name: "Tarangire National Park", description: "Known for massive elephant herds and ancient baobab trees.", image: "/hero_sunrise.jpg", price: "From $800/pp/day" },
  { name: "Lake Manyara National Park", description: "Famous for tree-climbing lions and flamingo-filled alkaline lake.", image: "/kenya_card.jpg", price: "From $800/pp/day" },
  { name: "Ruaha National Park", description: "Remote wilderness with impressive wild dog populations.", image: "/unfiltered_collage_01.jpg", price: "From $800/pp/day" },
  { name: "Ndutu Conservation Area", description: "The calving ground for thousands of wildebeest each year.", image: "/migration_collage_01.jpg", price: "From $800/pp/day" },
  { name: "Mkomazi National Park", description: "Remote park in northern Tanzania with diverse ecosystems.", image: "/unfiltered_collage_02.jpg", price: "From $800/pp/day" },
  { name: "Arusha National Park", description: "Gateway park with Mount Meru views and diverse wildlife.", image: "/family_safari.jpg", price: "From $800/pp/day" },
  { name: "Gombe Stream National Park", description: "Famous chimpanzee tracking destination on Lake Tanganyika.", image: "/photo_safari.jpg", price: "From $800/pp/day" }
]

const safariActivities = [
  { icon: <Camera className="w-10 h-10" />, title: "Great Migration & Game Drives", description: "Witness millions crossing rivers in the Serengeti. Best June-October.", timing: "June-October" },
  { icon: <Mountain className="w-10 h-10" />, title: "Ngorongoro Crater Game Drive", description: "Explore the world's largest caldera with all Big Five.", timing: "Year-round" },
  { icon: <Sun className="w-10 h-10" />, title: "Hot Air Balloon Safari", description: "Sunrise flight over Serengeti with champagne bush breakfast.", timing: "June-October" },
  { icon: <Footprints className="w-10 h-10" />, title: "Walking Safaris", description: "Armed guides lead intimate walks exploring smaller ecosystems.", timing: "Year-round" },
  { icon: <Wind className="w-10 h-10" />, title: "Night Game Drives", description: "Spot leopards and hyenas hunting in Lake Manyara and Tarangire.", timing: "Year-round" },
  { icon: <Camera className="w-10 h-10" />, title: "Chimpanzee Tracking", description: "Trek through Gombe and Mahale forests to find our closest relatives.", timing: "June-March" },
  { icon: <Ship className="w-10 h-10" />, title: "Boat & Canoe Safaris", description: "Rufiji River cruises and Lake Manyara boat trips for hippos and birds.", timing: "Year-round" },
  { icon: <Wind className="w-10 h-10" />, title: "Horseback Safaris", description: "Ride through the wilderness for a unique wildlife perspective.", timing: "June-October" },
  { icon: <Mountain className="w-10 h-10" />, title: "Mount Kilimanjaro Climb", description: "Summit Africa's highest peak via multiple routes.", timing: "June-October" },
  { icon: <Palmtree className="w-10 h-10" />, title: "Zanzibar Beach Holiday", description: "End with pristine beaches, coral reefs, and Swahili culture.", timing: "October-March" }
]

const samplePackages = [
  { title: "Kenya - Tanzania Safari", nights: 16, price: "7,150", destinations: ["Kenya", "Tanzania"], path: "/kenya-tanzania-safari" },
  { title: "Classic Sky Safari in Tanzania", nights: "8 Days / 7 Nights", price: "12,500", destinations: ["Tarangire", "Ngorongoro", "Serengeti"], path: "/tanzania-classic-sky-safari" },
  { title: "Best of Zanzibar Beach Extension", nights: "6 Days / 5 Nights", price: "2,970", destinations: ["Zanzibar"], path: "/tanzania-best-of-zanzibar" },
  { title: "Diani Beach Extension", nights: "5 Days / 4 Nights", price: "1,270", destinations: ["Diani Beach"], path: "/tanzania-diani-beach-extension" }
]

const seasonalData = [
  { park: "Serengeti", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Ngorongoro", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Tarangire", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Lake Manyara", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Karatu", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Ruaha", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Arusha", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
  { park: "Gombe", jan: "Fair", feb: "Fair", mar: "Fair", apr: "Fair", may: "Best", jun: "Best", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Fair", dec: "Fair" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function TanzaniaSafari() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showAllPackages, setShowAllPackages] = useState(false)
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
          src="/tanzaniasafarishero.jpg" 
          alt="Tanzania Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Tanzania Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            TANZANIA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Luxury Tanzania Safaris and Unforgettable Adventures
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

      {/* Why Visit Tanzania */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY TANZANIA IS A TOP SAFARI DESTINATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Tanzania stands as Africa's premier safari destination, offering unrivaled year-round game viewing across vast, untamed landscapes. From the endless plains of the Serengeti to the magnificent Ngorongoro Crater, experience the Big Five and witness the greatest show on Earth.
          </p>
        </div>
      </section>

      {/* Best Recommended Tanzania Safaris */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Featured</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              OUR BEST RECOMMENDED TANZANIA SAFARIS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllPackages ? samplePackages : samplePackages.slice(0, 6)).map((pkg, index) => (
              <Link 
                key={index}
                to={pkg.path}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/${[3601425, 1684428, 1708936, 2374659, 2251164, 4614229, 697922, 2835439][index % 8]}/pexels-photo-${[3601425, 1684428, 1708936, 2374659, 2251164, 4614229, 697922, 2835439][index % 8]}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4A03A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    From ${pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2 group-hover:text-[#D4A03A] transition-colors">
                    {pkg.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[#2C3E50]/60 text-sm mb-3">
                    <ClockIcon />
                    <span>{typeof pkg.nights === 'number' ? `${pkg.nights} Days / ${pkg.nights - 1} Nights` : pkg.nights}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.slice(0, 3).map((dest, i) => (
                      <span key={i} className="text-xs bg-[#FAF3E0] text-[#2C3E50]/70 px-3 py-1 rounded-full">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllPackages(!showAllPackages)}
              className="inline-flex items-center gap-2 bg-[#D4A03A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B8922F] transition-all"
            >
              {showAllPackages ? 'Show Less' : 'View All Tanzania Safaris'} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Serengeti & The Great Migration
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Serengeti hosts one of nature's most spectacular events—the Great Migration. Over a million wildebeest, zebras, and gazelles traverse these endless plains in a circular journey, facing crocodiles and predators along the way.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  From June to October, witness heart-stopping river crossings where massive herds brave crocodile-infested waters in the northern Serengeti.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/migration_background.jpg" alt="Serengeti" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

            <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/bigfive_background.jpg" alt="Ngorongoro" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Ngorongoro Crater
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Descend into the world's largest unbroken caldera—a natural amphitheater teeming with over 25,000 animals. This UNESCO World Heritage Site offers your best chance to see the endangered black rhino.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  From impeccable rim views to close encounters with lions, elephants, and flocks of flamingos, Ngorongoro delivers an unparalleled safari experience.
                </p>
              </div>
            </div>
          </div>

          <div ref={addToRefs}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Wildlife, Culture & Adventure
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Beyond wildlife, Tanzania offers cultural immersion with the Hadza people of Lake Eyasi and the Maasai villages near Karatu. Adventure seekers can summit Mount Kilimanjaro or skydive over Zanzibar.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  End your journey on Zanzibar's pristine beaches—where turquoise waters meet white sand and centuries of Swahili culture.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/landscapes_background.jpg" alt="Tanzania Adventure" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
              Explore 70+ luxury African safaris. Let us craft your perfect Tanzania experience.
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

      {/* Tanzania Safari Regions */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4">
              TANZANIA SAFARI REGIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tanzaniaParks.map((park, index) => (
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
                  <div className="mb-4 pt-3 border-t border-[#D4C5B9]">
                    <span className="text-[#D4A03A] font-bold">{park.price}</span>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[#CD7F32] font-semibold text-sm group-hover:gap-3 transition-all">
                    Discover <ArrowRight size={14} />
                  </Link>
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
              UNFORGETTABLE TANZANIA ADVENTURES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariActivities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#D4C5B9]">
                <div className="w-14 h-14 mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                  <span className="text-[#D4A03A]">{activity.icon}</span>
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
              COMBINE TANZANIA WITH OTHER DESTINATIONS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Tanzania & Kenya</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Experience the complete Serengeti-Masai Mara ecosystem. Classic 10-14 day itinerary covering both parks.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Tanzania & Zanzibar</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Safari adventure followed by pristine beaches. Fly from Serengeti to Stone Town for the perfect ending.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Tanzania, Kenya & Zanzibar</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                The ultimate East African adventure—migration, Big Five, and beach relaxation in one trip.
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
              BEST TIME TO VISIT TANZANIA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 overflow-x-auto">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] text-center mb-2">Tanzania Safari Seasonal Guide</h3>
            <p className="text-center text-[#CD7F32] mb-6">Weather & Wildlife Viewing by Month</p>
            <table className="w-full min-w-[700px]">
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
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Low Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April to May</h4>
              <p className="text-[#2C3E50]/70 text-sm">Long rains transform landscapes into lush green. Best for photographers and budget travelers seeking exclusivity.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #CD7F32' }}>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold uppercase mb-3">High Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">January to March</h4>
              <p className="text-[#2C3E50]/70 text-sm">Calving season in Ndutu—wildebeest births attract intense predator activity. Pleasant weather, fewer crowds.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Dry season with the Great Migration river crossings. Best wildlife viewing, but parks arebusiest.</p>
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
        <img src="/tanzaniasafarishero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            PLAN YOUR TANZANIA SAFARI?
          </h2>
          <p className="text-[#D4A03A] text-lg uppercase tracking-widest mb-8">Let's Create Your Adventure</p>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            From the Great Migration to Mount Kilimanjaro and Zanzibar beaches, we craft bespoke Tanzania experiences that exceed expectations.
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
