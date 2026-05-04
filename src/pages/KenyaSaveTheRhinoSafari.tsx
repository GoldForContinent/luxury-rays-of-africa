import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Shield, Heart, Award, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Nakuru", highlights: "Drive to Nakuru, afternoon game drive", property: "Nakuru Lodge" },
  { day: "2", place: "Lake Nakuru – Full Day", highlights: "Rhino tracking, flamingos", property: "Nakuru Lodge" },
  { day: "3", place: "Nakuru – Solio", highlights: "Drive to Solio Ranch, rhino safari", property: "Solio Camp" },
  { day: "4", place: "Solio – Full Day", highlights: "Rhino conservancy, conservation talk", property: "Solio Camp" },
  { day: "5", place: "Solio – Lewa", highlights: "Drive to Lewa Downs, rhino sanctuary", property: "Lewa Camp" },
  { day: "6", place: "Lewa – Full Day", highlights: "Rhino families, elephant herds", property: "Lewa Camp" },
  { day: "7", place: "Lewa – Meru", highlights: "Drive to Meru, rhino tracking", property: "Meru Camp" },
  { day: "8", place: "Meru – Full Day", highlights: "Big Five, conservation projects", property: "Meru Camp" },
  { day: "9", place: "Meru – Amboseli", highlights: "Drive to Amboseli, elephant herds", property: "Amboseli Lodge" },
  { day: "10", place: "Amboseli – Full Day", highlights: "Elephants with Kilimanjaro, wildlife", property: "Amboseli Lodge" },
  { day: "11", place: "Amboseli – Nairobi", highlights: "Return to Nairobi, safari ends", property: "N/A" },
  { day: "12", place: "Safari Ends", highlights: "Departure arrangements", property: "N/A" }
]

