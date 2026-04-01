import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Mountain, Palmtree, Car, Trees } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Lake Nakuru", highlights: "Drive to Nakuru, afternoon game drive", property: "Nakuru Lodge" },
  { day: "2", place: "Lake Nakuru National Park", highlights: "Full day flamingos & rhino", property: "Nakuru Lodge" },
  { day: "3", place: "Nakuru – Masai Mara", highlights: "Drive to Mara via Rift Valley", property: "Mara Camp" },
  { day: "4", place: "Masai Mara – Full Day", highlights: "Full day Big Five safari", property: "Mara Camp" },
  { day: "5", place: "Masai Mara – Day 2", highlights: "Morning game drive, Mara river", property: "Mara Camp" },
  { day: "6", place: "Masai Mara – Day 3", highlights: "Evening sundowners, plains walk", property: "Mara Camp" },
  { day: "7", place: "Masai Mara – Day 4", highlights: "Morning drive, depart Mara", property: "Mara Camp" },
  { day: "8", place: "Masai Mara – Nairobi", highlights: "Return to Nairobi, safari ends", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi → Lake Nakuru",
    highlights: ["Scenic drive", "Lake Nakuru arrival", "Afternoon game drive"],
    description: "Depart Nairobi early morning for Lake Nakuru National Park, approximately a three-hour drive through the Rift Valley. Lake Nakuru is famous for its flamingo populations, rhinos, and diverse birdlife. Arrive at your lodge by early afternoon. Afternoon game drive around the lake shores.",
    accommodation: "Nakuru Lodge",
    mealPlan: "Lunch, Dinner",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Lake Nakuru · Full Day Safari",
    highlights: ["Flamingo watching", "Rhino tracking", "Birdlife exploration"],
    description: "Full day exploring Lake Nakuru National Park. The lake hosts millions of flamingos creating a pink carpet along the shores. Search for both black and white rhinos, lions, buffaloes, and over 400 bird species. Morning and afternoon game drives with picnic lunch by the lake.",
    accommodation: "Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Lake Nakuru → Masai Mara",
    highlights: ["Rift Valley drive", "Mara arrival", "Evening game drive"],
    description: "Depart Nakuru after breakfast and drive to the world-famous Masai Mara. The journey takes you through stunning Rift Valley landscapes before descending into the Mara ecosystem. Arrive at camp for lunch. Afternoon game drive introduces you to Africa's greatest wildlife reserve.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Masai Mara · Full Day Safari",
    highlights: ["Full day game drives", "Big Five tracking", "Plains exploration"],
    description: "Full day in the world-famous Masai Mara. Morning game drive follows the wildlife as they become active — lion prides on the hunt, elephants moving across the plains, giraffes browsing on acacia trees. The Mara is home to all members of the Big Five. Picnic lunch on the plains.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Masai Mara · Second Day",
    highlights: ["Mara river crossing", "Crocodile watching", "Predator action"],
    description: "Another full day to explore the Mara. Morning game drive along the Mara river — watch for crocodiles and hippos. Search for wildlife missed the previous day — perhaps leopard in a tree or cheetah on the hunt. Afternoon continues the exploration of this extraordinary reserve.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Masai Mara · Third Day",
    highlights: ["Morning safari", "Sundowners on plains", "Cultural visit"],
    description: "Experience the Mara at its most peaceful. Morning game drive captures the savanna coming alive with dawn. Return to camp for breakfast. Afternoon offers optional visit to a Maasai village or additional game drive. Evening — sundowners on the plains with views of the African sunset.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Masai Mara · Fourth Day",
    highlights: ["Final morning drive", "Extended exploration", "Wildlife galore"],
    description: "Make the most of your final full day in the Mara. Early morning game drive when predators are most active. Search for any species not yet spotted. Afternoon at leisure or final game drive. Evening celebration dinner with your safari companions.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Masai Mara → Nairobi",
    highlights: ["Final morning drive", "Return journey", "Safari ends"],
    description: "Early morning game drive captures the Mara at its most active — predators on the hunt, herbivores grazing, the savanna coming alive with the dawn. Return to camp for breakfast, then depart for Nairobi. Arrive in Nairobi by late afternoon.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Apr - Jun 2026", price: "$2,950", supplement: "$380" },
  { period: "High Season: Jul - Mar 2026/27", price: "$3,050", supplement: "$450" },
  { period: "Peak Season: Jul - Oct 2026", price: "$3,350", supplement: "$520" }
]

const includes = [
  "All accommodation — tented camp & lodge",
  "All meals as specified in itinerary",
  "All national park entry fees",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Round-trip road transport from Nairobi",
  "Expert driver-guide throughout",
  "Drinking water during drives",
  "Bush walks and nature walks"
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
  "Hot Air Balloon Safari",
  "Maasai Village Visit",
  "Private game drive vehicle",
  "Extended game drives"
]

export default function KenyaGreatRiftValleyMaraExplorer() {
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
        <img src="https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Great Rift Valley Mara Explorer" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Great Rift Valley Mara Explorer</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">ROAD SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Great Rift Valley & Mara Explorer</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Road Trip Through Kenya's Iconic Parks</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 8 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 2 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 3,050 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Two Parks, One Unforgettable Journey</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This 8-day road safari takes you from the bird paradise of Lake Nakuru to the world-famous Masai Mara. Experience the best of Kenya's Rift Valley lakes and the greatest wildlife show on Earth — all by road for a more immersive adventure.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Mountain, title: "Rift Valley", desc: "Scenic drives through the valley"}, {Icon: Trees, title: "Lake Nakuru", desc: "Flamingos & rhinos"}, {Icon: Palmtree, title: "Masai Mara", desc: "Big Five territory"}, {Icon: Car, title: "Road Trip", desc: "8 days adventure"}].map((item, index) => (
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Explore Kenya by Road</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Discover the Rift Valley and Masai Mara on this epic road adventure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
