import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Calendar, DollarSign, Star, CheckCircle, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kigali",
    description: "On arrival at Kigali International Airport, you will be welcomed by our representative, who will transfer you to the Hotel and assist you at check in. The rest of your day will be spent at leisure.",
    meals: "Dinner on own arrangement",
    accommodation: "Kigali Marriott Hotel"
  },
  {
    day: 2,
    title: "Kigali - Nyungwe Forest National Park",
    description: "After breakfast, drive to Butare, the cultural heart of Rwanda and home to the former Mwami Palace (King's Palace), as well as several Universities. Also visit the Butare National Museum – a fascinating Ethnographic Museum containing items of traditional clothing, maps, photographs and historical artifacts. After lunch at a local restaurant in Butare, continue on to Nyungwe National Park.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "One & Only Nyungwe House"
  },
  {
    day: 3,
    title: "Nyungwe Forest National Park – Chimpanzee Trekking",
    description: "Today you will enjoy an early breakfast at your lodge before embarking on a thrilling hike in search of Chimpanzee Communities. The Rwandan chimpanzee population is thought to consist of approx. 400-600 individuals, confined to the Nyungwe National Park. Prepare to hear these excitable primates before you see them, as their pant-hoots travel through the deep forest. After lunch, you may depart for Canopy walk.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "One & Only Nyungwe House"
  },
  {
    day: 4,
    title: "Lake Kivu",
    description: "After breakfast you will check out from your Lodge with picnic lunch boxes and drive along the shores of lake Kivu to Gisenyi, a picturesque lakeside town on the border of the Democratic Republic of the Congo, often referred to as the 'Martha's Vineyard of Rwanda' with its pretty shoreline and colonial-style hotels. Spend the rest of your day at leisure, exploring the local area.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Lake Kivu Serena Hotel"
  },
  {
    day: 5,
    title: "Ruhengeri",
    description: "Enjoy breakfast at the Hotel followed by Leisure the rest of your morning. After enjoying Lunch at the Lodge you will depart to the Volcanoes National park. The journey passes through the beautiful terraced hill sides that characterize much of Rwanda's landscape.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Sabyinyo Silverback Lodge"
  },
  {
    day: 6,
    title: "Gorilla Trekking in Volcanoes National Park",
    description: "Today you will have the rare opportunity to observe the famous Rwandan mountain gorillas (subject to gorilla permits being available). Tracking the gorillas through the forested slopes of the Virungas is a magical experience. If you are lucky you can get to the gorillas, spend an hour with them, and be back at the base in time for a late lunch.",
    meals: "Breakfast, Lunch, Dinner",
    accommodation: "Sabyinyo Silverback Lodge"
  },
  {
    day: 7,
    title: "Departure - Golden Monkey Trek",
    description: "Today trek in search for the Endangered Golden Monkey in the Virunga National Park. Check out and driving back to Kigali and transfer to Kigali International Airport in time to connect to your onwards departure flight.",
    meals: "Breakfast",
    accommodation: "N/A"
  }
]

const highlights = [
  "Gorilla trekking in Volcanoes National Park",
  "Golden monkey tracking in Virunga Mountains",
  "Chimpanzee trekking in Nyungwe Forest",
  "Canopy walk in Nyungwe",
  "Scenic drive along Lake Kivu shores",
  "Visit Butare National Museum",
  "Kigali city experience"
]

const included = [
  "All airport transfers and assistance",
  "Accommodation in Kigali on Bed and Breakfast basis",
  "Accommodation on safari on Full board basis",
  "Private transport in a 4×4 tourist converted jeeps",
  "Services of an English speaking driver-guides",
  "Chimpanzee Permits (US$ 90)",
  "Canopy Walk Permits (US$ 60)",
  "Gorilla Permits (US$ 1,500)",
  "Golden Monkey Permits (US$ 100)",
  "Bottled drinking water while trekking and in vehicle"
]

const notIncluded = [
  "Meals and beverages, other than specified",
  "International, regional and local Airfares",
  "Airport taxes",
  "Passport and visa fees",
  "Excess baggage charges",
  "Gratuities to driver/guides",
  "Laundry and other personal items",
  "Personal accident and trip cancellation insurance"
]

