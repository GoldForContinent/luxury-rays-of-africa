import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Backpack, Camera, Sun, Cloud, CheckCircle, AlertCircle, Shirt, Heart, ArrowRight, Package, Shield, Eye } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhatToPack() {
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

  const essentialClothing = [
    {
      item: 'Neutral-colored T-shirts',
      quantity: '6-8',
      reason: 'Khaki, olive, beige - avoid bright colors and camouflage',
      icon: <Shirt className="w-5 h-5" />
    },
    {
      item: 'Long-sleeved shirts',
      quantity: '2-3',
      reason: 'Sun protection and insect defense',
      icon: <Shirt className="w-5 h-5" />
    },
    {
      item: 'Convertible pants/shorts',
      quantity: '2-3 pairs',
      reason: 'Versatile for changing temperatures',
      icon: <Package className="w-5 h-5" />
    },
    {
      item: 'Lightweight jacket',
      quantity: '1',
      reason: 'Cool mornings and evenings',
      icon: <Cloud className="w-5 h-5" />
    },
    {
      item: 'Fleece or sweater',
      quantity: '1',
      reason: 'Cold nights and high-altitude areas',
      icon: <Shirt className="w-5 h-5" />
    },
    {
      item: 'Comfortable walking shoes',
      quantity: '1 pair',
      reason: 'Closed-toe, comfortable for walking',
      icon: <Package className="w-5 h-5" />
    },
    {
      item: 'Sandals',
      quantity: '1 pair',
      reason: 'Around camp and relaxing',
      icon: <Package className="w-5 h-5" />
    },
    {
      item: 'Wide-brimmed hat',
      quantity: '1',
      reason: 'Sun protection for face and neck',
      icon: <Sun className="w-5 h-5" />
    }
  ]

  const gearEquipment = [
    {
      item: 'Binoculars',
      essential: true,
      reason: 'Essential for wildlife viewing',
      tip: '8x42 or 10x42 recommended'
    },
    {
      item: 'Camera with zoom lens',
      essential: true,
      reason: 'Capture your safari memories',
      tip: '200-400mm lens ideal for wildlife'
    },
    {
      item: 'Extra batteries/memory cards',
      essential: true,
      reason: 'Limited charging opportunities',
      tip: 'Pack more than you think you need'
    },
    {
      item: 'Power bank',
      essential: true,
      reason: 'Keep devices charged on game drives',
      tip: 'At least 10,000mAh capacity'
    },
    {
      item: 'Small daypack',
      essential: true,
      reason: 'Carry daily essentials',
      tip: 'Water-resistant with multiple compartments'
    },
    {
      item: 'Water bottle',
      essential: true,
      reason: 'Stay hydrated during game drives',
      tip: 'Insulated bottles keep water cool longer'
    },
    {
      item: 'Flashlight or headlamp',
      essential: true,
      reason: 'Moving around camp at night',
      tip: 'LED with extra batteries'
    },
    {
      item: 'Journal and pen',
      essential: false,
      reason: 'Record your safari experiences',
      tip: 'Small, durable notebook works best'
    }
  ]

  const healthSafety = [
    {
      item: 'High SPF sunscreen',
      essential: true,
      reason: 'African sun is very strong',
      tip: 'SPF 50+ and water-resistant'
    },
    {
      item: 'Lip balm with SPF',
      essential: true,
      reason: 'Prevent chapped lips',
      tip: 'SPF 30+ recommended'
    },
    {
      item: 'Insect repellent',
      essential: true,
      reason: 'Protection against mosquitoes',
      tip: 'DEET-based for maximum effectiveness'
    },
    {
      item: 'Personal medications',
      essential: true,
      reason: 'Any prescription medicines',
      tip: 'Keep in original containers'
    },
    {
      item: 'Basic first-aid kit',
      essential: true,
      reason: 'Minor cuts and injuries',
      tip: 'Include band-aids, antiseptic, pain relievers'
    },
    {
      item: 'Hand sanitizer',
      essential: true,
      reason: 'Hygiene when water unavailable',
      tip: 'Travel-sized, leak-proof bottle'
    },
    {
      item: 'Wet wipes',
      essential: true,
      reason: 'Quick clean-ups',
      tip: 'Biodegradable options available'
    },
    {
      item: 'Motion sickness medication',
      essential: false,
      reason: 'Bumpy game drives',
      tip: 'Consult your doctor before traveling'
    }
  ]

  const optionalLuxuries = [
    {
      item: 'Lightweight travel towel',
      reason: 'Quick-drying and compact'
    },
    {
      item: 'Book or e-reader',
      reason: 'Entertainment during downtime'
    },
    {
      item: 'Snacks',
      reason: 'Energy bars for long game drives'
    },
    {
      item: 'Playing cards',
      reason: 'Evening entertainment at camp'
    },
    {
      item: 'Swimsuit',
      reason: 'Lodges with pools or beach extensions'
    },
    {
      item: 'Tea or coffee bags',
      reason: 'Personal taste preferences'
    },
    {
      item: 'Small travel pillow',
      reason: 'Comfort during long transfers'
    },
    {
      item: 'Portable speaker',
      reason: 'Music in your room (check lodge policy)'
    }
  ]

  const packingTips = [
    {
      title: 'Pack Light, Pack Smart',
      description: 'Most lodges offer laundry services. Pack versatile pieces that can be mixed and matched.',
      icon: <Package className="w-6 h-6" />
    },
    {
      title: 'Use Packing Cubes',
      description: 'Organize your luggage efficiently and make finding items easier.',
      icon: <Backpack className="w-6 h-6" />
    },
    {
      title: 'Check Weight Limits',
      description: 'Small aircraft have strict weight restrictions. Check with your operator beforehand.',
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: 'Leave Valuables at Home',
      description: 'Expensive jewelry and unnecessary electronics are not recommended.',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="hero-image absolute inset-0">
          <img 
            src="/safari-packing-hero.jpg" 
            alt="African Safari Packing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="fade-section opacity-0 translate-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Backpack className="w-8 h-8 text-[#D4A03A]" />
              <span className="eyebrow text-[#D4A03A]">Be Prepared</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
              What to Pack for Safari
            </h1>
            <p className="text-white/90 max-w-3xl text-lg md:text-xl mb-8 leading-relaxed">
              Pack smart for your African adventure. Our comprehensive guide ensures you have 
              everything you need for a comfortable and memorable safari experience.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Get Packing Advice <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Essential Clothing */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Safari Wardrobe</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Essential Clothing Items
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              The right clothing ensures comfort and practicality while respecting safari etiquette 
              and protecting you from the elements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {essentialClothing.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-[#1a1410] rounded-xl p-6 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#D4A03A]/20 rounded-full flex items-center justify-center">
                      <div className="text-[#D4A03A]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-[#F7F2EA]">
                        {item.item}
                      </h4>
                      <span className="text-[#D4A03A] text-sm">
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear & Equipment */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Safari Gear</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Photography & Equipment
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              The right equipment enhances your safari experience and helps you capture 
              incredible memories while staying comfortable and prepared.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {gearEquipment.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-[#2B1E1A] rounded-xl p-6 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.essential ? (
                        <CheckCircle className="w-6 h-6 text-[#D4A03A]" />
                      ) : (
                        <Eye className="w-6 h-6 text-[#D4A03A]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-display font-semibold text-[#F7F2EA]">
                          {item.item}
                        </h4>
                        {item.essential && (
                          <span className="px-2 py-1 bg-[#D4A03A]/20 text-[#D4A03A] text-xs rounded-full">
                            Essential
                          </span>
                        )}
                      </div>
                      <p className="text-[#F7F2EA]/70 text-sm mb-2">
                        {item.reason}
                      </p>
                      <p className="text-[#D4A03A] text-xs">
                        <span className="font-medium">Tip:</span> {item.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Stay Healthy</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Health & Safety Essentials
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Protect your health and stay safe with these essential items. 
              Consult your doctor about specific medical requirements for your destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthSafety.map((item, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-[#1a1410] rounded-xl p-6 border border-[#F7F2EA]/10 hover:border-[#D4A03A]/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#D4A03A]/20 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#D4A03A]" />
                    </div>
                    <span className="text-[#D4A03A] text-sm font-medium">
                      {item.essential ? 'Essential' : 'Recommended'}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-[#F7F2EA] mb-2">
                    {item.item}
                  </h4>
                  <p className="text-[#F7F2EA]/60 text-sm mb-2">
                    {item.reason}
                  </p>
                  <p className="text-[#D4A03A] text-xs">
                    <span className="font-medium">Note:</span> {item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Luxuries */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Nice to Have</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Optional Items & Luxuries
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              These items aren't essential but can enhance your safari experience. 
              Consider your luggage space and personal preferences.
            </p>
          </div>

          <div className="bg-[#2B1E1A] rounded-2xl p-8 border border-[#F7F2EA]/10 fade-section opacity-0 translate-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {optionalLuxuries.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#D4A03A] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-semibold text-[#F7F2EA] mb-1">
                      {item.item}
                    </h4>
                    <p className="text-[#F7F2EA]/60 text-sm">
                      {item.reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packing Tips */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-section opacity-0 translate-y-8">
            <span className="eyebrow text-[#D4A03A]">Pro Tips</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Smart Packing Strategies
            </h2>
            <p className="text-[#F7F2EA]/70 max-w-2xl mx-auto text-lg">
              Expert advice to help you pack efficiently and travel comfortably 
              on your African safari adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packingTips.map((tip, index) => (
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

      {/* Final Checklist */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2B1E1A] rounded-3xl p-8 md:p-12 border border-[#F7F2EA]/10 fade-section opacity-0 translate-y-8">
            <div className="text-center mb-8">
              <CheckCircle className="mx-auto text-[#D4A03A] mb-4" size={48} />
              <h2 className="font-display font-bold text-3xl text-[#F7F2EA] mb-4">
                Pre-Departure Checklist
              </h2>
              <p className="text-[#F7F2EA]/70 text-lg mb-8">
                Use this final checklist to ensure you're fully prepared for your safari adventure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-display font-semibold text-xl text-[#F7F2EA] mb-4">
                  Documents & Money
                </h3>
                <ul className="space-y-2 text-[#F7F2EA]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Valid passport (6+ months validity)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Visas for all destinations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Travel insurance documents
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Credit cards and some local currency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Photocopies of important documents
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-[#F7F2EA] mb-4">
                  Health & Safety
                </h3>
                <ul className="space-y-2 text-[#F7F2EA]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Vaccination certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Prescription medications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Malaria prophylaxis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Emergency contact information
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4A03A]" />
                    Travel insurance emergency numbers
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Personalized Packing List <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
