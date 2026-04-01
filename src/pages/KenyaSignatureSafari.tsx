import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Clock, Check, X, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const pricingData = [
  { period: "1 Mar - 31 May 2026", price: "$9,100", Pax: "4 pax" },
  { period: "1 - 30 Jun 2026", price: "$9,590", Pax: "4 pax" },
  { period: "1 July-30 Sep 2026 & 20 Dec 2026 - 3 Jan 27", price: "$10,650", Pax: "4 pax" },
  { period: "01 Oct - 19 Dec 2026", price: "$9,540", Pax: "4 pax" },
]

const itineraryDays = [
  {
    day: 1,
    title: "Arrival in Nairobi",
    highlights: ["Arrival & transfer to your Hotel"],
    description: "Arrival can take place at any time of the day though we would recommend from noon onwards for guaranteed hotel check-in. Upon arrival at Jomo Kenyatta International Airport, our airport representative will welcome you together with your safari guide and transfer you to your overnight hotel.",
    accommodation: "Four Points BY SHERATON NAIROBI AIRPORT",
    mealPlan: "Bed & Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi – Samburu Game Reserve",
    highlights: ["Fly to Samburu National Reserve", "First game drive", "Elephant & leopard sightings"],
    description: "Enjoy an early breakfast before check-out from your town hotel. Transfer to Wilson Airport to board your scheduled flight to Samburu National Reserve. After an hour of scenic flights via Nanyuki and Mount Kenya and past the vast wilderness of Laikipia, you will arrive in the semi-arid desert reserve Samburu. Samburu is well known for its large herds of elephant, elusive leopard as well as Northern Endemic Species including the long-necked Gerenuk, Somali Ostrich, Gravy's Zebra, Beisa Oryx and Reticulated Giraffe.",
    accommodation: "Soroi Larsens Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/697922/pexels-photo-697922.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "3-4",
    title: "Full Days in Samburu National Reserve",
    highlights: ["Morning & afternoon game drives", "Sundowner experience", "Private dinner under stars"],
    description: "Enjoy two full days in Samburu Game Reserve with game drives as per the schedule of the camp. We will spoil you with beautiful sunsets and drinks on a scenic sundowner spot. Cool off in our infinity pool and enjoy special Spa Treatments.",
    accommodation: "Soroi Larsens Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Samburu – Maasai Mara",
    highlights: ["Fly to Masai Mara", "Evening game drive", "Classic African savanna"],
    description: "Breakfast at your camp and check-out. Transfer to the airstrip with a game drive en-route to board your mid-morning flight to the world renowned Maasai Mara National Reserve. This is a classic African savanna, and the sheer density of wildlife is unique in Africa. In the Mara you have the opportunity of sighting an astonishing amount of wildlife, including the big cats such as lion, leopard and cheetah.",
    accommodation: "Soroi Luxury Migration Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "6-7",
    title: "Full Days in Maasai Mara",
    highlights: ["Full day game viewing", "Wildebeest migration (Jul-Oct)", "Bush dinner under stars"],
    description: "Full days in Maasai Mara Game Reserve with game drives as per the schedule of the camp. From the months of July to October, you will be lucky to witness the annual migration of the wildebeest. Your stay here is fully packed from the usual day game drives to an evening Sundowner and a bush dinner under the stars.",
    accommodation: "Soroi Luxury Migration Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Maasai Mara – Lumo Conservancy",
    highlights: ["Fly to Lumo", "Private conservancy experience", "Night game drives available"],
    description: "Enjoy your last morning game drive in the Mara and check out after breakfast. Your onward flight to the beautiful Lumo Community and Wildlife Conservancy. A private conservancy offers possibilities that typical national reserves would not - night game drives, guided bush walks, and excursions to scenic Taita Hills and Lumo Tsavo West National Park.",
    accommodation: "Soroi Lions Bluff Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "9-10",
    title: "Full Days in Lumo Conservancy",
    highlights: ["Day & night game viewing", "Bush breakfast", "Photographic hide"],
    description: "Full days spent in the Lumo Wildlife Conservancy, packed with day and night game viewing. On one of the days, we invite you for a bush breakfast. If photography is your hobby, you may want to check out the lodge's amazing photographic hide. The infinity pool overlooking the park along with wine cellar and private dining options is part of the best features.",
    accommodation: "Soroi Lions Bluff Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Fly from Lumo to Nairobi",
    highlights: ["Morning at leisure", "Departure flight", "Transfer to airport"],
    description: "The last day is yours to rest & relax. You may opt for a morning game drive as per the lodge schedule or simply take it easy. Check-out from your room at 10.00 am. Thereafter, transferred to the airstrip for your late afternoon flight back to Wilson Airport, Nairobi. On arrival, met and transferred for day rooms (if needed) and drop off at Jomo Kenyatta International Airport for your departure flight.",
    accommodation: "Optional Day Room upon request",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const includes = [
  "Return transfers in Nairobi",
  "Well-experienced, English-speaking driver/guides",
  "Scheduled flight from Nairobi Wilson Airport to Samburu Game Reserve on Day 02",
  "Scheduled flight from Samburu Game Reserve to Masai Mara Game Reserve on Day 05",
  "Scheduled flight from Maasai Mara Game Reserve to Taita Hills (Lumo Wildlife Conservancy) on Day 08",
  "Scheduled flight from Lumo Wildlife Conservancy to Nairobi Wilson Airport on Day 11",
  "All Park Entry Fees & community levy for Samburu Game Reserve, Masai Mara Game Reserve, Lumo Wildlife Conservancy",
  "01 Night Bed & Breakfast accommodation at FOUR POINTS BY SHERATON HOTEL",
  "03 Nights Full Board at Soroi Larsens Camp",
  "03 Nights Full Board at Soroi Luxury Migration Camp",
  "03 Nights Full Board at Soroi Lions Bluff Lodge",
  "Emergency evacuation insurance"
]

const excludes = [
  "Change in itinerary",
  "Travel / medical insurance",
  "Tips / gratuities for driver / guide and hotel staff",
  "Return international air fare & Visa fee",
  "Items of personal nature i.e., beverages & laundry, telephone, souvenirs etc.",
  "Any extras not mentioned above e.g., extra meals, activities – balloon safaris, sundowners etc."
]

const extraAddons = [
  "Pre- or Post-Safari Extensions to various National parks & game reserves",
  "Balloon Safaris",
  "Extra meals and activities",
  "Sundowner experiences",
  "Spa treatments"
]

const valueAddons = [
  { title: "Exclusive Sunset Dinner and Star Bed Sleep out", value: "$250 per guest", location: "Soroi Larsens Camp" },
  { title: "24-hour access to the Samburu & Lumo Photographic Hide", value: "$350 per person", location: "Samburu & Lumo" },
  { title: "30-minute Neck & Shoulder Massage", value: "Complimentary", location: "Soroi Lions Bluff" },
  { title: "Bush Dinner in the Masai Mara", value: "Included", location: "Soroi Luxury Migration Camp" },
  { title: "Night Game Drive in Lumo", value: "Included", location: "Lumo Conservancy" },
  { title: "Sundowner in Lumo", value: "Included", location: "Lumo Conservancy" },
  { title: "Surprise Bush Breakfast", value: "Included", location: "Lumo Conservancy" }
]

export default function KenyaSignatureSafari() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'pricing' | 'details'>('itinerary')
  const [openDay, setOpenDay] = useState<string | number | null>(1)
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
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Kenya Signature Safari" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A] transition-colors">Kenya Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Kenya Signature Safari</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">KENYA SAFARI PACKAGE</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            Kenya Signature Safari
          </h1>
          <div className="flex items-center gap-4 text-white/80 mb-8">
            <span className="flex items-center gap-2"><Clock size={18} /> 11 Days</span>
            <span className="flex items-center gap-2"><MapPin size={18} /> 4 Destinations</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">
            From USD $ 9,100 Per Person
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">
              Experience Kenya's Best Kept Secrets
            </h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">
              Explore Kenya's prime parks and best kept secrets by air! The beautiful and rugged North (Samburu) with its Northern 5 species, the fantastic and ever wildlife rich Maasai Mara Game Reserve and the stunning Tsavo West / Lumo Conservancy. Fly from one destination to the next for the best connection!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🦁", title: "Big Five", desc: "Lion, Leopard, Elephant, Rhino, Buffalo" },
              { icon: "🦅", title: "Northern 5", desc: "Gerenuk, Ostrich, Zebra, Oryx, Giraffe" },
              { icon: "🌅", title: "Migration", desc: "Witness the Great Wildebeest Migration" },
              { icon: "✈️", title: "Fly-In", desc: "Seamless air connections between parks" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-[#2C3E50] mb-2">{item.title}</h4>
                <p className="text-sm text-[#2C3E50]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Map */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">
              Your Safari Route
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[
              { name: "Nairobi", type: "arrival" },
              { name: "Samburu", type: "park" },
              { name: "Masai Mara", type: "park" },
              { name: "Lumo", type: "conservancy" },
              { name: "Nairobi", type: "departure" }
            ].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${
                  stop.type === 'arrival' ? 'bg-green-600 text-white' :
                  stop.type === 'departure' ? 'bg-red-600 text-white' :
                  'bg-[#D4A03A] text-black'
                }`}>
                  {stop.name}
                </div>
                {index < 4 && (
                  <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 px-4 md:px-[8vw] bg-[#2B1E1A] sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'itinerary', label: 'Detailed Itinerary' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'details', label: 'Other Information' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#D4A03A] text-black' 
                    : 'bg-[#1a1410] text-[#F7F2EA] hover:bg-[#2B1E1A] border border-[#F7F2EA]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Tab */}
      {activeTab === 'itinerary' && (
        <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {itineraryDays.map((day) => (
                <div 
                  key={day.day}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between"
                    onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#D4A03A] rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-xl">{day.day}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#2C3E50]">Day {day.day}: {day.title}</h3>
                        <p className="text-sm text-[#CD7F32]">{day.accommodation} • {day.mealPlan}</p>
                      </div>
                    </div>
                    <div className={`transform transition-transform ${openDay === day.day ? 'rotate-180' : ''}`}>
                      <ArrowRight className="text-[#D4A03A]" />
                    </div>
                  </div>
                  
                  {openDay === day.day && (
                    <div className="px-6 pb-6 border-t border-[#D4C5B9]">
                      <div className="pt-6">
                        <img 
                          src={day.image} 
                          alt={day.title}
                          className="w-full h-64 object-cover rounded-xl mb-6"
                        />
                        <p className="text-[#2C3E50] leading-relaxed mb-4">{day.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {day.highlights.map((highlight, i) => (
                            <span key={i} className="text-xs bg-[#F5E6D3] text-[#2C3E50] px-3 py-1 rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tab */}
      {activeTab === 'pricing' && (
        <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">
                Safari Pricing
              </h2>
              <p className="text-[#2C3E50]/70">The cost of this safari is based on a minimum of 4 participants</p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-8">
              <div className="grid grid-cols-3 bg-[#D4A03A] text-black font-bold p-4">
                <div>Validity Dates</div>
                <div className="text-center">Price Per Person</div>
                <div className="text-right">Group Size</div>
              </div>
              {pricingData.map((price, index) => (
                <div key={index} className="grid grid-cols-3 p-4 border-b border-[#D4C5B9] hover:bg-[#FAF3E0]">
                  <div className="text-[#2C3E50]">{price.period}</div>
                  <div className="text-center text-[#CD7F32] font-bold text-lg">{price.price}</div>
                  <div className="text-right text-[#2C3E50]/70">{price.Pax}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#2B1E1A] rounded-2xl p-8 text-[#F7F2EA]">
              <h3 className="font-bold text-xl mb-4">Value Addons Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {valueAddons.map((addon, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">{addon.title}</span>
                      <span className="text-[#D4A03A]"> - {addon.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800 text-sm">
                <strong>Terms & Conditions:</strong> The pricing is indicative & depends on the season and number of travellers. 
                Sunworld Safaris reserves the right to amend the applicable costs in case of changes in government taxes & levies or increase in park fees.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Details Tab */}
      {activeTab === 'details' && (
        <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Includes */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2">
                  <Check className="text-green-500" /> What's Included
                </h3>
                <ul className="space-y-3">
                  {includes.map((item, index) => (
                    <li key={index} className="text-[#2C3E50]/80 text-sm flex items-start gap-2">
                      <Check className="text-green-500 w-4 h-4 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excludes */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2">
                  <X className="text-red-500" /> What's Excluded
                </h3>
                <ul className="space-y-3">
                  {excludes.map((item, index) => (
                    <li key={index} className="text-[#2C3E50]/80 text-sm flex items-start gap-2">
                      <X className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra Add-ons */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2">
                  <Star className="text-[#D4A03A]" /> Extra Holiday Addons
                </h3>
                <ul className="space-y-3">
                  {extraAddons.map((item, index) => (
                    <li key={index} className="text-[#2C3E50]/80 text-sm flex items-start gap-2">
                      <Star className="text-[#D4A03A] w-4 h-4 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">
            Ready to Book This Safari?
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">
            Contact our safari experts to check availability and customize your Kenya Signature Safari experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F] transition-all">
              Book Now
            </Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10 transition-all">
              View Other Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
