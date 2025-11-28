"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText("info@rsmplumbing.co.tz");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleEmailOpen = () => {
    window.open("mailto:info@rsmplumbing.co.tz");
  };

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-pipe-pattern bg-repeat"></div>
      </div>

      {/* Water Flow Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#0096D6] to-transparent animate-water-flow"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-linear-to-br from-[#0096D6] to-[#E3003A] rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">RSM Plumbing</h3>
                <p className="text-gray-400 text-sm">Tanzania Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for expert plumbing solutions across Tanzania. 
              Delivering reliability and excellence since 2009.
            </p>
            
            {/* Credentials & Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>ISO Certified Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="space-y-2">
                <button 
                  onClick={() => handleCall("+255758175250")}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform group w-full text-left"
                >
                  <div className="w-8 h-8 bg-[#0096D6] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold">+255 758 175 250</div>
                    <div className="text-xs text-gray-400">Primary Line</div>
                  </div>
                </button>

                <button 
                  onClick={() => handleCall("+255618526282")}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform group w-full text-left"
                >
                  <div className="w-8 h-8 bg-[#E3003A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-sm">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold">+255 618 526 282</div>
                    <div className="text-xs text-gray-400">Emergency Line</div>
                  </div>
                </button>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <button 
                  onClick={handleEmailOpen}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    handleEmailClick();
                  }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform group w-full text-left"
                >
                  <div className="w-8 h-8 bg-linear-to-r from-[#0096D6] to-[#E3003A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold">info@rsmplumbing.co.tz</div>
                    <div className="text-xs text-gray-400">
                      {emailCopied ? "✓ Copied!" : "Click to email • Right-click to copy"}
                    </div>
                  </div>
                </button>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>
                <div>
                  <div className="font-semibold">Dar es Salaam</div>
                  <div className="text-xs text-gray-400">Tanzania</div>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Director */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">Leadership</h4>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-[#0096D6] to-[#E3003A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MD
                </div>
                <div>
                  <h5 className="font-bold text-white">Rajabu S. Mtindiro</h5>
                  <p className="text-gray-300 text-sm">Managing Director</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "Leading RSM Plumbing with 10 years of expertise in delivering exceptional plumbing solutions across Tanzania."
              </p>
              <div className="flex gap-2 mt-4">
                <div className="w-3 h-3 bg-[#0096D6] rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-[#E3003A] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-[#0096D6] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center text-white">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            {[
              "Dar es Salaam", "Zanzibar", "Dodoma", "Mwanza", "Arusha", "Mbeya",
              "Morogoro", "Tanga", "Moshi", "Iringa"
            ].map((area, index) => (
              <div 
                key={area}
                className="bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 transform"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 RSM Plumbing Tanzania Ltd. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { name: "Facebook", icon: "📘", url: "#" },
                { name: "Instagram", icon: "📷", url: "#" },
                { name: "LinkedIn", icon: "💼", url: "#" },
                { name: "WhatsApp", icon: "💬", url: "#" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0096D6] transition-all duration-300 hover:scale-110 transform"
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-sm text-center md:text-right">
              Building Tanzania's Future, One Pipe at a Time
            </div>
          </div>
        </div>
      </div>

      

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes water-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-water-flow {
          animation: water-flow 3s linear infinite;
        }
        .bg-pipe-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230096D6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </footer>
  );
};

export default Footer;