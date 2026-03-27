import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Users, Globe, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Users, value: '15,000+', label: 'Happy Travelers' },
  { icon: Globe, value: '8', label: 'Countries' },
  { icon: Award, value: '12', label: 'Years Experience' },
  { icon: Heart, value: '50+', label: 'Local Partners' },
]

const team = [
  {
    name: 'John Mutua',
    role: 'Founder & Lead Guide',
    image: '/team_john.jpg',
    bio: 'Born in Kenya with 20+ years of safari experience.'
  },
  {
    name: 'Sarah Chen',
    role: 'Operations Director',
    image: '/team_sarah.jpg',
    bio: 'Ensures every trip runs smoothly from start to finish.'
  },
  {
    name: 'David Ochieng',
    role: 'Head Guide',
    image: '/team_david.jpg',
    bio: 'Expert tracker with an encyclopedic knowledge of wildlife.'
  },
  {
    name: 'Emma Wilson',
    role: 'Travel Designer',
    image: '/team_emma.jpg',
    bio: 'Creates personalized itineraries for every type of traveler.'
  },
]

export default function About() {
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
      <section className="relative py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow mb-4 block">About Us</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-[#F7F2EA] mb-6">
            Our Story
          </h1>
          <p className="text-[#F7F2EA]/70 text-lg leading-relaxed">
            Rays of Africa was founded with a simple mission: to share the magic of African safaris 
            while supporting conservation and local communities. What started as a small team of 
            passionate guides has grown into a trusted name in luxury safari travel.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="fade-section opacity-0 translate-y-8 text-center">
                <stat.icon className="mx-auto text-[#D4A03A] mb-4" size={32} />
                <p className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-1">
                  {stat.value}
                </p>
                <p className="text-[#F7F2EA]/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Our Values</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA]">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Conservation First',
                description: 'Every trip contributes to wildlife protection and habitat preservation. We partner with conservation organizations across Africa.'
              },
              {
                title: 'Community Support',
                description: 'We work directly with local communities, ensuring tourism benefits those who call these wild places home.'
              },
              {
                title: 'Authentic Experiences',
                description: 'No cookie-cutter itineraries. Every safari is designed around your interests, pace, and sense of adventure.'
              },
            ].map((value, index) => (
              <div key={index} className="fade-section opacity-0 translate-y-8 glass-card rounded-3xl p-8">
                <h3 className="font-display font-semibold text-xl text-[#F7F2EA] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#F7F2EA]/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Our Team</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA]">
              Meet the Experts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="fade-section opacity-0 translate-y-8 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-[#2B1E1A]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#F7F2EA]">
                  {member.name}
                </h3>
                <p className="text-[#D4A03A] text-sm mb-2">{member.role}</p>
                <p className="text-[#F7F2EA]/60 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
