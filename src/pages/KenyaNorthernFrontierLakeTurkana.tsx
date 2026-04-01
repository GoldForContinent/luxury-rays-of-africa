import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Map, Mountain, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Arrival", highlights: "Welcome, briefing", property: "Nairobi Hotel" },
  { day: "2", place: "Nairobi → Samburu", highlights: "Drive north, evening game drive", property: "Samburu Lodge" },
  { day: "3", place: "Samburu – Full Day", highlights: "Northern species, village visit", property: "Samburu Lodge" },
  { day: "4", place: "Samburu → Marsabit", highlights: "Mountain drive, evening at lodge", property: "Marsabit Lodge" },
  { day: "5", place: "Marsabit → Lake Turkana", highlights: "Desert journey, desert resort", property: "Turkana Resort" },
  { day: "6", place: "Lake Turkana – Festival Day", highlights: "Lake Turkana Festival", property: "Turkana Resort" },
  { day: "7", place: "Lake Turkana – Festival Day", highlights: "Cultural performances, tribal visits", property: "Turkana Resort" },
  { day: "8", place: "Lake Turkana → Kalacha", highlights: "Desert drive, rock art site", property: "Kalacha Camp" },
  { day: "9", place: "Kalacha → Marsabit", highlights: "Return journey, evening at lodge", property: "Marsabit Lodge" },
  { day: "10", place: "Marsabit → Lake Nakuru", highlights: "Rift Valley drive, flamingos", property: "Lake Nakuru Lodge" },
  { day: "11", place: "Lake Nakuru – Day", highlights: "Rhino tracking, wildlife", property: "Lake Nakuru Lodge" },
  { day: "12", place: "Lake Nakuru → Nairobi", highlights: "Return drive, departure", property: "N/A" }
]

