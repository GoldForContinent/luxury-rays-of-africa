import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Clock, Check, X, Star, LandPlot, Map, Mountain, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const briefItinerary = [
  { day: "1", place: "Nairobi – Arrival", highlights: "Welcome, briefing", property: "Nairobi Hotel" },
  { day: "2", place: "Nairobi → Lake Nakuru", highlights: "Drive to Nakuru, afternoon game", property: "Lake Nakuru Lodge" },
  { day: "3", place: "Lake Nakuru – Full Day", highlights: "Rhino tracking, flamingos", property: "Lake Nakuru Lodge" },
  { day: "4", place: "Lake Nakuru → Masai Mara", highlights: "Drive to Mara, evening safari", property: "Mara Camp" },
  { day: "5", place: "Masai Mara – Day 1", highlights: "Full day Big Five", property: "Mara Camp" },
  { day: "6", place: "Masai Mara – Day 2", highlights: "Migration viewing, game drives", property: "Mara Camp" },
  { day: "7", place: "Masai Mara → Serengeti", highlights: "Cross to Tanzania, evening game", property: "Serengeti Lodge" },
  { day: "8", place: "Serengeti – Full Day", highlights: "Full day in Serengeti", property: "Serengeti Lodge" },
  { day: "9", place: "Serengeti → Ngorongoro", highlights: "Drive to crater, evening at rim", property: "Ngorongoro Lodge" },
  { day: "10", place: "Ngorongoro Crater", highlights: "Full day crater safari", property: "Ngorongoro Lodge" },
  { day: "11", place: "Ngorongoro → Lake Manyara", highlights: "Drive to Manyara, afternoon game", property: "Lake Manyara Lodge" },
  { day: "12", place: "Lake Manyara → Tarangire", highlights: "Drive to Tarangire, evening safari", property: "Tarangire Lodge" },
  { day: "13", place: "Tarangire – Day", highlights: "Elephant herds, baobab trees", property: "Tarangire Lodge" },
  { day: "14", place: "Tarangire → Nairobi", highlights: "Return drive, departure", property: "N/A" },
  { day: "15", place: "Nairobi – Spare Day", highlights: "Buffer day, contingency", property: "Nairobi Hotel" },
  { day: "16", place: "Nairobi – Departure", highlights: "Airport transfer", property: "N/A" }
]

