import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, DollarSign, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tourIncludes = [
  "Introduction to how alcohol is made, the Distillation process and the different technics used to make each of the products",
  "Followed by a sampling of the different products produced",
  "Your clients will be offered a cocktail of their choice",
  "Brochettes (Choice of Beef, Chicken or Veggie) will be served with potatoes while enjoying the views and their cocktails",
  "Transport to and from your Hotel"
]

export default function RwandaThousandHillsDistilleries() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="A Thousand Hills Distilleries" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A] transition-colors">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A] transition-colors">Destinations</Link>
          <span className="mx-2">/</span>
          <Link to="/rwanda-safaris" className="hover:text-[#D4A03A] transition-colors">Rwanda</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">A Thousand Hills Distilleries</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4A03A] font-mono text-sm uppercase tracking-[0.3em] mb-4">Full Day Excursion</span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            A THOUSAND HILLS DISTILLERIES
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            East Africa's 1st Craft Small Batch Distillery - Triple Distilled Whisky, Gin, Rum & Vodka
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">
              Book This Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-[#2B1E1A] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <MapPin className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">Rebero Hill, Kigali</span>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="text-[#D4A03A]" size={20} />
            <span className="text-[#F7F2EA]">$120 per person</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">
            Tour Overview
          </h2>
          <p className="text-[#2C3E50] text-lg leading-relaxed mb-8">
            A Thousand Hills Distilleries is East Africa's 1st Craft Small Batch Distillery making Triple Distilled Whisky, Gin, Rum & Vodka. The Distillery is located on Rebero Hill (one of the numerous hills of Kigali), towering over Kigali City and Nyabarongo River / Bugesera region to the Southern.
          </p>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-display font-bold text-xl text-[#2C3E50] mb-4">Tour Includes</h3>
            <div className="space-y-3">
              {tourIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#D4A03A] flex-shrink-0 mt-1" size={18} />
                  <span className="text-[#2C3E50] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#CD7F32]/20 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/1684428/pexels-photo-1684428.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Distillery Tour" 
                className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl text-[#2C3E50] mb-4">
                What to Expect
              </h2>
              <p className="text-[#2C3E50]/80 mb-4">
                Learn about the art of distillation and the different techniques used to produce whisky, gin, rum, and vodka. Sample the various products and enjoy a cocktail of your choice while taking in the breathtaking views over Kigali city.
              </p>
              <p className="text-[#2C3E50]/80">
                Your experience includes delicious brochetttes (beef, chicken, or veggie) served with potatoes, making for a perfect afternoon in Rwanda's premier craft distillery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#CD7F32] font-mono text-sm uppercase tracking-[0.3em]">Investment</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] mt-2">
              Pricing
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#D4A03A] px-6 py-4">
              <h3 className="text-white font-bold">Throughout the Year</h3>
            </div>
            <div className="p-8 text-center">
              <span className="text-[#2C3E50] text-4xl font-bold">$120</span>
              <span className="text-[#2C3E50]/60 text-lg ml-2">per person</span>
              <p className="text-[#2C3E50]/60 text-sm mt-4">*Pricing depends on number of travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
            Experience Rwanda's Finest Spirits
          </h2>
          <p className="text-[#F7F2EA]/70 mb-8">
            Book this unique distillery tour and taste East Africa's best craft spirits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
            <Link to="/rwanda-safaris" className="px-8 py-3 border-2 border-[#F7F2EA]/30 text-[#F7F2EA] rounded-full font-semibold hover:bg-[#F7F2EA] hover:text-[#2C3E50] transition-all">
              View All Rwanda Safaris
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}