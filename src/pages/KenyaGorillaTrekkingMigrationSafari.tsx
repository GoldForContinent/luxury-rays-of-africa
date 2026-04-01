import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Mountain, Plane, Shield, Footprints } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Masai Mara", highlights: "Drive to Mara, afternoon game drive", property: "Mara Camp" },
  { day: "2", place: "Masai Mara – Full Day", highlights: "Full day Big Five safari", property: "Mara Camp" },
  { day: "3", place: "Masai Mara – Day 2", highlights: "Morning drive, Mara river", property: "Mara Camp" },
  { day: "4", place: "Masai Mara – Nairobi", highlights: "Morning drive, return to Nairobi", property: "Nairobi Hotel" },
  { day: "5", place: "Nairobi – Entebbe (Fly)", highlights: "Flight to Uganda, drive to Bwindi", property: "Bwindi Lodge" },
  { day: "6", place: "Bwindi – Gorilla Trekking", highlights: "Mountain gorilla trekking", property: "Bwindi Lodge" },
  { day: "7", place: "Bwindi – Second Trek", highlights: "Second gorilla trek or nature walk", property: "Bwindi Lodge" },
  { day: "8", place: "Bwindi – Lake Mburo", highlights: "Drive to Lake Mburo National Park", property: "Mburo Lodge" },
  { day: "9", place: "Lake Mburo – Full Day", highlights: "Game drives, walking safari", property: "Mburo Lodge" },
  { day: "10", place: "Lake Mburo – Kampala", highlights: "Drive to Kampala", property: "Kampala Hotel" },
  { day: "11", place: "Kampala – Entebbe", highlights: "Departure, flight to Nairobi", property: "N/A" },
  { day: "12", place: "Nairobi – Extended", highlights: "Extra day for travel buffer", property: "N/A" },
  { day: "13", place: "Safari Ends", highlights: "Final departure arrangements", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi → Masai Mara",
    highlights: ["Scenic drive", "Mara arrival", "Afternoon game drive"],
    description: "Depart Nairobi early morning for the Masai Mara, approximately a five-hour drive through the Rift Valley. The journey itself is spectacular — from highland farmland to the vast savanna of the Mara. Arrive at your camp by early afternoon. Afternoon game drive introduces you to Kenya's most famous wildlife reserve.",
    accommodation: "Mara Camp",
    mealPlan: "Lunch, Dinner",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Masai Mara · Full Day Safari",
    highlights: ["Full day game drives", "Big Five tracking", "Plains exploration"],
    description: "Full day in the world-famous Masai Mara. Morning game drive follows the wildlife as they become active — lion prides on the hunt, elephants moving across the plains, giraffes browsing on acacia trees. The Mara is home to all members of the Big Five. Picnic lunch on the plains. Afternoon continues the exploration.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Masai Mara · Second Day",
    highlights: ["Mara river crossing", "Predator action", "Evening sundowners"],
    description: "Another full day to explore this extraordinary reserve. Morning game drive along the Mara river — search for crocodiles and hippos. Search for wildlife missed the previous day — perhaps leopard in a tree or cheetah on the hunt. Afternoon continues the exploration. Evening — sundowners on the plains with views of the African sunset.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Masai Mara → Nairobi",
    highlights: ["Final morning drive", "Return journey", "Overnight in Nairobi"],
    description: "Early morning game drive captures the Mara at its most active. Return to camp for breakfast, then depart for Nairobi. The return journey takes approximately five hours. Arrive in Nairobi by late afternoon. Overnight at a comfortable city hotel.",
    accommodation: "Nairobi Hotel",
    mealPlan: "Breakfast, Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Nairobi → Entebbe → Bwindi",
    highlights: ["Flight to Uganda", "Drive to Bwindi", "Forest arrival"],
    description: "Early morning transfer to Nairobi's Jomo Kenyatta International Airport for your flight to Entebbe, Uganda (approximately 2 hours). Upon arrival, meet your Ugandan guide and drive to Bwindi Impenetrable National Park. The drive takes approximately 8-9 hours, but scenic stops make it an adventure. Arrive at your lodge in the forest late afternoon.",
    accommodation: "Bwindi Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Bwindi · Gorilla Trekking Day 1",
    highlights: ["Mountain gorilla trek", "Close encounters", "Forest exploration"],
    description: "The experience of a lifetime begins early this morning. After a briefing at the park headquarters, venture into the dense Bwindi Impenetrable Forest with your trackers. Follow the signs of recent gorilla activity until you come face to face with a habituated mountain gorilla family. Spend one magical hour observing their behavior — feeding, playing, and interacting. Return to lodge for lunch and relaxation.",
    accommodation: "Bwindi Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Bwindi · Second Gorilla Trek",
    highlights: ["Second gorilla family", "Different gorilla group", "Additional forest walk"],
    description: "A second day of gorilla trekking allows you to experience a different gorilla family. Each family has its own unique personality and dynamics. Morning trek into the forest, following a different group. Another hour with these magnificent creatures. Afternoon at leisure or optional nature walk in the forest searching for other primates and birds.",
    accommodation: "Bwindi Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Bwindi → Lake Mburo",
    highlights: ["Drive to Uganda", "Lake Mburo arrival", "Evening game drive"],
    description: "Depart Bwindi after breakfast and drive to Lake Mburo National Park in southwestern Uganda. The drive takes approximately 5-6 hours through the Ugandan countryside. Arrive at your lodge by mid-afternoon. Evening game drive in Lake Mburo — the only park in Uganda where you can see zebras on a game drive.",
    accommodation: "Mburo Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Lake Mburo · Full Day Safari",
    highlights: ["Game drives", "Walking safari", "Boat safari"],
    description: "Full day exploring Lake Mburo National Park. Morning game drive searches for the park's wildlife — zebras, buffaloes, hippos, crocodiles, and over 350 bird species. Mid-morning — guided walking safari with park rangers. Afternoon — optional boat safari on Lake Mburo to see hippos and crocodiles up close. Evening relaxation at camp.",
    accommodation: "Mburo Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Lake Mburo → Kampala",
    highlights: ["Morning drive", "Kampala arrival", "City exploration"],
    description: "Early morning game drive captures the wildlife as they become active. Return to camp for breakfast, then depart for Kampala. The drive takes approximately 4-5 hours. Arrive in Kampala late afternoon. Evening at leisure to explore the city or relax at your hotel.",
    accommodation: "Kampala Hotel",
    mealPlan: "Breakfast, Lunch",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Kampala → Entebbe → Nairobi",
    highlights: ["Departure", "Flight to Nairobi", "Safari concludes"],
    description: "Morning at leisure in Kampala. Transfer to Entebbe for your flight back to Nairobi. Arrive in Nairobi mid-afternoon. Your safari concludes here. You can connect to your international departure or extend your stay in Kenya.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Apr - Jun 2026", price: "$13,870", supplement: "$2,200" },
  { period: "High Season: Jul - Mar 2026/27", price: "$14,870", supplement: "$2,450" },
  { period: "Peak Season: Jul - Oct 2026", price: "$15,870", supplement: "$2,700" }
]

