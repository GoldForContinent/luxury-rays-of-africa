import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navLinks = [
    { path: '/safari-types', label: 'Safari Types' },
    { path: '/packages', label: 'Packages' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/wildlife', label: 'Wildlife' },
    { path: '/impact', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  const destinations = [
    { name: 'Kenya', path: '/kenya-safaris', description: 'The birthplace of safari' },
    { name: 'Tanzania', path: '/tanzania-safaris', description: 'Serengeti & Ngorongoro' },
    { name: 'Uganda', path: '/uganda-safaris', description: 'Gorilla trekking paradise' },
    { name: 'Rwanda', path: '/rwandasafaris', description: 'Land of a thousand hills' },
  ]

  const southernAfrica = [
    { name: 'Botswana', path: '/destinations/botswana', description: 'Okavango Delta paradise' },
    { name: 'Zambia', path: '/destinations/zambia', description: 'Walking safari capital' },
    { name: 'Zimbabwe', path: '/destinations/zimbabwe', description: 'Victoria Falls & wildlife' },
    { name: 'Namibia', path: '/destinations/namibia', description: 'Desert landscapes' },
    { name: 'South Africa', path: '/destinations/south-africa', description: 'Big Five & winelands' },
  ]

  const islandsAndBeaches = [
    { name: 'Zanzibar Island', path: '/destinations/tanzania/zanzibar', description: 'Spice island paradise' },
    { name: 'Lamu Island', path: '/destinations/kenya/lamu', description: 'Ancient Swahili culture' },
    { name: 'Nosy Be Island', path: '/destinations/nosy-be', description: 'Madagascar beaches' },
    { name: 'Mafia Island', path: '/destinations/mafia', description: 'Marine park sanctuary' },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 ${
        scrolled 
          ? '!bg-[#2B1E1A]/80 backdrop-blur-md shadow-lg' 
          : '!bg-transparent'
      }`}>
        <div className="px-4 md:px-[4vw] flex items-center justify-between gap-8">
          {/* Logo - Left */}
          <Link to="/" className="hover:opacity-80 transition-opacity shrink-0">
            <img src="/logo61.png" alt="Rays of Africa Logo" className="h-16 md:h-20 w-auto" />
          </Link>
          
          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center justify-center gap-6 flex-1">
            {navLinks.map((link, index) => (
              <div key={link.path} className="relative">
                {link.path === '/destinations' ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('destinations')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className={`text-sm font-bold transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg ${
                        location.pathname.startsWith('/destinations')
                          ? index % 2 === 0 ? 'text-[#D4A03A]' : 'text-white'
                          : index % 2 === 0 ? 'text-white hover:text-[#D4A03A]' : 'text-[#D4A03A] hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === 'destinations' ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Glass-like Destinations Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 transition-all duration-300 ${
                      activeDropdown === 'destinations' 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}>
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 min-w-[600px]">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Eastern Africa */}
                          <div>
                            <h4 className="text-[#D4A03A] font-semibold text-sm mb-4 uppercase tracking-wider">
                              Eastern Africa
                            </h4>
                            <div className="space-y-3">
                              {destinations.map((dest) => (
                                <Link
                                  key={dest.path}
                                  to={dest.path}
                                  className="block group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors duration-200">
                                    {dest.name}
                                  </div>
                                  <div className="text-xs text-[#F7F2EA]/50 group-hover:text-[#F7F2EA]/70 transition-colors">
                                    {dest.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          {/* Southern Africa */}
                          <div>
                            <h4 className="text-[#D4A03A] font-semibold text-sm mb-4 uppercase tracking-wider">
                              Southern Africa
                            </h4>
                            <div className="space-y-3">
                              {southernAfrica.map((dest) => (
                                <Link
                                  key={dest.path}
                                  to={dest.path}
                                  className="block group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors duration-200">
                                    {dest.name}
                                  </div>
                                  <div className="text-xs text-[#F7F2EA]/50 group-hover:text-[#F7F2EA]/70 transition-colors">
                                    {dest.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          {/* Islands & Beaches */}
                          <div>
                            <h4 className="text-[#D4A03A] font-semibold text-sm mb-4 uppercase tracking-wider">
                              Islands & Beaches
                            </h4>
                            <div className="space-y-3">
                              {islandsAndBeaches.map((dest) => (
                                <Link
                                  key={dest.path}
                                  to={dest.path}
                                  className="block group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors duration-200">
                                    {dest.name}
                                  </div>
                                  <div className="text-xs text-[#F7F2EA]/50 group-hover:text-[#F7F2EA]/70 transition-colors">
                                    {dest.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-bold transition-all duration-300 px-3 py-2 rounded-lg ${
                      index % 2 === 0
                        ? location.pathname === link.path 
                          ? 'text-[#D4A03A]' 
                          : 'text-white hover:text-[#D4A03A]'
                        : location.pathname === link.path 
                          ? 'text-white' 
                          : 'text-[#D4A03A] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#D4A03A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 px-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link, index) => (
              <div key={link.path}>
                {link.path === '/destinations' ? (
                  <>
                    <button
                      className={`block w-full text-left py-3 font-bold transition-colors flex items-center justify-between ${
                        index % 2 === 0 
                          ? 'text-white hover:text-[#D4A03A]' 
                          : 'text-[#D4A03A] hover:text-white'
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === 'destinations' ? null : 'destinations')}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'destinations' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === 'destinations' && (
                      <div className="pl-4 space-y-2">
                        <Link
                          to="/destinations"
                          className="block py-2 text-sm text-[#D4A03A]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          All Destinations
                        </Link>
                        {destinations.map((dest) => (
                          <Link
                            key={dest.path}
                            to={dest.path}
                            className="block py-2 text-sm text-[#D4A03A]/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dest.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block py-3 font-bold transition-colors ${
                      index % 2 === 0 
                        ? 'text-white hover:text-[#D4A03A]' 
                        : 'text-[#D4A03A] hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              to="/contact" 
              className="block w-full btn-outline text-sm py-2 px-4 mt-4 text-center text-[#D4A03A] border-[#D4A03A] hover:bg-[#D4A03A] hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plan a Trip
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1410] border-t border-[#F7F2EA]/10">
        <div className="px-4 md:px-[8vw] py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="inline-block mb-4">
                <img src="/logo61.png" alt="Rays of Africa Logo" className="h-16" />
              </Link>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Your gateway to extraordinary African safari experiences. 
                Discover the wild beauty of Africa with our expert-guided luxury tours.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#D4A03A] mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><Link to="/safari-types" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Safari Types</Link></li>
                <li><Link to="/destinations" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Destinations</Link></li>
                <li><Link to="/packages" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Packages</Link></li>
                <li><Link to="/journal" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Journal</Link></li>
                <li><Link to="/impact" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#D4A03A] mb-4">Contact Us</h4>
              <div className="space-y-2 text-[#F7F2EA]/60 text-sm">
                <p>Email: safaris@luxuryrays.com</p>
                <p>Phone: +254 729 744 244</p>
                <p>Location: Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
            <div className="border-t border-[#F7F2EA]/10 mt-8 pt-8 text-center">
            <p className="text-[#F7F2EA]/40 text-sm">
              © 2026 Rays of Africa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}