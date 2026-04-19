import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Calendar, DollarSign, Star, CheckCircle, ChevronDown, Plane, Mountain, Camera, Sunset } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Arrival in Arusha",
    description: "Arrival at Kilimanjaro International Airport where you will be welcomed and briefed by the SkySafari Team. They will transfer you to Arusha Coffee Lodge by road. Afternoon relaxation in a Plantation Suite.",
    meals: "Bed & Breakfast",
    accommodation: "Arusha Coffee Lodge"
  },
  {
    day: 2,
    title: "Arusha - Tarangire",
    description: "After breakfast at Arusha Coffee Lodge, enjoy a Bean-To-Cup Coffee Estate Tour. After lunch at the lodge, depart for your local flight to Kuro Airstrip, Tarangire National Park. Upon arrival, enjoy a shared game drive though Tarangire National Park to Tarangire Treetops. During dinner, enjoy traditional Maasai Boma entertainment.",
    meals: "Full Board",
    accommodation: "Tarangire Treetops"
  },
  {
    day: 3,
    title: "Full Day Tarangire",
    description: "After breakfast at Tarangire Treetops, visit the Maasai Village. Enjoy a morning shared game drive and lunch at Tarangire Treetops and a walking safari. A spectacular set up of cocktails will be set up for you in the bush as you enjoy the sunset. After dinner, experience a night game drive in the park!",
    meals: "Full Board",
    accommodation: "Tarangire Treetops"
  },
  {
    day: 4,
    title: "Tarangire - Ngorongoro",
    description: "After breakfast, depart for Kuro Airstrip with a short game drive. Before flying out, enjoy a picnic lunch in the park with beautiful views of the savannah. Fly to Manyara Airstrip and be transferred by road to The Manor Ngorongoro for high tea. Dinner will be served at The Manor at Ngorongoro.",
    meals: "Full Board",
    accommodation: "The Manor at Ngorongoro"
  },
  {
    day: 5,
    title: "Ngorongoro - Lake Manyara",
    description: "Today, after an early breakfast at The Manor at Ngorongoro, depart for a game drive at Manyara National Park with packed lunches that will be served within or return to the Lodge for lunch.",
    meals: "Full Board",
    accommodation: "The Manor at Ngorongoro"
  },
  {
    day: 6,
    title: "Full Day Ngorongoro Crater Tour",
    description: "Today, after an early breakfast at The Manor at Ngorongoro, depart for the Ngorongoro Crater Tour. Standing on the edge and taking in the vast beauty of the Ngorongoro Crater is an experience that will remain forever with many visitors. The view is rivaled only by the wildlife spectacle that waits on the floor of the crater, including the Big 5. Lunch will be served at the crater. After lunch, drive back to The Manor at Ngorongoro for private dining.",
    meals: "Full Board",
    accommodation: "The Manor at Ngorongoro"
  },
  {
    day: 7,
    title: "Ngorongoro - Serengeti",
    description: "Today you have the choice of either visiting the Lake Manyara National Park or enjoying a selection of activities at the Manor at Ngorongoro. Lunch will be served at The Manor then you will be transferred to Manyara Airstrip for your flight to Serengeti National Park. You will be transferred by road to Serengeti Pioneer Camp arriving in time for a Sundowner.",
    meals: "Full Board",
    accommodation: "Serengeti Pioneer Camp"
  },
  {
    day: 8,
    title: "Full Day Serengeti National Park",
    description: "After breakfast, enjoy full day shared game drives in Serengeti National Park. Designated a UNESCO World Heritage Site in 1981, this is Tanzania's oldest national park. After the game drive, head back to camp for dinner.",
    meals: "Full Board",
    accommodation: "Serengeti Pioneer Camp"
  },
  {
    day: 9,
    title: "Full Day Serengeti National Park",
    description: "After breakfast, enjoy full day shared game drives in Serengeti National Park. The Serengeti offers unparalleled wildlife viewing with the Big Five and countless other species. After the game drive, head back to camp for dinner.",
    meals: "Full Board",
    accommodation: "Serengeti Pioneer Camp"
  },
  {
    day: 10,
    title: "Serengeti - Arusha - Departure",
    description: "After an early breakfast, enjoy shared game drives on the Serengeti plains. Return back to camp for lunch and enjoy your final game drive en-route to the Airstrip. Depart for your flight back to Arusha. You will be transferred to Arusha Coffee Lodge to freshen up, depending on your outbound flight. From there, you will be transferred to Kilimanjaro Airport for your flight departure. END OF SERVICES!",
    meals: "Breakfast"
  }
]

