import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Mountain, Map } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Arusha – Arrival", highlights: "Welcome, briefing", property: "Arusha Lodge" },
  { day: "2", place: "Arusha → Tarangire", highlights: "Drive to Tarangire, afternoon game", property: "Tarangire Lodge" },
  { day: "3", place: "Tarangire – Full Day", highlights: "Elephant herds, baobab views", property: "Tarangire Lodge" },
  { day: "4", place: "Tarangire → Serengeti", highlights: "Drive to Serengeti, evening game", property: "Serengeti Lodge" },
  { day: "5", place: "Serengeti – Full Day", highlights: "Full day wildlife", property: "Serengeti Lodge" },
  { day: "6", place: "Serengeti → Ngorongoro", highlights: "Drive to crater, evening at rim", property: "Ngorongoro Lodge" },
  { day: "7", place: "Ngorongoro Crater", highlights: "Full day crater safari", property: "Ngorongoro Lodge" },
  { day: "8", place: "Ngorongoro → Arusha", highlights: "Return drive, departure", property: "N/A" }
]

const itineraryDays = [
  { day: 1, title: "Arusha · Arrival", highlights: ["Airport meet", "Welcome dinner", "Itinerary briefing"], description: "Arrive at Kilimanjaro International Airport. Your guide welcomes you and transfers you to your lodge in Arusha. Evening welcome dinner with briefing on the safari ahead.", accommodation: "Arusha Lodge", mealPlan: "Dinner", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 2, title: "Arusha → Tarangire", highlights: ["Drive to Tarangire", "Afternoon game drive", "Elephant viewing"], description: "Depart Arusha for Tarangire National Park. Known as the 'Elephant Playground,' Tarangire holds large herds of elephants and iconic baobab trees. Afternoon game drive explores the diverse habitats.", accommodation: "Tarangire Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 3, title: "Tarangire · Full Day", highlights: ["Full day safari", "Elephant herds", "Baobab landscape"], description: "Full day in Tarangire. Morning game drive captures the elephants against the dramatic baobab landscape. The park also hosts lions, giraffes, and abundant birdlife. Return to the lodge for lunch. Afternoon continues exploration.", accommodation: "Tarangire Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 4, title: "Tarangire → Serengeti", highlights: ["Drive to Serengeti", "Central Serengeti", "Evening game drive"], description: "Depart Tarangire for the Serengeti — world's most famous national park. The drive passes through varied terrain. Arrive at your camp by late afternoon. Evening game drive explores the endless plains.", accommodation: "Serengeti Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 5, title: "Serengeti · Full Day", highlights: ["Full day wildlife", "Big Five tracking", "Migration viewing"], description: "Full day in the Serengeti. Morning game drive follows the wildlife — the park holds the largest concentration of large mammals on Earth. Search for lion, leopard, elephant, buffalo, and rhino. Afternoon continues exploration.", accommodation: "Serengeti Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 6, title: "Serengeti → Ngorongoro", highlights: ["Drive to Ngorongoro", "Crater rim arrival", "Evening at lodge"], description: "Depart the Serengeti for Ngorongoro Conservation Area. The descent into the crater is spectacular. Arrive at your lodge on the crater rim in time for sunset views over this natural wonder.", accommodation: "Ngorongoro Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 7, title: "Ngorongoro Crater", highlights: ["Full day crater safari", "Big Five", "Flamingo lake"], description: "Descend into the Ngorongoro Crater for a full day of wildlife viewing. The crater is a natural amphitheater holding 30,000 animals. Search for all members of the Big Five in this incredible setting.", accommodation: "Ngorongoro Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 8, title: "Ngorongoro → Arusha", highlights: ["Return drive", "Arrival in Arusha", "Departure"], description: "Depart Ngorongoro for Arusha. The journey passes through the Rift Valley landscape. Arrive in Arusha by early afternoon. Transfer to the airport for your departure flight.", accommodation: "N/A", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const pricingData = [
  { period: "Green Season: Mar - May 2026", price: "$5,840", supplement: "$780" },
  { period: "High Season: Jun - Oct 2026", price: "$6,540", supplement: "$920" },
  { period: "Peak Season: Dec - Feb 2026", price: "$6,940", supplement: "$1,050" }
]

const includes = ["All accommodation — quality lodges and tented camps", "All meals — full board", "All national park and conservancy entry fees", "All game drives in 4×4 safari vehicle", "Expert driver-guide", "All airport and in-country transfers", "Drinking water during drives"]

const excludes = ["Change in itinerary", "Travel / medical insurance", "Tips", "International air fare & Visa", "Items of personal nature", "Any extras"]

const extraAddons = ["Hot Air Balloon Safari in Serengeti", "Private vehicle upgrade", "Extended game drives", "Additional nights in Zanzibar"]

export default function TanzaniaLuxurySafari8Days() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Tanzania Luxury Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/tanzania-safaris" className="hover:text-[#D4A03A]">Tanzania Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Tarangire, Serengeti & Ngorongoro</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">TANZANIA COMPLETE SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Tarangire, Serengeti & Ngorongoro</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Luxury Safari Experience</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 8 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 3 Parks</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 6,540 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Tanzania's Greatest Parks</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This comprehensive safari covers Tanzania's three most iconic parks — Tarangire, Serengeti, and Ngorongoro Crater. Experience the best of Tanzania's wildlife in eight unforgettable days.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Map, title: "3 Parks", desc: "Tarangire, Serengeti, Ngorongoro"}, {Icon: Mountain, title: "Big Five", desc: "All major wildlife"}, {Icon: LandPlot, title: "Complete", desc: "Full circuit"}, {Icon: Star, title: "8 Days", desc: "Extended exploration"}].map((item, index) => (
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
            {[{name: "Arusha", type: "arrival"}, {name: "Tarangire", type: "park"}, {name: "Serengeti", type: "park"}, {name: "Ngorongoro", type: "park"}, {name: "Arusha", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 4 && <div className="hidden md:block w-6 h-[2px] bg-[#D4A03A]"></div>}
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Experience Tanzania's Best</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">The ultimate Tanzanian safari adventure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}