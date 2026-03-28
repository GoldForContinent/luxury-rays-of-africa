import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Search, Camera, Users, TreePine, Bird } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const bigFive = [
  {
    name: 'African Lion',
    scientific: 'Panthera leo',
    description: 'The undisputed king of the African savanna, lions are the only cats that live in social groups called prides. Males are distinguished by their magnificent manes, while females do most of the hunting.',
    habitat: 'Grasslands, savannas, dense bush',
    bestPlaces: ['Masai Mara', 'Serengeti', 'Kruger National Park'],
    funFact: 'A lion\'s roar can be heard from 5 miles away',
    image: '/wildlife/lion.jpg'
  },
  {
    name: 'African Leopard',
    scientific: 'Panthera pardus',
    description: 'The most secretive and elusive of the big cats, leopards are masterful hunters known for their ability to haul prey twice their weight into trees to keep it safe from scavengers.',
    habitat: 'Woodlands, forests, rocky outcrops',
    bestPlaces: ['Sabi Sands', 'South Luangwa', 'Masai Mara'],
    funFact: 'Leopards can run at 36 mph and leap 20 feet',
    image: '/wildlife/leopard.jpg'
  },
  {
    name: 'African Elephant',
    scientific: 'Loxodonta africana',
    description: 'The largest land mammal on Earth, African elephants are highly intelligent, emotional creatures that live in complex social structures led by matriarchs who remember water sources from decades past.',
    habitat: 'Savannas, forests, deserts, mountains',
    bestPlaces: ['Chobe', 'Amboseli', 'Tarangire', 'Okavango'],
    funFact: 'Elephants can recognize themselves in mirrors',
    image: '/wildlife/elephant.jpg'
  },
  {
    name: 'African Buffalo',
    scientific: 'Syncerus caffer',
    description: 'Often considered the most dangerous of the Big Five, African buffalos have a reputation for being unpredictable. They live in large herds that can number over 1,000 individuals.',
    habitat: 'Grasslands, floodplains, woodlands',
    bestPlaces: ['Kruger', 'Serengeti', 'Okavango', 'Chobe'],
    funFact: 'Buffalo herds have been known to kill lions to rescue a member',
    image: '/wildlife/buffalo.jpg'
  },
  {
    name: 'Black Rhinoceros',
    scientific: 'Diceros bicornis',
    description: 'Critically endangered with fewer than 5,600 remaining in the wild, black rhinos are solitary, territorial browsers. Spotting one is an extraordinary privilege and a testament to conservation success.',
    habitat: 'Tropical and subtropical grasslands, savannas',
    bestPlaces: ['Etosha', 'Lewa Downs', 'Ngorongoro', 'Samburu'],
    funFact: 'Black rhinos have a hooked upper lip for browsing',
    image: '/wildlife/rhino.jpg'
  }
]

const otherMammals = [
  {
    name: 'Cheetah',
    scientific: 'Acinonyx jubatus',
    description: 'The fastest land animal on Earth, cheetahs can accelerate from 0 to 60 mph in just 3 seconds. Unlike other big cats, they cannot roar.',
    habitat: 'Open grasslands, savannas',
    bestPlaces: ['Masai Mara', 'Serengeti', 'Namib Desert'],
    icon: <Search className="w-6 h-6" />
  },
  {
    name: 'Giraffe',
    scientific: 'Giraffa camelopardalis',
    description: 'The tallest land animal, giraffes use their 18-inch prehensile tongues to browse acacia trees. Each giraffe has a unique pattern, like human fingerprints.',
    habitat: 'Savannas, woodlands',
    bestPlaces: ['Everywhere in East Africa'],
    icon: <TreePine className="w-6 h-6" />
  },
  {
    name: 'Hippopotamus',
    scientific: 'Hippopotamus amphibius',
    description: 'Despite their docile appearance, hippos are responsible for more human deaths in Africa than any other large animal. They spend days submerged to stay cool.',
    habitat: 'Rivers, lakes, swamps',
    bestPlaces: ['Chobe River', 'Ngorongoro', 'Zambezi'],
    icon: <Eye className="w-6 h-6" />
  },
  {
    name: 'Zebra',
    scientific: 'Equus quagga',
    description: 'Each zebra\'s stripe pattern is as unique as a human fingerprint. These striking animals are highly social and often form close bonds with other species.',
    habitat: 'Grasslands, savannas, mountainous regions',
    bestPlaces: ['Serengeti', 'Masai Mara', 'Etosha'],
    icon: <Users className="w-6 h-6" />
  },
  {
    name: 'Wildebeest',
    scientific: 'Connochaetes taurinus',
    description: 'Famous for the Great Migration, blue wildebeest travel hundreds of miles following seasonal rains. Over 1.5 million participate in this natural spectacle.',
    habitat: 'Open grasslands, savannas',
    bestPlaces: ['Serengeti', 'Masai Mara'],
    icon: <Users className="w-6 h-6" />
  },
  {
    name: 'Crocodile',
    scientific: 'Crocodylus niloticus',
    description: 'Nile crocodiles are ancient predators that have survived for 200 million years. They can grow over 16 feet long and live for over 70 years.',
    habitat: 'Rivers, lakes, marshes',
    bestPlaces: ['Mara River', 'Chobe River', 'Okavango'],
    icon: <Eye className="w-6 h-6" />
  }
]

