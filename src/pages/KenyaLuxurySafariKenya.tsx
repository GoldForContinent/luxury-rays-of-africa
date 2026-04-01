import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Sparkles, Plane, Mountain } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Arrival", highlights: "Welcome, briefing", property: "Giraffe Manor" },
  { day: "2", place: "Nairobi → Masai Mara", highlights: "Flight to Mara, afternoon game", property: "Luxury Mara Camp" },
  { day: "3", place: "Masai Mara – Day 1", highlights: "Full day luxury safari", property: "Luxury Mara Camp" },
  { day: "4", place: "Masai Mara – Day 2", highlights: "Private conservancy", property: "Luxury Mara Camp" },
  { day: "5", place: "Masai Mara → Samburu", highlights: "Flight to Samburu, evening game", property: "Samburu Luxury Lodge" },
  { day: "6", place: "Samburu – Full Day", highlights: "Northern species, cultural visit", property: "Samburu Luxury Lodge" },
  { day: "7", place: "Samburu → Amboseli", highlights: "Flight to Amboseli, Kilimanjaro views", property: "Amboseli Luxury Camp" },
  { day: "8", place: "Amboseli – Day", highlights: "Full day wildlife, Kilimanjaro", property: "Amboseli Luxury Camp" },
  { day: "9", place: "Amboseli → Nairobi", highlights: "Flight to Nairobi, farewell dinner", property: "Hemmingways Nairobi" },
  { day: "10", place: "Nairobi – Departure", highlights: "Airport transfer", property: "N/A" }
]

