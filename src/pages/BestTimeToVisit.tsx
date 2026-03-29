import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, Sun, Cloud, CloudRain, Thermometer, MapPin, Star, ArrowRight, Wind, Droplets } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function BestTimeToVisit() {
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

  const monthlyGuide = [
    {
      month: 'January',
      season: 'Peak Season',
      weather: 'Hot & Dry',
      highlights: ['Great Migration in Tanzania', 'Calving season in Serengeti', 'Excellent wildlife viewing'],
      destinations: ['Tanzania', 'Kenya', 'Rwanda'],
      icon: <Sun className="w-6 h-6" />,
      color: 'bg-orange-500'
    },
    {
      month: 'February',
      season: 'Peak Season',
      weather: 'Hot & Dry',
      highlights: ['Wildebeest calving peaks', 'Best time for gorilla trekking', 'Clear photography conditions'],
      destinations: ['Tanzania', 'Rwanda', 'Uganda'],
      icon: <Sun className="w-6 h-6" />,
      color: 'bg-orange-500'
    },
    {
      month: 'March',
      season: 'Shoulder Season',
      weather: 'Hot & Humid',
      highlights: ['Migration begins moving north', 'Fewer crowds', 'Good bird watching'],
      destinations: ['Kenya', 'Tanzania', 'Botswana'],
      icon: <Cloud className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },
    {
      month: 'April',
      season: 'Green Season',
      weather: 'Wet & Green',
      highlights: ['Lush landscapes', 'Newborn animals', 'Lower prices', 'Dramatic storms'],
      destinations: ['Kenya', 'Tanzania', 'South Africa'],
      icon: <CloudRain className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      month: 'May',
      season: 'Green Season',
      weather: 'Mild & Green',
      highlights: ['End of rainy season', 'Beautiful photography', 'Excellent rates'],
      destinations: ['Botswana', 'Zambia', 'Zimbabwe'],
      icon: <Droplets className="w-6 h-6" />,
      color: 'bg-teal-500'
    },
    {
      month: 'June',
      season: 'Dry Season',
      weather: 'Cool & Dry',
      highlights: ['Dry season begins', 'Wildlife concentrates', 'Great Migration in Kenya'],
      destinations: ['Kenya', 'Tanzania', 'Botswana'],
      icon: <Sun className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },
    {
      month: 'July',
      season: 'Peak Season',
      weather: 'Cool & Dry',
      highlights: ['Great Migration river crossings', 'Peak wildlife viewing', 'Dry season'],
      destinations: ['Kenya', 'Tanzania', 'Botswana'],
      icon: <Thermometer className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      month: 'August',
      season: 'Peak Season',
      weather: 'Cool & Dry',
      highlights: ['Migration continues', 'Best game viewing', 'Peak season rates'],
      destinations: ['Kenya', 'Tanzania', 'South Africa'],
      icon: <Sun className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      month: 'September',
      season: 'Peak Season',
      weather: 'Warm & Dry',
      highlights: ['Migration in Kenya', 'Excellent visibility', 'Wildlife active'],
      destinations: ['Kenya', 'Botswana', 'Namibia'],
      icon: <Sun className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },
    {
      month: 'October',
      season: 'Shoulder Season',
      weather: 'Hot & Dry',
      highlights: ['Migration heading south', 'Good wildlife viewing', 'Fewer crowds'],
      destinations: ['Tanzania', 'Kenya', 'Zimbabwe'],
      icon: <Wind className="w-6 h-6" />,
      color: 'bg-orange-500'
    },
    {
      month: 'November',
      season: 'Short Rains',
      weather: 'Hot & Wet',
      highlights: ['Beginning of short rains', 'Lush landscapes', 'Migratory birds arrive'],
      destinations: ['Tanzania', 'Kenya', 'South Africa'],
      icon: <CloudRain className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      month: 'December',
      season: 'Short Rains',
      weather: 'Hot & Humid',
      highlights: ['Holiday season', 'Green landscapes', 'Good photography'],
      destinations: ['Kenya', 'Tanzania', 'Rwanda'],
      icon: <Cloud className="w-6 h-6" />,
      color: 'bg-purple-500'
    }
  ]

  const destinationSeasons = [
    {
      destination: 'Kenya',
      bestTime: 'July - October, January - March',
      peakSeason: 'July - October',
      highlights: ['Great Migration river crossings', 'Dry season game viewing', 'Calving season'],
      avoid: 'April - May (long rains)'
    },
    {
      destination: 'Tanzania',
      bestTime: 'June - October',
      peakSeason: 'July - October',
      highlights: ['Great Migration', 'Ngorongoro Crater', 'Kilimanjaro climbing'],
      avoid: 'April - May (long rains)'
    },
    {
      destination: 'South Africa',
      bestTime: 'May - September',
      peakSeason: 'July - September',
      highlights: ['Kruger National Park', 'Whale watching', 'Cape Town summer'],
      avoid: 'December - February (crowded)'
    },
    {
      destination: 'Botswana',
      bestTime: 'April - October',
      peakSeason: 'June - October',
      highlights: ['Okavango Delta', 'Chobe elephants', 'Makgadikgadi pans'],
      avoid: 'December - March (rainy season)'
    },
    {
      destination: 'Rwanda',
      bestTime: 'June - September, December - February',
      peakSeason: 'June - September',
      highlights: ['Gorilla trekking', 'Dry season hiking', 'Golden monkey tracking'],
      avoid: 'March - May (heavy rains)'
    },
    {
      destination: 'Uganda',
      bestTime: 'June - September, January - February',
      peakSeason: 'June - September',
      highlights: ['Mountain gorillas', 'Chimpanzees', 'Tree-climbing lions'],
      avoid: 'March - May, October - November (rains)'
    }
  ]

  const weatherTips = [
    {
      title: 'Temperature Variations',
      description: 'Temperatures can vary dramatically between day and night. Pack layers for 30°F+ temperature changes.',
      icon: <Thermometer className="w-6 h-6" />
    },
    {
      title: 'Rainy Season Benefits',
      description: 'Green season offers fewer crowds, lower prices, lush landscapes, and excellent bird watching.',
      icon: <CloudRain className="w-6 h-6" />
    },
    {
      title: 'Dry Season Advantages',
      description: 'Dry season means better wildlife viewing, easier travel, and more predictable conditions.',
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: 'Altitude Effects',
      description: 'Higher elevations can be significantly cooler. Mountain areas may need warm clothing year-round.',
      icon: <Wind className="w-6 h-6" />
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="hero-image absolute inset-0">
          <img 
            src="/african-seasons-hero.jpg" 
            alt="African Safari Seasons" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="fade-section opacity-0 translate-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-[#D4A03A]" />
              <span className="eyebrow text-[#D4A03A]">Perfect Timing</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
              Best Time to Visit Africa
            </h1>
            <p className="text-white/90 max-w-3xl text-lg md:text-xl mb-8 leading-relaxed">
              Timing is everything for the perfect safari. Discover when to visit each destination 
              for the best wildlife encounters, weather conditions, and experiences.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Plan Your Perfect Season <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Monthly Guide */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Month by Month</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              African Safari Calendar
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Each month offers unique opportunities for wildlife viewing and experiences. 
              Find your perfect time to explore Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {monthlyGuide.map((month, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-[#1a1410] rounded-xl p-4 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 ${month.color}/20 rounded-full flex items-center justify-center`}>
                      <div className={`${month.color.replace('bg-', 'text-')}`}>
                        {month.icon}
                      </div>
                    </div>
                    <span className={`px-2 py-1 ${month.color}/20 ${month.color.replace('bg-', 'text-')} text-xs rounded-full`}>
                      {month.season}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-[#F7F2EA] mb-2">
                    {month.month}
                  </h3>
                  
                  <div className="text-[#D4A03A] text-sm font-medium mb-2">
                    {month.weather}
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    {month.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="text-[#F7F2EA]/60 text-xs leading-tight">
                        • {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-[#F7F2EA]/40 text-xs">
                    {month.destinations.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Seasons */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Destination Guide</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Best Times by Destination
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Each African destination has its own optimal season. Find the perfect time 
              for your dream safari location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationSeasons.map((dest, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#2B1E1A] rounded-2xl p-8 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#D4A03A]" />
                    <h3 className="font-display font-bold text-xl text-[#F7F2EA]">
                      {dest.destination}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-[#D4A03A] font-semibold text-sm mb-1">Best Time</div>
                      <div className="text-[#F7F2EA]">{dest.bestTime}</div>
                    </div>
                    
                    <div>
                      <div className="text-[#D4A03A] font-semibold text-sm mb-1">Peak Season</div>
                      <div className="text-[#F7F2EA]">{dest.peakSeason}</div>
                    </div>
                    
                    <div>
                      <div className="text-[#D4A03A] font-semibold text-sm mb-2">Highlights</div>
                      <div className="space-y-1">
                        {dest.highlights.map((highlight, idx) => (
                          <div key={idx} className="text-[#F7F2EA]/70 text-sm flex items-start gap-2">
                            <Star className="w-4 h-4 text-[#D4A03A] mt-0.5 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[#F7F2EA]/60 text-sm">
                        <span className="font-medium">Consider avoiding:</span> {dest.avoid}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Tips */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Weather Wisdom</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Essential Weather Tips
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Understanding African weather patterns helps you pack right and plan the perfect safari.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weatherTips.map((tip, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#1a1410] rounded-2xl p-8 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-[#D4A03A]">
                      {tip.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#F7F2EA] mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-[#F7F2EA]/60 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Assistant */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2B1E1A] rounded-3xl p-8 md:p-12 border border-[#F7F2EA]/10 fade-section opacity-0 translate-y-8">
            <div className="text-center mb-8">
              <Calendar className="mx-auto text-[#D4A03A] mb-4" size={48} />
              <h2 className="font-display font-bold text-3xl text-[#F7F2EA] mb-4">
                Let Us Help You Choose the Perfect Time
              </h2>
              <p className="text-[#F7F2EA]/70 text-lg mb-8">
                Our safari experts consider your interests, budget, and preferences to recommend 
                the ideal season for your African adventure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4A03A] font-bold">1</span>
                </div>
                <h4 className="font-display font-semibold text-[#F7F2EA] mb-2">
                  Share Your Preferences
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  Tell us what you want to see and when you prefer to travel
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4A03A] font-bold">2</span>
                </div>
                <h4 className="font-display font-semibold text-[#F7F2EA] mb-2">
                  Get Seasonal Recommendations
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  Receive expert advice on the best time for your dream safari
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4A03A] font-bold">3</span>
                </div>
                <h4 className="font-display font-semibold text-[#F7F2EA] mb-2">
                  Plan with Confidence
                </h4>
                <p className="text-[#F7F2EA]/60 text-sm">
                  Book your safari knowing you've chosen the perfect season
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Seasonal Planning Help <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
