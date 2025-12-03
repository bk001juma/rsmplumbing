"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const servicesData = [
    {
      title: "Plumbing Repair Services",
      description: "At 1054 Valeria Tramas Ltd we also don serving service for property operations that's damage. and services today. Manage, operate your client details.",
      image: "/images/simple/2.png"
    },
    {
      title: "Water Heating Solution",
      description: "We offer sufficient water from the soil, farm, farm fatalization to maintenance and serve by anyone in place, secure or make excellent coverage due.",
      image: "/images/simple/9.png"
    },
    {
      title: "Water Treatment Solutions",
      description: "Our education and program efforts may be shown tomorrow, prospective soldiers visited in most part every year. Scholars are not subject to extensive advice of residents and wants.",
      image: "/images/simple/8.png"
    },
    {
      title: "Sewage System Installation",
      description: "Our staff were well-known professionals, but all health needs management offered a limited care environment in practice ensuring service.",
      image: "/images/simple/1.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-700 ease-out"
          style={{
            backgroundImage: "url('/images/simple/8.png')",
            transform: isVisible ? 'scale(1.05)' : 'scale(1)'
          }}
        ></div>
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            background: `linear-gradient(
              to bottom,
              rgb(220, 38, 38) 0%,
              rgba(220, 38, 38, ${isVisible ? 0.7 : 0.9}) 25%,
              rgba(220, 38, 38, ${isVisible ? 0.3 : 0.6}) 50%,
              rgba(220, 38, 38, ${isVisible ? 0.1 : 0.3}) 75%,
              transparent 100%
            )`,
            opacity: isVisible ? 1 : 0.8
          }}
        ></div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Animated Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-yellow-300">Services</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto transform transition-all duration-700 delay-300">
            <div className={`w-full h-full bg-white transition-all duration-1000 delay-500 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          </div>
          <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Professional solutions for all your plumbing and firefighting system needs
          </p>
        </div>
        
        {/* Animated Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: isVisible ? 'translateY(0) rotate(0)' : 'translateY(20px) rotate(2deg)'
              }}
            >
              {/* Image Container with Hover Effect */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                {/* Service Number */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                {/* Hover Border Effect */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-linear-to-r from-red-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Animated Button */}
                <button className="w-full py-3 bg-linear-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg hover:from-red-700 hover:to-red-800 active:scale-95">
                  Learn More
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            </div>
          ))}
        </div>

        {/* Animated CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-6">
              Contact us today for a free consultation and estimate
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;