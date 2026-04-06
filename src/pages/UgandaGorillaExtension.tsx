import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Calendar, DollarSign, Star, CheckCircle, X, Users, Car, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Fly Entebbe/Kihihi - Transfer to Bwindi National Park",
    description: "Upon arrival at Entebbe International Airport, connect on your scheduled flight to Bwindi NP (ETD 0700 ETA 0835). Baggage allowance is 15 kg in soft-sided duffel bags. You will be met by the Lodge vehicle on arrival at Kihihi airstrip and transferred to the lodge for lunch. Afternoon at leisure with dinner and overnight at Mahogany Springs Lodge - Superior room (Full Board)",
    meals: "Lunch, Dinner",
    accommodation: "Mahogany Springs Lodge"
  },
  {
    day: 2,
    title: "1st Gorilla Trekking - Bwindi Impenetrable National Park",
    description: "Early breakfast at your lodge followed by transfer to the park reception for check-in and gorilla trek registration. The largest of the great apes, gorillas are stocky animals with broad chests and shoulders, large human-like hands and small eyes set into hairless faces. Gorillas display many human-like behaviors and emotions, such as laughter and sadness. They even make their own tools to help them survive in the forest. In fact, gorillas share 98.3% of their genetic code with humans, making them our closest cousins after chimpanzees and bonobos. After the trek, drive to your lodge for lunch. Rest of the day at leisure with dinner and overnight.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Mahogany Springs Lodge"
  },
  {
    day: 3,
    title: "2nd Gorilla Trekking - Bwindi Impenetrable National Park",
    description: "Follow the same program as the previous day with a different gorilla family. Each gorilla family has its own unique character and dynamics, offering a different experience. After the trek, return to your lodge for lunch and rest. Afternoon at leisure with dinner and overnight at Mahogany Springs Lodge.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Mahogany Springs Lodge"
  },
  {
    day: 4,
    title: "Bwindi National Park - Entebbe - Departure",
    description: "Check out after breakfast and transfer to Kihihi airstrip (approximately 90 minutes) for your morning scheduled light flight to Entebbe (ETD 0945 ETA 1125). Baggage allowance is strictly 15 kg in soft-sided duffel bags. Upon arrival at Entebbe International Airport, connect to your international flight departure. END OF SERVICES!",
    meals: "Breakfast"
  }
]

const pricingOptions = [
  {
    title: "High Season",
    period: "Jan-Feb, June-Oct & Dec 2026",
    price: "4,400",
    perPerson: "per person sharing (2 pax)",
    singleSupplement: "417",
    tiers: [
      { pax: "2 pax", price: "4,400" },
      { pax: "4 pax", price: "4,250" },
      { pax: "6 pax", price: "4,200" }
    ],
    highlights: [
      "Kihihi airstrip and gorilla trek transfers",
      "One-way scheduled flight Entebbe - Bwindi",
      "Two Gorilla trek permits (Buhoma sector)",
      "3 nights full board accommodation",
      "Mahogany Springs Lodge - Superior room",
      "Laundry services",
      "Glass of wine or beer or soft drink at dinner",
      "Visit to Ride 4 a Woman and Buhoma hospital",
      "Unlimited bottled mineral water in vehicle",
      "Emergency medical evacuation"
    ],
    notIncluded: [
      "International flights",
      "Uganda visa fees",
      "Travel insurance",
      "Tips and gratuities",
      "Personal expenses",
      "Cultural visits fees"
    ]
  },
  {
    title: "Green Season",
    period: "March-May & Nov 2026",
    price: "4,100",
    perPerson: "per person sharing (2 pax)",
    singleSupplement: "397",
    tiers: [
      { pax: "2 pax", price: "4,100" },
      { pax: "4 pax", price: "3,950" },
      { pax: "6 pax", price: "3,900" }
    ],
    highlights: [
      "Kihihi airstrip and gorilla trek transfers",
      "One-way scheduled flight Entebbe - Bwindi",
      "Two Gorilla trek permits (Buhoma sector)",
      "3 nights full board accommodation",
      "Mahogany Springs Lodge - Superior room",
      "Laundry services",
      "Glass of wine or beer or soft drink at dinner",
      "Visit to Ride 4 a Woman and Buhoma hospital",
      "Unlimited bottled mineral water in vehicle",
      "Emergency medical evacuation"
    ],
    notIncluded: [
      "International flights",
      "Uganda visa fees",
      "Travel insurance",
      "Tips and gratuities",
      "Personal expenses",
      "Cultural visits fees"
    ]
  }
]

