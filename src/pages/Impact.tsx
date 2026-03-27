import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, TreePine, Users, PawPrint, GraduationCap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const initiatives = [
  {
    icon: TreePine,
    title: 'Habitat Protection',
    description: 'We support anti-poaching units and habitat restoration projects across East and Southern Africa.',
    stat: '50,000+',
    statLabel: 'Acres Protected'
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Tourism revenue funds schools, healthcare, and infrastructure in local communities.',
    stat: '25',
    statLabel: 'Community Projects'
  },
  {
    icon: PawPrint,
    title: 'Wildlife Research',
    description: 'We fund camera trap studies, collaring programs, and population monitoring.',
    stat: '12',
    statLabel: 'Research Partners'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Scholarships and conservation education for the next generation of African conservationists.',
    stat: '200+',
    statLabel: 'Students Supported'
  },
]

const partners = [
  { name: 'African Wildlife Foundation', logo: '/partner_awf.jpg' },
  { name: 'Save the Elephants', logo: '/partner_ste.jpg' },
  { name: 'Lewa Wildlife Conservancy', logo: '/partner_lewa.jpg' },
  { name: 'Mara Conservancy', logo: '/partner_mara.jpg' },
]

export default function Impact() {
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
  }, [])

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="/impact_hero.jpg" 
          alt="Conservation" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="eyebrow mb-4 text-[#D4A03A]">Our Mission</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            Travel That Protects
          </h1>
          <p className="text-white/80 max-w-2xl">
            Every safari with us contributes to wildlife conservation and community development across Africa.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Our Impact</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Making a Difference
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Since 2014, we've been committed to ensuring that tourism benefits both wildlife and local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 glass-card rounded-3xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                  <item.icon className="text-[#D4A03A]" size={28} />
                </div>
                <p className="font-display font-bold text-3xl text-[#D4A03A] mb-1">
                  {item.stat}
                </p>
                <p className="text-[#F7F2EA]/60 text-sm mb-4">{item.statLabel}</p>
                <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#F7F2EA]/60 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow mb-4 block">How It Works</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-6">
                Every Trip Makes an Impact
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: '5% of Every Booking',
                    description: 'Goes directly to conservation partners in the destinations you visit.'
                  },
                  {
                    title: 'Local Employment',
                    description: 'We prioritize hiring from local communities, from guides to camp staff.'
                  },
                  {
                    title: 'Community Visits',
                    description: 'Many of our itineraries include authentic cultural exchanges that benefit local people.'
                  },
                  {
                    title: 'Sustainable Practices',
                    description: 'We work with eco-friendly camps and lodges that minimize environmental impact.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#D4A03A] text-[#2B1E1A] font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#F7F2EA]/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-section opacity-0 translate-y-8">
              <img 
                src="/impact_community.jpg" 
                alt="Community impact"
                className="rounded-3xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Our Partners</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Working Together
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              We partner with leading conservation organizations to maximize our impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 bg-white/5 rounded-2xl p-6 flex items-center justify-center h-32"
              >
                <span className="font-display font-semibold text-[#F7F2EA]/60 text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-4xl text-[#F7F2EA] mb-4">
            Travel With Purpose
          </h2>
          <p className="text-[#F7F2EA]/60 mb-8">
            Every safari you book with us helps protect Africa's wildlife and support local communities.
          </p>
          <Link to="/destinations" className="btn-primary inline-flex items-center gap-2">
            Plan Your Impact Safari <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
