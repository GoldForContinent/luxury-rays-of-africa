export interface Package {
  id: string
  name: string
  type: 'family' | 'solo' | 'group' | 'honeymoon' | 'luxury' | 'migration' | 'adventure'
  duration: string
  price: number
  description: string
  includes: string[]
}

export interface Place {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
  bestTime: string
  packages: Package[]
}

export interface Country {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
  places: Place[]
}

export interface SafariType {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  icon: string
  idealFor: string[]
  priceRange: string
  duration: string
  image: string
  highlights: string[]
  included: string[]
}

export interface PricingTier {
  id: string
  name: string
  description: string
  priceRange: string
  features: string[]
}

export const safariTypes: SafariType[] = [
  {
    id: 'budget',
    name: 'Budget Safari',
    slug: 'budget-safari',
    shortDescription: 'Experience the wild without breaking the bank',
    description: "Our budget-friendly safaris prove that incredible wildlife encounters don't require a luxury price tag. Perfect for students, backpackers, and adventurous travelers seeking authentic African experiences at accessible prices.",
    icon: 'backpack',
    idealFor: ['Solo travelers', 'Backpackers', 'Students', 'Young adventurers'],
    priceRange: '$800 - $1,500',
    duration: '3-7 days',
    image: '/safari-types/budget.jpg',
    highlights: ['Community campsites', 'Public game drives', 'Local guides', 'Cultural immersion', ' authentic experiences'],
    included: ['Park fees', 'Basic accommodation', 'Meals included', 'Transportation', 'Expert guides']
  },
  {
    id: 'midrange',
    name: 'Mid-Range Safari',
    slug: 'mid-range-safari',
    shortDescription: 'The perfect balance of comfort and adventure',
    description: 'Our mid-range safaris offer exceptional value, combining comfortable accommodations with unforgettable wildlife experiences. Ideal for families and couples seeking quality without luxury prices.',
    icon: 'tent',
    idealFor: ['Families', 'Couples', 'First-time safari-goers', 'Photography enthusiasts'],
    priceRange: '$1,500 - $3,500',
    duration: '4-10 days',
    image: '/safari-types/midrange.jpg',
    highlights: ['Lodge accommodation', 'Private game drives', 'Experienced rangers', 'Bush walks', 'Sundowners'],
    included: ['All park fees', 'Quality lodges', 'All meals', 'Private vehicle option', 'Professional guide']
  },
  {
    id: 'luxury',
    name: 'Luxury Safari',
    slug: 'luxury-safari',
    shortDescription: 'Five-star comfort in the heart of the wild',
    description: 'Indulge in the finest safari experience with world-class accommodations, private chefs, exclusive access, and personalized service. For those who demand nothing but the extraordinary.',
    icon: 'star',
    idealFor: ['Honeymooners', 'Celebrations', 'Discerning travelers', 'Private groups'],
    priceRange: '$3,500 - $8,000',
    duration: '5-14 days',
    image: '/safari-types/luxury.jpg',
    highlights: ['Luxury camps & lodges', 'Private concessions', 'Butler service', 'Gourmet dining', 'Exclusive activities'],
    included: ['Private charter flights', 'Luxury accommodation', 'All meals & premium drinks', 'Private guide & vehicle', 'Spa treatments']
  },
  {
    id: 'family',
    name: 'Family Safari',
    slug: 'family-safari',
    shortDescription: 'Create lifelong memories with the whole family',
    description: 'Designed with families in mind, our safaris offer safe, engaging experiences for all ages. Child-friendly activities, educational programs, and flexible itineraries ensure everyone has the adventure of a lifetime.',
    icon: 'users',
    idealFor: ['Families with children', 'Multi-generational trips', 'School holidays', 'First-time African visitors'],
    priceRange: '$2,000 - $5,000',
    duration: '5-12 days',
    image: '/safari-types/family.jpg',
    highlights: ['Kid-friendly activities', 'Junior ranger programs', 'Educational game drives', 'Safe environments', 'Flexible pacing'],
    included: ['Family accommodations', 'Child-appropriate meals', 'Professional family guides', 'Educational materials', 'Babysitting options']
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Safari',
    slug: 'honeymoon-safari',
    shortDescription: 'Romance under the African stars',
    description: 'Begin your married life with an unforgettable African adventure. Combine thrilling wildlife encounters with intimate moments, candlelit dinners in the bush, and memories that will last a lifetime.',
    icon: 'heart',
    idealFor: ['Newlyweds', 'Anniversary celebrations', 'Romantic getaways', 'Special occasions'],
    priceRange: '$4,000 - $10,000',
    duration: '7-14 days',
    image: '/safari-types/honeymoon.jpg',
    highlights: ['Private candlelit dinners', 'Couple\'s spa treatments', 'Romantic sundowners', 'Exclusive camps', 'Star bed experiences'],
    included: ['Luxury accommodation', 'Private vehicle', 'Personal chef', 'Romantic surprises', 'Bush flights']
  },
  {
    id: 'group',
    name: 'Group Safari',
    slug: 'group-safari',
    shortDescription: 'Adventure is better shared',
    description: 'Travel with friends, colleagues, or fellow enthusiasts on a custom group safari. Our group packages offer great value, fosters camaraderie, and create bonds through shared extraordinary experiences.',
    icon: 'users-round',
    idealFor: ['Friend groups', 'Corporate retreats', 'Photography clubs', 'Adventure groups'],
    priceRange: '$1,800 - $4,500',
    duration: '5-12 days',
    image: '/safari-types/group.jpg',
    highlights: ['Exclusive group pricing', 'Custom itineraries', 'Private vehicles', 'Group activities', 'Team building options'],
    included: ['Group discount rates', 'Dedicated guide', 'Private camp option', 'Group transfers', 'Team activities']
  }
]

