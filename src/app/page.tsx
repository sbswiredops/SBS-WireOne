import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  Network, 
  Users, 
  CheckCircle, 
  Star,
  Award,
  Zap,
  Globe,
  HeadphonesIcon,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Powering Your
                  <span className="text-[#bb0c09] block">Digital Future</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  SBS WireOne delivers cutting-edge IT solutions that transform businesses. 
                  From cloud infrastructure to cybersecurity, we&apos;re your trusted technology partner.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="primary-button">
                  Get Started
                  <ArrowRight size={20} />
                </button>
                <button className="secondary-button">
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="feature-card">
                    <Cloud className="text-blue-600 mb-4" size={32} />
                    <h3 className="font-semibold text-gray-900 mb-2">Cloud Solutions</h3>
                    <p className="text-sm text-gray-600">Scalable infrastructure</p>
                  </div>
                  <div className="feature-card">
                    <Shield className="text-green-600 mb-4" size={32} />
                    <h3 className="font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                    <p className="text-sm text-gray-600">Advanced protection</p>
                  </div>
                  <div className="feature-card">
                    <Network className="text-purple-600 mb-4" size={32} />
                    <h3 className="font-semibold text-gray-900 mb-2">Network Setup</h3>
                    <p className="text-sm text-gray-600">Reliable connectivity</p>
                  </div>
                  <div className="feature-card">
                    <HeadphonesIcon className="text-orange-600 mb-4" size={32} />
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-600">Always available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">About SBS WireOne</h2>
            <p className="section-subtitle">
              Your trusted partner in digital transformation with over a decade of experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Leadership</h3>
                    <p className="text-gray-600">
                      Recognized as a leading IT solutions provider with multiple industry awards and certifications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our certified professionals bring deep expertise across all major technology platforms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <TrendingUp className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Helping businesses achieve measurable growth through strategic technology implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6">
                <Cloud className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure, migration services, and optimization for maximum performance and cost efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Cloud Migration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Infrastructure Management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Cost Optimization
                </li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="bg-green-100 rounded-lg p-4 w-fit mb-6">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Advanced security solutions to protect your business from cyber threats and ensure compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Threat Detection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Security Audits
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Compliance Management
                </li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="bg-purple-100 rounded-lg p-4 w-fit mb-6">
                <Network className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Design, implementation, and management of robust network infrastructure for optimal connectivity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Network Design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Performance Monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  24/7 Support
                </li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="bg-orange-100 rounded-lg p-4 w-fit mb-6">
                <Globe className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic IT guidance to align technology with your business objectives and drive growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Technology Strategy
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Digital Transformation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Process Optimization
                </li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="bg-red-100 rounded-lg p-4 w-fit mb-6">
                <Zap className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Managed Services</h3>
              <p className="text-gray-600 mb-4">
                Proactive IT management and monitoring to ensure your systems run smoothly 24/7.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Proactive Monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Backup Solutions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Disaster Recovery
                </li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="bg-indigo-100 rounded-lg p-4 w-fit mb-6">
                <HeadphonesIcon className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock technical support to keep your business running without interruption.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  24/7 Help Desk
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Remote Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  On-site Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real experiences from businesses that trust SBS WireOne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;SBS WireOne transformed our IT infrastructure completely. Their cloud migration saved us 40% on operational costs while improving performance.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Doe</div>
                  <div className="text-sm text-gray-600">CTO, TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Outstanding cybersecurity implementation. We haven&apos;t had a single security incident since partnering with SBS WireOne 2 years ago.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-sm text-gray-600">CEO, SecureFinance</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Their 24/7 support is incredible. Whenever we have an issue, they resolve it quickly and professionally. Highly recommended!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">RJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Robert Johnson</div>
                  <div className="text-sm text-gray-600">IT Director, RetailPlus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle">
              Let&apos;s discuss how we can help transform your business with the right IT solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                    <p className="text-gray-600">
                      Ready to take your business to the next level? Our experts are here to help you succeed.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <HeadphonesIcon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Call Us</div>
                        <div className="text-gray-600">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 rounded-lg p-3">
                        <Globe className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email Us</div>
                        <div className="text-gray-600">info@sbswireone.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-lg p-3">
                        <Globe className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Visit Us</div>
                        <div className="text-gray-600">
                          123 Tech Street<br />
                          Silicon Valley, CA 94025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-input"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-input"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-input"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-input"
                    />
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="form-input resize-none"
                    ></textarea>
                    <button type="submit" className="primary-button w-full justify-center">
                      Send Message
                      <ArrowRight size={20} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
