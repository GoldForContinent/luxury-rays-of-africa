import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function LamuSafari() {
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
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <img src="/lamu_hero.jpg" alt="Lamu Island" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="text-[#D4A03A]">Lamu Island</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">LAMU ISLAND</h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">Ancient Swahili Culture</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">Plan My Trip <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-[#2C3E50] mb-6">WHY VISIT LAMU ISLAND</h2>
          <p className="text-[#2C3E50] text-xl leading-relaxed">
            Lamu Island is a UNESCO World Heritage site off Kenya's coast. This tranquil island offers pristine beaches, ancient Swahili architecture, and unique cultural experiences away from modern crowds.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50] text-center">
        <h2 className="font-display font-bold text-4xl text-white mb-6">COMING SOON</h2>
        <p className="text-white/80 text-xl">Full Lamu Island guide and travel packages coming soon.</p>
      </section>
    </div>
  )
}
