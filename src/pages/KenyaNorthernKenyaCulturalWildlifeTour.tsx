import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Users, Compass, Landmark, HandHeart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Samburu", highlights: "Drive to Samburu, evening game drive", property: "Samburu Camp" },
  { day: "2", place: "Samburu – Full Day", highlights: "Desert wildlife, tribal culture", property: "Samburu Camp" },
  { day: "3", place: "Samburu – Marsabit", highlights: "Drive to Marsabit, mountain views", property: "Marsabit Lodge" },
  { day: "4", place: "Marsabit – Turkana Border", highlights: "Northern frontier, tribal lands", property: "Frontier Lodge" },
  { day: "5", place: "Turkana Region", highlights: "Lake Turkana views, desert exploration", property: "Desert Camp" },
  { day: "6", place: "Turkana – Kalacha", highlights: "Oasis at Kalacha, desert landscapes", property: "Kalacha Camp" },
  { day: "7", place: "Kalacha – Marsabit", highlights: "Return journey, scenic drives", property: "Marsabit Lodge" },
  { day: "8", place: "Marsabit – Meru", highlights: "Drive to Meru National Park", property: "Meru Camp" },
  { day: "9", place: "Meru – Full Day", highlights: "Big Five, rhino tracking", property: "Meru Camp" },
  { day: "10", place: "Meru – Isiolo", highlights: "Drive to Isiolo, cultural visits", property: "Isiolo Hotel" },
  { day: "11", place: "Isiolo – Lewa Downs", highlights: "Lewa Wildlife Conservancy", property: "Lewa Camp" },
  { day: "12", place: "Lewa – Full Day", highlights: "Rhinos, elephants, community", property: "Lewa Camp" },
  { day: "13", place: "Lewa – Nairobi", highlights: "Return to Nairobi, safari ends", property: "N/A" },
  { day: "14", place: "Safari Ends", highlights: "Departure arrangements", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi → Samburu",
    highlights: ["Scenic drive", "Northern frontier", "Evening game drive"],
    description: "Depart Nairobi early morning for Samburu National Reserve in northern Kenya. The drive takes you through diverse landscapes into the remote northern frontier. Arrive at camp for lunch. Afternoon game drive introduces you to the unique wildlife of this arid region.",
    accommodation: "Samburu Camp",
    mealPlan: "Lunch, Dinner",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Samburu · Cultural & Wildlife",
    highlights: ["Grevy's zebra", "Reticulated giraffe", "Samburu culture"],
    description: "Full day in Samburu exploring both wildlife and culture. Morning game drive searches for the rare species found only in northern Kenya — Grevy's zebra, reticulated giraffe, Somali ostrich, and gerenuk. Visit a Samburu village to learn about their traditional nomadic lifestyle.",
    accommodation: "Samburu Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Samburu → Marsabit",
    highlights: ["Mountain drive", "Forest landscapes", "Cultural stops"],
    description: "Depart Samburu and drive to Marsabit, a mountain forest in the middle of the desert. The journey takes you through changing landscapes. Arrive at your lodge in the late afternoon. Evening at leisure in this unique setting.",
    accommodation: "Marsabit Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Marsabit → Turkana Border",
    highlights: ["Northern frontier", "Tribal territories", "Desert landscapes"],
    description: "Continue north into the remote lands of northern Kenya. The journey takes you through territories of various tribal groups. Arrive at your camp near the Turkana border by late afternoon. Experience the stark beauty of this remote wilderness.",
    accommodation: "Frontier Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Turkana Region Exploration",
    highlights: ["Lake Turkana views", "Tribal villages", "Desert exploration"],
    description: "Explore the Turkana region — one of Kenya's most remote and least visited areas. Visit local Turkana villages, learn about their traditional fishing and pastoralist lifestyles. The stark desert landscapes against the blue waters of Lake Turkana create dramatic scenery.",
    accommodation: "Desert Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Turkana → Kalacha",
    highlights: ["Kalacha Oasis", "Desert scenery", "Cultural experiences"],
    description: "Journey to the oasis at Kalacha — a hidden gem in the Chalbi Desert. This natural spring creates a green oasis in the otherwise arid landscape. Interact with the local Dassenech people and learn about their unique desert adaptation.",
    accommodation: "Kalacha Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Kalacha → Marsabit",
    highlights: ["Return journey", "Mountain forests", "Scenic landscapes"],
    description: "Begin the journey back towards Marsabit. The morning light casts beautiful shadows on the desert landscape. Ascend into the mountain forests, arriving at Marsabit in the afternoon. Evening at leisure.",
    accommodation: "Marsabit Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Marsabit → Meru",
    highlights: ["Drive to Meru", "Meru National Park", "River ecosystems"],
    description: "Depart Marsabit and drive south to Meru National Park. Meru is known for its rivers, forests, and abundant wildlife. Arrive at camp for lunch. Afternoon game drive in this beautiful park.",
    accommodation: "Meru Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Meru · Big Five Safari",
    highlights: ["Rhino tracking", "Lion prides", "Elephant herds"],
    description: "Full day in Meru National Park searching for the Big Five. The park has healthy populations of lions, elephants, buffaloes, and rhinos. Meru is also known for its diversity of bird species. Morning and afternoon game drives.",
    accommodation: "Meru Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Meru → Isiolo",
    highlights: ["Drive to Isiolo", "Cultural town", "Market visits"],
    description: "Depart Meru and drive to Isiolo — a market town at the crossroads of northern Kenya. The town is a cultural hub where various ethnic groups meet. Explore the local market and interact with local communities.",
    accommodation: "Isiolo Hotel",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Isiolo → Lewa Downs",
    highlights: ["Lewa Conservancy", "Rhino sanctuary", "Community visit"],
    description: "Drive to the Lewa Wildlife Conservancy — a world-famous rhino sanctuary and UNESCO World Heritage Site. Arrive at your camp for lunch. Afternoon game drive in this remarkable conservation area.",
    accommodation: "Lewa Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 12,
    title: "Lewa · Conservation Day",
    highlights: ["Rhino families", "Elephant herds", "Conservancy tour"],
    description: "Full day in Lewa experiencing one of Kenya's most successful conservation stories. Morning game drive searches for black and white rhinos. Visit the conservation headquarters to learn about their work. Afternoon continues the exploration.",
    accommodation: "Lewa Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 13,
    title: "Lewa → Nairobi",
    highlights: ["Final morning drive", "Return journey", "Safari concludes"],
    description: "Early morning game drive in Lewa captures the wildlife as they become active. Return to camp for breakfast, then depart for Nairobi. Arrive in the capital by late afternoon.",
    accommodation: "N/A",
    mealPlan: "Breakfast, Lunch",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Apr - Jun 2026", price: "$6,990", supplement: "$950" },
  { period: "High Season: Jul - Mar 2026/27", price: "$7,490", supplement: "$1,050" },
  { period: "Peak Season: Jul - Oct 2026", price: "$8,000", supplement: "$1,200" }
]