export const pricingTiers: PricingTier[] = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'For the budget-conscious explorer',
    priceRange: '$800 - $1,500 per person',
    features: [
      'Community campsites or budget lodges',
      'Shared game drives with other travelers',
      'Basic meals included',
      'Experienced local guides',
      'Park entrance fees',
      'Ground transportation',
      'Cultural village visits'
    ]
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'The perfect safari experience',
    priceRange: '$1,500 - $3,500 per person',
    features: [
      'Quality lodge or tented camp accommodation',
      'Private game drives available',
      'All meals included',
      'Professional safari guide',
      'All park fees',
      'Bush walks and sundowners',
      'Optional hot air balloon'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Ultimate luxury and exclusivity',
    priceRange: '$3,500 - $8,000 per person',
    features: [
      'Luxury camps and lodges',
      'Private concessions',
      'Private guide and vehicle',
      'Gourmet dining',
      'Premium drinks included',
      'Spa treatments',
      'Helicopter scenic flights'
    ]
  },
  {
    id: 'bespoke',
    name: 'Bespoke',
    description: 'Your dream safari, exactly as imagined',
    priceRange: '$5,000+ per person',
    features: [
      'Completely custom itinerary',
      'Private charter flights',
      'Ultra-luxury exclusive camps',
      'Personal butler service',
      'Concierge support',
      'Special celebrations arranged',
      'Extended stays and extensions'
    ]
  }
]

export const featuredPackages = [
  {
    id: 'great-migration',
    name: 'Great Migration Spectacle',
    tagline: 'Witness nature\'s greatest show',
    duration: '7 Days / 6 Nights',
    price: 4200,
    destination: 'Serengeti, Tanzania',
    highlights: ['River crossing viewing', 'Mobile tented camp', 'Expert wildlife guides', 'Photography opportunities'],
    image: '/packages/great-migration.jpg',
    includes: ['Internal flights', 'All meals', 'Park fees', 'Game drives', 'Bush dinners']
  },
  {
    id: 'gorilla-trekking',
    name: 'Mountain Gorilla Encounter',
    tagline: 'An intimate moment with giants',
    duration: '4 Days / 3 Nights',
    price: 3800,
    destination: 'Bwindi, Uganda',
    highlights: ['Gorilla trekking permit', 'Expert trackers', 'Luxury forest lodge', 'Cultural village visit'],
    image: '/packages/gorilla-trekking.jpg',
    includes: ['Park fees', 'All meals', 'Accommodation', 'Permits', 'Guides']
  },
  {
    id: 'big-five',
    name: 'Big Five Safari',
    tagline: 'Classic African wildlife adventure',
    duration: '6 Days / 5 Nights',
    price: 3200,
    destination: 'Masai Mara, Kenya',
    highlights: ['All Big Five species', 'Luxury tented camp', 'Hot air balloon option', 'Maasai cultural visit'],
    image: '/packages/big-five.jpg',
    includes: ['Game drives', 'All meals', 'Park fees', 'Accommodation', 'Transfers']
  },
  {
    id: 'okavango-water',
    name: 'Okavango Delta Explorer',
    tagline: 'Africa\'s last paradise',
    duration: '5 Days / 4 Nights',
    price: 5800,
    destination: 'Okavango, Botswana',
    highlights: ['Mokoro canoe rides', 'Luxury water camp', 'Scenic flight', 'Water wildlife'],
    image: '/packages/okavango.jpg',
    includes: ['Scenic flights', 'Mokoro excursions', 'All meals', 'Park fees', 'Guides']
  },
  {
    id: 'victoria-falls',
    name: 'Victoria Falls Adventure',
    tagline: 'The smoke that thunders',
    duration: '5 Days / 4 Nights',
    price: 2800,
    destination: 'Victoria Falls, Zimbabwe',
    highlights: ['Falls viewing', 'Adventure activities', 'Zambezi sunset cruise', 'Hwange safari'],
    image: '/packages/victoria-falls.jpg',
    includes: ['Accommodation', 'Falls tour', 'Sunset cruise', 'Safari day trip', 'Transfers']
  },
  {
    id: 'cape-winelands',
    name: 'Cape & Winelands Experience',
    tagline: 'City, coast, and vineyards',
    duration: '6 Days / 5 Nights',
    price: 2400,
    destination: 'Cape Town, South Africa',
    highlights: ['Table Mountain', 'Cape Peninsula', 'Wine tasting', 'Robben Island'],
    image: '/packages/cape-town.jpg',
    includes: ['Accommodation', 'Daily breakfast', 'Guided tours', 'Wine tastings', 'Transfers']
  }
]

