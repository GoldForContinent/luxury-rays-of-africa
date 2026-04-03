import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Footprints, Bird, Mountain, Car, Anchor, Trees, Users, Wind } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

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
    answer: "Absolutely! Rwanda is perfectly positioned to combine with Uganda for gorilla trekking and Kenya or Tanzania for classic savannah safaris. Many itineraries include multi-country options."
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
  { name: "Volcanoes National Park", description: "Home to mountain gorillas, golden monkeys, and breathtaking volcanic landscapes.", image: "/volcanoes.jpg", price: "From $800/pp/day" },
  { name: "Nyungwe National Park", description: "One of Africa's oldest rainforests with 500+ bird species and chimpanzee families.", image: "/nyungwe.jpg", price: "From $800/pp/day" },
  { name: "Akagera National Park", description: "Rwanda's premier savannah park home to the Big Five and diverse wildlife.", image: "/akagera.jpg", price: "From $800/pp/day" },
  { name: "Gishwati-Mukura National Park", description: "A newer protected area with lush forests and wildlife rehabilitation programs.", image: "/gishwati.jpg", price: "From $800/pp/day" }
]

const safariActivities = [
  { icon: Footprints, title: "Gorilla Trekking", description: "An unforgettable hour with mountain gorillas in Volcanoes National Park.", timing: "Year-round" },
  { icon: Bird, title: "Golden Monkey Tracking", description: "Track the endangered golden monkeys in their bamboo forest habitat.", timing: "Year-round" },
  { icon: Bird, title: "Chimpanzee Tracking", description: "Explore Nyungwe Forest to find habituated chimpanzee families.", timing: "Year-round" },
  { icon: Car, title: "Big Five Game Drives", description: "Explore Akagera's savannah for lions, elephants, rhinos, buffaloes, and leopards.", timing: "June-September" },
  { icon: Bird, title: "Bird Watching", description: "Discover over 500 bird species including the Rwenzori turaco.", timing: "Year-round" },
  { icon: Trees, title: "Canopy Walks", description: "Walk through the forest canopy on elevated walkways in Nyungwe.", timing: "Year-round" },
  { icon: Mountain, title: "Volcano Hiking", description: "Hike the Virunga volcanoes with stunning views and rare wildlife.", timing: "June-September" },
  { icon: Anchor, title: "Fishing", description: "Catch Nile perch and tilapia in Lake Kivu's pristine waters.", timing: "Year-round" },
  { icon: Users, title: "Cultural Tours", description: "Visit the Kigali Genocide Memorial and experience local traditions.", timing: "Year-round" },
  { icon: Wind, title: "Nature Walks", description: "Guided walks through Rwanda's diverse ecosystems.", timing: "Year-round" }
]

