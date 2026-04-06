import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Clock, DollarSign, Star, CheckCircle, X, Users, Car, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Arrival in Arusha",
    description: "Upon arrival at Kilimanjaro International Airport, you will be met by our representative and transferred to your lodge in Arusha. Enjoy a welcome dinner and briefing about your upcoming adventure.",
    meals: "Dinner",
    accommodation: "Legendary Lodge or similar"
  },
  {
    day: 2,
    title: "Flight to Ndutu / Southern Serengeti",
    description: "After breakfast, transfer to Arusha Airport for your scenic flight to Ndutu Airstrip. Upon arrival, meet your private safari guide and depart for an afternoon game drive in the Ndutu region, famous for the wildebeest calving season (December-March).",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Into Wild Africa Camp or similar"
  },
  {
    day: 3,
    title: "Full Day in Southern Serengeti",
    description: "Embark on a full day exploring the endless plains. Witness the dramatic interactions between predators and prey as thousands of wildebeest, zebra, and gazelle graze across the landscape. The concentration of wildlife here is unparalleled.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Into Wild Africa Camp or similar"
  },
  {
    day: 4,
    title: "Drive to Central Serengeti",
    description: "After morning game drive and breakfast, depart for Central Serengeti. The journey takes you through various landscapes with excellent game viewing opportunities along the way. Arrive at your camp in time for lunch and afternoon rest.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Cherero Camp or similar"
  },
  {
    day: 5,
    title: "Full Day Central Serengeti",
    description: "Spend the day exploring the central Serengeti, famous for its resident lion prides and leopard sightings. The vast savanna provides endless opportunities for wildlife photography. Evening game drive returns to camp.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Cherero Camp or similar"
  },
  {
    day: 6,
    title: "Drive to Ngorongoro Crater",
    description: "Morning game drive en-route to Ngorongoro Conservation Area. Descend into the crater for an afternoon game drive in this UNESCO World Heritage Site. The crater is home to an incredible density of wildlife.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Ngorongoro Serena Safari Lodge or similar"
  },
  {
    day: 7,
    title: "Ngorongoro Crater & Return to Arusha",
    description: "Early morning game drive in the crater floor. After morning game drive and breakfast, ascend the crater and drive back to Arusha. Stop for lunch at a local restaurant en-route. Evening transfer to the airport for departure.",
    meals: "Breakfast, Lunch"
  },
  {
    day: 8,
    title: "Departure",
    description: "After breakfast, transfer to Kilimanjaro International Airport for your departure flight.",
    meals: "Breakfast"
  }
]

const pricingOptions = [
  {
    title: "Mid-Range Package",
    price: "$8,052",
    perPerson: "per person",
    groupSize: "2+ guests",
    highlights: ["Quality tented camps with en-suite", "Private 4x4 Land Cruiser", "Expert English-speaking guide", "All park fees included", "All meals during safari"],
    notIncluded: ["International flights", "Visa fees", "Travel insurance", "Personal expenses", "Tips and gratuities"]
  },
  {
    title: "Luxury Fly-In Package",
    price: "$12,500",
    perPerson: "per person",
    groupSize: "2+ guests",
    isPopular: true,
    highlights: ["Luxury tented camps", "Domestic flights between camps", "Private game drives", "Premium beverages", "All park fees included", "Full board"],
    notIncluded: ["International flights", "Visa fees", "Travel insurance", "Personal expenses", "Tips"]
  }
]

const keyHighlights = [
  "Witness the Great Wildebeest Migration",
  "Explore the Ngorongoro Crater",
  "Luxury tented camps in prime locations",
  "Expert local safari guides",
  "Private 4x4 game drive vehicles",
  "Full-board dining experience"
]

const importantInfo = [
  { title: "Best Time to Visit", description: "December-March for calving season, June-October for migration river crossings" },
  { title: "Group Size", description: "Minimum 2 guests, maximum 6 guests per vehicle" },
  { title: "Weather", description: "Warm days (25-30°C), cool nights (10-15°C). Rainy season November-May." },
  { title: "Health", description: "Yellow fever vaccination required. Malaria prophylaxis recommended." },
  { title: "What to Bring", description: "Light layers, binoculars, camera with zoom lens, sunscreen, insect repellent" }
]

