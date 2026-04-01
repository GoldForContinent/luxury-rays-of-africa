import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Music, Heart, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Arrival", highlights: "Welcome, ukulele lesson", property: "Nairobi Hotel" },
  { day: "2", place: "Nairobi → Lake Nakuru", highlights: "Drive to Nakuru, afternoon game drive", property: "Lake Nakuru Lodge" },
  { day: "3", place: "Lake Nakuru – Day", highlights: "Full day wildlife, photography", property: "Lake Nakuru Lodge" },
  { day: "4", place: "Lake Nakuru → Masai Mara", highlights: "Drive to Mara, evening safari", property: "Mara Camp" },
  { day: "5", place: "Masai Mara – Day 1", highlights: "Full day safari, music session", property: "Mara Camp" },
  { day: "6", place: "Masai Mara – Day 2", highlights: "Morning game, village visit", property: "Mara Camp" },
  { day: "7", place: "Masai Mara → Amboseli", highlights: "Drive to Amboseli, evening at camp", property: "Amboseli Lodge" },
  { day: "8", place: "Amboseli – Day", highlights: "Full day Kilimanjaro views, wildlife", property: "Amboseli Lodge" },
  { day: "9", place: "Amboseli → Nairobi", highlights: "Return drive, final celebration", property: "Nairobi Hotel" },
  { day: "10", place: "Nairobi – Departure", highlights: "Airport transfer", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi · Musical Welcome",
    highlights: ["Airport meet", "Ukulele lesson", "Welcome dinner"],
    description: "Arrive at Jomo Kenyatta International Airport where your hosts welcome you with a warm safari greeting. Transfer to your Nairobi hotel. Afternoon — your first ukulele lesson! Learn basic chords and songs. Evening welcome dinner features live music and an introduction to your musical journey ahead.",
    accommodation: "Nairobi Hotel",
    mealPlan: "Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi → Lake Nakuru",
    highlights: ["Scenic drive", "Afternoon game drive", "Flamingo viewing"],
    description: "Depart Nairobi for Lake Nakuru National Park, approximately three hours drive through the Rift Valley. Arrive at your lodge by early afternoon. Afternoon game drive along the lake shore where flamingos create a spectacular pink display. Search for rhino, lion, and leopard. Evening — campfire music session.",
    accommodation: "Lake Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Lake Nakuru · Wildlife Day",
    highlights: ["Full day game drives", "Rhino tracking", "Bird photography"],
    description: "Full day exploring Lake Nakuru's diverse habitats. Morning game drive focuses on the rhino populations — both black and white rhinos are frequently seen. The park also hosts lions, leopards, and abundant birdlife. Return to the lodge for lunch. Afternoon continues the wildlife exploration.",
    accommodation: "Lake Nakuru Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Lake Nakuru → Masai Mara",
    highlights: ["Scenic journey", "Mara arrival", "Evening safari"],
    description: "Depart early for the Masai Mara, Kenya's most famous wildlife reserve. The drive takes approximately five hours through varied terrain. Arrive at your camp by late afternoon. Evening game drive captures the wildlife as they become active. Return to camp for dinner and evening music around the fire.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Masai Mara · Day One",
    highlights: ["Full day safari", "Big Five", "Musical session"],
    description: "Full day in the iconic Masai Mara. Morning game drive follows the wildlife — lion prides on the hunt, elephant herds moving across the plains, giraffes silhouetted against the horizon. Picnic lunch on the plains. Afternoon continues the exploration. Evening — special musical session under the African sky.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Masai Mara · Day Two",
    highlights: ["Morning game drive", "Village visit", "Cultural music"],
    description: "Early morning game drive captures the Mara at its most active. Return to camp for breakfast. Midday visit to a Maasai village — experience the culture, learn traditional songs, share music with the community. Afternoon at leisure or additional game drive.",
    accommodation: "Mara Camp",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Masai Mara → Amboseli",
    highlights: ["Long drive", "Scenic route", "Evening at camp"],
    description: "Depart for Amboseli National Park, approximately a six-hour drive. The journey passes through diverse landscapes — Maasai lands, farmland, the arid terrain approaching Mount Kilimanjaro. Arrive at your lodge by late afternoon with stunning views of Africa's highest peak.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Amboseli · Kilimanjaro Day",
    highlights: ["Full day wildlife", "Kilimanjaro views", "Elephant herds"],
    description: "Full day in Amboseli with Mount Kilimanjaro as your backdrop. Morning game drive captures the wildlife against the iconic mountain — elephants, buffalo, giraffes, and abundant birdlife. The views of Kilimanjaro at sunrise and sunset are extraordinary. Afternoon continues exploration.",
    accommodation: "Amboseli Lodge",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Amboseli → Nairobi",
    highlights: ["Morning drive", "Return journey", "Final celebration"],
    description: "Morning departure for Nairobi, approximately four hours. Arrive in Nairobi by early afternoon. Evening — final celebration! Share the songs you've learned, celebrate your musical journey, and say farewell to your fellow travelers.",
    accommodation: "Nairobi Hotel",
    mealPlan: "Breakfast, Dinner",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Nairobi · Departure",
    highlights: ["Final breakfast", "Airport transfer", "Farewell"],
    description: "Breakfast at the hotel. Transfer to Jomo Kenyatta International Airport for your departure flight. You leave Kenya with new musical skills, unforgettable wildlife memories, and songs to last a lifetime.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Green Season: Oct - Nov 2026", price: "$4,600", supplement: "$480" },
  { period: "High Season: Dec - Mar 2026/27", price: "$4,800", supplement: "$520" },
  { period: "Peak Season: Jul - Oct 2026", price: "$4,950", supplement: "$580" }
]

const includes = [
  "All accommodation — classic tented camps and lodges",
  "All meals — full board throughout",
  "All national park and conservancy entry fees",
  "All game drives in 4×4 safari vehicle with professional guide",
  "Ukulele instruction and loan instruments",
  "Musical sessions and cultural exchanges",
  "Village visit with music exchange",
  "All airport and in-country transfers",
  "Expert host and guide throughout",
  "Drinking water and refreshments"
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
  "Private vehicle upgrade",
  "Additional nights in Nairobi",
  "Professional music recording session",
  "Extended game drives"
]

export default function KenyaUkuleleMusicalSafari() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Ukulele Musical Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Ukulele Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">MUSICAL ADVENTURE</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Ukulele Musical Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Rhythms of Africa</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 10 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 5 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 4,600 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Safari With a Musical Twist</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This unique ten-day safari combines wildlife exploration with music education. Learn to play the ukulele, share songs with local communities, and create your own African safari soundtrack. No musical experience required — just bring your enthusiasm!</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Music, title: "Music", desc: "Ukulele lessons"}, {Icon: Heart, title: "Cultural", desc: "Village exchanges"}, {Icon: Users, title: "Group", desc: "Shared experience"}, {Icon: LandPlot, title: "Wildlife", desc: "Big Five safari"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Lake Nakuru", type: "park"}, {name: "Masai Mara", type: "park"}, {name: "Amboseli", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 4 && <div className="hidden md:block w-6 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $500. Balance due: 30 days prior. Minimum 4, maximum 12 participants. No musical experience required.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Play, Explore, Create</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Your African safari soundtrack awaits.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}