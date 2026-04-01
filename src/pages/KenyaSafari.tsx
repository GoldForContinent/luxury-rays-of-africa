import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Check, Star, Clock, Plane, Users, Mountain, Palmtree } from 'lucide-react'

const faqData = [
  {
    question: "Is Kenya Safe to Visit For Holidays / Safaris?",
    answer: "The short answer is Kenya is safe to visit for safaris, either with your family, work colleagues, friends or just on solo travel. Kenya's major safari destinations like Masai Mara, Amboseli, and Samburu maintain excellent safety records."
  },
  {
    question: "Which Are the Best Destinations to visit in Kenya?",
    answer: "The best destinations include Masai Mara for the Great Migration, Amboseli for elephant herds with Kilimanjaro views, Samburu for the Special Five, Lake Nakuru for flamingos and rhinos, and Ol Pejeta for rhino conservation."
  },
  {
    question: "Are Kenya Safaris Expensive? How Much do They Cost?",
    answer: "Kenya safari costs vary significantly. Mid-range safaris cost $650-$1,500 per person per day, while luxury fly-in safaris range from $1,500-$3,500+ per person per day. Peak season (July-October) commands higher prices."
  },
  {
    question: "What's the best time for a luxury Kenya safari?",
    answer: "The optimal time is July-October for the Great Migration, and January-March for dry season wildlife viewing. Peak season is mid-June to October when animals gather near water sources."
  },
  {
    question: "What should I pack for a Kenya safari?",
    answer: "Pack lightly with neutral-colored clothing (khaki, beige), a wide-brimmed hat, sunscreen, insect repellent, binoculars, camera with zoom lens, comfortable walking shoes, and a light jacket for early morning drives."
  },
  {
    question: "Do luxury Kenya safaris include meals and transfers?",
    answer: "Yes, most luxury packages are 'all-inclusive,' covering meals, fine wines, spirits, laundry services, and all airport transfers. Fly-in safaris include inter-camp flights."
  },
  {
    question: "How to choose between national parks and private conservancies in Kenya?",
    answer: "National parks offer more budget-friendly options and the Big Five. Private conservancies like Ol Pejeta, Lewa, and Naboisho offer exclusive, crowd-free wildlife viewing with unique activities like night drives and bush walks."
  },
  {
    question: "Can I combine Kenya with beach holidays?",
    answer: "Absolutely! Kenya's Bush-to-Beach combinations are popular. After your safari, fly to Diani Beach, Watamu, or Lamu for pristine white sand beaches and coral reef snorkeling."
  },
  {
    question: "What wildlife can I see in Kenya?",
    answer: "Kenya offers the complete Big Five (lion, leopard, elephant, buffalo, rhino), plus cheetahs, giraffes, zebras, wildebeest, hippos, crocodiles, hyenas, and over 1,000 bird species."
  },
  {
    question: "How long should I plan for a Kenya safari?",
    answer: "A minimum of 7-10 days is recommended for a comprehensive experience visiting 2-3 major destinations. For multi-country safaris or beach extensions, plan 12-14 days."
  }
]

const kenyaParks = [
  {
    name: "Masai Mara National Reserve",
    description: "The world-famous reserve hosting the Great Migration, with exceptional Big Five viewing and iconic savanna landscapes.",
    image: "/masai_mara.jpg"
  },
  {
    name: "Amboseli National Park",
    description: "Famous for massive elephant herds framed against Mount Kilimanjaro, offering dramatic photography opportunities.",
    image: "/amboseli.jpg"
  },
  {
    name: "Samburu National Reserve",
    description: "Home to the unique 'Special Five' species found nowhere else, offering authentic wilderness and cultural encounters.",
    image: "/samburu.jpg"
  },
  {
    name: "Lake Nakuru National Park",
    description: "A birdwatcher's paradise famous for flamingos and rhino populations, set against the stunning Rift Valley.",
    image: "/kenya_card.jpg"
  },
  {
    name: "Tsavo East & West National Parks",
    description: "Kenya's largest parks offering remote wilderness, red elephants, and diverse wildlife across vast landscapes.",
    image: "/destinations_hero.jpg"
  },
  {
    name: "Ol Pejeta Conservancy",
    description: "Premier rhino conservation sanctuary and last refuge for northern white rhinos, with exclusive luxury camps.",
    image: "/hero_sunrise.jpg"
  },
  {
    name: "Marsabit National Park",
    description: "A densely forested mountain sanctuary with three spectacular crater lakes in northern Kenya.",
    image: "/unfiltered_collage_01.jpg"
  },
  {
    name: "Loisaba Conservancy",
    description: "A 56,000-acre pristine wilderness and working ranch in Kenya's northern frontier with exceptional wildlife.",
    image: "/unfiltered_collage_02.jpg"
  },
  {
    name: "Lake Naivasha",
    description: "Beautiful freshwater lake famous for hippos, birdlife, and boat safaris with scenic Rift Valley views.",
    image: "/migration_collage_01.jpg"
  }
]

