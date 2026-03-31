import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

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
        { name: 'Your First Safari', path: '/first-safari' },
        { name: 'Where To Visit', path: '/where-to-visit' },
        { name: 'Best Time To Visit', path: '/best-time-to-visit' },
        { name: 'What To Pack For Safari', path: '/what-to-pack' },
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
        className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent"
      >
        <div className="px-4 md:px-[4vw] flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src="/logo3.png" alt="Rays of Africa Logo" className="h-20 w-auto" />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.path === '/destinations' ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('destinations')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className={`text-sm transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg ${
                        location.pathname.startsWith('/destinations')
                          ? 'text-[#D4A03A]' 
                          : 'text-[#D4A03A]/70 hover:text-[#D4A03A]'
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
                ) : link.path === '/travel-info' ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('travel-info')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className={`text-sm transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg ${
                        location.pathname.startsWith('/travel-info')
                          ? 'text-[#D4A03A]' 
                          : 'text-[#D4A03A]/70 hover:text-[#D4A03A]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === 'travel-info' ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Glass-like Travel Info Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 transition-all duration-300 ${
                      activeDropdown === 'travel-info' 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}>
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 min-w-[600px]">
                        <div className="grid grid-cols-3 gap-6">
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
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="text-sm text-[#F7F2EA]/80 group-hover:text-[#D4A03A] transition-colors duration-200 py-1">
                                      {item.name}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm transition-all duration-300 px-3 py-2 rounded-lg ${
                      location.pathname === link.path 
                        ? 'text-[#D4A03A]' 
                        : 'text-[#D4A03A]/70 hover:text-[#D4A03A]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Link 
            to="/contact" 
            className="hidden lg:flex btn-outline text-sm py-2 px-4 items-center gap-2 text-[#D4A03A] border-[#D4A03A] hover:bg-[#D4A03A] hover:text-black"
          >
            <Phone size={14} /> Plan a Trip
          </Link>

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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-transparent py-4 px-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.path === '/destinations' ? (
                  <>
                    <button
                      className="block w-full text-left py-3 text-[#D4A03A]/70 hover:text-[#D4A03A] transition-colors flex items-center justify-between"
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
                ) : link.path === '/travel-info' ? (
                  <>
                    <button
                      className="block w-full text-left py-3 text-[#D4A03A]/70 hover:text-[#D4A03A] transition-colors flex items-center justify-between"
                      onClick={() => setActiveDropdown(activeDropdown === 'travel-info' ? null : 'travel-info')}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'travel-info' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === 'travel-info' && (
                      <div className="pl-4 space-y-2">
                        {travelInfoSections.map((section) => (
                          <div key={section.title} className="py-2">
                            <h5 className="text-xs text-[#D4A03A] font-semibold uppercase tracking-wider mb-2">
                              {section.title}
                            </h5>
                            {section.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block py-1 text-sm text-[#D4A03A]/60"
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
                    className="block py-3 text-[#D4A03A]/70 hover:text-[#D4A03A] transition-colors"
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
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1410] border-t border-[#F7F2EA]/10">
        <div className="px-4 md:px-[8vw] py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-4">
                Luxury Rays of Africa
              </h3>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Your gateway to extraordinary African safari experiences. 
                Discover the wild beauty of Africa with our expert-guided luxury tours.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#D4A03A] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/destinations" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Destinations</Link></li>
                <li><Link to="/safari-types" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Safari Types</Link></li>
                <li><Link to="/packages" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Packages</Link></li>
                <li><Link to="/contact" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#D4A03A] mb-4">Travel Info</h4>
              <ul className="space-y-2">
                <li><Link to="/first-safari" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Your First Safari</Link></li>
                <li><Link to="/where-to-visit" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Where to Visit</Link></li>
                <li><Link to="/best-time-to-visit" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">Best Time to Visit</Link></li>
                <li><Link to="/what-to-pack" className="text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-sm transition-colors">What to Pack</Link></li>
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
              © 2024 Luxury Rays of Africa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