const itineraryDays = [
  { day: 1, title: "Nairobi · Luxury Arrival", highlights: ["Giraffe Manor", "Welcome dinner", "Concierge briefing"], description: "Arrive at Jomo Kenyatta International Airport where your personal concierge greets you. Transfer to the world-famous Giraffe Manor — a unique opportunity to feed endangered Rothschild's giraffes. Evening welcome dinner with your expert guide.", accommodation: "Giraffe Manor", mealPlan: "Dinner", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 2, title: "Nairobi → Masai Mara", highlights: ["Scenic flight", "Mara arrival", "Afternoon game drive"], description: "Morning flight from Wilson Airport to the Masai Mara. Aerial views are spectacular. Arrive at your luxury tented camp — exceptional service, gourmet cuisine, and stunning views. Afternoon game drive introduces you to Kenya's most famous reserve.", accommodation: "Luxury Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 3, title: "Masai Mara · Luxury Day One", highlights: ["Full day safari", "Big Five", "Private guide"], description: "Full day with your private guide exploring the Mara. Morning game drive follows the wildlife. Gourmet picnic lunch on the plains. Afternoon continues exploration. Return to camp for sundowners and fine dining.", accommodation: "Luxury Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 4, title: "Masai Mara · Private Experience", highlights: ["Private conservancy", "Bush breakfast", "Exclusive game drives"], description: "Today explores a private conservancy adjacent to the main reserve — no crowds, just you and the wildlife. Morning bush breakfast with champagne. Afternoon game drive with Maasai guides. Evening at your luxury camp.", accommodation: "Luxury Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 5, title: "Masai Mara → Samburu", highlights: ["Flight north", "Samburu arrival", "Evening game drive"], description: "Morning flight north to Samburu National Reserve. Arrive at your luxury lodge by early afternoon. Afternoon game drive captures the unique northern species — Grevy's zebra, Somali ostrich, Beisa oryx.", accommodation: "Samburu Luxury Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 6, title: "Samburu · Full Day Luxury", highlights: ["Northern wildlife", "Cultural visit", "Fine dining"], description: "Full day exploring Samburu with your private guide. Morning game drive followed by a visit to a Samburu village for cultural interaction. Afternoon continues exploration. Evening fine dining at the lodge.", accommodation: "Samburu Luxury Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 7, title: "Samburu → Amboseli", highlights: ["Flight to Amboseli", "Kilimanjaro arrival", "Evening game drive"], description: "Morning flight to Amboseli National Park. The views of Mount Kilimanjaro are spectacular on approach. Arrive at your luxury camp with direct views of Africa's highest peak. Afternoon game drive.", accommodation: "Amboseli Luxury Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 8, title: "Amboseli · Kilimanjaro Day", highlights: ["Full day wildlife", "Kilimanjaro views", "Elephant herds"], description: "Full day in Amboseli with Kilimanjaro as your backdrop. Morning game drive captures elephants against the mountain. Afternoon continues exploration. The views at sunset are extraordinary.", accommodation: "Amboseli Luxury Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 9, title: "Amboseli → Nairobi", highlights: ["Flight to Nairobi", "City tour", "Farewell dinner"], description: "Morning flight back to Nairobi. Afternoon at leisure — spa, shopping, or visit the Giraffe Centre. Evening farewell dinner at one of Nairobi's finest restaurants.", accommodation: "Hemmingways Nairobi", mealPlan: "Breakfast, Dinner", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 10, title: "Nairobi · Departure", highlights: ["Final breakfast", "Airport transfer", "Farewell"], description: "Breakfast at the hotel. Private transfer to Jomo Kenyatta International Airport for your departure flight.", accommodation: "N/A", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const pricingData = [
  { period: "Green Season: Oct - Nov 2026", price: "$7,095", supplement: "$1,200" },
  { period: "High Season: Dec - Mar 2026/27", price: "$7,495", supplement: "$1,350" },
  { period: "Peak Season: Jul - Oct 2026", price: "$7,895", supplement: "$1,500" }
]

const includes = ["All luxury accommodation — Giraffe Manor, luxury camps and lodges", "All meals — gourmet cuisine with premium drinks", "All internal flights (Nairobi-Mara, Mara-Samburu, Samburu-Ambobeli, Amboseli-Nairobi)", "All national park and conservancy entry fees", "Private 4×4 safari vehicle with dedicated guide", "Private conservancy access", "Bush breakfast with champagne", "Spa treatment", "All airport and in-country transfers", "Personal concierge throughout"]

const excludes = ["Change in itinerary", "Travel / medical insurance", "Tips", "International air fare & Visa", "Items of personal nature", "Any extras"]

const extraAddons = ["Hot Air Balloon Safari", "Private helicopter transfer", "Extended game drives", "Additional spa treatments"]

export default function KenyaLuxurySafariKenya() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 })
      contentRefs.current.forEach((el) => { if (el) gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } }) })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => { if (el && !contentRefs.current.includes(el)) contentRefs.current.push(el) }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Luxury Safari Kenya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Luxury Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">LUXURY SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Luxury Safari in Kenya</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">True Luxury Safari Experience</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 10 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 4 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 7,095 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">The Ultimate Kenya Experience</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This luxury safari combines Kenya's finest accommodations with exceptional wildlife experiences. Fly between destinations, stay at award-winning lodges, and enjoy personalized service throughout. The perfect blend of comfort and adventure.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Sparkles, title: "Luxury", desc: "Premium lodges"}, {Icon: Plane, title: "Flights", desc: "Internal flights included"}, {Icon: Mountain, title: "4 Parks", desc: "Diverse destinations"}, {Icon: Star, title: "Concierge", desc: "Personal service"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Masai Mara", type: "park"}, {name: "Samburu", type: "park"}, {name: "Amboseli", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 4 && <div className="hidden md:block w-6 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $800. Balance due: 30 days prior.</p></div>
        </div>
      </section>

      <section ref={addToRefs} className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg"><h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2"><Check className="text-green-500" /> What's Included</h3><ul className="space-y-3">{includes.map((item, i) => (<li key={i} className="text-[#2C3E50]/80 text-sm flex items-start gap-2"><Check className="text-green-500 w-4 h-4 mt-1" />{item}</li>))}</ul></div>
            <div className="bg-white rounded-2xl p-8 shadow-lg"><h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2"><X className="text-red-500" /> What's Excluded</h3><ul className="space-y-3">{excludes.map((item, i) => (<li key={i} className="text-[#2C3E50]/80 text-sm flex items-start gap-2"><X className="text-red-500 w-4 h-4 mt-1" />{item}</li>))}</ul></div>
            <div className="bg-white rounded-2xl p-8 shadow-lg"><h3 className="font-bold text-xl text-[#2C3E50] mb-6 flex items-center gap-2"><Star className="text-[#D4A03A]" /> Extra Experiences</h3><ul className="space-y-3">{extraAddons.map((item, i) => (<li key={i} className="text-[#2C3E50]/80 text-sm flex items-start gap-2"><Star className="text-[#D4A03A] w-4 h-4 mt-1" />{item}</li>))}</ul></div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Experience True Luxury</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Kenya's finest safari experience awaits.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}