const safariActivities = [
  {
    icon: "🚙",
    title: "Classic Safari Game Drives",
    description: "The centerpiece of any safari. Using 4×4 vehicles to traverse vast distances finding the Big Five. Best at Masai Mara (July-October) and Amboseli.",
    timing: "June-October & January-March"
  },
  {
    icon: "🐎",
    title: "Horseback Safaris",
    description: "A peaceful, personal encounter with the wild. Best in Laikipia and Ol Pejeta Conservancy. Enjoyable during dry months when grass is shorter.",
    timing: "June-October"
  },
  {
    icon: "🚶",
    title: "Guided Bush Walks",
    description: "Track wildlife on foot with armed guides. Experience the bush intimately. Available in private conservancies.",
    timing: "Year-round"
  },
  {
    icon: "🎈",
    title: "Hot Air Balloon Safaris",
    description: "Spectacular sunrise views over the Maasai Mara plains, ending with a champagne breakfast in the bush.",
    timing: "June-October"
  },
  {
    icon: "🚣",
    title: "Boat Safaris",
    description: "Lake Naivasha and Lake Baringo offer peaceful boat rides to see hippos and diverse birdlife up close.",
    timing: "Year-round"
  },
  {
    icon: "🏍️",
    title: "Mountain Biking",
    description: "Thrilling way to explore Africa's landscapes. Hell's Gate National Park is one of the few safe locations for biking among wildlife.",
    timing: "June-October"
  },
  {
    icon: "🚁",
    title: "Helicopter Excursions",
    description: "True luxury adventure to remote locations. Soar over Suguta Valley, Lake Turkana, and Mount Kenya glaciers. Land at high-mountain lakes for picnics.",
    timing: "January-March & July-October"
  },
  {
    icon: "🍽️",
    title: "Bush Dinners",
    description: "One of the most magical experiences - dining under the African stars with lantern-lit settings and traditional entertainment.",
    timing: "Year-round"
  },
  {
    icon: "🤝",
    title: "Cultural Visits",
    description: "Visit Maasai or Samburu villages to learn ancient customs, see traditional dances, and experience authentic culture.",
    timing: "Year-round"
  },
  {
    icon: "🤿",
    title: "Marine Safaris",
    description: "Diani and Watamu offer excellent snorkeling and scuba diving to see dolphins and colorful coral reefs.",
    timing: "October-March"
  }
]

const safariTypes = [
  {
    title: "Mid-Range Luxury Safaris",
    price: "$650 - $1,500",
    perPerson: "per person per day",
    description: "The most popular choice for travelers wanting comfort and value. Features permanent tented camps or well-equipped lodges with en-suite bathrooms, comfortable beds, and swimming pools.",
    features: [
      "Private 4×4 Land Cruiser",
      "Professional driver-guide",
      "Higher-quality meals",
      "Better park locations",
      "Inside national parks or quality conservancies"
    ]
  },
  {
    title: "Luxury & Fly-In Safaris",
    price: "$1,500 - $3,500+",
    perPerson: "per person per day",
    description: "The ultimate high-end adventure with 5-star lodges, gourmet cuisine, and personalized service. Fly between parks in small aircraft for spectacular aerial views.",
    features: [
      "Fly-in between destinations",
      "5-star boutique camps",
      "Private plunge pools",
      "All-inclusive (meals, wines, spirits)",
      "Private conservancies",
      "Night game drives & bush walks"
    ]
  },
  {
    title: "Family Safaris with Kids",
    price: "From $7,500",
    perPerson: "per person (12 days)",
    description: "Carefully planned for all ages with Kids' Clubs, shorter interactive game drives, and expert Maasai guides teaching bush skills.",
    features: [
      "Kids' Clubs & Young Explorer programs",
      "Child-friendly activities",
      "Shorter game drives",
      "Educational experiences",
      "Family-friendly accommodations"
    ]
  },
  {
    title: "Beach & Bush Combos",
    price: "$7,500 - $10,500",
    perPerson: "per person (12 days)",
    description: "Perfect mix of wildlife adventure and tropical relaxation. Start with Big Five safari, then fly to pristine coast for beaches and marine safaris.",
    features: [
      "Big Five game drives",
      "Beach resort stay",
      "Snorkeling & scuba diving",
      "Marine safari experiences",
      "Fly-in or by-road options"
    ]
  }
]

