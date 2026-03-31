import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, MapPin, Calendar, Star, Phone, Mail, Clock, Check, X } from 'lucide-react'

const faqData = [
  {
    question: "What is the best time to visit Kenya for safari?",
    answer: "The optimal time for Kenya safaris runs from July to October (Great Migration season) and January to March (dry season with excellent wildlife viewing). However, Kenya offers year-round safari opportunities, with each season providing unique advantages."
  },
  {
    question: "How much does a Kenya safari cost?",
    answer: "Kenya safari costs range from $650 per person per day for mid-range experiences to $3,500+ per person per day for ultra-luxury options. Pricing depends on accommodation level, season, destinations visited, and included activities."
  },
  {
    question: "Is Kenya safe for tourists and safari travelers?",
    answer: "Yes, Kenya's major safari destinations are extremely safe. The country has invested heavily in tourism security, and areas like Masai Mara, Amboseli, and Samburu maintain excellent safety records. Rays of Africa Safari prioritizes guest safety with experienced guides and comprehensive support systems."
  },
  {
    question: "Can I see the Great Migration in Kenya?",
    answer: "Absolutely! The Great Migration occurs in Kenya's Masai Mara from July through October, featuring spectacular river crossings. This represents one of nature's most dramatic wildlife events, with over 1.5 million wildebeest and zebras traversing the Mara River."
  },
  {
    question: "What wildlife can I see in Kenya?",
    answer: "Kenya hosts the complete Big Five (lion, leopard, elephant, buffalo, rhino), plus cheetahs, giraffes, zebras, wildebeest, hippos, crocodiles, hyenas, and over 1,000 bird species. Samburu offers unique 'Special Five' species including Grevy's zebra and reticulated giraffe."
  },
  {
    question: "Do I need vaccinations for Kenya?",
    answer: "Yellow fever vaccination is required if arriving from endemic countries. Recommended vaccinations include hepatitis A and B, typhoid, and routine immunizations. Malaria prophylaxis is advised for most safari areas. Consult your doctor 6-8 weeks before travel."
  },
  {
    question: "Can Kenya safaris be combined with beach holidays?",
    answer: "Yes! Kenya's Bush-to-Beach combinations are highly popular. After your safari, fly directly to pristine coastal destinations like Diani Beach, Watamu, or take a short flight to Zanzibar for the ultimate adventure-relaxation combination."
  },
  {
    question: "What should I pack for a Kenya safari?",
    answer: "Pack lightweight, neutral-colored clothing (khaki, beige, olive), a wide-brimmed hat, sunscreen, insect repellent, binoculars, camera with zoom lens, comfortable walking shoes, and a light jacket for early morning drives. Avoid bright colors and camouflage patterns."
  },
  {
    question: "Are Kenya safaris suitable for families with children?",
    answer: "Absolutely! Many Kenya safari lodges and camps offer family-friendly accommodations with specialized Kids' Clubs, shorter game drives tailored for children, and educational activities. Destinations like Masai Mara and Amboseli are excellent for family safaris."
  },
  {
    question: "How long should I plan for a Kenya safari?",
    answer: "We recommend a minimum of 7-10 days for a comprehensive Kenya safari experience. This allows time to visit 2-3 major destinations without feeling rushed. For multi-country safaris or beach extensions, plan 12-14 days."
  }
]

const kenyaParks = [
  {
    name: "Masai Mara National Reserve",
    description: "The world-famous reserve hosting the Great Migration, with exceptional Big Five viewing and iconic savanna landscapes that stretch to the horizon.",
    image: "/masai_mara.jpg"
  },
  {
    name: "Amboseli National Park",
    description: "Famous for massive elephant herds framed against Mount Kilimanjaro, offering some of Africa's most dramatic photography opportunities.",
    image: "/amboseli.jpg"
  },
  {
    name: "Samburu National Reserve",
    description: "Home to the unique 'Special Five' species found nowhere else, this rugged reserve offers authentic wilderness and cultural encounters.",
    image: "/samburu.jpg"
  },
  {
    name: "Lake Nakuru National Park",
    description: "A birdwatcher's paradise famous for flamingos and rhino populations, set against the stunning backdrop of the Great Rift Valley.",
    image: "/kenya_card.jpg"
  },
  {
    name: "Tsavo East & West National Parks",
    description: "Kenya's largest parks offering remote wilderness, red elephants, and diverse wildlife across vast savanna and volcanic landscapes.",
    image: "/destinations_hero.jpg"
  },
  {
    name: "Ol Pejeta Conservancy",
    description: "Premier rhino conservation sanctuary and last refuge for the northern white rhinos, with exclusive luxury camp experiences.",
    image: "/hero_sunrise.jpg"
  }
]