const pricingOptions = [
  {
    title: "Green Season",
    period: "01 Apr - 31 May 2026",
    price: "12,500",
    singleSupplement: "1,150",
    parkFees: "927",
    levy: "12"
  },
  {
    title: "Mid Season",
    period: "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec 2026",
    price: "13,810",
    singleSupplement: "1,780",
    parkFees: "927",
    levy: "12"
  },
  {
    title: "Peak Season",
    period: "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec 2026",
    price: "15,204",
    singleSupplement: "2,356",
    parkFees: "927",
    levy: "12"
  }
]

const keyHighlights = [
  "Fly in style with SkySafari's 9-seater Executive-class Cessna Caravan",
  "Stay in luxury lodges and camps: Arusha Coffee Lodge, Tarangire Treetops, The Manor at Ngorongoro, Serengeti Pioneer Camp",
  "Full day Ngorongoro Crater tour with game viewing",
  "Experience Tarangire National Park with its massive elephant herds",
  "Visit a traditional Maasai Village",
  "Night game drive in Tarangire",
  "Walking safari with sunset cocktails in the bush",
  "Sundowner in Serengeti"
]

const importantInfo = [
  { title: "Best Time to Visit", description: "June-October for best wildlife viewing, April-May for green season" },
  { title: "Group Size", description: "Small group shared game drives" },
  { title: "Fitness Level", description: "Easy - mostly game drives with some walking safari" },
  { title: "What's Included", description: "All flights, accommodations, meals, game drives, park fees, cultural visit" },
  { title: "Visa Requirements", description: "Tanzania visa ($50) available on arrival or e-visa" },
  { title: "What to Bring", description: "Binoculars, camera, comfortable clothing, layers, sunscreen" }
]

