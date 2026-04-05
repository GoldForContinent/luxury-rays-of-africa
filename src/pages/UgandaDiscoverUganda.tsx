import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Calendar, DollarSign, Star, CheckCircle, X, ChevronDown, Camera, Bird, TreePine, Mountain, Ship } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Arrival in Entebbe",
    description: "Arrival can take place at any time of the day. Upon arrival, your private safari guide/vehicle will be waiting to pick you up and transfer you to your overnight hotel. All meals on this day will be payable direct.",
    meals: "Payable Direct",
    accommodation: "Hotel No. 5"
  },
  {
    day: 2,
    title: "Entebbe to Murchison Falls via Ziwa Rhino Sanctuary",
    description: "Early departure at 0700hrs. Drive through Kampala and local villages to Ziwa Rhino Sanctuary by 1130hrs. Track rhinos on foot with your local ranger. Continue to Murchison Falls National Park, arriving at your lodge early evening.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Baker's Lodge"
  },
  {
    day: 3,
    title: "Full Day in Murchison Falls National Park",
    description: "Early morning private river boat and game viewing to the delta. After picnic lunch, proceed on afternoon game drive. Evening sunset cruise along the Nile River with cheese and wine. Watch hippos and crocodiles.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Baker's Lodge"
  },
  {
    day: 4,
    title: "Second Full Day in Murchison Falls",
    description: "Morning game drive towards the Nile Delta. Board an exclusively hired river boat for game viewing. See hippos, crocodiles, elephants, and buffaloes. Trek up the spectacular Murchison Waterfalls where the Nile drops 44 meters.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Baker's Lodge"
  },
  {
    day: 5,
    title: "Chimps Tracking - Transfer to Lake Albert",
    description: "Breakfast and check-out. Transfer to Budongo Forest for chimpanzee trekking. These amazing creatures share 98.3% of their genetic code with humans. Enjoy a packed lunch and proceed to Lake Albert.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Lake Albert Safari Lodge"
  },
  {
    day: 6,
    title: "Drive to Kibale Rainforest National Park",
    description: "Depart for Kibale National Park, home to the largest chimpanzee population in Uganda. Arrive in time for lunch. In the afternoon, guided walk in Bigodi Swamp - excellent for birders and other primates.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Primate Lodge"
  },
  {
    day: 7,
    title: "Chimp Tracking - Transfer to Queen Elizabeth National Park",
    description: "Second chimpanzee tracking experience in Kibale Forest. After lunch, depart for Queen Elizabeth National Park. The drive offers scenic views of the Rwenzori Mountains.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Mweya Safari Lodge"
  },
  {
    day: 8,
    title: "Full Day in Queen Elizabeth National Park",
    description: "Extensive morning game drive. Afternoon relax by the pool. At 1600hrs, depart for about 2-hour boat cruise along the Kazinga Channel, 32km long connecting Lake George and Lake Edward. Perfect for wildlife and bird viewing.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Mweya Safari Lodge"
  },
  {
    day: 9,
    title: "Drive to Ishasha Sector - Tree Climbing Lions",
    description: "Morning game drive and breakfast. Depart for Ishasha area famous for its tree climbing lions. Arrive at your camp along the river in time for lunch. Afternoon game drive.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Ishasha Wilderness Camp"
  },
  {
    day: 10,
    title: "Transfer to Bwindi Impenetrable National Park",
    description: "Morning game drive with potential tree climbing lion sightings. Depart for Bwindi Impenetrable National Park - a 3-hour drive. Arrive at your lodge in time for late lunch. Rest of the afternoon at leisure.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Buhoma Lodge"
  },
  {
    day: 11,
    title: "1st Gorilla Trekking in Bwindi",
    description: "Early breakfast followed by transfer to park reception for check-in and gorilla trek registration. The largest of the great apes, gorillas share 98.3% of their genetic code with humans. After the trek, drive back to your lodge for lunch and rest.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Buhoma Lodge"
  },
  {
    day: 12,
    title: "2nd Gorilla Trekking in Bwindi",
    description: "Second gorilla trekking experience with a different gorilla family. In the afternoon, enjoy a self-guided walk in the nearby town or bird watching. Experiences are always different with each family.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Buhoma Lodge"
  },
  {
    day: 13,
    title: "Departure - Transfer to Entebbe",
    description: "After breakfast, transfer to Kihihi airstrip for your light scheduled flight to Entebbe. Upon arrival, transferred to Hotel No. 5 for day room use. Drop off at Entebbe International Airport for departure.",
    meals: "Breakfast"
  }
]

