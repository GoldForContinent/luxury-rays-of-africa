/**
 * Complete Rays of Africa Safari Destinations Data
 * Extracted and rewritten from public competitive sources
 * All pricing, packages, and destinations are factual business information
 */

export interface Package {
  id: string
  name: string
  type: 'family' | 'solo' | 'group' | 'honeymoon' | 'luxury' | 'migration'
  duration: string
  price: number
  description: string
  includes: string[]
  excludes?: string[]
  bestTime?: string
  itinerary?: string | string[]
}

export interface Place {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
  bestTime: string
  wildlife: string[]
  packages: Package[]
}

export interface Country {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
  visaInfo?: string
  currency?: string
  places: Place[]
}

// KENYA DATA
export const kenyaDestination: Country = {
  id: 'kenya',
  name: 'Kenya',
  description: 'Discover the birthplace of safari where wildlife encounters define African adventures. Kenya\'s diverse landscapes range from the rolling plains of Masai Mara to Mount Kilimanjaro\'s distant snow-capped peaks. Immerse yourself in authentic Maasai culture while witnessing the Great Migration—nature\'s most spectacular annual event.',
  image: '/destinations/kenya.jpg',
  highlights: ['Great Migration', 'Big Five Wildlife', 'Maasai Culture', 'Pristine Beaches', 'World-Class Safaris'],
  visaInfo: 'Most nationalities can obtain a visa on arrival or apply online (eVisa)',
  currency: 'Kenyan Shilling (KES)',
  places: [
    {
      id: 'masai-mara',
      name: 'Masai Mara National Reserve',
      description: 'Africa\'s most renowned wildlife sanctuary, covering 1,500 square kilometers of pristine wilderness. Famous for the annual Great Migration where millions of wildebeest and zebras traverse the Mara River seeking fresh grazing grounds. The reserve hosts the highest concentration of big cats on the continent.',
      image: '/destinations/masai-mara.jpg',
      highlights: ['Great Migration (Jul-Oct)', 'Big Cat Sightings', 'Hot Air Balloon Safaris', 'Maasai Village Visits', 'River Crossings'],
      bestTime: 'June to October for migration; November to March for calving season',
      wildlife: ['Lion', 'Leopard', 'Cheetah', 'Wildebeest', 'Zebra', 'Giraffe', 'Elephant', 'Buffalo'],
      packages: [
        {
          id: 'mara-classic-5d',
          name: 'Classic Mara Explorer',
          type: 'luxury',
          duration: '5 Days / 4 Nights',
          price: 6980,
          description: 'Experience the wildlife abundance of Masai Mara from a luxury tented camp. Daily game drives with experienced guides, hot air balloon safari, and cultural immersion with local Maasai communities.',
          includes: ['Luxury tented accommodation', 'Daily game drives', 'Hot air balloon safari', 'All meals and beverages', 'Park entrance fees', 'Professional safari guide', 'Airport transfers'],
          excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Tips to guides']
        },
        {
          id: 'mara-family-5d',
          name: 'Family Mara Adventure',
          type: 'family',
          duration: '5 Days / 4 Nights',
          price: 4200,
          description: 'Perfect for families seeking adventure. Kid-friendly accommodations, educational game drives, and age-appropriate cultural experiences. Junior guide programs available.',
          includes: ['Family bungalows', 'Daily game drives', 'Kids activities', 'All meals', 'Park fees', 'Family guide'],
          excludes: ['International flights', 'Travel insurance', 'Special dietary meals', 'Tips']
        },
        {
          id: 'mara-group-7d',
          name: 'Group Migration Camp',
          type: 'group',
          duration: '7 Days / 6 Nights',
          price: 5400,
          description: 'Mobile camp experience following the Great Migration. Perfect for groups of 4-15 people seeking shared adventure and camaraderie under African skies.',
          includes: ['Mobile tented camp', 'Expert tracking guides', 'Migration route drives', 'All meals', 'Group activities', 'Bush dinners'],
          excludes: ['Flights', 'Visas', 'Travel insurance', 'Personal expenses']
        },
        {
          id: 'mara-honeymoon-6d',
          name: 'Romantic Mara Escape',
          type: 'honeymoon',
          duration: '6 Days / 5 Nights',
          price: 7800,
          description: 'Celebrate love under the African stars. Private vehicles, candlelit dinners, couples spa treatments, and exclusive experiences designed for honeymooners.',
          includes: ['Romance suite', 'Private vehicle', 'Special dinners', 'Spa treatments', 'All activities', 'Champagne setup'],
          excludes: ['Flights', 'Travel insurance', 'Special requests', 'Gratuities']
        }
      ]
    },
    {
      id: 'amboseli',
      name: 'Amboseli National Park',
      description: 'Home to Kenya\'s largest elephant population, this park stretches across 390 square kilometers with stunning Mount Kilimanjaro as backdrop. Amboseli\'s unique ecosystem supports thriving wildlife populations creating dramatic photography opportunities.',
      image: '/destinations/amboseli.jpg',
      highlights: ['Large Elephant Herds', 'Mount Kilimanjaro Views', 'Bird Watching Paradise', 'Photography Heaven', 'Swamp Ecosystems'],
      bestTime: 'June to October and January to March for dry seasons',
      wildlife: ['African Elephant', 'Lion', 'Zebra', 'Giraffe', 'Hartebeest', 'Secretary Bird', 'Crowned Eagle'],
      packages: [
        {
          id: 'amboseli-classic-4d',
          name: 'Kilimanjaro & Elephant Safari',
          type: 'luxury',
          duration: '4 Days / 3 Nights',
          price: 5200,
          description: 'Marvel at Kilimanjaro while observing massive elephant herds. Expert naturalists provide insights into elephant behavior. Includes hot air balloon experience.',
          includes: ['Premium lodge', 'Game drives', 'Hot air balloon ride', 'All meals', 'Park fees', 'Elephant research visit'],
          excludes: ['International flights', 'Travel insurance', 'Premium alcohol', 'Tips']
        },
        {
          id: 'amboseli-photo-5d',
          name: 'Photography Expedition',
          type: 'solo',
          duration: '5 Days / 4 Nights',
          price: 4800,
          description: 'Designed for photography enthusiasts. Longer game drives, photography guides, early morning and evening shoots, and flexible itineraries.',
          includes: ['Photo-friendly lodge', 'Photography guide', 'Extended drives', 'All meals', 'Park fees', 'Photography tips'],
          excludes: ['Flights', 'Travel insurance', 'Equipment rental', 'Professional editing']
        }
      ]
    }
  ]
}

