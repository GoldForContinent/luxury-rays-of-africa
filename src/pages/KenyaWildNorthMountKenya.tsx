import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Mountain, Compass } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Mt Kenya Briefing", highlights: "Pre-departure briefing, equipment check", property: "TBD Hotel" },
  { day: "2", place: "Nairobi → Mount Kenya National Park", highlights: "Scenic drive, base camp arrival", property: "Mountain Lodge" },
  { day: "3", place: "Mount Kenya – Forest Trek", highlights: "Cedar forest, wildlife tracking", property: "Mountain Lodge" },
  { day: "4", place: "Mount Kenya – Moorland Trek", highlights: "Alpine zone, endemic species", property: "High Altitude Camp" },
  { day: "5", place: "Mount Kenya – Summit Attempt", highlights: "Summit push, alpine desert", property: "High Altitude Camp" },
  { day: "6", place: "Mount Kenya → Samburu", highlights: "Descent, northern transfer", property: "Samburu Lodge" },
  { day: "7", place: "Samburu Reserve – Wildlife", highlights: "Full day game drives", property: "Samburu Lodge" },
  { day: "8", place: "Samburu → Meru National Park", highlights: "Meru conservation area", property: "Meru Lodge" },
  { day: "9", place: "Meru – Untamed Wilderness", highlights: "Off-road game drives, river views", property: "Meru Lodge" },
  { day: "10", place: "Meru → Nairobi", highlights: "Return journey, departure", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi · Expedition Preparation",
    highlights: ["Expedition briefing", "Equipment check", "Team assembly"],
    description: "Arrive in Nairobi and transfer to your pre-expedition hotel. The afternoon is dedicated to a comprehensive briefing with your climbing guide and support team. Review the route, discuss altitude protocols, and check all climbing equipment. Meet your fellow expedition members — a small group of eight adventurers. Dinner at a local restaurant. Rest early; the mountains await.",
    accommodation: "TBD Hotel, Nairobi",
    mealPlan: "Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi → Mount Kenya National Park",
    highlights: ["Scenic drive", "Mountain arrival", "Base camp setup"],
    description: "Depart Nairobi early, driving north through the central highlands. The road climbs through coffee and tea plantations, the air cooling as altitude increases. Enter Mount Kenya National Park, a UNESCO World Heritage Site and Kenya's highest peak. Arrive at the base camp in the afternoon. Acclimatization walk through the surrounding forest. Dinner and early rest.",
    accommodation: "Mountain Lodge, Mt. Kenya",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Mount Kenya · Cedar Forest Trek",
    highlights: ["Ancient cedar forest", "Colobus monkeys", "Bird watching"],
    description: "Begin the ascent through one of Kenya's most ancient forests — the Cedar forest of Mount Kenya. The trail climbs gently through a cathedral of towering cedar trees, their branches draped in lichen. Listen for the calls of colobus monkeys, Turaco birds, and the occasional elephant. The forest is alive with endemic species. Reach the first camp by late afternoon.",
    accommodation: "Mountain Lodge, Mt. Kenya",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Mount Kenya · Moorland Zone",
    highlights: ["Alpine meadow", "Giant lobelia", "Himalayan tahr"],
    description: "Above the forest, the landscape transforms into the moorland zone — a surreal landscape of giant lobelia, everlasting flowers, and jagged volcanic peaks. The trail climbs steadily, and the air thins. Watch for the rare Himalayan tahr, introduced decades ago and now thriving. The views expand — the Kenya plains visible to the south, the jagged peaks above. Reach the high camp by afternoon.",
    accommodation: "High Altitude Camp, Mt. Kenya",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Mount Kenya · Summit Day",
    highlights: ["Summit attempt", "Sunrise over Africa", "Alpine descent"],
    description: "The summit day begins before dawn. Headlamp on, crampons fitted, ascend the rocky trail to Point Lenana — the third highest peak of Mount Kenya at 4,985 metres. The climb is demanding but achievable without technical climbing. Reach the summit as the East African sun rises, casting gold across the peaks below. The view is extraordinary — the central glaciers, the Kenyan plains, Tanzania's distant peaks. Descend to high camp for breakfast, then continue down to the mountain lodge.",
    accommodation: "Mountain Lodge, Mt. Kenya",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Mount Kenya → Samburu National Reserve",
    highlights: ["Descent journey", "Northern Kenya", "Samburu arrival"],
    description: "Descend the mountain through the forest, completing the circuit. Return to Nairobi for a late lunch, then continue north to Samburu National Reserve. The landscape transforms — from highland forest to semi-arid savanna. Arrive at the lodge by late afternoon. The Samburu countryside is stark, beautiful, and home to species found nowhere else on Earth.",
    accommodation: "Samburu Lodge, Samburu",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Samburu · Signature Species",
    highlights: ["Grevy's zebra", "Beisa oryx", "Full day game drive"],
    description: "Full day in Samburu, one of Kenya's most scenic reserves. The Samburu ecosystem holds species found only in northern Kenya — Grevy's zebra with its distinct narrow stripes, the Beisa oryx with its striking markings, the Somali ostrich, and the reticulated python. Game drives along the Ewaso Ng'iro river, the lifeblood of this arid landscape. Visit a Samburu village in the afternoon.",
    accommodation: "Samburu Lodge, Samburu",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Samburu → Meru National Park",
    highlights: ["Meru conservation", "Lesser-known park", "River systems"],
    description: "Transfer east to Meru National Park, one of Kenya's lesser-visited wilderness areas. Meru is a landscape of river systems, doum palms, and isolated kopjes — the setting for Joy Adamson's Born Free books. The park is wild and empty, with none of the crowds found in more famous reserves. Arrive at the lodge by afternoon. Evening game drive along the river.",
    accommodation: "Meru Lodge, Meru",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Meru · Untamed Africa",
    highlights: ["Off-road exploration", "Tsetse fly conservation", "Remote landscape"],
    description: "Dedicate the day to exploring Meru's remote interior. The park permits off-road driving, allowing access to areas other reserves cannot reach. Track elephant herds moving through the riverine forest, search for lion prides resting under acacia trees, and explore the kopjes where leopards den. Meru offers an old-school safari experience — vast, empty, and deeply atmospheric. Final dinner under the stars.",
    accommodation: "Meru Lodge, Meru",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Meru → Nairobi",
    highlights: ["Final morning", "Return journey", "Departure"],
    description: "Morning game drive, a final opportunity to spot any species missed. Return to Nairobi, a five-hour drive. The journey passes through diverse landscapes — savanna, highland, agricultural zones. Arrive in Nairobi by late afternoon. Transfer to Jomo Kenyatta International Airport for your departure flight. The mountains, the savanna, the river valleys — Kenya has revealed itself.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: October/November 2026 (Oct 20, Nov 10)", price: "$5,490", supplement: "$480" },
]

