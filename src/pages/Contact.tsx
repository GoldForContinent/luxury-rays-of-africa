import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '',
    month: '',
    budget: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Here you would normally send the data to your backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-[#2B1E1A] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="mx-auto text-[#D4A03A] mb-6" size={64} />
          <h1 className="font-display font-bold text-3xl text-[#F7F2EA] mb-4">
            Thank You!
          </h1>
          <p className="text-[#F7F2EA]/70 mb-8">
            We've received your enquiry and will get back to you within 24 hours with a personalized safari proposal.
          </p>
          <a href="/" className="btn-primary inline-flex items-center gap-2">
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 px-4 md:px-[8vw] bg-[#2B1E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Get in Touch</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-[#F7F2EA] mb-4">
              Plan Your Safari
            </h1>
            <p className="text-[#F7F2EA]/60 max-w-2xl mx-auto">
              Tell us about your dream safari and we'll create a personalized itinerary just for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl text-[#F7F2EA] mb-6">
                Send Us Your Enquiry
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F7F2EA]/70 text-sm mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Smith"
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
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F7F2EA]/70 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F7F2EA]/70 text-sm mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5-8">5-8 people</option>
                      <option value="9+">9+ people</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F7F2EA]/70 text-sm mb-2">Preferred Travel Month</label>
                    <select
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select month</option>
                      <option value="jan">January</option>
                      <option value="feb">February</option>
                      <option value="mar">March</option>
                      <option value="apr">April</option>
                      <option value="may">May</option>
                      <option value="jun">June</option>
                      <option value="jul">July</option>
                      <option value="aug">August</option>
                      <option value="sep">September</option>
                      <option value="oct">October</option>
                      <option value="nov">November</option>
                      <option value="dec">December</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#F7F2EA]/70 text-sm mb-2">Budget Per Person</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select budget</option>
                      <option value="260000-390000">Ksh 260,000 - Ksh 390,000</option>
                      <option value="390000-650000">Ksh 390,000 - Ksh 650,000</option>
                      <option value="650000-1040000">Ksh 650,000 - Ksh 1,040,000</option>
                      <option value="1040000+">Ksh 1,040,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#F7F2EA]/70 text-sm mb-2">Tell Us About Your Dream Safari</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="What destinations interest you? Any specific wildlife you want to see? Special occasions?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                >
                  <Send size={18} /> Send Enquiry
                </button>

                <p className="text-[#F7F2EA]/50 text-xs text-center">
                  We reply within 24 hours. No spam. No hard sell.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-semibold text-xl text-[#F7F2EA] mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-sm">Email</p>
                      <a href="mailto:hello@raysofafrica.travel" className="text-[#F7F2EA] hover:text-[#D4A03A] transition-colors">
                        hello@raysofafrica.travel
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-sm">Phone</p>
                      <a href="tel:+255123456789" className="text-[#F7F2EA] hover:text-[#D4A03A] transition-colors">
                        +255 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-sm">Office</p>
                      <p className="text-[#F7F2EA]">
                        123 Safari Road<br />
                        Arusha, Tanzania
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A03A]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#D4A03A]" size={18} />
                    </div>
                    <div>
                      <p className="text-[#F7F2EA]/50 text-sm">Office Hours</p>
                      <p className="text-[#F7F2EA]">
                        Monday - Friday: 8am - 6pm EAT<br />
                        Saturday: 9am - 1pm EAT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-display font-semibold text-lg text-[#F7F2EA] mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="text-[#F7F2EA]/60 text-sm mb-4">
                  Chat with us directly for quick questions or to start planning.
                </p>
                <a 
                  href="https://wa.me/255123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center block"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
