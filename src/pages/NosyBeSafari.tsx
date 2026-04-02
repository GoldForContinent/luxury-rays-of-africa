import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function NosyBeSafari() {
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
        <img src="/nosybe_hero.jpg" alt="Nosy Be Island" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="text-[#D4A03A]">Nosy Be Island</span>
        </div>

        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white mb-2 tracking-tight">NOSY BE</h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-[0.3em] mb-8">Madagascar Paradise</p>
          <Link to="/contact" className="btn-primary">Plan My Trip <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="py-24 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-[#2C3E50] mb-6">WHY VISIT NOSY BE</h2>
          <p className="text-[#2C3E50] text-xl leading-relaxed">
            Nosy Be is a pristine island off Madagascar's coast, known for beautiful beaches, snorkeling, and laid-back luxury. Watch lemurs at Lokiba Reserve and enjoy sunset views.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-[8vw] bg-[#2C3E50] text-center">
        <h2 className="font-display font-bold text-4xl text-white mb-6">COMING SOON</h2>
        <p className="text-white/80 text-xl">Full Nosy Be guide and travel packages coming soon.</p>
      </section>
    </div>
  )
}