export default function TanzaniaClassicSkySafari() {
  const [openDay, setOpenDay] = useState<number | null>(null)
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

  const toggleDay = (index: number) => {
    setOpenDay(openDay === index ? null : index)
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
          src="/tanzania_card.jpg" 
          alt="Classic Sky Safari Tanzania" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <Link to="/tanzania-safaris" className="hover:text-[#D4A03A] transition-colors">Tanzania</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Classic Sky Safari</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            CLASSIC SKY SAFARI
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            10 Days / 9 Nights - From $12,500
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-[#D4A03A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#B8922F] transition-all flex items-center gap-2">
              Book Now <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View All Safaris
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-8 bg-[#2C3E50] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Duration</p>
                <p className="font-semibold">10 Days / 9 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Destinations</p>
                <p className="font-semibold">Tarangire, Ngorongoro, Serengeti</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Price From</p>
                <p className="font-semibold">$12,500 pp</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Best Time</p>
                <p className="font-semibold">Year-round</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Overview</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              TANZANIA'S SUPREME SAFARI EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Discover Tanzania's supreme safari parks from Tarangire's elephant dotted plains to Ngorongoro Crater, the world's largest caldera, ending with the world renowned Serengeti National Park with its endless plains abundant with wildlife.
              </p>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-8">
                Fly in style with SkySafari's own 9-seater Executive-class Cessna Caravan. You will stay in some of the best luxury lodges & camps and enjoy true African hospitality.
              </p>
              <div className="space-y-4">
                {keyHighlights.slice(0, 5).map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[#D4A03A] flex-shrink-0" size={20} />
                    <span className="text-[#2C3E50]">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Safari Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Plane className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Luxury Flight Experience</p>
                    <p className="text-[#2C3E50]/70 text-sm">Fly in 9-seater Executive-class Cessna</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mountain className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Ngorongoro Crater</p>
                    <p className="text-[#2C3E50]/70 text-sm">World's largest unbroken caldera</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Camera className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Tarangire National Park</p>
                    <p className="text-[#2C3E50]/70 text-sm">Massive elephant herds & ancient baobabs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sunset className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Sundowner Experience</p>
                    <p className="text-[#2C3E50]/70 text-sm">Cocktails in the bush at sunset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Day by Day</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">DETAILED ITINERARY</h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="space-y-6">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between hover:bg-[#FAF3E0] transition-colors"
                  onClick={() => toggleDay(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#D4A03A] text-white flex items-center justify-center font-bold text-xl">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#2C3E50]">{day.title}</h3>
                      <p className="text-[#D4A03A]">{day.meals} • {day.accommodation}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`text-[#D4A03A] transition-transform ${openDay === index ? 'rotate-180' : ''}`}
                  />
                </div>
                {openDay === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#2C3E50] leading-relaxed">{day.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Investment</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">PRICING OPTIONS</h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-2">{option.title}</h3>
                  <p className="text-[#2C3E50]/60 text-sm mb-4">{option.period}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-[#D4A03A]">${option.price}</span>
                    <span className="text-[#2C3E50]/70">/ pp</span>
                  </div>
                </div>
                
                <div className="bg-[#FFF8F0] rounded-2xl p-4 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#2C3E50]/80">Single Supplement</span>
                    <span className="font-bold text-[#D4A03A]">${option.singleSupplement}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#2C3E50]/80">Park Fees</span>
                    <span className="font-bold text-[#D4A03A]">${option.parkFees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2C3E50]/80">Tourism Levy</span>
                    <span className="font-bold text-[#D4A03A]">${option.levy}</span>
                  </div>
                </div>

                <Link 
                  to="/contact"
                  className="block text-center py-4 rounded-full font-semibold transition-all bg-[#D4A03A] text-white hover:bg-[#B8922F]"
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Essential Info</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">IMPORTANT INFORMATION</h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {importantInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-display font-bold text-lg text-[#D4A03A] mb-2">{info.title}</h4>
                <p className="text-[#2C3E50]/80">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            READY TO FLY IN STYLE?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Experience Tanzania's most exclusive safari adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-[#D4A03A] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#B8922F] transition-all inline-flex items-center gap-2"
            >
              Start Planning <ArrowRight size={20} />
            </Link>
            <Link 
              to="/tanzania-safaris"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2C3E50] transition-all"
            >
              View More Tanzania Safaris
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-[#1a252f] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="inline-block mb-4">
                <img src="/rootslogo.png" alt="Roots of Africa Safaris Logo" className="h-16" />
              </Link>
              <p className="text-white/60 text-sm">Your gateway to extraordinary African safari experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#D4A03A] mb-4">Explore</h4>
              <div className="space-y-2">
                <Link to="/safari-types" className="block text-white/60 hover:text-white text-sm">Safari Types</Link>
                <Link to="/destinations" className="block text-white/60 hover:text-white text-sm">Destinations</Link>
                <Link to="/packages" className="block text-white/60 hover:text-white text-sm">Packages</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#D4A03A] mb-4">Information</h4>
              <div className="space-y-2">
                <Link to="/first-safari" className="block text-white/60 hover:text-white text-sm">First Safari Guide</Link>
                <Link to="/best-time-to-visit" className="block text-white/60 hover:text-white text-sm">Best Time to Visit</Link>
                <Link to="/what-to-pack" className="block text-white/60 hover:text-white text-sm">What to Pack</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#D4A03A] mb-4">Contact</h4>
              <p className="text-white/60 text-sm">raysofafrica254@gmail.com</p>
              <p className="text-white/60 text-sm">0791323799</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/40 text-sm">© 2026 Roots of Africa Safaris. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}