const itineraryDays = [
  { day: 1, title: "Nairobi · Arrival", highlights: ["Airport meet", "Welcome dinner", "Itinerary briefing"], description: "Arrive at Jomo Kenyatta International Airport where your guide welcomes you. Transfer to your Nairobi hotel. Evening welcome dinner with detailed briefing on this cultural expedition to Kenya's remote north.", accommodation: "Nairobi Hotel", mealPlan: "Dinner", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 2, title: "Nairobi → Samburu", highlights: ["Northern journey", "Scenic drive", "Evening game drive"], description: "Depart Nairobi early for the drive north to Samburu National Reserve. The journey passes through varied terrain — from highland farmland to semi-arid savanna. Arrive at your lodge by late afternoon. Evening game drive.", accommodation: "Samburu Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 3, title: "Samburu · Full Day Safari", highlights: ["Northern species", "Village visit", "Cultural exchange"], description: "Full day in Samburu exploring the unique wildlife and culture. Morning game drive captures the signature species — Grevy's zebra, Somali ostrich, Beisa oryx. Visit a Samburu village for cultural interaction.", accommodation: "Samburu Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 4, title: "Samburu → Marsabit", highlights: ["Mountain drive", "Highland scenery", "Evening at lodge"], description: "Depart Samburu north to Marsabit, a mountain forest in the middle of the desert. The drive is spectacular — ascending through changing landscapes. Arrive at your mountain lodge by late afternoon.", accommodation: "Marsabit Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 5, title: "Marsabit → Lake Turkana", highlights: ["Desert journey", "Remote landscape", "Arrival at lake"], description: "Depart Marsabit for the remote journey to Lake Turkana — the world's largest desert lake. The landscape is stark and beautiful. Arrive at your lakeside resort by early afternoon.", accommodation: "Turkana Resort", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 6, title: "Lake Turkana · Festival Day One", highlights: ["Lake Turkana Festival", "Tribal performances", "Cultural exhibitions"], description: "Today is dedicated to the Lake Turkana Cultural Festival — a celebration of the region's diverse ethnic groups. Witness traditional dances, crafts, and cultural displays from the Turkana, Rendille, Dassenech, and other tribes.", accommodation: "Turkana Resort", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 7, title: "Lake Turkana · Festival Day Two", highlights: ["More festival activities", "Tribal village visits", "Lake exploration"], description: "Another day immersed in the cultural festival. Visit tribal villages, learn traditional crafts, and witness ceremonies. Explore the lake's shores — the jade-colored waters are spectacular.", accommodation: "Turkana Resort", mealPlan: "Full Board", image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 8, title: "Lake Turkana → Kalacha", highlights: ["Desert drive", "Rock art site", "Cultural encounter"], description: "Depart Lake Turkana south to Kalacha, a settlement near ancient rock art sites. The drive passes through remote desert landscapes. Visit the rock art site — paintings thousands of years old.", accommodation: "Kalacha Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 9, title: "Kalacha → Marsabit", highlights: ["Return journey", "Mountain drive", "Evening at lodge"], description: "Return to Marsabit through the desert and mountain landscapes. Arrive at the lodge by late afternoon. Evening at leisure.", accommodation: "Marsabit Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 10, title: "Marsabit → Lake Nakuru", highlights: ["Long drive south", "Rift Valley arrival", "Evening at lake"], description: "Depart Marsabit for the long drive south to Lake Nakuru. The journey passes through varied terrain. Arrive at your lodge overlooking the lake in time for sunset.", accommodation: "Lake Nakuru Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 11, title: "Lake Nakuru · Wildlife Day", highlights: ["Rhino tracking", "Bird photography", "Lion sightings"], description: "Full day in Lake Nakuru National Park. Morning game drive focuses on the rhino populations. Afternoon continues exploration of this beautiful Rift Valley lake.", accommodation: "Lake Nakuru Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 12, title: "Lake Nakuru → Nairobi", highlights: ["Return journey", "Final drive", "Departure"], description: "Depart Lake Nakuru for Nairobi, approximately three hours. Arrive in Nairobi by early afternoon. Transfer to the airport for your departure flight.", accommodation: "N/A", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const pricingData = [
  { period: "Festival Season: June - August 2026", price: "$7,490", supplement: "$920" }
]

const includes = ["All accommodation — lodges and tented camps", "All meals — full board throughout", "All national park and conservancy entry fees", "Lake Turkana Festival entrance and activities", "All game drives in 4×4 safari vehicle with professional guide", "Village visits and cultural exchanges", "All airport and in-country transfers", "Expert driver-guide throughout", "Drinking water during drives"]

const excludes = ["Change in itinerary", "Travel / medical insurance", "Tips / gratuities", "Return international air fare & Visa fee", "Items of personal nature", "Any extras not mentioned above"]

const extraAddons = ["Private vehicle upgrade", "Extended game drives", "Additional nights in Nairobi", "Hot air balloon in Lake Nakuru"]

export default function KenyaNorthernFrontierLakeTurkana() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Northern Frontier Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Northern Frontier</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">CULTURAL SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Northern Frontier & Lake Turkana Festival</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Culture, Wildlife & Desert</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 12 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 7 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 7,490 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Kenya's Remote North</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This extraordinary safari takes you to Kenya's remote northern frontier — a land of tribal cultures, desert landscapes, and the annual Lake Turkana Cultural Festival. Experience the last wild tribes of Kenya and witness a festival that celebrates the region's incredible diversity.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Users, title: "Tribal", desc: "Cultural festival"}, {Icon: Map, title: "Remote", desc: "Off the beaten path"}, {Icon: Mountain, title: "Desert", desc: "Stunning landscapes"}, {Icon: LandPlot, title: "Wildlife", desc: "Northern species"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Samburu", type: "park"}, {name: "Marsabit", type: "park"}, {name: "Lake Turkana", type: "park"}, {name: "Kalacha", type: "park"}, {name: "Lake Nakuru", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-3 py-2 rounded-full font-semibold text-xs ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Festival dates vary yearly. Deposit to reserve: $750. Balance due: 45 days prior. Minimum 4 guests.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Experience Kenya's Wild Tribes</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">A cultural safari to Kenya's remote northern frontier.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}