const keyHighlights = [
  "Two gorilla trekking experiences in Bwindi",
  "Half of the world's mountain gorillas",
  "Luxury lodge accommodation at Mahogany Springs",
  "Domestic flight between Entebbe and Bwindi",
  "Full board with drinks included",
  "Expert English-speaking guides"
]

const importantInfo = [
  { title: "Best Time to Visit", description: "June-September and December-February for dry season trekking" },
  { title: "Group Size", description: "Maximum 8 people per gorilla family visit" },
  { title: "Age Limit", description: "Minimum 15 years for gorilla trekking" },
  { title: "Fitness Level", description: "Moderate - requires hiking through forest terrain" },
  { title: "What to Bring", description: "Hiking boots, long pants, gloves, camera with no flash" }
]

export default function UgandaGorillaExtension() {
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
          src="/uganda.png" 
          alt="Gorilla Trekking Uganda" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <Link to="/uganda-safaris" className="hover:text-[#D4A03A] transition-colors">Uganda</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Gorilla Extension</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            GORILLA EXTENSION
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            4 Days / 3 Nights - From $3,900
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
                <p className="font-semibold">4 Days / 3 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Destination</p>
                <p className="font-semibold">Bwindi, Uganda</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Price From</p>
                <p className="font-semibold">$3,900 pp</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Best Time</p>
                <p className="font-semibold">Jun-Sep, Dec-Feb</p>
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
              ENCOUNTER UGANDA'S GORILLAS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                A Gorilla Extension Safari can be added either before or after a Kenya or Tanzania wildlife safari. Bwindi is home to half of the world's remaining mountain gorillas, along with nine other primate species, offering an unforgettable primate-tracking adventure.
              </p>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-8">
                This exclusive experience takes you into the heart of the Impenetrable Forest for intimate encounters with these gentle giants in their natural habitat.
              </p>
              <div className="space-y-4">
                {keyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[#D4A03A] flex-shrink-0" size={20} />
                    <span className="text-[#2C3E50]">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Package Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Bwindi Impenetrable National Park</p>
                    <p className="text-[#2C3E50]/70 text-sm">Home to half the world's gorillas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">4 Days / 3 Nights</p>
                    <p className="text-[#2C3E50]/70 text-sm">Full-board safari experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Private Transfers</p>
                    <p className="text-[#2C3E50]/70 text-sm">Airstrip transfers included</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Expert Safari Guide</p>
                    <p className="text-[#2C3E50]/70 text-sm">English-speaking professional</p>
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

          <div className="grid md:grid-cols-2 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-2">{option.title}</h3>
                  <p className="text-[#2C3E50]/60 mb-4">{option.period}</p>
                </div>
                
                <div className="bg-[#FFF8F0] rounded-2xl p-4 mb-6">
                  <h4 className="font-semibold text-[#2C3E50] text-sm mb-3">Per Person Sharing:</h4>
                  <div className="space-y-2">
                    {option.tiers?.map((tier, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-[#2C3E50]/80">{tier.pax}</span>
                        <span className="font-bold text-[#D4A03A]">${tier.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#D4C5B9] flex justify-between text-sm">
                    <span className="text-[#2C3E50]/80">Single Supplement</span>
                    <span className="font-bold text-[#D4A03A]">${option.singleSupplement}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-[#2C3E50]">What's Included:</h4>
                  {option.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-[#D4A03A] flex-shrink-0" size={18} />
                      <span className="text-[#2C3E50]/80 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-8">
                  <h4 className="font-semibold text-[#2C3E50]">Not Included:</h4>
                  {option.notIncluded.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <X className="text-red-500 flex-shrink-0" size={18} />
                      <span className="text-[#2C3E50]/60 text-sm">{item}</span>
                    </div>
                  ))}
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
            READY TO MEET THE GORILLAS?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Let us create your perfect Uganda gorilla safari experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-[#D4A03A] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#B8922F] transition-all inline-flex items-center gap-2"
            >
              Start Planning <ArrowRight size={20} />
            </Link>
            <Link 
              to="/uganda-safaris"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2C3E50] transition-all"
            >
              View More Uganda Safaris
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
                <img src="/logo21.png" alt="Rays of Africa Logo" className="h-16" />
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
            <p className="text-white/40 text-sm">© 2026 Rays of Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}