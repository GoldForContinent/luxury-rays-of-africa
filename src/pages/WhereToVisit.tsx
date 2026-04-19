import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Star, Compass, Trees, Mountain, Waves, Crown, ArrowRight, Heart, Camera, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhereToVisit() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section')
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(section, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        },
        once: true
      })
    })

    // Parallax effect for hero
    gsap.to('.hero-image', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-image',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }, [])

  const destinations = [
    {
      name: 'Kenya',
      icon: <Trees className="w-6 h-6" />,
      title: 'The Safari Capital',
      description: 'Experience the legendary Masai Mara, witness the Great Migration, and explore the diverse landscapes from savannas to mountains.',
      highlights: ['Great Migration', 'Big Five', 'Masai Culture', 'Hot Air Ballooning'],
      bestTime: 'July - October',
      rating: 4.9,
      image: '/kenya-safari.jpg'
    },
    {
      name: 'Tanzania',
      icon: <Mountain className="w-6 h-6" />,
      title: 'Serengeti & Beyond',
      description: 'Home to the vast Serengeti plains, Ngorongoro Crater, and Africa\'s highest peak - Mount Kilimanjaro.',
      highlights: ['Serengeti', 'Ngorongoro Crater', 'Mount Kilimanjaro', 'Zanzibar Beaches'],
      bestTime: 'June - October',
      rating: 4.8,
      image: '/tanzania-safari.jpg'
    },
    {
      name: 'South Africa',
      icon: <Crown className="w-6 h-6" />,
      title: 'Luxury & Diversity',
      description: 'From world-class Kruger National Park to stunning Cape Town and vibrant cities, offering luxury and adventure.',
      highlights: ['Kruger National Park', 'Cape Town', 'Garden Route', 'Wine Regions'],
      bestTime: 'May - September',
      rating: 4.7,
      image: '/south-africa-safari.jpg'
    },
    {
      name: 'Botswana',
      icon: <Waves className="w-6 h-6" />,
      title: 'Okavango Paradise',
      description: 'Experience the pristine Okavango Delta, a UNESCO World Heritage site offering exclusive water-based safaris.',
      highlights: ['Okavango Delta', 'Chobe National Park', 'Mokoro Safaris', 'Elephant Haven'],
      bestTime: 'April - October',
      rating: 4.9,
      image: '/botswana-safari.jpg'
    },
    {
      name: 'Uganda',
      icon: <Heart className="w-6 h-6" />,
      title: 'Pearl of Africa',
      description: 'Home to endangered mountain gorillas and chimpanzees, offering incredible primate encounters in lush forests.',
      highlights: ['Mountain Gorillas', 'Chimpanzees', 'Queen Elizabeth NP', 'Lake Victoria'],
      bestTime: 'June - September, January - February',
      rating: 4.8,
      image: '/uganda-safari.jpg'
    },
    {
      name: 'Rwanda',
      icon: <Compass className="w-6 h-6" />,
      title: 'Land of a Thousand Hills',
      description: 'Experience incredible gorilla trekking, pristine landscapes, and remarkable conservation success stories.',
      highlights: ['Volcanoes NP', 'Gorilla Trekking', 'Kigali Genocide Memorial', 'Lake Kivu'],
      bestTime: 'June - September, December - February',
      rating: 4.9,
      image: '/rwanda-safari.jpg'
    }
  ]

  const experiences = [
    {
      title: 'Wildlife Encounters',
      description: 'Get up close with Africa\'s iconic animals in their natural habitat',
      icon: <Camera className="w-8 h-8" />
    },
    {
      title: 'Cultural Immersion',
      description: 'Connect with local communities and experience authentic African traditions',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Adventure Activities',
      description: 'From hot air balloon rides to walking safaris, thrill awaits at every turn',
      icon: <Compass className="w-8 h-8" />
    },
    {
      title: 'Luxury Accommodations',
      description: 'Stay in world-class lodges and camps that blend comfort with wilderness',
      icon: <Crown className="w-8 h-8" />
    }
  ]

  const whyChoose = [
    {
      title: 'Expert Local Guides',
      description: 'Our guides have deep knowledge of wildlife behavior and local ecosystems'
    },
    {
      title: 'Sustainable Tourism',
      description: 'We support conservation efforts and local communities through responsible travel'
    },
    {
      title: 'Tailored Experiences',
      description: 'Customized itineraries that match your interests and travel style'
    },
    {
      title: 'Safety First',
      description: 'Your safety and comfort are our top priorities throughout your journey'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="hero-image absolute inset-0">
          <img 
            src="/african-destinations-hero.jpg" 
            alt="African Safari Destinations" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="fade-section opacity-0 translate-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#D4A03A]" />
              <span className="eyebrow text-[#D4A03A]">Discover Africa</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
              Where To Go On Safari
            </h1>
            <p className="text-white/90 max-w-3xl text-lg md:text-xl mb-8 leading-relaxed">
              From the vast savannas of the Serengeti to the pristine beaches of Zanzibar, 
              Africa offers endless possibilities for unforgettable safari adventures.
            </p>
            <Link to="/destinations" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Explore All Destinations <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Featured Destinations</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Africa\'s Most Spectacular Safari Destinations
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Handpicked destinations that offer the best wildlife experiences, cultural encounters, 
              and breathtaking landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#1a1410] rounded-2xl overflow-hidden border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-[#D4A03A]/90 px-3 py-1 rounded-full">
                        <div className="text-[#2B1E1A]">
                          {dest.icon}
                        </div>
                        <span className="text-[#2B1E1A] font-semibold text-sm">
                          {dest.name}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-[#D4A03A] fill-current" />
                        <span className="text-white text-sm font-medium">
                          {dest.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-2">
                      {dest.title}
                    </h3>
                    <p className="text-[#F7F2EA]/70 text-sm mb-4 leading-relaxed">
                      {dest.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-[#D4A03A] font-semibold text-sm mb-2">Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-[#D4A03A]/20 text-[#D4A03A] text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D4A03A]" />
                        <span className="text-[#F7F2EA]/60 text-sm">
                          Best: {dest.bestTime}
                        </span>
                      </div>
                      <Link 
                        to={`/destinations/${dest.name.toLowerCase()}`}
                        className="text-[#D4A03A] hover:text-[#F7F2EA] transition-colors flex items-center gap-1 text-sm font-medium"
                      >
                        Explore <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">What Awaits</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Unforgettable Safari Experiences
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Beyond incredible wildlife, Africa offers transformative experiences that will 
              touch your heart and soul.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#2B1E1A] rounded-2xl p-8 h-full border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-[#D4A03A]">
                      {exp.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#F7F2EA] mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-[#F7F2EA]/60 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Why Roots of Africa Safaris</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Your Trusted Safari Partner
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              With years of experience and deep local knowledge, we ensure your safari exceeds 
              every expectation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#1a1410] rounded-2xl p-6 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/20 transition-all duration-300 h-full">
                  <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Planner */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2B1E1A] rounded-3xl p-8 md:p-12 border border-[#F7F2EA]/10 fade-section opacity-0 translate-y-8">
            <div className="text-center mb-8">
              <MapPin className="mx-auto text-[#D4A03A] mb-4" size={48} />
              <h2 className="font-display font-bold text-3xl text-[#F7F2EA] mb-4">
                Not Sure Which Destination to Choose?
              </h2>
              <p className="text-[#F7F2EA]/70 text-lg mb-8">
                Let our safari experts help you find the perfect destination based on your interests, 
                budget, and travel dates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4A03A] font-bold">1</span>
                </div>
                <h4 className="font-display font-semibold text-[#F7F2EA] mb-2">
                  Tell Us Your Dreams
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  Share your interests, budget, and travel preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4A03A] font-bold">2</span>
                </div>
                <h4 className="font-display font-semibold text-[#F7F2EA] mb-2">
                  Get Expert Recommendations
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  Receive personalized destination suggestions from our experts
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4A03A] font-bold">3</span>
                </div>
                <h4 className="font-display font-semibold text-[#F7F2EA] mb-2">
                  Book with Confidence
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  Secure your perfect safari with our trusted planning service
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Plan Your Dream Safari <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