const pricingOptions = [
  {
    title: "Green Season",
    period: "April / May / November 2026",
    price: "7,920",
    perPerson: "per person sharing (4 pax)",
    singleSupplement: "900",
    highlights: [
      "Arrival / departure transfers in Entebbe",
      "Transport and exclusive use of custom safari built 4 x 4 Landcruiser with pop-up roof",
      "All Park entrance fees to mentioned parks",
      "English speaking driver/guide",
      "Unlimited game drives / activities as per itinerary",
      "Bed & breakfast accommodation in Entebbe, otherwise full board",
      "House drinks included at Baker's Lodge, Ishasha Wilderness Camp, Buhoma Lodge",
      "Unlimited drinking water & fruits in the car",
      "Two gorilla trekking permits",
      "One chimpanzee tracking permit",
      "Ziwa Rhino Sanctuary walk",
      "River cruises on Nile and Kazinga Channel",
      "Bigodi Swamp walk"
    ],
    notIncluded: [
      "International flights",
      "Uganda visa fees",
      "Travel insurance",
      "Tips and gratuities",
      "Personal expenses",
      "Cultural visits and school fees"
    ]
  }
]

const keyHighlights = [
  "Two gorilla trekking experiences in Bwindi",
  "Two chimpanzee tracking sessions in Kibale",
  "Murchison Falls - the world's most powerful waterfall",
  "Kazinga Channel boat cruise",
  "Tree climbing lions in Ishasha",
  "Rhino tracking at Ziwa Sanctuary",
  "Visit the source of the Nile",
  "13 days covering Uganda's prime parks"
]

const importantInfo = [
  { title: "Best Time to Visit", description: "Year-round; dry seasons (Jun-Sep, Dec-Feb) best for wildlife viewing" },
  { title: "Group Size", description: "Maximum 8 people per gorilla family visit" },
  { title: "Age Limit", description: "Minimum 15 years for gorilla and chimpanzee trekking" },
  { title: "Fitness Level", description: "Moderate - requires hiking through forest terrain" },
  { title: "What to Bring", description: "Hiking boots, long pants, rain jacket, camera with no flash" },
  { title: "Visa Requirements", description: "Uganda visa required ($50 online or on arrival)" },
  { title: "Yellow Fever", description: "Yellow fever certificate required" }
]

export default function UgandaDiscoverUganda() {
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
          alt="Discover Uganda Safari" 
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
          <span className="text-[#D4A03A]">Discover Uganda</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            DISCOVER UGANDA
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            13 Days / 12 Nights - From $7,920
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
                <p className="font-semibold">13 Days / 12 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Destinations</p>
                <p className="font-semibold">6 National Parks</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Price From</p>
                <p className="font-semibold">$7,920 pp</p>
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
              THE PEARL OF AFRICA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Discover Uganda Safari is suitable for those looking to explore Uganda's prime parks including touring the world's longest river, THE NILE. This comprehensive 13-day journey takes you through the heart of East Africa's most diverse landscapes.
              </p>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-8">
                Other highlights include chimpanzee and gorilla trekking, boat cruises on The Nile and Kazinga Channel, as well as game drives in the respective national parks. Uganda truly lives up to its name as the "Pearl of Africa" with its stunning biodiversity.
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
              <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Safari Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mountain className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Murchison Falls</p>
                    <p className="text-[#2C3E50]/70 text-sm">World's most powerful waterfall</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TreePine className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Bwindi Impenetrable Forest</p>
                    <p className="text-[#2C3E50]/70 text-sm">Home to half the world's gorillas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Bird className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Kibale Forest</p>
                    <p className="text-[#2C3E50]/70 text-sm">Largest chimp population in Uganda</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Ship className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Kazinga Channel</p>
                    <p className="text-[#2C3E50]/70 text-sm">32km boat cruise with abundant wildlife</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Camera className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Tree Climbing Lions</p>
                    <p className="text-[#2C3E50]/70 text-sm">Unique behavior in Ishasha sector</p>
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
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#2C3E50]/80">4 pax</span>
                      <span className="font-bold text-[#D4A03A]">${option.price}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#D4C5B9] flex justify-between text-sm">
                    <span className="text-[#2C3E50]/80">Single Room Supplement</span>
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
            READY TO DISCOVER UGANDA?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Let us create your perfect Uganda safari experience.
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
              <p className="text-white/60 text-sm">info@raysofafrica.com</p>
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