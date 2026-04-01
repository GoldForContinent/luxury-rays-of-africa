import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Car, Bike, Footprints, Wind, Anchor, Utensils, Users, Plane } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const faqData = [
  {
    question: "Is Kenya Safe to Visit For Holidays / Safaris?",
    answer: "The short answer is Kenya is safe to visit for safaris, either with your family, work colleagues, friends or just on solo travel. Kenya's major safari destinations like Masai Mara, Amboseli, and Samburu maintain excellent safety records."
  },
  {
    question: "Which Are the Best Destinations to visit in Kenya?",
    answer: "The best destinations include Masai Mara for the Great Migration, Amboseli for elephant herds with Kilimanjaro views, Samburu for the Special Five, Lake Nakuru for flamingos and rhinos, and Ol Pejeta for rhino conservation."
  },
  {
    question: "Are Kenya Safaris Expensive? How Much do They Cost?",
    answer: "Kenya safari costs vary significantly. Mid-range safaris cost $650-$1,500 per person per day, while luxury fly-in safaris range from $1,500-$3,500+ per person per day. Peak season (July-October) commands higher prices."
  },
  {
    question: "What's the best time for a luxury Kenya safari?",
    answer: "The optimal time is July-October for the Great Migration, and January-March for dry season wildlife viewing. Peak season is mid-June to October when animals gather near water sources."
  },
  {
    question: "What should I pack for a Kenya safari?",
    answer: "Pack lightly with neutral-colored clothing (khaki, beige), a wide-brimmed hat, sunscreen, insect repellent, binoculars, camera with zoom lens, comfortable walking shoes, and a light jacket for early morning drives."
  },
  {
    question: "Do luxury Kenya safaris include meals and transfers?",
    answer: "Yes, most luxury packages are 'all-inclusive,' covering meals, fine wines, spirits, laundry services, and all airport transfers. Fly-in safaris include inter-camp flights."
  },
  {
    question: "How to choose between national parks and private conservancies in Kenya?",
    answer: "National parks offer more budget-friendly options and the Big Five. Private conservancies like Ol Pejeta, Lewa, and Naboisho offer exclusive, crowd-free wildlife viewing with unique activities like night drives and bush walks."
  },
  {
    question: "Can I combine Kenya with beach holidays?",
    answer: "Absolutely! Kenya's Bush-to-Beach combinations are popular. After your safari, fly to Diani Beach, Watamu, or Lamu for pristine white sand beaches and coral reef snorkeling."
  },
  {
    question: "What wildlife can I see in Kenya?",
    answer: "Kenya offers the complete Big Five (lion, leopard, elephant, buffalo, rhino), plus cheetahs, giraffes, zebras, wildebeest, hippos, crocodiles, hyenas, and over 1,000 bird species."
  },
  {
    question: "How long should I plan for a Kenya safari?",
    answer: "A minimum of 7-10 days is recommended for a comprehensive experience visiting 2-3 major destinations. For multi-country safaris or beach extensions, plan 12-14 days."
  }
]

