import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Clock, Check, X, Star, Mail, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi arrival", highlights: "Arrival & transfer to your Hotel", property: "Four Points by Sheraton Hotel / Tamarind Tree Hotel" },
  { day: "2", place: "Nairobi – Fly to Samburu Game Reserve", highlights: "Fly to Samburu Game Reserve", property: "Soroi Larsens Camp" },
  { day: "3-4", place: "Samburu Game Reserve", highlights: "Full days in Samburu National Reserve", property: "Soroi Larsens Camp" },
  { day: "5", place: "Samburu – Maasai Mara", highlights: "Fly to Masai Mara National Reserve", property: "Soroi Luxury Migration Camp" },
  { day: "6-7", place: "Maasai Mara", highlights: "Full Days game viewing in Maasai Mara", property: "Soroi Luxury Migration Camp" },
  { day: "8", place: "Maasai Mara – Lumo Conservancy", highlights: "Fly to Lumo", property: "Soroi Lions Bluff Lodge" },
  { day: "9-10", place: "Lumo Community & Wildlife Conservancy", highlights: "Full days Game viewing in Lumo Community & Wildlife Conservancy", property: "Soroi Lions Bluff Lodge" },
  { day: "11", place: "Lumo Wildlife Conservancy to Nairobi", highlights: "Fly from Lumo Wildlife Conservancy to Nairobi Wilson Airport for Departure", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Arrival in Nairobi",
    highlights: ["Arrival & transfer to your Hotel"],
    description: "Arrival can take place at any time of the day though we would recommend from noon onwards for guaranteed hotel check-in. Upon arrival at Jomo Kenyatta International Airport, our airport representative will welcome you together with your safari guide and transfer you to your overnight hotel. Overnight at FOUR POINTS BY SHERATON HOTEL / TAMARIND TREE HOTEL or a HOTEL of your choice.",
    accommodation: "Four Points BY SHERATON NAIROBI AIRPORT",
    mealPlan: "Bed & Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi – Samburu Game Reserve",
    highlights: ["Fly to Samburu National Reserve", "First game drive", "Northern Endemic Species"],
    description: "Enjoy an early breakfast before check-out from your town hotel. Transfer to Wilson Airport to board your scheduled flight to Samburu National Reserve. (Flights typically depart at 8.00 am / 10.20 or 13.30 hrs) After an hour of scenic flights via Nanyuki and Mount Kenya and past the vast wilderness of Laikipia, you will arrive in the semi-arid desert reserve Samburu. Stunning scenery awaits you with Mt. Ololokwe welcoming you. Enjoy a cold towel and refreshments on board of your vehicle and meet your expert Safari Guide! A short game drive enroute to Larsens Camp, nestled on the banks of Ewaso Nyiro River will give you a first glimpse of this stunning park. Samburu is well known for its large herds of elephant, elusive leopard as well as Northern Endemic Species. These include the long-necked Gerenuk, The Somali Ostrich, Gravy's Zebra, Beisa Oryx and Reticulated Giraffe. After check-in and a delicious lunch, embark on your very first afternoon game drive as per the camp's schedule.",
    accommodation: "Soroi Larsens Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/697922/pexels-photo-697922.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "3-4",
    title: "Full Days in Samburu National Reserve",
    highlights: ["Morning & afternoon game drives", "Sundowner experience", "Private dinner under stars", "Infinity pool"],
    description: "Enjoy two full days in Samburu Game Reserve with game drives as per the schedule of the camp – we recommend to do all morning & afternoon game drives. We will spoil you with beautiful sunsets and drinks on a scenic sundowner spot. Cool off in our infinity pool to cool and enjoy one of our special Spa Treatments in our in-house Spa (available at an additional cost). On one night, weather permitting, we have set up a PRIVATE DINNER for you under the stars!",
    accommodation: "Soroi Larsens Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Samburu – Maasai Mara",
    highlights: ["Fly to Masai Mara", "Evening game drive", "Classic African savanna", "Big cats"],
    description: "Breakfast at your camp and check-out. Transfer to the airstrip with a game drive en-route to board your mid-morning flight to the world renowned Maasai Mara National Reserve. This is a classic African savanna, and the sheer density of wildlife is unique in Africa. Gazelle, wildebeest and zebra graze in large numbers and where prey is found, so are predators. In the Mara you have the opportunity of sighting an astonishing amount of wildlife, including the big cats, such as lion, leopard and cheetah. Lions are found in large prides and game viewing is fantastic all year round. From the months of July to October, you will be lucky to witness the annual migration of the wildebeest. Enjoy your evening at leisure to unwind around a cozy campfire under the African stars whilst reminiscing about your day in the wild. On arrival, you will find your Camp Safari Guide waiting for you at Olkiombo Airstrip. En-route game drive to the camp & enjoy a scrumptious lunch followed by an afternoon/evening game drive in Masai Mara as per the camp's schedule.",
    accommodation: "Soroi Luxury Migration Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "6-7",
    title: "Full Days in Maasai Mara",
    highlights: ["Full day game viewing", "Wildebeest migration (Jul-Oct)", "Bush dinner under stars", "Hippo viewing"],
    description: "Full days in Maasai Mara Game Reserve with game drives as per the schedule of the camp. In between the game drives, watch the hippos below your tent deck bask in the sun or the lively river! Your stay here is fully packed i.e., from the usual day game drives to an evening Sundowner and a bush dinner under the stars, weather permitting.",
    accommodation: "Soroi Luxury Migration Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Maasai Mara – Lumo Conservancy",
    highlights: ["Fly to Lumo", "Private conservancy experience", "Night game drives available", "Taita Hills excursion"],
    description: "Enjoy your last morning game drive in the Mara and check out after breakfast. The airstrip is only a few min. drive from the camp. Depart with a packed lunch from your preferred camp & arrive in Nairobi at 12.15 pm. (flight time 01 hour) Your onward flight to the beautiful Lumo Community and Wildlife Conservancy. A private conservancy is always a nice contrast to the national parks / reserves as it offers one with possibilities that a typical national reserve / parks would not. Fantastic activities are night game drives, guided bush / bird walks, walking in the nearby Taita Hills and excursions to the scenic and next door Lumo Tsavo West National Park. This is one of the most stunning sceneries you will come across in Kenya!",
    accommodation: "Soroi Lions Bluff Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "9-10",
    title: "Full Days in Lumo Conservancy",
    highlights: ["Day & night game viewing", "Bush breakfast", "Photographic hide", "Infinity pool"],
    description: "Full days spent in the Lumo Wildlife Conservancy, packed with day and night game viewing / bird viewing. On one of the days, we invite you for a bush breakfast. If you prefer to relax on the terrace of your beautiful room with glass frontage whilst enjoying a luxury massage and sipping a glass of wine, while the sun sets, this is also an option. If photography is your hobby, you may want to check out the lodge's amazing photographic hide (available at an extra fee). This is one destination that perfectly integrates wildlife viewing and top-notch luxury with sweeping views of the surroundings. The infinity pool overlooking the park along with a pool bar, wine cellar and private dining options is part of the best features of the lodge.",
    accommodation: "Soroi Lions Bluff Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Fly from Lumo to Nairobi",
    highlights: ["Morning at leisure", "Departure flight", "Transfer to airport"],
    description: "The last day is yours to rest & relax. You may opt for a morning game drive as per the lodge schedule or simply take it easy. Check-out from your room at 10.00 am, you are free to use all other facilities. Thereafter, transferred to the airstrip for your late afternoon flight back to Wilson Airport, Nairobi. On arrival, met and transferred for day rooms (if needed) and thereafter, drop off at Jomo Kenyatta International Airport for your departure flight. END OF SERVICES!",
    accommodation: "Optional Day Room upon request",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "1 Mar - 31 May 2026", price: "$9,100", Pax: "4 pax" },
  { period: "1 - 30 Jun 2026", price: "$9,590", Pax: "4 pax" },
  { period: "1 July-30 Sep 2026 & 20 Dec 2026 - 3 Jan 27", price: "$10,650", Pax: "4 pax" },
  { period: "01 Oct - 19 Dec 2026", price: "$9,540", Pax: "4 pax" },
]

