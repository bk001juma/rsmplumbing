"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "24/7 Emergency Services",
    "7 Years Experience",
    "Licensed & Insured",
    "Sustainable Solutions",
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative w-full min-h-screen blue overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main Background */}
        <Image
          src="/images/rsm/bg-tools.jpg"
          alt="background tools"
          fill
          className="object-cover opacity-20 pointer-events-none"
          priority
        />

        {/* Animated Water Droplets */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10 animate-drip"
              style={{
                width: `${15 + Math.random() * 30}px`,
                height: `${15 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute right-0 bottom-0 w-[60%] h-[55%] bg-linear-to-tr from-[#0076BE]/40 via-[#0076BE]/20 to-transparent rounded-br-full"></div>
        <div className="absolute left-0 top-0 w-[40%] h-[40%] bg-linear-to-br from-[#E3003A]/20 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-3 flex overflow-hidden">
        <div className="w-1/2 bg-[#E3003A] relative">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
        <div className="w-1/2 bg-[#0076BE] relative">
          <div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 lg:py-16 min-h-screen flex flex-col justify-center">
        {/* Header Section */}
        <div
          className={`text-center mb-8 lg:mb-12 transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <img
              src="/images/rsm/logo4.png"
              alt="Company Logo"
              className="w-50 h-70 object-contain"
            />

            <div className="text-left">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#0D1A3C]">
                RSM PLUMBING
              </h1>
              <p className="text-lg font-semibold text-[#E3003A]">
                TANZANIA LTD
              </p>
            </div>
          </div>

          {/* Rotating Features */}
          <div className="h-8 mb-2">
            <div className="text-lg font-semibold text-[#0076BE] transition-all duration-500">
              {features[currentFeature]}
            </div>
          </div>

          <p className="text-sm font-medium text-white uppercase tracking-wider">
            INNOVATIVE SOLUTIONS & GUARANTEED QUALITY
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Hero Section */}
          <div
            className={`space-y-6 transform transition-all duration-700 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Main Title Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-[#0076BE] to-[#E3003A] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-linear-to-br from-[#0076BE] via-[#0066AA] to-[#005599] rounded-2xl border-4 border-white shadow-2xl p-8 lg:p-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-center uppercase">
                  <span className="text-white block mb-2">Reliable</span>
                  <span className="text-white/90 block mb-2">Plumbing</span>
                  <span className="text-white/80 block">Services</span>
                </h1>

                {/* Animated Underline */}
                <div className="w-24 h-1 bg-linear-to-r from-[#E3003A] to-yellow-400 rounded-full mx-auto mt-4 animate-pulse"></div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "7", label: "Years" },
                { number: "50", label: "Projects" },
                { number: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  <div className="text-xl font-bold text-[#0076BE]">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section - Separated Layout */}
          <div
            className={`relative transform transition-all duration-700 delay-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center lg:items-end space-y-6">
              {/* Worker Image - Standalone */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-[#E3003A] to-[#0076BE] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500"></div>
                <Image
                  src="/images/rsm/worker.png"
                  alt="professional plumbing technician"
                  width={400}
                  height={500}
                  className="relative z-10 transform transition-transform duration-500 group-hover:scale-105 rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Info Card - Separate from image */}
              <div className="w-full max-w-md lg:max-w-sm bg-linear-to-br from-[#E3003A] to-[#FF6B6B] text-white p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="flex items-start gap-3">
                  <div className="text-2xl shrink-0">💧</div>
                  <p className="text-sm leading-relaxed font-medium">
                    With a blend of tradition and modern technology, RSM
                    Plumbing Tanzania Ltd sets new benchmarks in sustainable,
                    reliable, and efficient plumbing solutions.
                  </p>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-white/50 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Company Profile */}
        <div
          className={`text-center lg:text-right mt-12 lg:mt-8 transform transition-all duration-700 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200 shadow-lg">
            <p className="text-[#0D1A3C] text-lg font-semibold uppercase tracking-wide">
              Company <span className="font-bold text-[#E3003A]">Profile</span>
            </p>
            <span className="px-4 py-1 bg-linear-to-r from-[#0076BE] to-[#E3003A] text-white rounded-full font-bold text-sm shadow-lg">
              2025
            </span>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes drip {
          0% {
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-10px) rotate(6deg);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-drip {
          animation: drip 8s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
