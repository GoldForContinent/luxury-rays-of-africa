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

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "Is Rwanda Safe to Visit For Safaris?",
    answer: "Rwanda is one of the safest nations in Africa, and you can visit for a safari holiday. According to the Global Index ranking, it tops as the safest country for safaris in Africa."
  },
  {
    question: "Which Are the Best Destinations to visit in Rwanda?",
    answer: "The best destinations include Volcanoes National Park for gorilla trekking, Nyungwe National Park for chimpanzee tracking, Akagera National Park for the Big Five, and Kigali for cultural experiences."
  },
  {
    question: "Are Rwanda Safaris Expensive?",
    answer: "A Rwanda Safari can cost between USD 500 and up to more than USD 4500 Per Person sharing Per Day. The cost depends on the level of luxury, duration, and specific activities included."
  },
  {
    question: "What's the best time for a luxury Rwanda safari?",
    answer: "The best time is during the dry seasons: June to September and December to February. These months offer ideal conditions for gorilla trekking and wildlife viewing with less muddy trails."
  },
  {
    question: "What do I need to Visit Rwanda?",
    answer: "You will need a valid eVisa, a passport that is more than 6 months old, and it is recommended to have a yellow fever vaccination."
  },
  {
    question: "How much are Gorilla Trekking Permits in Rwanda?",
    answer: "Gorilla trekking permits in Rwanda cost USD 1,500 per person for one hour with the gorillas. It is recommended to book well in advance, especially during peak season."
  },
  {
    question: "Can I combine Rwanda with other East African countries?",
    answer: "Absolutely! Rwanda is perfectly positioned to combine with Uganda forgorilla trekking and Kenya or Tanzania for classic savannah safaris. Many itineraries include multi-country options."
  },
  {
    question: "What wildlife can I see in Rwanda besides Gorillas?",
    answer: "Beyond gorillas, Rwanda offers golden monkeys, chimpanzees, the Big Five (lion, elephant, rhino, buffalo, leopard) in Akagera, and over 500 bird species in Nyungwe."
  },
  {
    question: "How difficult is gorilla trekking in Rwanda?",
    answer: "Gorilla trekking in Rwanda can be challenging due to the steep, forested terrain. However, the experience is accessible to anyone with reasonable fitness. Permits are limited to ensure an intimate experience."
  },
  {
    question: "What makes Rwanda unique for safaris?",
    answer: "Rwanda offers the unique opportunity for both mountain gorilla trekking and savannah wildlife viewing in a compact area. The country is known as the 'Land of a Thousand Hills' with stunning landscapes."
  }
]

const rwandaParks = [
  { name: "Volcanoes National Park", description: "Home to mountain gorillas, golden monkeys, and breathtaking volcanic landscapes.", image: "/volcanoes.jpg" },
  { name: "Nyungwe National Park", description: "One of Africa's oldest rainforests with 500+ bird species and chimpanzee families.", image: "/nyungwe.jpg" },
  { name: "Akagera National Park", description: "Rwanda's premier savannah park home to the Big Five and diverse wildlife.", image: "/akagera.jpg" },
  { name: "Gishwati-Mukura National Park", description: "A newer protected area with lush forests and wildlife rehabilitation programs.", image: "/gishwati.jpg" }
]

