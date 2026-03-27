import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/wildlife', label: 'Wildlife' },
    { path: '/impact', label: 'Impact' },
    { path: '/journal', label: 'Journal' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-[#2B1E1A]">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#2B1E1A]/95 backdrop-blur-md py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="px-4 md:px-[4vw] flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl text-[#F7F2EA]">
            Rays of Africa
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path 
                    ? 'text-[#D4A03A]' 
                    : 'text-[#F7F2EA]/80 hover:text-[#F7F2EA]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-outline text-sm py-2 px-4 flex items-center gap-2"
            >
              <Phone size={14} /> Plan a Trip
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#F7F2EA]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#2B1E1A]/98 backdrop-blur-md py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 text-[#F7F2EA]/80 hover:text-[#D4A03A] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a1410] py-12 px-4 md:px-[8vw]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-lg text-[#F7F2EA] mb-4">
                Rays of Africa
              </h3>
              <p className="text-[#F7F2EA]/60 text-sm">
                Luxury safaris designed around light, land, and legacy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#F7F2EA] mb-4">Explore</h4>
              <ul className="space-y-2">
                {['Destinations', 'Wildlife', 'Impact', 'Journal'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="text-[#F7F2EA]/60 hover:text-[#D4A03A] text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#F7F2EA] mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Contact', 'Careers'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="text-[#F7F2EA]/60 hover:text-[#D4A03A] text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#F7F2EA] mb-4">Contact</h4>
              <p className="text-[#F7F2EA]/60 text-sm mb-2">hello@raysofafrica.travel</p>
              <p className="text-[#F7F2EA]/60 text-sm mb-2">+255 123 456 789</p>
              <p className="text-[#F7F2EA]/60 text-sm">Arusha, Tanzania</p>
            </div>
          </div>
          <div className="border-t border-[#F7F2EA]/10 pt-8 text-center">
            <p className="text-[#F7F2EA]/40 text-sm">
              © 2026 Rays of Africa Safari. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
