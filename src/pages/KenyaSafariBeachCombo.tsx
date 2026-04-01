import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Mountain, Palmtree, Waves, Plane } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Amboseli", highlights: "Drive to Amboseli, afternoon game drive", property: "Amboseli Lodge" },
  { day: "2", place: "Amboseli – Full Day", highlights: "Elephants with Mt. Kilimanjaro", property: "Amboseli Lodge" },
  { day: "3", place: "Amboseli – Masai Mara", highlights: "Drive to Mara via Serena", property: "Mara Camp" },
  { day: "4", place: "Masai Mara – Full Day", highlights: "Full day Big Five safari", property: "Mara Camp" },
  { day: "5", place: "Masai Mara – Day 2", highlights: "Morning drive, cultural visit", property: "Mara Camp" },
  { day: "6", place: "Masai Mara – Nairobi", highlights: "Return to Nairobi, fly to Diani", property: "Diani Beach Hotel" },
  { day: "7", place: "Diani Beach – Full Day", highlights: "Beach relaxation, watersports", property: "Diani Beach Hotel" },
  { day: "8", place: "Diani Beach – Day 2", highlights: "Snorkeling, diving, island trip", property: "Diani Beach Hotel" },
  { day: "9", place: "Diani Beach – Day 3", highlights: "Beach, spa, sunset cruise", property: "Diani Beach Hotel" },
  { day: "10", place: "Diani Beach – Day 4", highlights: "Final beach day", property: "Diani Beach Hotel" },
  { day: "11", place: "Diani – Nairobi", highlights: "Fly to Nairobi, safari ends", property: "N/A" },
  { day: "12", place: "Safari Ends", highlights: "Departure arrangements", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi → Amboseli",
    highlights: ["Scenic drive", "Elephant country", "Kilimanjaro views"],
    description: "Depart Nairobi early morning for Amboseli National Park, approximately a four-hour drive through the Rift Valley. Amboseli is known for its large elephant herds and spectacular views of Mount Kilimanjaro. Arrive at your lodge by lunch. Afternoon game drive with elephants, lions, and more.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Lunch, Dinner",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Amboseli · Safari Day",
    highlights: ["Elephant families", "Kilimanjaro sunrise", "Swamp walks"],
    description: "Full day in Amboseli exploring this iconic park. Morning game drive as elephants emerge from the swamps against the backdrop of snow-capped Kilimanjaro. Watch for lions, cheetahs, and buffaloes. Afternoon game drive and visit to the observation swell.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Amboseli → Masai Mara",
    highlights: ["Flight to Mara", "Big Five territory", "Evening game drive"],
    description: "Option to fly from Amboseli to the Masai Mara for a shorter journey (additional cost). Otherwise, scenic drive to the world-famous Mara. Arrive at camp for lunch. Afternoon game drive introduces you to Africa's greatest wildlife reserve.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Masai Mara · Full Day Safari",
    highlights: ["Big Five", "Lion prides", "Plains wildlife"],
    description: "Full day in the world-famous Masai Mara. Morning game drive follows the wildlife as they become active — lion prides on the hunt, elephants moving across the plains, giraffes browsing on acacia trees. The Mara is home to all members of the Big Five. Picnic lunch on the plains.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Masai Mara · Second Day",
    highlights: ["Morning game drive", "Maasai village visit", "Sundowners"],
    description: "Another full day to explore the Mara. Morning game drive searches for wildlife missed the previous day. Visit a Maasai village to learn about their traditional culture and way of life. Afternoon continues the exploration. Evening — sundowners on the plains.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Masai Mara → Diani Beach",
    highlights: ["Morning drive", "Flight to Diani", "Beach arrival"],
    description: "Early morning game drive captures the Mara at its most active. Return to camp for breakfast, then transfer to the airstrip for your flight to Diani on the Kenyan coast. Arrive at your beach hotel by early afternoon. Rest and relax on the pristine beach.",
    accommodation: "Diani Beach Hotel",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Diani Beach · Beach Day",
    highlights: ["Beach relaxation", "Watersports", "Swimming"],
    description: "Full day at Diani Beach — one of Africa's most beautiful beaches. Spend the morning lounging on the white sand or take a dip in the warm Indian Ocean. Afternoon watersports — kayaking, paddleboarding, or simply relaxing by the pool.",
    accommodation: "Diani Beach Hotel",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Diani Beach · Ocean Adventure",
    highlights: ["Snorkeling", "Diving", "Island trip"],
    description: "Explore the Indian Ocean with optional snorkeling or diving trips to the coral reefs. Visit Funzi Island or Wasini Island for a taste of coastal culture. See dolphins, explore mangrove forests, and enjoy a seafood lunch.",
    accommodation: "Diani Beach Hotel",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Diani Beach · Leisure Day",
    highlights: ["Spa treatments", "Sunset cruise", "Beach walk"],
    description: "A day of pure relaxation. Morning spa treatments — massage, aromatherapy, and wellness therapies. Afternoon sunset dhow cruise along the coast. Evening beach walk as the sun sets over the Indian Ocean.",
    accommodation: "Diani Beach Hotel",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Diani Beach · Final Day",
    highlights: ["Last beach day", "Shopping", "Farewell dinner"],
    description: "Make the most of your final day in paradise. Morning beach activities or additional excursions. Afternoon exploring the local markets and shops. Evening farewell dinner on the beach with seafood and sundowners.",
    accommodation: "Diani Beach Hotel",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Diani Beach → Nairobi",
    highlights: ["Flight to Nairobi", "Safari concludes", "Departure"],
    description: "Morning at leisure or final swim in the ocean. Transfer to Diani Airport for your flight back to Nairobi. Arrive in Nairobi mid-afternoon. Your safari concludes here.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Apr - Jun 2026", price: "$4,550", supplement: "$650" },
  { period: "High Season: Jul - Mar 2026/27", price: "$4,950", supplement: "$750" },
  { period: "Peak Season: Jul - Oct 2026", price: "$5,450", supplement: "$850" }
]

