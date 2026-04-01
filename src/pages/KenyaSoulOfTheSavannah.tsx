import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Heart, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Lake Nakuru", highlights: "Giraffe Centre visit, drive to Nakuru", property: "Lion Hill Lodge" },
  { day: "2", place: "Lake Nakuru National Park", highlights: "Rhinos, Flamingos, Game drives", property: "Lion Hill Lodge" },
  { day: "3", place: "Lake Nakuru → Masai Mara", highlights: "Rift Valley drive, camp arrival", property: "Soroi Mara Bush Camp" },
  { day: "4", place: "Masai Mara – Bush Walk", highlights: "Guided bush walk, Photography workshop", property: "Soroi Mara Bush Camp" },
  { day: "5", place: "Mara – Community Day", highlights: "School visit, Tree planting, Reiki circle", property: "Soroi Mara Bush Camp" },
  { day: "6", place: "Masai Mara – Big Five", highlights: "Full day game drives, Maasai blessing", property: "Soroi Mara Bush Camp" },
  { day: "7", place: "Masai Mara → Nairobi", highlights: "Flight to Nairobi, Departure", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi · Lake Nakuru",
    highlights: ["Giraffe Centre", "Rift Valley views", "Evening at lodge"],
    description: "The group convenes at the Four Points Sheraton, Jomo Kenyatta International Airport. After introductions and a pre-departure briefing, transfer to the Nairobi Giraffe Centre where Rothschild's giraffes can be fed from a raised platform at eye level. Then a three-hour drive southwest to Lake Nakuru National Park, crossing the floor of the Great Rift Valley. Check into Lion Hill Lodge, a four-star property within the park. Sundowners on the terrace, dinner as the African night settles in.",
    accommodation: "Lion Hill Lodge, Nakuru",
    mealPlan: "Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Lake Nakuru National Park",
    highlights: ["Rhino tracking", "Flamingo colonies", "Lion & Leopard sightings"],
    description: "The Kenyan early morning has a quality hard to name — air still cold, light arriving at a low angle through acacia. Lake Nakuru holds a nationally significant population of both black and white rhinos, and the morning game drive is where you may encounter them at close range, unhurried and enormous against the flat lakeshore. Also possible — lions in the fever tree woodland, leopards resting on branches, and flamingo congregations that rim the alkaline waters in bands of deep pink. Return for breakfast, time to journal, then a second game drive as the light turns gold.",
    accommodation: "Lion Hill Lodge, Nakuru",
    mealPlan: "Half Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Lake Nakuru → Masai Mara",
    highlights: ["Rift Valley crossing", "Mara arrival", "Evening game drive"],
    description: "A 4.5-hour drive across one of Africa's most varied overland routes. Maasai boma settlements, forested highland ridges, the vast open floor of the Rift — the landscape changes in chapters. Entering the Reserve, something changes at that boundary. The horizon extends, the sky broadens, wildlife appears without warning. Mara Bush Camp occupies a riverbank position: tented suites with proper beds and en-suite facilities, solar-powered, no-plastics throughout, Maasai staff at fair wages. Gold Eco-rated.",
    accommodation: "Soroi Mara Bush Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Masai Mara – Bush Walk & Photography",
    highlights: ["Guided bush walk", "Photography workshop", "Plains exploration"],
    description: "A guided bush walk with Maasai rangers: two to three hours on foot in the reserve. No vehicle, no elevated position. Just the ground as the wildlife experiences it. Rangers teach to read tracks, identify bird species by call, distinguish approaches. Then a one-hour photography session with the camp's resident photographer. Game drive across the Mara plains — cheetah, elephant, giraffe, the possibility of leopard. Dinner by fire. The sound of the bush arrives at night: hippos from the river, nightjars, distant lion.",
    accommodation: "Soroi Mara Bush Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Masai Mara – Community & Conservation",
    highlights: ["School visit", "Tree planting", "Reiki circle"],
    description: "Visit a local primary school in the Mara ecosystem. Children attend classes in buildings with earthen floors; their aspiration has no ceiling. Participate in a tree-planting exercise, each tree registered to the individual who planted it. The Plastics-for-Books programme is explained by teachers who run it. Afternoon at rest or game drive. Evening — a Reiki circle at the campfire, guided, unhurried, optional. The African night sky forms the ceiling.",
    accommodation: "Soroi Mara Bush Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Masai Mara – Big Five & Sunset Blessing",
    highlights: ["Full day game drives", "Big Five", "Maasai blessing ceremony"],
    description: "Extended game drives across the Mara's iconic open plains. The reserve's scale becomes apparent — corridors between rivers, kopjes where predators survey their territory, woodland edges where elephants move. Maasai guide knowledge distinguishes a game drive from an education. Picnic breakfast under a thorn tree. Late afternoon — as the sun drops, Maasai elders perform a traditional closing blessing. Stand in the circle. Receive it. Final dinner at camp — conversation tends to run late.",
    accommodation: "Soroi Mara Bush Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Masai Mara → Nairobi",
    highlights: ["Final morning", "Flight to Nairobi", "Departure"],
    description: "No alarm. A last breakfast on the terrace, watching the Mara River. Pack at your pace. Say goodbye to staff who have become familiar. A scenic one-hour flight from the Mara airstrip to Wilson Airport, Nairobi. From altitude, the reserve reveals its full scale — the river systems threading through grassland, the acacia ridgelines, the immensity of the plains. Transfer to Jomo Kenyatta International Airport. Kenya changes people. It does so quietly, without announcement.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: October/November 2026 (Oct 22, Nov 2, Nov 9)", price: "$7,111", supplement: "$490" },
]

const includes = [
  "All accommodation — 4 and 5-star eco-certified properties throughout",
  "All meals — full board from Day 1 dinner to Day 7 breakfast",
  "All national park and conservancy entry fees",
  "All game drives in 4×4 safari vehicles with professional guides",
  "Nairobi Giraffe Centre visit (Day 1)",
  "Guided bush walk with Maasai rangers (Day 4)",
  "Photography workshop with camp photographer (Day 4)",
  "Tree planting and school visit — Mara community (Day 5)",
  "Reiki circle facilitation (Day 5 evening)",
  "Maasai blessing ceremony (Day 6)",
  "Internal flight — Mara airstrip to Nairobi Wilson (Day 7)",
  "All airport and in-country transfers",
  "Bena Roberts as host throughout",
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
  "Hot Air Balloon Safari in Masai Mara",
  "Private game drive vehicle",
  "Extended game drives",
  "Spa treatments at camp",
  "Additional nights in Mara"
]

export default function KenyaSoulOfTheSavannah() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Soul of the Savannah" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Soul of the Savannah</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">WOMEN-ONLY SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Soul of the Savannah</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">An Intimate Escape</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 7 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 2 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 7,111 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Active Luxury: Comfort Meets Wilderness</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This seven-day circuit covers two of Kenya's most significant wildlife landscapes: Lake Nakuru, an alkaline sanctuary for both species of African rhino, and the Masai Mara, the northern arm of the world's most celebrated wildlife corridor. Eight guests per departure. No men. No compromises. Hosted by Bena Roberts, a women-only safari specialist with ten years of direct East African experience.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Heart, title: "Women-Only", desc: "Eight guests, all women"}, {Icon: LandPlot, title: "Big Five", desc: "Rhinos, lions, leopards, elephants"}, {Icon: Users, title: "Community", desc: "School visits, tree planting"}, {Icon: Star, title: "Eco-Certified", desc: "Gold-rated properties"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Lake Nakuru", type: "park"}, {name: "Masai Mara", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 3 && <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>}
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