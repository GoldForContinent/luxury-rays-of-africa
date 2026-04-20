import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Compass, Camera, Users, TreePine, Send } from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Expert Guides',
    description: 'Born and raised in Africa with years of field experience'
  },
  {
    icon: Camera,
    title: 'Photography Focus',
    description: 'Game drives timed for golden hour and optimal light'
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Intimate 4x4 vehicles for exclusive wildlife encounters'
  },
  {
    icon: TreePine,
    title: 'Sustainable Travel',
    description: 'Supporting conservation and local communities'
  }
]

const safariTypes = [
  {
    title: 'Luxury Escapes',
    description: 'Five-star camps with private decks, gourmet dining, and Butler service. Perfect for honeymoons and special celebrations.',
    image: '/luxury_background.jpg',
    highlights: ['Private plunge pools', 'Fine dining', 'Spa treatments']
  },
  {
    title: 'Classic Safaris',
    description: 'Authentic game drives in proven wildlife territories. The traditional safari experience with comfortable lodge accommodation.',
    image: '/tanzaniasafarishero.jpg',
    highlights: ['Morning & afternoon drives', 'Expert rangers', 'Bush walks']
  },
  {
    title: 'Adventure Safaris',
    description: 'For the active traveler - walking safaris, canoe trips, and remote wilderness camps off the beaten path.',
    image: '/adventure_background.jpg',
    highlights: ['Guided bush walks', 'Canoe expeditions', 'Remote fly-camping']
  },
  {
    title: 'Family Safaris',
    description: 'Safe, engaging adventures for all ages. Kid-friendly activities and flexible pacing for family memories.',
    image: '/kenyasafaris hero.jpg',
    highlights: ['Kids activities', 'Child-friendly guides', 'Flexible schedules']
  }
]

const animalGallery = [
  { name: 'Lion', image: '/lion.jpg' },
  { name: 'Leopard', image: '/leopard.jpg' },
  { name: 'Elephant', image: '/elephant.jpg' },
  { name: 'Rhino', image: '/rhino.jpg' },
  { name: 'Buffalo', image: '/buffalo.jpg' },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img 
          src="/hero_sunrise.jpg" 
          alt="Sunrise over savanna" 
          fetchpriority="high"
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight overflow-hidden">
            <span className="block animate-hero-text">AFRICA.</span>
            <span className="block animate-hero-text text-[#D4A03A]">UNFILTERED.</span>
          </h1>
          <p className="animate-hero-text text-2xl md:text-3xl italic text-white/90 max-w-2xl mb-8">
            Exciting adventures lie ahead.
          </p>
          <div className="animate-hero-text flex flex-col sm:flex-row gap-4">
            <Link to="/destinations" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
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
      <section className="content-section py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center">
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
      <section className="content-section py-24 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Safari Styles</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mt-4 mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              From intimate luxury camps to adventurous wilderness expeditions, we tailor every safari to match your style and pace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {safariTypes.map((type, index) => (
              <div 
                key={index}
                className={`safari-card group relative h-72 rounded-3xl overflow-hidden`}
              >
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {type.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {type.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#D4A03A]/20 text-[#D4A03A] text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="content-section py-24 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Destinations</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mt-4">
                Explore Africa
              </h2>
            </div>
            <Link to="/destinations" className="mt-4 md:mt-0 text-[#D4A03A] flex items-center gap-2 hover:gap-3 transition-all">
              View All Destinations <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/destinations#eastern"
              className="group relative h-96 rounded-3xl overflow-hidden"
            >
              <img 
                src="/kenyasafaris hero.jpg" 
                alt="East Africa Safaris"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm mb-1">4 Countries</p>
                <h3 className="font-display font-bold text-2xl text-white">
                  East Africa
                </h3>
              </div>
            </Link>
            <Link 
              to="/destinations#southern"
              className="group relative h-96 rounded-3xl overflow-hidden"
            >
              <img 
                src="/botswana_hero.jpg" 
                alt="Southern Africa Safaris"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm mb-1">5 Countries</p>
                <h3 className="font-display font-bold text-2xl text-white">
                  Southern Africa
                </h3>
              </div>
            </Link>
            <Link 
              to="/destinations#islands"
              className="group relative h-96 rounded-3xl overflow-hidden"
            >
              <img 
                src="/zanzibar_hero.jpg" 
                alt="Islands & Beaches"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm mb-1">4 Islands</p>
                <h3 className="font-display font-bold text-2xl text-white">
                  Islands & Beaches
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Wildlife Highlights */}
      <section className="content-section py-24 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Wildlife</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#F7F2EA] mt-4 mb-4">
              The Big Five & Beyond
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Track Africa's most iconic wildlife with guides who understand every behavioral nuance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {animalGallery.map((animal, index) => (
              <div key={index} className="animal-card relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
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
      <section className="content-section py-24 px-4 md:px-[8vw] bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em]">Start Planning</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
            Ready for Your Safari?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Share your vision with us. We'll craft a journey that matches your dreams, pace, and priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              <Send size={18} /> Request a Quote
            </Link>
            <Link to="/destinations" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
