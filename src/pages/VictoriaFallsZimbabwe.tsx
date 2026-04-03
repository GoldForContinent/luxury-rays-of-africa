import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Ship, Eye, Camera, Anchor, Plane, Waves } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const fallHighlights = [
  {
    title: "One of the Seven Natural Wonders",
    description: "Victoria Falls, known locally as Mosi-oa-Tunya ('The Smoke That Thunders'), is one of the world's most spectacular natural wonders, stretching 1,708 meters wide and 108 meters high."
  },
  {
    title: "Adventure Capital of Africa",
    description: "From white-water rafting on the Zambezi to bungee jumping off the falls bridge, Victoria Falls offers heart-pumping activities for adventure seekers."
  },
  {
    title: "Spectacular Rainbows",
    description: "The falls create constant spray that produces beautiful rainbows, visible during the full moon nights for a magical 'moonbow' experience."
  },
  {
    title: "Zambezi River Adventures",
    description: "Beyond the falls, the Zambezi offers sunset cruises, fishing expeditions, and elephant interaction experiences along its scenic banks."
  }
]

const activities = [
  { icon: <Anchor className="w-8 h-8" />, title: "Sunset Cruises", description: "Relax on the Zambezi River with drinks and canapes while watching hippos and crocodiles.", timing: "Year-round" },
  { icon: <Plane className="w-8 h-8" />, title: "Helicopter Tours", description: "Get bird's-eye views of the falls and Zambezi gorges from thrilling helicopter flights.", timing: "Year-round" },
  { icon: <Waves className="w-8 h-8" />, title: "White Water Rafting", description: "Navigate the Zambezi's Grade V rapids for an unforgettable adrenaline rush.", timing: "August-December" },
  { icon: <Camera className="w-8 h-8" />, title: "Bungee Jumping", description: "Take the plunge from the iconic Victoria Falls Bridge at 111 meters.", timing: "Year-round" },
  { icon: <Ship className="w-8 h-8" />, title: "River Fishing", description: "Catch trophy tiger fish on the Zambezi with experienced fishing guides.", timing: "June-November" },
  { icon: <Eye className="w-8 h-8" />, title: "Rhino Walking", description: "Get close to white rhinos on guided walking safaris in nearby private reserves.", timing: "Year-round" }
]

const seasonalData = [
  { month: "January", flow: "High", activities: "Full falls, excellent views", crowds: "Moderate" },
  { month: "February", flow: "High", activities: "Full falls, rainbows", crowds: "Moderate" },
  { month: "March", flow: "High", activities: "Full falls, photography", crowds: "Low" },
  { month: "April", flow: "Medium", activities: "Good views, walking tours", crowds: "Low" },
  { month: "May", flow: "Medium", activities: "All activities available", crowds: "Low" },
  { month: "June", flow: "Low", activities: "Rafting begins, adventure activities", crowds: "Moderate" },
  { month: "July", flow: "Low", activities: "Peak adventure season", crowds: "High" },
  { month: "August", flow: "Low", activities: "Peak adventure season", crowds: "High" },
  { month: "September", flow: "Low", activities: "Rafting, bungee jumping", crowds: "High" },
  { month: "October", flow: "Very Low", activities: "Devil's Pool access, photography", crowds: "Moderate" },
  { month: "November", flow: "Rising", activities: "First rains, unique views", crowds: "Low" },
  { month: "December", flow: "Rising", activities: "Full falls returns, lush landscape", crowds: "Low" }
]