const seasonalData = [
  { park: "Masai Mara", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Amboseli", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Samburu", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Lake Nakuru", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Ol Pejeta", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
]

function getRatingColor(rating: string) {
  switch (rating) {
    case "Best": return "bg-green-900 text-green-300"
    case "Good": return "bg-green-100 text-green-800"
    case "Fair": return "bg-orange-100 text-orange-800"
    default: return "text-gray-500"
  }
}

export default function KenyaSafari() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="/kenya_hero.jpg" 
          alt="Kenya Safari" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Breadcrumb */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          <Link to="/" className="hover:text-[#D4A03A]">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/destinations" className="hover:text-[#D4A03A]">Destinations</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D4A03A]">Kenya Safaris</span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
            KENYA SAFARIS
          </h1>
          <p className="text-[#D4A03A] text-lg md:text-xl uppercase tracking-widest mb-8">
            Premium Kenya Safari Experiences That Illuminate Your Adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Plan My Safari <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="btn-outline flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-black">
              Our Safaris <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Visit Kenya */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              WHY KENYA SHOULD BE YOUR SAFARI DESTINATION
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Discover The Heart Of Africa's Wilderness
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-[#2C3E50] text-lg leading-relaxed text-justify">
              Kenya stands as Africa's premier safari destination, offering an extraordinary blend of wildlife encounters, cultural richness, and diverse landscapes that stretch from golden savannas to pristine tropical coastlines. Here, you'll witness nature's greatest spectacle—the Great Migration—alongside intimate Big Five encounters, vibrant cultural exchanges, and ecosystems ranging from sun-drenched plains to lush coastal paradises. Travelers to Kenya experience wildlife in their natural habitat, from the powerful lion prides of the Masai Mara to the massive elephant herds beneath Amboseli's iconic Mount Kilimanjaro backdrop, all while forging meaningful connections with local communities. Kenya's well-established tourism infrastructure, combined with decades of conservation success, makes it a secure and welcoming destination for travelers seeking authentic luxury safari experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          {/* Highlight 1 */}
          <div className="mb-20">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] text-center mb-10">
              The Great Migration & Big Five Encounters
            </h3>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Masai Mara hosts the legendary Great Migration, recognized as one of the world's most spectacular natural phenomena. From July through October, over 1.5 million wildebeest and zebras stage a dramatic river crossing through the Mara River, navigating treacherous waters filled with crocodiles and prowling predators.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Beyond the migration season, Kenya's national parks and reserves provide exceptional Big Five viewing opportunities—lions, leopards, elephants, buffalo, and rhinos—all thriving in their natural environments. The country's extensive protected areas guarantee rewarding wildlife encounters throughout the year.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/migration_collage_01.jpg" 
                  alt="Great Migration" 
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="mb-20">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] text-center mb-10">
              Diverse Landscapes & Authentic Cultural Connections
            </h3>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="/unfiltered_collage_01.jpg" 
                  alt="Kenya Landscapes" 
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Kenya's terrain offers remarkable variety, allowing you to traverse multiple ecosystems within a single journey. Travel from the expansive Mara plains to the soda lakes of the Great Rift Valley—like Lake Nakuru, famous for its flamingo populations and rhino sightings.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Throughout your travels, you'll engage deeply with the Maasai and Samburu communities, gaining authentic insights into their time-honored traditions and their harmonious relationship with the land. These cultural encounters transform your safari from simple wildlife viewing into a profound journey of discovery.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight 3 */}
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] text-center mb-10">
              Exclusive Adventures & Coastal Escapes
            </h3>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Beyond standard game drives, Kenya offers unique experiences that bring you closer to the wild. Walking safaris through the Lewa Wildlife Conservancy let you track rhinos on foot, mountain treks up Mount Kenya challenge adventurous spirits, and peaceful boat rides on Lake Naivasha bring you face-to-face with hippos.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  To complete your Kenya safari experience, seamlessly transition from the bush to pristine beaches. Kenya's Bush-to-Beach combinations are unmatched—after days of thrilling wildlife encounters, fly directly to the coast where turquoise waters and white sand beaches await.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/destinations_hero.jpg" 
                  alt="Kenya Beach" 
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="font-display font-bold text-3xl text-[#2C3E50] mb-4">
              LOOKING FOR A SAFARI IN AFRICA?
            </h3>
            <p className="text-[#2C3E50] text-lg">
              Explore our collection of over 70 premium African safari packages. Contact us to design a bespoke, tailor-made adventure crafted exclusively for you.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/packages" className="btn-primary text-center">
              Explore Our Safaris
            </Link>
            <Link to="/contact" className="btn-outline text-center border-[#2C3E50] text-[#2C3E50]">
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Top Safari Destinations */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              TOP SAFARI DESTINATIONS IN KENYA
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Premier National Parks & Reserves For Unforgettable Wildlife Encounters
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-12">
            Our carefully selected safari destinations span Kenya's most iconic national parks along the Great Rift Valley, including the celebrated Masai Mara National Reserve, Amboseli National Park with its stunning views of Mount Kilimanjaro, Samburu National Reserve showcasing the special five species, and Lake Nakuru National Park—renowned for both black and white rhino populations, flamingos in their thousands.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kenyaParks.map((park, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#D4C5B9]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={park.image} 
                    alt={park.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3 uppercase tracking-wide">
                    {park.name}
                  </h4>
                  <p className="text-[#2C3E50]/80 text-sm leading-relaxed mb-4">
                    {park.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-[#CD7F32] font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
                  >
                    View Park <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              BEST TIME TO VISIT KENYA FOR SAFARI
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Month-by-Month Planning Guide For Optimal Experiences
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-10">
            Generally, Kenya shines brightest during the dry-season months of July–October and January–March, when parks remain dry, and wildlife viewing becomes dramatic, easy, and action-packed. The peak safari season runs between July and August. While visiting other months remains rewarding, the prime period for experiencing the Great Wildebeest Migration occurs from July through August.
          </p>

          {/* Seasonal Table */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 overflow-x-auto">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] text-center mb-2">
              Kenya Safari Seasonal Guide
            </h3>
            <p className="text-center text-[#CD7F32] mb-6">Best weather guide to plan your Kenya safari</p>
            
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#F5E6D3]">
                  <th className="p-3 text-left text-[#2C3E50] font-semibold">Park</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Jan</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Feb</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Mar</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Apr</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">May</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Jun</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Jul</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Aug</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Sep</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Oct</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Nov</th>
                  <th className="p-3 text-center text-[#2C3E50] font-semibold">Dec</th>
                </tr>
              </thead>
              <tbody>
                {seasonalData.map((row, index) => (
                  <tr key={index} className="border-b border-[#D4C5B9]">
                    <td className="p-3 text-left font-semibold text-[#2C3E50]">{row.park}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.jan)}`}>{row.jan}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.feb)}`}>{row.feb}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.mar)}`}>{row.mar}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.apr)}`}>{row.apr}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.may)}`}>{row.may}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.jun)}`}>{row.jun}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.jul)}`}>{row.jul}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.aug)}`}>{row.aug}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.sep)}`}>{row.sep}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.oct)}`}>{row.oct}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.nov)}`}>{row.nov}</td>
                    <td className={`p-3 text-center ${getRatingColor(row.dec)}`}>{row.dec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Season Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-6" style={{ borderLeftColor: '#556B2F' }}>
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold uppercase mb-4">
                Low Season
              </span>
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">
                April to Mid-June – Green Season
              </h4>
              <p className="text-[#2C3E50]/80 text-sm leading-relaxed">
                Kenya's Green Season occurs during the rains, transforming dusty plains into lush, emerald paradises. This period represents a hidden gem for budget-conscious travelers and those avoiding crowds, as many lodges offer significantly reduced rates. You'll witness vibrant birds in breeding plumage, healthy animals, and photogenic scenery perfect for photography.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-6" style={{ borderLeftColor: '#E67E22' }}>
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold uppercase mb-4">
                High Season
              </span>
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">
                January–March & November–December
              </h4>
              <p className="text-[#2C3E50]/80 text-sm leading-relaxed">
                Often called "Calving Season," this period shines for Kenya safaris, offering hot, dry days ideal for spotting big cats. Short grass provides excellent visibility for observing lions, leopards, and cheetahs hunting. Thousands of newborns attract high predator numbers, creating intense wildlife encounters.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-6" style={{ borderLeftColor: '#2D5016' }}>
              <span className="inline-block px-4 py-1 bg-green-900 text-white rounded-full text-sm font-semibold uppercase mb-4">
                Peak Season
              </span>
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">
                Mid-June to October
              </h4>
              <p className="text-[#2C3E50]/80 text-sm leading-relaxed">
                This represents the optimal time for Kenya safaris due to dry weather and clear skies. The season's highlight centers on the Masai Mara, where you witness the legendary Great Wildebeest Migration from August through October. Over a million animals brave crocodile-infested waters in spectacular river crossings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Defining Luxury Safaris */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              DEFINING LUXURY SAFARIS IN KENYA
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Exceptional Safari Experiences You Can Reserve
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                Luxury safaris in Kenya are defined by exclusive, personalized experiences that prioritize privacy and supreme comfort. The distinguishing feature of these premium safaris lies in the use of high-end, intimate lodges or elegant tented camps situated within secluded private conservancies.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                These exclusive areas provide low-density wildlife viewing, allowing you to observe the Big Five without the crowds typically found in national parks. Personalized service and gourmet dining elevate the experience further, ensuring your entire journey feels both immersive and exceptionally comfortable.
              </p>
              <div className="flex items-center gap-2 text-[#CD7F32] font-semibold">
                <Check size={20} /> Private conservancies like Ol Pejeta, Lewa, or Naboisho
              </div>
              <div className="flex items-center gap-2 text-[#CD7F32] font-semibold">
                <Check size={20} /> Five-star boutique camps with premium amenities
              </div>
              <div className="flex items-center gap-2 text-[#CD7F32] font-semibold">
                <Check size={20} /> Gourmet cuisine prepared by professional chefs
              </div>
            </div>
            <div className="relative">
              <img 
                src="/luxury_collage_01.jpg" 
                alt="Luxury Safari" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#CD7F32] text-white p-6 rounded-xl shadow-xl">
                <p className="font-bold text-2xl">70+</p>
                <p className="text-sm">Premium Packages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Country Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mb-4">
              SEAMLESSLY COMBINE KENYA WITH OTHER DESTINATIONS
            </h2>
            <p className="text-[#D4A03A] text-lg uppercase tracking-widest">
              Multi-Country Safari Adventures Across Africa
            </p>
          </div>
          
          <p className="text-[#F7F2EA]/80 text-lg max-w-3xl mx-auto text-center mb-12">
            Kenya's strategic location and excellent flight connectivity make it effortless to combine with other African destinations. The range of environments accessible through multi-country itineraries is breathtaking—from East Africa's golden savannas to southern Africa's dramatic deserts.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10">
              <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mb-3">
                Kenya, Tanzania & Zanzibar
              </h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                The most popular combination unites Kenya and Tanzania, allowing you to experience the complete Serengeti-Masai Mara ecosystem. Many travelers conclude with a quick flight to Zanzibar Island.
              </p>
            </div>
            
            <div className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10">
              <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mb-3">
                Uganda & Rwanda
              </h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                For those seeking diverse wildlife experiences, Uganda and Rwanda integrate seamlessly into Kenyan safaris. This combination lets you enjoy Big Five encounters alongside the thrill of Gorilla Trekking.
              </p>
            </div>
            
            <div className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10">
              <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mb-3">
                Victoria Falls, South Africa & Namibia
              </h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed">
                Kenya also serves as a gateway to Southern Africa through Nairobi's extensive flight network. This combination takes you from the lush Mara plains to the ancient dunes of the Namib Desert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              About Kenya Safaris
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-[#D4C5B9] overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-[#2C3E50] text-lg">{faq.question}</span>
                  <span className={`text-[#D4A03A] text-2xl font-light transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-5 text-[#2C3E50]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="py-24 px-4 md:px-[8vw] bg-cover bg-center relative"
        style={{ backgroundImage: 'url(/hero_sunrise.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            READY TO ILLUMINATE YOUR KENYA SAFARI ADVENTURE?
          </h2>
          <p className="text-[#D4A03A] text-lg uppercase tracking-widest mb-6">
            Let's Customize Your Luxury Kenya Experience
          </p>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Ready to explore Kenya's incredible wildlife and landscapes? Whether you dream of witnessing the Great Migration, tracking the Big Five, or combining bush adventures with beach relaxation, Rays of Africa Safari crafts bespoke experiences that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              Start Planning My Safari
            </Link>
            <Link to="/contact" className="bg-transparent border-3 border-[#D4A03A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#D4A03A] hover:text-black transition-all">
              Speak With Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