export const destinations: Country[] = [
  {
    id: 'kenya',
    name: 'Kenya',
    description: 'The birthplace of safari, Kenya offers unparalleled wildlife viewing, from the iconic Masai Mara to the elephant herds of Amboseli. Experience the Great Migration, meet the Maasai people, and witness Africa\'s most famous landscapes.',
    image: '/kenya_hero.jpg',
    highlights: ['Great Migration', 'Big Five', 'Maasai Culture', 'Beautiful Beaches'],
    places: [
      {
        id: 'masai-mara',
        name: 'Masai Mara',
        description: 'The world-famous Masai Mara National Reserve is home to the Great Migration, where millions of wildebeest and zebras cross the Mara River. It offers the highest concentration of big cats in Africa.',
        image: '/masai_mara.jpg',
        highlights: ['Great Migration', 'Big Cat Viewing', 'Hot Air Balloon Safaris', 'Maasai Village Visits'],
        bestTime: 'July to October for migration; January to February for calving',
        packages: [
          {
            id: 'masai-family',
            name: 'Family Safari Adventure',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 3200,
            description: 'Perfect for families with children aged 6+. Includes child-friendly activities, educational game drives, and comfortable family tents.',
            includes: ['Airport transfers', 'All meals', 'Game drives', 'Maasai village visit', 'Childcare services']
          },
          {
            id: 'masai-solo',
            name: 'Solo Explorer Package',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 2400,
            description: 'Designed for solo travelers seeking adventure and wildlife. Join small group game drives and meet like-minded travelers.',
            includes: ['Airport transfers', 'All meals', 'Shared game drives', 'Single accommodation', 'Guide services']
          },
          {
            id: 'masai-group',
            name: 'Group Migration Experience',
            type: 'group',
            duration: '6 Days / 5 Nights',
            price: 2800,
            description: 'Ideal for groups of 4-12 people. Witness the Great Migration together with exclusive use of vehicles.',
            includes: ['Private vehicle', 'All meals', 'Professional guide', 'Park fees', 'Bush dinner']
          }
        ]
      },
      {
        id: 'amboseli',
        name: 'Amboseli National Park',
        description: 'Famous for its large elephant herds and stunning views of Mount Kilimanjaro, Amboseli offers incredible photography opportunities and diverse wildlife.',
        image: '/amboseli.jpg',
        highlights: ['Elephant Herds', 'Mt. Kilimanjaro Views', 'Bird Watching', 'Photography'],
        bestTime: 'June to October and January to February',
        packages: [
          {
            id: 'amboseli-family',
            name: 'Family Elephant Experience',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 2600,
            description: 'Get up close with elephants while enjoying family-friendly accommodations and activities.',
            includes: ['Airport transfers', 'All meals', 'Game drives', 'Elephant research visit', 'Family tent']
          },
          {
            id: 'amboseli-solo',
            name: 'Photography Safari',
            type: 'solo',
            duration: '5 Days / 4 Nights',
            price: 2900,
            description: 'Perfect for photography enthusiasts. Capture elephants with Kilimanjaro backdrop.',
            includes: ['Photography guide', 'All meals', 'Private vehicle', 'Accommodation', 'Park fees']
          },
          {
            id: 'amboseli-group',
            name: 'Group Mountain View Safari',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 2200,
            description: 'Share the magic of Amboseli with friends or family groups.',
            includes: ['Group transfers', 'All meals', 'Game drives', 'Sundowner experience', 'Park fees']
          }
        ]
      },
      {
        id: 'samburu',
        name: 'Samburu National Reserve',
        description: 'A rugged and semi-arid wilderness in northern Kenya, home to unique wildlife species found only in this region including the Samburu Special Five.',
        image: '/samburu.jpg',
        highlights: ['Samburu Special Five', 'Rare Wildlife', 'Cultural Experience', 'Remote Wilderness'],
        bestTime: 'June to October and December to March',
        packages: [
          {
            id: 'samburu-family',
            name: 'Family Cultural Safari',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 3400,
            description: 'Combine wildlife viewing with authentic Samburu cultural experiences.',
            includes: ['Transfers', 'All meals', 'Game drives', 'Cultural visit', 'Camel safari']
          },
          {
            id: 'samburu-solo',
            name: 'Solo Wilderness Escape',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 2600,
            description: 'Experience the remote wilderness of northern Kenya on a solo adventure.',
            includes: ['Transfers', 'All meals', 'Game drives', 'Bush walks', 'Accommodation']
          },
          {
            id: 'samburu-group',
            name: 'Group Northern Adventure',
            type: 'group',
            duration: '6 Days / 5 Nights',
            price: 3000,
            description: 'Explore the unique landscapes and wildlife of Samburu as a group.',
            includes: ['Private vehicle', 'All meals', 'Expert guide', 'Park fees', 'Special activities']
          }
        ]
      },
      {
        id: 'diani',
        name: 'Diani Beach',
        description: 'Kenya\'s most beautiful beach destination, perfect for combining safari with relaxation on pristine white sands and turquoise waters.',
        image: '/diani.jpg',
        highlights: ['White Sand Beaches', 'Water Sports', 'Marine Life', 'Relaxation'],
        bestTime: 'November to March for best beach weather',
        packages: [
          {
            id: 'diani-family',
            name: 'Family Beach & Bush',
            type: 'family',
            duration: '7 Days / 6 Nights',
            price: 4200,
            description: 'Combine 3 days safari with 4 days beach relaxation for the perfect family holiday.',
            includes: ['All transfers', 'Safari accommodation', 'Beach resort', 'All meals', 'Water activities']
          },
          {
            id: 'diani-solo',
            name: 'Solo Beach Escape',
            type: 'solo',
            duration: '5 Days / 4 Nights',
            price: 1800,
            description: 'Relax and rejuvenate on Kenya\'s most beautiful beach.',
            includes: ['Airport transfer', 'Beach resort', 'Breakfast & dinner', 'Spa treatment', 'Water sports']
          },
          {
            id: 'diani-group',
            name: 'Group Beach Holiday',
            type: 'group',
            duration: '6 Days / 5 Nights',
            price: 2200,
            description: 'Perfect for friend groups looking for sun, sea, and adventure.',
            includes: ['Group transfers', 'Beach resort', 'All meals', 'Boat trip', 'Beach activities']
          }
        ]
      }
    ]
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    description: 'Home to the Serengeti and Ngorongoro Crater, Tanzania offers the ultimate safari experience. From the endless plains to the spice islands of Zanzibar, discover Africa\'s most iconic destinations.',
    image: '/tanzania_hero.jpg',
    highlights: ['Serengeti', 'Ngorongoro Crater', 'Mount Kilimanjaro', 'Zanzibar'],
    places: [
      {
        id: 'serengeti',
        name: 'Serengeti National Park',
        description: 'The crown jewel of Tanzania\'s safari circuit, the Serengeti is famous for its endless plains and the annual Great Migration of over 1.5 million wildebeest.',
        image: '/serengeti.jpg',
        highlights: ['Great Migration', 'Big Five', 'Endless Plains', 'Luxury Camps'],
        bestTime: 'June to October for migration; December to March for calving',
        packages: [
          {
            id: 'serengeti-family',
            name: 'Family Migration Safari',
            type: 'family',
            duration: '6 Days / 5 Nights',
            price: 4800,
            description: 'Experience the Great Migration with your family in comfort and safety.',
            includes: ['Internal flights', 'Luxury camp', 'All meals', 'Game drives', 'Family activities']
          },
          {
            id: 'serengeti-solo',
            name: 'Solo Serengeti Adventure',
            type: 'solo',
            duration: '5 Days / 4 Nights',
            price: 3600,
            description: 'Immerse yourself in the Serengeti\'s magic on a solo journey.',
            includes: ['Flights', 'Tented camp', 'All meals', 'Game drives', 'Hot air balloon option']
          },
          {
            id: 'serengeti-group',
            name: 'Group Migration Camp',
            type: 'group',
            duration: '7 Days / 6 Nights',
            price: 4200,
            description: 'Mobile camp that follows the migration with your private group.',
            includes: ['Private camp', 'All meals', 'Expert guides', 'Park fees', 'Bush dinners']
          }
        ]
      },
      {
        id: 'ngorongoro',
        name: 'Ngorongoro Crater',
        description: 'The world\'s largest inactive volcanic caldera, Ngorongoro is a natural wonder teeming with wildlife in a unique self-contained ecosystem.',
        image: '/ngorongoro.jpg',
        highlights: ['Crater Floor Game Drives', 'High Wildlife Density', 'Maasai Villages', 'Stunning Views'],
        bestTime: 'June to October for best visibility',
        packages: [
          {
            id: 'ngorongoro-family',
            name: 'Family Crater Safari',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 3400,
            description: 'Perfect for families wanting guaranteed wildlife sightings.',
            includes: ['Transfers', 'Crater lodge', 'All meals', 'Crater tours', 'Cultural visit']
          },
          {
            id: 'ngorongoro-solo',
            name: 'Solo Crater Explorer',
            type: 'solo',
            duration: '3 Days / 2 Nights',
            price: 2200,
            description: 'Intimate crater experience with excellent guiding.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Crater descent', 'Guiding']
          },
          {
            id: 'ngorongoro-group',
            name: 'Group Crater Adventure',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 2800,
            description: 'Explore the crater\'s wonders with your group.',
            includes: ['Private vehicle', 'Lodge', 'All meals', 'Crater fees', 'Guide']
          }
        ]
      },
      {
        id: 'zanzibar',
        name: 'Zanzibar',
        description: 'The Spice Island offers pristine beaches, historic Stone Town, and a unique blend of African, Arab, and Indian cultures. Perfect for post-safari relaxation.',
        image: '/zanzibar.jpg',
        highlights: ['White Sand Beaches', 'Stone Town', 'Spice Tours', 'Water Sports'],
        bestTime: 'June to October and December to February',
        packages: [
          {
            id: 'zanzibar-family',
            name: 'Family Island Escape',
            type: 'family',
            duration: '6 Days / 5 Nights',
            price: 3200,
            description: 'Beach holiday with family-friendly activities and excursions.',
            includes: ['Flights from Dar', 'Beach resort', 'Half board', 'Spice tour', 'Prison Island']
          },
          {
            id: 'zanzibar-solo',
            name: 'Solo Spice Island',
            type: 'solo',
            duration: '5 Days / 4 Nights',
            price: 1800,
            description: 'Relax and explore Zanzibar at your own pace.',
            includes: ['Transfers', 'Boutique hotel', 'Breakfast', 'Stone Town tour', 'Beach access']
          },
          {
            id: 'zanzibar-group',
            name: 'Group Beach & Culture',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 2200,
            description: 'Share the magic of Zanzibar with friends.',
            includes: ['Group transfers', 'Resort', 'All meals', 'Sunset cruise', 'Spice tour']
          }
        ]
      },
      {
        id: 'kilimanjaro',
        name: 'Mount Kilimanjaro',
        description: 'Africa\'s highest peak and the world\'s tallest free-standing mountain. A bucket-list trek through diverse ecosystems to the snow-capped summit.',
        image: '/kilimanjaro.jpg',
        highlights: ['Uhuru Peak', 'Diverse Ecosystems', 'Achievement', 'Stunning Views'],
        bestTime: 'January to March and June to October',
        packages: [
          {
            id: 'kili-family',
            name: 'Family Kilimanjaro Experience',
            type: 'family',
            duration: '7 Days / 6 Nights',
            price: 2800,
            description: 'Day hikes and base camp experiences for families with teens.',
            includes: ['Transfers', 'Lodge', 'Day hikes', 'Guide', 'Equipment']
          },
          {
            id: 'kili-solo',
            name: 'Solo Summit Trek',
            type: 'solo',
            duration: '8 Days / 7 Nights',
            price: 3200,
            description: 'Join a group trek to the roof of Africa.',
            includes: ['Transfers', 'Mountain fees', 'All meals on trek', 'Guide & porters', 'Equipment']
          },
          {
            id: 'kili-group',
            name: 'Group Summit Adventure',
            type: 'group',
            duration: '8 Days / 7 Nights',
            price: 2900,
            description: 'Trek to the summit together as a team.',
            includes: ['Private group', 'All fees', 'Full board', 'Expert guides', 'Celebration dinner']
          }
        ]
      }
    ]
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    description: 'A world in one country, South Africa offers diverse safari experiences, from the famous Kruger National Park to private reserves, combined with vibrant cities and stunning coastlines.',
    image: '/southafrica_hero.jpg',
    highlights: ['Kruger National Park', 'Private Reserves', 'Cape Town', 'Garden Route'],
    places: [
      {
        id: 'kruger',
        name: 'Kruger National Park',
        description: 'One of Africa\'s largest game reserves, Kruger offers exceptional wildlife viewing with excellent infrastructure and diverse accommodation options.',
        image: '/kruger.jpg',
        highlights: ['Big Five', 'Self-Drive Options', 'Luxury Lodges', 'Excellent Infrastructure'],
        bestTime: 'May to September for best game viewing',
        packages: [
          {
            id: 'kruger-family',
            name: 'Family Kruger Safari',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 2800,
            description: 'Family-friendly safari with educational activities for kids.',
            includes: ['Transfers', 'Family lodge', 'All meals', 'Game drives', 'Junior ranger program']
          },
          {
            id: 'kruger-solo',
            name: 'Solo Kruger Explorer',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 1900,
            description: 'Flexible solo safari with options for group activities.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Game drives', 'Optional walks']
          },
          {
            id: 'kruger-group',
            name: 'Group Private Reserve',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 3400,
            description: 'Exclusive private reserve experience for groups.',
            includes: ['Private lodge', 'All meals', 'Private vehicle', 'Guide', 'Bush walks']
          }
        ]
      },
      {
        id: 'sabi-sands',
        name: 'Sabi Sands Game Reserve',
        description: 'The most famous private reserve bordering Kruger, known for exceptional leopard sightings and ultra-luxury lodges.',
        image: '/sabi_sands.jpg',
        highlights: ['Leopard Capital', 'Luxury Lodges', 'Off-Road Driving', 'Night Drives'],
        bestTime: 'May to September',
        packages: [
          {
            id: 'sabi-family',
            name: 'Family Luxury Safari',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 5200,
            description: 'Ultra-luxury family safari with dedicated guides.',
            includes: ['Transfers', 'Luxury lodge', 'All meals', 'Private vehicle', 'Childcare']
          },
          {
            id: 'sabi-solo',
            name: 'Solo Leopard Safari',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 4200,
            description: 'Focus on leopard viewing in the world\'s best location.',
            includes: ['Transfers', 'Luxury lodge', 'All meals', 'Game drives', 'Photography sessions']
          },
          {
            id: 'sabi-group',
            name: 'Group Exclusive Safari',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 5800,
            description: 'Exclusive use of luxury camp for your group.',
            includes: ['Private camp', 'All meals', 'Dedicated guides', 'Open vehicle', 'All drinks']
          }
        ]
      },
      {
        id: 'cape-town',
        name: 'Cape Town',
        description: 'One of the world\'s most beautiful cities, offering Table Mountain, pristine beaches, world-class dining, and access to the Cape Winelands.',
        image: '/cape_town.jpg',
        highlights: ['Table Mountain', 'Robben Island', 'V&A Waterfront', 'Cape Point'],
        bestTime: 'November to March for best weather',
        packages: [
          {
            id: 'cape-family',
            name: 'Family Cape Adventure',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 2400,
            description: 'Family-friendly exploration of Cape Town and surrounds.',
            includes: ['Airport transfers', 'Hotel', 'Breakfast', 'Table Mountain', 'Peninsula tour']
          },
          {
            id: 'cape-solo',
            name: 'Solo Cape Explorer',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 1600,
            description: 'Discover Cape Town at your own pace.',
            includes: ['Transfers', 'Boutique hotel', 'Breakfast', 'City tour', 'Winelands day trip']
          },
          {
            id: 'cape-group',
            name: 'Group Cape Experience',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 2000,
            description: 'Share the beauty of Cape Town with friends.',
            includes: ['Group transfers', 'Hotel', 'Breakfast', 'Private tours', 'Wine tasting']
          }
        ]
      }
    ]
  },
  {
    id: 'botswana',
    name: 'Botswana',
    description: 'Africa\'s premier luxury safari destination, Botswana offers exclusive wilderness experiences in the Okavango Delta and Chobe National Park with strict low-impact tourism policies.',
    image: '/botswana_hero.jpg',
    highlights: ['Okavango Delta', 'Chobe National Park', 'Mokoro Safaris', 'Luxury Camps'],
    places: [
      {
        id: 'okavango',
        name: 'Okavango Delta',
        description: 'The world\'s largest inland delta, a UNESCO World Heritage site offering unique water-based safaris and incredible wildlife diversity.',
        image: '/okavango.jpg',
        highlights: ['Mokoro Canoe Safaris', 'Water Wildlife', 'Luxury Camps', 'Scenic Flights'],
        bestTime: 'May to October when water levels are high',
        packages: [
          {
            id: 'okavango-family',
            name: 'Family Water Safari',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 5800,
            description: 'Unique water-based safari experience for families.',
            includes: ['Scenic flight', 'Luxury camp', 'All meals', 'Mokoro rides', 'Game drives']
          },
          {
            id: 'okavango-solo',
            name: 'Solo Delta Escape',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 4600,
            description: 'Intimate delta experience with mokoro and walking safaris.',
            includes: ['Flight transfer', 'Camp', 'All meals', 'Mokoro', 'Walking safaris']
          },
          {
            id: 'okavango-group',
            name: 'Group Private Camp',
            type: 'group',
            duration: '6 Days / 5 Nights',
            price: 6200,
            description: 'Exclusive camp for your group in the heart of the delta.',
            includes: ['Private camp', 'All meals', 'Boat & vehicle', 'Guides', 'Scenic flight']
          }
        ]
      },
      {
        id: 'chobe',
        name: 'Chobe National Park',
        description: 'Famous for having Africa\'s largest elephant population, Chobe offers exceptional game viewing along the Chobe River.',
        image: '/chobe.jpg',
        highlights: ['Elephant Herds', 'River Safaris', 'Sunset Cruises', 'Predator Viewing'],
        bestTime: 'May to October',
        packages: [
          {
            id: 'chobe-family',
            name: 'Family Elephant Safari',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 3200,
            description: 'See thousands of elephants on this family adventure.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Game drives', 'River cruise']
          },
          {
            id: 'chobe-solo',
            name: 'Solo Chobe Explorer',
            type: 'solo',
            duration: '3 Days / 2 Nights',
            price: 2200,
            description: 'Compact Chobe experience with excellent guiding.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Drives & cruise', 'Guide']
          },
          {
            id: 'chobe-group',
            name: 'Group River Safari',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 2800,
            description: 'Experience Chobe\'s wildlife by land and water.',
            includes: ['Private vehicle', 'Lodge', 'All meals', 'Sunset cruises', 'Park fees']
          }
        ]
      }
    ]
  },
  {
    id: 'uganda',
    name: 'Uganda',
    description: 'The Pearl of Africa offers unique primate experiences including gorilla and chimpanzee trekking, combined with classic savanna safaris and the source of the Nile.',
    image: '/uganda_hero.jpg',
    highlights: ['Gorilla Trekking', 'Chimpanzee Tracking', 'Murchison Falls', 'Source of Nile'],
    places: [
      {
        id: 'bwindi',
        name: 'Bwindi Impenetrable Forest',
        description: 'Home to half the world\'s mountain gorillas, Bwindi offers the life-changing experience of gorilla trekking in a lush rainforest setting.',
        image: '/bwindi.jpg',
        highlights: ['Gorilla Trekking', 'Bird Watching', 'Forest Hikes', 'Cultural Visits'],
        bestTime: 'June to August and December to February',
        packages: [
          {
            id: 'bwindi-family',
            name: 'Family Gorilla Experience',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 4200,
            description: 'Gorilla trekking for families with teens (minimum age 15).',
            includes: ['Transfers', 'Lodge', 'All meals', 'Gorilla permit', 'Cultural visit']
          },
          {
            id: 'bwindi-solo',
            name: 'Solo Gorilla Trek',
            type: 'solo',
            duration: '3 Days / 2 Nights',
            price: 3200,
            description: 'The ultimate bucket-list wildlife experience.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Gorilla permit', 'Guide']
          },
          {
            id: 'bwindi-group',
            name: 'Group Gorilla Safari',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 3800,
            description: 'Share the magic of gorilla trekking with friends.',
            includes: ['Group transfers', 'Lodge', 'All meals', 'Permits', 'Community visit']
          }
        ]
      },
      {
        id: 'queen-elizabeth',
        name: 'Queen Elizabeth National Park',
        description: 'Uganda\'s most popular park offers diverse ecosystems, tree-climbing lions, and classic game viewing along the Kazinga Channel.',
        image: '/queen_elizabeth.jpg',
        highlights: ['Tree-Climbing Lions', 'Kazinga Channel', 'Game Drives', 'Boat Cruises'],
        bestTime: 'January to February and June to July',
        packages: [
          {
            id: 'qe-family',
            name: 'Family Safari Adventure',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 2600,
            description: 'Classic safari experience perfect for families.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Game drives', 'Boat cruise']
          },
          {
            id: 'qe-solo',
            name: 'Solo Safari & Chimps',
            type: 'solo',
            duration: '5 Days / 4 Nights',
            price: 3200,
            description: 'Combine game viewing with chimpanzee tracking.',
            includes: ['Transfers', 'Lodges', 'All meals', 'Game drives', 'Chimp permit']
          },
          {
            id: 'qe-group',
            name: 'Group Wildlife Safari',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 2400,
            description: 'Explore Uganda\'s wildlife diversity as a group.',
            includes: ['Private vehicle', 'Lodge', 'All meals', 'Drives & cruise', 'Park fees']
          }
        ]
      }
    ]
  },
  {
    id: 'namibia',
    name: 'Namibia',
    description: 'A land of stark beauty and dramatic landscapes, Namibia offers unique desert-adapted wildlife, towering dunes, and some of Africa\'s darkest skies.',
    image: '/namibia_hero.jpg',
    highlights: ['Sossusvlei Dunes', 'Etosha National Park', 'Skeleton Coast', 'Dark Skies'],
    places: [
      {
        id: 'etosha',
        name: 'Etosha National Park',
        description: 'Centered around a vast salt pan, Etosha offers exceptional game viewing at waterholes, especially during the dry season.',
        image: '/etosha.jpg',
        highlights: ['Waterhole Game Viewing', 'Salt Pan', 'Self-Drive', 'Night Drives'],
        bestTime: 'May to October for best game viewing',
        packages: [
          {
            id: 'etosha-family',
            name: 'Family Etosha Safari',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 2800,
            description: 'Family-friendly safari with excellent waterhole viewing.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Game drives', 'Waterhole visits']
          },
          {
            id: 'etosha-solo',
            name: 'Solo Etosha Explorer',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 2000,
            description: 'Self-drive or guided safari experience.',
            includes: ['Vehicle rental', 'Lodges', 'Breakfast', 'Park fees', 'Map']
          },
          {
            id: 'etosha-group',
            name: 'Group Waterhole Safari',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 2600,
            description: 'Experience Etosha\'s famous waterholes together.',
            includes: ['Private vehicle', 'Lodges', 'All meals', 'Guide', 'Park fees']
          }
        ]
      },
      {
        id: 'sossusvlei',
        name: 'Sossusvlei',
        description: 'Home to the world\'s tallest sand dunes, Sossusvlei offers otherworldly landscapes and unique desert experiences.',
        image: '/sossusvlei.jpg',
        highlights: ['Dune 45', 'Deadvlei', 'Hot Air Balloon', 'Desert Wildlife'],
        bestTime: 'March to May for moderate temperatures',
        packages: [
          {
            id: 'sossus-family',
            name: 'Family Desert Adventure',
            type: 'family',
            duration: '3 Days / 2 Nights',
            price: 2200,
            description: 'Climb dunes and explore the desert as a family.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Dune visit', 'Nature drives']
          },
          {
            id: 'sossus-solo',
            name: 'Solo Dune Explorer',
            type: 'solo',
            duration: '3 Days / 2 Nights',
            price: 1800,
            description: 'Photography-focused desert experience.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Dune climb', 'Sunrise excursion']
          },
          {
            id: 'sossus-group',
            name: 'Group Desert Safari',
            type: 'group',
            duration: '3 Days / 2 Nights',
            price: 2000,
            description: 'Share the magic of the Namib Desert.',
            includes: ['Group transfers', 'Lodge', 'All meals', 'Dune activities', 'Guide']
          }
        ]
      }
    ]
  },
  {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    description: 'Home to Victoria Falls and excellent wildlife viewing, Zimbabwe offers authentic safari experiences with some of Africa\'s best-trained guides.',
    image: '/zimbabwe_hero.jpg',
    highlights: ['Victoria Falls', 'Hwange National Park', 'Mana Pools', 'Great Zimbabwe'],
    places: [
      {
        id: 'victoria-falls',
        name: 'Victoria Falls',
        description: 'One of the Seven Natural Wonders of the World, Victoria Falls offers adventure activities and serves as a gateway to regional safaris.',
        image: '/victoria_falls.jpg',
        highlights: ['The Falls', 'Adventure Activities', 'Sunset Cruises', 'Local Markets'],
        bestTime: 'February to May for fullest falls',
        packages: [
          {
            id: 'falls-family',
            name: 'Family Falls Adventure',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 2400,
            description: 'Experience the falls with family-friendly activities.',
            includes: ['Airport transfers', 'Hotel', 'Breakfast', 'Falls tour', 'Sunset cruise']
          },
          {
            id: 'falls-solo',
            name: 'Solo Falls Explorer',
            type: 'solo',
            duration: '3 Days / 2 Nights',
            price: 1400,
            description: 'Adventure-packed solo trip to the Smoke that Thunders.',
            includes: ['Transfers', 'Hotel', 'Breakfast', 'Falls visit', 'Activity of choice']
          },
          {
            id: 'falls-group',
            name: 'Group Adventure Package',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 2000,
            description: 'Share the adventure with friends at Victoria Falls.',
            includes: ['Group transfers', 'Hotel', 'Breakfast', 'Falls tour', 'Group activities']
          }
        ]
      },
      {
        id: 'hwange',
        name: 'Hwange National Park',
        description: 'Zimbabwe\'s largest park is famous for its elephant herds and offers excellent walking safaris with some of Africa\'s best guides.',
        image: '/hwange.jpg',
        highlights: ['Elephant Herds', 'Walking Safaris', 'Hide Viewing', 'Predator Sightings'],
        bestTime: 'July to October for best game viewing',
        packages: [
          {
            id: 'hwange-family',
            name: 'Family Elephant Safari',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 2800,
            description: 'See Hwange\'s famous elephants with your family.',
            includes: ['Transfers', 'Lodge', 'All meals', 'Game drives', 'Hide visits']
          },
          {
            id: 'hwange-solo',
            name: 'Solo Walking Safari',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 2400,
            description: 'Experience the bush on foot with expert guides.',
            includes: ['Transfers', 'Camp', 'All meals', 'Walks & drives', 'Guide']
          },
          {
            id: 'hwange-group',
            name: 'Group Safari Experience',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 3000,
            description: 'Explore Hwange\'s wilderness together.',
            includes: ['Private vehicle', 'Lodge', 'All meals', 'Drives & walks', 'Park fees']
          }
        ]
      }
    ]
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    description: 'The Land of a Thousand Hills offers premium gorilla trekking experiences, with strict conservation policies ensuring intimate wildlife encounters.',
    image: '/rwanda_hero.jpg',
    highlights: ['Gorilla Trekking', 'Golden Monkeys', 'Volcanoes National Park', 'Kigali'],
    places: [
      {
        id: 'volcanoes',
        name: 'Volcanoes National Park',
        description: 'Rwanda\'s premier attraction offering gorilla trekking in the Virunga Mountains, made famous by Dian Fossey.',
        image: '/volcanoes.jpg',
        highlights: ['Gorilla Trekking', 'Golden Monkeys', 'Dian Fossey Trek', 'Luxury Lodges'],
        bestTime: 'June to September for drier conditions',
        packages: [
          {
            id: 'volcanoes-family',
            name: 'Family Gorilla Safari',
            type: 'family',
            duration: '3 Days / 2 Nights',
            price: 4800,
            description: 'Premium gorilla experience for families (minimum age 15).',
            includes: ['Kigali transfers', 'Luxury lodge', 'All meals', 'Gorilla permit', 'Cultural visit']
          },
          {
            id: 'volcanoes-solo',
            name: 'Solo Gorilla Luxury',
            type: 'solo',
            duration: '3 Days / 2 Nights',
            price: 4200,
            description: 'Rwanda\'s world-class gorilla trekking experience.',
            includes: ['Kigali transfers', 'Luxury lodge', 'All meals', 'Gorilla permit', 'Guide']
          },
          {
            id: 'volcanoes-group',
            name: 'Group Gorilla Trek',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 5200,
            description: 'Share Rwanda\'s premier wildlife experience.',
            includes: ['Private transfers', 'Luxury lodge', 'All meals', 'Permits', 'Golden monkey trek']
          }
        ]
      }
    ]
  },
  {
    id: 'zambia',
    name: 'Zambia',
    description: 'Africa\'s best-kept secret offers exceptional walking safaris, Victoria Falls from the Zambian side, and pristine wilderness areas with fewer crowds.',
    image: '/zambia_hero.jpg',
    highlights: ['Victoria Falls', 'Walking Safaris', 'South Luangwa', 'Lower Zambezi'],
    places: [
      {
        id: 'south-luangwa',
        name: 'South Luangwa National Park',
        description: 'The birthplace of walking safaris, South Luangwa offers exceptional wildlife viewing and some of Africa\'s best leopard sightings.',
        image: '/south_luangwa.jpg',
        highlights: ['Walking Safaris', 'Leopard Viewing', 'Luangwa River', 'Night Drives'],
        bestTime: 'May to October for dry season',
        packages: [
          {
            id: 'luangwa-family',
            name: 'Family Walking Safari',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 3200,
            description: 'Introduction to walking safaris for families with teens.',
            includes: ['Transfers', 'Bush camp', 'All meals', 'Walking safaris', 'Game drives']
          },
          {
            id: 'luangwa-solo',
            name: 'Solo Walking Experience',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 2800,
            description: 'Immersive walking safari experience.',
            includes: ['Transfers', 'Bush camp', 'All meals', 'Walking focus', 'Expert guide']
          },
          {
            id: 'luangwa-group',
            name: 'Group Walking Safari',
            type: 'group',
            duration: '6 Days / 5 Nights',
            price: 3000,
            description: 'In-depth walking safari for groups.',
            includes: ['Private camp', 'All meals', 'Walking & drives', 'Guide', 'Park fees']
          }
        ]
      }
    ]
  },
  {
    id: 'lamu',
    name: 'Lamu Island',
    description: 'A UNESCO World Heritage site offering ancient Swahili culture, pristine beaches, and a peaceful escape from the modern world.',
    image: '/lamu_hero.jpg',
    highlights: ['Ancient Swahili Town', 'Pristine Beaches', 'Dhow Sailing', 'Cultural Experience'],
    places: [
      {
        id: 'lamu-town',
        name: 'Lamu Town',
        description: 'Kenya\'s oldest living town and UNESCO World Heritage site, offering authentic Swahili culture and architecture.',
        image: '/lamu_town.jpg',
        highlights: ['UNESCO Site', 'Swahili Culture', 'Dhow Building', 'Narrow Streets'],
        bestTime: 'August to March for best weather',
        packages: [
          {
            id: 'lamu-family',
            name: 'Family Cultural Experience',
            type: 'family',
            duration: '4 Days / 3 Nights',
            price: 2400,
            description: 'Discover Swahili culture as a family.',
            includes: ['Transfers', 'Historic hotel', 'All meals', 'Cultural tours', 'Beach time']
          },
          {
            id: 'lamu-solo',
            name: 'Solo Cultural Retreat',
            type: 'solo',
            duration: '5 Days / 4 Nights',
            price: 1800,
            description: 'Immersive cultural experience at your own pace.',
            includes: ['Transfers', 'Boutique hotel', 'Breakfast', 'Cultural tours', 'Dhow sailing']
          },
          {
            id: 'lamu-group',
            name: 'Group Island Adventure',
            type: 'group',
            duration: '4 Days / 3 Nights',
            price: 2200,
            description: 'Share Lamu\'s magic with friends.',
            includes: ['Group transfers', 'Hotel', 'All meals', 'Cultural experiences', 'Dhow cruise']
          }
        ]
      }
    ]
  },
  {
    id: 'nosy-be',
    name: 'Nosy Be Island',
    description: 'Madagascar\'s premier beach destination offering pristine beaches, marine life, and unique island experiences.',
    image: '/nosy_be_hero.jpg',
    highlights: ['Pristine Beaches', 'Marine Life', 'Island Hopping', 'Lemur Viewing'],
    places: [
      {
        id: 'nosy-be-main',
        name: 'Nosy Be Main Island',
        description: 'The main island offering beautiful beaches, water sports, and access to surrounding marine reserves.',
        image: '/nosy_be_main.jpg',
        highlights: ['Beaches', 'Water Sports', 'Local Markets', 'Island Tours'],
        bestTime: 'April to December for best weather',
        packages: [
          {
            id: 'nosy-family',
            name: 'Family Beach Adventure',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 2800,
            description: 'Beach holiday with marine activities for families.',
            includes: ['Transfers', 'Beach resort', 'All meals', 'Water sports', 'Island tours']
          },
          {
            id: 'nosy-solo',
            name: 'Solo Island Escape',
            type: 'solo',
            duration: '4 Days / 3 Nights',
            price: 2200,
            description: 'Relax and explore the islands at your own pace.',
            includes: ['Transfers', 'Boutique hotel', 'Breakfast', 'Island hopping', 'Snorkeling']
          },
          {
            id: 'nosy-group',
            name: 'Group Island Experience',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 2600,
            description: 'Share the island paradise with friends.',
            includes: ['Group transfers', 'Resort', 'All meals', 'Boat tours', 'Marine activities']
          }
        ]
      }
    ]
  },
  {
    id: 'mafia',
    name: 'Mafia Island',
    description: 'A pristine marine park offering exceptional diving, snorkeling, and a peaceful alternative to more crowded beach destinations.',
    image: '/mafia_hero.jpg',
    highlights: ['Marine Park', 'Diving Paradise', 'Whale Sharks', 'Peaceful Beaches'],
    places: [
      {
        id: 'mafia-main',
        name: 'Mafia Island Marine Park',
        description: 'Tanzania\'s first marine protected area offering world-class diving and pristine coral reefs.',
        image: '/mafia_marine.jpg',
        highlights: ['Marine Park', 'Diving', 'Whale Sharks', 'Coral Reefs'],
        bestTime: 'October to March for whale sharks',
        packages: [
          {
            id: 'mafia-family',
            name: 'Family Marine Adventure',
            type: 'family',
            duration: '5 Days / 4 Nights',
            price: 3200,
            description: 'Discover marine life as a family.',
            includes: ['Transfers', 'Beach lodge', 'All meals', 'Snorkeling', 'Island tours']
          },
          {
            id: 'mafia-solo',
            name: 'Solo Diving Experience',
            type: 'solo',
            duration: '6 Days / 5 Nights',
            price: 3600,
            description: 'World-class diving for solo travelers.',
            includes: ['Transfers', 'Dive resort', 'All meals', 'Diving package', 'Marine tours']
          },
          {
            id: 'mafia-group',
            name: 'Group Marine Safari',
            type: 'group',
            duration: '5 Days / 4 Nights',
            price: 3400,
            description: 'Share the marine paradise with friends.',
            includes: ['Group transfers', 'Resort', 'All meals', 'Diving & snorkeling', 'Boat trips']
          }
        ]
      }
    ]
  }
]

