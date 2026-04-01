import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Plane, LandPlot, Trees, Sun } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Arrival in Nairobi & Samburu", highlights: "Fly to Samburu, afternoon game drive", property: "Soroi Larsens Camp" },
  { day: "2-3", place: "Samburu Game Reserve", highlights: "Full days in Samburu with game drives", property: "Soroi Larsens Camp" },
  { day: "4", place: "Samburu – Fly to Masai Mara", highlights: "Fly to Maasai Mara, afternoon game drive", property: "Soroi Luxury Migration Camp" },
  { day: "5-6", place: "Masai Mara Game Reserve", highlights: "Full days game viewing in Maasai Mara", property: "Soroi Luxury Migration Camp" },
  { day: "7", place: "Departure to Nairobi", highlights: "Fly from Mara to Nairobi Wilson Airport", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Arrival in Nairobi & Samburu",
    highlights: ["Fly to Samburu", "Afternoon game drive", "Sundowner experience"],
    description: "Your adventure begins at Wilson Airport, where you'll catch a scheduled light aircraft transfer to the Samburu Game Reserve. Upon arrival, you'll be escorted to the Soroi Larsens Camp, arriving in time for lunch. As the afternoon unfolds, venture out on an exhilarating game drive, exploring Samburu's wild beauty. Return to camp for a tranquil night under the African sky.",
    accommodation: "Soroi Larsens Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/697922/pexels-photo-697922.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "2-3",
    title: "Full Days in Samburu Game Reserve",
    highlights: ["Morning & afternoon game drives", "Northern 5 species", "Private sundowner"],
    description: "Spend the next two days in the serene wilderness of Samburu with morning and afternoon game drives across the rugged landscapes, unveiling the diverse wildlife unique to this region. Discover the rare Northern Endemic Species including the long-necked Gerenuk, Somali Ostrich, Gravy's Zebra, Beisa Oryx, and Reticulated Giraffe. The landscape here is breathtaking with Mount Ololokwe as a stunning backdrop.",
    accommodation: "Soroi Larsens Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Samburu – Fly to Masai Mara",
    highlights: ["Fly to Masai Mara", "Afternoon game drive", "Golden savanna sunset"],
    description: "Bid farewell to Samburu as you take a scheduled light aircraft transfer to the Maasai Mara, landing in the embrace of the Soroi Luxury Migration Camp. The late afternoon promises an enchanting game drive in the heart of the Mara as the sun casts golden hues across the plains. The Maasai Mara is famous for its incredible wildlife density and is home to the Big Five.",
    accommodation: "Soroi Luxury Migration Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: "5-6",
    title: "Full Days in Masai Mara",
    highlights: ["Big Five game drives", "Great Migration (Jul-Oct)", "Bush dinner", "Hot air balloon option"],
    description: "Spend the next two days in the Maasai Mara, beckoning you to explore its vast expanses on game drives. Discover the Big Five and, if the season allows, witness the awe-inspiring spectacle of the Great Migration (July to October). Watch herds of wildebeest and zebra crossing the Mara River, encountering crocodiles and predators. In between game drives, relax on your tent deck viewing hippos in the river and enjoy a bush dinner under the stars.",
    accommodation: "Soroi Luxury Migration Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Departure to Nairobi",
    highlights: ["Morning game drive optional", "Fly to Nairobi", "Transfer to airport"],
    description: "As the sun rises on your final day, soak in the wilderness one last time before your scheduled light aircraft transfer back to Wilson Airport in Nairobi, bringing your Wings over the Wilderness Safari to a gentle close.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "1 Mar - 31 May 2026", price: "2 pax: $6,120 | 4 pax: $5,940 | 6 pax: $5,880", Pax: "Per adult sharing" },
  { period: "1 - 30 Jun 2026", price: "2 pax: $6,610 | 4 pax: $6,430 | 6 pax: $6,370", Pax: "Per adult sharing" },
  { period: "1 July-30 Sep 2026 & 20 Dec 2026 - 3 Jan 2027", price: "2 pax: $7,490 | 4 pax: $7,310 | 6 pax: $7,250", Pax: "Per adult sharing" },
  { period: "01 Oct - 19 Dec 2026", price: "2 pax: $6,710 | 4 pax: $6,530 | 6 pax: $6,470", Pax: "Per adult sharing" },
]

const includes = [
  "Full board accommodation inclusive of all meals at Soroi Collection's camps and lodges",
  "Samburu Reserve Fees & Masai Mara Park Fees",
  "Twice daily shared & scheduled game drives in custom-built 4×4 safari vehicles",
  "Accredited English-speaking safari guide",
  "All airport and airstrip transfers",
  "Return scheduled light aircraft transfers Wilson Airport/Samburu/Masai Mara/Wilson Airport",
  "Filtered water, coffees, and teas",
  "Locally branded beverages inclusive of soft drinks, local beers, selected spirits, and house wines",
  "One Sundowner at Soroi Larsens Camp",
  "One Bush dinner at Soroi Luxury Migration Camp"
]