const nearbyAttractions = [
  { name: "Hwange National Park", description: "Zimbabwe's largest park with elephants - 3 hour drive", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop" },
  { name: "Mana Pools", description: "UNESCO walking safari site - 4 hour drive", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop" },
  { name: "Lake Kariba", description: "Houseboat adventures and fishing", image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&auto=format&fit=crop" }
]

export default function VictoriaFallsZimbabwe() {
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
          src="https://images.unsplash.com/photo-1537962882310-41d6b591b3da?w=1600&auto=format&fit=crop" 
          alt="Victoria Falls" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/zimbabwe-safaris" className="hover:text-[#D4A03A] transition-colors">Zimbabwe Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Victoria Falls</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">
            VICTORIA
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tight">
            FALLS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
            The Smoke That Thunders
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Packages
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Overview */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Discover</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-[#2C3E50] mt-4 mb-6">
              THE SMOKE THAT THUNDERS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2C3E50] text-xl leading-relaxed mb-6">
                Victoria Falls, known as Mosi-oa-Tunya in the local language, stands as one of the world's most magnificent natural wonders. Located on the Zambezi River at the border between Zimbabwe and Zambia, this spectacular waterfall creates a breathtaking display of raw power and beauty.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                The falls stretch 1,708 meters across and plunge 108 meters into the Zambezi Gorge, creating a spray visible from kilometers away. This immense curtain of water produces a constant thunderous roar and the famous 'smoke' that rises from the gorge.
              </p>
              <div className="bg-[#FAF3E0] p-6 rounded-xl">
                <h4 className="font-bold text-[#2C3E50] mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-[#2C3E50]/80">
                  <li>• Location: Zimbabwe/Zambia Border</li>
                  <li>• Width: 1,708 meters</li>
                  <li>• Height: 108 meters</li>
                  <li>• Flow: Up to 500 million liters/min</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A03A]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1537962882310-41d6b591b3da?w=800&auto=format&fit=crop" 
                alt="Victoria Falls" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WHY VISIT VICTORIA FALLS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {fallHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-4">{highlight.title}</h4>
                <p className="text-[#2C3E50]/80 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Activities</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4 mb-6">
              ADVENTURE ACTIVITIES
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-[#D4A03A] mb-4">{activity.icon}</div>
                <h3 className="text-white font-display font-bold text-xl mb-2">{activity.title}</h3>
                <p className="text-white/80 mb-3 text-sm">{activity.description}</p>
                <div className="flex items-center gap-2 text-[#D4A03A]">
                  <ClockIcon />
                  <span className="text-sm font-medium">{activity.timing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Timing</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              WHEN TO VISIT VICTORIA FALLS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #3b82f6' }}>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase mb-3">High Water</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">February to May</h4>
                <p className="text-[#2C3E50]/70 text-sm">Full falls with maximum water flow. Spectacular views and rainbows, though some activities limited.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #f97316' }}>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase mb-3">Adventure Season</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">June to October</h4>
                <p className="text-[#2C3E50]/70 text-sm">Peak adventure activities. Lower water allows white-water rafting, bungee jumping, and Devil's Pool access.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl" style={{ borderLeft: '4px solid #16a34a' }}>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase mb-3">Transition</span>
                <h4 className="font-bold text-[#2C3E50] mb-2">November to January</h4>
                <p className="text-[#2C3E50]/70 text-sm">Rising water levels, fewer crowds, and lush scenery. Unique photographic opportunities.</p>
              </div>
            </div>
            
            <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-6">Monthly Overview</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[#F5E6D3]">
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Month</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Water Flow</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Activities</th>
                    <th className="p-3 text-left text-[#2C3E50] font-semibold">Crowds</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalData.map((row, i) => (
                    <tr key={i} className="border-b border-[#D4C5B9]">
                      <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.month}</td>
                      <td className="p-3 text-[#2C3E50]/80">{row.flow}</td>
                      <td className="p-3 text-[#2C3E50]/80">{row.activities}</td>
                      <td className="p-3 text-[#2C3E50]/80">{row.crowds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section ref={addToRefs} className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Getting There</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mt-4 mb-6">
              LOCATION & ACCESS
            </h2>
            <div className="w-24 h-1 bg-[#D4A03A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Getting to Victoria Falls</h4>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Air</h5>
                  <p className="text-[#2C3E50]/80">Direct flights to Victoria Falls International Airport from major African hubs. Internal flights from Harare available daily.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-[#D4A03A] mb-3">By Road</h5>
                  <p className="text-[#2C3E50]/80">Self-drive from Hwange (3 hours) or drive from Bulawayo (6 hours). Excellent roads from Livingstone (Zambia) side.</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-2xl text-[#2C3E50] mb-6">Combine With</h4>
              <div className="space-y-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg flex">
                    <div className="w-32 h-24 flex-shrink-0">
                      <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-[#2C3E50]">{attraction.name}</h5>
                      <p className="text-[#2C3E50]/70 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-[8vw] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1537962882310-41d6b591b3da?w=1600&auto=format&fit=crop" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            EXPERIENCE VICTORIA FALLS
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Witness one of the world's greatest natural wonders and enjoy thrilling adventure activities at Africa's adventure capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">Plan Your Safari</Link>
            <Link to="/contact" className="bg-transparent border-3 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              Speak With Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
