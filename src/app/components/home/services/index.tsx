"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  
  const services = [
    {
      title: "Plumbing System Architecture",
      description: "We create detailed, precise plumbing designs tailored to each building's unique requirements, ensuring efficiency & compliance.",
      image: "/images/simple/2.png"
    },
    {
      title: "Plumbing System Installation",
      description: "High-quality, durable plumbing installations for both residential and commercial projects.",
      image: "/images/simple/3.png"
    },
    {
      title: "Sanitary System Installation",
      description: "Modern, hygienic sanitary solutions designed for all building types.",
      image: "/images/simple/4.png"
    },
    {
      title: "Fire System Installation",
      description: "Safety-first fire installation systems tailored to protect property and lives.",
      image: "/images/simple/5.jpeg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  // Auto-rotate active service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-linear-to-br from-[#009FE3] via-[#0088CC] to-[#0077B3] py-12 md:py-20 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bubbles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float hidden md:block"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}

        {/* Animated Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 opacity-20">
          <div className="w-full h-full bg-wave-pattern bg-repeat-x animate-wave"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* MAIN WHITE CARD */}
        <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 pt-12 md:pt-16 pb-16 md:pb-24 overflow-visible transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}>
          
          {/* ANIMATED RIGHT VERTICAL LINE - Hidden on mobile */}
          <div className="absolute top-8 right-0 h-[calc(100%-4rem)] w-1 bg-linear-to-b from-[#7FB6D9] via-[#009FE3] to-[#FF0000] transform transition-transform duration-1000 delay-500 hidden md:block">
            <div className={`w-full h-full bg-linear-to-b from-[#7FB6D9] via-[#009FE3] to-[#FF0000] transform transition-transform duration-1000 delay-700 ${
              isVisible ? 'scale-y-100' : 'scale-y-0'
            }`} style={{ transformOrigin: 'top' }}></div>
          </div>

          {/* DECORATIVE CORNER ELEMENTS */}
          <div className="absolute -top-2 -left-2 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-[#009FE3] rounded-tl-lg"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-[#009FE3] rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 border-[#009FE3] rounded-bl-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-[#009FE3] rounded-br-lg"></div>

          {/* ANIMATED TITLE */}
          <div className={`text-center mb-8 md:mb-16 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0A1A2A] mb-3 md:mb-4 relative inline-block">
              Our Services
              <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 md:w-20 h-0.5 md:h-1 bg-linear-to-r from-[#009FE3] to-[#FF0000] rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-2">
              Comprehensive plumbing solutions for residential and commercial properties
            </p>
          </div>

          {/* SERVICES LIST WITH ENHANCED LAYOUT */}
          <div className="space-y-12 md:space-y-16 relative">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-6 items-start group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* ANIMATED RED BULLET WITH PULSE EFFECT */}
                <div className="relative shrink-0 flex items-center gap-3 md:block">
                  <div className={`w-4 h-4 md:w-5 md:h-5 bg-[#FF0000] rounded-full transform transition-all duration-300 ${
                    activeService === index ? 'scale-125' : 'scale-100'
                  }`}></div>
                  <div className={`absolute inset-0 w-4 h-4 md:w-5 md:h-5 bg-[#FF0000] rounded-full animate-ping ${
                    activeService === index ? 'opacity-40' : 'opacity-0'
                  } transition-opacity duration-300`}></div>
                  
                  {/* CONNECTION LINE - Hidden on mobile */}
                  {index < services.length - 1 && (
                    <div className="absolute top-6 md:top-8 left-2 w-0.5 h-8 md:h-16 bg-linear-to-b from-[#FF0000] to-[#009FE3] transform transition-all duration-500 hidden md:block">
                      <div className={`w-full h-full bg-linear-to-b from-[#FF0000] to-[#009FE3] transform transition-transform duration-1000 delay-${index * 200} ${
                        isVisible ? 'scale-y-100' : 'scale-y-0'
                      }`} style={{ transformOrigin: 'top' }}></div>
                    </div>
                  )}
                </div>

                {/* TEXT CONTENT WITH HOVER EFFECTS */}
                <div className="flex-1 transform transition-all duration-300 group-hover:translate-x-0 md:group-hover:translate-x-2 order-3 md:order-0">
                  <h3 className={`font-bold text-lg md:text-xl text-[#0A1A2A] mb-2 md:mb-3 transform transition-all duration-300 ${
                    activeService === index ? 'text-[#009FE3] scale-105' : 'text-[#0A1A2A] scale-100'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  
                  {/* HOVER INDICATOR */}
                  <div className={`w-0 h-0.5 bg-linear-to-r from-[#009FE3] to-[#FF0000] mt-2 md:mt-3 transform transition-all duration-500 ${
                    activeService === index ? 'w-12 md:w-20' : 'w-0'
                  }`}></div>
                </div>

                {/* ENHANCED IMAGE WITH PARALLAX EFFECT - Mobile optimized */}
                <div className="ml-0 md:ml-8 mr-0 md:-mr-24 shrink-0 w-full md:w-auto order-2 md:order-0 mb-4 md:mb-0">
                  <div className={`relative w-full md:w-[180px] lg:w-[220px] h-[120px] md:h-[150px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl border-2 transform transition-all duration-500 mx-auto md:mx-0 ${
                    activeService === index 
                      ? 'border-[#009FE3] scale-105 md:scale-110 shadow-xl md:shadow-2xl' 
                      : 'border-gray-300 scale-100 shadow-lg'
                  }`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 180px, 220px"
                    />
                    
                    {/* IMAGE OVERLAY */}
                    <div className={`absolute inset-0 bg-linear-to-r from-[#009FE3]/20 to-transparent transform transition-all duration-500 ${
                      activeService === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* SERVICE BADGE */}
                    <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-[#FF0000] text-white px-2 py-1 rounded-full text-xs font-bold transform transition-all duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* HOVER GLOW EFFECT */}
                <div className="absolute inset-0 bg-linear-to-r from-[#009FE3]/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 hidden md:block"></div>
              </div>
            ))}
          </div>

          {/* INTERACTIVE NAVIGATION DOTS */}
          <div className="flex justify-center mt-12 md:mt-16 space-x-2 md:space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transform transition-all duration-300 hover:scale-125 ${
                  activeService === index 
                    ? 'bg-[#FF0000] scale-125' 
                    : 'bg-gray-300 hover:bg-[#009FE3]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ENHANCED BOTTOM PIPES IMAGE WITH PARALLAX - Mobile optimized */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 opacity-60 overflow-hidden transform transition-transform duration-1000 hover:scale-105">
        <Image
          src="/images/rsm/logo4.png"
          alt="background pipes"
          fill
          className="object-cover transform transition-transform duration-700 hover:scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#009FE3] to-transparent"></div>
      </div>

      

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 20s linear infinite;
        }
        .bg-wave-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.364l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.364l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23FFFFFF' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default Services;