export default function TanzaniaWildebeestSafari() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
          src="/serengeti-hero.jpg" 
          alt="Serengeti Wildebeest Safari" 
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
          <span className="text-[#D4A03A]">Serengeti Wildebeest Safari</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            SERENGETI<br/>WILDEBEEST SAFARI
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            8 Days / 7 Nights - From $8,052
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
                <p className="font-semibold">8 Days / 7 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Destinations</p>
                <p className="font-semibold">Serengeti, Ngorongoro</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Price From</p>
                <p className="font-semibold">$8,052 pp</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Best Time</p>
                <p className="font-semibold">Dec-Mar, Jun-Oct</p>
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
              WITNESS THE GREAT MIGRATION
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Experience one of nature's most spectacular events on this 8-day Serengeti Wildebeest Safari. Witness the Great Migration as millions of wildebeest, zebra, and gazelle cross the endless plains in search of fresh grazing.
              </p>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-8">
                Your journey takes you through the heart of Tanzania's most iconic wildlife destinations, from the calving grounds of Ndutu to the depths of Ngorongoro Crater. Stay in carefully selected luxury tented camps that offer comfort while maintaining an authentic safari atmosphere.
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
                    <p className="font-semibold text-[#2C3E50]">Ngorongoro & Serengeti</p>
                    <p className="text-[#2C3E50]/70 text-sm">Two UNESCO World Heritage Sites</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">8 Days / 7 Nights</p>
                    <p className="text-[#2C3E50]/70 text-sm">Full-board safari experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Private 4x4 Vehicle</p>
                    <p className="text-[#2C3E50]/70 text-sm">Exclusive game drives</p>
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

      {/* Route Map Section */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-4">Safari Route</h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">1</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Arusha</p>
                <p className="text-sm text-[#2C3E50]/70">Day 1</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">2</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Ndutu</p>
                <p className="text-sm text-[#2C3E50]/70">Days 2-3</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">3</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Central Serengeti</p>
                <p className="text-sm text-[#2C3E50]/70">Days 4-5</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">4</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Ngorongoro</p>
                <p className="text-sm text-[#2C3E50]/70">Day 6</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">5</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Arusha</p>
                <p className="text-sm text-[#2C3E50]/70">Days 7-8</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Itinerary */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Your Journey</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">BRIEF ITINERARY</h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {itinerary.slice(0, 4).map((day, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4A03A] text-white flex items-center justify-center font-bold text-xl">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-[#2C3E50]">{day.title}</h3>
                    <p className="text-[#2C3E50]/70">{day.meals}</p>
                  </div>
                  <ChevronDown 
                    className={`text-[#D4A03A] transition-transform ${openDay === index ? 'rotate-180' : ''}`}
                    onClick={() => toggleDay(index)}
                  />
                </div>
                {openDay === index && (
                  <div className="mt-4 pt-4 border-t border-[#D4A03A]/20">
                    <p className="text-[#2C3E50] leading-relaxed">{day.description}</p>
                    <p className="text-[#D4A03A] font-semibold mt-2">{day.accommodation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="#detailed-itinerary" className="text-[#D4A03A] font-semibold hover:underline inline-flex items-center gap-2">
              View Full 8-Day Itinerary <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section id="detailed-itinerary" className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
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
              <div key={index} className={`bg-white rounded-3xl p-8 ${option.isPopular ? 'ring-4 ring-[#D4A03A] relative' : 'shadow-xl'}`}>
                {option.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A03A] text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-display font-bold text-2xl text-[#2C3E50] mb-2">{option.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-[#D4A03A]">{option.price}</span>
                    <span className="text-[#2C3E50]/70">/ {option.perPerson}</span>
                  </div>
                  <p className="text-[#2C3E50]/60 mt-2">{option.groupSize}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-[#2C3E50]">What's Included:</h4>
                  {option.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-[#D4A03A] flex-shrink-0" size={18} />
                      <span className="text-[#2C3E50]/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-8">
                  <h4 className="font-semibold text-[#2C3E50]">Not Included:</h4>
                  {option.notIncluded.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <X className="text-red-500 flex-shrink-0" size={18} />
                      <span className="text-[#2C3E50]/60">{item}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className={`block text-center py-4 rounded-full font-semibold transition-all ${
                    option.isPopular 
                      ? 'bg-[#D4A03A] text-white hover:bg-[#B8922F]' 
                      : 'bg-[#2C3E50] text-white hover:bg-[#1a252f]'
                  }`}
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

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Questions</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              { q: "When is the best time to see the wildebeest migration?", a: "The best time depends on what you want to see. December-March is ideal for the calving season in Ndutu. June-October is perfect for witnessing the dramatic river crossings at the Mara River." },
              { q: "Is this safari suitable for families?", a: "Yes, this safari is suitable for families with children aged 6 and above. We can adjust the itinerary to accommodate younger children and provide child-friendly accommodations." },
              { q: "What kind of vehicles are used?", a: "We use private 4x4 Land Cruisers with pop-up roofs for optimal game viewing. Each vehicle has charging ports and a cooler box for your convenience." },
              { q: "Are all meals included?", a: "Yes, full-board meals are included throughout the safari. This includes breakfast, lunch, and dinner at the lodges and camps." }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-[#2C3E50] text-lg">{faq.q}</span>
                  <ChevronDown 
                    className={`text-[#D4A03A] transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#2C3E50]/80">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            READY TO WITNESS THE MIGRATION?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Let us create your perfect safari experience. Contact us today to start planning your adventure.
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
              <h3 className="font-display font-bold text-2xl mb-4">Luxury Rays<br/>of Africa</h3>
              <p className="text-white/60">Crafting unforgettable safari experiences across East Africa.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/destinations" className="block text-white/60 hover:text-[#D4A03A]">Destinations</Link>
                <Link to="/safari-types" className="block text-white/60 hover:text-[#D4A03A]">Safari Types</Link>
                <Link to="/packages" className="block text-white/60 hover:text-[#D4A03A]">Packages</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <div className="space-y-2">
                <Link to="/first-safari" className="block text-white/60 hover:text-[#D4A03A]">First Timer's Guide</Link>
                <Link to="/best-time-to-visit" className="block text-white/60 hover:text-[#D4A03A]">Best Time to Visit</Link>
                <Link to="/what-to-pack" className="block text-white/60 hover:text-[#D4A03A]">What to Pack</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/60">raysofafrica254@gmail.com</p>
              <p className="text-white/60">0791323799</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}