const includes = [
  "Return transfers in Nairobi",
  "Well-experienced, English-speaking driver/guides",
  "Scheduled flight from Nairobi Wilson Airport to Samburu Game Reserve on Day 02 – Based on a minimum of 02 persons",
  "Scheduled flight from Samburu Game Reserve to Masai Mara Game Reserve on Day 05 – Based on a minimum of 04 persons",
  "Scheduled flight from Maasai Mara Game Reserve to Taita Hills (Lumo Wildlife Conservancy) on Day 08 – Based on a minimum of 02 persons",
  "Scheduled flight from Lumo Wildlife Conservancy to Nairobi Wilson Airport on Day 11 – Based on a minimum of 04 persons",
  "All Park Entry Fees & community levy for Samburu Game Reserve, Masai Mara Game Reserve, Lumo Wildlife Conservancy",
  "01 Night Bed & Breakfast accommodation at FOUR POINTS BY SHERATON HOTEL / CROWNE PLAZA AIRPORT HOTEL in a superior room",
  "03 Nights Full Board at Soroi Larsens Camp (3 meals per day, hot & cold canape, soft drinks, beers, house wines, non-luxury spirits, sundowner, tea/coffee with cookies, mineral water, campfire nibbles, children's activities)",
  "03 Nights Full Board at Soroi Luxury Migration Camp (3 meals per day, house wines, beer, mineral water, soft drinks, vodka & gin, afternoon tea/coffee, campfire nibbles, children's activities)",
  "03 Nights Full Board at Soroi Lions Bluff Lodge (3 meals per day, house wines, beer, gin/vodka, sodas, fresh juices, game drives, 1 night game drive, sundowners, 30-min massage per person, laundry)",
  "Emergency evacuation insurance (cost of hospitalization & treatment is payable directly)"
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
  { title: "Exclusive Sunset Dinner and Star Bed Sleep out experience", value: "$250 per guest", location: "Soroi Larsens Camp" },
  { title: "24-hour access to the Samburu & Lumo Photographic Hide", value: "$350 per person", location: "Samburu & Lumo" },
  { title: "30-minute Neck & Shoulder Massage", value: "Complimentary", location: "Soroi Lions Bluff" },
  { title: "Bush Dinner in the Masai Mara", value: "Included", location: "Soroi Luxury Migration Camp" },
  { title: "Night Game Drive in Lumo", value: "Included", location: "Lumo Conservancy" },
  { title: "Sundowner in Lumo", value: "Included", location: "Lumo Conservancy" },
  { title: "Surprise Bush Breakfast", value: "Included", location: "Lumo Conservancy" }
]

