import { Link } from 'react-router-dom'
import { 
  Calendar, Plane, Briefcase, Pill, CreditCard, 
  Wifi, Thermometer, Sun, CloudRain, Wind, Check
} from 'lucide-react'

export default function TravelInfo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-travel.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E1A]/70 via-[#2B1E1A]/50 to-[#2B1E1A]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="eyebrow">Plan Ahead</span>
          <h1 className="headline-xl mt-4 text-[#F7F2EA]">
            Travel Information
          </h1>
          <p className="text-lg md:text-xl text-[#F7F2EA]/80 mt-6 max-w-2xl mx-auto">
            Everything you need to know before embarking on your African safari adventure
          </p>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Timing Your Journey</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Best Time to Visit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                month: 'January - February', 
                icon: <Sun className="w-8 h-8" />,
                season: 'Dry Season',
                desc: 'Excellent wildlife viewing. The Great Migration reaches the southern Serengeti, with wildebeest calving season.',
                highlights: ['Peak calving season', 'Great predator action', 'Clear skies', 'Warm temperatures']
              },
              { 
                month: 'March - May', 
                icon: <CloudRain className="w-8 h-8" />,
                season: 'Green Season',
                desc: 'Lush landscapes, fewer crowds, and lower prices. Some roads may be impassable due to rain.',
                highlights: ['Fewer tourists', 'Budget-friendly', 'Birds in breeding plumage', 'Wildflowers blooming']
              },
              { 
                month: 'June - October', 
                icon: <Thermometer className="w-8 h-8" />,
                season: 'Peak Dry Season',
                desc: 'The classic safari season. Wildlife congregates around water sources. The Great Migration river crossings occur.',
                highlights: ['Best game viewing', 'Cooler temperatures', 'Great Migration peaks', 'Predictable weather']
              },
              { 
                month: 'November - December', 
                icon: <Wind className="w-8 h-8" />,
                season: 'Short Rains',
                desc: 'Transition period with occasional showers. Fantastic green landscapes and newborn wildlife.',
                highlights: ['Green landscapes', 'Baby animals', 'Fewer crowds early', 'Short showers']
              }
            ].map((period, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#D4A03A]">{period.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#F7F2EA]">{period.month}</h3>
                    <span className="text-xs text-[#D4A03A]">{period.season}</span>
                  </div>
                </div>
                <p className="text-sm text-[#F7F2EA]/70 mb-4">{period.desc}</p>
                <ul className="space-y-2">
                  {period.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#F7F2EA]/60">
                      <Check className="w-4 h-4 text-[#D4A03A]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Information Grid */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visas & Documentation */}
            <div className="bg-[#2B1E1A] rounded-3xl p-8">
              <div className="w-14 h-14 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mb-6">
                <Plane className="w-7 h-7 text-[#D4A03A]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-4">
                Visas & Documentation
              </h3>
              <ul className="space-y-3 text-sm text-[#F7F2EA]/70">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Kenya:</strong> eTA required for most nationalities (approx. $33)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Tanzania:</strong> Visa on arrival ($50) or e-visa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">South Africa:</strong> Visa-free for many nationalities (90 days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Botswana:</strong> Visa-free for most nationalities (90 days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Uganda:</strong> Visa on arrival ($50) or e-visa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Rwanda:</strong> Visa on arrival ($30) for most</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-[#F7F2EA]/40">
                * Requirements may vary. Always check current regulations for your nationality.
              </p>
            </div>

            {/* Health & Vaccinations */}
            <div className="bg-[#2B1E1A] rounded-3xl p-8">
              <div className="w-14 h-14 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mb-6">
                <Pill className="w-7 h-7 text-[#D4A03A]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-4">
                Health & Vaccinations
              </h3>
              <ul className="space-y-3 text-sm text-[#F7F2EA]/70">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Yellow Fever:</strong> Required if arriving from endemic areas. Recommended for Kenya, Tanzania, Uganda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Malaria:</strong> Prophylaxis recommended for many destinations. Consult your doctor 4-6 weeks before travel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Routine Vaccinations:</strong> Ensure MMR, DTaP, Hep A/B, and Chickenpox are up to date.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Typhoid:</strong> Recommended for travelers spending time in rural areas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Travel Insurance:</strong> Comprehensive medical evacuation coverage is essential.</span>
                </li>
              </ul>
            </div>

            {/* Money & Currency */}
            <div className="bg-[#2B1E1A] rounded-3xl p-8">
              <div className="w-14 h-14 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-[#D4A03A]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-4">
                Money & Currency
              </h3>
              <ul className="space-y-3 text-sm text-[#F7F2EA]/70">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">US Dollars:</strong> Widely accepted. Bring crisp, newer bills (post-2013).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Local Currencies:</strong> Kenya (KES), Tanzania (TZS), Uganda (UGX), Botswana (BWP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">ATMs:</strong> Available in cities. Limited in remote areas - bring backup cash.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Tips:</strong> Rangers $10-20/day, lodge staff $5-10/day. USD preferred.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#F7F2EA]">Credit Cards:</strong> Major cards accepted at lodges. Small vendors prefer cash.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Be Prepared</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Packing Essentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Clothing */}
            <div className="bg-[#1a1410] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-[#D4A03A]" />
                <h3 className="font-display font-bold text-lg text-[#F7F2EA]">Clothing</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#F7F2EA]/70">
                {[
                  'Neutral-colored clothing (khaki, olive, tan)',
                  'Long-sleeved shirts for sun/bush protection',
                  'Shorts and lightweight trousers',
                  'Fleece or light jacket for early mornings',
                  'Warm layer for evening game drives',
                  'Swimwear for pool/lodge relaxation',
                  'Comfortable walking shoes',
                  'Sandals for lodge/camp'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Safari Essentials */}
            <div className="bg-[#1a1410] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-[#D4A03A]" />
                <h3 className="font-display font-bold text-lg text-[#F7F2EA]">Safari Gear</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#F7F2EA]/70">
                {[
                  'Wide-brimmed hat for sun protection',
                  'Polarized sunglasses',
                  'Binoculars (8x40 recommended)',
                  'Daypack for game drives',
                  'Camera with extra batteries/memory',
                  'Safari bag or convertible backpack',
                  'Headlamp or flashlight',
                  'Dust mask (optional)'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Toiletries & Extras */}
            <div className="bg-[#1a1410] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Pill className="w-6 h-6 text-[#D4A03A]" />
                <h3 className="font-display font-bold text-lg text-[#F7F2EA]">Toiletries & Extras</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#F7F2EA]/70">
                {[
                  'High SPF sunscreen (30+)',
                  'Lip balm with SPF',
                  'Insect repellent (DEET-based)',
                  'Personal medications',
                  'Basic first aid kit',
                  'Moisturizer for dry climate',
                  'Anti-bacterial hand gel',
                  'Travel-size tissues/wet wipes'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D4A03A] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-[#D4A03A]/10 rounded-3xl p-6 border border-[#D4A03A]/20">
            <h4 className="font-semibold text-[#F7F2EA] mb-2">Safari Color Advice</h4>
            <p className="text-sm text-[#F7F2EA]/70">
              Pack in neutral earth tones - khaki, brown, olive, tan. Avoid bright colors and white, which startle wildlife. Dark colors absorb heat in the African sun.
            </p>
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Stay Connected</span>
            <h2 className="headline-lg mt-4 text-[#F7F2EA]">
              Connectivity in the Bush
            </h2>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <Wifi className="w-8 h-8 text-[#D4A03A] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#F7F2EA] mb-2">Internet & Phone</h3>
                <p className="text-[#F7F2EA]/70 text-sm">
                  Most luxury lodges and camps offer WiFi, though connections can be slow and intermittent. Mobile data works in many areas with local SIM cards. In remote locations, disconnect and embrace the wilderness!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-[#F7F2EA] mb-2">Recommendations</h4>
                <ul className="space-y-1 text-sm text-[#F7F2EA]/70">
                  <li>Purchase a local SIM card upon arrival</li>
                  <li>Download offline maps and guides before travel</li>
                  <li>Bring a power bank for long game drives</li>
                  <li>Consider a portable WiFi hotspot</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#F7F2EA] mb-2">Good to Know</h4>
                <ul className="space-y-1 text-sm text-[#F7F2EA]/70">
                  <li>Lodge charging stations available</li>
                  <li>Some camps use solar-powered USB ports</li>
                  <li>International roaming can be expensive</li>
                  <li>Sometimes no signal is a blessing!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-16 h-16 mx-auto text-[#D4A03A] mb-6" />
          <h2 className="headline-lg text-[#F7F2EA]">
            Still Have Questions?
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mt-4 max-w-2xl mx-auto">
            Our travel specialists are happy to answer any questions about preparing for your safari. We're here to ensure you're fully ready for the adventure of a lifetime.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