const safariDuration = "12 Days / 11 Nights"

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi → Lake Nakuru",
    highlights: ["Scenic drive", "Rift Valley", "Rhino territory"],
    description: "Depart Nairobi early morning for Lake Nakuru National Park, approximately a three-hour drive through the Rift Valley. Lake Nakuru is one of Kenya's premier rhino reserves. Arrive at your lodge by lunch. Afternoon game drive introduces you to the rhinos of Nakuru.",
    accommodation: "Nakuru Lodge",
    mealPlan: "Lunch, Dinner",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Lake Nakuru · Rhino Conservation Day",
    highlights: ["Rhino tracking", "Flamingo spectacle", "Conservation center"],
    description: "Full day focused on rhino conservation in Lake Nakuru. The park has both black and white rhinos. Morning game drive searches for these endangered creatures. Afternoon visit to the conservation center to learn about anti-poaching efforts.",
    accommodation: "Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Lake Nakuru → Solio Ranch",
    highlights: ["Drive to Solio", "Private conservancy", "Rhino sanctuary"],
    description: "Transfer to Solio Ranch, a private conservancy dedicated to rhino conservation. This is one of Kenya's most successful rhino sanctuaries. Arrive at camp for lunch. Afternoon game drive in this exclusive conservancy.",
    accommodation: "Solio Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Solio · Exclusive Rhino Safari",
    highlights: ["Private game drives", "Rhino families", "Conservation talk"],
    description: "Full day in Solio with exclusive access to this productive conservancy. Morning and afternoon game drives search for rhinos in their natural habitat. Learn about the conservation efforts that have made Solio successful.",
    accommodation: "Solio Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Solio → Lewa Downs",
    highlights: ["Drive to Lewa", "UNESCO site", "Rhino sanctuary"],
    description: "Transfer to the Lewa Wildlife Conservancy — a UNESCO World Heritage Site and one of Kenya's most successful rhino sanctuaries. The drive takes you through stunning highland landscapes. Arrive at your camp for lunch.",
    accommodation: "Lewa Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Lewa · World-Class Rhino Safari",
    highlights: ["Rhino families", "Elephant herds", "Conservancy tour"],
    description: "Full day in Lewa experiencing one of the world's great rhino sanctuaries. Morning game drive searches for black and white rhinos. Visit the conservation headquarters to learn about their groundbreaking work. Afternoon continues the exploration.",
    accommodation: "Lewa Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Lewa → Meru",
    highlights: ["Drive to Meru", "Rhino tracking", "River ecosystems"],
    description: "Depart Lewa and drive to Meru National Park. Meru has healthy populations of both black and white rhinos. The park's rivers create ideal habitat. Arrive at camp for lunch. Afternoon game drive searches for rhinos.",
    accommodation: "Meru Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Meru · Big Five Safari",
    highlights: ["Rhino tracking", "Lion prides", "Conservation projects"],
    description: "Full day in Meru with a focus on rhinos and other Big Five. Morning game drive searches for these magnificent creatures. Visit conservation projects in the area to understand efforts to protect Kenya's wildlife.",
    accommodation: "Meru Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Meru → Amboseli",
    highlights: ["Drive to Amboseli", "Elephant herds", "Kilimanjaro views"],
    description: "Journey to Amboseli National Park, famous for its large elephant herds and views of Mount Kilimanjaro. The drive takes you through diverse landscapes. Arrive at your lodge by late afternoon. Evening game drive.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Amboseli · Elephant & Rhino Safari",
    highlights: ["Elephant families", "Rhino tracking", "Kilimanjaro backdrop"],
    description: "Full day in Amboseli searching for both elephants and rhinos. Morning game drive as elephants emerge from the swamps against the backdrop of snow-capped Kilimanjaro. Search for rhinos in the park's grasslands.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Amboseli → Nairobi",
    highlights: ["Final morning drive", "Return journey", "Safari concludes"],
    description: "Early morning game drive captures the wildlife at dawn. Return to camp for breakfast, then depart for Nairobi. Arrive in the capital by late afternoon. Evening farewell dinner sharing your conservation journey.",
    accommodation: "N/A",
    mealPlan: "Breakfast, Lunch",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Apr - Jun 2026", price: "$7,200", supplement: "$950" },
  { period: "High Season: Jul - Mar 2026/27", price: "$7,200", supplement: "$1,050" },
  { period: "Peak Season: Jul - Oct 2026", price: "$7,200", supplement: "$1,200" }
]

const includes = [
  "All accommodation — conservation-focused camps & lodges",
  "All meals as specified in itinerary",
  "All national park entry fees",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Round-trip road transport from Nairobi",
  "Expert driver-guide throughout",
  "Conservation center visits",
  "Rhino monitoring activities",
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
  "Adopt a rhino program",
  "Visit to rhino orphanage",
  "Private game drive vehicle",
  "Extended conservation activities"
]

export default function KenyaSaveTheRhinoSafari() {
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
        <img src="https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Save The Rhino Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Save The Rhino Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">CONSERVATION SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Save The Rhino Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">12 Days Saving Kenya's Endangered Rhinos</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 12 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 5 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 7,200 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Protecting Africa's Most Endangered</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This 12-day conservation-focused safari is dedicated to protecting rhinos. Visit Kenya's most successful rhino sanctuaries, learn from conservationists, and witness the remarkable recovery of rhino populations. Your safari directly supports rhino conservation efforts.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Target, title: "Rhino Focus", desc: "5 top rhino habitats"}, {Icon: Heart, title: "Conservation", desc: "Support anti-poaching"}, {Icon: Award, title: "Expert Guides", desc: "Conservation specialists"}, {Icon: Shield, title: "Sanctuaries", desc: "Private conservancies"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Lake Nakuru", type: "park"}, {name: "Solio", type: "park"}, {name: "Lewa", type: "park"}, {name: "Meru", type: "park"}, {name: "Amboseli", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 6 && <div className="hidden md:block w-8 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $500. Balance due: 21 days prior. Minimum 2 guests. Part of your payment supports rhino conservation.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Protect Kenya's Rhinos</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Your safari makes a real difference in rhino conservation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
