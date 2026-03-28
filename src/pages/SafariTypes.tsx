import { Link } from 'react-router-dom'
import { Backpack, Tent, Star, Users, Heart, UsersRound, Check, ArrowRight, Clock, DollarSign } from 'lucide-react'
import { safariTypes } from '../data/destinations'

const iconMap: Record<string, React.ReactNode> = {
  backpack: <Backpack className="w-12 h-12" />,
  tent: <Tent className="w-12 h-12" />,
  star: <Star className="w-12 h-12" />,
  users: <Users className="w-12 h-12" />,
  heart: <Heart className="w-12 h-12" />,
  'users-round': <UsersRound className="w-12 h-12" />
}

export default function SafariTypes() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-safari-types.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E1A]/70 via-[#2B1E1A]/50 to-[#2B1E1A]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="eyebrow">Choose Your Adventure</span>
          <h1 className="headline-xl mt-4 text-[#F7F2EA]">
            Safari Types
          </h1>
          <p className="text-lg md:text-xl text-[#F7F2EA]/80 mt-6 max-w-2xl mx-auto">
            From intimate solo journeys to extravagant family celebrations, discover the safari experience that matches your dreams
          </p>
        </div>
      </section>

      {/* Safari Types Grid */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariTypes.map((type, index) => (
              <div 
                key={type.id}
                className="group relative bg-[#1a1410] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A03A]/20 to-[#2B1E1A]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#D4A03A] transform group-hover:scale-110 transition-transform duration-500">
                      {iconMap[type.icon]}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#D4A03A] text-[#2B1E1A] px-3 py-1 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    {type.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-2">
                    {type.name}
                  </h3>
                  <p className="text-[#F7F2EA]/60 text-sm mb-4">
                    {type.shortDescription}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#D4A03A] mb-4">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold">{type.priceRange}</span>
                    <span className="text-[#F7F2EA]/40">per person</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-2">Ideal For</p>
                    <div className="flex flex-wrap gap-2">
                      {type.idealFor.slice(0, 3).map((item) => (
                        <span 
                          key={item}
                          className="text-xs bg-[#2B1E1A] text-[#F7F2EA]/60 px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#F7F2EA]/10 pt-4">
                    <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-2">Highlights</p>
                    <ul className="space-y-1">
                      {type.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-[#F7F2EA]/70">
                          <Check className="w-4 h-4 text-[#D4A03A]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={`/safari-types/${type.slug}`}
                    className="mt-6 w-full btn-primary flex items-center justify-center gap-2 group/btn"
                  >
                    Explore {type.name}
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">All Our Safaris Include</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              The Essentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Expert Guides', desc: 'Professional wildlife guides with extensive local knowledge' },
              { title: 'Quality Accommodation', desc: 'Carefully selected lodges and camps for comfort and authenticity' },
              { title: 'All Meals', desc: 'Delicious cuisine, from bush breakfasts to starlit dinners' },
              { title: 'Park Fees', desc: 'All national park entrance fees included' },
              { title: 'Game Drives', desc: 'Morning, afternoon, and evening game viewing activities' },
              { title: 'Water & Refreshments', desc: 'Complimentary water and refreshments during activities' },
              { title: 'Airport Transfers', desc: 'Seamless pickup and drop-off at major airports' },
              { title: 'Emergency Support', desc: '24/7 support throughout your safari journey' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#D4A03A]/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#D4A03A]" />
                </div>
                <h3 className="font-semibold text-[#F7F2EA] mb-2">{item.title}</h3>
                <p className="text-sm text-[#F7F2EA]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #D4A03A 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="headline-lg text-[#F7F2EA]">
            Not Sure Which Safari Is Right For You?
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mt-4 max-w-2xl mx-auto">
            Our safari specialists are here to help design your perfect African adventure. Share your preferences, and we'll craft an itinerary that exceeds your expectations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
              Request Custom Safari
            </Link>
            <Link to="/destinations" className="btn-outline px-8 py-4 text-lg">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
