import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { TreePine, Users, PawPrint, GraduationCap, Leaf, Heart, Globe, Recycle, Shield, Home, Droplets, Sun, Building } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const impactAreas = [
  {
    icon: TreePine,
    title: 'Habitat Protection',
    description: 'We support anti-poaching units, habitat restoration, and wildlife corridors across East and Southern Africa.',
    stat: '50,000+',
    statLabel: 'Acres Protected'
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Tourism revenue funds schools, healthcare, clean water projects, and infrastructure in local communities.',
    stat: '2,500+',
    statLabel: 'People Supported'
  },
  {
    icon: PawPrint,
    title: 'Wildlife Research',
    description: 'We fund camera trap studies, GPS collaring programs, and population monitoring for endangered species.',
    stat: '15',
    statLabel: 'Research Projects'
  },
  {
    icon: GraduationCap,
    title: 'Conservation Education',
    description: 'Scholarships and training for the next generation of African conservationists and wildlife rangers.',
    stat: '200+',
    statLabel: 'Students Funded'
  }
]

const conservationPrograms = [
  {
    icon: Shield,
    title: 'Anti-Poaching Initiatives',
    description: 'Funding for ranger patrols, sniffer dog units, and community scout programs in protected areas.',
    details: ['Equipment for ranger teams', 'Training programs', 'Intelligence networks', 'Rapid response units']
  },
  {
    icon: Heart,
    title: 'Species Recovery',
    description: 'Supporting efforts to protect endangered species including rhinos, elephants, and mountain gorillas.',
    details: ['Rhino protection programs', 'Elephant corridor conservation', 'Gorilla habituation', 'Cheetah research']
  },
  {
    icon: Home,
    title: 'Community Conservancies',
    description: 'Supporting community-owned lands that benefit from wildlife while maintaining traditional lifestyles.',
    details: ['Land lease payments', 'Employment opportunities', 'Benefit-sharing schemes', 'Natural resource management']
  },
  {
    icon: Building,
    title: 'Infrastructure Development',
    description: 'Building schools, clinics, and water facilities in areas that host our safari operations.',
    details: ['Classroom construction', 'Medical clinics', 'Clean water boreholes', 'Road improvements']
  }
]

const sustainabilityPractices = [
  { icon: Leaf, practice: 'Carbon offset programs for all safaris' },
  { icon: Droplets, practice: 'Water conservation at all camps' },
  { icon: Sun, practice: 'Solar power at remote camps' },
  { icon: Recycle, practice: 'Zero-waste initiatives' },
  { icon: Globe, practice: 'Local sourcing for all supplies' },
  { icon: Shield, practice: 'Supporting protected areas' }
]

