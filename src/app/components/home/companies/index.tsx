"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ProjectsTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [imageLoadError, setImageLoadError] = useState<{
    [key: string]: boolean;
  }>({});
  const sectionRef = useRef(null);

  // Projects data remains the same
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

  // Simplified carousel settings
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    fade: false,
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
    setImageLoadError((prev) => ({ ...prev, [imageSrc]: true }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 overflow-hidden bg-gray-900"
    >
      {/* Enhanced Background with Subtle Particles */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-850 to-gray-900">
        {/* Subtle Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10 animate-float-slow"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header with Hover Effects */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 group cursor-default">
            Our{" "}
            <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-500">
              Projects
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-500">
            Professional plumbing and fire protection installations across
            Tanzania
          </p>
        </div>

        {/* Enhanced Category Filter with Hover Effects */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`group relative px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border border-gray-600"
              }`}
            >
              <span className="relative z-10 flex items-center">
                {category.name}
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                    activeTab === category.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-600 text-gray-300 group-hover:bg-gray-500 group-hover:text-white"
                  }`}
                >
                  {category.count}
                </span>
              </span>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid with Hover Effects */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:border-gray-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                {/* Enhanced Project Images with Hover */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Slider {...imageSliderSettings}>
                    {project.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative h-64 lg:h-80 group/image"
                      >
                        {!imageLoadError[image] ? (
                          <>
                            <Image
                              src={image}
                              alt={`${project.title} - Image ${imageIndex + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                              onError={() => handleImageError(image)}
                            />
                            {/* Company Logo Overlay */}
                            <div className="absolute inset-0 flex items-end justify-center">
                              <div className="relative w-32 h-16 mb-4 transform transition-transform duration-300 group-hover/image:scale-110">
                                <Image
                                  src="/images/rsm/logo4.png"
                                  alt="Company Logo"
                                  fill
                                  className="object-contain drop-shadow-lg"
                                  priority={imageIndex === 0}
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full bg-gray-700 flex items-center justify-center group-hover/image:bg-gray-600 transition-colors duration-300">
                            <div className="text-gray-400 text-center group-hover/image:text-gray-300 transition-colors duration-300">
                              <div className="text-2xl mb-2">📷</div>
                              <div className="text-sm">Image not available</div>
                            </div>
                          </div>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20 transition-all duration-300 group-hover/image:bg-black/80">
                          {imageIndex + 1} / {project.images.length}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Enhanced Project Content with Hover Effects */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="mb-4 group/title">
                    <span className="inline-block w-8 h-1 bg-blue-500 rounded-full mb-3 group-hover/title:w-12 transition-all duration-500"></span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* Enhanced Features with Hover */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Professional", "Reliable", "Certified"].map(
                      (feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700 rounded-full text-gray-300 text-sm font-medium border border-gray-600 hover:bg-gray-600 hover:text-white hover:border-gray-500 transition-all duration-300 cursor-default transform hover:scale-105"
                        >
                          {feature}
                        </span>
                      )
                    )}
                  </div>

                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section with Hover Effects */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-4 group cursor-default">
            Start Your{" "}
            <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-500">
              Project
            </span>{" "}
            With Us
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto group-hover:text-gray-200 transition-colors duration-500">
            Get professional plumbing and fire protection solutions for your
            next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group/cta1 relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden">
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover/cta1:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group/cta2 relative border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm scale-0 group-hover/cta2:scale-100 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsTestimonials;
