import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Calendar, User, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const articles = [
  {
    id: 1,
    title: 'When to See the Great Migration: A Month-by-Month Guide',
    excerpt: 'The Great Migration is one of nature\'s most spectacular events. Here\'s when and where to witness it throughout the year.',
    image: '/journal_migration.jpg',
    author: 'John Mutua',
    date: 'March 15, 2026',
    readTime: '8 min read',
    category: 'Wildlife'
  },
  {
    id: 2,
    title: 'Gorilla Trekking: What to Expect in Rwanda vs Uganda',
    excerpt: 'Both countries offer incredible gorilla trekking experiences, but there are key differences to consider when planning your trip.',
    image: '/journal_gorilla.jpg',
    author: 'Sarah Chen',
    date: 'March 10, 2026',
    readTime: '6 min read',
    category: 'Destinations'
  },
  {
    id: 3,
    title: 'Packing for Safari: The Essential Checklist',
    excerpt: 'What to bring (and what to leave behind) for your African adventure. Our comprehensive packing guide covers everything.',
    image: '/journal_packing.jpg',
    author: 'Emma Wilson',
    date: 'March 5, 2026',
    readTime: '5 min read',
    category: 'Tips'
  },
  {
    id: 4,
    title: 'The Best Safari Camps for Photography',
    excerpt: 'From hides to vehicle setups, these camps offer photographers the best opportunities to capture stunning wildlife images.',
    image: '/journal_photo.jpg',
    author: 'David Ochieng',
    date: 'February 28, 2026',
    readTime: '7 min read',
    category: 'Photography'
  },
  {
    id: 5,
    title: 'Traveling to Africa with Kids: A Family Guide',
    excerpt: 'Safaris aren\'t just for adults. Here\'s how to plan an unforgettable family adventure that kids will love.',
    image: '/journal_family.jpg',
    author: 'Sarah Chen',
    date: 'February 20, 2026',
    readTime: '6 min read',
    category: 'Family'
  },
  {
    id: 6,
    title: 'Conservation Success: How Tourism Saved the Rhino',
    excerpt: 'The remarkable story of how responsible tourism has helped bring rhino populations back from the brink.',
    image: '/journal_conservation.jpg',
    author: 'John Mutua',
    date: 'February 15, 2026',
    readTime: '9 min read',
    category: 'Conservation'
  },
]

const categories = ['All', 'Wildlife', 'Destinations', 'Tips', 'Photography', 'Family', 'Conservation']

export default function Journal() {
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
      <section className="relative py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow mb-4 block">Stories & Insights</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-[#F7F2EA] mb-6">
            The Journal
          </h1>
          <p className="text-[#F7F2EA]/70 text-lg">
            Safari stories, travel tips, wildlife insights, and inspiration for your African adventure.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 md:px-[8vw] bg-[#1a1410] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  index === 0
                    ? 'bg-[#D4A03A] text-[#2B1E1A]'
                    : 'bg-white/10 text-[#F7F2EA]/80 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-section opacity-0 translate-y-8">
            <Link to="#" className="block group">
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="px-3 py-1 bg-[#D4A03A] text-[#2B1E1A] text-xs font-semibold rounded-full mb-4 inline-block">
                    {articles[0].category}
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-4 max-w-3xl">
                    {articles[0].title}
                  </h2>
                  <p className="text-white/70 max-w-2xl mb-4 hidden md:block">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span className="flex items-center gap-1">
                      <User size={14} /> {articles[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {articles[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {articles[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <div 
                key={article.id}
                className="fade-section opacity-0 translate-y-8"
              >
                <Link to="#" className="block group">
                  <div className="bg-[#1a1410] rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#D4A03A] text-[#2B1E1A] text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-2 line-clamp-2 group-hover:text-[#D4A03A] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#F7F2EA]/60 text-sm line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-[#F7F2EA]/50 text-xs">
                        <span>{article.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-[8vw] bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#F7F2EA] mb-4">
              Get Safari Inspiration
            </h2>
            <p className="text-[#F7F2EA]/60 mb-6">
              Subscribe to our newsletter for monthly safari tips, destination guides, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 form-input"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
