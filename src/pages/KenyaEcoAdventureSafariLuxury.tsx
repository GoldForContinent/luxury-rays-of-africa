import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Leaf, Heart, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Luxury Arrival", highlights: "Private transfer, welcome amenities", property: "Hemmingways Nairobi" },
  { day: "2", place: "Nairobi → Lake Nakuru", highlights: "Scenic flight, afternoon game drive", property: "Flamingo Hill Tented Camp" },
  { day: "3", place: "Lake Nakuru National Park", highlights: "Full day wildlife, rhino tracking", property: "Flamingo Hill Tented Camp" },
  { day: "4", place: "Lake Nakuru → Masai Mara", highlights: "Flight to Mara, evening game drive", property: "Mara Serena Safari Lodge" },
  { day: "5", place: "Masai Mara – Big Five", highlights: "Full day luxury game drives", property: "Mara Serena Safari Lodge" },
  { day: "6", place: "Masai Mara – Exclusive", highlights: "Private conservancy, sundowners", property: "Mara Serena Safari Lodge" },
  { day: "7", place: "Masai Mara – Morning Safari", highlights: "Final morning game drive, flight to Nairobi", property: "Hemmingways Nairobi" },
  { day: "8", place: "Nairobi – Leisure Day", highlights: "Spa, city tour, fine dining", property: "Hemmingways Nairobi" },
  { day: "9", place: "Nairobi – Departure", highlights: "Airport transfer, departure", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi · Luxury Arrival",
    highlights: ["Private airport transfer", "Welcome amenities", "Fine dining"],
    description: "Arrive at Jomo Kenyatta International Airport where your personal concierge greets you with a warm safari welcome. Transfer in a luxury vehicle to Hemmingways Nairobi, an award-winning boutique hotel. Afternoon at leisure — relax in your spacious suite, enjoy the spa, or explore the hotel's gardens. Evening dinner at the hotel's renowned restaurant.",
    accommodation: "Hemmingways Nairobi",
    mealPlan: "Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi → Lake Nakuru",
    highlights: ["Scenic flight", "Game drive", "Flamingo viewing"],
    description: "Morning transfer to Wilson Airport for your scenic flight to Lake Nakuru. Aerial views of the Rift Valley are spectacular. Land at the Nakuru airstrip and transfer to your luxury tented camp. Afternoon game drive along the lake shore — millions of flamingos create an unforgettable pink panorama. Search for rhino, lion, and leopard.",
    accommodation: "Flamingo Hill Tented Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Lake Nakuru · Wildlife Day",
    highlights: ["Full day game drives", "Rhino tracking", "Bird sanctuary"],
    description: "Dedicate the day to exploring this beautiful park. Morning game drive follows the lions and leopards in the woodland areas. Midday return to camp for a gourmet lunch. Afternoon excursion focuses on the rhino populations — both black and white rhinos are frequently seen. Sundowners on the terrace as the sun drops over the lake.",
    accommodation: "Flamingo Hill Tented Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Lake Nakuru → Masai Mara",
    highlights: ["Flight to Mara", "Evening game drive", "Sunset sundowners"],
    description: "Morning flight from Nakuru to the Masai Mara — the world's most celebrated wildlife reserve. Arrive at your luxury lodge perched on the edge of the Mara triangle. Afternoon game drive as the sun turns the plains golden. Watch herds of elephant crossing the landscape. Return to camp for a candlelit dinner.",
    accommodation: "Mara Serena Safari Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Masai Mara · Big Five Safari",
    highlights: ["Full day game drives", "Big Five tracking", "Picnic lunch"],
    description: "Full day exploring the Mara's endless plains. Morning follows the river corridors where predators hunt. A picnic lunch is served under an acacia tree with views across the savanna. Afternoon searches for the Big Five — lion, leopard, rhino, elephant, buffalo. The Mara holds all in healthy numbers.",
    accommodation: "Mara Serena Safari Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Masai Mara · Exclusive Experience",
    highlights: ["Private conservancy", "Bush breakfast", "Sundowners"],
    description: "Today explores the private conservancy adjacent to the main reserve. No crowds — just you and the wildlife. Morning game drive with a professional guide, followed by a bush breakfast with champagne. Afternoon visit to a Maasai village for a cultural encounter. Evening — sundowners on the plains with champagne and canapés.",
    accommodation: "Mara Serena Safari Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Masai Mara → Nairobi",
    highlights: ["Morning game drive", "Flight to Nairobi", "Evening at leisure"],
    description: "An early morning game drive captures the Mara at its most active — predator activity increases as the day begins. Return to camp for breakfast, then transfer to the airstrip for your flight back to Nairobi. Afternoon at leisure — spa treatments, shopping at the Giraffe Centre, or simply relaxing at the hotel.",
    accommodation: "Hemmingways Nairobi",
    mealPlan: "Breakfast, Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Nairobi · Luxury Day",
    highlights: ["Spa treatment", "City tour", "Fine dining"],
    description: "A day to indulge. Morning spa treatment at the hotel's wellness centre. Midday visit to the Karen Blixen Museum and shopping at the Giraffe Centre. Afternoon high tea at the hotel. Evening — farewell dinner at one of Nairobi's finest restaurants, celebrating your safari journey.",
    accommodation: "Hemmingways Nairobi",
    mealPlan: "Breakfast, Dinner",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Nairobi · Departure",
    highlights: ["Final breakfast", "Airport transfer", "Farewell"],
    description: "Breakfast at the hotel. Private transfer to Jomo Kenyatta International Airport for your departure flight. Your luxury safari has provided unforgettable wildlife encounters, exceptional service, and memories to last a lifetime.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Oct - Nov 2026", price: "$4,320", supplement: "$450" },
  { period: "High Season: Dec - Mar 2026/27", price: "$4,520", supplement: "$490" },
  { period: "Peak Season: Jul - Oct 2026", price: "$4,720", supplement: "$550" }
]

