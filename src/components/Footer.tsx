import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">SBS WireOne</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading IT solutions provider delivering innovative technology services 
              to help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm">Cloud Solutions</span></li>
              <li><span className="text-gray-300 text-sm">Network Infrastructure</span></li>
              <li><span className="text-gray-300 text-sm">Cybersecurity</span></li>
              <li><span className="text-gray-300 text-sm">IT Consulting</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@sbswireone.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Tech Street<br />
                  Silicon Valley, CA 94025
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SBS WireOne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
