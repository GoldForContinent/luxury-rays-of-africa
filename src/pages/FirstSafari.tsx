import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Camera, Users, Clock, Compass, Sun, Package, Shield, Eye, ArrowRight } from 'lucide-react'

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
                href="https://api.whatsapp.com/send?phone=+254791323799&text=&source=&data=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#128C7D] transform hover:scale-105 transition-all duration-300"
              >
                WhatsApp: +254791323799
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