const samplePackages = [
  { title: "Golden Monkey & Gorilla Trekking Safari", nights: "7 Days / 6 Nights", price: "4,695", destinations: ["Kigali", "Nyungwe", "Lake Kivu", "Volcanoes"], path: "/rwanda-golden-monkey-gorilla-trekking" },
  { title: "Gorilla Trekking Express Safari", nights: "3 Days / 2 Nights", price: "1,785", destinations: ["Kigali", "Volcanoes"], path: "/rwanda-gorilla-trekking-express" },
  { title: "This is Africa - Women's Center", nights: "1 Day", price: "90", destinations: ["Kigali"], path: "/rwanda-this-is-africa-womens-center" },
  { title: "Visit A Thousand Hills Distilleries", nights: "1 Day", price: "120", destinations: ["Kigali"], path: "/rwanda-thousand-hills-distilleries" },
  { title: "Kigali City Tour", nights: "1 Day", price: "60", destinations: ["Kigali"], path: "/rwanda-kigali-city-tour" }
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
          src="/journal_gorilla.jpg" 
          alt="Rwanda Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Rwanda Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            RWANDA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            The Land of a Thousand Hills
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

      {/* Why Visit Rwanda */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY RWANDA FOR YOUR SAFARI
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Rwanda, also known as the "Land of a Thousand Hills," offers incredible gorilla trekking experiences. As an exclusive gorilla tour destination, Rwanda is one of the best places for exciting excursions, golden monkey tracking, and exploring its rich history.
          </p>
        </div>
      </section>

      {/* Sample Packages - Top Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Featured</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              OUR BEST RECOMMENDED RWANDA SAFARIS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePackages.map((pkg, index) => (
              <Link 
                key={index}
                to={pkg.path}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/${[2619964, 2304775, 1390361, 1684428, 3601425][index % 5]}/pexels-photo-${[2619964, 2304775, 1390361, 1684428, 3601425][index % 5]}.jpeg?auto=compress&cs=tinysrgb&w=800`}
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
                    <span>{pkg.nights}</span>
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
        </div>
      </section>

      {/* Key Highlights with Alternating Layout */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Gorillas & Primates
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Rwanda offers the most accessible gorilla trekking experiences in the world. Volcanoes National Park is home to ten habituated gorilla families, offering intimate encounters with these magnificent creatures.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Beyond gorillas, track golden monkeys in bamboo forests and chimpanzees in Nyungwe Forest, one of Africa's oldest rainforests.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/journal_gorilla.jpg" alt="Gorillas" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
              <img src="/bigfive_background.jpg" alt="Akagera" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Big Five Savannah Safaris
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Akagera National Park offers classic savannah wildlife experiences, home to lions, elephants, rhinos, buffaloes, and leopards.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Explore diverse ecosystems from wetlands to savannah, with boat safaris on Lake Akagera offering unique hippo and crocodile sightings.
                </p>
              </div>
            </div>
          </div>

          <div ref={addToRefs}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Rich Culture & History
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Experience Rwanda's vibrant culture through the energetic Intore dance, the tradition of Umuganda (community service), and the intricate art of Agaseke basket weaving.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Visit the Kigali Genocide Memorial for a powerful historical experience, and discover a nation that has risen from tragedy to become one of Africa's safest and most progressive countries.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/communities_background.jpg" alt="Rwanda Culture" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
              LOOKING FOR A SAFARI IN AFRICA?
            </h3>
            <p className="text-[#2C3E50] text-lg">
              Explore 70+ luxury African safaris. Contact us to design your bespoke adventure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/packages" className="btn-primary">Explore Our Safaris</Link>
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
              PLACES TO VISIT IN RWANDA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rwandaParks.map((park, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={park.image} 
                    alt={park.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/destinations_hero.jpg'
                    }}
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
                    View Park <ArrowRight size={14} />
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
              UNFORGETTABLE SAFARI EXPERIENCES
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

      {/* Seasonal Guide */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Timing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              BEST TIME TO VISIT RWANDA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 overflow-x-auto">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] text-center mb-2">Rwanda Safari Seasonal Guide</h3>
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
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">June - September & December - February</h4>
              <p className="text-[#2C3E50]/70 text-sm">Dry seasons - best for gorilla trekking, visible trails, fewer mosquitoes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Shoulder Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">May & October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Mix of dry and rainy weather, fewer crowds, pleasant conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #556B2F' }}>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Low Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">March - May & November</h4>
              <p className="text-[#2C3E50]/70 text-sm">Rainy season - lush green landscapes, lower prices, ideal for photographers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Why Us</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mt-4">
              BOOK YOUR RWANDA SAFARI WITH US
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "15+ Years Experience", description: "Our team has decades of combined experience in East African safaris, ensuring you get the best guidance." },
              { title: "Expert Guides", description: "Our Silver and Gold rated guides provide deep insights into Rwandan wildlife and culture." },
              { title: "Sustainable Practices", description: "We are committed to sustainable travel and positive impact on local communities and wildlife." },
            ].map((reason, index) => (
              <div key={index} className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#D4A03A] font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#F7F2EA] mb-2">{reason.title}</h3>
                <p className="text-sm text-[#F7F2EA]/60">{reason.description}</p>
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
                  <div className="px-6 pb-5 text-[#2C3E50]/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mb-6">
            Ready for Your Rwanda Adventure?
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">
            Let our experts help you plan the perfect safari. From gorilla trekking to Big Five game drives, we'll create an unforgettable experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Speak to an Expert
            </Link>
            <Link to="/packages" className="px-8 py-3 border-2 border-[#F7F2EA]/30 text-[#F7F2EA] rounded-full font-semibold hover:bg-[#F7F2EA] hover:text-[#2C3E50] transition-all">
              Browse Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