const excludes = [
  "International airfare and visa fees",
  "Travel and medical insurance",
  "Tips and gratuities for driver/guide and hotel staff",
  "Items of personal nature",
  "Balloon safaris (available at additional cost)",
  "Any extra activities not mentioned"
]

const extraAddons = [
  "Hot Air Balloon Safari in Masai Mara",
  "Bush breakfast experience",
  "Night game drive in Samburu",
  "Visit to local Maasai village",
  "Spa treatments at camps"
]

const valueAddons = [
  { title: "One Sundowner at Soroi Larsens Camp", value: "Included", location: "Samburu" },
  { title: "One Bush dinner at Soroi Luxury Migration Camp", value: "Included", location: "Masai Mara" },
  { title: "Morning and afternoon game drives", value: "Included", location: "Both parks" }
]

const mealPlanKey = [
  { abbr: "BB", meaning: "Bed & Breakfast", description: "2 Meals per day" },
  { abbr: "Half Board", meaning: "Half Board", description: "2 Meals per day (Breakfast / Dinner)" },
  { abbr: "Full Board", meaning: "Full Board", description: "3 Meals per day (Breakfast / Lunch / Dinner)" },
  { abbr: "Eco-status", meaning: "Eco-status", description: "Environmentally friendly/ sustainable approach" }
]

export default function KenyaWingsOverWilderness() {
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
            { opacity: 0, y: 40 },
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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Wings Over the Wilderness Safari" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A] transition-colors">Kenya Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Wings Over the Wilderness</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">KENYA SAFARI PACKAGE</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            Wings Over the Wilderness
          </h1>
          <div className="flex items-center gap-4 text-white/80 mb-8">
            <span className="flex items-center gap-2"><Clock size={18} /> 7 Days</span>
            <span className="flex items-center gap-2"><MapPin size={18} /> 2 Destinations</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">
            From USD $ 5,880 Per Person
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">
              A Journey Into Kenya's Pristine Wilderness
            </h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">
              Embark on a captivating journey through Kenya's wilderness with our Wings Over the Wilderness Safari. This meticulously crafted adventure offers a serene escape into the heart of Kenya's pristine destinations. From the rugged terrains of Samburu National Park to the expansive great plains of the Maasai Mara, every day unveils a new adventure and discovery. With the sky as your pathway, traverse the wild landscapes in your scheduled light aircraft, descending into a world where nature choreographs the rhythm of life.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { Icon: Plane, title: "Fly-In Safari", desc: "Seamless air transfers between parks" },
              { Icon: LandPlot, title: "Big Five", desc: "Lion, Leopard, Elephant, Rhino, Buffalo" },
              { Icon: Sun, title: "Great Migration", desc: "Witness the wildebeest migration" },
              { Icon: Trees, title: "Northern 5", desc: "Unique wildlife in Samburu" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center group hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center group-hover:bg-[#D4A03A]/20 transition-colors">
                  <item.Icon size={28} className="text-[#D4A03A]" />
                </div>
                <h4 className="font-bold text-[#2C3E50] mb-2">{item.title}</h4>
                <p className="text-sm text-[#2C3E50]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Map */}
      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
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
                {index < 3 && (
                  <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Itinerary */}
      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">
              Wings Over the Wilderness Brief Itinerary
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

      {/* Detailed Itinerary */}
      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">
              Detailed Itinerary
            </h2>
          </div>

          <div className="space-y-6">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#D4A03A] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">{day.day}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#2C3E50]">Day {day.day}: {day.title}</h3>
                      <p className="text-sm text-[#CD7F32]">{day.accommodation} • {day.mealPlan}</p>
                    </div>
                  </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">
              Safari Pricing
            </h2>
            <p className="text-[#2C3E50]/70">Pricing depends on season and number of travelers</p>
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

          <div className="bg-[#2B1E1A] rounded-2xl p-8 text-[#F7F2EA] mb-8">
            <h3 className="font-bold text-xl mb-4">Safari Highlights Included</h3>
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
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> The pricing is indicative and depends on the season and number of travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Other Information */}
      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
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
                <Star className="text-[#D4A03A]" /> Extra Experiences
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

      {/* CTA Section */}
      <section ref={addToRefs} className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">
            Ready to Spread Your Wings?
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">
            Let our safari experts help you plan this incredible journey through Kenya's wilderness.
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
