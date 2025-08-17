'use client';

import React, { useState, useEffect } from 'react';
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

const reviews = [
  {
    name: "John Doe",
    initials: "JD",
    company: "CTO, TechCorp",
    color: "bg-blue-100 text-blue-600",
    review: "SBS WireOne transformed our IT infrastructure completely. Their cloud migration saved us 40% on operational costs while improving performance.",
  },
  {
    name: "Sarah Miller",
    initials: "SM",
    company: "CEO, SecureFinance",
    color: "bg-green-100 text-green-600",
    review: "Outstanding cybersecurity implementation. We haven't had a single security incident since partnering with SBS WireOne 2 years ago.",
  },
  {
    name: "Robert Johnson",
    initials: "RJ",
    company: "IT Director, RetailPlus",
    color: "bg-purple-100 text-purple-600",
    review: "Their 24/7 support is incredible. Whenever we have an issue, they resolve it quickly and professionally. Highly recommended!",
  },
  {
    name: "Priya Singh",
    initials: "PS",
    company: "COO, FinEdge",
    color: "bg-orange-100 text-orange-600",
    review: "The web development team at SBS WireOne built us a stunning e-commerce platform. Our sales have doubled since launch.",
  },
  {
    name: "Michael Lee",
    initials: "ML",
    company: "Manager, RealEstatePro",
    color: "bg-green-100 text-green-600",
    review: "Their real estate business solutions made property management effortless. Great team and great results.",
  },
  {
    name: "Fatima Noor",
    initials: "FN",
    company: "Founder, StartupHub",
    color: "bg-blue-100 text-blue-600",
    review: "SBS WireOne's IT consulting helped us scale our startup efficiently. Highly strategic and supportive.",
  },
  {
    name: "David Kim",
    initials: "DK",
    company: "Director, EduSmart",
    color: "bg-purple-100 text-purple-600",
    review: "Their managed services keep our systems running smoothly. We never worry about downtime anymore.",
  },
  {
    name: "Ayesha Rahman",
    initials: "AR",
    company: "CEO, BizGrowth",
    color: "bg-orange-100 text-orange-600",
    review: "Excellent property maintenance and support. Our facilities are always in top shape.",
  },
  {
    name: "Carlos Martinez",
    initials: "CM",
    company: "CTO, MarketWave",
    color: "bg-green-100 text-green-600",
    review: "The team is responsive and knowledgeable. SBS WireOne is our go-to for all IT needs.",
  },
  {
    name: "Emily Chen",
    initials: "EC",
    company: "Product Lead, ShopEase",
    color: "bg-blue-100 text-blue-600",
    review: "Their SEO and web development services brought us to the top of search results. Fantastic ROI.",
  },
  {
    name: "Mohammad Hasan",
    initials: "MH",
    company: "IT Manager, HealthFirst",
    color: "bg-purple-100 text-purple-600",
    review: "SBS WireOne's technical support is always available and solves issues fast. Great peace of mind.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % reviews.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearTimeout(timer);
  }, [current]);

  const nextReview = () => setCurrent((current + 1) % reviews.length);
  const prevReview = () => setCurrent((current - 1 + reviews.length) % reviews.length);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-16 bg-gradient-to-br from-[#e0e7ff] via-[#fef6f6] to-[#f3f4f6] overflow-hidden">
        {/* Animated circles and shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#bb0c09]/30 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tr from-indigo-200 via-blue-100 to-[#bb0c09]/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-[#bb0c09]/20 to-blue-600/10 rounded-full blur-xl animate-bounce" style={{ transform: 'translate(-50%, -50%)' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full blur-lg animate-pulse"></div>
        {/* End shapes */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
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
                <button
                  className="primary-button relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-[#a30a08] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <button
                  className="secondary-button relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-[#bb0c09] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <Star className="mx-auto mb-2 text-[#bb0c09] group-hover:scale-125 transition-transform duration-300" size={28} />
                  <div className="text-2xl font-bold text-[#bb0c09] group-hover:text-[#a30a08] transition-colors">100+</div>
                  <div className="text-sm text-gray-600 group-hover:text-[#bb0c09] transition-colors">Happy Clients</div>
                </div>
                <div className="text-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <Zap className="mx-auto mb-2 text-blue-600 group-hover:scale-125 transition-transform duration-300" size={28} />
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-indigo-700 transition-colors">99.9%</div>
                  <div className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Uptime</div>
                </div>
                <div className="text-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <HeadphonesIcon className="mx-auto mb-2 text-green-600 group-hover:scale-125 transition-transform duration-300" size={28} />
                  <div className="text-2xl font-bold text-green-600 group-hover:text-[#bb0c09] transition-colors">24/7</div>
                  <div className="text-sm text-gray-600 group-hover:text-green-600 transition-colors">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#f3f4f6] via-[#e0e7ff] to-[#fef6f6] rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  {/* Property Maintenance */}
                  <div className="feature-card group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl">
                    <Award className="mx-auto mb-4 text-yellow-600 group-hover:text-[#bb0c09] transition-colors duration-300" size={40} />
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#bb0c09] transition-colors">Property Maintenance</h3>
                    <p className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors">Facility management & upkeep</p>
                  </div>
                  {/* Real Estate Business */}
                  <div className="feature-card group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 rounded-xl">
                    <Users className="mx-auto mb-4 text-green-600 group-hover:text-[#bb0c09] transition-colors duration-300" size={40} />
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#bb0c09] transition-colors">Real Estate Business</h3>
                    <p className="text-sm text-gray-600 group-hover:text-green-600 transition-colors">Buy, sell & manage properties</p>
                  </div>
                  {/* Web Development */}
                  <div className="feature-card group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 rounded-xl">
                    <Globe className="mx-auto mb-4 text-blue-600 group-hover:text-[#bb0c09] transition-colors duration-300" size={40} />
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#bb0c09] transition-colors">Web Development</h3>
                    <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Custom websites & e-commerce</p>
                  </div>
                  {/* 24/7 Support (keep as is) */}
                  <div className="feature-card group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 rounded-xl">
                    <HeadphonesIcon className="mx-auto mb-4 text-orange-600 group-hover:text-[#bb0c09] transition-colors duration-300" size={40} />
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#bb0c09] transition-colors">24/7 Support</h3>
                    <p className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">Always available</p>
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
                <div className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-100 via-[#bb0c09]/20 to-blue-200 rounded-lg p-3 group-hover:animate-pulse">
                    <Award className="text-blue-600 group-hover:text-[#bb0c09] transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#bb0c09] transition-colors">Industry Leadership</h3>
                    <p className="text-gray-600">Recognized as a leading IT solutions provider with multiple industry awards and certifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-green-100 via-[#bb0c09]/20 to-green-200 rounded-lg p-3 group-hover:animate-pulse">
                    <Users className="text-green-600 group-hover:text-[#bb0c09] transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#bb0c09] transition-colors">Expert Team</h3>
                    <p className="text-gray-600">Our certified professionals bring deep expertise across all major technology platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-purple-100 via-[#bb0c09]/20 to-purple-200 rounded-lg p-3 group-hover:animate-pulse">
                    <TrendingUp className="text-purple-600 group-hover:text-[#bb0c09] transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#bb0c09] transition-colors">Proven Results</h3>
                    <p className="text-gray-600">Helping businesses achieve measurable growth through strategic technology implementation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-[#bb0c09]/10 to-orange-50 rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200 rounded-xl p-4">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-[#bb0c09] transition-colors">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-green-100 hover:to-green-200 rounded-xl p-4">
                  <div className="text-4xl font-bold text-green-600 mb-2 group-hover:text-[#bb0c09] transition-colors">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-200 rounded-xl p-4">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-[#bb0c09] transition-colors">27+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200 rounded-xl p-4">
                  <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:text-[#bb0c09] transition-colors">95%</div>
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
            {/* Property Maintenance */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-yellow-50 via-[#bb0c09]/10 to-yellow-100 rounded-2xl p-8">
              <div className="bg-yellow-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <Award className="text-yellow-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">Property Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive property maintenance solutions to keep your assets in top condition and maximize value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Facility Management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Repairs & Upkeep
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Scheduled Inspections
                </li>
              </ul>
            </div>
            {/* Real Estate Business */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-green-50 via-[#bb0c09]/10 to-green-100 rounded-2xl p-8">
              <div className="bg-green-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <Users className="text-green-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">Real Estate Business</h3>
              <p className="text-gray-600 mb-4">
                End-to-end real estate solutions for buying, selling, and managing properties with expert guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Property Listings
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Transaction Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Investment Consulting
                </li>
              </ul>
            </div>
            {/* Web Development */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-blue-50 via-[#bb0c09]/10 to-blue-100 rounded-2xl p-8">
              <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <Globe className="text-blue-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Custom web development services to help your business stand out online and drive digital growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Website Design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  E-commerce Solutions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  SEO Optimization
                </li>
              </ul>
            </div>
            {/* IT Consulting */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-orange-50 via-[#bb0c09]/10 to-orange-100 rounded-2xl p-8">
              <div className="bg-orange-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <Award className="text-orange-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">IT Consulting</h3>
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
            {/* Managed Services */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-red-50 via-[#bb0c09]/10 to-red-100 rounded-2xl p-8">
              <div className="bg-red-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <Zap className="text-red-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">Managed Services</h3>
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
            {/* Technical Support */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-indigo-50 via-[#bb0c09]/10 to-indigo-100 rounded-2xl p-8">
              <div className="bg-indigo-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <HeadphonesIcon className="text-indigo-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">Technical Support</h3>
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
          <div className="flex justify-center items-center">
            <button
              onClick={() => setCurrent((current - 1 + reviews.length) % reviews.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-[#bb0c09] hover:text-white transition-colors mr-4 border border-[#bb0c09]/30"
              aria-label="Previous Review"
            >
              &#8592;
            </button>
            <div className="testimonial-card max-w-xl w-full mx-auto transition-all duration-500 border-2 border-[#bb0c09] rounded-2xl bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] shadow-xl p-8 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#bb0c09] flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-white font-bold text-lg">{reviews[current].initials}</span>
              </div>
              <div className="flex items-center justify-center mb-4 mt-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current drop-shadow" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg text-center">
                &quot;{reviews[current].review}&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="font-semibold text-[#bb0c09] text-lg">{reviews[current].name}</div>
                <div className="text-sm text-gray-600">{reviews[current].company}</div>
              </div>
            </div>
            <button
              onClick={() => setCurrent((current + 1) % reviews.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-[#bb0c09] hover:text-white transition-colors ml-4 border border-[#bb0c09]/30"
              aria-label="Next Review"
            >
              &#8594;
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#bb0c09]' : 'bg-gray-300'} transition-colors border border-[#bb0c09]/40`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-[#e0e7ff] via-[#fef6f6] to-[#bb0c09]/10 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-10 left-1/3 w-32 h-32 bg-gradient-to-br from-[#bb0c09]/30 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tr from-indigo-200 via-blue-100 to-[#bb0c09]/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#bb0c09]/20 to-blue-600/10 rounded-full blur-xl animate-bounce"></div>
        {/* End shapes */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle">
              Let&apos;s discuss how we can help transform your business with the right IT solutions
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] rounded-2xl shadow-2xl p-8 lg:p-12 border-2 border-[#bb0c09] relative overflow-visible">
              {/* Animated floating icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#bb0c09] flex items-center justify-center shadow-lg border-4 border-white animate-bounce z-20">
                <HeadphonesIcon className="text-white" size={32} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#bb0c09] mb-4">Get in Touch</h3>
                    <p className="text-gray-600">
                      Ready to take your business to the next level? Our experts are here to help you succeed.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-blue-100 rounded-lg p-3 group-hover:animate-pulse transition-all">
                        <HeadphonesIcon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#bb0c09] transition-colors">Call Us</div>
                        <div className="text-gray-600">01886-821225</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-green-100 rounded-lg p-3 group-hover:animate-pulse transition-all">
                        <Globe className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#bb0c09] transition-colors">Email Us</div>
                        <div className="text-gray-600">sbswireoneits@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="bg-purple-100 rounded-lg p-3 group-hover:animate-pulse transition-all">
                        <Globe className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#bb0c09] transition-colors">Visit Us</div>
                        <div className="text-gray-600">
                          Mohakhali DOHS,<br />
                          Dhaka, Bangladesh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Animated Contact Form */}
                <div className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                    />
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="form-input resize-none bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                    ></textarea>
                    <button
                      type="submit"
                      className="primary-button w-full justify-center relative overflow-hidden group transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center">
                        Send Message
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <span className="absolute inset-0 bg-[#bb0c09] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