// TANZANIA DATA
export const tanzaniaDestination: Country = {
  id: 'tanzania',
  name: 'Tanzania',
  description: 'Tanzania stands as Africa\'s ultimate safari destination, home to the legendary Serengeti and spectacular Ngorongoro Crater. This diverse nation offers unparalleled wildlife viewing, from endless migration spectacles to intimate volcanic ecosystems. Combine safari adventures with beach relaxation on Zanzibar\'s spice-scented shores.',
  image: '/destinations/tanzania.jpg',
  highlights: ['Serengeti National Park', 'Ngorongoro Crater', 'Mount Kilimanjaro', 'Zanzibar Islands', 'Great Migration'],
  visaInfo: 'Tanzanian visa available on arrival or online application',
  currency: 'Tanzanian Shilling (TZS)',
  places: [
    {
      id: 'serengeti',
      name: 'Serengeti National Park',
      description: 'The Serengeti, meaning "the place where the land runs on forever," is Africa\'s most iconic landscape. This 30,000 square kilometer wilderness hosts the planet\'s largest terrestrial mammal migration—1.5 million wildebeest, 250,000 zebras, and countless gazelles.',
      image: '/destinations/serengeti.jpg',
      highlights: ['Great Migration', 'Endless Plains', 'Big Five', 'Luxury Camps', 'Predator Action'],
      bestTime: 'June to October for migration; December to March for calving',
      wildlife: ['African Elephant', 'Lion', 'Leopard', 'Cheetah', 'Wildebeest', 'Zebra', 'Giraffe', 'Buffalo'],
      packages: [
        {
          id: 'serengeti-migration-8d',
          name: 'Great Migration Safari',
          type: 'luxury',
          duration: '8 Days / 7 Nights',
          price: 6980,
          description: 'Follow the Great Migration across Serengeti\'s endless plains. Witness one of nature\'s most dramatic events—millions of animals seeking fresh grazing lands. Mobile camps track the migration for optimal viewing.',
          includes: ['Mobile tented camps', 'Professional tracking guides', 'Daily game drives', 'Migration viewing', 'All meals', 'Bush dinners', 'Photography opportunities'],
          excludes: ['International flights', 'Travel insurance', 'Tips', 'Laundry service']
        },
        {
          id: 'serengeti-family-7d',
          name: 'Family Serengeti Adventure',
          type: 'family',
          duration: '7 Days / 6 Nights',
          price: 4800,
          description: 'Bring your family to witness nature\'s greatest spectacle. Climate-controlled vehicles, educational guides, and flexible schedules ensure comfort for all ages.',
          includes: ['Family lodges', 'Land cruiser with AC', 'Educational guides', 'Kids activities', 'All meals', 'Park fees'],
          excludes: ['Flights', 'Travel insurance', 'Special requests', 'Tips']
        },
        {
          id: 'serengeti-honeymoon-8d',
          name: 'Romantic Serengeti Journey',
          type: 'honeymoon',
          duration: '8 Days / 7 Nights',
          price: 8400,
          description: 'Romance blooms in Africa\'s greatest wilderness. Private camps, exclusive vehicles, candlelit dinners, and personalized service create unforgettable memories.',
          includes: ['Private camps', 'Romance suites', 'Private vehicle', 'Champagne', 'Candlelit dinners', 'Spa services', 'Special surprises'],
          excludes: ['Flights', 'Travel insurance', 'Extra activities', 'Premium alcohol']
        }
      ]
    },
    {
      id: 'ngorongoro',
      name: 'Ngorongoro Conservation Area',
      description: 'The Ngorongoro Crater represents one of Africa\'s most extraordinary natural wonders. This vast volcanic caldera, 19km in diameter, contains a self-contained ecosystem supporting over 25,000 large animals.',
      image: '/destinations/ngorongoro.jpg',
      highlights: ['Crater Floor Views', 'High Wildlife Density', 'Maasai Culture', 'Volcanic Landscape', 'Guaranteed Game Viewing'],
      bestTime: 'June to October for dry season; December to March for green season',
      wildlife: ['African Elephant', 'Lion', 'Leopard', 'Rhinoceros', 'Hippopotamus', 'Zebra', 'Wildebeest'],
      packages: [
        {
          id: 'ngoro-classic-4d',
          name: 'Ngorongoro Crater Explorer',
          type: 'luxury',
          duration: '4 Days / 3 Nights',
          price: 4200,
          description: 'Descend into the Ngorongoro Crater\'s pristine ecosystem. This self-contained world offers near-guaranteed wildlife encounters. Perfect for shorter itineraries.',
          includes: ['Crater lodge', 'Crater floor tours', 'All game drives', 'Maasai visit', 'All meals', 'Park fees', 'Professional guide'],
          excludes: ['Flights', 'Travel insurance', 'Tips', 'Premium accommodation']
        },
        {
          id: 'ngoro-family-4d',
          name: 'Family Crater Discovery',
          type: 'family',
          duration: '4 Days / 3 Nights',
          price: 3200,
          description: 'Ideal for families seeking guaranteed wildlife viewing and rich cultural experiences. Educational guides enhance children\'s learning.',
          includes: ['Family lodge', 'Crater tours', 'Meals', 'Cultural experiences', 'Educational materials', 'Family guide'],
          excludes: ['Flights', 'Travel insurance', 'Special requests', 'Tips']
        }
      ]
    }
  ]
}

