import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Map, Mountain, Trees } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Arrival", highlights: "Welcome, briefing", property: "Nairobi Hotel" },
  { day: "2", place: "Nairobi → Aberdare", highlights: "Drive to Aberdare, afternoon game drive", property: "Aberdare Lodge" },
  { day: "3", place: "Aberdare National Park", highlights: "Full day wildlife, rhino tracking", property: "Aberdare Lodge" },
  { day: "4", place: "Aberdare → Samburu", highlights: "Drive to Samburu, evening safari", property: "Samburu Lodge" },
  { day: "5", place: "Samburu – Full Day", highlights: "Northern species, cultural visit", property: "Samburu Lodge" },
  { day: "6", place: "Samburu → Lake Nakuru", highlights: "Rift Valley drive, flamingos", property: "Lake Nakuru Lodge" },
  { day: "7", place: "Lake Nakuru – Day", highlights: "Rhino tracking, birdlife", property: "Lake Nakuru Lodge" },
  { day: "8", place: "Lake Nakuru → Masai Mara", highlights: "Drive to Mara, evening safari", property: "Mara Camp" },
  { day: "9", place: "Masai Mara – Day 1", highlights: "Full day Big Five safari", property: "Mara Camp" },
  { day: "10", place: "Masai Mara – Day 2", highlights: "Morning game, optional balloon", property: "Mara Camp" },
  { day: "11", place: "Masai Mara → Lake Naivasha", highlights: "Drive to Naivasha, boat ride", property: "Lake Naivasha Lodge" },
  { day: "12", place: "Lake Naivasha → Amboseli", highlights: "Drive to Amboseli, evening at camp", property: "Amboseli Lodge" },
  { day: "13", place: "Amboseli – Day", highlights: "Kilimanjaro views, wildlife", property: "Amboseli Lodge" },
  { day: "14", place: "Amboseli → Nairobi", highlights: "Return drive, departure", property: "N/A" }
]

