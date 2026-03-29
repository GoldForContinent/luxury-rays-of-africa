import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Calendar, Camera, Users, Clock, Heart, Compass, Sun, Cloud, Package, Shield, Eye, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FirstSafari() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section')
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          })
        }
      })
    })

    // Animate stats
    gsap.from('.stat-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.stats-grid',
        start: 'top 80%'
      }
    })

    // Animate tips
    gsap.from('.tip-card', {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.tips-grid',
        start: 'top 80%'
      }
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1410] via-[#2a1810] to-[#1a1410]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4A03A]/20 via-[#F7F2EA]/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1410] via-transparent to-[#2a1810] opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-section opacity-0 translate-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              What to Expect on Your
              <span className="text-transparent bg-clip-text text-gradient-to-r from-[#D4A03A] to-[#F7F2EA] bg-gradient-to-r">
                First African Safari
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F7F2EA] mb-8 max-w-4xl mx-auto leading-relaxed">
              Embarking on your first African safari is an unforgettable journey into the wild heart of nature. 
              From awe-inspiring landscapes and iconic wildlife to vibrant cultures and serene lodges and camps.
            </p>
            <p className="text-lg text-[#F7F2EA]/80 mb-12 max-w-3xl mx-auto">
              However, for first-timers, the idea of navigating the logistics and unfamiliar environment can feel overwhelming.
              At Cheetah Safaris, we will be glad to convert your idea of an African Safari into a real African Safari experience, 
              that's more memorable and fuller of engaging activities that you will never forget.
            </p>
            <p className="text-lg text-[#F7F2EA]/80 mb-12 max-w-3xl mx-auto">
              This guide is designed to walk you through every stage of the adventure, helping you understand what to expect 
              and how to prepare, so you can fully immerse yourself in the magic of Africa.
            </p>
          </div>
          
          <div className="fade-section opacity-0 translate-y-8 mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4A03A] to-[#B8860F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4A03A]/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Planning Your Safari
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Preparing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="fade-section opacity-0 translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Preparing for Your First African Safari
            </h2>
            <p className="text-lg text-[#F7F2EA]/80 mb-12 text-center max-w-4xl mx-auto">
              Preparation is essential for enjoying your first safari. The first step is choosing your destination. 
              Africa is vast and diverse, and each country offers a unique flavor of safari experience.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: 'Kenya',
                  description: 'Famed for the Great Migration and wildlife experiences set against iconic savannahs',
                  icon: MapPin
                },
                {
                  title: 'Tanzania', 
                  description: 'Home to Serengeti and Ngorongoro Crater with incredible wildlife concentrations',
                  icon: MapPin
                },
                {
                  title: 'Uganda',
                  description: 'Perfect for gorilla trekking and primate encounters in lush forests',
                  icon: MapPin
                },
                {
                  title: 'Rwanda',
                  description: 'Land of a thousand hills offering intimate gorilla trekking experiences',
                  icon: MapPin
                }
              ].map((destination, index) => (
                <div key={index} className="fade-section opacity-0 translate-y-8 bg-[#1a1410] border border-[#F7F2EA]/20 rounded-2xl p-6 hover:border-[#D4A03A]/50 transition-all duration-300">
                  <destination.icon className="w-8 h-8 text-[#D4A03A] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{destination.title}</h3>
                  <p className="text-[#F7F2EA]/80">{destination.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a1810]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-section opacity-0 translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What to Expect on Your Safari
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Daily Safari Schedule',
                  description: 'Early morning game drives, midday relaxation, afternoon activities, and evening sundowners',
                  icon: Clock,
                  stats: '6:00 AM - 6:00 PM'
                },
                {
                  title: 'Wildlife Encounters',
                  description: 'Close encounters with Africa\'s Big Five and countless other species in their natural habitat',
                  icon: Camera,
                  stats: '50+ Species'
                },
                {
                  title: 'Accommodation',
                  description: 'Luxury lodges and tented camps offering comfort and immersion in wilderness',
                  icon: Users,
                  stats: '4-5 Star'
                },
                {
                  title: 'Professional Guides',
                  description: 'Experienced local guides with deep knowledge of wildlife and ecosystems',
                  icon: Compass,
                  stats: '20+ Years Experience'
                },
                {
                  title: 'All-Inclusive Experience',
                  description: 'Meals, transport, park fees, and activities included in your safari package',
                  icon: Package,
                  stats: 'Complete Package'
                },
                {
                  title: 'Photography Opportunities',
                  description: 'Incredible opportunities for wildlife and landscape photography throughout your journey',
                  icon: Camera,
                  stats: 'Unlimited Shots'
                }
              ].map((item, index) => (
                <div key={index} className="fade-section opacity-0 translate-y-8 bg-[#1a1410] border border-[#F7F2EA]/20 rounded-2xl p-6 hover:border-[#D4A03A]/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#D4A03A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-[#F7F2EA]/80 mb-2">{item.description}</p>
                      {item.stats && (
                        <p className="text-[#D4A03A] font-semibold">{item.stats}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safari Tips Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="fade-section opacity-0 translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Essential Safari Tips for First-Timers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 tips-grid">
              {[
                {
                  title: 'Pack Light, Pack Smart',
                  description: 'Bring essential items but avoid overpacking. Laundry services are available at most lodges.',
                  icon: Package,
                  type: 'packing'
                },
                {
                  title: 'Stay Hydrated',
                  description: 'Drink plenty of water throughout the day, especially during game drives in the sun.',
                  icon: Sun,
                  type: 'health'
                },
                {
                  title: 'Listen to Your Guide',
                  description: 'Follow instructions from experienced guides for safety and better wildlife sightings.',
                  icon: Users,
                  type: 'safety'
                },
                {
                  title: 'Respect Wildlife',
                  description: 'Keep a safe distance, never feed animals, and follow your guide instructions at all times.',
                  icon: Shield,
                  type: 'safety'
                },
                {
                  title: 'Bring Binoculars',
                  description: 'Quality binoculars are essential for wildlife viewing and photography.',
                  icon: Eye,
                  type: 'equipment'
                },
                {
                  title: 'Be Patient',
                  description: 'Wildlife viewing requires patience. Take time to observe and enjoy each moment.',
                  icon: Clock,
                  type: 'mindset'
                }
              ].map((tip, index) => (
                <div key={index} className="tip-card fade-section opacity-0 translate-y-8 bg-[#1a1410] border border-[#F7F2EA]/20 rounded-2xl p-6 hover:border-[#D4A03A]/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      tip.type === 'safety' ? 'bg-red-500/20' :
                      tip.type === 'health' ? 'bg-blue-500/20' :
                      tip.type === 'packing' ? 'bg-green-500/20' :
                      tip.type === 'equipment' ? 'bg-purple-500/20' :
                      tip.type === 'mindset' ? 'bg-yellow-500/20' : 'bg-gray-500/20'
                    }`}>
                      <tip.icon className={`w-6 h-6 ${
                        tip.type === 'safety' ? 'text-red-400' :
                        tip.type === 'health' ? 'text-blue-400' :
                        tip.type === 'packing' ? 'text-green-400' :
                        tip.type === 'equipment' ? 'text-purple-400' :
                        tip.type === 'mindset' ? 'text-yellow-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{tip.title}</h3>
                      <p className="text-[#F7F2EA]/80">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pack for a Purpose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a1810]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-section opacity-0 translate-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pack For a Purpose
              </h2>
              <p className="text-lg text-[#F7F2EA]/80 max-w-3xl mx-auto">
                Cheetah Safaris is a serious advocate of sustainable safari practices in Africa. 
                As part of our efforts and initiative, we engage and support schools and children who need knowledge to better their lives.
              </p>
              <p className="text-lg text-[#D4A03A] font-semibold mt-4">
                The best gift a child can be given is education, skills, and creativity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Books',
                  description: 'Educational books for school libraries and reading programs',
                  icon: '📚'
                },
                {
                  title: 'Sports Materials',
                  description: 'Footballs, jerseys, and sports equipment for school activities',
                  icon: '⚽'
                },
                {
                  title: 'School Supplies',
                  description: 'Pens, pencils, notebooks, and other learning materials',
                  icon: '✏️'
                }
              ].map((item, index) => (
                <div key={index} className="fade-section opacity-0 translate-y-8 bg-[#1a1410] border border-[#F7F2EA]/20 rounded-2xl p-8 text-center hover:border-[#D4A03A]/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#F7F2EA]/80">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-[#F7F2EA]/80 mb-8">
                We request our guests booking with us, to bring an extra bag of supplies. 
                This can be in terms of books, sports materials, and any other items that would change the lives of these kids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-section opacity-0 translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Planning Your First African Safari
            </h2>
            <p className="text-lg text-[#F7F2EA]/80 mb-8">
              Cheetah Safaris has fantastic, experienced safari experts available and prepared to assist you 
              in creating a once-in-a-lifetime Safari Holiday or a fantastic and memorable beach holiday experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4A03A] to-[#B8860F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4A03A]/50 transform hover:scale-105 transition-all duration-300"
              >
                Fill in Our Contact Form
              </Link>
              
              <a 
                href="https://api.whatsapp.com/send?phone=254729744244&text=&source=&data=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#128C7D] transform hover:scale-105 transition-all duration-300"
              >
                WhatsApp: +254 729 744244
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
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
