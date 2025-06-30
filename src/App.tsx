import React, { useState } from 'react';
import { Wifi, Zap, Users, Phone, Mail, MapPin, Star, Menu, X, Globe, Shield, Clock, Headphones } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const plans = [
    { speed: '50 Mbps', price: '₱799', features: ['Perfect for streaming', 'Up to 5 devices', '24/7 support'] },
    { speed: '100 Mbps', price: '₱999', features: ['Great for families', 'Up to 10 devices', 'Priority support', 'Free installation'] },
    { speed: '150 Mbps', price: '₱1299', features: ['Business ready', 'Up to 15 devices', 'Premium support', 'Free router upgrade'] },
    { speed: '200 Mbps', price: '₱1499', features: ['Ultra-fast speed', 'Unlimited devices', 'VIP support', 'Free maintenance'] }
  ];

  const serviceAreas = [
    'Batia', 'Taal', 'Tambubong', 'Antipona', 'Caingin', 'Lolomboy',
    'Bambang', 'Binang 1st', 'Wakas', 'Bagumbayan', 'Sulucan', 'Poblacion'
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Batia',
      rating: 5,
      text: 'ZapConnect transformed our home internet experience! Lightning-fast speeds and excellent customer service.'
    },
    {
      name: 'Juan Dela Cruz',
      location: 'Taal',
      rating: 5,
      text: 'Finally, reliable internet in our area! Perfect for my work-from-home setup. Highly recommended!'
    },
    {
      name: 'Ana Rodriguez',
      location: 'Lolomboy',
      rating: 5,
      text: 'The installation was quick and professional. The speeds are exactly as promised. Great value for money!'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-400 mr-2" />
              <div>
                <span className="text-white font-bold text-xl">RM CJJ ZapConnect</span>
                <p className="text-yellow-400 text-xs">Surf the World</p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#plans" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Plans</a>
                <a href="#services" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#areas" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Coverage</a>
                <a href="#about" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#plans" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Plans</a>
              <a href="#services" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#areas" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Coverage</a>
              <a href="#about" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#contact" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Zap className="h-24 w-24 text-yellow-400 animate-pulse" />
                <div className="absolute inset-0 h-24 w-24 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-yellow-400">Lightning-Fast</span><br />
              <span className="text-orange-400">Fiber Internet</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Experience the future of connectivity with RM CJJ ZapConnect. 
              Ultra-fast fiber internet that lets you truly <span className="text-yellow-400 font-semibold">Surf the World</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#plans" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                View Plans & Pricing
              </a>
              <a href="#contact" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Get Connected Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plans & Pricing */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Speed</h2>
            <p className="text-xl text-gray-600">Affordable plans designed for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 ${index === 1 ? 'ring-4 ring-yellow-400 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <Wifi className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.speed}</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-6">
                    {plan.price}<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete internet solutions for homes and businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors duration-300">
              <Globe className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fiber Installation</h3>
              <p className="text-gray-600">Professional high-speed fiber internet installation with minimal disruption to your property.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <Wifi className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Plans</h3>
              <p className="text-gray-600">Flexible monthly internet service plans with no long-term contracts and transparent pricing.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors duration-300">
              <Shield className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Network Setup</h3>
              <p className="text-gray-600">Complete network administration and setup assistance for both residential and business clients.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <Headphones className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and maintenance to ensure your connection stays strong.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Coverage Areas</h2>
            <p className="text-xl text-gray-300">We proudly serve these communities with lightning-fast fiber internet</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
                <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white">{area}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Don't see your area listed? We're expanding rapidly!</p>
            <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied ZapConnect users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About RM CJJ ZapConnect</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading internet service provider dedicated to bringing high-speed fiber internet 
                to communities across the region. Our mission is simple: to connect you to the world with 
                reliable, lightning-fast internet that enhances your digital lifestyle.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in telecommunications and a commitment to customer satisfaction, 
                we've built a network that delivers consistent, high-quality internet service. Our team of 
                certified technicians ensures professional installation and ongoing support.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">12</div>
                  <div className="text-gray-600">Service Areas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-center">
                <Clock className="h-16 w-16 text-black mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-4">Why Choose Us?</h3>
                <ul className="text-black space-y-2">
                  <li>✓ 99.9% Network Uptime</li>
                  <li>✓ No Data Caps or Throttling</li>
                  <li>✓ Local Customer Support</li>
                  <li>✓ Competitive Pricing</li>
                  <li>✓ Quick Installation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Connected Today</h2>
            <p className="text-xl text-gray-300">Ready to experience lightning-fast internet? Contact us now!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-yellow-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-300">+63 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-300">info@zapconnect.ph</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-300">Main Office, Philippines</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4 text-orange-400">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency Support Only</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-yellow-400 mr-2" />
                <div>
                  <span className="text-white font-bold text-xl">RM CJJ ZapConnect</span>
                  <p className="text-yellow-400 text-sm">Surf the World</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting communities with lightning-fast fiber internet. 
                Experience the future of connectivity with reliable, high-speed internet service.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Plans & Pricing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#areas" className="text-gray-400 hover:text-white transition-colors">Coverage Areas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-400">Support</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><span className="text-gray-400">24/7 Technical Support</span></li>
                <li><span className="text-gray-400">Installation Service</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 RM CJJ ZapConnect. All rights reserved. | Surf the World with confidence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;