import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Heart, Leaf } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Sustainable Welcome", highlights: "Eco-briefing, zero-waste dinner", property: "Eco Hotel" },
  { day: "2", place: "Nairobi – Fair Trade Tour", highlights: "Craft markets, women cooperatives", property: "Eco Hotel" },
  { day: "3", place: "Nairobi → Aberdare National Park", highlights: "Mountain drive, evening game drive", property: "Treehouse Lodge" },
  { day: "4", place: "Aberdare – Conservation Day", highlights: "Rhino tracking, anti-poaching unit", property: "Treehouse Lodge" },
  { day: "5", place: "Aberdare → Samburu Reserve", highlights: "Northern Kenya journey, cultural visit", property: "Samburu Lodge" },
  { day: "6", place: "Samburu – Wildlife Exploration", highlights: "Elehnt tracking, village homestay", property: "Samburu Lodge" },
  { day: "7", place: "Samburu → Ol Pejeta Conservancy", highlights: "Sweetwaters sanctuary, chimp sanctuary", property: "Ol Pejeta Camp" },
  { day: "8", place: "Ol Pejeta – Wildlife Research", highlights: "Big Five safari, research station visit", property: "Ol Pejeta Camp" },
  { day: "9", place: "Ol Pejeta → Lake Nakuru", highlights: "Lake Nakuru transfer, flamingo view", property: "Lion Hill Lodge" },
  { day: "10", place: "Lake Nakuru – Rhino Haven", highlights: "Full day rhino conservation", property: "Lion Hill Lodge" },
  { day: "11", place: "Lake Nakuru → Nairobi", highlights: "Final breakfast, airport transfer", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi · Sustainable Arrival",
    highlights: ["Eco-briefing", "Zero-waste welcome dinner", "Women-owned restaurant"],
    description: "Touch down at Jomo Kenyatta International Airport where your host meets you in the arrivals hall. Transfer to Nairobi's leading eco-certified hotel, where sustainability is woven into every practice. The group gathers for an introductory briefing on responsible travel, followed by dinner at a women-owned restaurant championing farm-to-table dining. The Nairobi evening is warm, the conversation flows, and your journey begins.",
    accommodation: "Eco Hotel, Nairobi",
    mealPlan: "Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi · Fair Trade Exploration",
    highlights: ["Women's cooperatives", "Fair trade markets", "Sustainable fashion tour"],
    description: "Today explores Nairobi's vibrant fair trade scene. Visit women's cooperatives producing handwoven textiles, beadwork, and contemporary crafts. Each artisan shares her story — the training programmes, the microfinance opportunities, the global markets now within reach. Lunch at a social enterprise restaurant where every meal supports youth education. Afternoon visit to a sustainable fashion collective. Return to the hotel for preparation.",
    accommodation: "Eco Hotel, Nairobi",
    mealPlan: "Breakfast, Lunch",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Nairobi → Aberdare National Park",
    highlights: ["Mountain scenic drive", "Treehouse accommodation", "Evening game drive"],
    description: "Depart Nairobi northwards through the central highlands — tea plantations, forested ridges, the cool air of altitude. Aberdare National Park occupies a highland ecosystem of bamboo forest, misty falls, and moorland. Arrive at your treehouse lodge, elevated above a floodlit waterhole where wildlife comes to drink. Evening game drive through the forest roads — leopard, elephant, buffalo, the rare bongo antelope.",
    accommodation: "Treehouse Lodge, Aberdare",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Aberdare · Conservation Immersion",
    highlights: ["Rhino tracking", "Anti-poaching unit", "Forest guided walk"],
    description: "Morning departure with a Kenya Wildlife Service ranger for a rhino tracking exercise. Aberdare holds a protected population of both black and white rhinos, and the tracking experience brings you close to these magnificent animals. Return to the lodge for breakfast, then visit the anti-poaching unit — rangers share stories, equipment, the daily realities of protecting Kenya's wildlife. Afternoon forest walk with a naturalist guide.",
    accommodation: "Treehouse Lodge, Aberdare",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Aberdare → Samburu National Reserve",
    highlights: ["Northern Kenya journey", "Samburu culture", "Arid landscape"],
    description: "A full day of travel north, descending from highland to semi-arid terrain. The landscape transforms — green valleys to brown savanna, highlands to the edge of the Chalbi Desert. Enter Samburu National Reserve, a rugged landscape home to the Samburu people, Kenya's most iconic pastoralists. Arrive at your lodge by late afternoon. The Samburu women welcome you with traditional song.",
    accommodation: "Samburu Lodge, Samburu",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Samburu · Wildlife & Community",
    highlights: ["Elephant tracking", "Village homestay", "Women empowerment projects"],
    description: "Morning game drive in search of Samburu's signature species — Grevy's zebra, Somali ostrich, Beisa oryx, the reticulated python. Then visit a Samburu village where the women's group runs an educational sponsorship programme. Spend time with the women, hear their stories, learn beadwork techniques passed through generations. Afternoon at the lodge or optional additional game drive.",
    accommodation: "Samburu Lodge, Samburu",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Samburu → Ol Pejeta Conservancy",
    highlights: ["Conservancy transfer", "Sweetwaters visit", "Chimpanzee sanctuary"],
    description: "Depart Samburu southeast to Ol Pejeta Conservancy, a 90,000-acre private conservancy adjacent to Mount Kenya. Ol Pejeta is home to the largest population of black rhinos in East Africa, the only chimpanzee sanctuary in Kenya, and a model of community-based conservation. Arrive in time for afternoon game drive along the Ewaso Ng'iro river.",
    accommodation: "Ol Pejeta Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Ol Pejeta · Wildlife Research",
    highlights: ["Big Five safari", "Research station", "Rhino sanctuary"],
    description: "Full day at Ol Pejeta. Morning game drive across the conservancy in search of lion, elephant, buffalo, rhino, and leopard — all present in good numbers. Visit the research station where conservation biologists explain telemetry studies, wildlife corridors, and community grazing programmes. Afternoon visit to the chimpanzee sanctuary. Evening sundowners on the plains.",
    accommodation: "Ol Pejeta Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Ol Pejeta → Lake Nakuru",
    highlights: ["Rift Valley descent", "Flamingo viewpoint", "Evening at lake"],
    description: "Drive south through the central highlands, descending into the Rift Valley floor. Lake Nakuru National Park is an alkaline lake famed for its spectacular flamingo populations — millions of birds creating a pink shoreline. Arrive at your lodge within the park in the afternoon. Evening walk along the lake shore or relax on the terrace watching the bird spectacle.",
    accommodation: "Lion Hill Lodge, Nakuru",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Lake Nakuru · Rhino Conservation",
    highlights: ["Full day rhino tracking", "Bird sanctuary", "Departure prep"],
    description: "Dedicate the final full day to Lake Nakuru's most celebrated residents — both black and white rhinos. Morning and afternoon game drives focusing on the rhino populations, with a Kenya Wildlife Service tracker. The park also holds significant populations of lion, buffalo, giraffe, and waterbuck. Return to the lodge for a farewell dinner under the African sky.",
    accommodation: "Lion Hill Lodge, Nakuru",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Lake Nakuru → Nairobi",
    highlights: ["Final breakfast", "Airport transfer", "Departure"],
    description: "Breakfast at the lodge with views over the lake. Drive back to Nairobi, approximately three hours. The journey passes through the Rift Valley floor, the escarpment wall, and back into the highland plateau. Arrive at Jomo Kenyatta International Airport in time for your departure flight. Your transformative eleven-day journey through Kenya's conservation landscapes concludes.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: October/November 2026 (Oct 15, Nov 5)", price: "$7,950", supplement: "$620" },
]