const samplePackages = [
  {
    title: "Luxury Serengeti Safari - Kenya & Tanzania",
    nights: 10,
    price: "11,496",
    destinations: ["Amboseli", "Lake Manyara", "Lake Nakuru", "Masai Mara", "Ngorongoro", "Serengeti"]
  },
  {
    title: "Flying Safari to Samburu and Maasai Mara",
    nights: "7 Days / 6 Nights",
    price: "4,825",
    destinations: ["Masai Mara", "Samburu"]
  },
  {
    title: "Kenya Classic Safari",
    nights: "9 Days / 8 Nights",
    price: "6,856",
    destinations: ["Lake Naivasha", "Lake Nakuru", "Masai Mara", "Samburu"]
  }
]

const accommodations = [
  {
    name: "Mbweha Camp",
    location: "Lake Nakuru",
    description: "Unique intimate safari experience in the Lemek Conservancy, just outside Lake Nakuru National Park."
  },
  {
    name: "Kibo Safari Camp",
    location: "Amboseli",
    description: "Luxury tented camp at the foot of Mount Kilimanjaro with stunning sunrise views."
  },
  {
    name: "Soroi Larsens Camp",
    location: "Samburu",
    description: "Luxurious tented camp along the banks of the Ewaso Ng'iro River in Samburu National Reserve."
  }
]