const primates = [
  {
    name: 'Mountain Gorilla',
    scientific: 'Gorilla beringei beringei',
    description: 'Living in just three countries, mountain gorillas share 98% of their DNA with humans. A one-hour encounter with a gorilla family is one of life\'s most profound experiences.',
    habitat: 'Montane forests, bamboo forests',
    bestPlaces: ['Bwindi Impenetrable Forest', 'Volcanoes National Park'],
    funFact: 'Mountain gorillas can live to be over 40 years old',
    image: '/wildlife/gorilla.jpg'
  },
  {
    name: 'Chimpanzee',
    scientific: 'Pan troglodytes',
    description: 'Our closest living relatives, chimps share about 98% of our DNA. They use tools, hunt cooperatively, and exhibit complex social behaviors including empathy and grief.',
    habitat: 'Tropical rainforests, forest mosaics',
    bestPlaces: ['Kibale Forest', 'Mahale Mountains', 'Gombe Stream'],
    funFact: 'Chimps can learn to use more than 100 signs',
    image: '/wildlife/chimp.jpg'
  },
  {
    name: 'Golden Monkey',
    scientific: 'Cercopithecus kandti',
    description: 'Endemic to the Virunga Mountains, these playful primates live in groups of 60-100 individuals. Their striking golden-orange fur makes them a photographer\'s delight.',
    habitat: 'Highland bamboo forests',
    bestPlaces: ['Volcanoes National Park', 'Mgahinga'],
    funFact: 'Only about 5,000 golden monkeys remain in the wild',
    image: '/wildlife/golden-monkey.jpg'
  }
]

const birdlife = [
  {
    name: 'African Fish Eagle',
    scientific: 'Haliaeetus vocifer',
    description: 'The sound of the African fish eagle is synonymous with African wilderness. Its distinctive cry has been called one of Africa\'s most iconic sounds.',
    habitat: 'Lakes, rivers, wetlands',
    bestPlaces: ['Lake Victoria', 'Okavango', 'Zambezi'],
    icon: <Bird className="w-6 h-6" />
  },
  {
    name: 'Kori Bustard',
    scientific: 'Ardeotis kori',
    description: 'The heaviest flying bird in Africa, kori bustards can weigh up to 40 pounds. The males perform elaborate courtship displays with their impressive neck feathers.',
    habitat: 'Open grasslands, savannas',
    bestPlaces: ['Serengeti', 'Masai Mara', 'Etosha'],
    icon: <Bird className="w-6 h-6" />
  },
  {
    name: 'Lilac-Breasted Roller',
    scientific: 'Coracias caudatus',
    description: 'Perhaps Africa\'s most colorful bird, the lilac-breasted roller displays a stunning array of seven colors during its acrobatic flight displays.',
    habitat: 'Woodlands, savannas',
    bestPlaces: ['Throughout East and Southern Africa'],
    icon: <Bird className="w-6 h-6" />
  },
  {
    name: 'Greater Flamingo',
    scientific: 'Phoenicopterus roseus',
    description: 'Thousands of flamingos gather at African lakes, creating pink carpets that stretch to the horizon. Their distinctive bent bills filter algae from alkaline waters.',
    habitat: 'Alkaline lakes, coastal lagoons',
    bestPlaces: ['Lake Nakuru', 'Lake Natron', 'Walvis Bay'],
    icon: <Bird className="w-6 h-6" />
  }
]