const includes = [
  "All accommodation — 4-star properties throughout (mountain and safari)",
  "All meals — full board from Day 1 dinner to Day 10 breakfast",
  "All national park and conservancy entry fees",
  "All game drives in 4×4 safari vehicles with professional guides",
  "Mount Kenya climbing guide and support team",
  "Mountain equipment — crampons, harnesses, ropes (where required)",
  "All climbing permits and park fees",
  "Samburu village visit (Day 7)",
  "Meru off-road game drives",
  "All airport and in-country transfers",
  "Expert naturalist guide throughout",
  "Drinking water throughout"
]

const excludes = [
  "Change in itinerary",
  "Travel / medical insurance",
  "Tips / gratuities for driver / guide and hotel staff",
  "Return international air fare & Visa fee",
  "Items of personal nature i.e., Alcoholic beverages & laundry, telephone, souvenirs etc.",
  "Any extras not mentioned above e.g., extra meals, activities – balloon safaris, sundowners etc."
]

const extraAddons = [
  "Hot Air Balloon Safari in Samburu",
  "Private climbing guide upgrade",
  "Additional nights in Nairobi",
  "Spa treatments at safari lodge",
  "Extension to Masai Mara"
]

export default function KenyaWildNorthMountKenya() {
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
        <img src="https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Wild North & Mount Kenya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Wild North & Mount Kenya</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">ADVENTURE SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Wild North & Mount Kenya Expedition</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Summit and Safari Combined</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 10 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 6 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 5,490 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Adventure Meets Wildlife</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This ten-day expedition combines the challenge of summiting Mount Kenya's Point Lenana (4,985m) with a wildlife safari through Kenya's wildest northern landscapes. A unique combination of high-altitude adventure and safari exploration, this journey is for those who seek both physical achievement and wildlife encounters. Small group of eight adventurers.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Mountain, title: "Summit", desc: "Point Lenana at 4,985m"}, {Icon: Compass, title: "Adventure", desc: "Trek, wildlife, culture"}, {Icon: LandPlot, title: "Big Five", desc: "Samburu and Meru"}, {Icon: Star, title: "Unique", desc: "Off-road game drives"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Mount Kenya", type: "mountain"}, {name: "Samburu", type: "park"}, {name: "Meru", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : stop.type === 'mountain' ? 'bg-purple-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $600. Balance due: 60 days prior. Minimum 4 guests, maximum 8. Fitness level: Moderate to good.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Conquer and Explore</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Combine your summit achievement with Kenya's most remote wildlife destinations.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}