// UGANDA DATA
export const ugandaDestination: Country = {
  id: 'uganda',
  name: 'Uganda',
  description: 'The Pearl of Africa, Uganda combines thrilling wildlife encounters with unique experiences found nowhere else. Uganda offers the world\'s best opportunity to encounter endangered mountain gorillas in their natural habitat. Beyond gorillas, the country features diverse landscapes offering distinctive wildlife experiences.',
  image: '/destinations/uganda.jpg',
  highlights: ['Mountain Gorillas', 'Chimpanzee Trekking', 'Wildlife Abundance', 'Diverse Landscapes', 'Cultural Authenticity'],
  visaInfo: 'Ugandan visa available on arrival; e-visa also available',
  currency: 'Ugandan Shilling (UGX)',
  places: [
    {
      id: 'bwindi',
      name: 'Bwindi Impenetrable National Park',
      description: 'This UNESCO World Heritage site harbors nearly half of the world\'s remaining mountain gorillas. Trekking through the misty forest to encounter these gentle giants ranks among the world\'s most profound wildlife experiences.',
      image: '/destinations/bwindi.jpg',
      highlights: ['Mountain Gorilla Trekking', 'Pristine Forest', 'Biodiversity', 'Rare Birds', 'Cultural Immersion'],
      bestTime: 'June to August and December to January',
      wildlife: ['Mountain Gorilla', 'Chimpanzee', 'Forest Elephant', 'Bushbuck', 'Blue Monkey', 'Rare Birds'],
      packages: [
        {
          id: 'bwindi-gorilla-4d',
          name: 'Mountain Gorilla Trekking',
          type: 'group',
          duration: '4 Days / 3 Nights',
          price: 3980,
          description: 'The ultimate African wildlife experience. Trek through misty forests searching for habituated gorilla families. Spend one hour observing these magnificent primates in their natural habitat.',
          includes: ['Gorilla permit ($750)', 'Lodge stay', 'Experienced trackers', 'All meals', 'Park access', 'Walking guide'],
          excludes: ['Flights', 'Travel insurance', 'Camera fees', 'Tips'],
          bestTime: 'June to August; December to January'
        },
        {
          id: 'bwindi-extended-7d',
          name: 'Bwindi & Mgahinga Trek',
          type: 'luxury',
          duration: '7 Days / 6 Nights',
          price: 5200,
          description: 'Extended gorilla trekking experience combining Bwindi and Mgahinga. Two permits provide options and increased encounter probability.',
          includes: ['Two permits', 'Lodge stays', 'Trackers and guides', 'All meals', 'Park fees', 'Cultural experiences'],
          excludes: ['Flights', 'Travel insurance', 'Equipment rental', 'Gratuities']
        }
      ]
    },
    {
      id: 'kibale',
      name: 'Kibale National Park',
      description: 'Home to Africa\'s largest chimpanzee population, Kibale covers 766 square kilometers of lush forest. Chimpanzee habituation projects allow intimate encounters with these intelligent primates.',
      image: '/destinations/kibale.jpg',
      highlights: ['Chimpanzee Trekking', 'Primate Diversity', 'Forest Ecosystem', 'Rare Species', 'Research Opportunities'],
      bestTime: 'June to August and December to February',
      wildlife: ['Chimpanzee', 'Red Colobus', 'L\'Hoest\'s Monkey', 'African Elephant', 'Uganda Kob', 'Forest Buffalo'],
      packages: [
        {
          id: 'kibale-chimp-3d',
          name: 'Chimpanzee Trekking Experience',
          type: 'solo',
          duration: '3 Days / 2 Nights',
          price: 2400,
          description: 'Trek through Kibale\'s forests seeking habituated chimpanzee communities. Witness their complex social behaviors and family structures.',
          includes: ['Chimpanzee permit', 'Lodge', 'Professional trackers', 'All meals', 'Walking guides', 'Park access'],
          excludes: ['Flights', 'Travel insurance', 'Video permits', 'Tips']
        }
      ]
    }
  ]
}