const seasonalData = [
  { park: "Masai Mara", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Amboseli", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Samburu", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Tsavo West", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Tsavo East", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Nairobi", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Laikipia (Lewa, Olpejeta)", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Meru", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Lake Nakuru", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
  { park: "Lake Naivasha", jan: "Good", feb: "Good", mar: "Good", apr: "Fair", may: "Fair", jun: "Good", jul: "Best", aug: "Best", sep: "Best", oct: "Best", nov: "Good", dec: "Good" },
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
            Luxury Kenya Safaris and Tours that are Memorable and Inspirational
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Help Me Plan <ArrowRight size={18} />
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
              WHY CHOOSE KENYA FOR YOUR SAFARI ADVENTURE
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Reasons to Visit Kenya for Safari Holidays and Tours
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-[#2C3E50] text-lg leading-relaxed text-justify">
              Kenya is a premier safari destination, offering an unmatched safari and holiday experience that combines the world-famous Great Migration, the Big Five Wildlife sightings, cultural immersions, and diverse landscapes ranging from golden savannas to tropical coasts. Our guests can witness incredible wildlife up close, such as the powerful lion prides of the Maasai Mara and the massive elephant herds of Amboseli, all while enjoying a rich cultural connection with local communities. Kenya has a professional and well-run tourism industry, making it a safe and comfortable destination for all travelers to enjoy exclusive Luxury Kenya Safaris.
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
              The Great Migration and the Big Five in Kenya
            </h3>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Maasai Mara hosts the Great Migration, often called the Eighth Wonder of the World, which migrates from the Serengeti into the Maasai Mara. From July to October, over 1.5 million wildebeest and zebras put on a thrilling show as they cross the Mara River, braving predators like crocodiles and lions.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Even outside of the migration season, Kenya offers some of the best opportunities in Africa to see the Big Five—lions, leopards, elephants, buffalo, and rhinos—in their natural habitat. The country's numerous national parks and reserves provide high-density wildlife sightings, virtually guaranteeing a successful and exciting game drive.
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
              Diverse Ecosystems and Kenyan Cultural Experiences
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
                  Kenya's landscape is incredibly varied, allowing you to explore multiple worlds in a single trip. You can travel from the vast, open plains of the Mara to the soda lakes of the Great Rift Valley, such as Lake Nakuru, which is famous for its flamingos and rhino sightings.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  For a change of pace, the arid beauty of Samburu offers unique Special Five species found nowhere else, while the snow-capped peaks of Mount Kenya provide a stunning backdrop for hikers. Throughout your journey, you can engage with the Maasai and Samburu people, gaining deep insights into their ancient traditions and their harmonious coexistence with nature.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight 3 */}
          <div className="mb-20">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] text-center mb-10">
              Unique Kenya Adventures and Coastal Beach Holidays
            </h3>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Beyond traditional game drives, Kenya offers unique activities that bring you closer to the wild. You can go on a walking safari to track rhinos in the Lewa Wildlife Conservancy, hike the slopes of Mount Kenya, or enjoy a quiet boat ride among hippos.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  To finish your Kenya Luxury Safaris, Kenya's Bush-and-Beach combinations are out of this world. You can easily fly from the savanna to the white-sand beaches of Diani or the historic, car-free island of Lamu. These coastal spots offer a perfect place to relax, snorkel in coral reefs, and experience the unique Swahili culture.
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

          {/* City & Farm Tours - NEW */}
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-[#2C3E50] text-center mb-10">
              City Tours and Farm Tours in Kenya
            </h3>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="/kenya_card.jpg" 
                  alt="Nairobi City" 
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  Beyond the savanna, Kenya's cities offer exciting City Tours into history and conservation. In Nairobi, the unique Giraffe Centre allows visitors to hand-feed endangered Rothschild giraffes. For a glimpse into the past, the National Museum and Railway Museum detail the country's colonial heritage.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                  The Nairobi city outskirts provide immersive farm tours to historic Kiambethu Tea Farm or Fairview Coffee Estate. Walk through lush plantations and enjoy fresh farm-to-table lunch.
                </p>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  On the coast, Mombasa blends African, Arabic, and European cultures. Visit the 16th-century Fort Jesus, Old Town's spice markets, and the iconic Mombasa Tusks.
                </p>
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
              Explore our collection of over 70 luxury African safaris. Contact us to design a bespoke, tailor-made adventure just for you.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/packages" className="btn-primary text-center">
              Explore Our Safaris
            </Link>
            <Link to="/contact" className="btn-outline text-center border-[#2C3E50] text-[#2C3E50]">
              Speak to An Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Top Safari Destinations */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              BEST PLACES TO VISIT IN KENYA
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Best Safari National Parks To Visit in Kenya For Luxury Safari Holidays
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-12">
            Most of our short and long-haul safaris cover major parks along the Great Rift Valley in Kenya, including the award-winning Masai Mara National Reserve, Amboseli National Park to view Mt. Kilimanjaro, Samburu National Reserve home to the special five, Lake Nakuru National Park home to white rhinos, and greater and lesser flamingos.
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

      {/* Defining Luxury Safaris */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              WHAT DEFINES A LUXURY SAFARI IN KENYA
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Types of Kenya Luxury Safaris You can Book
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-4">
                A luxury safari in Kenya is defined by exclusive, tailor-made experiences that prioritize privacy and comfort. The main difference between these safaris and standard tours is the use of high-end, intimate lodges or tented camps located within secluded private conservancies.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                These areas offer low-density wildlife viewing, allowing you to see the "Big Five" without the crowds typically found in national parks. Personalized service and gourmet dining further enhance the experience, ensuring your entire trip is both immersive and comfortable.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#2C3E50] font-semibold">
                  <Check size={20} className="text-[#CD7F32]" /> Private conservancies like Ol Pejeta, Lewa, or Naboisho
                </div>
                <div className="flex items-center gap-3 text-[#2C3E50] font-semibold">
                  <Check size={20} className="text-[#CD7F32]" /> Five-star boutique camps with premium amenities
                </div>
                <div className="flex items-center gap-3 text-[#2C3E50] font-semibold">
                  <Check size={20} className="text-[#CD7F32]" /> Gourmet cuisine by professional chefs
                </div>
                <div className="flex items-center gap-3 text-[#2C3E50] font-semibold">
                  <Check size={20} className="text-[#CD7F32]" /> Private plunge pools and star beds
                </div>
                <div className="flex items-center gap-3 text-[#2C3E50] font-semibold">
                  <Check size={20} className="text-[#CD7F32]" /> Night game drives & guided bush walks
                </div>
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

      {/* Safari Types & Costs */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              TYPES OF SAFARIS IN KENYA & THEIR COST
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Safari Types to Kenya and How Much They Cost
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-12">
            Kenya safari costs vary significantly depending on your travel preferences, the season, and your desired level of comfort. On average, prices range from approximately $650 to over $3,500 per person per night. During peak season (July-October), safari costs tend to be much higher.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {safariTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D4C5B9]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-[#2C3E50]">{type.title}</h3>
                  <span className="bg-[#CD7F32]/10 text-[#CD7F32] px-3 py-1 rounded-full text-sm font-semibold">
                    {type.price}
                  </span>
                </div>
                <p className="text-[#2C3E50]/60 text-sm mb-4">{type.perPerson}</p>
                <p className="text-[#2C3E50] mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-[#2C3E50]">
                      <Check size={16} className="text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Activities */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              UNFORGETTABLE KENYA SAFARI EXPERIENCES
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Engaging and Soul-Stirring Safari Activities
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-12">
            Kenya offers a spectacular range of activities that go far beyond standard game drives. Here is a detailed look at the best experiences, where to find them, and the ideal times to go.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariActivities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4C5B9]"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-2">
                  {activity.title}
                </h4>
                <p className="text-[#2C3E50]/80 text-sm mb-3 leading-relaxed">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 text-[#CD7F32] text-sm">
                  <Clock size={14} />
                  <span className="font-medium">{activity.timing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Country Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mb-4">
              EASILY COMBINE KENYA WITH OTHER DESTINATIONS
            </h2>
            <p className="text-[#D4A03A] text-lg uppercase tracking-widest">
              Combine Kenya Safaris with Other Safari Destinations in Africa
            </p>
          </div>
          
          <p className="text-[#F7F2EA]/80 text-lg max-w-3xl mx-auto text-center mb-12">
            Combining Kenya with other African destinations is easy, with its network of regional flights and well-traversed land borders. Whether it's tracking primates in rainforests or relaxing on spice islands, Kenya can provide the main logistical focus of an African multi-country expedition.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10">
              <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mb-3">
                Kenya, Tanzania, and Zanzibar
              </h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed mb-4">
                The most iconic combination allows you to see the complete Serengeti/Maasai Mara ecosystem. Classic 10-14 day trips include Masai Mara before Serengeti and Ngorongoro Crater, ending with Zanzibar beaches.
              </p>
              <span className="text-[#D4A03A] text-sm font-semibold">10-14 Days</span>
            </div>
            
            <div className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10">
              <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mb-3">
                Uganda & Rwanda
              </h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed mb-4">
                Direct flights from Nairobi to Entebbe and Kigali enable you to transition from open savannas to misty forests of Bwindi or Volcanoes for Gorilla Trekking.
              </p>
              <span className="text-[#D4A03A] text-sm font-semibold">12-14 Days</span>
            </div>
            
            <div className="bg-[#1a1410] p-8 rounded-2xl border border-[#F7F2EA]/10">
              <div className="w-12 h-12 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-[#F7F2EA] mb-3">
                Victoria Falls, South Africa & Namibia
              </h4>
              <p className="text-[#F7F2EA]/60 text-sm leading-relaxed mb-4">
                Combine with Kruger National Park or Victoria Falls, or experience the "desert and drama" of Namibia - from Mara plains to Namib Desert dunes.
              </p>
              <span className="text-[#D4A03A] text-sm font-semibold">14-18 Days</span>
            </div>
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
              Month By Month Kenya Safari Guide
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-10">
            Generally, Kenya is best to visit during the dry-season months of July – October and January to March, when the parks are dry, and wildlife viewing is dramatic, easy, and action-packed. The best time is between July and August.
          </p>

          {/* Seasonal Table */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 overflow-x-auto">
            <h3 className="font-display font-bold text-2xl text-[#2C3E50] text-center mb-2">
              Kenya Safari Seasonal Guide
            </h3>
            <p className="text-center text-[#CD7F32] mb-6">Best Weather Guide to Plan Your Safari</p>
            
            <table className="w-full min-w-[900px]">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg" style={{ borderLeft: '6px solid #556B2F' }}>
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold uppercase mb-4">
                Low Season
              </span>
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">
                April to Mid June – Green Season
              </h4>
              <p className="text-[#2C3E50]/80 text-sm leading-relaxed">
                The Green Season occurs during the rains, when dusty plains transform into lush paradise. A hidden gem for budget travelers as many lodges offer lower prices. Clear, dust-free air is perfect for photography and birdwatching.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg" style={{ borderLeft: '6px solid #E67E22' }}>
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold uppercase mb-4">
                High Season
              </span>
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">
                January to March & November to December
              </h4>
              <p className="text-[#2C3E50]/80 text-sm leading-relaxed">
                Called the "Calving Season," this time offers hot, dry days ideal for spotting big cats. Short grass provides excellent visibility. Thousands of newborns attract high predator numbers for intense wildlife viewing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg" style={{ borderLeft: '6px solid #2D5016' }}>
              <span className="inline-block px-4 py-1 bg-green-900 text-white rounded-full text-sm font-semibold uppercase mb-4">
                Peak Season
              </span>
              <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-3">
                Mid June to October
              </h4>
              <p className="text-[#2C3E50]/80 text-sm leading-relaxed">
                Best time due to dry weather and clear skies. Animals congregate near waterholes. The highlight is witnessing the Great Wildebeest Migration from August to October with spectacular river crossings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Packages */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              KENYA SAFARI PACKAGES & TOURS
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Best Kenya Tour Packages to Book
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-12">
            Our Kenya Safaris are well designed and curated to ensure you get the best experiences, memorable times with your loved ones, and amazing wildlife encounters.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {samplePackages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D4C5B9]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#CD7F32] font-semibold">{pkg.nights}</span>
                  <Star className="text-[#CD7F32]" size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-[#2C3E50] mb-4">
                  {pkg.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.destinations.map((dest, dIndex) => (
                    <span key={dIndex} className="text-xs bg-[#F5E6D3] text-[#2C3E50] px-2 py-1 rounded">
                      {dest}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#D4C5B9]">
                  <div>
                    <span className="text-[#CD7F32] font-bold text-2xl">${pkg.price}</span>
                    <span className="text-[#2C3E50]/60 text-sm"> PPS</span>
                  </div>
                  <Link to="/contact" className="text-[#CD7F32] font-semibold hover:underline">
                    View Itinerary
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              BEST PLACES TO STAY IN KENYA
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Top Safari Accommodations in Kenya
            </p>
          </div>
          
          <p className="text-[#2C3E50] text-lg max-w-3xl mx-auto text-center mb-12">
            Kenya is recognized as the origin of safari, with accommodations having evolved to focus on being a premium safari destination. We've hand-picked properties that fit all guest interests and expectations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((camp, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-[#2B1E1A] flex items-center justify-center">
                  <Palmtree className="text-white/30" size={48} />
                </div>
                <div className="p-6">
                  <h4 className="font-display font-bold text-xl text-[#2C3E50] mb-2">
                    {camp.name}
                  </h4>
                  <p className="text-[#CD7F32] text-sm font-semibold mb-3">{camp.location}</p>
                  <p className="text-[#2C3E50]/80 text-sm">
                    {camp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              KENYA SAFARIS FAQs
            </h2>
            <p className="text-[#CD7F32] text-lg uppercase tracking-widest">
              Frequently Asked Questions
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

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-[#F7F2EA] mb-4">
              WHY CHOOSE RAYS OF AFRICA
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-2">15+ Years Experience</h4>
              <p className="text-[#F7F2EA]/60 text-sm">Combined 69 years of safari expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-2">Professional Guides</h4>
              <p className="text-[#F7F2EA]/60 text-sm">Silver and Gold certified guides</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-2">100% Locally Owned</h4>
              <p className="text-[#F7F2EA]/60 text-sm">Kenya-based safari DMC</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-2">Financial Protection</h4>
              <p className="text-[#F7F2EA]/60 text-sm">Safe and secure payments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-2">Sustainable Practices</h4>
              <p className="text-[#F7F2EA]/60 text-sm">Wildlife & community focused</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A03A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#D4A03A]" size={24} />
              </div>
              <h4 className="text-[#F7F2EA] font-semibold mb-2">Positive Impact</h4>
              <p className="text-[#F7F2EA]/60 text-sm">School programs & conservation</p>
            </div>
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
            READY TO PLAN YOUR KENYA SAFARI?
          </h2>
          <p className="text-[#D4A03A] text-lg uppercase tracking-widest mb-6">
            Let's Customize Your Luxury Kenya Experience
          </p>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you dream of witnessing the Great Migration, tracking the Big Five, or combining bush adventures with beach relaxation, Rays of Africa creates bespoke experiences that exceed expectations.
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