export function getCountryById(id: string): Country | undefined {
  return destinations.find(country => country.id === id)
}

export function getPlaceById(countryId: string, placeId: string): Place | undefined {
  const country = getCountryById(countryId)
  return country?.places.find(place => place.id === placeId)
}

export function getPackageById(countryId: string, placeId: string, packageId: string): Package | undefined {
  const place = getPlaceById(countryId, placeId)
  return place?.packages.find(pkg => pkg.id === packageId)
}

export function getSafariTypeById(id: string): SafariType | undefined {
  return safariTypes.find(type => type.id === id)
}

export function getFeaturedPackageById(id: string) {
  return featuredPackages.find(pkg => pkg.id === id)
}

// ============================================================================
// COMPLETE DATA INTEGRATION FROM RAYS DESTINATIONS
// This includes all extracted pricing and packages from Cheetah Safaris
// ============================================================================
import {
  kenyaDestination,
  tanzaniaDestination,
  ugandaDestination,
  botswanaDestination,
  southAfricaDestination,
  allDestinations as completeDestinations,
  allFeaturedPackages as completeFeaturedPackages
} from './raysDestinationsComplete'

// Export complete destinations (enhanced with full package data)
export const allDestinations = completeDestinations

// Export complete featured packages
export const allFeaturedPackages = completeFeaturedPackages

// Export by region for easier filtering
export const destinationsByRegion = {
  eastern: [kenyaDestination, tanzaniaDestination, ugandaDestination],
  southern: [botswanaDestination, southAfricaDestination]
}
