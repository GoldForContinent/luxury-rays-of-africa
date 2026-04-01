import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Camera, Mountain, Sun } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Arrival", highlights: "Welcome, briefing", property: "Nairobi Hotel" },
  { day: "2", place: "Nairobi → Samburu", highlights: "Drive north, afternoon game drive", property: "Samburu Lodge" },
  { day: "3", place: "Samburu – Full Day", highlights: "Northern species, photography", property: "Samburu Lodge" },
  { day: "4", place: "Samburu → Lake Nakuru", highlights: "Rift Valley drive, flamingos", property: "Lake Nakuru Lodge" },
  { day: "5", place: "Lake Nakuru – Day", highlights: "Rhino tracking, birdlife", property: "Lake Nakuru Lodge" },
  { day: "6", place: "Lake Nakuru → Masai Mara", highlights: "Drive to Mara, evening safari", property: "Mara Camp" },
  { day: "7", place: "Masai Mara – Day 1", highlights: "Full day Big Five", property: "Mara Camp" },
  { day: "8", place: "Masai Mara – Day 2", highlights: "River crossing, predators", property: "Mara Camp" },
  { day: "9", place: "Masai Mara → Lumo", highlights: "Transfer to Lumo Conservancy", property: "Lumo Camp" },
  { day: "10", place: "Lumo Conservancy", highlights: "Private wildlife, photography", property: "Lumo Camp" },
  { day: "11", place: "Lumo → Shompole", highlights: "Transfer to Shompole", property: "Shompole Camp" },
  { day: "12", place: "Shompole Wilderness", highlights: "Wilderness photography", property: "Shompole Camp" },
  { day: "13", place: "Shompole → Nairobi", highlights: "Return journey, farewell", property: "Nairobi Hotel" },
  { day: "14", place: "Nairobi – Departure", highlights: "Airport transfer", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi · Arrival Day",
    highlights: ["Airport meet", "Welcome dinner", "Itinerary briefing"],
    description: "Arrive at Jomo Kenyatta International Airport where your professional photographer guide welcomes you. Transfer to your Nairobi hotel. Evening welcome dinner introduces your fellow photographers. Detailed briefing covers the two-week journey, camera equipment, and photography techniques for African wildlife.",
    accommodation: "Nairobi Hotel",
    mealPlan: "Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi → Samburu",
    highlights: ["Northern journey", "Afternoon game drive", "Northern species"],
    description: "Depart Nairobi early for the drive north to Samburu National Reserve. The journey passes through varied landscapes — from highland farmland to semi-arid terrain. Arrive at your lodge by early afternoon. Afternoon game drive in search of Samburu's signature species — Grevy's zebra, Somali ostrich, Beisa oryx.",
    accommodation: "Samburu Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Samburu · Full Day Safari",
    highlights: ["Full day photography", "Elephant herds", "Cultural visit"],
    description: "Full day in Samburu's diverse landscape. Morning game drive captures the unique northern species against the dramatic backdrop. Visit a Samburu village for cultural photography — colorful dress, traditional jewelry, daily activities. Return to the lodge for lunch. Afternoon continues the wildlife exploration.",
    accommodation: "Samburu Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Samburu → Lake Nakuru",
    highlights: ["Rift Valley crossing", "Flamingo spectacle", "Evening at lake"],
    description: "Depart Samburu south to Lake Nakuru National Park. The drive crosses the equator and descends into the Rift Valley. Arrive at your lodge overlooking the lake. Afternoon game drive along the shoreline where millions of flamingos create an unforgettable pink display.",
    accommodation: "Lake Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Lake Nakuru · Rhino Day",
    highlights: ["Rhino tracking", "Bird photography", "Lion sightings"],
    description: "Dedicate the day to photographing Lake Nakuru's rhinos — both black and white species are present in good numbers. Morning game drive follows the rhinos through the woodland. The park also hosts lions, leopards, and abundant waterfowl. Return to the lodge for lunch. Afternoon continues the exploration.",
    accommodation: "Lake Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Lake Nakuru → Masai Mara",
    highlights: ["Scenic drive", "Mara arrival", "Evening game drive"],
    description: "Early morning departure for the Masai Mara, the crown jewel of African wildlife reserves. The drive crosses the Mara ecosystem — endless plains, river corridors, acacia savanna. Arrive at your camp in time for afternoon game drive. The Mara delivers wildlife in abundance.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Masai Mara · Day One",
    highlights: ["Big Five safari", "River crossing", "Predator action"],
    description: "Full day in the world-famous Mara. Morning game drive follows the herds and predators. The Mara River crossing points offer dramatic photography if the migration is present. Picnic lunch on the plains. Afternoon continues the wildlife exploration — lion prides, leopard in trees, elephant herds.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Masai Mara · Day Two",
    highlights: ["Extended game drive", "Photographic opportunities", "Sunset capture"],
    description: "Another full day in the Mara's extraordinary landscape. Morning focuses on predator activity — lions on the hunt, cheetah scanning the plains. A second full day allows deeper exploration. Capture the Mara at different times of day — morning light, midday drama, golden hour.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Masai Mara → Lumo Conservancy",
    highlights: ["Conservancy transfer", "Private game drive", "Exclusive experience"],
    description: "Transfer to the Lumo Community Wildlife Conservancy, a private conservancy offering exclusive wildlife experiences without the crowds. Afternoon game drive explores the conservancy — excellent for lion, elephant, and buffalo. Lumo offers photography opportunities in a more intimate setting.",
    accommodation: "Lumo Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Lumo Conservancy · Full Day",
    highlights: ["Private wildlife", "Full day photography", "Landscape capture"],
    description: "Full day in the Lumo Conservancy. Morning game drive captures wildlife in the soft light. The conservancy is known for excellent lion sightings. Visit a local community for cultural photography. Return to camp for lunch. Afternoon explores different areas of this private reserve.",
    accommodation: "Lumo Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Lumo → Shompole Wilderness",
    highlights: ["Remote transfer", "Wilderness arrival", "Afternoon safari"],
    description: "Transfer to the Shompole Wilderness Reserve, one of Kenya's most remote and pristine conservancies. The landscape is dramatic — volcanic hills, vast plains, the Olkiramatian Escarpment. Arrive in time for afternoon game drive in this extraordinary environment.",
    accommodation: "Shompole Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 12,
    title: "Shompole · Final Day",
    highlights: ["Full day wilderness", "Final photography", "Wildlife completion"],
    description: "Full day in the Shompole Wilderness. Morning game drive explores this remote landscape — wildlife is abundant and relaxed. The dramatic scenery offers landscape photography opportunities. Afternoon continues the exploration. This is Kenya at its most wild and unspoiled.",
    accommodation: "Shompole Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 13,
    title: "Shompole → Nairobi",
    highlights: ["Morning drive", "Return journey", "Farewell dinner"],
    description: "Final morning game drive in Shompole, capturing last wildlife moments. Return to camp for breakfast, then depart for Nairobi. The journey takes approximately six hours. Evening farewell dinner celebrates your extraordinary photographic journey.",
    accommodation: "Nairobi Hotel",
    mealPlan: "Breakfast, Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 14,
    title: "Nairobi · Departure",
    highlights: ["Final breakfast", "Airport transfer", "Departure"],
    description: "Breakfast at the hotel. Transfer to Jomo Kenyatta International Airport for your departure flight. Your fourteen-day photographic safari has covered Kenya's most spectacular wildlife destinations, captured extraordinary images, and created unforgettable memories.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Oct - Nov 2026", price: "$12,190", supplement: "$1,200" },
  { period: "High Season: Dec - Mar 2026/27", price: "$12,590", supplement: "$1,300" },
  { period: "Peak Season: Jul - Oct 2026", price: "$12,990", supplement: "$1,400" }
]

