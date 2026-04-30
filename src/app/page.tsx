"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import {
  ArrowRight,
  AlertTriangle,
  ExternalLink,
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
  TrendingUp,
} from "lucide-react";

const reviews = [
  {
    name: "Sarah Chen",
    initials: "SC",
    company: "Property Investment Manager, Crown Holdings",
    color: "bg-blue-100 text-blue-600",
    review:
      "SBS WireOne transformed our property portfolio management. Their maintenance team is proactive and their real estate expertise is unmatched.",
  },
  {
    name: "Michael Rodriguez",
    initials: "MR",
    company: "Real Estate Developer, Urban Vista",
    color: "bg-green-100 text-green-600",
    review:
      "From routine inspections to major transactions, SBS WireOne delivers exceptional service every time. Highly recommended for any property needs.",
  },
  {
    name: "Jennifer Thompson",
    initials: "JT",
    company: "Operations Director, Metro Commercial",
    color: "bg-purple-100 text-purple-600",
    review:
      "Their facility management saved us thousands in emergency repairs. The scheduled maintenance program is worth every penny.",
  },
  {
    name: "David Park",
    initials: "DP",
    company: "Portfolio Manager, Pinnacle Investments",
    color: "bg-orange-100 text-orange-600",
    review:
      "SBS WireOne helped us sell three properties above market value. Their transaction support made the entire process seamless.",
  },
  {
    name: "Lisa Wang",
    initials: "LW",
    company: "Property Manager, Riverside Apartments",
    color: "bg-green-100 text-green-600",
    review:
      "Outstanding property maintenance service. They keep our facilities running smoothly and our tenants happy.",
  },
  {
    name: "Robert Johnson",
    initials: "RJ",
    company: "CEO, Heritage Property Group",
    color: "bg-blue-100 text-blue-600",
    review:
      "The investment consulting from SBS WireOne guided us to profitable property acquisitions. Their market knowledge is impressive.",
  },
  {
    name: "Amanda Foster",
    initials: "AF",
    company: "Facilities Coordinator, TechHub Center",
    color: "bg-purple-100 text-purple-600",
    review:
      "Reliable, professional, and thorough. SBS WireOne's repair and upkeep services have extended our building's lifespan significantly.",
  },
  {
    name: "Kevin Lee",
    initials: "KL",
    company: "Building Owner, Downtown Properties",
    color: "bg-orange-100 text-orange-600",
    review:
      "Their property listing expertise got our commercial space leased within weeks. Exceptional marketing and tenant screening.",
  },
  {
    name: "Maria Gonzalez",
    initials: "MG",
    company: "Asset Manager, Golden Gate Realty",
    color: "bg-green-100 text-green-600",
    review:
      "SBS WireOne's comprehensive approach to property management gives us peace of mind. They handle everything flawlessly.",
  },
  {
    name: "Thomas Anderson",
    initials: "TA",
    company: "Property Owner, Anderson Holdings",
    color: "bg-blue-100 text-blue-600",
    review:
      "The scheduled inspections caught issues before they became expensive problems. SBS WireOne's preventive approach saves money.",
  },
  {
    name: "Rachel Kim",
    initials: "RK",
    company: "Investment Director, Skyline Capital",
    color: "bg-purple-100 text-purple-600",
    review:
      "From property acquisition to ongoing maintenance, SBS WireOne is our trusted partner. Their expertise drives our success.",
  },
];

const evidenceSnapshots = [
  {
    title: "Screenshot 1",
    description: "First supporting capture from the review set.",
    note: "Public/1.jpeg",
    src: "/1.jpeg",
  },
  {
    title: "Screenshot 2",
    description: "Second supporting capture from the review set.",
    note: "Public/2.jpeg",
    src: "/2.jpeg",
  },
  {
    title: "Screenshot 3",
    description: "Third supporting capture from the review set.",
    note: "Public/3.jpeg",
    src: "/3.jpeg",
  },
  {
    title: "Screenshot 4",
    description: "Fourth supporting capture from the review set.",
    note: "Public/4.jpeg",
    src: "/4.jpeg",
  },
];

