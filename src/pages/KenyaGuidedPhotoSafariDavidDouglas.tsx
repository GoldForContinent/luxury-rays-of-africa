import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, Camera, Award, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Arrival", highlights: "Welcome, guide introduction", property: "Giraffe Manor" },
  { day: "2", place: "Nairobi → Masai Mara", highlights: "Flight to Mara, afternoon game drive", property: "Karen Blixen Camp" },
  { day: "3", place: "Masai Mara – Day 1", highlights: "Full day with David Douglas", property: "Karen Blixen Camp" },
  { day: "4", place: "Masai Mara – Day 2", highlights: "Morning safari, evening critique", property: "Karen Blixen Camp" },
  { day: "5", place: "Masai Mara → Samburu", highlights: "Flight north, afternoon game drive", property: "S samburu Lodge" },
  { day: "6", place: "Samburu – Day 1", highlights: "Northern species photography", property: "S samburu Lodge" },
  { day: "7", place: "Samburu – Day 2", highlights: "Full day with Mia Collis", property: "S samburu Lodge" },
  { day: "8", place: "Samburu → Nairobi", highlights: "Return flight, evening presentation", property: "Giraffe Manor" },
  { day: "9", place: "Nairobi – Final Day", highlights: "Photo review, gallery showing", property: "Giraffe Manor" },
  { day: "10", place: "Nairobi – Departure", highlights: "Airport transfer", property: "N/A" }
]