const includes = [
  "All accommodation — premium tented camps and lodges",
  "All meals — full board throughout",
  "All national park and conservancy entry fees",
  "All game drives in 4×4 safari vehicles with professional photographer guide",
  "Photography instruction, composition guidance, and post-processing tips",
  "Village and community visits",
  "All airport and in-country transfers",
  "Expert photographer guide throughout",
  "Drinking water and refreshments during drives",
  "Photo album of your journey"
]

const excludes = [
  "Change in itinerary",
  "Travel / medical insurance",
  "Tips / gratuities for driver / guide and hotel staff",
  "Return international air fare & Visa fee",
  "Items of personal nature",
  "Camera equipment rental",
  "Any extras not mentioned above"
]

const extraAddons = [
  "Hot Air Balloon Safari in Masai Mara",
  "Private vehicle upgrade",
  "Additional nights in Nairobi",
  "Extended game drives",
  "Professional photo editing workshop"
]

export default function KenyaPhotographicSafari14Days() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Photographic Safari 14 Days" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Photographic Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">PHOTOGRAPHIC SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Kenya Photographic Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">14 Days of Wildlife Photography</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 14 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 8 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 12,190 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Comprehensive Photography Journey</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This comprehensive fourteen-day photographic safari covers Kenya's most iconic wildlife destinations and hidden gems. From Samburu's northern species to the Masai Mara's Big Five, from the flamingos of Lake Nakuru to the private conservancies of Lumo and Shompole. A photographer's dream journey.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Camera, title: "Expert Guide", desc: "Professional photographer"}, {Icon: Sun, title: "14 Days", desc: "Full coverage"}, {Icon: LandPlot, title: "8 Parks", desc: "Diverse ecosystems"}, {Icon: Mountain, title: "All Species", desc: "Complete wildlife"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Samburu", type: "park"}, {name: "Lake Nakuru", type: "park"}, {name: "Masai Mara", type: "park"}, {name: "Lumo", type: "park"}, {name: "Shompole", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 6 && <div className="hidden md:block w-6 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $1,200. Balance due: 45 days prior. Minimum 2, maximum 6 photographers.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Master Wildlife Photography</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Two weeks to capture Kenya's most extraordinary wildlife moments.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}