import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Palmtree, Waves, Anchor, Clock, Plane, Car } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const watamuAccommodations = [
  {
    name: 'Hemingways Watamu',
    path: '/accommodation/hemingways-watamu',
    image: '/diani1.jpg',
    description: 'Luxury beach resort with world-class amenities and private villas.',
    price: 'From $450/person/day'
  },
  {
    name: 'Kobe Suite Resort',
    path: '/accommodation/kobe-suite-resort',
    image: '/diani2.jpg',
    description: 'Mid-range beachfront resort with excellent dining options.',
    price: 'From $250/person/day'
  },
  {
    name: 'Medina Palms',
    path: '/accommodation/medina-palms',
    image: '/diani3.jpg',
    description: 'Elegant Swahili-style villas with ocean views and spa.',
    price: 'From $320/person/day'
  }
]

const activities = [
  {
    icon: Waves,
    title: 'Snorkeling & Diving',
    description: 'Explore Watamu Marine National Park with vibrant coral reefs, tropical fish, sea turtles, and dolphins.'
  },
  {
    icon: Anchor,
    title: 'Kayaking & Paddleboarding',
    description: 'Paddle through Mida Creek\'s mangrove forests, perfect for sunset views and birdwatching.'
  },
  {
    icon: Car,
    title: 'Dhow Cruises',
    description: 'Traditional sailing dhow trips on Mida Creek, especially beautiful at sunset.'
  },
  {
    icon: Palmtree,
    title: 'Kitesurfing',
    description: 'Learn to kitesurf with professional instructors in the warm Indian Ocean waters.'
  }
]

const seasonalData = [
  { season: 'Low Season', months: 'March - June', description: 'Lush green environment after rains. Good deals on accommodation. Some rain expected.' },
  { season: 'High Season', months: 'October - November, December - February', description: 'Dry, sunny weather with calm seas. Perfect for water activities. Christmas/New Year peak.' },
  { season: 'Best Season', months: 'June - October', description: 'Longest dry season with ideal conditions. Clear skies, calm waters, excellent for diving and snorkeling.' }
]

export default function WatamuBeach() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      )

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

  const addContentRef = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <img 
          src="/diani1.jpg" 
          alt="Watamu Beach" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Watamu Beach</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            WATAMU
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            BEACH
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Marine Paradise on Kenya's North Coast
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan Your Trip <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Packages
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY WATAMU BEACH
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                Watamu is a peaceful coastal town on Kenya's northern coast, about 120 kilometers north of Mombasa. Known for its pristine beaches, incredible marine life, and tranquil atmosphere, this hidden paradise offers a perfect escape from the ordinary.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                The main attraction is Watamu Marine National Park, a protected biosphere reserve featuring stunning coral reefs. The area is also famous for Mida Creek, a vast tidal creek bordered by mangrove forests—perfect for kayaking, birdwatching, and sunset dhow cruises.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed">
                Watamu offers a wonderful combination of beach relaxation and adventure. Whether you want to snorkel with turtles, learn to kitesurf, explore ancient Swahili ruins, or simply do nothing on pristine white sands, Watamu delivers an unforgettable coastal experience.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img src="/diani2.jpg" alt="Watamu Beach Sunset" className="relative rounded-2xl shadow-2xl w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section ref={addContentRef} className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50]">
              HOW TO GET TO WATAMU
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-[#D4A03A]/10 rounded-full flex items-center justify-center mb-4">
                <Plane className="text-[#D4A03A] w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-3">By Air</h3>
              <p className="text-[#2C3E50]/70">
                Fly into Malindi International Airport (MYD), the closest airport to Watamu. Daily domestic flights operate from Nairobi's Wilson Airport. From Malindi, it's just a 30-minute scenic drive to Watamu.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-[#D4A03A]/10 rounded-full flex items-center justify-center mb-4">
                <Car className="text-[#D4A03A] w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-3">By Road</h3>
              <p className="text-[#2C3E50]/70">
                Drive from Mombasa (approximately 2-3 hours) via the coastal road north. Alternatively, take the SGR train from Nairobi to Mombasa, then a taxi to Watamu. The journey offers beautiful coastal scenery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experiences</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              THINGS TO DO
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4C5B9]">
                <div className="w-14 h-14 mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                  <activity.icon size={24} className="text-[#D4A03A]" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2">{activity.title}</h4>
                <p className="text-[#2C3E50]/80 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Timing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              BEST TIME TO VISIT
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seasonalData.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mb-4 ${
                  index === 0 ? 'bg-orange-100 text-orange-800' :
                  index === 1 ? 'bg-green-100 text-green-800' :
                  'bg-[#D4A03A]/20 text-[#D4A03A]'
                }`}>
                  {item.season}
                </span>
                <div className="flex items-center gap-2 text-[#2C3E50] mb-3">
                  <Clock size={16} className="text-[#CD7F32]" />
                  <span className="font-semibold">{item.months}</span>
                </div>
                <p className="text-[#2C3E50]/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              NEARBY ATTRACTIONS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">Gede Ruins</h4>
              <p className="text-[#2C3E50]/70">
                Ancient Swahili town abandoned in the 17th century. Explore fascinating ruins including mosques and palaces.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">Mida Creek</h4>
              <p className="text-[#2C3E50]/70">
                Stunning tidal creek with mangrove forests. Perfect for kayaking, birdwatching, and sunset dhow cruises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">Malindi</h4>
              <p className="text-[#2C3E50]/70">
                Historic coastal town with Portuguese influences. Visit the Portuguese Chapel and explore local markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4">
              WHERE TO STAY
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {watamuAccommodations.map((accommodation, index) => (
              <Link 
                key={index}
                to={accommodation.path}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4A03A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {accommodation.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2 group-hover:text-[#D4A03A] transition-colors">
                    {accommodation.name}
                  </h4>
                  <p className="text-[#2C3E50]/80 text-sm leading-relaxed">
                    {accommodation.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#CD7F32] font-semibold text-sm group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={addContentRef} className="py-28 px-4 md:px-[8vw] relative overflow-hidden">
        <img src="/diani4.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            READY FOR WATAMU BEACH?
          </h2>
          <p className="text-[#D4A03A] text-lg uppercase tracking-widest mb-8">Let's Plan Your Coastal Adventure</p>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you want to combine Watamu with a safari or enjoy a beach extension, we can create your perfect Kenyan coast experience.
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
