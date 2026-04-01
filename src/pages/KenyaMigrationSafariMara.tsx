import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Mountain, Cloud } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Masai Mara", highlights: "Drive to Mara, afternoon game", property: "Mara Camp" },
  { day: "2", place: "Masai Mara – Day 1", highlights: "Migration tracking, game drives", property: "Mara Camp" },
  { day: "3", place: "Masai Mara – Day 2", highlights: "River crossing viewing", property: "Mara Camp" },
  { day: "4", place: "Masai Mara – Day 3", highlights: "Full day safari", property: "Mara Camp" },
  { day: "5", place: "Masai Mara – Day 4", highlights: "Predator tracking", property: "Mara Camp" },
  { day: "6", place: "Masai Mara – Day 5", highlights: "Extended game drive", property: "Mara Camp" },
  { day: "7", place: "Masai Mara – Day 6", highlights: "Final safari day", property: "Mara Camp" },
  { day: "8", place: "Masai Mara – Nairobi", highlights: "Morning drive, return", property: "N/A" }
]

const itineraryDays = [
  { day: 1, title: "Nairobi → Masai Mara", highlights: ["Scenic drive", "Mara arrival", "Afternoon game drive"], description: "Depart Nairobi early for the Masai Mara. Arrive at your camp by early afternoon. Afternoon game drive introduces you to Kenya's most famous wildlife reserve.", accommodation: "Mara Camp", mealPlan: "Lunch, Dinner", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 2, title: "Masai Mara · Migration Day One", highlights: ["Migration tracking", "Wildebeest herds", "Predator action"], description: "Full day searching for the great migration. Between July and November, witness hundreds of thousands of wildebeest crossing the Mara River.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 3, title: "Masai Mara · River Crossing", highlights: ["River crossing", "Dramatic action", "Photography"], description: "A full day focused on the river crossings — the most dramatic part of the migration. Watch as herds brave the crocodiles to cross.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 4, title: "Masai Mara · Full Day Safari", highlights: ["Big Five tracking", "Extended game drive", "Plains exploration"], description: "Full day exploring the Mara's diverse habitats. Search for all members of the Big Five while enjoying the migration spectacle.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 5, title: "Masai Mara · Predator Day", highlights: ["Lion prides", "Cheetah hunting", "Leopard sightings"], description: "Focus on the predators that follow the migration — lions, cheetahs, and leopards. Morning and afternoon game drives.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 6, title: "Masai Mara · Extended Safari", highlights: ["Full day exploration", "Conservancy drive", "Bush dinner"], description: "Extended game drive exploring private conservancies adjacent to the main reserve. Evening bush dinner under the stars.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 7, title: "Masai Mara · Final Day", highlights: ["Morning game drive", "Last wildlife moments", "Farewell"], description: "Final morning game drive captures last wildlife moments. Return to camp for breakfast, then depart for Nairobi.", accommodation: "Mara Camp", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 8, title: "Masai Mara → Nairobi", highlights: ["Return journey", "Arrival in Nairobi", "Departure"], description: "Drive back to Nairobi. Arrive by late afternoon. Transfer to the airport for your departure.", accommodation: "N/A", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const pricingData = [
  { period: "Migration Season: Jul - Nov 2026", price: "$5,215", supplement: "$580" }
]

const includes = ["All accommodation — classic tented camp", "All meals — full board", "All national park entry fees", "All game drives in 4×4 safari vehicle", "Expert driver-guide", "Drinking water during drives", "Airport transfers"]

const excludes = ["Change in itinerary", "Travel / medical insurance", "Tips", "International air fare & Visa", "Items of personal nature", "Any extras"]

const extraAddons = ["Hot Air Balloon Safari", "Private vehicle", "Extended game drives"]

export default function KenyaMigrationSafariMara() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Migration Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Migration Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">MIGRATION SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Migration Adventure in the Mara</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Witness the Great Migration</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 8 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 1 Destination</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 5,215 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Africa's Greatest Wildlife Show</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This safari takes place during the annual Great Migration of wildebeest — one of nature's most spectacular events. Witness hundreds of thousands of animals crossing the Mara River, facing crocodiles and predators, in the world's most famous wildlife reserve.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Cloud, title: "Migration", desc: "Jul - Nov"}, {Icon: Mountain, title: "Big Five", desc: "All species"}, {Icon: LandPlot, title: "River", desc: "Dramatic crossings"}, {Icon: Star, title: "8 Days", desc: "Extended viewing"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Masai Mara", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 2 && <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Best viewing Jul-Nov. Deposit: $500. Balance due: 30 days prior.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Witness the Migration</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">One of nature's most spectacular events awaits.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}