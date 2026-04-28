import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Calendar, DollarSign, Star, CheckCircle, ChevronDown, Plane, Mountain, Camera, Ship } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Arrival in Nairobi",
    description: "Upon your arrival at the Jomo Kenyatta International Airport, you will be met and transferred to the Four Points by Sheraton Nairobi Airport Hotel for an overnight stay. Depending on your arrival, we can arrange excursions (extra cost) such as visits to the famous Daphne Sheldrick Elephant Orphanage where you can see baby elephants at play, Giraffe Centre where you come in close contact with the endangered Rothschild Giraffes, Karen Blixen Museum, Nairobi National Park, City tour & shopping.",
    meals: "Bed & Breakfast",
    accommodation: "Four Points by Sheraton"
  },
  {
    day: 2,
    title: "Nairobi - Amboseli National Park (Approx.4.5 Hrs)",
    description: "Pick up from your Nairobi hotel in the morning and depart for Amboseli National Park. Lunch on arrival at your safari lodge followed by an afternoon game drive to view Kenya's largest elephant herds, buffalo and plains game. Dinner and overnight in Soroi Amboseli Camp.",
    meals: "Full Board",
    accommodation: "Soroi Amboseli Camp"
  },
  {
    day: 3,
    title: "Full day Amboseli National Park",
    description: "We recommend an early morning wake up to experience excellent game viewing & an unprecedented view of the snow-capped Mt. Kilimanjaro (weather permitting). Lunch followed by an afternoon game drive. Dinner and overnight in Soroi Amboseli Camp.",
    meals: "Full Board",
    accommodation: "Soroi Amboseli Camp"
  },
  {
    day: 4,
    title: "Amboseli – Namanga border – Arusha – Tarangire NP",
    description: "After an early breakfast depart for Namanga border. Upon arrival you will be met by our sister company, 4x4 Adventures and transferred to Arusha town for lunch at the Cultural Heritage Restaurant. Continue to Tarangire National Park. Dinner & overnight in Tarangire Sopa Lodge.",
    meals: "Full Board",
    accommodation: "Tarangire Sopa Lodge"
  },
  {
    day: 5,
    title: "Tarangire – Ngorongoro Conservation Area",
    description: "After Breakfast, depart for a full morning game drive in the park with a packed lunch. Ranked 6th largest National Park in Tanzania and covering an area of 2,600 sq. km, Tarangire National Park is most popular for its large elephant herds and mini-wildlife migration that takes place during the dry season. In the afternoon continue to Ngorongoro Rim Lodge for dinner and overnight.",
    meals: "Full Board",
    accommodation: "Ngorongoro Rim Lodge"
  },
  {
    day: 6,
    title: "Full day in Ngorongoro Conservation Area",
    description: "Breakfast and descend into the world-renowned crater. A jewel in Ngorongoro's crown, this is a deep, volcanic crater, the largest unflooded and unbroken caldera in the world. Enjoy a full day's game viewing on the magnificent crater floor. Later, ascend the crater and drive to your accommodation for leisure and rest. Dinner & overnight in Ngorongoro Rim Lodge.",
    meals: "Full Board",
    accommodation: "Ngorongoro Rim Lodge"
  },
  {
    day: 7,
    title: "Ngorongoro – Serengeti National Park (Approx. 4.5 Hrs drive)",
    description: "After breakfast depart for Serengeti National Park with a packed lunch. Embark on a game drive on your arrival. The vast savannah plains of Serengeti host the movement of two million wildebeests joined by thousands of gazelles and zebras – followed by their predators in their annual migration. Dinner & overnight in Kubu Kubu Tented Lodge.",
    meals: "Full Board",
    accommodation: "Kubu Kubu Tented Lodge"
  },
  {
    day: 8,
    title: "Full day in Serengeti National Park",
    description: "Spend full days in central Serengeti with unlimited game drives during the day. Packed breakfast / lunches can be arranged. Meals & overnight in Kubu Kubu Tented Lodge.",
    meals: "Full Board",
    accommodation: "Kubu Kubu Tented Lodge"
  },
  {
    day: 9,
    title: "Full day in Serengeti National Park",
    description: "Spend another full day in Serengeti with unlimited game drives. The park's biological diversity is very high with at least four globally threatened or endangered animal species: black rhino, elephant, wild dog, and cheetah. Meals & overnight in Kubu Kubu Tented Lodge.",
    meals: "Full Board",
    accommodation: "Kubu Kubu Tented Lodge"
  },
  {
    day: 10,
    title: "Serengeti – Lake Victoria (approx. 4 Hrs drive)",
    description: "After breakfast depart for Lake Victoria to arrive for lunch. Afternoon at leisure to undertake any activities available at the Lodge at extra cost. Dinner and overnight will be in Serenity on the Lake.",
    meals: "Full Board",
    accommodation: "Serenity on the Lake"
  },
  {
    day: 11,
    title: "Lake Victoria – Isebania border – Maasai Mara National Reserve",
    description: "After an early breakfast, you will be transferred to Isabenia Border, where you will process immigration formalities and thereafter proceed with our Sunworld Safaris driver/vehicle to the Maasai Mara. Late lunch on arrival and enjoy your first game drive in search of the famous 'BIG FIVE' animals. Dinner and overnight in Soroi Mara Bush Camp.",
    meals: "Full Board",
    accommodation: "Soroi Mara Bush Camp"
  },
  {
    day: 12,
    title: "Full day in Maasai Mara Game Reserve",
    description: "Spend full days in the Maasai Mara with unlimited game drives during the day at your convenience. You may opt for packed breakfasts or lunches to enjoy by a scenic spot. Meals and overnight in Soroi Mara Bush Camp.",
    meals: "Full Board",
    accommodation: "Soroi Mara Bush Camp"
  },
  {
    day: 13,
    title: "Full day in Maasai Mara Game Reserve",
    description: "Another full day in the Maasai Mara. The reserve is famous for the annual migration of wildebeest and zebra, and for its numerous Nile crocodiles and hippos. Meals and overnight in Soroi Mara Bush Camp.",
    meals: "Full Board",
    accommodation: "Soroi Mara Bush Camp"
  },
  {
    day: 14,
    title: "Maasai Mara National Reserve – Lake Nakuru National Park (Approx.5.5 Hrs drive)",
    description: "After an early breakfast leave for Lake Nakuru National Park. Late lunch on arrival at your safari Lodge. Afternoon game drive around the scenic lake for wildlife sightings as well as spotting the black and southern white rhinos and the endangered Rothschild's Giraffe. Other attractions are the Makalia Falls and the famous Baboon cliff. Dinner & overnight will be in Nakuru Sopa Lodge.",
    meals: "Full Board",
    accommodation: "Nakuru Sopa Lodge"
  },
  {
    day: 15,
    title: "Lake Nakuru – Lake Naivasha",
    description: "Early morning game drive. After a relaxed breakfast drive to Lake Naivasha arriving for lunch. Afternoon will be spent enjoying a boat ride on the lake as well as a visit to the nearby Crescent Island where you can walk amongst game such as giraffes, waterbucks, zebras etc. Dinner and overnight at the Naivasha Sopa Resort.",
    meals: "Full Board",
    accommodation: "Naivasha Sopa Lodge"
  },
  {
    day: 16,
    title: "Lake Naivasha – Nairobi",
    description: "Depart for Nairobi after a leisurely breakfast. On arrival enjoy a few hours of shopping or sightseeing before your transfer to the JKIA for your Int. flight departure. Day room, meals can be arranged at extra cost. END OF SERVICES!",
    meals: "Breakfast"
  }
]