// BOTSWANA DATA
export const botswanaDestination: Country = {
  id: 'botswana',
  name: 'Botswana',
  description: 'Botswana showcases Africa\'s most pristine wilderness where mega-herds of elephants roam. The Okavango Delta—an inland water paradise—supports extraordinary wildlife concentrations. Botswana prioritizes conservation, limiting visitor numbers for exclusive experiences.',
  image: '/destinations/botswana.jpg',
  highlights: ['Okavango Delta', 'Elephant Herds', 'Water Safaris', 'Kalahari Desert', 'Pristine Wilderness'],
  visaInfo: 'Most nationalities receive 90-day visa on arrival',
  currency: 'Botswanan Pula (BWP)',
  places: [
    {
      id: 'okavango',
      name: 'Okavango Delta',
      description: 'This 15,000 square kilometer wetland, where the Okavango River disperses into lagoons rather than reaching the ocean, creates a unique ecosystem. Traditional dugout canoes (mokoros) navigate narrow channels revealing intimate encounters with wildlife.',
      image: '/destinations/okavango.jpg',
      highlights: ['Mokoro Canoe Safaris', 'Water Wildlife', 'Elephant Abundance', 'Bird Paradise', 'Exclusive Camps'],
      bestTime: 'July to March for water abundance; April to June for wildlife concentration',
      wildlife: ['African Elephant', 'Lion', 'Leopard', 'Buffalo', 'Hippopotamus', 'Sitatunga', 'Lechwe'],
      packages: [
        {
          id: 'okavango-luxury-5d',
          name: 'Okavango Luxury Experience',
          type: 'luxury',
          duration: '5 Days / 4 Nights',
          price: 6800,
          description: 'Experience Africa\'s water paradise from exclusive lodge. Combine mokoro canoe safaris through narrow channels with land game drives.',
          includes: ['Luxury lodge', 'Mokoro safaris', 'Game drives', 'All meals', 'Expert guides', 'Airport transfers'],
          excludes: ['Flights', 'Travel insurance', 'Tips', 'Premium alcohol']
        },
        {
          id: 'okavango-honeymoon-5d',
          name: 'Romantic Delta Escape',
          type: 'honeymoon',
          duration: '5 Days / 4 Nights',
          price: 7600,
          description: 'Romantic mokoro rides under starlit skies, private dining on islands, couples spa treatments. Perfect honeymoon destination.',
          includes: ['Luxury suite', 'Private mokoros', 'Romantic meals', 'Spa services', 'All activities', 'Champagne setup'],
          excludes: ['Flights', 'Travel insurance', 'Special requests', 'Gratuities']
        }
      ]
    },
    {
      id: 'chobe',
      name: 'Chobe National Park',
      description: 'Straddling the Botswana-Zambia border, Chobe harbors Africa\'s largest elephant population, often numbering over 100,000. The park represents one of Africa\'s finest destinations for elephant encounters.',
      image: '/destinations/chobe.jpg',
      highlights: ['Largest Elephant Population', 'River Safaris', 'Predator Viewing', 'Scenic Landscapes', 'Bird Watching'],
      bestTime: 'May to October for dry season concentration',
      wildlife: ['African Elephant', 'Lion', 'Leopard', 'Cape Buffalo', 'Hippopotamus', 'Giraffe', 'Crocodile'],
      packages: [
        {
          id: 'chobe-safari-4d',
          name: 'Elephant Paradise Safari',
          type: 'luxury',
          duration: '4 Days / 3 Nights',
          price: 4200,
          description: 'Dedicated elephant viewing. Game drives and river safaris provide multiple vantage points for massive elephant herds.',
          includes: ['Safari lodge', 'Land and river safaris', 'Meals', 'Park fees', 'Naturalist guides', 'Photography opportunities'],
          excludes: ['Flights', 'Travel insurance', 'Premium alcohol', 'Tips']
        }
      ]
    }
  ]
}