const itineraryDays = [
  { day: 1, title: "Nairobi · Arrival", highlights: ["Airport meet", "Welcome dinner", "Itinerary briefing"], description: "Arrive at Jomo Kenyatta International Airport where your guide welcomes you. Transfer to your Nairobi hotel. Evening welcome dinner introduces your journey ahead. Detailed briefing covers the fourteen-day road trip through Kenya's most beautiful parks.", accommodation: "Nairobi Hotel", mealPlan: "Dinner", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 2, title: "Nairobi → Aberdare", highlights: ["Mountain drive", "Afternoon game drive", "Evening at lodge"], description: "Depart Nairobi northwards through the central highlands. Arrive at your lodge in the Aberdare National Park by early afternoon. Afternoon game drive explores the forest roads — look for elephant, buffalo, and the rare bongo antelope. Evening views from the lodge.", accommodation: "Aberdare Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 3, title: "Aberdare · Wildlife Day", highlights: ["Full day game drives", "Rhino tracking", "Forest exploration"], description: "Full day in the Aberdare highlands. Morning game drive follows the wildlife through the forest and moorland. The park holds significant populations of rhino, lion, and elephant. Afternoon continues the exploration. Return to the lodge as the African evening settles.", accommodation: "Aberdare Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 4, title: "Aberdare → Samburu", highlights: ["Northern journey", "Scenic drive", "Evening game drive"], description: "Depart Aberdare north to Samburu National Reserve. The drive passes through varied terrain — highland farmland to semi-arid savanna. Arrive at your lodge by late afternoon. Evening game drive searches for Samburu's unique species — Grevy's zebra, Somali ostrich, Beisa oryx.", accommodation: "Samburu Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 5, title: "Samburu · Full Day Safari", highlights: ["Northern species", "Village visit", "Full day exploration"], description: "Full day in Samburu's extraordinary landscape. Morning game drive captures the unique wildlife against the dramatic terrain. Visit a Samburu village for cultural interaction — learn traditions, meet elders, understand the pastoral way of life. Afternoon continues exploration.", accommodation: "Samburu Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 6, title: "Samburu → Lake Nakuru", highlights: ["Rift Valley crossing", "Flamingo viewing", "Evening at lake"], description: "Depart Samburu south to Lake Nakuru National Park. The drive crosses the equator and descends into the Rift Valley. Arrive at your lodge overlooking the lake. Afternoon game drive along the shoreline where millions of flamingos create a pink display.", accommodation: "Lake Nakuru Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 7, title: "Lake Nakuru · Rhino Day", highlights: ["Rhino tracking", "Bird photography", "Lion sightings"], description: "Dedicate the day to Lake Nakuru's rhinos — both black and white species are present. Morning game drive follows the rhinos through the woodland. The park also hosts lions, leopards, and abundant waterfowl. Return to the lodge for lunch. Afternoon continues exploration.", accommodation: "Lake Nakuru Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 8, title: "Lake Nakuru → Masai Mara", highlights: ["Scenic drive", "Mara arrival", "Evening game drive"], description: "Early departure for the Masai Mara, Kenya's most famous wildlife reserve. The drive crosses the Mara ecosystem — endless plains, river corridors. Arrive at your camp in time for afternoon game drive. The Mara delivers wildlife in abundance.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 9, title: "Masai Mara · Day One", highlights: ["Big Five tracking", "Full day safari", "Predator action"], description: "Full day in the iconic Masai Mara. Morning game drive follows the wildlife — lion prides on the hunt, elephants moving across the plains. The Mara holds all members of the Big Five. Picnic lunch on the plains. Afternoon continues exploration.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 10, title: "Masai Mara · Day Two", highlights: ["Morning game drive", "Optional balloon safari", "Evening at camp"], description: "Another full day to explore the Mara. Early morning game drive captures the wildlife at its most active. Optional hot air balloon safari (additional cost). Afternoon at leisure or additional game drive. Evening campfire and dinner.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 11, title: "Masai Mara → Lake Naivasha", highlights: ["Drive to Naivasha", "Boat ride", "Crescent Island"], description: "Depart the Mara for Lake Naivasha, approximately three hours. Arrive at your lakeside lodge by early afternoon. Afternoon boat ride on the lake — spot hippos and abundant waterfowl. Walk on Crescent Island with grazing giraffes and zebras.", accommodation: "Lake Naivasha Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 12, title: "Lake Naivasha → Amboseli", highlights: ["Scenic drive", "Kilimanjaro approach", "Evening at camp"], description: "Depart Naivasha for Amboseli National Park, approximately four hours. The journey passes through varied terrain. Arrive at your lodge with stunning views of Mount Kilimanjaro. Evening game drive with Kilimanjaro as backdrop.", accommodation: "Amboseli Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 13, title: "Amboseli · Kilimanjaro Day", highlights: ["Full day wildlife", "Kilimanjaro views", "Elephant herds"], description: "Full day in Amboseli with Africa's highest peak as your backdrop. Morning game drive captures wildlife against Kilimanjaro — elephants, buffalo, giraffes. The views at sunrise and sunset are extraordinary. Afternoon continues exploration.", accommodation: "Amboseli Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 14, title: "Amboseli → Nairobi", highlights: ["Morning drive", "Return journey", "Departure"], description: "Final morning in Amboseli — last opportunity to capture Kilimanjaro views. Depart for Nairobi, approximately four hours. Arrive in Nairobi by early afternoon. Transfer to the airport for your departure flight.", accommodation: "N/A", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const pricingData = [
  { period: "Green Season: Oct - Nov 2026", price: "$6,040", supplement: "$680" },
  { period: "High Season: Dec - Mar 2026/27", price: "$6,340", supplement: "$750" },
  { period: "Peak Season: Jul - Oct 2026", price: "$6,640", supplement: "$820" }
]

const includes = ["All accommodation — classic lodges and tented camps", "All meals — full board throughout", "All national park and conservancy entry fees", "All game drives in 4×4 safari vehicle with professional guide", "Boat ride on Lake Naivasha", "Village visit in Samburu", "All airport and in-country transfers", "Expert driver-guide throughout", "Drinking water during drives"]

const excludes = ["Change in itinerary", "Travel / medical insurance", "Tips / gratuities", "Return international air fare & Visa fee", "Items of personal nature", "Any extras not mentioned above"]

const extraAddons = ["Hot Air Balloon Safari in Masai Mara", "Private vehicle upgrade", "Extended game drives", "Additional nights in Nairobi"]

export default function KenyaDiscoverKenyaSafari() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Discover Kenya Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Discover Kenya</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">ULTIMATE ROAD TRIP</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Discover Kenya Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">The Perfect Road Trip</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 14 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 8 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 6,040 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">Kenya's Greatest Road Trip</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This comprehensive fourteen-day road trip takes you through Kenya's most beautiful national parks and game reserves in a custom-built 4×4 safari vehicle. From the highlands of Aberdare to the plains of the Masai Mara, from the flamingos of Lake Nakuru to Mount Kilimanjaro's shadow in Amboseli.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Map, title: "Road Trip", desc: "8 National Parks"}, {Icon: LandPlot, title: "Big Five", desc: "All major parks"}, {Icon: Mountain, title: "Diverse", desc: "8 destinations"}, {Icon: Trees, title: "Complete", desc: "Full Kenya tour"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Aberdare", type: "park"}, {name: "Samburu", type: "park"}, {name: "Lake Nakuru", type: "park"}, {name: "Masai Mara", type: "park"}, {name: "Naivasha", type: "park"}, {name: "Amboseli", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-3 py-2 rounded-full font-semibold text-xs ${stop.type === 'arrival' ? 'bg-green-600 text-white' : stop.type === 'departure' ? 'bg-red-600 text-white' : 'bg-[#D4A03A] text-black'}`}>{stop.name}</div>
                {index < 7 && <div className="hidden md:block w-6 h-[2px] bg-[#D4A03A]"></div>}
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $600. Balance due: 30 days prior. Minimum 2 guests.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Discover All of Kenya</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">The ultimate road trip through Kenya's most beautiful parks.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}