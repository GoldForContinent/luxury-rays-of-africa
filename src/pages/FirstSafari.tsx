import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Compass, Clock, MapPin, Camera, Heart, Star, ArrowRight, CheckCircle, Sun, Cloud, Trees } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FirstSafari() {
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

  const expectations = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Early Morning Adventures',
      description: 'Your days begin at dawn with the golden African sunrise, when predators are most active and the air is crisp and cool.'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Incredible Wildlife Encounters',
      description: 'Witness the Big Five and countless other species in their natural habitat, creating memories that last a lifetime.'
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: 'Diverse Landscapes',
      description: 'From endless savannas to lush forests and dramatic mountains, each day brings new breathtaking scenery.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Cultural Connections',
      description: 'Meet local communities and experience authentic African traditions that have thrived for centuries.'
    }
  ]

  const timeline = [
    {
      time: '5:30 AM',
      title: 'Wake Up Call',
      description: 'Gentle wake-up with coffee and tea as the African sky begins to glow'
    },
    {
      time: '6:00 AM',
      title: 'Morning Game Drive',
      description: 'First safari drive of the day - prime time for predator sightings'
    },
    {
      time: '9:00 AM',
      title: 'Bush Breakfast',
      description: 'Enjoy a hearty breakfast in the wilderness surrounded by nature'
    },
    {
      time: '11:00 AM',
      title: 'Rest & Relax',
      description: 'Return to camp for relaxation, reading, or a refreshing swim'
    },
    {
      time: '3:00 PM',
      title: 'Afternoon Activities',
      description: 'Cultural visits, nature walks, or simply enjoy the camp atmosphere'
    },
    {
      time: '4:30 PM',
      title: 'Evening Game Drive',
      description: 'Second safari drive as animals become active in the cooling air'
    },
    {
      time: '7:00 PM',
      title: 'Sundowners',
      description: 'Traditional sunset drinks with spectacular views'
    },
    {
      time: '8:00 PM',
      title: 'Dinner Under Stars',
      description: 'Gourmet dining accompanied by the sounds of the African night'
    }
  ]

  const packingEssentials = [
    'Neutral-colored clothing (khaki, green, brown)',
    'Comfortable walking shoes',
    'Wide-brimmed hat and sunglasses',
    'High SPF sunscreen and lip balm',
    'Binoculars and camera with zoom lens',
    'Lightweight jacket for cool evenings',
    'Insect repellent and any personal medications',
    'Reusable water bottle',
    'Small backpack for daily excursions',
    'Power bank for device charging'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="hero-image absolute inset-0">
          <img 
            src="/first-safari-hero.jpg" 
            alt="First African Safari Experience" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="fade-section opacity-0 translate-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Compass className="w-8 h-8 text-[#D4A03A]" />
              <span className="eyebrow text-[#D4A03A]">Your Journey Begins</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
              Your First African Safari
            </h1>
            <p className="text-white/90 max-w-3xl text-lg md:text-xl mb-8 leading-relaxed">
              Step into a world where nature reigns supreme and every moment brings a new discovery. 
              Your first safari is more than a vacation—it's a transformational experience that will 
              stay with you forever.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Start Your Safari Journey <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Safari Experience</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              What to Expect on Your First Safari
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              From dawn till dusk, each day on safari offers unique opportunities to connect with nature 
              and create unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expectations.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#1a1410] rounded-2xl p-8 h-full border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4A03A]/30 transition-colors">
                    <div className="text-[#D4A03A]">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#F7F2EA] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#F7F2EA]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Typical Safari Day */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Daily Routine</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              A Perfect Safari Day
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Experience the rhythm of the African wilderness with our carefully crafted daily schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-[#2B1E1A] rounded-xl p-6 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-[#D4A03A]" />
                    <span className="text-[#D4A03A] font-semibold text-sm">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-lg text-[#F7F2EA] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Timer Tips */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Expert Advice</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Essential Tips for First-Timers
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Make the most of your first safari with these insider tips from our experienced guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Listen to Your Guide',
                description: 'Our expert guides have years of experience and deep knowledge of animal behavior and local ecosystems.',
                icon: <Star className="w-6 h-6" />
              },
              {
                title: 'Be Patient',
                description: 'Wildlife viewing requires patience. The best sightings often come to those who wait quietly and observe.',
                icon: <Clock className="w-6 h-6" />
              },
              {
                title: 'Pack Light but Smart',
                description: 'Bring essentials but avoid overpacking. Quality gear beats quantity every time.',
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                title: 'Stay Flexible',
                description: 'Nature is unpredictable. Embrace the unexpected and be ready to adapt your plans.',
                icon: <Cloud className="w-6 h-6" />
              },
              {
                title: 'Disconnect to Connect',
                description: 'Put away your phone and immerse yourself in the present moment. The memories will be richer.',
                icon: <Heart className="w-6 h-6" />
              },
              {
                title: 'Respect Wildlife',
                description: 'Keep a safe distance, never feed animals, and follow your guide instructions at all times.',
                icon: <Compass className="w-6 h-6" />
              }
            ].map((tip, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#1a1410] rounded-2xl p-8 h-full border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4A03A]/30 transition-colors">
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

      {/* Packing Essentials */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Be Prepared</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Safari Packing Essentials
            </h2>
            <p className="text-[#F7F2EA]/70 text-lg">
              Everything you need for a comfortable and successful first safari adventure.
            </p>
          </div>

          <div className="bg-[#2B1E1A] rounded-2xl p-8 md:p-12 border border-[#F7F2EA]/10 fade-section opacity-0 translate-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-semibold text-2xl text-[#F7F2EA] mb-6">
                  Must-Have Items
                </h3>
                <ul className="space-y-4">
                  {packingEssentials.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4A03A] mt-1 flex-shrink-0" />
                      <span className="text-[#F7F2EA]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold text-2xl text-[#F7F2EA] mb-6">
                  Pro Tips
                </h3>
                <div className="space-y-4 text-[#F7F2EA]/80">
                  <p>• Pack layers for changing temperatures throughout the day</p>
                  <p>• Bring extra memory cards - you'll take more photos than you expect</p>
                  <p>• Include a small first-aid kit with personal medications</p>
                  <p>• Consider a portable charger for extended game drives</p>
                  <p>• Don't forget a journal to record your incredible experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center fade-section opacity-0 translate-y-8">
          <div className="bg-[#1a1410] rounded-3xl p-12 border border-[#F7F2EA]/10">
            <MapPin className="mx-auto text-[#D4A03A] mb-6" size={48} />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-6">
              Ready for Your First Safari Adventure?
            </h2>
            <p className="text-[#F7F2EA]/70 text-lg mb-8 leading-relaxed">
              Let our expert guides help you plan the perfect first safari experience. 
              We'll handle all the details so you can focus on creating memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Plan Your First Safari <ArrowRight size={18} />
              </Link>
              <Link to="/destinations" className="btn-outline inline-flex items-center gap-2">
                Explore Destinations <MapPin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