const itineraryDays = [
  { day: 1, title: "Nairobi · Arrival", highlights: ["Airport meet", "Welcome dinner", "Itinerary briefing"], description: "Arrive at Jomo Kenyatta International Airport. Your guide welcomes you and transfers you to your Nairobi hotel. Evening welcome dinner with briefing on the combined Kenya-Tanzania adventure ahead.", accommodation: "Nairobi Hotel", mealPlan: "Dinner", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 2, title: "Nairobi → Lake Nakuru", highlights: ["Rift Valley drive", "Afternoon game drive", "Flamingo viewing"], description: "Depart Nairobi for Lake Nakuru National Park. Arrive at your lodge by early afternoon. Afternoon game drive along the lake shore where flamingos create a spectacular pink display.", accommodation: "Lake Nakuru Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 3, title: "Lake Nakuru · Wildlife Day", highlights: ["Rhino tracking", "Bird photography", "Lion sightings"], description: "Full day exploring Lake Nakuru. Morning game drive focuses on the rhino populations — both black and white rhinos are frequently seen. The park also hosts lions, leopards, and abundant waterfowl.", accommodation: "Lake Nakuru Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 4, title: "Lake Nakuru → Masai Mara", highlights: ["Drive to Mara", "Mara arrival", "Evening game drive"], description: "Depart for the Masai Mara, Kenya's most famous wildlife reserve. Arrive at your camp in time for afternoon game drive. The Mara delivers wildlife in abundance.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 5, title: "Masai Mara · Day One", highlights: ["Big Five tracking", "Full day safari", "Migration viewing"], description: "Full day in the iconic Masai Mara. Morning game drive follows the wildlife — lion prides, elephant herds, the possibility of witnessing the great migration. The Mara holds all members of the Big Five.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 6, title: "Masai Mara · Day Two", highlights: ["Migration safari", "Extended game drive", "Predator action"], description: "Another full day in the Mara. If your travel period falls between July and November, you may witness the great wildebeest migration — hundreds of thousands of animals crossing the Mara River.", accommodation: "Mara Camp", mealPlan: "Full Board", image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 7, title: "Masai Mara → Serengeti", highlights: ["Cross into Tanzania", "Serengeti arrival", "Evening game drive"], description: "Depart early for the crossing into Tanzania at the Isebania border. Continue to the Serengeti, world's most famous national park. Arrive at your lodge by late afternoon. Evening game drive.", accommodation: "Serengeti Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 8, title: "Serengeti · Full Day", highlights: ["Full day in Serengeti", "Wildlife abundance", "Endless plains"], description: "Full day exploring the Serengeti's endless plains. Morning game drive follows the wildlife — the Serengeti is home to the largest concentration of large mammals on Earth. Afternoon continues exploration.", accommodation: "Serengeti Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 9, title: "Serengeti → Ngorongoro", highlights: ["Drive to crater", "Crater rim arrival", "Evening at lodge"], description: "Depart for Ngorongoro Conservation Area. The descent into the crater is spectacular. Arrive at your lodge on the crater rim in time for sunset views over this natural wonder.", accommodation: "Ngorongoro Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 10, title: "Ngorongoro Crater", highlights: ["Full day crater safari", "Big Five", "Flamingo lake"], description: "Descend into the Ngorongoro Crater for a full day of wildlife viewing. The crater is a natural amphitheater holding 30,000 animals. Search for lion, rhino, elephant, buffalo, and leopard.", accommodation: "Ngorongoro Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 11, title: "Ngorongoro → Lake Manyara", highlights: ["Drive to Manyara", "Afternoon game drive", "Tree-climbing lions"], description: "Depart for Lake Manyara National Park. Afternoon game drive explores the groundwater forest — famous for tree-climbing lions and large flocks of flamingos.", accommodation: "Lake Manyara Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 12, title: "Lake Manyara → Tarangire", highlights: ["Drive to Tarangire", "Afternoon safari", "Baobab landscape"], description: "Transfer to Tarangire National Park. Known as the 'Elephant Playground,' Tarangire holds large herds of elephants and iconic baobab trees. Afternoon game drive.", accommodation: "Tarangire Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 13, title: "Tarangire · Elephant Day", highlights: ["Full day safari", "Elephant herds", "Baobab views"], description: "Full day in Tarangire exploring the diverse habitats. The park is known for its large elephant populations and ancient baobab trees. Return to the lodge for dinner.", accommodation: "Tarangire Lodge", mealPlan: "Full Board", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 14, title: "Tarangire → Nairobi", highlights: ["Return journey", "Border crossing", "Arrival in Nairobi"], description: "Depart for Nairobi, approximately five hours including border crossing. Arrive in Nairobi by late afternoon. Transfer to your hotel for the night.", accommodation: "Nairobi Hotel", mealPlan: "Breakfast, Dinner", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 15, title: "Nairobi · Buffer Day", highlights: ["Contingency day", "Optional activities", "Relaxation"], description: "This spare day allows for flexibility in case of delays or for additional activities. Visit the Giraffe Centre, Karen Blixen Museum, or simply relax.", accommodation: "Nairobi Hotel", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { day: 16, title: "Nairobi · Departure", highlights: ["Final breakfast", "Airport transfer", "Farewell"], description: "Breakfast at the hotel. Transfer to Jomo Kenyatta International Airport for your departure flight. Your incredible Kenya-Tanzania safari concludes.", accommodation: "N/A", mealPlan: "Breakfast", image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const pricingData = [
  { period: "Green Season: Oct - Nov 2026", price: "$7,150", supplement: "$850" },
  { period: "High Season: Dec - Mar 2026/27", price: "$7,550", supplement: "$950" },
  { period: "Peak Season: Jul - Oct 2026", price: "$7,950", supplement: "$1,050" }
]

const includes = ["All accommodation — lodges and tented camps in both countries", "All meals — full board throughout", "All national park and conservancy entry fees (Kenya and Tanzania)", "All game drives in 4×4 safari vehicle with professional guide", "Border crossing assistance", "All airport and in-country transfers", "Expert driver-guide throughout", "Drinking water during drives"]

const excludes = ["Change in itinerary", "Travel / medical insurance", "Tips / gratuities", "Return international air fare & Visa fees", "Items of personal nature", "Any extras not mentioned above"]

const extraAddons = ["Hot Air Balloon Safari in Masai Mara", "Hot Air Balloon Safari in Serengeti", "Private vehicle upgrade", "Extended game drives", "Additional nights in Nairobi"]

export default function KenyaTanzaniaSafari() {
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
        <img src="https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Kenya Tanzania Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> <span className="mx-2">/</span>
          <Link to="/kenya-safaris" className="hover:text-[#D4A03A]">Kenya Safaris</Link> <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Kenya Tanzania Safari</span>
        </div>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#D4A03A] font-medium tracking-[0.3em] text-sm mb-4">COMBINED SAFARI</div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">Kenya - Tanzania Safari</h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2">Two Countries, One Unforgettable Journey</div>
          <div className="flex items-center gap-4 text-white/80 mb-8"><span className="flex items-center gap-2"><Clock size={18} /> 16 Days</span><span className="flex items-center gap-2"><MapPin size={18} /> 9 Destinations</span></div>
          <div className="text-3xl md:text-4xl font-bold text-[#D4A03A]">From USD $ 7,150 Per Person</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2C3E50] mb-6">The Best of East Africa</h2>
            <p className="text-[#2C3E50] text-lg leading-relaxed max-w-4xl mx-auto">This epic combined safari takes you through Kenya and Tanzania's most iconic wildlife destinations. From the Masai Mara to the Serengeti, from the Ngorongoro Crater to Tarangire — witness the great migration and Big Five in two of Africa's greatest countries.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Globe, title: "Two Countries", desc: "Kenya & Tanzania"}, {Icon: Mountain, title: "Big Five", desc: "Both countries"}, {Icon: Map, title: "Migration", desc: "July - November"}, {Icon: LandPlot, title: "9 Parks", desc: "Ultimate safari"}].map((item, index) => (
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
            {[{name: "Nairobi", type: "arrival"}, {name: "Lake Nakuru", type: "park"}, {name: "Masai Mara", type: "park"}, {name: "Serengeti", type: "park"}, {name: "Ngorongoro", type: "park"}, {name: "Manyara", type: "park"}, {name: "Tarangire", type: "park"}, {name: "Nairobi", type: "departure"}].map((stop, index) => (
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl"><p className="text-yellow-800 text-sm"><strong>Note:</strong> Deposit to reserve: $800. Balance due: 45 days prior. Tanzania visa required (approx. $100). Minimum 2 guests.</p></div>
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">Experience East Africa's Best</h2>
          <p className="text-lg text-[#F7F2EA]/70 mb-8">A combined safari through two incredible countries.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#D4A03A] text-black px-8 py-4 font-semibold rounded-full hover:bg-[#B8922F]">Book Now</Link>
            <Link to="/packages" className="border-2 border-[#F7F2EA]/30 text-[#F7F2EA] px-8 py-4 font-semibold rounded-full hover:bg-[#F7F2EA]/10">View Other Packages</Link>
          </div>
        </div>
      </section>
    </div>
  )
}