const pricingOptions = [
  {
    title: "Green Season",
    period: "04th January – 31st March 2026",
    tiers: [
      { pax: "2 pax", price: "10,200" },
      { pax: "4 pax", price: "8,500" },
      { pax: "6 pax", price: "7,900" }
    ]
  },
  {
    title: "Low Season",
    period: "01st April – 31st May 2026",
    tiers: [
      { pax: "2 pax", price: "9,200" },
      { pax: "4 pax", price: "7,500" },
      { pax: "6 pax", price: "6,900" }
    ]
  },
  {
    title: "Peak Season",
    period: "01st June – 31st October 2026",
    tiers: [
      { pax: "2 pax", price: "11,900" },
      { pax: "4 pax", price: "10,100" },
      { pax: "6 pax", price: "9,500" }
    ]
  },
  {
    title: "High Season",
    period: "01st November – 19th December 2026",
    tiers: [
      { pax: "2 pax", price: "10,500" },
      { pax: "4 pax", price: "8,700" },
      { pax: "6 pax", price: "8,200" }
    ]
  }
]

const keyHighlights = [
  "Visit both Kenya and Tanzania in one epic journey",
  "Witness the Great Migration in Serengeti",
  "Game drives in all major parks: Amboseli, Tarangire, Ngorongoro, Serengeti, Maasai Mara, Lake Nakuru",
  "Scenic drive through the Great Rift Valley",
  "Boat ride in Lake Naivasha & visit to Crescent Island",
  "Cross border experience (Namanga to Isebania)",
  "View Mount Kilimanjaro from Amboseli",
  "See the Big Five across multiple parks"
]

