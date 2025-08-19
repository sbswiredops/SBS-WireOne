import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-white to-gray-200 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="SBS WireOne Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Leading IT solutions provider delivering innovative technology services 
              to help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#bb0c09] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#bb0c09] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/p/SBS-WireOne-61571632972871/" className="text-gray-500 hover:text-[#bb0c09] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-700 hover:text-[#bb0c09] transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-[#bb0c09] transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-[#bb0c09] transition-colors text-sm">Services</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-[#bb0c09] transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-700 text-sm">Property Maintenance</span></li>
              <li><span className="text-gray-700 text-sm">Real Estate Business</span></li>
              <li><span className="text-gray-700 text-sm">Web Development</span></li>
              <li><span className="text-gray-700 text-sm">IT Consulting</span></li>
              <li><span className="text-gray-700 text-sm">Managed Services</span></li>
              <li><span className="text-gray-700 text-sm">Technical Support</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#bb0c09]" />
                <span className="text-gray-700 text-sm">sbswireoneits@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#bb0c09]" />
                <span className="text-gray-700 text-sm">01886-821225</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#bb0c09] mt-0.5" />
                <span className="text-gray-700 text-sm">
                  Mohakhali DOHS, <br />
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 SBS WireOne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
