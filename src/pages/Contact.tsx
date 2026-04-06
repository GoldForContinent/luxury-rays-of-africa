import { useState, useRef } from 'react'
import { MapPin, Phone, Mail, Send, Clock, CheckCircle, MessageCircle, Calendar, Users, DollarSign, Map, Heart, Star } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    travelers: '',
    dateRange: '',
    duration: '',
    destinations: '',
    safariType: '',
    budget: '',
    accommodation: '',
    specialInterests: '',
    message: '',
    howHeard: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formDataToSend = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value)
    })
    formDataToSend.append('_subject', 'New Safari Enquiry - Rays of Africa')
    formDataToSend.append('_captcha', 'false')
    formDataToSend.append('_next', window.location.href)
    
    try {
      await fetch('https://formsubmit.co/raysofafrica254@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      })
      setIsSubmitted(true)
      formRef.current?.reset()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#2B1E1A] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#D4A03A]/20 flex items-center justify-center">
            <CheckCircle className="text-[#D4A03A]" size={56} />
          </div>
          <h1 className="font-display font-bold text-4xl text-[#F7F2EA] mb-4">
            Enquiry Received!
          </h1>
          <p className="text-[#F7F2EA]/70 text-lg mb-4">
            Thank you for reaching out to Rays of Africa. We've received your safari enquiry and our team of specialists is reviewing your requirements.
          </p>
          <p className="text-[#F7F2EA]/50 mb-8">
            Expect to hear from us within 24 hours with a personalized safari proposal tailored to your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary inline-flex items-center gap-2 px-8 py-3">
              Back to Home
            </a>
            <button 
              onClick={() => setIsSubmitted(false)} 
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#D4A03A] text-[#D4A03A] rounded-full font-semibold hover:bg-[#D4A03A] hover:text-black transition-all"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-contact.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E1A]/70 via-[#2B1E1A]/50 to-[#2B1E1A]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="eyebrow">Start Your Journey</span>
          <h1 className="headline-xl mt-4 text-[#F7F2EA]">
            Plan Your Safari
          </h1>
          <p className="text-lg md:text-xl text-[#F7F2EA]/80 mt-6 max-w-2xl mx-auto">
            Share your dreams with us and our specialists will craft the perfect African adventure
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4A03A]/20 flex items-center justify-center">
                    <Send className="text-[#D4A03A]" size={20} />
                  </div>
                  <h2 className="font-display font-bold text-xl text-[#F7F2EA]">
                    Safari Enquiry Form
                  </h2>
                </div>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="New Safari Enquiry - Rays of Africa" />
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-sm text-[#D4A03A] uppercase tracking-wider mb-4">Your Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] placeholder-[#F7F2EA]/40 focus:outline-none focus:border-[#D4A03A]"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] placeholder-[#F7F2EA]/40 focus:outline-none focus:border-[#D4A03A]"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] placeholder-[#F7F2EA]/40 focus:outline-none focus:border-[#D4A03A]"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2">Country of Residence</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] placeholder-[#F7F2EA]/40 focus:outline-none focus:border-[#D4A03A]"
                          placeholder="Where are you from?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="border-t border-[#F7F2EA]/10 pt-6">
                    <h3 className="text-sm text-[#D4A03A] uppercase tracking-wider mb-4">Trip Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4" /> Number of Travelers
                        </label>
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] focus:outline-none focus:border-[#D4A03A]"
                        >
                          <option value="">Select</option>
                          <option value="1">1 person</option>
                          <option value="2">2 people</option>
                          <option value="3-4">3-4 people</option>
                          <option value="5-6">5-6 people</option>
                          <option value="7-10">7-10 people</option>
                          <option value="10+">10+ people</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> Preferred Travel Dates
                        </label>
                        <input
                          type="text"
                          name="dateRange"
                          value={formData.dateRange}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] placeholder-[#F7F2EA]/40 focus:outline-none focus:border-[#D4A03A]"
                          placeholder="e.g., July 2026, or flexible"
                        />
                      </div>
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" /> Trip Duration
                        </label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] focus:outline-none focus:border-[#D4A03A]"
                        >
                          <option value="">Select</option>
                          <option value="3-5">3-5 days</option>
                          <option value="6-8">6-8 days</option>
                          <option value="9-12">9-12 days</option>
                          <option value="13-16">13-16 days</option>
                          <option value="17+">17+ days</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2 flex items-center gap-2">
                          <DollarSign className="w-4 h-4" /> Budget Per Person
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] focus:outline-none focus:border-[#D4A03A]"
                        >
                          <option value="">Select</option>
                          <option value="budget">Budget ($800 - $1,500)</option>
                          <option value="midrange">Mid-Range ($1,500 - $3,500)</option>
                          <option value="luxury">Luxury ($3,500 - $8,000)</option>
                          <option value="ultra-luxury">Ultra-Luxury ($8,000+)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Safari Preferences */}
                  <div className="border-t border-[#F7F2EA]/10 pt-6">
                    <h3 className="text-sm text-[#D4A03A] uppercase tracking-wider mb-4">Safari Preferences</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2 flex items-center gap-2">
                          <Map className="w-4 h-4" /> Destinations Interest
                        </label>
                        <select
                          name="destinations"
                          value={formData.destinations}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] focus:outline-none focus:border-[#D4A03A]"
                        >
                          <option value="">Select</option>
                          <option value="kenya">Kenya</option>
                          <option value="tanzania">Tanzania</option>
                          <option value="south-africa">South Africa</option>
                          <option value="botswana">Botswana</option>
                          <option value="uganda">Uganda</option>
                          <option value="namibia">Namibia</option>
                          <option value="zimbabwe">Zimbabwe</option>
                          <option value="rwanda">Rwanda</option>
                          <option value="multiple">Multiple Countries</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2 flex items-center gap-2">
                          <Star className="w-4 h-4" /> Safari Type
                        </label>
                        <select
                          name="safariType"
                          value={formData.safariType}
                          onChange={handleChange}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] focus:outline-none focus:border-[#D4A03A]"
                        >
                          <option value="">Select</option>
                          <option value="budget">Budget Safari</option>
                          <option value="midrange">Mid-Range Safari</option>
                          <option value="luxury">Luxury Safari</option>
                          <option value="family">Family Safari</option>
                          <option value="honeymoon">Honeymoon Safari</option>
                          <option value="group">Group Safari</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2 flex items-center gap-2">
                          <Heart className="w-4 h-4" /> Special Interests
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {['Big Five', 'Gorilla Trekking', 'Great Migration', 'Birding', 'Photography', 'Walking Safari', 'Cultural Experiences'].map((interest) => (
                            <label key={interest} className="flex items-center gap-2 bg-[#1a1410] border border-[#F7F2EA]/10 rounded-lg px-3 py-2 cursor-pointer hover:border-[#D4A03A]/50 transition-colors">
                              <input type="checkbox" className="accent-[#D4A03A]" />
                              <span className="text-sm text-[#F7F2EA]/70">{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-[#F7F2EA]/70 text-sm mb-2">Additional Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full bg-[#1a1410] border border-[#F7F2EA]/10 rounded-xl px-4 py-3 text-[#F7F2EA] placeholder-[#F7F2EA]/40 focus:outline-none focus:border-[#D4A03A] resize-none"
                          placeholder="Tell us more about your dream safari - specific animals you'd like to see, any special occasions, dietary requirements, or questions..."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Submit Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-[#F7F2EA]/50 text-xs text-center">
                    By submitting this form, you agree to our privacy policy. We never share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-display font-bold text-lg text-[#F7F2EA] mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-xs mb-1">Email</p>
                      <a href="mailto:raysofafrica254@gmail.com" className="text-[#F7F2EA] hover:text-[#D4A03A] transition-colors text-sm">
                        raysofafrica254@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-xs mb-1">Phone</p>
                      <a href="tel:0791323799" className="text-[#F7F2EA] hover:text-[#D4A03A] transition-colors text-sm">
                        0791323799
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-xs mb-1">Office</p>
                      <p className="text-[#F7F2EA] text-sm">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-xs mb-1">Office Hours</p>
                      <p className="text-[#F7F2EA] text-sm">
                        Mon-Fri: 8am - 6pm EAT<br />
                        Sat: 9am - 2pm EAT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="glass-card rounded-3xl p-6 border-2 border-[#25D366]/30">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  <div>
                    <h3 className="font-semibold text-[#F7F2EA]">WhatsApp Us</h3>
                    <p className="text-xs text-[#F7F2EA]/50">Quick responses guaranteed</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/0791323799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl text-center font-medium hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Start Chat
                </a>
              </div>

              {/* Why Book With Us */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-display font-semibold text-[#F7F2EA] mb-4">
                  Why Book With Us
                </h3>
                <ul className="space-y-3">
                  {[
                    'Personalized safari itineraries',
                    'Local expert guides',
                    '24/7 support during your trip',
                    'Direct conservation contributions',
                    'No hidden fees or surprises'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#F7F2EA]/70">
                      <CheckCircle className="w-5 h-5 text-[#D4A03A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency */}
              <div className="bg-[#D4A03A]/10 rounded-2xl p-4 border border-[#D4A03A]/20">
                <p className="text-xs text-[#D4A03A] uppercase tracking-wider mb-1">Emergency Support</p>
                  <p className="text-[#F7F2EA] font-medium">0791323799</p>
                <p className="text-xs text-[#F7F2EA]/50 mt-1">Available 24/7 during your safari</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
