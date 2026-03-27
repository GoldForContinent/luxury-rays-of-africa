import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const animals = [
  {
    name: 'Lion',
    scientific: 'Panthera leo',
    description: 'The king of beasts, lions are the only cats that live in groups called prides. Best spotted in the early morning or late afternoon.',
    habitat: 'Grasslands, savannas',
    bestPlaces: ['Masai Mara', 'Serengeti', 'Kruger'],
    image: '/wildlife_lion.jpg'
  },
  {
    name: 'Leopard',
    scientific: 'Panthera pardus',
    description: 'The most elusive of the big cats, leopards are solitary and nocturnal. They are excellent climbers and often drag prey into trees.',
    habitat: 'Woodlands, forests, mountains',
    bestPlaces: ['Sabi Sands', 'South Luangwa', 'Masai Mara'],
    image: '/wildlife_leopard.jpg'
  },
  {
    name: 'African Elephant',
    scientific: 'Loxodonta africana',
    description: 'The largest land mammal, elephants are highly intelligent and social. They can be found in large herds, especially near water sources.',
    habitat: 'Savannas, forests, deserts',
    bestPlaces: ['Chobe', 'Amboseli', 'Tarangire'],
    image: '/wildlife_elephant.jpg'
  },
  {
    name: 'Black Rhino',
    scientific: 'Diceros bicornis',
    description: 'Critically endangered and heavily protected, black rhinos are solitary animals. Spotting one is a true safari privilege.',
    habitat: 'Savannas, bushlands',
    bestPlaces: ['Etosha', 'Lewa', 'Ngorongoro'],
    image: '/wildlife_rhino.jpg'
  },
  {
    name: 'Cape Buffalo',
    scientific: 'Syncerus caffer',
    description: 'Often considered the most dangerous of the Big Five, buffalos live in large herds and have excellent memories.',
    habitat: 'Grasslands, floodplains',
    bestPlaces: ['Kruger', 'Serengeti', 'Okavango'],
    image: '/wildlife_buffalo.jpg'
  },
  {
    name: 'Cheetah',
    scientific: 'Acinonyx jubatus',
    description: 'The fastest land animal, cheetahs can reach speeds of 70 mph. They are most active during the day.',
    habitat: 'Open grasslands',
    bestPlaces: ['Masai Mara', 'Serengeti', 'Okonjima'],
    image: '/wildlife_cheetah.jpg'
  },
  {
    name: 'Giraffe',
    scientific: 'Giraffa camelopardalis',
    description: 'The tallest land animal, giraffes are gentle giants that spend most of their day feeding on acacia leaves.',
    habitat: 'Savannas, woodlands',
    bestPlaces: ['Everywhere!'],
    image: '/wildlife_giraffe.jpg'
  },
  {
    name: 'Hippopotamus',
    scientific: 'Hippopotamus amphibius',
    description: 'Despite their docile appearance, hippos are one of Africa\'s most dangerous animals. They spend days in water and graze at night.',
    habitat: 'Rivers, lakes, swamps',
    bestPlaces: ['Chobe River', 'Ngorongoro', 'Zambezi'],
    image: '/wildlife_hippo.jpg'
  },
]

export default function Wildlife() {
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
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src="/wildlife_hero.jpg" 
          alt="African wildlife" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="eyebrow mb-4 text-[#D4A03A]">Discover</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            African Wildlife
          </h1>
          <p className="text-white/80 max-w-2xl">
            Meet the incredible animals that call Africa home, from the iconic Big Five to rare and endangered species.
          </p>
        </div>
      </section>

      {/* Big Five */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">The Iconic</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              The Big Five
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Originally named for being the most dangerous animals to hunt on foot, 
              the Big Five are now the most sought-after animals to photograph.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals.slice(0, 5).map((animal, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 group"
              >
                <div className="relative h-80 rounded-3xl overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/50 text-xs italic mb-1">{animal.scientific}</p>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">
                      {animal.name}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2">
                      {animal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Wildlife */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">More to Discover</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#F7F2EA] mb-4">
              Beyond the Big Five
            </h2>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Africa is home to thousands of incredible species. Here are some other animals you might encounter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals.slice(5).map((animal, index) => (
              <div 
                key={index}
                className="fade-section opacity-0 translate-y-8 glass-card rounded-3xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#F7F2EA]/50 text-xs italic mb-1">{animal.scientific}</p>
                  <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-2">
                    {animal.name}
                  </h3>
                  <p className="text-[#F7F2EA]/60 text-sm mb-3">
                    {animal.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#D4A03A] text-xs">
                    <span>Best places:</span>
                    <span className="text-[#F7F2EA]/60">{animal.bestPlaces.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-4xl text-[#F7F2EA] mb-4">
            Ready to See These Animals?
          </h2>
          <p className="text-[#F7F2EA]/60 mb-8">
            Our expert guides know exactly where to find each species. Let us plan your perfect wildlife safari.
          </p>
          <Link to="/destinations" className="btn-primary inline-flex items-center gap-2">
            Plan Your Safari <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
