import { Link } from 'react-router-dom'
import { Check, Clock, MapPin, Star, ArrowRight } from 'lucide-react'
import { allFeaturedPackages, pricingTiers } from '../data/destinations'

// Use complete featured packages or fallback to const if import fails
const featuredPackagesToUse = allFeaturedPackages?.length > 0 ? allFeaturedPackages : [
  // Fallback data
  {
    id: 'featured-1',
    name: 'Serengeti Great Migration Safari',
    type: 'group',
    duration: '5 days / 4 nights',
    price: 5200,
    description: 'Witness the world\'s greatest wildlife spectacle as millions of wildebeest cross the Serengeti plains.',
    includes: ['National park fees', 'Daily game drives', 'Migration hotspot locations', 'Expert guides', 'Quality accommodation', 'All meals included']
  }
]

export default function Packages() {
  const packagesToDisplay = featuredPackagesToUse.slice(0, 6) // Show first 6 packages
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-packages.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E1A]/70 via-[#2B1E1A]/50 to-[#2B1E1A]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="eyebrow">Adventure Awaits</span>
          <h1 className="headline-xl mt-4 text-[#F7F2EA]">
            Safari Packages
          </h1>
          <p className="text-lg md:text-xl text-[#F7F2EA]/80 mt-6 max-w-2xl mx-auto">
            Handcrafted safari experiences designed to create unforgettable memories in Africa's most spectacular wilderness
          </p>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Curated Experiences</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Featured Safaris
            </h2>
            <p className="text-[#F7F2EA]/60 mt-4 max-w-xl mx-auto">
              Our most popular safari itineraries, perfected through years of experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesToDisplay.map((pkg, index) => (
              <div 
                key={pkg.id}
                className="group relative bg-[#1a1410] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A03A]/30 to-[#2B1E1A]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#F7F2EA]/10 text-8xl font-display font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4A03A] text-[#2B1E1A] px-4 py-2 rounded-full font-bold">
                    From ${pkg.price.toLocaleString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#D4A03A] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{pkg.type}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-[#D4A03A] mb-4">{pkg.duration}</p>

                  <div className="flex items-center gap-4 text-sm text-[#F7F2EA]/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="border-t border-[#F7F2EA]/10 pt-4 mb-4">
                    <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-2">Description</p>
                    <p className="text-sm text-[#F7F2EA]/70">{pkg.description}</p>
                  </div>

                  <div className="border-t border-[#F7F2EA]/10 pt-4 mb-4">
                    <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-2">Includes</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes && pkg.includes.slice(0, 4).map((item) => (
                        <span key={item} className="text-xs bg-[#2B1E1A] text-[#F7F2EA]/60 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                      {pkg.includes && pkg.includes.length > 4 && (
                        <span className="text-xs text-[#D4A03A]">
                          +{pkg.includes.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      to={`/packages/${pkg.id}`}
                      className="flex-1 btn-primary text-center py-3"
                    >
                      View Details
                    </Link>
                    <Link 
                      to="/contact"
                      className="btn-outline px-4 py-3"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Choose Your Safari Style
            </h2>
            <p className="text-[#F7F2EA]/60 mt-4 max-w-xl mx-auto">
              Every safari is tailored to your budget and preferences. Here's what each tier offers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <div 
                key={tier.id}
                className={`relative bg-[#2B1E1A] rounded-3xl p-6 ${
                  index === 2 ? 'ring-2 ring-[#D4A03A]' : ''
                }`}
              >
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A03A] text-[#2B1E1A] px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-2xl text-[#F7F2EA] mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[#F7F2EA]/60 mb-4">{tier.description}</p>
                  <div className="inline-block bg-[#D4A03A]/10 text-[#D4A03A] px-4 py-2 rounded-full">
                    <span className="font-bold">{tier.priceRange}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#F7F2EA]/80">
                      <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`mt-6 w-full block text-center py-3 rounded-full font-medium transition-all ${
                    index === 2 
                      ? 'bg-[#D4A03A] text-[#2B1E1A] hover:bg-[#c4902f]' 
                      : 'bg-transparent border-2 border-[#D4A03A] text-[#D4A03A] hover:bg-[#D4A03A]/10'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Safari CTA */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4A03A" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Star className="w-16 h-16 mx-auto text-[#D4A03A] mb-6" />
          <h2 className="headline-lg text-[#F7F2EA]">
            Design Your Dream Safari
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mt-4 max-w-2xl mx-auto">
            Can't find the perfect itinerary? Create your own. Our team specializes in crafting bespoke safari experiences tailored precisely to your vision, timeline, and budget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
              Start Planning <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Common Questions</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Pricing Information
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is included in the safari price?',
                a: 'Our packages typically include accommodation, all meals, park fees, game drives with professional guides, airport transfers, and drinking water during activities. Specific inclusions vary by package - see individual itinerary details.'
              },
              {
                q: 'Are flights included?',
                a: 'International flights are not included, but we can arrange domestic flights within Africa as part of your itinerary. We work with all major airlines serving African destinations.'
              },
              {
                q: 'Can I customize a safari package?',
                a: "Absolutely! All our safaris can be customized. Share your preferences, dietary requirements, special interests, and we'll create a tailored itinerary that matches your needs."
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, credit cards (with a 3% processing fee), and PayPal. A 30% deposit secures your booking, with the balance due 60 days before departure.'
              },
              {
                q: 'What is your cancellation policy?',
                a: 'Cancellations 60+ days before: full refund minus processing fees. 30-59 days: 50% refund. Under 30 days: no refund. We strongly recommend comprehensive travel insurance.'
              }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-semibold text-[#F7F2EA] mb-2">{faq.q}</h3>
                <p className="text-[#F7F2EA]/70 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
