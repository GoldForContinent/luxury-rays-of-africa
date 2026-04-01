import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Mountain, Waves, Compass, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Marsabit", highlights: "Drive north through highlands", property: "Marsabit Lodge" },
  { day: "2", place: "Marsabit – Lake Turkana", highlights: "Scenic drive to Loyangalani", property: "Loyangalani Camp" },
  { day: "3", place: "Lake Turkana – Full Day", highlights: "Rock art sites, tribal villages", property: "Loyangalani Camp" },
  { day: "4", place: "Lake Turkana – Day 2", highlights: "Crocodile farms, fishing villages", property: "Loyangalani Camp" },
  { day: "5", place: "Lake Turkana – Day 3", highlights: "Desert exploration, springs", property: "Loyangalani Camp" },
  { day: "6", place: "Lake Turkana – Marsabit", highlights: "Return journey, mountain drive", property: "Marsabit Lodge" },
  { day: "7", place: "Marsabit – Samburu", highlights: "Drive to Samburu National Reserve", property: "Samburu Camp" },
  { day: "8", place: "Samburu – Full Day", highlights: "Big Five safari, desert wildlife", property: "Samburu Camp" },
  { day: "9", place: "Samburu – Nairobi", highlights: "Return to Nairobi, safari ends", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi → Marsabit",
    highlights: ["Scenic drive", "Mount Kenya views", "Highland landscapes"],
    description: "Depart Nairobi early morning for the journey to Marsabit in northern Kenya. The drive takes you through diverse landscapes — from central highlands coffee farms to the semi-arid lands of the north. Arrive at Marsabit by late afternoon. Evening at leisure.",
    accommodation: "Marsabit Lodge",
    mealPlan: "Lunch, Dinner",
    image: "https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Marsabit → Lake Turkana",
    highlights: ["Scenic mountain pass", "Loyangalani arrival", "Desert landscapes"],
    description: "Continue north from Marsabit to the remote village of Loyangalani on the shores of Lake Turkana. The journey descends through dramatic mountain passes into the desert. Arrive at your camp by the emerald waters of the world's largest desert lake.",
    accommodation: "Loyangalani Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Lake Turkana · Rock Art Day",
    highlights: ["Ancient rock art", "Eliye Springs", "Tribal culture"],
    description: "Full day exploring the rock art sites around Lake Turkana. Visit the famous rock paintings at Eliye Springs, some of the oldest in East Africa. Learn about the cultures of the Turkana, Dassenech, and El Molo people who call this harsh land home.",
    accommodation: "Loyangalani Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Lake Turkana · Cultural Day",
    highlights: ["Fishing villages", "Crocodile farm", "Market visits"],
    description: "Explore the fishing villages along the lake shore. Visit the crocodile farm at Loyangalani and learn about conservation efforts for the giant Nile crocodiles. Interact with local communities and experience their traditional way of life.",
    accommodation: "Loyangalani Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Lake Turkana · Desert Exploration",
    highlights: ["Desert springs", "Bird watching", "Scenic vistas"],
    description: "Discover the hidden gems of the Lake Turkana region. Visit the desert springs where water emerges from the earth, creating oases in the arid landscape. Bird watching around these springs reveals a surprising variety of waterfowl and raptors.",
    accommodation: "Loyangalani Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Lake Turkana → Marsabit",
    highlights: ["Return journey", "Mountain drive", "Highland views"],
    description: "Begin the journey back to Marsabit. The morning light casts beautiful shadows on the desert landscape. Ascend back into the highlands, arriving at Marsabit in the afternoon. Evening at leisure.",
    accommodation: "Marsabit Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Marsabit → Samburu",
    highlights: ["Drive to Samburu", "Desert wildlife", "Northern frontier"],
    description: "Depart Marsabit for Samburu National Reserve. The drive takes you through the remote northern frontier lands, home to rare desert species. Arrive at camp for lunch. Afternoon game drive in this rugged reserve.",
    accommodation: "Samburu Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Samburu · Full Day Safari",
    highlights: ["Grevy's zebra", "Reticulated giraffe", "Desert predators"],
    description: "Full day in Samburu National Reserve. Search for the rare species found only in northern Kenya — Grevy's zebra, reticulated giraffe, Somali ostrich, and the gerenuk. The reserve is also home to lions, leopards, and elephants adapted to the desert environment.",
    accommodation: "Samburu Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Samburu → Nairobi",
    highlights: ["Final morning drive", "Return journey", "Safari ends"],
    description: "Early morning game drive captures the Samburu wildlife as they become active. Return to camp for breakfast, then depart for Nairobi. Arrive in the capital by late afternoon.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Apr - Jun 2026", price: "$3,020", supplement: "$420" },
  { period: "High Season: Jul - Mar 2026/27", price: "$3,220", supplement: "$480" },
  { period: "Peak Season: Jul - Oct 2026", price: "$3,520", supplement: "$550" }
]

const includes = [
  "All accommodation — tented camps & lodges",
  "All meals as specified in itinerary",
  "All national park entry fees",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Round-trip road transport from Nairobi",
  "Expert driver-guide throughout",
  "Drinking water during drives",
  "Rock art site guide",
  "Cultural village visits"
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
  "Flying visit to Central Island",
  "Private game drive vehicle",
  "Extended stays at Lake Turkana"
]

export default function KenyaLakeTurkanaExpedition() {
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
        <img src="https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Lake Turkana Expedition" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Lake Turkana Expedition</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">REMOTE EXPEDITION</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Lake Turkana Expedition</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Kenya's Remote Northern Frontier</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 9 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 3 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 3,220 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Journey to the Jade Sea</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">Lake Turkana is the world's largest desert lake and one of Kenya's most remote destinations. This 9-day expedition takes you to ancient rock art sites, traditional tribal villages, and the rugged northern frontier where few tourists venture.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Waves, title: "Lake Turkana", desc: "World's largest desert lake"}, {Icon: Mountain, title: "Rock Art", desc: "Ancient paintings"}, {Icon: Users, title: "Tribal Culture", desc: "Turkana & more"}, {Icon: Compass, title: "Remote", desc: "Off the beaten path"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Marsabit", type: "stop"}, {name: "Lake Turkana", type: "park"}, {name: "Samburu", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $300. Balance due: 21 days prior. Minimum 2 guests.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Explore Kenya's Remote Frontier</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Experience ancient rock art and tribal cultures at Lake Turkana.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