const categories = [
  { id: 'big-five', name: 'Big Five', icon: <Eye className="w-5 h-5" /> },
  { id: 'mammals', name: 'Other Mammals', icon: <Users className="w-5 h-5" /> },
  { id: 'primates', name: 'Primates', icon: <Search className="w-5 h-5" /> },
  { id: 'birds', name: 'Birdlife', icon: <Bird className="w-5 h-5" /> },
]

export default function Wildlife() {
  const [activeCategory, setActiveCategory] = useState('big-five')

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section')
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(section, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        },
        once: true
      })
    })
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-wildlife.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E1A]/70 via-[#2B1E1A]/50 to-[#2B1E1A]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="eyebrow">Discover</span>
          <h1 className="headline-xl mt-4 text-[#F7F2EA]">
            Wildlife of Africa
          </h1>
          <p className="text-lg md:text-xl text-[#F7F2EA]/80 mt-6 max-w-2xl mx-auto">
            From the majestic Big Five to rare primates and dazzling birdlife, encounter extraordinary creatures in their natural habitat
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-[8vw] bg-[#1a1410] sticky top-16 z-40">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#D4A03A] text-[#2B1E1A]'
                    : 'bg-[#2B1E1A] text-[#F7F2EA]/70 hover:text-[#F7F2EA]'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Big Five */}
      {activeCategory === 'big-five' && (
        <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="eyebrow">The Iconic Five</span>
              <h2 className="headline-lg mt-4 text-[#F7F2EA]">
                The Big Five
              </h2>
              <p className="text-[#F7F2EA]/60 mt-4 max-w-2xl mx-auto">
                Named for being the most challenging animals to hunt on foot, the Big Five represent the ultimate safari prize. Today, they're the most sought-after subjects for photographers worldwide.
              </p>
            </div>

            <div className="space-y-8">
              {bigFive.map((animal, index) => (
                <div 
                  key={animal.name}
                  className="fade-section opacity-0 translate-y-8 grid md:grid-cols-2 gap-8 items-center"
                  style={{ flexDirection: index % 2 === 1 ? 'row-reverse' : 'row' }}
                >
                  <div className={`relative h-80 md:h-96 rounded-3xl overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4A03A]/20 to-[#2B1E1A]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#D4A03A]/30 text-9xl font-display font-bold">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <p className="text-[#D4A03A] text-sm italic mb-2">{animal.scientific}</p>
                    <h3 className="font-display font-bold text-3xl text-[#F7F2EA] mb-4">
                      {animal.name}
                    </h3>
                    <p className="text-[#F7F2EA]/70 mb-6 leading-relaxed">
                      {animal.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-1">Habitat</p>
                        <p className="text-sm text-[#F7F2EA]/80">{animal.habitat}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#D4A03A] uppercase tracking-wider mb-1">Fun Fact</p>
                        <p className="text-sm text-[#F7F2EA]/80">{animal.funFact}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-2">Best Places to See</p>
                      <div className="flex flex-wrap gap-2">
                        {animal.bestPlaces.map((place) => (
                          <span key={place} className="text-xs bg-[#D4A03A]/20 text-[#D4A03A] px-3 py-1 rounded-full">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Mammals */}
      {activeCategory === 'mammals' && (
        <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="eyebrow">Safari Companions</span>
              <h2 className="headline-lg mt-4 text-[#F7F2EA]">
                Other Mammals
              </h2>
              <p className="text-[#F7F2EA]/60 mt-4 max-w-2xl mx-auto">
                Africa's mammals extend far beyond the Big Five. From the fastest cheetah to the tallest giraffe, every game drive brings new encounters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherMammals.map((animal) => (
                <div 
                  key={animal.name}
                  className="fade-section opacity-0 translate-y-8 glass-card rounded-3xl p-6 group hover:border-[#D4A03A]/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4A03A]/20 flex items-center justify-center text-[#D4A03A]">
                      {animal.icon}
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/40 text-xs italic">{animal.scientific}</p>
                      <h3 className="font-display font-bold text-xl text-[#F7F2EA]">
                        {animal.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#F7F2EA]/70 text-sm mb-4">{animal.description}</p>
                  <div className="border-t border-[#F7F2EA]/10 pt-4">
                    <p className="text-xs text-[#F7F2EA]/40 uppercase tracking-wider mb-2">Where to Find</p>
                    <div className="flex flex-wrap gap-2">
                      {animal.bestPlaces.map((place) => (
                        <span key={place} className="text-xs bg-[#2B1E1A] text-[#F7F2EA]/60 px-2 py-1 rounded">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Primates */}
      {activeCategory === 'primates' && (
        <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="eyebrow">Our Closest Relatives</span>
              <h2 className="headline-lg mt-4 text-[#F7F2EA]">
                Primates of Africa
              </h2>
              <p className="text-[#F7F2EA]/60 mt-4 max-w-2xl mx-auto">
                Africa is home to some of the world's most endangered primates. Tracking mountain gorillas and chimpanzees offers deeply moving encounters.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {primates.map((primate, index) => (
                <div 
                  key={primate.name}
                  className="fade-section opacity-0 translate-y-8 relative h-96 rounded-3xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A03A]/20 to-[#2B1E1A]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#D4A03A]/20 text-8xl font-display font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#D4A03A] text-xs italic mb-1">{primate.scientific}</p>
                    <h3 className="font-display font-bold text-2xl text-[#F7F2EA] mb-2">
                      {primate.name}
                    </h3>
                    <p className="text-[#F7F2EA]/70 text-sm mb-4 line-clamp-3">
                      {primate.description}
                    </p>
                    <p className="text-xs text-[#D4A03A]">{primate.funFact}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#D4A03A]/10 rounded-3xl p-8 text-center">
              <Camera className="w-12 h-12 mx-auto text-[#D4A03A] mb-4" />
              <h3 className="font-display font-bold text-xl text-[#F7F2EA] mb-2">
                Primate Tracking Permits
              </h3>
              <p className="text-[#F7F2EA]/70 text-sm max-w-xl mx-auto mb-4">
                Gorilla and chimpanzee trekking permits are limited and must be booked well in advance. We handle all permit arrangements for our guests.
              </p>
              <Link to="/packages" className="btn-primary inline-flex items-center gap-2">
                View Primate Safaris <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Birdlife */}
      {activeCategory === 'birds' && (
        <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="eyebrow">Feathered Wonders</span>
              <h2 className="headline-lg mt-4 text-[#F7F2EA]">
                Birdlife of Africa
              </h2>
              <p className="text-[#F7F2EA]/60 mt-4 max-w-2xl mx-auto">
                With over 2,500 bird species, Africa is a paradise for bird enthusiasts. From majestic eagles to dazzling kingfishers, every safari offers avian encounters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {birdlife.map((bird) => (
                <div 
                  key={bird.name}
                  className="fade-section opacity-0 translate-y-8 glass-card rounded-3xl p-6 text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4A03A]/20 flex items-center justify-center text-[#D4A03A]">
                    {bird.icon}
                  </div>
                  <p className="text-[#F7F2EA]/40 text-xs italic mb-1">{bird.scientific}</p>
                  <h3 className="font-display font-bold text-lg text-[#F7F2EA] mb-2">
                    {bird.name}
                  </h3>
                  <p className="text-[#F7F2EA]/60 text-sm mb-4 line-clamp-3">
                    {bird.description}
                  </p>
                  <p className="text-xs text-[#D4A03A]">{bird.habitat}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#F7F2EA]/60">
                Africa hosts over 1,500 endemic bird species. Consider bringing binoculars and a field guide for your safari!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto text-center">
          <Eye className="w-16 h-16 mx-auto text-[#D4A03A] mb-6" />
          <h2 className="headline-lg text-[#F7F2EA]">
            Ready for a Wildlife Encounter?
          </h2>
          <p className="text-lg text-[#F7F2EA]/70 mt-4 max-w-2xl mx-auto">
            Our expert guides know every species' habits and habitats. Let us craft your perfect wildlife safari adventure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages" className="btn-primary px-8 py-4">
              Explore Safari Packages
            </Link>
            <Link to="/destinations" className="btn-outline px-8 py-4">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
