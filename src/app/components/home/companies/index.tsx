"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ProjectsTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [imageLoadError, setImageLoadError] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef(null);

  // Updated projects data with multiple images for each category
  const projectsData = [
    {
      id: 1,
      title: "Sanitary Installation",
      category: "sanitary",
      description:
        "Complete sanitary system installation including toilets, sinks, drainage systems and waste management solutions",
      images: [
        "/images/projects/sanitary1.jpeg",
        "/images/projects/sanitary2.jpeg",
        "/images/projects/sanitary3.jpeg",
        "/images/projects/sanitary4.jpeg",
      ],
    },
    {
      id: 2,
      title: "Water Supply Installation",
      category: "water-supply",
      description:
        "Comprehensive water supply systems including piping, pumps, filtration and distribution networks",
      images: [
        "/images/projects/water1.jpeg",
        "/images/projects/water2.jpeg",
        "/images/projects/water3.jpeg",
        "/images/projects/water4.jpeg",
        "/images/projects/water5.jpeg",
        "/images/projects/water6.jpeg",
      ],
    },
    {
      id: 3,
      title: "Fire Hosereel Systems",
      category: "fire-hosereel",
      description:
        "Professional fire hosereel installation for commercial and industrial buildings with compliance to safety standards",
      images: [
        "/images/projects/hosereel1.jpeg",
        "/images/projects/hosereel2.jpeg",
        "/images/projects/hosereel3.jpeg",
        "/images/projects/hosereel4.jpeg",
        "/images/projects/hosereel5.jpeg",
        "/images/projects/hosereel6.jpeg",
        "/images/projects/hosereel7.jpeg",
        "/images/projects/hosereel8.jpeg",
      ],
    },
    {
      id: 4,
      title: "Fire Pump Installation",
      category: "fire-pump",
      description:
        "High-pressure fire pump systems installation including electrical connections and testing",
      images: [
        "/images/projects/pump-1.jpeg",
        "/images/projects/pump-2.jpeg",
        "/images/projects/pump-3.jpeg",
        "/images/projects/pump-4.jpeg",
        "/images/projects/pump-5.jpeg",
        "/images/projects/pump-6.jpeg",
        "/images/projects/pump-7.jpeg",
        "/images/projects/pump-8.jpeg",
      ],
    },
    {
      id: 5,
      title: "Completed Building Projects",
      category: "completed-buildings",
      description:
        "Showcase of finished projects featuring our comprehensive plumbing and fire protection systems",
      images: [
        "/images/projects/building1.jpeg",
        "/images/projects/building2.jpeg",
        "/images/projects/building3.jpeg",
        "/images/projects/building4.jpeg",
        "/images/projects/building5.jpeg",
        "/images/projects/building6.jpeg",
        "/images/projects/building7.jpeg",
        "/images/projects/building8.jpeg",
      ],
    },
  ];

  // Carousel settings for project images
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    fade: false,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    adaptiveHeight: true,
  };

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  const categories = [
    { id: "all", name: "All Projects", count: projectsData.length },
    {
      id: "sanitary",
      name: "Sanitary Installation",
      count: projectsData.filter((p) => p.category === "sanitary").length,
    },
    {
      id: "water-supply",
      name: "Water Supply",
      count: projectsData.filter((p) => p.category === "water-supply").length,
    },
    {
      id: "fire-hosereel",
      name: "Fire Hosereel",
      count: projectsData.filter((p) => p.category === "fire-hosereel").length,
    },
    {
      id: "fire-pump",
      name: "Fire Pump",
      count: projectsData.filter((p) => p.category === "fire-pump").length,
    },
    {
      id: "completed-buildings",
      name: "Completed Buildings",
      count: projectsData.filter((p) => p.category === "completed-buildings")
        .length,
    },
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

  const handleImageError = (imageSrc: string) => {
    setImageLoadError(prev => ({ ...prev, [imageSrc]: true }));
  };

  const formatCategoryName = (category: string) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image - You can replace this with your actual image path */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
          style={{
            backgroundImage: 'url("/images/projects/building1.jpeg")', // Replace with your background image
            transform: 'scale(1.1)',
            filter: 'blur(0.5px)'
          }}
        />
        
        {/* Black Overlay with Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/60 backdrop-blur-[1px]"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern bg-repeat bg-center animate-grid-move"></div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/20 animate-float-particle"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          />
        ))}

        {/* Animated Water Ripples */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/30 rounded-full animate-ripple"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full animate-ripple delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-sky-300/25 rounded-full animate-ripple delay-2000"></div>
        </div>

        {/* Floating Tools with Enhanced Animation */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300/40 animate-float-tool-3d hidden lg:block"
            style={{
              fontSize: `${28 + Math.random() * 32}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${25 + Math.random() * 15}s`,
              filter: 'drop-shadow(0 0 8px rgba(0, 150, 214, 0.3))'
            }}
          >
            {["🔧", "⚙️", "🔩", "🛠️", "💧", "🚰", "🔥", "🏗️", "⛏️", "🔨", "🪛", "📐"][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-linear-to-r from-[#0096D6] to-[#E3003A] rounded-full mb-2 mx-auto"></div>
            <div className="text-blue-300 font-semibold tracking-widest text-sm uppercase">
              Portfolio
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Our <span className="bg-linear-to-r from-[#0096D6] to-[#E3003A] bg-clip-text text-transparent animate-gradient-shift">Projects</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our comprehensive plumbing and fire protection installations across Tanzania with professional excellence
          </p>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-1 bg-linear-to-r from-[#0096D6] to-[#E3003A] rounded-full animate-pulse"></div>
            <div className="w-4 h-4 rounded-full border-2 border-[#0096D6] animate-ping"></div>
            <div className="w-12 h-1 bg-linear-to-r from-[#E3003A] to-[#0096D6] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Expert Technicians" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:border-white/30 cursor-pointer overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#0096D6]/20 to-[#E3003A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 animate-count-up">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-[#0096D6] to-[#E3003A] group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Category Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`group relative px-6 py-4 rounded-2xl font-bold transform transition-all duration-500 hover:scale-105 overflow-hidden ${
                activeTab === category.id
                  ? "bg-linear-to-r from-[#0096D6] to-[#E3003A] text-white shadow-2xl"
                  : "bg-white/10 backdrop-blur-sm text-gray-200 border border-white/20 hover:border-[#0096D6]/50 hover:bg-white/15"
              }`}
            >
              {/* Animated background for active tab */}
              {activeTab === category.id && (
                <div className="absolute inset-0 bg-linear-to-r from-[#0096D6] to-[#E3003A] animate-pulse-slow"></div>
              )}
              
              <span className="relative z-10 flex items-center">
                {category.name}
                <span
                  className={`ml-3 px-2 py-1 rounded-full text-xs font-black ${
                    activeTab === category.id 
                      ? "bg-white/30 text-white" 
                      : "bg-white/20 text-gray-200"
                  }`}
                >
                  {category.count}
                </span>
              </span>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid with Image Sliders */}
        <div className="space-y-12 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/10 transform transition-all duration-700 hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0096D6]/10 to-[#E3003A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                {/* Enhanced Project Images Slider */}
                <div className="relative h-80 lg:h-96 overflow-hidden rounded-l-3xl">
                  <Slider {...imageSliderSettings}>
                    {project.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="relative h-80 lg:h-96">
                        {!imageLoadError[image] ? (
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            quality={95}
                            onError={() => handleImageError(image)}
                          />
                        ) : (
                          <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="text-4xl mb-2">🏗️</div>
                              <div className="text-sm">Image Loading</div>
                            </div>
                          </div>
                        )}
                        
                        {/* Enhanced Image Counter */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                          {imageIndex + 1} / {project.images.length}
                        </div>
                      </div>
                    ))}
                  </Slider>

                  {/* Enhanced Category Badge */}
                  <div className="absolute top-4 right-4 bg-linear-to-r from-[#E3003A] to-[#FF6B9C] text-white px-4 py-2 rounded-full text-sm font-black shadow-lg border border-white/20 animate-bounce-slow z-10">
                    {formatCategoryName(project.category).toUpperCase()}
                  </div>
                  
                  {/* Slider Navigation Enhancement */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block w-12 h-1 bg-linear-to-r from-[#0096D6] to-[#E3003A] rounded-full mb-3"></span>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#0096D6] group-hover:to-[#E3003A] group-hover:bg-clip-text transition-all duration-500">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-200 mb-6 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  {/* Project Features */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {["Professional", "Reliable", "Efficient", "Certified"].map((feature, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className="group relative bg-linear-to-r from-[#0096D6] to-[#E3003A] text-white px-8 py-4 rounded-2xl font-bold transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-fit overflow-hidden">
                    <span className="relative z-10">View Project Details</span>
                    <div className="absolute inset-0 bg-linear-to-r from-[#E3003A] to-[#0096D6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative inline-block">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-4 border-[#0096D6]/30 rounded-full animate-ping-slow"></div>
            <div className="absolute inset-4 border-2 border-[#E3003A]/30 rounded-full animate-ping-slower"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">
              Start Your <span className="bg-linear-to-r from-[#0096D6] to-[#E3003A] bg-clip-text text-transparent">Project</span> With Us
            </h2>
          </div>
          
          <p className="text-gray-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional plumbing and fire protection solutions tailored for your next project with excellence and precision
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-linear-to-r from-[#0096D6] to-[#0066CC] text-white px-12 py-5 rounded-2xl font-bold text-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-linear-to-r from-[#0066CC] to-[#0096D6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </button>
            
            <button className="group relative bg-transparent text-white px-12 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 transform transition-all duration-500 hover:scale-105 hover:border-white hover:bg-white/10 overflow-hidden">
              <span className="relative z-10">View Our Portfolio</span>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes float-tool-3d {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-40px) rotate(180deg) scale(1);
          }
          75% {
            transform: translateY(-20px) rotate(270deg) scale(1.1);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(15px);
          }
          66% {
            transform: translateY(20px) translateX(-15px);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes count-up {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-float-tool-3d {
          animation: float-tool-3d 12s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 15s ease-in-out infinite;
        }
        
        .animate-ripple {
          animation: ripple 8s linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-count-up {
          animation: count-up 0.6s ease-out;
        }
        
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230096D6' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default ProjectsTestimonials;