const partners = [
  { name: 'African Wildlife Foundation', type: 'Conservation' },
  { name: 'Save the Elephants', type: 'Research' },
  { name: 'Lewa Wildlife Conservancy', type: 'Protected Area' },
  { name: 'Mara North Conservancy', type: 'Community' },
  { name: 'African Parks', type: 'Conservation' },
  { name: 'Volcanoes National Park Authority', type: 'Protected Area' }
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-impact.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E1A]/70 via-[#2B1E1A]/50 to-[#2B1E1A]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="eyebrow">Our Mission</span>
          <h1 className="headline-xl mt-4 text-[#F7F2EA]">
            Travel That Protects
          </h1>
          <p className="text-lg md:text-xl text-[#F7F2EA]/80 mt-6 max-w-2xl mx-auto">
            Every safari with us contributes directly to wildlife conservation and community development across Africa's most vulnerable ecosystems
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow">Our Impact</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Making a Real Difference
            </h2>
            <p className="text-[#F7F2EA]/60 mt-4 max-w-2xl mx-auto">
              Since 2010, we've been committed to ensuring tourism benefits both wildlife and local communities. Every booking makes a tangible difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 glass-card rounded-3xl p-6 text-center group hover:border-[#D4A03A]/50 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center group-hover:bg-[#D4A03A]/20 transition-colors">
                  <item.icon className="text-[#D4A03A]" size={28} />
                </div>
                <p className="font-display font-bold text-4xl text-[#D4A03A] mb-1">
                  {item.stat}
                </p>
                <p className="text-[#D4A03A] text-sm mb-4">{item.statLabel}</p>
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
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">How Your Safari Helps</span>
              <h2 className="headline-lg mt-4 text-[#F7F2EA] mb-8">
                Every Trip Creates Impact
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: '5% of Every Booking',
                    description: 'Goes directly to conservation projects in the destinations you visit - anti-poaching, habitat protection, and species research.',
                    highlight: 'Over $500,000 donated since 2010'
                  },
                  {
                    title: 'Local Employment First',
                    description: 'We prioritize hiring from local communities, from safari guides and camp staff to cooks and drivers. Your safari supports families.',
                    highlight: '95% of staff from local communities'
                  },
                  {
                    title: 'Community Partnerships',
                    description: 'We work directly with community conservancies, ensuring locals benefit from wildlife through employment and land lease payments.',
                    highlight: '15 community conservancies supported'
                  },
                  {
                    title: 'Cultural Preservation',
                    description: 'Authentic cultural exchanges that benefit local people while creating meaningful experiences for our guests.',
                    highlight: '20+ cultural community partnerships'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4A03A] text-[#2B1E1A] font-bold flex items-center justify-center flex-shrink-0 text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#F7F2EA]/60 text-sm mb-2">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-[#D4A03A] bg-[#D4A03A]/10 px-3 py-1 rounded-full">
                        <Shield className="w-3 h-3" /> {item.highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-section opacity-0 translate-y-8 relative">
              <div className="rounded-3xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#D4A03A]/20 to-[#2B1E1A]" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 max-w-xs">
                <Leaf className="w-8 h-8 text-[#D4A03A] mb-3" />
                <p className="font-semibold text-[#F7F2EA] mb-1">Carbon Neutral Safaris</p>
                <p className="text-sm text-[#F7F2EA]/60">We offset 100% of emissions from your safari through verified reforestation projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Programs */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow">Our Programs</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Conservation Initiatives
            </h2>
            <p className="text-[#F7F2EA]/60 mt-4 max-w-2xl mx-auto">
              We partner with organizations working on the front lines of African conservation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {conservationPrograms.map((program, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 bg-[#1a1410] rounded-3xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4A03A]/20 flex items-center justify-center flex-shrink-0">
                    <program.icon className="text-[#D4A03A]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-2">
                      {program.title}
                    </h3>
                    <p className="text-[#F7F2EA]/60 text-sm">
                      {program.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-[#F7F2EA]/10 pt-4">
                  <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-3">What We Support</p>
                  <div className="flex flex-wrap gap-2">
                    {program.details.map((detail) => (
                      <span key={detail} className="text-xs bg-[#2B1E1A] text-[#F7F2EA]/70 px-3 py-1.5 rounded-full">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Our Commitment</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Sustainable Practices
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sustainabilityPractices.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-[#2B1E1A] rounded-2xl p-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-[#D4A03A]" size={24} />
                </div>
                <p className="text-[#F7F2EA]/80 text-sm">{item.practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Working Together</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Conservation Partners
            </h2>
            <p className="text-[#F7F2EA]/60 mt-4 max-w-xl mx-auto">
              We collaborate with leading organizations making real impact on the ground
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4A03A]/10 flex items-center justify-center">
                  <Globe className="text-[#D4A03A]" size={28} />
                </div>
                <h3 className="font-semibold text-[#F7F2EA] mb-1">{partner.name}</h3>
                <span className="text-xs text-[#D4A03A] bg-[#D4A03A]/10 px-3 py-1 rounded-full">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #D4A03A 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto text-[#D4A03A] mb-6" />
          <h2 className="headline-lg text-[#F7F2EA]">
            Travel With Purpose
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mt-4 max-w-2xl mx-auto">
            Every safari you book helps protect Africa's incredible wildlife and supports the communities who call these landscapes home. Your adventure can leave a lasting positive impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages" className="btn-primary px-8 py-4">
              Explore Our Safaris
            </Link>
            <Link to="/contact" className="btn-outline px-8 py-4">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