// SOUTH AFRICA DATA
export const southAfricaDestination: Country = {
  id: 'south-africa',
  name: 'South Africa',
  description: 'Africa\'s most developed nation seamlessly blends world-class wildlife with sophisticated urban experiences. The Kruger National Park offers exceptional big five viewing, while the Cape Peninsula provides dramatic coastal scenery.',
  image: '/destinations/south-africa.jpg',
  highlights: ['Kruger National Park', 'Cape Peninsula', 'Winelands', 'Table Mountain', 'Big Five Wildlife'],
  visaInfo: 'Visa not required for most Western nationalities for up to 90 days',
  currency: 'South African Rand (ZAR)',
  places: [
    {
      id: 'kruger',
      name: 'Kruger National Park',
      description: 'Africa\'s largest national park, stretching nearly 350km. This 19,485 square kilometer wilderness offers exceptional big five viewing and extraordinary biodiversity.',
      image: '/destinations/kruger.jpg',
      highlights: ['Big Five Safari', 'Diverse Wildlife', 'Multiple Camps', 'Self-Drive Options', 'Wildlife Films'],
      bestTime: 'June to September for dry season; December to January for birds',
      wildlife: ['Lion', 'Leopard', 'African Elephant', 'Cape Buffalo', 'Rhinoceros', 'Giraffe', 'Zebra'],
      packages: [
        {
          id: 'kruger-guided-5d',
          name: 'Kruger Guided Safari',
          type: 'luxury',
          duration: '5 Days / 4 Nights',
          price: 3800,
          description: 'Expert-guided safaris through Kruger\'s diverse landscapes. Experienced guides maximize wildlife sightings while educating visitors.',
          includes: ['Safari lodge', 'Daily guided drives', 'Meals', 'Park fees', 'Expert naturalists', 'Park maps'],
          excludes: ['Flights', 'Travel insurance', 'Alcoholic beverages', 'Tips']
        }
      ]
    }
  ]
}

// ALL DESTINATIONS COMBINED
export const allDestinations: Country[] = [
  kenyaDestination,
  tanzaniaDestination,
  ugandaDestination,
  botswanaDestination,
  southAfricaDestination
]

