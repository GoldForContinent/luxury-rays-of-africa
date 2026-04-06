import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Check, MapPin, Plane, Car, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const accommodations = [
  {
    name: 'Aberdare Country Club',
    path: '/accommodation/aberdare-country-club',
    image: '/diani2.jpg',
    description: 'Heritage property in the Aberdare Highlands with wildlife sanctuary.',
    price: 'From $350/person/day'
  },
  {
    name: 'Alex Walker Serian Mobile Camp',
    path: '/accommodation/alex-walker-serian-mobile-camp',
    image: '/diani3.jpg',
    description: 'Seasonal mobile camp following the Great Migration.',
    price: 'From $550/person/day'
  }
]

const roomFeatures = [
  'En-suite bathrooms with hot and cold water',
  'Custom-built bathtubs with landscape views',
  'Hardwood decking overlooking the river',
  '24-hour electricity (solar and generator)',
  'Bush bathroom with flush toilet'
]

const activities = [
  {
    title: 'Game Drives',
    description: 'Exclusive 4WD vehicles with dedicated guides and spotters for personalized wildlife viewing in the Mara North Conservancy.'
  },
  {
    title: 'Balloon Safaris',
    description: 'Champagne breakfast in the bush after a magical sunrise flight over the Mara plains.'
  },
  {
    title: 'Guided Nature Walks',
    description: 'Explore the wilderness on foot with experienced guides, discovering flora, fauna, and birdlife.'
  },
  {
    title: 'Maasai Village Visits',
    description: 'Immerse yourself in Maasai culture with visits to nearby villages, learning about traditions and daily life.'
  }
]

export default function AlexWalkersSerianCamp() {
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
          alt="Alex Walker's Serian Camp" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Accommodations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Alex Walker's Serian Camp</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
            ALEX WALKER'S SERIAN CAMP
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Luxury Tented Camp in Mara North Conservancy
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Book This Camp <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Overview */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">About</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
                THE ORIGINAL SERIAN EXPERIENCE
              </h2>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                This was the first of Alex Walker's Serian camps, perfectly capturing the essence of its name—meaning 'peaceful, calm, serene' in the Maasai language. The camp was designed as a retreat from modern life, offering a chance to experience untamed Africa in traditional tented fashion.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                Located in the private Mara North Conservancy, the camp features seven tents and a mess tent strung along the river. With only a handful of other small safari camps sharing the land, guests enjoy an exclusive experience with approximately 1 guest to 350 acres.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} size={18} className="text-[#D4A03A] fill-current" />
                  ))}
                </div>
                <span className="text-[#2C3E50]/70">4.7/5 Guest Rating</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img src="/diani2.jpg" alt="Serian Camp" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Access */}
      <section ref={addContentRef} className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50]">
              LOCATION & ACCESS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-[#D4A03A]/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#D4A03A] w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-3">Location</h3>
              <p className="text-[#2C3E50]/70">
                Alex Walker's Serian Original Camp enjoys a prime position overlooking the Mara River and Oloololo Escarpment in the Mara North Conservancy. Open year-round, it's ideal for families, groups, and couples seeking an intimate safari experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#D4A03A]/10 rounded-full flex items-center justify-center mb-3">
                    <Plane className="text-[#D4A03A] w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-[#2C3E50] mb-2">By Air</h4>
                  <p className="text-[#2C3E50]/60 text-sm">1 hour flight from Nairobi to Mara, then short road transfer</p>
                </div>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#D4A03A]/10 rounded-full flex items-center justify-center mb-3">
                    <Car className="text-[#D4A03A] w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-[#2C3E50] mb-2">By Road</h4>
                  <p className="text-[#2C3E50]/60 text-sm">8 hours drive from Nairobi via Narok</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stay</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              ACCOMMODATION & FACILITIES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">Tent Details</h3>
              <p className="text-[#2C3E50]/70 mb-6">
                All seven tents are set on hardwood decking above the Mara River, offering stunning views over the Oloololo Escarpment. Each tent features an adjoining bush bathroom with hot and cold running water, flush toilet, shower, and custom-made bathtub.
              </p>
              <h4 className="font-semibold text-[#2C3E50] mb-3">Room Features:</h4>
              <ul className="space-y-2">
                {roomFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#2C3E50]/70">
                    <Check size={16} className="text-[#D4A03A]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <img src="/diani3.jpg" alt="Tent Interior" className="w-full h-48 object-cover rounded-2xl" />
              <img src="/diani4.jpg" alt="Camp View" className="w-full h-48 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experiences</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              ACTIVITIES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2">{activity.title}</h4>
                <p className="text-[#2C3E50]/70">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Accommodations */}
      <section ref={addContentRef} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50]">
              MORE ACCOMMODATIONS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((accommodation, index) => (
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
                  <p className="text-[#2C3E50]/80 text-sm">{accommodation.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 md:px-[8vw] relative overflow-hidden">
        <img src="/diani1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            READY TO BOOK?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Let our safari experts help you plan your visit to Alex Walker's Serian Camp.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">Start Planning</Link>
        </div>
      </section>
    </div>
  )
}