const mealPlanKey = [
  { abbr: "BB", meaning: "Bed & Breakfast", description: "2 Meals per day" },
  { abbr: "Half Board", meaning: "Half Board", description: "2 Meals per day (Breakfast / Dinner)" },
  { abbr: "Full Board", meaning: "Full Board", description: "3 Meals per day (Breakfast / Lunch / Dinner)" },
  { abbr: "Eco-status", meaning: "Eco-status", description: "Environmentally friendly/ sustainable approach" }
]

export default function KenyaSignatureSafari() {
  const [activeTab, setActiveTab] = useState<'brief' | 'itinerary' | 'pricing' | 'details'>('brief')
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
              Have you ever wondered what some of THE VERY BEST SAFARI destinations are in Kenya? You can explore Kenya's prime parks and best kept secrets by air! The beautiful and rugged North (Samburu) with its Northern 5 species, the fantastic and ever wildlife rich Maasai Mara Game Reserve and the stunning Tsavo West / Lumo Conservancy, infamous for amazing views and landscape and Southern Wildlife species!
            </p>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto mt-4">
              For the best connection from one destination to the next, you are flying from one to the other! What makes this Safari unique? It is the "Safari experience" in our open game drive vehicles, exciting night game drives in Lumo, bush breakfasts and dinners out in the wild and getting spoilt at each luxury camp with the best service and little extras! Meet local communities and immerse yourself in our colourful local culture by meeting the Maasai, Samburu & Taita Communities!
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
              { id: 'brief', label: 'Brief Itinerary' },
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

      {/* Brief Itinerary Tab */}
      {activeTab === 'brief' && (
        <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">
                Kenya Signature Safari Brief Itinerary
              </h2>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#D4A03A]">
                    <th className="p-4 text-left text-black font-bold">Day</th>
                    <th className="p-4 text-left text-black font-bold">Place</th>
                    <th className="p-4 text-left text-black font-bold">Highlights</th>
                    <th className="p-4 text-left text-black font-bold">Property</th>
                  </tr>
                </thead>
                <tbody>
                  {briefItinerary.map((row, index) => (
                    <tr key={index} className="border-b border-[#D4C5B9] hover:bg-[#FAF3E0]">
                      <td className="p-4 text-[#2C3E50] font-semibold">{row.day}</td>
                      <td className="p-4 text-[#2C3E50]">{row.place}</td>
                      <td className="p-4 text-[#2C3E50]/80">{row.highlights}</td>
                      <td className="p-4 text-[#CD7F32] font-medium">{row.property}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 bg-[#2B1E1A] rounded-2xl p-8 text-[#F7F2EA]">
              <h3 className="font-bold text-xl mb-4 text-center">Key</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {mealPlanKey.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#D4A03A] text-black px-4 py-2 rounded-full font-bold inline-block mb-2">{item.abbr}</div>
                    <p className="text-sm">{item.meaning}</p>
                    <p className="text-xs text-[#F7F2EA]/60">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Itinerary Tab */}
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
                  <div className="text-center text-[#CD7F32] font-bold text-lg">US$ {price.price}</div>
                  <div className="text-right text-[#2C3E50]/70">{price.Pax}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#2B1E1A] rounded-2xl p-8 text-[#F7F2EA] mb-8">
              <h3 className="font-bold text-xl mb-4">Value Addons Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {valueAddons.map((addon, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">{addon.title}</span>
                      <span className="text-[#D4A03A]"> - {addon.value}</span>
                      <p className="text-xs text-[#F7F2EA]/60">{addon.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#F7F2EA]/60 mt-4">The Star Bed Sleep Out and Photographic Hide are subject to availability upon arrival at Camp.</p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800 text-sm">
                <strong>Terms & Conditions:</strong> The pricing is indicative & depends on the season and number of travellers. The cost of this safari is based on a minimum of 4 participants. Sunworld Safaris reserves the right to amend the applicable costs in case of changes in government taxes & levies or increase in park fees. In this case, we shall advise on the supplement & the cost shall be passed directly to the guest.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Details Tab */}
      {activeTab === 'details' && (
        <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Includes */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2">
                  <Check className="text-green-500" /> What's Included
                </h3>
                <ul className="space-y-3 max-h-[400px] overflow-y-auto">
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

            {/* Contact Section */}
            <div className="bg-[#2B1E1A] rounded-2xl p-8 text-[#F7F2EA]">
              <div className="text-center mb-6">
                <h3 className="font-bold text-xl">Questions about this safari?</h3>
                <p className="text-[#F7F2EA]/70">Contact our safari expert</p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#D4A03A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black text-2xl font-bold">JK</span>
                  </div>
                  <h4 className="font-bold text-lg">Joanne Kiao</h4>
                  <p className="text-[#D4A03A]">Senior Safari Planner</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="mailto:joanne@sunworldsafaris.com" className="flex items-center gap-3 text-[#F7F2EA] hover:text-[#D4A03A] transition-colors">
                    <Mail size={20} />
                    <span>joanne@sunworldsafaris.com</span>
                  </a>
                  <a href="tel:+254733888027" className="flex items-center gap-3 text-[#F7F2EA] hover:text-[#D4A03A] transition-colors">
                    <Phone size={20} />
                    <span>+254 733 888 027</span>
                  </a>
                </div>
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
