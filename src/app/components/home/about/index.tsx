"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

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

  const sections = [
    { title: "About Us", id: "about" },
    { title: "Vision", id: "vision" },
    { title: "Mission", id: "mission" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full pt-16 md:pt-24 pb-0 overflow-hidden bg-linear-to-br from-[#0096D6] via-[#0088C6] to-[#007BB6]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Water Droplet Animations */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-drip"
            style={{
              width: `${8 + Math.random() * 20}px`,
              height: `${8 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Pipeline Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern bg-repeat bg-center bg-size-50"></div>
        </div>
      </div>

      {/* Animated Right-side Red Vertical Bar */}
      <div className="absolute top-0 right-0 h-full w-8 md:w-16 lg:w-20 rounded-bl-3xl overflow-hidden">
        <div 
          className={`w-full h-full bg-linear-to-b from-[#E3003A] via-[#E3003A] to-[#0096D6] transform transition-transform duration-1000 delay-300 ${
            isVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        ></div>
        
        {/* Floating Elements inside Red Bar */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-bubble"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: `${20 + i * 12}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection(index);
            }}
            className={`w-3 h-3 rounded-full transform transition-all duration-300 hover:scale-125 ${
              activeSection === index 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white max-w-4xl">
        
        {/* ABOUT US SECTION */}
        <div id="about" className="scroll-mt-24">
          {/* Animated Title */}
          <div className={`mb-8 transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 relative inline-block">
              About Us
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-white to-transparent rounded-full"></div>
            </h2>
            <div className="w-20 h-1 bg-[#E3003A] rounded-full mt-2"></div>
          </div>

          {/* Animated Content Blocks */}
          <div className="space-y-8">
            <div className={`leading-7 transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-lg md:text-xl leading-8">
                We are <span className="font-bold text-white drop-shadow-lg">RSM Plumbing Tanzania Ltd</span> — your trusted partner for expert plumbing solutions across Tanzania. Based in Dar es Salaam, we deliver reliable, high-quality plumbing services for residential, commercial, and industrial clients.
              </p>
            </div>

            {/* Interactive Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 my-8 transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {[
                { number: "50+", label: "Projects" },
                { number: "15+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* INLINE IMAGE WITH ENHANCED EFFECTS */}
            <div className={`my-8 transform transition-all duration-700 delay-500 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-[#E3003A] to-[#0096D6] rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
                <Image
                  src="/images/rsm/about.png"
                  width={500}
                  height={400}
                  alt="plumbing blueprint"
                  className="rounded-2xl shadow-2xl relative z-10 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                />
                {/* Floating Label */}
                <div className="absolute top-4 left-4 bg-[#E3003A] text-white px-3 py-1 rounded-full text-sm font-bold transform transition-all duration-300 group-hover:scale-110">
                  Expert Team
                </div>
              </div>
            </div>

            <div className={`leading-7 transform transition-all duration-700 delay-600 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-lg md:text-xl leading-8">
                With a commitment to delivering innovative and cost-effective solutions, RSM Plumbing Tanzania Ltd brings expertise in installation, repair, maintenance, and consulting services, tailored to meet the specific needs of each client.
              </p>
            </div>
          </div>
        </div>

        {/* VISION & MISSION SECTIONS */}
        <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
          
          {/* VISION SECTION */}
          <div id="vision" className="scroll-mt-24">
            <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 transform transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-[#E3003A] to-[#FF6B9C] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">👁️</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold">Our Vision</h3>
              </div>
              <p className="text-xl md:text-2xl leading-9 font-light italic border-l-4 border-[#E3003A] pl-6 py-2">
                "To be the leading provider of innovative and sustainable plumbing solutions in Tanzania, recognized for our dedication to quality, efficiency, and customer care."
              </p>
            </div>
          </div>

          {/* MISSION SECTION */}
          <div id="mission" className="scroll-mt-24">
            <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 transform transition-all duration-700 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-[#0096D6] to-[#00C2FF] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🎯</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold">Our Mission</h3>
              </div>
              <p className="text-xl md:text-2xl leading-9 font-light italic border-l-4 border-[#0096D6] pl-6 py-2">
                "To deliver top-tier plumbing services through skilled expertise, state-of-the-art technology, and an unwavering commitment to customer satisfaction, ensuring reliable, safe, and environmentally friendly plumbing systems for all our clients."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ENHANCED BOTTOM IMAGE SECTION */}
      <div className={`relative my-12 md:my-20 transform transition-all duration-1000 delay-900 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src="/images/rsm/mission.png"
            alt="mission supporting image"
            fill
            className="object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0096D6] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Floating Content Overlay */}
          <div className="absolute bottom-8 left-8 right-8 text-white transform transition-all duration-500 group-hover:translate-y-2">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Building Tanzania's Future</h3>
              <p className="text-white/90 text-lg">One pipe at a time</p>
            </div>
          </div>

          {/* Animated Water Flow Effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white to-transparent animate-flow"></div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className={`fixed bottom-6 right-6 z-50 transform transition-all duration-500 delay-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes drip {
          0% { transform: translateY(-100px) scale(0.8); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(100vh) scale(1.2); opacity: 0; }
        }
        @keyframes bubble {
          0%, 100% { transform: translateX(-50%) translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
        }
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-drip {
          animation: drip 8s linear infinite;
        }
        .animate-bubble {
          animation: bubble 3s ease-in-out infinite;
        }
        .animate-flow {
          animation: flow 3s linear infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default About;