const includes = [
  "All accommodation — tented camps & lodges",
  "All meals as specified in itinerary",
  "All national park entry fees (Kenya & Uganda)",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Round-trip road transport from Nairobi (Kenya portion)",
  "Internal flights Nairobi-Entebbe-Nairobi",
  "Expert driver-guide throughout",
  "Gorilla trekking permits (2 permits per person)",
  "Drinking water during drives"
]

const excludes = [
  "Change in itinerary",
  "Travel / medical insurance",
  "Tips / gratuities for driver / guide and hotel staff",
  "Return international air fare & Visa fees (Kenya & Uganda)",
  "Items of personal nature",
  "Any extras not mentioned above"
]

const extraAddons = [
  "Hot Air Balloon Safari in Masai Mara",
  "Private game drive vehicle",
  "Additional gorilla trekking permit",
  "Cultural village visit"
]

export default function KenyaGorillaTrekkingMigrationSafari() {
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
        <img src="https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Gorilla Trekking Migration Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Gorilla Trekking & Migration Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">KENYA + UGANDA COMBO</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Gorilla Trekking & Migration Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Masai Mara + Uganda Mountain Gorillas</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 13 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 4 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 14,870 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Two Countries, Two Unmissable Experiences</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This extraordinary 13-day safari combines Kenya's iconic Masai Mara with Uganda's mountain gorillas. Witness the Great Migration in the Mara, then fly to Uganda for the once-in-a-lifetime experience of trekking to see mountain gorillas in Bwindi Impenetrable Forest.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Mountain, title: "Masai Mara", desc: "Great Migration"}, {Icon: Shield, title: "Gorillas", desc: "Bwindi Forest"}, {Icon: Plane, title: "Two Countries", desc: "Kenya + Uganda"}, {Icon: Footprints, title: "Adventure", desc: "13 days exploring"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Masai Mara", type: "park"}, {name: "Nairobi", type: "stop"}, {name: "Bwindi (Uganda)", type: "park"}, {name: "Lake Mburo", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 5 && <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $1,500. Balance due: 30 days prior. Minimum 2 guests. Gorilla permits are non-refundable.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Experience Two Countries</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Combine the Great Migration with mountain gorilla trekking for the ultimate East African adventure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
