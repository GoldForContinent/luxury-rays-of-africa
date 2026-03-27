import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Compass, Camera, Users, TreePine, Send } from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Expert Guides',
    description: 'Born and raised in Africa with 15+ years experience'
  },
  {
    icon: Camera,
    title: 'Photography Focus',
    description: 'Plan drives around the golden hour light'
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Maximum 6 guests per vehicle for intimate experiences'
  },
  {
    icon: TreePine,
    title: 'Sustainable Travel',
    description: 'Supporting conservation and local communities'
  }
]

const safariTypes = [
  {
    title: 'Family Safaris',
    description: 'Adventures designed for all ages with child-friendly activities',
    image: '/family_safari.jpg'
  },
  {
    title: 'Honeymoon Safaris',
    description: 'Romantic escapes in Africa\'s most beautiful locations',
    image: '/honeymoon_safari.jpg'
  },
  {
    title: 'Photography Safaris',
    description: 'Capture the perfect shot with expert photography guides',
    image: '/photo_safari.jpg'
  },
  {
    title: 'Walking Safaris',
    description: 'Experience the bush on foot with armed guides',
    image: '/walking_safari.jpg'
  }
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img 
          src="/hero_sunrise.jpg" 
          alt="Sunrise over savanna" 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            AFRICA.<br />UNFILTERED.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            Luxury safaris designed around light, land, and legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/destinations" className="btn-primary flex items-center justify-center gap-2">
              Explore Destinations <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline flex items-center justify-center gap-2">
              Plan Your Trip
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className=" py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                  <feature.icon className="text-[#D4A03A]" size={28} />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#F7F2EA]/60 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Types Section */}
      <section className=" py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Safari Types</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              From family-friendly adventures to romantic escapes, we design the perfect safari for every traveler.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {safariTypes.map((type, index) => (
              <div 
                key={index}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {type.description}
                  </p>
                  <Link 
                    to="/destinations" 
                    className="inline-flex items-center gap-2 text-[#D4A03A] text-sm font-medium"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="eyebrow mb-4 block">Destinations</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA]">
                Explore Africa
              </h2>
            </div>
            <Link to="/destinations" className="mt-4 md:mt-0 link-hover text-[#D4A03A] flex items-center gap-2">
              View All Destinations <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Kenya', image: '/kenya_card.jpg', places: '4 destinations' },
              { name: 'Tanzania', image: '/tanzania_card.jpg', places: '4 destinations' },
              { name: 'South Africa', image: '/sa_card.jpg', places: '3 destinations' },
            ].map((country, index) => (
              <Link 
                key={index}
                to={`/destinations`}
                className="group relative h-96 rounded-3xl overflow-hidden"
              >
                <img 
                  src={country.image} 
                  alt={country.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-sm mb-1">{country.places}</p>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {country.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Highlights */}
      <section className=" py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Wildlife</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-4">
              The Big Five & Beyond
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Track Africa's most iconic wildlife with expert guides who know every behavior and habitat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Lion', image: '/lion.jpg' },
              { name: 'Leopard', image: '/leopard.jpg' },
              { name: 'Elephant', image: '/elephant.jpg' },
              { name: 'Rhino', image: '/rhino.jpg' },
              { name: 'Buffalo', image: '/buffalo.jpg' },
            ].map((animal, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src={animal.image} 
                  alt={animal.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-display font-semibold text-white">{animal.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow mb-4 block">Start Planning</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mb-6">
            Ready for Your African Adventure?
          </h2>
          <p className="text-[#F7F2EA]/60 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you're after and we'll shape the trip around your pace, your people, and your priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              <Send size={18} /> Request a Quote
            </Link>
            <Link to="/destinations" className="btn-outline flex items-center justify-center gap-2">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