const includes = [
  "All accommodation — 4 and 5-star eco-certified properties throughout",
  "All meals — full board from Day 1 dinner to Day 11 breakfast",
  "All national park and conservancy entry fees",
  "All game drives in 4×4 safari vehicles with professional guides",
  "Women's cooperative visits and fair trade tours (Days 2, 6)",
  "Rhino tracking with Kenya Wildlife Service (Days 4, 10)",
  "Anti-poaching unit visit (Day 4)",
  "Samburu village and women's group visit (Day 6)",
  "Chimpanzee sanctuary entry (Day 8)",
  "Ol Pejeta research station visit (Day 8)",
  "All airport and in-country transfers",
  "Expert host and naturalist guide throughout",
  "Drinking water throughout",
  "Carbon offset contribution"
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
  "Mount Kenya climb extension",
  "Private game drive vehicle",
  "Spa treatments at lodge",
  "Extended game drives",
  "Additional nights in Nairobi"
]

export default function KenyaWomensEthicalEmpoweringSafari() {
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
        <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Women's Ethical & Empowering Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Women's Ethical Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">WOMEN-ONLY SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Women's Ethical & Empowering Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Conservation Through Connection</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 11 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 7 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 7,950 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Ethical Luxury: Travel With Purpose</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This eleven-day journey weaves through Kenya's most significant conservation landscapes while centering women-led initiatives, fair trade communities, and ethical tourism practices. Eight guests per departure. No men. A curated experience at the intersection of wildlife conservation and women's empowerment. Hosted by a specialist in ethical safari tourism.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Heart, title: "Women-Only", desc: "Eight guests, all women"}, {Icon: Leaf, title: "Ethical", desc: "Fair trade, community projects"}, {Icon: LandPlot, title: "Big Five", desc: "Rhinos, lions, elephants"}, {Icon: Star, title: "Eco-Certified", desc: "Gold-rated properties"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Aberdare", type: "park"}, {name: "Samburu", type: "park"}, {name: "Ol Pejeta", type: "park"}, {name: "Lake Nakuru", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $600. Balance due: 60 days prior. Group maximum: 12 women.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Join This Journey of Connection</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Experience Kenya's wilderness with a community of like-minded women.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}