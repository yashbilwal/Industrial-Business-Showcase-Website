import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Factory, 
  Settings, 
  Award, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Cog,
  Wrench,
  Shield,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Trophy,
  Target,
  Globe,
  Calendar
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'achievements', 'products', 'reviews', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const products = [
    {
      title: "Precision Machining",
      description: "High-precision CNC machining for complex components with tolerances up to ±0.001\"",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["CNC Milling", "Turning", "EDM", "Surface Grinding"]
    },
    {
      title: "Metal Fabrication",
      description: "Custom metal fabrication services including welding, cutting, and assembly",
      image: "https://images.pexels.com/photos/1267336/pexels-photo-1267336.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Welding", "Laser Cutting", "Bending", "Assembly"]
    },
    {
      title: "Quality Control",
      description: "Advanced inspection and testing to ensure the highest quality standards",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["CMM Inspection", "Material Testing", "ISO Certification", "Quality Assurance"]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certification",
      year: "2020",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Award,
      title: "Manufacturing Excellence Award",
      description: "Regional manufacturing excellence recognition",
      year: "2023",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      title: "Zero Defect Achievement",
      description: "6 months consecutive zero-defect production",
      year: "2023",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Globe,
      title: "Export Excellence",
      description: "Outstanding export performance award",
      year: "2022",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Industries",
      rating: 5,
      text: "Outstanding precision and quality. They delivered our complex aerospace components exactly to specification and ahead of schedule.",
      date: "2 months ago",
      verified: true
    },
    {
      name: "Michael Chen",
      company: "AutoMotive Solutions",
      rating: 5,
      text: "Professional service from start to finish. Their attention to detail and customer service is unmatched in the industry.",
      date: "3 months ago",
      verified: true
    },
    {
      name: "David Rodriguez",
      company: "Energy Systems Inc",
      rating: 5,
      text: "We've been working with this team for over 3 years. Consistently reliable, high-quality work every single time.",
      date: "1 month ago",
      verified: true
    },
    {
      name: "Lisa Wang",
      company: "Medical Devices Corp",
      rating: 5,
      text: "Exceptional quality control and fast turnaround times. They understand the critical nature of medical device manufacturing.",
      date: "4 months ago",
      verified: true
    },
    {
      name: "Robert Thompson",
      company: "Aerospace Dynamics",
      rating: 5,
      text: "Their precision machining capabilities are world-class. We trust them with our most critical components.",
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Jennifer Martinez",
      company: "Industrial Solutions LLC",
      rating: 4,
      text: "Great communication throughout the project. Delivered exactly what we needed within budget and timeline.",
      date: "5 months ago",
      verified: true
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">PrecisionTech</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'achievements', 'products', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'achievements', 'products', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Precision
                  <span className="text-blue-400"> Manufacturing</span>
                  <br />
                  Excellence
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Leading industrial manufacturing solutions with cutting-edge technology, 
                  uncompromising quality, and decades of expertise. Your trusted partner 
                  for precision engineering.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Quote Today
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10"
                >
                  View Services
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">25+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-300">Quality Rate</div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-6 pt-4">
                <span className="text-gray-300 text-sm">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-300 ${social.color} transition-colors duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Manufacturing Equipment"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Industry-Leading <span className="text-blue-600">Manufacturing</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over two decades of experience in precision manufacturing, we've built 
                  our reputation on delivering exceptional quality, innovative solutions, and 
                  reliable service to industries worldwide.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ISO Certified</h3>
                    <p className="text-gray-600">Quality management systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Precision Focus</h3>
                    <p className="text-gray-600">Tolerances to ±0.001"</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Settings className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Tech</h3>
                    <p className="text-gray-600">State-of-the-art equipment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Skilled professionals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl transform -rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Quality Control"
                className="relative rounded-3xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition and certifications that demonstrate our commitment to excellence 
              and industry leadership in manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-3">{achievement.description}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{achievement.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Manufacturing Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing solutions tailored to meet your specific requirements 
              with uncompromising quality and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client <span className="text-blue-600">Reviews</span>
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              <span className="text-gray-600">({totalReviews} reviews)</span>
            </div>
            <p className="text-lg text-gray-600">
              Real feedback from our valued clients across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="flex items-center space-x-1 text-green-600 text-xs">
                      <CheckCircle className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-gray-600 text-sm">{review.company}</div>
                    </div>
                    <div className="text-gray-500 text-xs">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              View All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Start Your <span className="text-blue-400">Project?</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Get in touch with our team today for a free consultation and quote. 
                  Let's discuss how we can bring your manufacturing vision to life.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">(555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@precisiontech.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">123 Industrial Blvd, Manufacturing City, MC 12345</div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-4">Find Us on Map</h3>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-300 text-lg font-semibold">Interactive Map</p>
                    <p className="text-gray-400 text-sm">Google Maps integration coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Factory className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">PrecisionTech</span>
              </div>
              <p className="text-gray-400">
                Leading the industry with precision manufacturing excellence and innovative solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">CNC Machining</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Metal Fabrication</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Quality Control</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Assembly</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Industries</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Aerospace</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Automotive</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Medical</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Energy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Quality</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; 2024 PrecisionTech Manufacturing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;