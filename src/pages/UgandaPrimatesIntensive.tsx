import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Calendar, DollarSign, Star, CheckCircle, X, Users, Car, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Arrival in Entebbe",
    description: "Arrival at Entebbe Int. Airport. You will be met and transferred to Protea Hotel. Transfer to the jetty for Mabamba excursion (boat departs at 1400 hours). You will board a small Mokoro (dugout boat) to explore the narrow canals of the Papyrus marsh, searching for the legendary Shoebill stork - named after its mighty beak and one of Uganda's landmarks. Return to your hotel for overnight stay. (Bed & Breakfast)",
    meals: "Dinner",
    accommodation: "Protea Hotel"
  },
  {
    day: 2,
    title: "Mabamba Excursion & Transfer to Kibale",
    description: "Early breakfast and transfer to Entebbe International Airport for your morning scheduled flight to Kasese (ETD 0700 ETA 1005). Baggage allowance is strictly 15kg in soft-sided duffel bags. Upon arrival, you will be met and transferred to your lodge (approximately 2 hours) for lunch. Check in and the rest of the day at leisure. Dinner and overnight at The Primate Lodge - Luxury cottage (Full Board)",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "The Primate Lodge"
  },
  {
    day: 3,
    title: "Full Day Kibale - Chimpanzee Trekking & Bigodi Swamp",
    description: "Breakfast at your lodge and transfer to the chimpanzee trekking base. After a brief orientation, start your trek with your local ranger to see these amazing creatures. Chimps are highly social animals, care for their offspring for years and can live to be over 50 years. The probability of finding the primates is 95%. Over 300 species of birds and 140 species of butterflies make the forest an oasis for nature lovers. The chimpanzee trekking takes about 2-4 hours covering 3-5km. Afternoon guided walk in Bigodi Swamp, excellent for birders and other primates. All meals and overnight at The Primate Lodge - Luxury cottage (Full Board)",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "The Primate Lodge"
  },
  {
    day: 4,
    title: "Drive to Queen Elizabeth National Park",
    description: "In the morning proceed to Queen Elizabeth National Park driving along the mighty Rwenzori Mountains to arrive at your accommodation in time for lunch. Rest of the evening at your leisure with dinner and overnight in Elephant Plains Lodge - Luxury cottage (Full Board)",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Elephant Plains Lodge"
  },
  {
    day: 5,
    title: "Full Day Queen Elizabeth - Kazinga Channel Cruise",
    description: "Breakfast at the lodge and depart for a full day game drive with packed lunches in search for lions, buffalos, elephants, Uganda Kobs and other antelopes. In the afternoon embark on a boat cruise on the Kazinga Channel (approximately 2 hours). In addition to the hippos and crocodiles in the water, you can see much wildlife near the shore - a great opportunity to observe the animals from the boat up close and take pictures. Return to your lodge for dinner and overnight at Elephant Plains Lodge - Luxury cottage (Full Board)",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Elephant Plains Lodge"
  },
  {
    day: 6,
    title: "Drive to Ishasha - Tree Climbing Lions",
    description: "Depart after breakfast for Ishasha area, famous for its tree climbing lions that can sometimes be spotted resting in the branches of the large fig trees. Arrive at your camp set along a river in time for lunch. Afternoon game drive at your convenience. Dinner and overnight at Ishasha Wilderness Camp - Standard tent (Full Board)",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Ishasha Wilderness Camp"
  },
  {
    day: 7,
    title: "Drive to Bwindi Impenetrable National Park",
    description: "Depart after breakfast and drive to Bwindi Impenetrable National Park, home to half of the world's endangered mountain gorillas. Check in on arrival and enjoy the rest of the day at your leisure. Dinner and overnight in Mahogany Springs Lodge - Superior room (Full Board) with laundry services, a glass of wine or beer or soft drink at dinner, and visit to Ride 4 a Woman and Buhoma hospital",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Mahogany Springs Lodge"
  },
  {
    day: 8,
    title: "Gorilla Trekking in Bwindi",
    description: "Early breakfast at your lodge followed by transfer to the park reception for check-in/registration of your Bwindi Forest gorilla trek adventure. The largest of the great apes, gorillas share 98.3% of their genetic code with humans, making them our closest cousins after chimpanzees and bonobos. After the trek, drive to your lodge for lunch. Rest of the day at leisure with dinner and overnight in Mahogany Springs Lodge - Superior room (Full Board)",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Mahogany Springs Lodge"
  },
  {
    day: 9,
    title: "Drive to Lake Mburo National Park",
    description: "After an early breakfast, head to Lake Mburo National Park, Uganda's smallest national park. It offers beautiful scenery and bird paradise. More than 250 different species such as the papyrus bush shrike, black-headed lapwing or the white winged warbler can be found here. Afternoon game drive to view Buffalo, Eland, Oris and other animals. Dinner and overnight in Kigambira Safari Lodge - Deluxe Banda (Full Board)",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Kigambira Safari Lodge"
  },
  {
    day: 10,
    title: "Return to Entebbe - Departure",
    description: "Check out after an early breakfast and embark on a morning game drive before your departure for Entebbe. Short stopover at the equator in Kayabwe. Lunch on arrival and thereafter drop off at Entebbe International Airport for your international flight departure. END OF SERVICES!",
    meals: "Breakfast, Lunch"
  }
]