const safariActivities = [
  { icon: "🦍", title: "Gorilla Trekking", description: "An unforgettable hour with mountain gorillas in Volcanoes National Park.", timing: "Year-round" },
  { icon: "🐒", title: "Golden Monkey Tracking", description: "Track the endangered golden monkeys in their bamboo forest habitat.", timing: "Year-round" },
  { icon: "🐆", title: "Chimpanzee Tracking", description: "Explore Nyungwe Forest to find habituated chimpanzee families.", timing: "Year-round" },
  { icon: "🚙", title: "Big Five Game Drives", description: "Explore Akagera's savannah for lions, elephants, rhinos, buffaloes, and leopards.", timing: "June-September" },
  { icon: "🦅", title: "Bird Watching", description: "Discover over 500 bird species including the Rwenzori turaco.", timing: "Year-round" },
  { icon: "🛶", title: "Canopy Walks", description: "Walk through the forest canopy on elevated walkways in Nyungwe.", timing: "Year-round" },
  { icon: "🏔️", title: "Volcano Hiking", description: "Hike the Virunga volcanoes with stunning views and rare wildlife.", timing: "June-September" },
  { icon: "🎣", title: "Fishing", description: "Catch Nile perch and tilapia in Lake Kivu's pristine waters.", timing: "Year-round" },
  { icon: "🏛️", title: "Cultural Tours", description: "Visit the Kigali Genocide Memorial and experience local traditions.", timing: "Year-round" },
  { icon: "🌿", title: "Nature Walks", description: "Guided walks through Rwanda's diverse ecosystems.", timing: "Year-round" }
]

const safariTypes = [
  {
    title: "Gorilla Trekking Safari", price: "$1,500 - $3,500", perPerson: "per person per day",
    description: "Exclusive gorilla and golden monkey tracking experiences in Volcanoes National Park with luxury lodge accommodation.",
    features: ["Gorilla permit included", "Golden monkey tracking", "Luxury volcano-view lodges", "Private 4×4 vehicle"]
  },
  {
    title: "Big Five Savannah Safari", price: "$500 - $1,500", perPerson: "per person per day",
    description: "Explore Akagera National Park for classic savannah wildlife experiences.",
    features: ["Big Five game drives", "Boat safaris on Lake Akagera", "Night drives", "Luxury tented camps"]
  },
  {
    title: "Primates & Wildlife Combo", price: "$1,000 - $2,500", perPerson: "per person per day",
    description: "Combine gorilla trekking with chimpanzee tracking and savannah safaris.",
    features: ["Gorilla & chimp permits", "Nyungwe Forest stay", "Akagera game drives", "All transfers included"]
  },
  {
    title: "Luxury Rwanda Experience", price: "$2,500 - $4,500+", perPerson: "per person per day",
    description: "The ultimate Rwanda journey with exclusive experiences and premium accommodations.",
    features: ["Private gorilla trek", "Charter flights", "5-star lodges", "Personal guide"]
  }
]

const samplePackages = [
  { title: "5-Day Rwanda Gorilla Adventure", nights: 5, price: "3,895", destinations: ["Kigali", "Volcanoes National Park"] },
  { title: "7-Day Rwanda Wildlife Explorer", nights: "7 Days / 6 Nights", price: "4,560", destinations: ["Volcanoes", "Nyungwe", "Akagera"] },
  { title: "10-Day Ultimate Rwanda Safari", nights: "10 Days / 9 Nights", price: "7,840", destinations: ["Kigali", "Volcanoes", "Nyungwe", "Akagera", "Lake Kivu"] }
]

const accommodations = [
  { name: "Virunga Lodge", location: "Volcanoes", description: "Luxury lodge with stunning volcano views." },
  { name: "One & Only Nyungwe House", location: "Nyungwe", description: "Forest resort with canopy walkways." },
  { name: "Akagera Luxury Tented Camp", location: "Akagera", description: "Exclusive savannah camp in Big Five territory." },
  { name: "Kigali Marriott Hotel", location: "Kigali", description: "Modern luxury in the heart of the city." }
]