const reportSources = [
  "https://www.facebook.com/share/p/1BAMPXew4U/",
  "https://www.facebook.com/61566374476801/posts/122196986426545815/?app=fbl",
  "https://www.banglanetexpress.com/archives/855?",
  "https://www.facebook.com/61557050856455/posts/122327346092235028/?app=fbl",
  "https://bntnews24.com/archives/74365?",
  "https://www.facebook.com/100070093010809/posts/1277709414575480/?app=fbl",
];

const complaintHighlights = [
  "বেতন, বোনাস এবং পাওনা অর্থ দীর্ঘদিন ধরে পরিশোধ না করার অভিযোগ",
  "কোনো পূর্ব নোটিশ ছাড়াই কর্মী ছাঁটাইয়ের অভিযোগ",
  "আনুষ্ঠানিকভাবে বন্ধ না করে সীমিত জনবল দিয়ে কার্যক্রম চালানোর অভিযোগ",
  "প্রতিজনের এক লক্ষ টাকারও বেশি বকেয়া পাওনার দাবি",
];

const complaintParagraphs = [
  "ঢাকা প্রতিনিধি",
  "রাজধানীর মহাখালী DOHS এলাকায় অবস্থিত দুটি বেসরকারি আইটি প্রতিষ্ঠান—SBS WireOne এবং Shekhabo Limited—এর বিরুদ্ধে বেতন-ভাতা বঞ্চনা এবং নোটিশ ছাড়াই কর্মী ছাঁটাইয়ের অভিযোগ উঠেছে। অভিযোগপত্রে বলা হয়েছে, প্রতিষ্ঠান দুটি নিয়মিত বেতন, বোনাস এবং অন্যান্য প্রাপ্য পরিশোধ না করে একাধিক কর্মীকে হঠাৎ চাকরি থেকে অব্যাহতি দিয়েছে।",
  "ভুক্তভোগী কর্মচারীরা জানান, দীর্ঘদিন ধরে তারা নিয়মিত বেতন ও উৎসব বোনাস থেকে বঞ্চিত হয়ে আসছেন। অনেক ক্ষেত্রে আংশিক বেতন দেওয়া হলেও বাকি পাওনা দীর্ঘ সময় ধরে অনাদায়ী রাখা হয়েছে।",
  "অভিযোগপত্রে আরও উল্লেখ করা হয় যে, কয়েকজন কর্মচারীর একাধিক মাসের সম্পূর্ণ বেতন এখনো বকেয়া রয়েছে, ঈদসহ বিভিন্ন উৎসবের বোনাস দেওয়া হয়নি, এবং কোনো পূর্ব নোটিশ ছাড়াই তাদের অব্যাহতি দেওয়া হয়েছে।",
  "ভুক্তভোগীদের দাবি অনুযায়ী, প্রতিজনের প্রায় এক লক্ষ টাকারও বেশি বকেয়া পাওনা রয়েছে। অভিযোগে আরও বলা হয়েছে, SBS WireOne এবং Shekhabo Limited-এর প্রতিষ্ঠাতা Shadman Israk এবং চেয়ারম্যান Zahiruddin Babar-এর দৃষ্টি আকর্ষণ করা হলেও এখন পর্যন্ত কার্যকর পদক্ষেপ নেওয়া হয়নি।",
  "এ বিষয়ে সংশ্লিষ্ট কর্তৃপক্ষের জরুরি হস্তক্ষেপ কামনা করেছেন ভুক্তভোগীরা।",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [brokenEvidence, setBrokenEvidence] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % reviews.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearTimeout(timer);
  }, [current]);

  const nextReview = () => setCurrent((current + 1) % reviews.length);
  const prevReview = () =>
    setCurrent((current - 1 + reviews.length) % reviews.length);

  const markEvidenceBroken = (src: string) => {
    setBrokenEvidence(prev =>
      prev[src] ? prev : { ...prev, [src]: true }
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual Google Apps Script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycby0yNtVwe0G5r0nNvTImNK4y-cXKwLgsEPyi_m3e1JDe_kQvaQs6AWZW5Vv_DSkEgAH/exec';

      // Use FormData for Google Apps Script (no-cors)
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Required for Google Apps Script
      });

      // With no-cors, we can't read the response, so we assume success
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#fff8f5_0%,#f4f7ff_46%,#ffffff_100%)] pt-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(187,12,9,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0.8))]" />
        <div className="absolute -left-24 top-6 h-64 w-64 rounded-full bg-[#bb0c09]/10 blur-3xl animate-pulse" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl animate-spin-slow" />
        <div className="absolute bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Alert Badge */}
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#bb0c09]/20 bg-[#bb0c09]/10 px-5 py-2 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bb0c09] text-white animate-pulse">
                  <AlertTriangle size={18} />
                </div>
                <span className="text-sm font-bold text-[#bb0c09] uppercase tracking-[0.15em]">
                  ⚠️ SCAMMER ALERT
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center text-slate-950 mb-12 sm:mb-16 leading-tight">
              Evidence & Screenshots
            </h1>

            {/* Images Grid */}
            <div className="relative" id="evidence-board">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-[#bb0c09]/20 to-blue-600/10 blur-2xl" />
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {evidenceSnapshots.map((snapshot, index) => (
                  <article
                    key={snapshot.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      {!brokenEvidence[snapshot.src] ? (
                        <Image
                          src={snapshot.src}
                          alt={snapshot.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                          onError={() => markEvidenceBroken(snapshot.src)}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-4 text-center text-slate-400">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.25em]">
                              Add file
                            </div>
                            <div className="mt-2 text-sm">
                              {snapshot.note.replace("Public/", "")}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <div className="w-full">
                        <div className="inline-block rounded-full bg-[#bb0c09] text-white text-xs font-bold px-3 py-1 mb-2">
                          Screenshot {index + 1}
                        </div>
                        <p className="text-sm text-white font-semibold">{snapshot.title}</p>
                        <p className="text-xs text-white/80 mt-1">{snapshot.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="report" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-gray-200 bg-gradient-to-br from-white via-[#fff7f6] to-[#f3f4f6] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#bb0c09]/20 bg-[#bb0c09]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#bb0c09]">
                  <AlertTriangle size={14} />
                  Reported complaint
                </div>
                <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  মহাখালীতে আইটি প্রতিষ্ঠানের বিরুদ্ধে বেতন-ভাতা বঞ্চনা ও নোটিশ ছাড়াই কর্মী ছাঁটাইয়ের অভিযোগ
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                  নিচের অংশটি একটি অভিযোগ/প্রতিবেদন হিসেবে দেখানো হয়েছে, যাতে পাঠক দ্রুত দাবি, অভিযোগ এবং সংশ্লিষ্ট সূত্রগুলো দেখতে পারেন।
                </p>
              </div>
              <div className="rounded-2xl border border-[#bb0c09]/20 bg-white px-4 py-3 text-sm font-semibold text-[#bb0c09] shadow-sm">
                Allegations only
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="space-y-5 text-gray-700">
                  {complaintParagraphs.map((paragraph, index) => (
                    <p key={paragraph} className={index === 0 ? "text-sm font-semibold uppercase tracking-[0.3em] text-[#bb0c09]" : "text-[15px] leading-8"}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">অভিযোগের মূল পয়েন্ট</h3>
                  <div className="mt-4 space-y-3">
                    {complaintHighlights.map((item, index) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-3">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#bb0c09] text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">সূত্র</h3>
                  <div className="mt-4 grid gap-3">
                    {reportSources.map((source, index) => (
                      <a
                        key={`source-${source}`}
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-700 transition-all hover:border-[#bb0c09]/30 hover:bg-[#bb0c09]/5 hover:text-[#bb0c09]"
                      >
                        <span className="font-medium">Source {index + 1}</span>
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Now Reported Complaint */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-gray-200 bg-gradient-to-br from-white via-[#fff7f6] to-[#f3f4f6] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#bb0c09]/20 bg-[#bb0c09]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#bb0c09]">
                  <AlertTriangle size={14} />
                  Reported complaint
                </div>
                <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  মহাখালীতে আইটি প্রতিষ্ঠানের বিরুদ্ধে বেতন-ভাতা বঞ্চনা ও নোটিশ ছাড়াই কর্মী ছাঁটাইয়ের অভিযোগ
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                  নিচের অংশটি একটি অভিযোগ/প্রতিবেদন হিসেবে দেখানো হয়েছে, যাতে পাঠক দ্রুত দাবি, অভিযোগ এবং সংশ্লিষ্ট সূত্রগুলো দেখতে পারেন।
                </p>
              </div>
              <div className="rounded-2xl border border-[#bb0c09]/20 bg-white px-4 py-3 text-sm font-semibold text-[#bb0c09] shadow-sm">
                Allegations only
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="space-y-5 text-gray-700">
                  {complaintParagraphs.map((paragraph, index) => (
                    <p key={paragraph} className={index === 0 ? "text-sm font-semibold uppercase tracking-[0.3em] text-[#bb0c09]" : "text-[15px] leading-8"}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">অভিযোগের মূল পয়েন্ট</h3>
                  <div className="mt-4 space-y-3">
                    {complaintHighlights.map((item, index) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-3">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#bb0c09] text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">সূত্র</h3>
                  <div className="mt-4 grid gap-3">
                    {reportSources.map((source, index) => (
                      <a
                        key={`source-${source}`}
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-700 transition-all hover:border-[#bb0c09]/30 hover:bg-[#bb0c09]/5 hover:text-[#bb0c09]"
                      >
                        <span className="font-medium">Source {index + 1}</span>
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Property Maintenance */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-yellow-50 via-[#bb0c09]/10 to-yellow-100 rounded-2xl p-8">
              <div className="bg-yellow-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <Award
                  className="text-yellow-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">
                Property Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive property maintenance solutions to keep your assets
                in top condition and maximize value.
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
                <Users
                  className="text-green-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">
                Real Estate Business
              </h3>
              <p className="text-gray-600 mb-4">
                End-to-end real estate solutions for buying, selling, and
                managing properties with expert guidance.
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
            {/* IT Consulting */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-orange-50 via-[#bb0c09]/10 to-orange-100 rounded-2xl p-8">
              <div className="bg-orange-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <Award
                  className="text-orange-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">
                IT Consulting
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic IT guidance to align technology with your business
                objectives and drive growth.
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
            {/* EdTech Platform */}
            <div className="service-card group cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-purple-50 via-[#bb0c09]/10 to-purple-100 rounded-2xl p-8">
              <div className="bg-purple-100 rounded-lg p-4 w-fit mb-6 group-hover:animate-pulse transition-all duration-500 ease-in-out">
                <TrendingUp
                  className="text-purple-600 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#bb0c09] transition-colors duration-500 ease-in-out">
                EdTech Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Empowering professionals with job-ready skills through expert-led courses and live interactive learning experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Bank Jobs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  BPO Jobs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  BCS Prep
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* After Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#bb0c09]/10 via-[#e0e7ff] to-[#fff7f6] relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-[#bb0c09]/30 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#bb0c09] text-white font-bold text-lg shadow-lg mb-6 animate-bounce">
              🚀 New Launch!
            </div>
            <h2 className="text-4xl font-extrabold text-[#51356e] mb-4 drop-shadow-lg">
              Shekhabo
            </h2>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              We are launching an innovative Educational Online Platform.
              <br />
              <br />
              <span className="text-[#bb0c09] font-extrabold text-3xl animate-pulse">
                Coming Soon
              </span>
            </p>
            <div className="flex justify-center">
              <Image
                src="/Shekhabo.png"
                alt="Shekhabo Educational Platform Preview"
                width={75}
                height={30}
                className="rounded-2xl shadow-2xl border-4 border-[#51356e] w-75 h-30 object-cover bg-white animate-fade-in"
              />
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
              onClick={() =>
                setCurrent((current - 1 + reviews.length) % reviews.length)
              }
              className="p-2 rounded-full bg-gray-100 hover:bg-[#bb0c09] hover:text-white transition-colors mr-4 border border-[#bb0c09]/30"
              aria-label="Previous Review"
            >
              &#8592;
            </button>
            <div className="testimonial-card max-w-xl w-full mx-auto transition-all duration-500 border-2 border-[#bb0c09] rounded-2xl bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] shadow-xl p-8 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#bb0c09] flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-white font-bold text-lg">
                  {reviews[current].initials}
                </span>
              </div>
              <div className="flex items-center justify-center mb-4 mt-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-current drop-shadow"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg text-center">
                &quot;{reviews[current].review}&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="font-semibold text-[#bb0c09] text-lg">
                  {reviews[current].name}
                </div>
                <div className="text-sm text-gray-600">
                  {reviews[current].company}
                </div>
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
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-[#bb0c09]" : "bg-gray-300"
                } transition-colors border border-[#bb0c09]/40`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 lg:py-32 bg-gradient-to-br from-[#e0e7ff] via-[#fef6f6] to-[#bb0c09]/10 relative overflow-hidden"
      >
        {/* Animated background shapes */}
        <div className="absolute top-10 left-1/3 w-32 h-32 bg-gradient-to-br from-[#bb0c09]/30 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tr from-indigo-200 via-blue-100 to-[#bb0c09]/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#bb0c09]/20 to-blue-600/10 rounded-full blur-xl animate-bounce"></div>
        {/* End shapes */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle">
              Let&apos;s discuss how we can help transform your business with
              the right IT solutions
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] rounded-2xl shadow-2xl p-8 lg:p-12 border-2 border-[#bb0c09] relative overflow-visible">
              {/* Animated floating icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#bb0c09] flex items-center justify-center shadow-lg border-4 border-white animate-bounce z-20">
                <HeadphonesIcon className="text-white" size={32} />
              </div>

              {/* Submission Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you for your message! We&#39;ll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#bb0c09] mb-4">
                      Get in Touch
                    </h3>
                    <p className="text-gray-600">
                      Ready to take your business to the next level? Our experts
                      are here to help you succeed.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-blue-100 rounded-lg p-3 group-hover:animate-pulse transition-all">
                        <HeadphonesIcon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#bb0c09] transition-colors">
                          Call Us
                        </div>
                        <div className="text-gray-600">01886-821225</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="bg-green-100 rounded-lg p-3 group-hover:animate-pulse transition-all">
                        <Globe className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#bb0c09] transition-colors">
                          Email Us
                        </div>
                        <div className="text-gray-600">
                          sbswireoneits@gmail.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="bg-purple-100 rounded-lg p-3 group-hover:animate-pulse transition-all">
                        <Globe className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#bb0c09] transition-colors">
                          Visit Us
                        </div>
                        <div className="text-gray-600">
                          Mohakhali DOHS,
                          <br />
                          Dhaka, Bangladesh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Updated Contact Form */}
                <div className="space-y-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                    />
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-input resize-none bg-gradient-to-br from-[#fff7f6] via-[#ffe3e0] to-[#f3f4f6] border border-[#bb0c09]/40 focus:border-[#bb0c09] rounded-lg transition-all duration-300 focus:scale-105"
                    ></textarea>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="primary-button w-full justify-center relative overflow-hidden group transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && (
                          <ArrowRight
                            size={20}
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          />
                        )}
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