const includes = [
  "All accommodation — tented camps & lodges",
  "All meals as specified in itinerary",
  "All national park entry fees",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Round-trip road transport from Nairobi",
  "Expert driver-guide throughout",
  "Cultural village visits",
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
  "Camel trekking in Samburu",
  "Flying visit to remote camps",
  "Private game drive vehicle",
  "Extended stays at any location"
]

export default function KenyaNorthernKenyaCulturalWildlifeTour() {
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
        <img src="https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Northern Kenya Cultural Wildlife Tour" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Northern Kenya Cultural Wildlife Tour</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">CULTURAL WILDLIFE TOUR</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Northern Kenya Cultural Wildlife Tour</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">14 Days of Culture & Wildlife in Kenya's Remote North</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 14 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 7 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 7,490 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Kenya's Untamed North</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This 14-day cultural wildlife tour takes you through Kenya's remote northern frontier. Experience ancient tribal cultures, explore dramatic desert landscapes, and discover wildlife found nowhere else in Kenya.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Users, title: "Tribal Cultures", desc: "Samburu, Turkana, Dassenech"}, {Icon: Compass, title: "Remote North", desc: "Off the beaten path"}, {Icon: Landmark, title: "Unique Wildlife", desc: "Grevy's zebra, reticulated giraffe"}, {Icon: HandHeart, title: "Conservation", desc: "Lewa rhino sanctuary"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Samburu", type: "park"}, {name: "Marsabit", type: "stop"}, {name: "Turkana", type: "park"}, {name: "Kalacha", type: "stop"}, {name: "Meru", type: "park"}, {name: "Lewa", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 7 && <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $500. Balance due: 21 days prior. Minimum 2 guests.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Discover Kenya's Untamed North</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Experience ancient cultures and remote wilderness on this unique journey.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