const includes = [
  "All accommodation — safari lodges & beach resort",
  "All meals as specified in itinerary",
  "All national park entry fees",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Round-trip road transport from Nairobi (safari portion)",
  "Internal flights Mara-Diani and Diani-Nairobi",
  "Expert driver-guide throughout",
  "Beach resort activities",
  "Drinking water during drives"
]

const excludes = [
  "Change in itinerary",
  "Travel / medical insurance",
  "Tips / gratuities for driver / guide and hotel staff",
  "Return international air fare & Visa fee",
  "Items of personal nature",
  "Any extras not mentioned above"
]

const extraAddons = [
  "Hot Air Balloon Safari in Masai Mara",
  "Scuba diving excursion",
  "Deep sea fishing",
  "Private game drive vehicle"
]

export default function KenyaSafariBeachCombo() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 })
      contentRefs.current.forEach((el) => {
        if (el) {
          gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } })
        }
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) contentRefs.current.push(el)
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <img src="https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Safari Beach Combo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Safari Beach Combo</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">SAFARI + BEACH COMBO</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Safari Beach Combo</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Kenya Safari & Diani Beach Paradise</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 12 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 3 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 4,950 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">The Ultimate Kenya Experience</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This 12-day combo safari takes you from the wildlife-rich plains of Amboseli and Masai Mara to the pristine beaches of Diani. Experience the best of Kenya — world-class safaris and tropical beach relaxation.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Mountain, title: "Safari", desc: "Amboseli & Masai Mara"}, {Icon: Plane, title: "Internal Flights", desc: "Seamless transitions"}, {Icon: Palmtree, title: "Beach", desc: "Diani Beach paradise"}, {Icon: Waves, title: "Ocean", desc: "Indian Ocean waters"}].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center group hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center"><item.Icon size={28} className="text-[#D4A03A]" /></div>
                <h4 className="font-bold text-[#2C3E50] mb-2">{item.title}</h4><p className="text-sm text-[#2C3E50]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12"><h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">Your Safari Route</h2></div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[{name: "Nairobi", type: "arrival"}, {name: "Amboseli", type: "park"}, {name: "Masai Mara", type: "park"}, {name: "Diani Beach", type: "beach"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : stop.type === 'beach' ? 'bg-blue-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 4 && <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12"><h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">Brief Itinerary</h2></div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead><tr className="bg-[#D4A03A]"><th className="p-4 text-left text-black font-bold">Day</th><th className="p-4 text-left text-black font-bold">Place</th><th className="p-4 text-left text-black font-bold">Highlights</th><th className="p-4 text-left text-black font-bold">Property</th></tr></thead>
              <tbody>{briefItinerary.map((row, index) => (<tr key={index} className="border-b border-[#D4C5B9] hover:bg-[#FAF3E0]"><td className="p-4 text-[#2C3E50] font-semibold">{row.day}</td><td className="p-4 text-[#2C3E50]">{row.place}</td><td className="p-4 text-[#2C3E50]/80">{row.highlights}</td><td className="p-4 text-[#CD7F32] font-medium">{row.property}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">Detailed Itinerary</h2></div>
          <div className="space-y-6">
            {itineraryDays.map((day) => (
              <div key={day.day} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4"><div className="w-16 h-16 bg-[#D4A03A] rounded-full flex items-center justify-center"><span className="text-black font-bold text-xl">{day.day}</span></div><div><h3 className="font-bold text-xl text-[#2C3E50]">Day {day.day}: {day.title}</h3><p className="text-sm text-[#CD7F32]">{day.accommodation} • {day.mealPlan}</p></div></div>
                  <img src={day.image} alt={day.title} className="w-full h-64 object-cover rounded-xl mb-6" />
                  <p className="text-[#2C3E50] leading-relaxed mb-4">{day.description}</p>
                  <div className="flex flex-wrap gap-2">{day.highlights.map((h, i) => (<span key={i} className="text-xs bg-[#F5E6D3] text-[#2C3E50] px-3 py-1 rounded-full">{h}</span>))}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12"><h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">Safari Pricing</h2></div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-8">
            <div className="grid grid-cols-3 bg-[#D4A03A] text-black font-bold p-4"><div>Validity Dates</div><div className="text-center">Price Per Person</div><div className="text-right">Single Supplement</div></div>
            {pricingData.map((price, index) => (<div key={index} className="grid grid-cols-3 p-4 border-b border-[#D4C5B9]"><div className="text-[#2C3E50]">{price.period}</div><div className="text-center text-[#CD7F32] font-bold text-lg">US$ {price.price}</div><div className="text-right text-[#2C3E50]/70">US$ {price.supplement}</div></div>))}
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $400. Balance due: 21 days prior. Minimum 2 guests.</p></div>
        </div>
      </section>

      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg"><h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2"><Check className="text-green-500" /> What's Included</h3><ul className="space-y-3 max-h-[400px] overflow-y-auto">{includes.map((item, i) => (<li key={i} className="text-[#2C3E50]/80 text-sm flex items-start gap-2"><Check className="text-green-500 w-4 h-4 mt-1" />{item}</li>))}</ul></div>
            <div className="bg-white rounded-2xl p-8 shadow-lg"><h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2"><X className="text-red-500" /> What's Excluded</h3><ul className="space-y-3">{excludes.map((item, i) => (<li key={i} className="text-[#2C3E50]/80 text-sm flex items-start gap-2"><X className="text-red-500 w-4 h-4 mt-1" />{item}</li>))}</ul></div>
            <div className="bg-white rounded-2xl p-8 shadow-lg"><h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2"><Star className="text-[#D4A03A]" /> Extra Experiences</h3><ul className="space-y-3">{extraAddons.map((item, i) => (<li key={i} className="text-[#2C3E50]/80 text-sm flex items-start gap-2"><Star className="text-[#D4A03A] w-4 h-4 mt-1" />{item}</li>))}</ul></div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Safari Meets Beach Paradise</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Combine wildlife adventures with beach relaxation for the perfect Kenya getaway.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