const seasonalData = [
  { park: "Volcanoes", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Kigali", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Nyungwe", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Akagera", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Lake Kivu", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function RwandaSafari() {
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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F7F2EA]">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 hero-bg">
          <img 
            src="/rwandasafaris.jpg" 
            alt="Rwanda Safari" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        
        <div className="hero-content relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <div className="mb-4 text-[#D4A03A] font-medium tracking-[0.3em] text-sm md:text-base">
            LUXURY RWANDA SAFARIS
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 max-w-4xl leading-tight">
            Discover the Land of a Thousand Hills
          </h1>
          <p className="text-lg md:text-xl text-[#F7F2EA]/80 max-w-2xl mb-8">
            Experience extraordinary gorilla trekking, pristine rainforests, and savannah wildlife in Rwanda's stunning landscapes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-lg hover:bg-[#B8922F] transition-all duration-300 transform hover:scale-105"
            >
              Plan Your Safari
            </Link>
            <Link 
              to="/packages" 
              className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-lg hover:bg-[#F7F2EA]/10 transition-all duration-300"
            >
              View Packages
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-[#F7F2EA]/50 rotate-90" />
        </div>
      </div>

      {/* Introduction Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#D4A03A]">
                Why Visit Rwanda For Safaris
              </h2>
              <p className="text-[#F7F2EA]/70 mb-6 leading-relaxed">
                Rwanda, also known as the "Land of a Thousand Hills," offers incredible gorilla trekking experiences. As an exclusive gorilla tour destination, Rwanda is one of the best places you can choose for exciting excursions, golden monkey tracking, and learning about its history.
              </p>
              <p className="text-[#F7F2EA]/70 mb-6 leading-relaxed">
                Additional tour adventures in Rwanda include trips to Akagera National Park's savannah grasslands, home to the Big Five. Nyungwe National Park entices bird watchers with its 500+ bird species and chimpanzees. Depending on what wildlife you want to see, a minimum of 4 days ensures you will enjoy the best of what Rwanda can offer.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#D4A03A]/20">
                  <div className="text-2xl font-bold text-[#D4A03A]">4</div>
                  <div className="text-sm text-[#F7F2EA]/60">National Parks</div>
                </div>
                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#D4A03A]/20">
                  <div className="text-2xl font-bold text-[#D4A03A]">500+</div>
                  <div className="text-sm text-[#F7F2EA]/60">Bird Species</div>
                </div>
                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#D4A03A]/20">
                  <div className="text-2xl font-bold text-[#D4A03A]">10+</div>
                  <div className="text-sm text-[#F7F2EA]/60">Gorilla Families</div>
                </div>
                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#D4A03A]/20">
                  <div className="text-2xl font-bold text-[#D4A03A]">15</div>
                  <div className="text-sm text-[#F7F2EA]/60">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/rwandasafaris.jpg" 
                alt="Rwanda Gorilla" 
                className="rounded-2xl w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/hero_sunrise.jpg'
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D4A03A] text-black p-6 rounded-xl">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wildlife Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw] bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Wildlife to See in Rwanda
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Rwanda is commonly known for gorillas alone, but it's easy to spot the Big Five, including lions, elephants, rhinos, buffaloes, and leopards in their natural habitat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Mountain Gorillas", description: "The iconic residents of Volcanoes National Park", icon: "🦍" },
              { name: "Golden Monkeys", description: "Endangered primates in bamboo forests", icon: "🐒" },
              { name: "Chimpanzees", description: "Nyungwe Forest's habituated troop", icon: "🐆" },
              { name: "African Elephants", description: "Gentle giants roaming Akagera's plains", icon: "🐘" },
              { name: "Lions", description: "The pride of Akagera National Park", icon: "🦁" },
              { name: "Rhinos", description: "Both black and white rhinos in Akagera", icon: "🦏" },
              { name: "Buffaloes", description: "Massive herds in savannah grasslands", icon: "🐃" },
              { name: "Leopards", description: "Elusive predators of the African bush", icon: "🐅" },
            ].map((animal, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4A03A]/10 hover:border-[#D4A03A]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">{animal.icon}</div>
                <h3 className="text-lg font-semibold text-[#D4A03A] mb-2">{animal.name}</h3>
                <p className="text-sm text-[#F7F2EA]/60">{animal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/rwandasafaris.jpg" 
                alt="Rwanda Culture" 
                className="rounded-2xl w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/unfiltered_collage_01.jpg'
                }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#D4A03A]">
                Culture and Traditions of Rwanda
              </h2>
              <p className="text-[#F7F2EA]/70 mb-6 leading-relaxed">
                Before visiting Rwanda, it's important to also understand their culture, traditions, and lifestyle to be able to integrate with them easily. The culture of Rwanda is a vibrant blend of traditions that foster community, respect, and creativity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4A03A]/20 p-3 rounded-full">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#D4A03A]">Intore Dance</h4>
                    <p className="text-sm text-[#F7F2EA]/60">The energetic traditional dance expressing Rwandan heritage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4A03A]/20 p-3 rounded-full">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#D4A03A]">Umuganda</h4>
                    <p className="text-sm text-[#F7F2EA]/60">Monthly community service bringing people together</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4A03A]/20 p-3 rounded-full">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#D4A03A]">Agaseke</h4>
                    <p className="text-sm text-[#F7F2EA]/60">The intricate art of basket weaving</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4A03A]/20 p-3 rounded-full">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#D4A03A]">Hospitality</h4>
                    <p className="text-sm text-[#F7F2EA]/60">Deep-rooted tradition of welcoming guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parks Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw] bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Best Places to Visit in Rwanda
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Explore Rwanda's stunning national parks, each offering unique wildlife experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rwandaParks.map((park, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                <img 
                  src={park.image} 
                  alt={park.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/destinations_hero.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#D4A03A]">{park.name}</h3>
                  <p className="text-sm text-[#F7F2EA]/80 line-clamp-2">{park.description}</p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-[#D4A03A] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Safari Activities in Rwanda
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              From gorilla trekking to savannah game drives, Rwanda offers unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariActivities.map((activity, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4A03A]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                <div className="text-3xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-semibold text-[#D4A03A] mb-2">{activity.title}</h3>
                <p className="text-sm text-[#F7F2EA]/60 mb-3">{activity.description}</p>
                <div className="flex items-center gap-2 text-xs text-[#F7F2EA]/40">
                  <ClockIcon />
                  <span>{activity.timing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Time Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw] bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What is the Best Time to Visit Rwanda
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Plan your safari for the best wildlife viewing experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="text-xl font-bold text-green-400">Peak Season</h3>
              </div>
              <p className="text-[#F7F2EA]/70 mb-4">June - September & December - February</p>
              <p className="text-sm text-[#F7F2EA]/60">
                Dry seasons are the peak in Rwanda, preferred by tourists who value comfort and easy access. Forest paths are more visible, fewer mosquitoes, and best for gorilla trekking permits.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <h3 className="text-xl font-bold text-yellow-400">Shoulder Season</h3>
              </div>
              <p className="text-[#F7F2EA]/70 mb-4">May & October</p>
              <p className="text-sm text-[#F7F2EA]/60">
                Perfect for those who want to avoid crowds but still enjoy pleasant weather. A unique mixture of dry and rainy weather with lowest crowds.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <h3 className="text-xl font-bold text-blue-400">Low Season</h3>
              </div>
              <p className="text-[#F7F2EA]/70 mb-4">March - May & November</p>
              <p className="text-sm text-[#F7F2EA]/60">
                Rainy season brings lush green landscapes, fewer tourists, and lower lodge rates. Ideal for photographers and birdwatchers.
              </p>
            </div>
          </div>

          {/* Seasonal Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D4A03A]/20">
                  <th className="text-left py-4 px-4 text-[#D4A03A] font-semibold">Destination</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Jan</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Feb</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Mar</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Apr</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">May</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Jun</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Jul</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Aug</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Sep</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Oct</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Nov</th>
                  <th className="py-4 px-2 text-[#F7F2EA]/60">Dec</th>
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((row, index) => (
                  <tr key={index} className="border-b border-[#D4A03A]/10">
                    <td className="py-4 px-4 font-medium text-[#D4A03A]">{row.park}</td>
                    {['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].map((month) => (
                      <td key={month} className="py-4 px-2 text-center">
                        <span className={`inline-block px-2 py-1 rounded text-xs ${getRatingColor(row[month as keyof typeof row])}`}>
                          {row[month as keyof typeof row]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Safari Types Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Safari Types & Pricing
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Choose your perfect Rwanda safari experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safariTypes.map((safari, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4A03A]/10 hover:border-[#D4A03A]/40 transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-[#D4A03A] mb-2">{safari.title}</h3>
                <div className="text-2xl font-bold mb-1">{safari.price}</div>
                <div className="text-xs text-[#F7F2EA]/40 mb-4">{safari.perPerson}</div>
                <p className="text-sm text-[#F7F2EA]/70 mb-4">{safari.description}</p>
                <ul className="space-y-2">
                  {safari.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#F7F2EA]/60">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="mt-6 block text-center bg-[#D4A03A] text-black py-3 rounded-lg font-semibold group-hover:bg-[#B8922F] transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Packages */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw] bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Rwanda Safari Packages
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Curated itineraries showcasing the best of Rwanda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {samplePackages.map((pkg, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#D4A03A]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                <div className="h-48 bg-[#0A0A0A] flex items-center justify-center">
                  <MapPinIcon />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-[#F7F2EA]/60 mb-4">{pkg.nights}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.destinations.map((dest, i) => (
                      <span key={i} className="text-xs bg-[#D4A03A]/10 text-[#D4A03A] px-2 py-1 rounded">
                        {dest}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs text-[#F7F2EA]/40">From</div>
                      <div className="text-2xl font-bold text-[#D4A03A]">${pkg.price}</div>
                    </div>
                    <Link 
                      to="/contact"
                      className="bg-[#D4A03A] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#B8922F] transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/packages"
              className="inline-flex items-center gap-2 text-[#D4A03A] hover:text-[#F7F2EA] transition-colors"
            >
              View All Rwanda Packages <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Accommodations */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Where to Stay
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Luxury lodges and camps offering authentic Rwandan hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodations.map((lodging, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4A03A]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#D4A03A] mb-2">{lodging.name}</h3>
                <div className="flex items-center gap-2 text-sm text-[#F7F2EA]/60 mb-3">
                  <MapPinIcon />
                  <span>{lodging.location}</span>
                </div>
                <p className="text-sm text-[#F7F2EA]/70">{lodging.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Book With Us */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw] bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Book a Rwanda Safari With Us
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Unmatched expertise in crafting unforgettable Rwandan adventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "15+ Years Experience", description: "Our team has decades of combined experience in East African safaris, ensuring you get the best guidance." },
              { title: "Expert Guides", description: "Our Silver and Gold rated guides provide deep insights into Rwandan wildlife and culture." },
              { title: "Sustainable Practices", description: "We are committed to sustainable travel and positive impact on local communities and wildlife." },
              { title: "Flexible Booking", description: "Free changes and full refund up to 30 days before departure for peace of mind." },
              { title: "24/7 Support", description: "Round-the-clock support from arrival to departure, ensuring a seamless experience." },
              { title: "Best Value", description: "Competitive pricing with no hidden costs, guaranteeing the best value for your safari." }
            ].map((reason, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-[#D4A03A]/10">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#D4A03A] font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#D4A03A] mb-2">{reason.title}</h3>
                <p className="text-sm text-[#F7F2EA]/60">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#F7F2EA]/60">
              Everything you need to know about your Rwanda safari
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#1A1A1A] rounded-xl border border-[#D4A03A]/10 overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-[#F7F2EA] pr-4">{faq.question}</span>
                  <span className={`text-[#D4A03A] text-2xl transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 text-[#F7F2EA]/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={addToRefs} className="py-20 px-4 md:px-[4vw] bg-gradient-to-r from-[#1A1A1A] to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready for Your Rwanda Adventure?
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">
            Let our experts help you plan the perfect safari. From gorilla trekking to Big Five game drives, we'll create an unforgettable experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-lg hover:bg-[#B8922F] transition-all duration-300"
            >
              Speak to an Expert
            </Link>
            <Link 
              to="/packages"
              className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-lg hover:bg-[#F7F2EA]/10 transition-all duration-300"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
