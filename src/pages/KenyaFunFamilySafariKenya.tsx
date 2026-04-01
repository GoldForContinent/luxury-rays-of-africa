import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Camera, Baby, Gamepad2, Utensils } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Amboseli", highlights: "Drive to Amboseli, afternoon game drive", property: "Amboseli Lodge" },
  { day: "2", place: "Amboseli – Full Day", highlights: "Elephants with Mt. Kilimanjaro", property: "Amboseli Lodge" },
  { day: "3", place: "Amboseli – Lake Nakuru", highlights: "Drive to Nakuru, flamingos", property: "Nakuru Lodge" },
  { day: "4", place: "Lake Nakuru – Day 2", highlights: "Rhinos, birdlife, family activities", property: "Nakuru Lodge" },
  { day: "5", place: "Nakuru – Masai Mara", highlights: "Drive to Mara, evening drive", property: "Mara Camp" },
  { day: "6", place: "Masai Mara – Full Day", highlights: "Big Five, family game drives", property: "Mara Camp" },
  { day: "7", place: "Masai Mara – Day 2", highlights: "Optional balloon safari, cultural visit", property: "Mara Camp" },
  { day: "8", place: "Masai Mara – Day 3", highlights: "Morning drive, afternoon relax", property: "Mara Camp" },
  { day: "9", place: "Masai Mara – Lake Naivasha", highlights: "Drive to Naivasha, boat ride", property: "Naivasha Camp" },
  { day: "10", place: "Lake Naivasha – Day 2", highlights: "Crescent Island walk, hippos", property: "Naivasha Camp" },
  { day: "11", place: "Naivasha – Nairobi", highlights: "Final drive, safari ends", property: "N/A" },
  { day: "12", place: "Safari Ends", highlights: "Departure arrangements", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi → Amboseli",
    highlights: ["Scenic drive", "Elephant country", "Kilimanjaro views"],
    description: "Depart Nairobi early morning for Amboseli National Park, approximately a four-hour drive through the Rift Valley. Amboseli is known for its large elephant herds and spectacular views of Mount Kilimanjaro. Arrive at your lodge by lunch. Afternoon game drive with elephants, lions, and more.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Lunch, Dinner",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Amboseli · Family Safari Day",
    highlights: ["Elephant families", "Kilimanjaro sunrise", "Swamp walks"],
    description: "Full day in Amboseli — perfect for families. Morning game drive as elephants emerge from the swamps. Watch for lions, cheetahs, and buffaloes. The backdrop of snow-capped Kilimanjaro makes every photo special. Afternoon game drive and swamp visit.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Amboseli → Lake Nakuru",
    highlights: ["Scenic drive", "Rift Valley views", "Bird paradise"],
    description: "Depart Amboseli and drive to Lake Nakuru National Park. The journey takes you through diverse landscapes. Arrive at your lodge by late afternoon. Evening game drive around the lake shores where flamingos create a pink spectacle.",
    accommodation: "Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Lake Nakuru · Family Day",
    highlights: ["Rhino tracking", "Bird watching", "Family activities"],
    description: "Full day at Lake Nakuru — perfect for children. Search for both black and white rhinos, lions, and buffaloes. The park has over 400 bird species. Enjoy family-friendly activities at the lodge in the afternoon.",
    accommodation: "Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Lake Nakuru → Masai Mara",
    highlights: ["Drive to Mara", "Rift Valley descent", "Evening game drive"],
    description: "Travel to the world-famous Masai Mara. The journey is spectacular — from highland farmland to the vast savanna. Arrive at camp for lunch. Afternoon game drive introduces your family to Africa's greatest wildlife reserve.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Masai Mara · Family Safari",
    highlights: ["Big Five", "Lion prides", "Elephant herds"],
    description: "Full day in the Mara with your family. Morning game drive searches for all members of the Big Five — lions, elephants, buffaloes, leopards, and rhinos. Children love watching lion cubs play. Picnic lunch on the plains. Afternoon game drive.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Masai Mara · Adventure Day",
    highlights: ["Hot air balloon (optional)", "Maasai village", "Sundowners"],
    description: "Optional early morning hot air balloon safari over the plains — a once-in-a-lifetime experience for the whole family (additional cost). Alternatively, morning game drive. Visit a Maasai village to learn about their culture. Evening sundowners on the plains.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Masai Mara · Relaxation Day",
    highlights: ["Morning drive", "Pool time", "Game viewing"],
    description: "Final full day in the Mara. Morning game drive captures the wildlife at dawn. Return to camp for a relaxed breakfast. Spend the afternoon at the pool or optional additional game drive. Evening dinner and stories around the campfire.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Masai Mara → Lake Naivasha",
    highlights: ["Morning drive", "Scenic drive", "Boat ride"],
    description: "Depart the Mara and drive to Lake Naivasha. The journey takes you through the Rift Valley. Arrive at your camp by early afternoon. Afternoon boat ride on Lake Naivasha to see hippos and waterbirds.",
    accommodation: "Naivasha Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Lake Naivasha · Island Adventure",
    highlights: ["Crescent Island walk", "Hippo viewing", "Nature walk"],
    description: "Morning walk on Crescent Island — a unique experience walking among giraffes, zebras, and buffaloes on foot (children love this!). Return to camp for breakfast. Afternoon at leisure or additional nature walk.",
    accommodation: "Naivasha Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 11,
    title: "Lake Naivasha → Nairobi",
    highlights: ["Final morning", "Return drive", "Safari concludes"],
    description: "Early morning at the lake — watch the hippos as they return to the water after grazing. Breakfast at camp, then depart for Nairobi. Arrive in the capital by late afternoon.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Apr - Jun 2026", price: "$5,110", supplement: "$650" },
  { period: "High Season: Jul - Mar 2026/27", price: "$5,610", supplement: "$750" },
  { period: "Peak Season: Jul - Oct 2026", price: "$6,110", supplement: "$850" }
]

const includes = [
  "All accommodation — family-friendly camps & lodges",
  "All meals as specified in itinerary",
  "All national park entry fees",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Round-trip road transport from Nairobi",
  "Expert driver-guide throughout",
  "Drinking water during drives",
  "Boat ride at Lake Naivasha",
  "Crescent Island walk"
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
  "Extra nights at any location"
]

export default function KenyaFunFamilySafariKenya() {
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
        <img src="https://images.pexels.com/photos/2580639/pexels-photo-2580639.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Fun Family Safari Kenya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Fun Family Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">FAMILY SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Fun Family Safari Kenya</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">12 Days of Wildlife & Wonder for All Ages</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 12 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 5 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 5,610 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">The Perfect Safari for Families</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This 12-day family safari is specially designed for families with children. From the elephants of Amboseli to the hippos of Lake Naivasha, every day offers exciting wildlife encounters, hands-on activities, and memories that will last a lifetime.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Baby, title: "Family Friendly", desc: "Safe & exciting for kids"}, {Icon: Gamepad2, title: "Activities", desc: "Boat rides, walks, village visits"}, {Icon: Utensils, title: "Great Food", desc: "Kid-friendly meals included"}, {Icon: Camera, title: "Wildlife", desc: "Big Five & more"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Amboseli", type: "park"}, {name: "Lake Nakuru", type: "park"}, {name: "Masai Mara", type: "park"}, {name: "Lake Naivasha", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $400. Balance due: 21 days prior. Children pricing available. Family rooms available.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Create Family Memories</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Give your children the gift of a lifetime — a Kenyan safari adventure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