export default function RwandaGoldenMonkeyGorillaTrekking() {
  const [openDay, setOpenDay] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Golden Monkey & Gorilla Trekking" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <Link to="/rwanda-safaris" className="hover:text-[#D4A03A] transition-colors">Rwanda</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Golden Monkey & Gorilla Trekking</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">7 Days</span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            GOLDEN MONKEY & GORILLA TREKKING
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            A stunning 7-day safari experience exploring the parks that are home to the famous mountain gorillas as well as the endangered Golden Monkeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-[#2B1E1A] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <Calendar className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">7 Days / 6 Nights</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">Kigali, Nyungwe, Lake Kivu, Volcanoes</span>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">From $4,695 per person</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
            Safari Overview
          </h2>
          <p className="text-[#2C3E50] text-lg leading-relaxed mb-8">
            A stunning 7-day safari experience of a lifetime, exploring the parks that are home to the famous mountain gorillas as well as the endangered Golden Monkeys. Embark on a thrilling hike in search of the Chimpanzee communities residing in Nyungwe Forest, one of Africa's oldest rainforests.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-[#D4A03A] flex-shrink-0" size={20} />
                <span className="text-[#2C3E50]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Day by Day</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mt-2">
              Detailed Itinerary
            </h2>
          </div>

          <div className="space-y-4">
            {itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                  onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                >
                  <div>
                    <span className="text-[#D4A03A] font-semibold text-sm">Day {day.day}</span>
                    <h3 className="font-display font-bold text-lg text-[#2C3E50]">{day.title}</h3>
                  </div>
                  <ChevronDown className={`text-[#D4A03A] transition-transform ${openDay === day.day ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openDay === day.day && (
                  <div className="px-6 pb-6 border-t border-[#D4C5B9]">
                    <div className="pt-4 space-y-4">
                      <p className="text-[#2C3E50]/80 leading-relaxed">{day.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="bg-[#FAF3E0] text-[#2C3E50] px-3 py-1 rounded-full">
                          <Star size={14} className="inline mr-1" /> {day.meals}
                        </span>
                        <span className="bg-[#D4A03A]/10 text-[#D4A03A] px-3 py-1 rounded-full">
                          <MapPin size={14} className="inline mr-1" /> {day.accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Investment</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mt-2">
              Pricing
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#2B1E1A] px-6 py-4">
              <h3 className="text-[#F7F2EA] font-bold">Green Season (01 April - 31 May 2026)</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#D4C5B9]">
                    <th className="text-left py-3 text-[#2C3E50] font-semibold">Group Size</th>
                    <th className="text-right py-3 text-[#2C3E50] font-semibold">Price Per Person</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#D4C5B9]">
                    <td className="py-3 text-[#2C3E50]">2 Pax</td>
                    <td className="py-3 text-right text-[#D4A03A] font-bold">$5,690</td>
                  </tr>
                  <tr className="border-b border-[#D4C5B9]">
                    <td className="py-3 text-[#2C3E50]">4 Pax</td>
                    <td className="py-3 text-right text-[#D4A03A] font-bold">$4,950</td>
                  </tr>
                  <tr className="border-b border-[#D4C5B9]">
                    <td className="py-3 text-[#2C3E50]">6 Pax</td>
                    <td className="py-3 text-right text-[#D4A03A] font-bold">$4,695</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-[#2C3E50]">Single Room Supplement</td>
                    <td className="py-3 text-right text-[#2C3E50] font-bold">$590</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[#2C3E50]/60 text-sm mt-4">*Pricing depends on season and number of travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Included/Not Included */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">What's Included</h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#D4A03A] flex-shrink-0 mt-1" size={16} />
                    <span className="text-[#2C3E50] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">Not Included</h3>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#CD7F32] mt-1">×</span>
                    <span className="text-[#2C3E50] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
            Ready for This Adventure?
          </h2>
          <p className="text-[#F7F2EA]/70 mb-8">
            Contact us to book this incredible Rwanda gorilla trekking safari experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
            <Link to="/rwanda-safaris" className="px-8 py-3 border-2 border-[#F7F2EA]/30 text-[#F7F2EA] rounded-full font-semibold hover:bg-[#F7F2EA] hover:text-[#2C3E50] transition-all">
              View All Rwanda Safaris
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}