const pricingOptions = [
  {
    title: "High Season",
    period: "Jan-Feb, June-Sept & Dec 2026",
    price: "7,500",
    perPerson: "per person sharing (4 pax)",
    singleSupplement: "1,406",
    tiers: [
      { pax: "2 pax", price: "8,700" },
      { pax: "4 pax", price: "7,500" },
      { pax: "6 pax", price: "7,900" }
    ],
    highlights: [
      "Airport transfers on arrival and departure in Entebbe",
      "Transport in custom 7-seater safari land cruiser",
      "English-speaking driver/guide",
      "Park entrance fees",
      "One Gorilla trek permit",
      "One Chimp trek permit",
      "Swamp walk in Bigodi area",
      "Shared Kazinga channel cruise",
      "Mabamba excursion (Shoebill tour)",
      "Scheduled one-way flight Entebbe/Kasese",
      "1 night bed & breakfast at Protea Hotel Entebbe (deluxe rooms)",
      "2 nights full board at Primate Lodge (luxury cottages)",
      "2 nights full board at Elephant Plains Lodge (luxury cottages)",
      "1 night full board at Ishasha Wilderness Camp (standard tents)",
      "2 nights full board at Mahogany Springs Lodge (superior room)",
      "1 night full board at Kigambira Safari Lodge (deluxe bandas)",
      "Laundry services at Mahogany Springs",
      "Glass of wine/beer/soft drink at dinner at Mahogany Springs",
      "Visit to Ride 4 a Woman and Buhoma hospital",
      "Unlimited bottled mineral water in vehicle",
      "Emergency medical evacuation insurance"
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
    period: "March-May & Oct-Nov 2026",
    price: "7,100",
    perPerson: "per person sharing (4 pax)",
    singleSupplement: "1,390",
    tiers: [
      { pax: "2 pax", price: "8,300" },
      { pax: "4 pax", price: "7,100" },
      { pax: "6 pax", price: "7,500" }
    ],
    highlights: [
      "Airport transfers on arrival and departure in Entebbe",
      "Transport in custom 7-seater safari land cruiser",
      "English-speaking driver/guide",
      "Park entrance fees",
      "One Gorilla trek permit",
      "One Chimp trek permit",
      "Swamp walk in Bigodi area",
      "Shared Kazinga channel cruise",
      "Mabamba excursion (Shoebill tour)",
      "Scheduled one-way flight Entebbe/Kasese",
      "1 night bed & breakfast at Protea Hotel Entebbe (deluxe rooms)",
      "2 nights full board at Primate Lodge (luxury cottages)",
      "2 nights full board at Elephant Plains Lodge (luxury cottages)",
      "1 night full board at Ishasha Wilderness Camp (standard tents)",
      "2 nights full board at Mahogany Springs Lodge (superior room)",
      "1 night full board at Kigambira Safari Lodge (deluxe bandas)",
      "Laundry services at Mahogany Springs",
      "Glass of wine/beer/soft drink at dinner at Mahogany Springs",
      "Visit to Ride 4 a Woman and Buhoma hospital",
      "Unlimited bottled mineral water in vehicle",
      "Emergency medical evacuation insurance"
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
  "Gorilla and Chimpanzee trekking combined",
  "Shoebill stork excursion at Mabamba",
  "Tree-climbing lions in Ishasha",
  "Kazinga Channel boat cruise",
  "Queen Elizabeth & Lake Mburo game drives",
  "10 Days covering Uganda's prime parks"
]

const importantInfo = [
  { title: "Best Time to Visit", description: "June-September and December-February for dry season" },
  { title: "Group Size", description: "Minimum 2 guests, maximum 6 per vehicle" },
  { title: "Age Limit", description: "Minimum 15 years for primate trekking" },
  { title: "Fitness Level", description: "Moderate - requires hiking in forests and savanna" },
  { title: "What to Bring", description: "Hiking boots, binoculars, camera, rain gear, layers" }
]

export default function UgandaPrimatesIntensive() {
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
          alt="Primates Intensive Uganda" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/uganda-safaris" className="hover:text-[#D4A03A] transition-colors">Uganda</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Primates Intensive</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            PRIMATES<br/>INTENSIVE SAFARI
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            10 Days / 9 Nights - From $5,390
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
                <p className="font-semibold">Kibale, Queen Elizabeth, Bwindi</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-[#D4A03A]" size={24} />
              <div>
                <p className="text-xs text-white/60 uppercase">Price From</p>
                <p className="font-semibold">$5,390 pp</p>
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
              UGANDA'S PRIMATE PARADISE
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                This itinerary is perfect for anyone interested in an in-depth primate experience, featuring Gorillas, Chimpanzees, and other primate species.
              </p>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-8">
                Visit Kibale Forest - home to one of the highest concentrations of Chimpanzees in East Africa, followed by bird-rich wetlands at Mabamba, renowned for the elusive Shoebill. Complete your journey in the savannahs of Queen Elizabeth and Lake Mburo National Parks.
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
                    <p className="font-semibold text-[#2C3E50]">4 Prime National Parks</p>
                    <p className="text-[#2C3E50]/70 text-sm">Kibale, Queen Elizabeth, Bwindi, Lake Mburo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Gorilla & Chimp Treks</p>
                    <p className="text-[#2C3E50]/70 text-sm">Both permits included</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Car className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Private 4x4 Vehicle</p>
                    <p className="text-[#2C3E50]/70 text-sm">English-speaking guide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="text-[#D4A03A] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Boat Cruises</p>
                    <p className="text-[#2C3E50]/70 text-sm">Kazinga Channel & Mabamba</p>
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
                <p className="font-semibold text-[#2C3E50]">Entebbe</p>
                <p className="text-sm text-[#2C3E50]/70">Day 1</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">2</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Kibale</p>
                <p className="text-sm text-[#2C3E50]/70">Days 2-3</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">3</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Queen Elizabeth</p>
                <p className="text-sm text-[#2C3E50]/70">Days 4-6</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">4</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Bwindi</p>
                <p className="text-sm text-[#2C3E50]/70">Days 7-8</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">5</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Lake Mburo</p>
                <p className="text-sm text-[#2C3E50]/70">Day 9</p>
              </div>
            </div>
            <div className="hidden md:block text-[#D4A03A] text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-white flex items-center justify-center font-bold">6</div>
              <div>
                <p className="font-semibold text-[#2C3E50]">Entebbe</p>
                <p className="text-sm text-[#2C3E50]/70">Day 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
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
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
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
                    <span className="text-[#2C3E50]/80">Single Room Supplement</span>
                    <span className="font-bold text-[#D4A03A]">${option.singleSupplement} pp</span>
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
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
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
            READY FOR THE PRIMATE EXPERIENCE?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Combine gorilla and chimpanzee trekking in one unforgettable journey.
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
                <img src="/logo4.png" alt="Rays of Africa Logo" className="h-16" />
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
              <p className="text-white/60 text-sm">+254 700 000000</p>
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