const itineraryDays = [
  {
    day: 1,
    title: "Nairobi · Legendary Arrival",
    highlights: ["Giraffe Manor", "Guide meeting", "Welcome dinner"],
    description: "Arrive at Jomo Kenyatta International Airport where your private transfer awaits. A short drive takes you to the world-famous Giraffe Manor — a unique opportunity to photograph endangered Rothschild's giraffes up close as they roam the grounds. Afternoon meet-and-greet with your guides: David Douglas and Mia Collis. Evening welcome dinner.",
    accommodation: "Giraffe Manor, Nairobi",
    mealPlan: "Dinner",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Nairobi → Masai Mara",
    highlights: ["Scenic flight", "Mara arrival", "Afternoon game drive"],
    description: "Morning flight from Wilson Airport to the Masai Mara. Aerial views of the Rift Valley are spectacular. Land on the Mara's airstrip and transfer to Karen Blixen Camp, a luxury tented camp on the Mara River. Afternoon game drive with David Douglas as your personal guide — focus on composition, light, and capturing the perfect wildlife moment.",
    accommodation: "Karen Blixen Camp, Masai Mara",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Masai Mara · Day One",
    highlights: ["Full day photography", "Big Five tracking", "Composition mastery"],
    description: "Full day in the Mara with David Douglas at your side. Morning game drive captures the wildlife in the soft morning light. David provides real-time coaching on composition, exposure, and timing. Picnic lunch on the plains. Afternoon continues the exploration — tracking lion prides, leopard in trees, elephant herds against the plains.",
    accommodation: "Karen Blixen Camp, Masai Mara",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Masai Mara · Day Two",
    highlights: ["Morning safari", "Photo critique", "Evening presentation"],
    description: "Early morning game drive captures the Mara at its most active. Return to camp for breakfast, then review the previous day's images with David — learn post-processing techniques, composition improvements, and storytelling through photography. Afternoon game drive in a different area of the reserve.",
    accommodation: "Karen Blixen Camp, Masai Mara",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Masai Mara → Samburu",
    highlights: ["Flight north", "Samburu arrival", "Evening game drive"],
    description: "Morning flight north to Samburu National Reserve. The landscape transforms from the green Mara plains to the semi-arid terrain of northern Kenya. Arrive at your luxury lodge by early afternoon. Afternoon game drive searches for Samburu's unique species — Grevy's zebra, Somali ostrich, Beisa oryx.",
    accommodation: "S samburu Lodge, Samburu",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Samburu · Day One",
    highlights: ["Northern species", "Cultural photography", "Landscape work"],
    description: "Full day in Samburu with Mia Collis taking the lead. Morning game drive focuses on the unique northern wildlife. Visit a Samburu village for cultural photography — portraits, daily life, colorful traditions. Mia shares her approach to capturing authentic moments. Return to the lodge for lunch. Afternoon continues exploration.",
    accommodation: "S samburu Lodge, Samburu",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 7,
    title: "Samburu · Day Two",
    highlights: ["Full day with Mia", "Photo mastery", "Wildlife encounters"],
    description: "Another full day in this extraordinary landscape. Morning focuses on wildlife photography — elephant herds, predator sightings, the dramatic terrain. Mia provides detailed instruction on her signature techniques. Afternoon explores different areas of the reserve. Evening presentation of the best images from both destinations.",
    accommodation: "S samburu Lodge, Samburu",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 8,
    title: "Samburu → Nairobi",
    highlights: ["Return flight", "City transfer", "Evening presentation"],
    description: "Morning flight back to Nairobi. Transfer to Giraffe Manor for a final night. Evening features a comprehensive presentation by both David and Mia — a retrospective of your journey, technique summaries, and portfolio review. Farewell dinner celebrates your extraordinary photographic journey.",
    accommodation: "Giraffe Manor, Nairobi",
    mealPlan: "Breakfast, Dinner",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 9,
    title: "Nairobi · Final Day",
    highlights: ["Photo review", "Gallery showing", "Certificate ceremony"],
    description: "Final day dedicated to your photography. Morning session reviews all images from the trip — David and Mia provide detailed feedback on each participant's work. Afternoon creates a curated gallery selection for each guest. Evening ceremony presents certificates of completion. Final dinner at the manor.",
    accommodation: "Giraffe Manor, Nairobi",
    mealPlan: "Full Board",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 10,
    title: "Nairobi · Departure",
    highlights: ["Final breakfast", "Airport transfer", "Farewell"],
    description: "Final breakfast at Giraffe Manor — one last opportunity to photograph the giraffes. Private transfer to Jomo Kenyatta International Airport for your departure flight. You leave Kenya with extraordinary images, new skills, and memories of a lifetime.",
    accommodation: "N/A",
    mealPlan: "Breakfast",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const pricingData = [
  { period: "Season 2026 (Limited dates)", price: "$8,000", supplement: "$1,800" }
]

const includes = [
  "All accommodation — Giraffe Manor, Karen Blixen Camp, S samburu Lodge",
  "All meals — gourmet cuisine throughout",
  "All internal flights (Nairobi to Mara, Mara to Samburu, Samburu to Nairobi)",
  "All national park and conservancy entry fees",
  "All game drives in 4×4 safari vehicles with David Douglas and Mia Collis",
  "Personal photography instruction from both guides",
  "Daily photo critique and editing sessions",
  "Welcome and farewell drinks",
  "All airport and in-country transfers",
  "Photo certificate and digital gallery"
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
  "Private helicopter transfer",
  "Additional nights at Giraffe Manor",
  "Extended post-processing session",
  "Professional print delivery"
]

export default function KenyaGuidedPhotoSafariDavidDouglas() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Guided Photo Safari with David Douglas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Guided Photo Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">BESPOKE PHOTOGRAPHIC SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Guided Photo Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">With David Douglas & Mia Collis</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 10 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 4 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 13,200 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Learn From the Masters</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This exclusive ten-day photographic safari is led by renowned cinematographer David Douglas and photographer Mia Collis. Small group of only six photographers. Two master instructors. Four incredible destinations. This is photography education in the world's most spectacular setting.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Award, title: "Expert Guides", desc: "David Douglas & Mia Collis"}, {Icon: Camera, title: "Small Group", desc: "Only 6 photographers"}, {Icon: Users, title: "Personal", desc: "One-on-one coaching"}, {Icon: Star, title: "Luxury", desc: "Premium accommodations"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Masai Mara", type: "park"}, {name: "Samburu", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $2,000. Balance due: 60 days prior. Limited to 6 participants. Minimum photography skill level required.</p></div>
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
          <p className="text-lg text-[#F7F2EA]/70 mb-8">Learn from two of Africa's most acclaimed wildlife photographers.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}