const includes = [
  "All accommodation — luxury eco-certified lodges",
  "All meals — gourmet cuisine with premium drinks",
  "All national park and conservancy entry fees",
  "All internal flights (Nairobi to Nakuru, Nakuru to Mara, Mara to Nairobi)",
  "All game drives in 4×4 safari vehicles with professional guides",
  "Private conservancy access and fees",
  "Bush breakfast with champagne",
  "Spa treatment (one per person)",
  "Village cultural visit",
  "All airport and in-country transfers",
  "Personal concierge throughout",
  "Drinking water and premium beverages"
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
  "Hot Air Balloon Safari in Masai Mara",
  "Private game drive vehicle",
  "Extended game drives",
  "Additional spa treatments",
  "Helicopter transfer"
]

export default function KenyaEcoAdventureSafariLuxury() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Eco Adventure Safari Luxury" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Eco Adventure Safari Luxury</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">LUXURY ECO ADVENTURE</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Eco Adventure Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Luxury Sustainable Journey</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 9 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 3 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 4,320 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Luxury Meets Sustainability</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This nine-day luxury safari combines the finest eco-certified accommodations with exceptional wildlife experiences. Fly between destinations, stay at award-winning lodges, and enjoy personalized service throughout. Sustainable luxury that doesn't compromise on comfort.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Sparkles, title: "Luxury", desc: "Premium lodges"}, {Icon: Leaf, title: "Eco-Certified", desc: "Sustainable properties"}, {Icon: Heart, title: "Flights", desc: "Internal flights included"}, {Icon: LandPlot, title: "Big Five", desc: "Premium wildlife"}].map((item, index) => (
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $500. Balance due: 30 days prior. Minimum 2 guests.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Experience Luxury, Travel Sustainably</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">The best of Kenya with minimal environmental impact.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}