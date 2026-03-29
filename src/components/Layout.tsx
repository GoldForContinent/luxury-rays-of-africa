import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false)
  const [isTravelInfoOpen, setIsTravelInfoOpen] = useState(false)
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
    { path: '/travel-info', label: 'Travel Info' },
    { path: '/', label: 'Home' },
    { path: '/safari-types', label: 'Safari Types' },
    { path: '/packages', label: 'Packages' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/wildlife', label: 'Wildlife' },
    { path: '/impact', label: 'Impact' },
    { path: '/journal', label: 'Journal' },
    { path: '/contact', label: 'Contact' },
  ]

  const travelInfoSections = [
    {
      title: 'Start Your Journey Here',
      items: [
        { name: 'Your First Safari', path: '/travel-info/first-safari' },
        { name: 'Where To Visit', path: '/travel-info/where-to-visit' },
        { name: 'Best Time To Visit', path: '/travel-info/best-time-to-visit' },
        { name: 'What To Pack For Safari', path: '/travel-info/what-to-pack' },
      ]
    },
    {
      title: 'Experiences and Activities',
      items: [
        { name: 'Balloon Safari', path: '/travel-info/balloon-safari' },
        { name: 'Cultural Visits And Experiences', path: '/travel-info/cultural-visits' },
        { name: 'Walking Safaris', path: '/travel-info/walking-safaris' },
        { name: 'Helicopter Safaris', path: '/travel-info/helicopter-safaris' },
      ]
    },
    {
      title: 'Travel Guide',
      items: [
        { name: 'Apply For Visas', path: '/travel-info/visas' },
        { name: 'Month To Month Safari Guide', path: '/travel-info/monthly-guide' },
        { name: 'Health And Safety On Safari', path: '/travel-info/health-safety' },
        { name: 'Safest Countries For Safaris', path: '/travel-info/safest-countries' },
      ]
    }
  ]

  const destinations = [
    { name: 'Kenya', path: '/destinations/kenya', description: 'The birthplace of safari' },
    { name: 'Tanzania', path: '/destinations/tanzania', description: 'Serengeti & Ngorongoro' },
    { name: 'Uganda', path: '/destinations/uganda', description: 'Gorilla trekking paradise' },
    { name: 'Rwanda', path: '/destinations/rwanda', description: 'Land of a thousand hills' },
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
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.path === '/destinations' ? (
                  <button 
                    className={`text-sm transition-colors flex items-center gap-1 ${
                      location.pathname.startsWith('/destinations')
                        ? 'text-[#D4A03A]' 
                        : 'text-[#F7F2EA]/80 hover:text-[#F7F2EA]'
                    }`}
                    onMouseEnter={() => setIsDestinationsOpen(true)}
                    onMouseLeave={() => setIsDestinationsOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : link.path === '/travel-info' ? (
                  <button 
                    className={`text-sm transition-colors flex items-center gap-1 ${
                      location.pathname.startsWith('/travel-info')
                        ? 'text-[#D4A03A]' 
                        : 'text-[#F7F2EA]/80 hover:text-[#F7F2EA]'
                    }`}
                    onMouseEnter={() => setIsTravelInfoOpen(true)}
                    onMouseLeave={() => setIsTravelInfoOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm transition-colors ${
                      location.pathname === link.path 
                        ? 'text-[#D4A03A]' 
                        : 'text-[#F7F2EA]/80 hover:text-[#F7F2EA]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                
                {/* Travel Info Dropdown */}
                {link.path === '/travel-info' && isTravelInfoOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[600px] bg-[#1a1410] rounded-xl shadow-2xl border border-[#F7F2EA]/10"
                    onMouseEnter={() => setIsTravelInfoOpen(true)}
                    onMouseLeave={() => setIsTravelInfoOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {travelInfoSections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-[#D4A03A] font-semibold text-sm mb-4 uppercase tracking-wider">
                            {section.title}
                          </h4>
                          <div className="space-y-3">
                            {section.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block group"
                                onClick={() => setIsTravelInfoOpen(false)}
                              >
                                <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors">
                                  {item.name}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Destinations Dropdown */}
                {link.path === '/destinations' && isDestinationsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[600px] bg-[#1a1410] rounded-xl shadow-2xl border border-[#F7F2EA]/10"
                    onMouseEnter={() => setIsDestinationsOpen(true)}
                    onMouseLeave={() => setIsDestinationsOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {/* Eastern Africa */}
                      <div>
                        <h4 className="text-[#D4A03A] font-semibold text-sm mb-4 uppercase tracking-wider">Eastern Africa</h4>
                        <div className="space-y-3">
                          {destinations.map((dest) => (
                            <Link
                              key={dest.path}
                              to={dest.path}
                              className="block group"
                              onClick={() => setIsDestinationsOpen(false)}
                            >
                              <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors mb-1">
                                {dest.name}
                              </div>
                              <div className="text-xs text-[#F7F2EA]/50 line-clamp-2">
                                {dest.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/destinations"
                          className="inline-flex items-center gap-2 text-xs text-[#D4A03A] hover:text-[#F7F2EA] mt-4 transition-colors"
                          onClick={() => setIsDestinationsOpen(false)}
                        >
                          View All Eastern Africa →
                        </Link>
                      </div>

                      {/* Southern Africa */}
                      <div>
                        <h4 className="text-[#D4A03A] font-semibold text-sm mb-4 uppercase tracking-wider">Southern Africa</h4>
                        <div className="space-y-3">
                          {southernAfrica.map((dest) => (
                            <Link
                              key={dest.path}
                              to={dest.path}
                              className="block group"
                              onClick={() => setIsDestinationsOpen(false)}
                            >
                              <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors mb-1">
                                {dest.name}
                              </div>
                              <div className="text-xs text-[#F7F2EA]/50 line-clamp-2">
                                {dest.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/destinations"
                          className="inline-flex items-center gap-2 text-xs text-[#D4A03A] hover:text-[#F7F2EA] mt-4 transition-colors"
                          onClick={() => setIsDestinationsOpen(false)}
                        >
                          View All Southern Africa →
                        </Link>
                      </div>

                      {/* Islands & Beaches */}
                      <div>
                        <h4 className="text-[#D4A03A] font-semibold text-sm mb-4 uppercase tracking-wider">Islands & Beaches</h4>
                        <div className="space-y-3">
                          {islandsAndBeaches.map((dest) => (
                            <Link
                              key={dest.path}
                              to={dest.path}
                              className="block group"
                              onClick={() => setIsDestinationsOpen(false)}
                            >
                              <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors mb-1">
                                {dest.name}
                              </div>
                              <div className="text-xs text-[#F7F2EA]/50 line-clamp-2">
                                {dest.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/destinations"
                          className="inline-flex items-center gap-2 text-xs text-[#D4A03A] hover:text-[#F7F2EA] mt-4 transition-colors"
                          onClick={() => setIsDestinationsOpen(false)}
                        >
                          View All Beach Destinations →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link 
            to="/contact" 
            className="hidden lg:flex btn-outline text-sm py-2 px-4 items-center gap-2"
          >
            <Phone size={14} /> Plan a Trip
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#F7F2EA]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2B1E1A]/98 backdrop-blur-md py-4 px-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.path === '/destinations' ? (
                  <>
                    <button
                      className="block w-full text-left py-3 text-[#F7F2EA]/80 hover:text-[#D4A03A] transition-colors flex items-center justify-between"
                      onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDestinationsOpen && (
                      <div className="pl-4">
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
                            className="block py-2 text-sm text-[#F7F2EA]/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dest.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : link.path === '/travel-info' ? (
                  <>
                    <button
                      className="block w-full text-left py-3 text-[#F7F2EA]/80 hover:text-[#D4A03A] transition-colors flex items-center justify-between"
                      onClick={() => setIsTravelInfoOpen(!isTravelInfoOpen)}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isTravelInfoOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isTravelInfoOpen && (
                      <div className="pl-4">
                        {travelInfoSections.map((section) => (
                          <div key={section.title} className="mb-4">
                            <div className="py-2 text-sm text-[#D4A03A] font-semibold">
                              {section.title}
                            </div>
                            {section.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block py-2 text-sm text-[#F7F2EA]/60 pl-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-3 text-[#F7F2EA]/80 hover:text-[#D4A03A] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 btn-primary w-full text-center py-3"
            >
              <Phone size={14} className="inline mr-2" /> Plan a Trip
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a1410] py-16 px-4 md:px-[8vw]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-display font-bold text-lg text-[#F7F2EA] mb-4">
                Rays of Africa
              </h3>
              <p className="text-[#F7F2EA]/60 text-sm mb-4">
                Luxury safaris designed around light, land, and legacy. Creating unforgettable African adventures since 2010.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href={`https://${social}.com`}
                    className="w-10 h-10 rounded-full bg-[#2B1E1A] flex items-center justify-center text-[#F7F2EA]/60 hover:text-[#D4A03A] hover:bg-[#D4A03A]/10 transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs uppercase">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#F7F2EA] mb-4">Safari Experiences</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Safari Types', path: '/safari-types' },
                  { name: 'Packages & Pricing', path: '/packages' },
                  { name: 'Destinations', path: '/destinations' },
                  { name: 'Wildlife', path: '/wildlife' },
                  { name: 'Travel Info', path: '/travel-info' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="text-[#F7F2EA]/60 hover:text-[#D4A03A] text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#F7F2EA] mb-4">Destinations</h4>
              <ul className="space-y-2">
                {destinations.slice(0, 6).map((dest) => (
                  <li key={dest.path}>
                    <Link 
                      to={dest.path} 
                      className="text-[#F7F2EA]/60 hover:text-[#D4A03A] text-sm transition-colors"
                    >
                      {dest.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#F7F2EA] mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-[#F7F2EA]/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A03A]" />
                  hello@raysofafrica.travel
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A03A]" />
                  +255 123 456 789
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A03A]" />
                  Arusha, Tanzania
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#F7F2EA]/10">
                <p className="text-xs text-[#F7F2EA]/40">
                  Emergency Support: +255 987 654 321
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#F7F2EA]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F7F2EA]/40 text-sm">
              © 2026 Rays of Africa Safari. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/about" className="text-[#F7F2EA]/40 hover:text-[#D4A03A] transition-colors">
                About Us
              </Link>
              <Link to="/impact" className="text-[#F7F2EA]/40 hover:text-[#D4A03A] transition-colors">
                Sustainability
              </Link>
              <Link to="/contact" className="text-[#F7F2EA]/40 hover:text-[#D4A03A] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