const kenyaParks = [
  { name: "Maasai Mara Game Reserve", description: "World-famous reserve hosting the Great Migration with exceptional Big Five viewing.", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Amboseli National Park", description: "Famous for massive elephant herds framed against Mount Kilimanjaro.", image: "https://images.pexels.com/photos/2835439/pexels-photo-2835439.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Samburu Game Reserve", description: "Home to the unique 'Special Five' species found nowhere else in Kenya.", image: "https://images.pexels.com/photos/697922/pexels-photo-697922.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Lake Naivasha", description: "Kenya's largest freshwater lake with diverse bird species and hippos.", image: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Tsavo West", description: "Stunning landscapes with volcanic hills and diverse wildlife.", image: "https://images.pexels.com/photos/2251164/pexels-photo-2251164.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Tsavo East", description: "Kenya's largest park with red elephants and dramatic wilderness.", image: "https://images.pexels.com/photos/2374659/pexels-photo-2374659.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Lumo Community Conservancy", description: "Community-run conservancy with excellent wildlife viewing.", image: "https://images.pexels.com/photos/4614229/pexels-photo-4614229.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const kenyaBeaches = [
  { name: "Diani & Watamu", description: "White sandy beaches with turquoise waters and coral reefs.", image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Lamu", description: "Ancient Swahili culture with pristine beaches and coral reefs.", image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Mombasa & Marine Park", description: "Historic city with marine parks for snorkeling and diving.", image: "https://images.pexels.com/photos/235956/pexels-photo-235956.jpeg?auto=compress&cs=tinysrgb&w=800" }
]

const safariActivities = [
  { icon: Car, title: "Classic Safari Game Drives", description: "Using 4×4 vehicles to find the Big Five. Best at Masai Mara (July-October).", timing: "June-October & January-March" },
  { icon: Footprints, title: "Horseback Safaris", description: "A peaceful encounter with the wild in Laikipia and Ol Pejeta.", timing: "June-October" },
  { icon: Wind, title: "Guided Bush Walks", description: "Track wildlife on foot with armed guides in private conservancies.", timing: "Year-round" },
  { icon: Wind, title: "Hot Air Balloon", description: "Sunrise views over Maasai Mara, ending with champagne breakfast.", timing: "June-October" },
  { icon: Anchor, title: "Boat Safaris", description: "Lake Naivasha and Lake Baringo for hippos and birdlife.", timing: "Year-round" },
  { icon: Bike, title: "Mountain Biking", description: "Explore Hell's Gate National Park on two wheels.", timing: "June-October" },
  { icon: Plane, title: "Helicopter Excursions", description: "Luxury adventure to remote locations and Mount Kenya glaciers.", timing: "Jan-March & July-Oct" },
  { icon: Utensils, title: "Bush Dinners", description: "Dining under African stars with lantern-lit settings.", timing: "Year-round" },
  { icon: Users, title: "Cultural Visits", description: "Visit Maasai or Samburu villages for authentic culture.", timing: "Year-round" },
  { icon: Anchor, title: "Marine Safaris", description: "Snorkeling and diving at Diani and Watamu coral reefs.", timing: "October-March" }
]

const safariTypes = [
  {
    title: "Mid-Range Luxury Safaris", price: "$650 - $1,500", perPerson: "per person per day",
    description: "Permanent tented camps or well-equipped lodges with en-suite bathrooms, private 4×4 Land Cruiser, professional driver-guide.",
    features: ["Private 4×4 Land Cruiser", "Professional driver-guide", "Higher-quality meals", "Inside national parks"]
  },
  {
    title: "Luxury & Fly-In Safaris", price: "$1,500 - $3,500+", perPerson: "per person per day",
    description: "5-star lodges, gourmet cuisine, fly between parks in small aircraft, private plunge pools, all-inclusive.",
    features: ["Fly-in between destinations", "5-star boutique camps", "Private plunge pools", "All-inclusive", "Night game drives"]
  },
  {
    title: "Family Safaris with Kids", price: "From $7,500", perPerson: "per person (12 days)",
    description: "Kids' Clubs, shorter interactive game drives, expert Maasai guides, family-friendly accommodations.",
    features: ["Kids' Clubs & Explorer programs", "Child-friendly activities", "Shorter game drives", "Educational experiences"]
  },
  {
    title: "Beach & Bush Combos", price: "$7,500 - $10,500", perPerson: "per person (12 days)",
    description: "Big Five safari then fly to pristine coast for beaches, snorkeling and marine safaris.",
    features: ["Big Five game drives", "Beach resort stay", "Snorkeling & scuba", "Fly-in or by-road options"]
  }
]

const samplePackages = [
  { title: "Kenya Signature Safari", nights: 11, price: "9,100", destinations: ["Maasai Mara", "Samburu", "Amboseli"], path: "/kenya-signature-safari" },
  { title: "Wings Over the Wilderness Safari", nights: "7 Days / 6 Nights", price: "5,880", destinations: ["Nairobi", "Masai Mara", "Samburu"], path: "/kenya-wings-over-wilderness" },
  { title: "Wings Over the Wilderness Safari", nights: "4 Days / 3 Nights", price: "5,105", destinations: ["Nairobi", "Masai Mara"], path: "/kenya-wings-over-wilderness-4days" },
  { title: "Soul of the Savannah: An Intimate Escape", nights: "7 Days / 6 Nights", price: "7,111", destinations: ["Lake Nakuru", "Masai Mara"], path: "/kenya-soul-of-the-savannah" },
  { title: "Women's Ethical & Empowering Safari", nights: 11, price: "7,950", destinations: ["Masai Mara", "Samburu", "Ol Pejeta"], path: "/kenya-womens-ethical-empowering-safari" },
  { title: "Wild North & Mount Kenya Expedition", nights: 10, price: "5,490", destinations: ["Samburu", "Mount Kenya", "Ol Pejeta"], path: "/kenya-wild-north-mount-kenya" },
  { title: "Eco Adventure Safari - Budget", nights: 9, price: "4,180", destinations: ["Lake Nakuru", "Masai Mara"], path: "/kenya-eco-adventure-safari-budget" },
  { title: "Eco Adventure Safari - Luxury", nights: 9, price: "4,320", destinations: ["Lake Nakuru", "Masai Mara"], path: "/kenya-eco-adventure-safari-luxury" },
  { title: "Twin Treasures: Mara to Lumo", nights: 7, price: "5,020", destinations: ["Masai Mara", "Lumo", "Shompole"], path: "/kenya-twin-treasures-mara-lumo" },
  { title: "Kenya Photographic Safari", nights: 14, price: "12,190", destinations: ["Samburu", "Lake Nakuru", "Masai Mara"], path: "/kenya-photographic-safari-14days" },
  { title: "Guided Photo Safari - David Douglas", nights: 10, price: "13,200", destinations: ["Masai Mara", "Samburu"], path: "/kenya-guided-photo-safari-david-douglas" },
  { title: "Road Package to Maasai Mara", nights: 3, price: "1,150", destinations: ["Masai Mara"], path: "/kenya-road-package-maasai-mara" },
  { title: "Ukulele Musical Safari", nights: 10, price: "4,600", destinations: ["Lake Nakuru", "Masai Mara", "Amboseli"], path: "/kenya-ukulele-musical-safari" },
  { title: "Magical Maasai Mara", nights: 4, price: "3,130", destinations: ["Masai Mara"], path: "/kenya-magical-maasai-mara" }
]

const accommodations = [
  { name: "Mbweha Camp", location: "Lake Nakuru", description: "Unique intimate safari in the Lemek Conservancy." },
  { name: "Kibo Safari Camp", location: "Amboseli", description: "Luxury tented camp at foot of Mount Kilimanjaro." },
  { name: "Soroi Larsens Camp", location: "Samburu", description: "Luxurious camp along Ewaso Ng'iro River." }
]

const seasonalData = [
  { park: "Masai Mara", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Amboseli", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Samburu", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Tsavo West", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Tsavo East", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Nairobi", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Laikipia", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Meru", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Lake Nakuru", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Lake Naivasha", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function KenyaSafari() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      )

      gsap.to('.hero-bg', {
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      contentRefs.current.forEach((el) => {
        if (el) {
          gsap.fromTo(el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <img 
          src="/kenyasafaris hero.jpg" 
          alt="Kenya Safari" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Kenya Safaris</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight animate-fade-in">
            KENYA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            Luxury Kenya Safaris and Tours that are Memorable
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Help Me Plan <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              Our Safaris
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Why Visit Kenya */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              WHY KENYA FOR YOUR SAFARI
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <p className="text-[#2C3E50] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Kenya is a premier safari destination, offering an unmatched experience combining the world-famous Great Migration, Big Five Wildlife sightings, cultural immersions, and diverse landscapes from golden savannas to tropical coasts.
          </p>
        </div>
      </section>

      {/* Key Highlights with Alternating Layout */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  The Great Migration & Big Five
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Maasai Mara hosts the Great Migration, called the Eighth Wonder of the World. From July to October, over 1.5 million wildebeest and zebras cross the Mara River, braving crocodiles and lions.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Kenya offers the best Big Five opportunities in Africa - lions, leopards, elephants, buffalo, and rhinos in their natural habitat with virtually guaranteed sightings.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/migration_collage_01.jpg" alt="Great Migration" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
                <img src="/unfiltered_collage_01.jpg" alt="Kenya Landscapes" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Diverse Ecosystems & Culture
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  From Mara's vast plains to Rift Valley soda lakes like Lake Nakuru, to Samburu's arid beauty with unique Special Five species.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Engage with Maasai and Samburu communities for deep insights into ancient traditions and harmonious coexistence with nature.
                </p>
              </div>
            </div>
          </div>

          <div ref={addToRefs}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
                  Adventures & Beach Holidays
                </h3>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Walking safaris in Lewa, Mount Kenya treks, boat rides among hippos, and helicopter excursions to remote wilderness.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Kenya's Bush-and-Beach combinations fly you from savanna to Diani or Lamu's white-sand beaches for perfect relaxation.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
                <img src="/destinations_hero.jpg" alt="Kenya Beach" className="relative rounded-2xl shadow-2xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section ref={addToRefs} className="py-20 px-4 md:px-[8vw] bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="font-display font-bold text-3xl text-[#2C3E50] mb-4">
              LOOKING FOR A SAFARI IN AFRICA?
            </h3>
            <p className="text-[#2C3E50] text-lg">
              Explore 70+ luxury African safaris. Contact us to design your bespoke adventure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/packages" className="btn-primary">Explore Our Safaris</Link>
            <Link to="/contact" className="px-8 py-3 border-2 border-[#2C3E50] text-[#2C3E50] rounded-full font-semibold hover:bg-[#2C3E50] hover:text-white transition-all">
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Top Safari Destinations */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4">
              BEST PLACES TO VISIT IN KENYA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kenyaParks.map((park, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={park.image} 
                    alt={park.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-display font-bold text-lg text-white">{park.name}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E50]/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {park.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[#CD7F32] font-semibold text-sm group-hover:gap-3 transition-all">
                    View Park <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beaches & Marine Parks */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Relax</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4">
              BEACHES & MARINE PARKS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {kenyaBeaches.map((beach, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={beach.image} 
                    alt={beach.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-display font-bold text-lg text-white">{beach.name}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E50]/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {beach.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[#CD7F32] font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Types & Costs */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Investment</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#F7F2EA] mt-4">
              SAFARI TYPES & COSTS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <p className="text-[#F7F2EA]/80 text-lg text-center mb-12 max-w-3xl mx-auto">
            Prices range from $650 to $3,500+ per person per day. Peak season (July-October) commands higher rates.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {safariTypes.map((type, index) => (
              <div key={index} className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A]/50 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-[#F7F2EA]">{type.title}</h3>
                  <span className="bg-[#D4A03A]/20 text-[#D4A03A] px-4 py-2 rounded-full font-bold">
                    {type.price}
                  </span>
                </div>
                <p className="text-[#F7F2EA]/60 text-sm mb-4">{type.perPerson}</p>
                <p className="text-[#F7F2EA]/80 mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-[#F7F2EA]/80">
                      <div className="w-1.5 h-1.5 bg-[#D4A03A] rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Activities */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experiences</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4">
              UNFORGETTABLE SAFARI EXPERIENCES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariActivities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#D4C5B9]">
                <div className="w-14 h-14 mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                  <activity.icon size={24} className="text-[#D4A03A]" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2">{activity.title}</h4>
                <p className="text-[#2C3E50]/80 text-sm mb-3">{activity.description}</p>
                <div className="flex items-center gap-2 text-[#CD7F32] text-xs">
                  <ClockIcon /> {activity.timing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Country Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Combine</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mt-4">
              COMBINE KENYA WITH OTHER DESTINATIONS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Kenya, Tanzania & Zanzibar</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Complete Serengeti-Masai Mara ecosystem. 10-14 day trips ending at Zanzibar beaches.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Uganda & Rwanda</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Big Five in Kenya + Gorilla Trekking in Bwindi or Volcanoes. Direct flights from Nairobi.
              </p>
            </div>
            <div className="bg-[#2B1E1A] p-8 rounded-2xl border border-[#F7F2EA]/10 hover:border-[#D4A03A] transition-all">
              <MapPinIcon />
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mt-4 mb-3">Victoria Falls, South Africa & Namibia</h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                From Mara plains to Namib Desert dunes. Kruger, Victoria Falls, or desert adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Timing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              BEST TIME TO VISIT KENYA
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto mt-6"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 overflow-x-auto">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] text-center mb-2">Kenya Safari Seasonal Guide</h3>
            <p className="text-center text-[#CD7F32] mb-6">Best Weather Guide</p>
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#F5E6D3]">
                  <th className="p-3 text-left text-[#2C3E50] font-semibold">Park</th>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                    <th key={m} className="p-3 text-center text-[#2C3E50] font-semibold">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((row, i) => (
                  <tr key={i} className="border-b border-[#D4C5B9]">
                    <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.park}</td>
                    {Object.entries(row).slice(1).map(([_, val], j) => (
                      <td key={j} className={`p-3 text-center text-xs ${getRatingColor(val)}`}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #556B2F' }}>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Low Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">April to Mid June</h4>
              <p className="text-[#2C3E50]/70 text-sm">Green Season - lower prices, lush scenery, perfect for photography.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #E67E22' }}>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">High Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">Jan-Mar & Nov-Dec</h4>
              <p className="text-[#2C3E50]/70 text-sm">Calving Season - excellent big cat viewing, intense predator action.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ borderLeft: '4px solid #2D5016' }}>
              <span className="inline-block px-3 py-1 bg-green-900 text-white rounded-full text-xs font-semibold uppercase mb-3">Peak Season</span>
              <h4 className="font-bold text-[#2C3E50] mb-2">Mid June to October</h4>
              <p className="text-[#2C3E50]/70 text-sm">Great Migration (Aug-Oct), dry weather, animals at waterholes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Packages */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Itineraries</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
                OUR RECOMMENDED BEST SAFARIS IN KENYA
              </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {samplePackages.map((pkg, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-[#D4C5B9]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#CD7F32] font-semibold">{pkg.nights}</span>
                  <StarIcon />
                </div>
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-4">{pkg.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.destinations.map((d, j) => (
                    <span key={j} className="text-xs bg-[#F5E6D3] text-[#2C3E50] px-2 py-1 rounded">{d}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#D4C5B9]">
                  <div>
                    <span className="text-[#CD7F32] font-bold text-2xl">${pkg.price}</span>
                    <span className="text-[#2C3E50]/60 text-sm"> PPS</span>
                  </div>
                  <Link to={pkg.path} className="text-[#CD7F32] font-semibold text-sm hover:underline">View Itinerary</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Stays</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              TOP SAFARI ACCOMMODATIONS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((camp, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-br from-[#2B1E1A] to-[#4a3528] flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{camp.name[0]}</span>
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-2">{camp.name}</h4>
                  <p className="text-[#CD7F32] text-sm font-semibold mb-3">{camp.location}</p>
                  <p className="text-[#2C3E50]/80 text-sm">{camp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Help</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#D4C5B9] overflow-hidden">
                <button className="w-full px-6 py-5 text-left flex justify-between items-center" onClick={() => toggleFaq(i)}>
                  <span className="font-semibold text-[#2C3E50]">{faq.question}</span>
                  <span className={`text-[#D4A03A] text-2xl font-light transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-[#2C3E50]/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <StarIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">15+ Years</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Safari expertise</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Expert Guides</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Silver & Gold certified</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <StarIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Local Owned</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Kenya-based DMC</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Safe Payments</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Financial protection</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <StarIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Sustainable</h4>
              <p className="text-[#F7F2EA]/60 text-xs">Wildlife & community</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckIcon />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-1">Positive Impact</h4>
              <p className="text-[#F7F2EA]/60 text-xs">School programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-4 md:px-[8vw] relative overflow-hidden">
        <img src="/kenyasafaris hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            READY TO PLAN YOUR KENYA SAFARI?
          </h2>
          <p className="text-[#D4A03A] text-lg uppercase tracking-widest mb-8">Let's Create Your Adventure</p>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you dream of the Great Migration, Big Five, or Bush-to-Beach, we craft bespoke experiences that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">Start Planning</Link>
            <Link to="/contact" className="bg-transparent border-3 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              Speak With Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
