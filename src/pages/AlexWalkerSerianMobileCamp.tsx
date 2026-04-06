import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Check, MapPin, Plane, Car, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const accommodations = [
  {
    name: "Alex Walker's Serian Camp",
    path: '/accommodation/alex-walkers-serian-camp',
    image: '/diani1.jpg',
    description: 'Luxury tented camp in the Mara North Conservancy with river views.',
    price: 'From $650/person/day'
  },
  {
    name: 'Aberdare Country Club',
    path: '/accommodation/aberdare-country-club',
    image: '/diani2.jpg',
    description: 'Heritage property in the Aberdare Highlands with wildlife sanctuary.',
    price: 'From $350/person/day'
  }
]

const tentFeatures = [
  '6 spacious and comfortable tents set among acacia trees',
  'Tasteful décor with views over the Wildebeest calving area',
  'En-suite bathroom with flushing toilet and bucket shower',
  '24-hour generator-powered electricity',
  'Wrought-iron beds and Moroccan rugs'
]

const activities = [
  {
    title: 'Fly Camping',
    description: 'An adventurous, private, and unique bush camping experience. Walk with local tribesmen—the Hadzabe hunter-gatherers teach tracking, medicinal plants, and bow-and-arrow making.'
  },
  {
    title: 'Game Drives',
    description: 'Each group gets their own open-top 4WD safari vehicle with a dedicated guide and spotter. No schedules—you go wherever the day takes you.'
  },
  {
    title: 'Wildebeest Calving Season',
    description: 'Witness approximately 500,000 wildebeest calves born within just 3-4 weeks from mid-December to May. A truly extraordinary natural spectacle.'
  },
  {
    title: 'Cultural Visits',
    description: 'Explore Lake Eyasi, home to the Hadzabe and Ndorobo tribes. Gain first-hand knowledge of their way of life from the guides who come from these communities.'
  }
]

export default function AlexWalkerSerianMobileCamp() {
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
          src="/diani3.jpg" 
          alt="Alex Walker Serian Mobile Camp" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Accommodations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Alex Walker Serian Mobile Camp</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
            ALEX WALKER SERIAN MOBILE CAMP
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Seasonal Safari Camp Following the Migration
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
                THE ULTIMATE MOBILE SAFARI EXPERIENCE
              </h2>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                Alex Walker's Serian is a collection of intimate and exclusive safari camps. Being mobile means they move seasonally, ensuring you the best front-row seat to nature's greatest spectacles. Serian is a Maasai word meaning serene, calm, and tranquil.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                Serian's Serengeti South mobile camp is positioned in the southernmost part of the park from mid-December to May, offering the perfect vantage point for the Wildebeest Calving Season. The camp is set up within the Ngorongoro Conservation Area during this period, with impressive views of approximately 500,000 wildebeest calves born within just 3-4 weeks.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} size={18} className="text-[#D4A03A] fill-current" />
                  ))}
                </div>
                <span className="text-[#2C3E50]/70">5.0/5 Guest Rating</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img src="/diani4.jpg" alt="Mobile Camp" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
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
                The camp is situated about 50 kilometers south of Ndutu within the Ngorongoro Conservation Area. Lake Eyasi lies to the south, home to the Hadzabe and Ndorobo tribes whose guides provide unique cultural insights.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#D4A03A]/10 rounded-full flex items-center justify-center mb-3">
                    <Plane className="text-[#D4A03A] w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-[#2C3E50] mb-2">By Air</h4>
                  <p className="text-[#2C3E50]/60 text-sm">50 min flight from Arusha to Mwiba Airstrip, then 45 min to 1 hour drive</p>
                </div>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#D4A03A]/10 rounded-full flex items-center justify-center mb-3">
                    <Car className="text-[#D4A03A] w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-[#2C3E50] mb-2">By Road</h4>
                  <p className="text-[#2C3E50]/60 text-sm">5-10 hours from Arusha (less common due to distance)</p>
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
              TENTS & FACILITIES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-4">Camp Details</h3>
              <p className="text-[#2C3E50]/70 mb-6">
                The camp features 6 spacious and comfortable tents set among acacia trees, each offering tasteful décor with views over the Wildebeest calving area.
              </p>
              <h4 className="font-semibold text-[#2C3E50] mb-3">Tent Features:</h4>
              <ul className="space-y-2">
                {tentFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#2C3E50]/70">
                    <Check size={16} className="text-[#D4A03A]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <img src="/diani1.jpg" alt="Tent Interior" className="w-full h-48 object-cover rounded-2xl" />
              <img src="/diani2.jpg" alt="Camp Atmosphere" className="w-full h-48 object-cover rounded-2xl" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Camp Facilities</h3>
            <p className="text-[#2C3E50]/70 mb-4">
              The camp offers communal dining areas and lounge spaces where guests can relax and share stories of the day's adventures. Each group is assigned a dedicated 4WD safari vehicle with their own guide and spotter, ensuring a personalized experience throughout their stay.
            </p>
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
        <img src="/diani3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            READY TO BOOK?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Let our safari experts help you plan your visit to Alex Walker Serian Mobile Camp.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">Start Planning</Link>
        </div>
      </section>
    </div>
  )
}