const importantInfo = [
  { title: "Best Time to Visit", description: "June-October for best game viewing, December-March for calving season" },
  { title: "Group Size", description: "Minimum 2 guests, maximum 6 per vehicle" },
  { title: "Transport", description: "4x4 Safari Landcruiser in Kenya, Toyota Landcruiser in Tanzania" },
  { title: "Visa Requirements", description: "Kenya visa ($50) and Tanzania visa ($50) - EAC visa available for $100" },
  { title: "What to Bring", description: "Binoculars, camera, comfortable clothing, hiking boots, sunscreen" },
  { title: "Health", description: "Yellow fever certificate recommended, malaria prophylaxis advised" }
]

export default function KenyaTanzaniaSafari() {
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
          alt="Kenya Tanzania Safari" 
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
          <span className="text-[#D4A03A]">Kenya Tanzania Safari</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            KENYA TANZANIA SAFARI
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            16 Days / 15 Nights - From $7,150
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
                <p className="font-semibold">16 Days / 15 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Destinations</p>
                <p className="font-semibold">Kenya & Tanzania</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Price From</p>
                <p className="font-semibold">$7,150 pp</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Best Time</p>
                <p className="font-semibold">June-Oct</p>
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
              COMBINED KENYA & TANZANIA SAFARI
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Explore your favourite spots in both Kenya and Tanzania with fantastic game viewing throughout the year! You'll be staying at Amboseli Serena Lodge through May 2026, after which you can look forward to experiencing our new luxury safari camp, Soroi Amboseli, from June onwards.
              </p>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-8">
                This comprehensive 16-day journey takes you through the best parks in both countries, including the Serengeti, Ngorongoro Crater, Maasai Mara, and Amboseli with stunning views of Mount Kilimanjaro.
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
                    <p className="font-semibold text-[#2C3E50]">Mount Kilimanjaro Views</p>
                    <p className="text-[#2C3E50]/70 text-sm">See Africa's highest peak from Amboseli</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Plane className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Border Crossing Experience</p>
                    <p className="text-[#2C3E50]/70 text-sm">Cross from Kenya to Tanzania via Namanga</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Camera className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Big Five Across Multiple Parks</p>
                    <p className="text-[#2C3E50]/70 text-sm">See lions, leopards, rhinos, elephants, buffalo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Ship className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Lake Victoria & Naivasha</p>
                    <p className="text-[#2C3E50]/70 text-sm">Boat rides and Crescent Island walk</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{option.title}</h3>
                  <p className="text-[#2C3E50]/60 text-sm">{option.period}</p>
                </div>
                
                <div className="space-y-3">
                  {option.tiers?.map((tier, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-[#D4C5B9] pb-2">
                      <span className="text-[#2C3E50]/80">{tier.pax}</span>
                      <span className="font-bold text-[#D4A03A]">${tier.price}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className="block text-center mt-6 py-3 rounded-full font-semibold transition-all bg-[#D4A03A] text-white hover:bg-[#B8922F]"
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
            READY FOR THE ULTIMATE SAFARI?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Experience the best of Kenya and Tanzania in one incredible journey.
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
               <p className="text-white/60 text-sm">info@rootsofafricasafari.com</p>
              <p className="text-white/60 text-sm">+254791323799</p>
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