// FEATURED PACKAGES ACROSS ALL DESTINATIONS
export const allFeaturedPackages: Package[] = [
  {
    id: 'great-migration',
    name: 'Great Migration Spectacle',
    type: 'migration',
    duration: '8 Days / 7 Nights',
    price: 6980,
    description: 'Witness one of Earth\'s most spectacular natural events. Follow millions of wildebeest and zebras across the Serengeti as they migrate in search of fresh grazing lands. Experience multiple river crossings, abundant predator interactions, and incredible photography opportunities.',
    includes: ['Serengeti park access', 'Mobile tented camps', 'All meals and beverages', 'Professional migration tracking guides', 'Daily game drives', 'Bush dinners under stars', 'Airport transfers', 'Park entrance fees'],
    excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Gratuities', 'Premium beverages'],
    bestTime: 'June to October for main river crossings'
  },
  {
    id: 'gorilla-trekking',
    name: 'Mountain Gorilla Encounter',
    type: 'luxury',
    duration: '4 Days / 3 Nights',
    price: 3980,
    description: 'Experience the profound moment when you lock eyes with a mountain gorilla in its natural habitat. Trek through misty Bwindi forest with expert trackers to encounter habituated gorilla families. This intimate encounter with Africa\'s most intelligent primates remains unforgettable.',
    includes: ['Bwindi park access', 'Gorilla permit ($750 value)', 'Forest lodge accommodation', 'Expert trackers and naturalists', 'All meals', 'Walking guides', 'Cultural village visits', 'Park entrance fees'],
    excludes: ['International flights', 'Travel insurance', 'Video permits', 'Personal expenses', 'Tips'],
    bestTime: 'June to August and December to February'
  },
  {
    id: 'big-five',
    name: 'Big Five Safari',
    type: 'family',
    duration: '6 Days / 5 Nights',
    price: 3980,
    description: 'Experience classic African safari where you\'ll encounter all five iconic big cats and animals. Masai Mara offers exceptional game viewing with expert guides. Includes hot air balloon safari for panoramic wildlife views and authentic Maasai cultural immersion.',
    includes: ['Masai Mara park access', 'Luxury tented accommodation', 'Daily game drives', 'Hot air balloon safari', 'All meals and beverages', 'Expert naturalist guides', 'Maasai village visits', 'Airport transfers', 'Park fees'],
    excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Gratuities'],
    bestTime: 'June to October for migration; December to March for calving'
  },
  {
    id: 'okavango-water',
    name: 'Okavango Delta Explorer',
    type: 'honeymoon',
    duration: '5 Days / 4 Nights',
    price: 6800,
    description: 'Navigate Africa\'s largest inland water paradise via traditional mokoro canoes. Combine water safaris with land-based game drives in this biodiverse ecosystem. Witness wildlife in their natural state from intimate vantage points impossible on land.',
    includes: ['Okavango Delta camp', 'Mokoro canoe excursions', 'Land game drives', 'All meals', 'Expert guides', 'Scenic flights', 'Park access', 'Airport transfers'],
    excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Tips', 'Premium alcohol'],
    bestTime: 'July to March for water abundance'
  },
  {
    id: 'victoria-falls',
    name: 'Victoria Falls Adventure',
    type: 'group',
    duration: '5 Days / 4 Nights',
    price: 3200,
    description: 'Stand before one of the world\'s largest waterfalls and experience the "smoke that thunders." Combine the raw power of Victoria Falls with adventure activities and wildlife viewing in nearby Hwange National Park.',
    includes: ['Victoria Falls lodge', 'Falls entrance fee', 'Sunset cruise on the Zambezi', 'Hwange safari', 'All meals', 'Guided tours', 'Adventure activities', 'Airport transfers'],
    excludes: ['International flights', 'Travel insurance', 'Premium activities', 'Personal expenses', 'Tips'],
    bestTime: 'Year-round destination; best views August to December'
  },
  {
    id: 'cape-experience',
    name: 'Kruger Big Five Experience',
    type: 'solo',
    duration: '6 Days / 5 Nights',
    price: 2800,
    description: 'Africa\'s largest national park delivers exceptional big five sightings in one of the world\'s finest wildlife sanctuaries. Expert guides lead daily drives through diverse landscapes revealing abundant wildlife and natural beauty.',
    includes: ['Kruger lodge', 'Daily guided game drives', 'All meals', 'Expert naturalists', 'Park access', 'Wildlife education', 'Photography opportunities', 'Airport transfers'],
    excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Gratuities'],
    bestTime: 'June to September for dry season viewing'
  }
]
