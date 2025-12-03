"use client";
import { useEffect, useRef, useState } from "react";

// Define the type for certificate data
interface Certificate {
  title: string;
  description: string;
  pdfUrl: string;
  thumbnailUrl: string; // Add thumbnail image path
  documentNumber: string;
  issuedDate: string;
  issuingAuthority: string;
  fileSize?: string;
}

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Certificates data with PDF files and thumbnails
  const certificatesData: Certificate[] = [
    {
      title: "Certificate of Registration",
      description: "Official document proving the legal registration of 1054 Valeria Tramas Ltd as a business entity with the relevant government authority.",
      pdfUrl: "/documents/Certificate of Registration.pdf",
      thumbnailUrl: "/documents/certificate.png", // Thumbnail image
      documentNumber: "No. 609945",
      issuedDate: "June 28, 2025",
      issuingAuthority: "Registrar of Companies",
    },
    {
      title: "TIN Certificate",
      description: "Tax Identification Number certificate issued by the tax authority, confirming our registration for tax purposes and compliance.",
      pdfUrl: "/documents/tin-cetificate.pdf",
      thumbnailUrl: "/documents/tin.png", // Thumbnail image
      documentNumber: "TIN-146 256 448",
      issuedDate: "December 07, 2020",
      issuingAuthority: "Tax Authority",
    },
    {
      title: "Business License",
      description: "Official permit granted by the local government allowing 1054 Valeria Tramas Ltd to operate legally within the jurisdiction.",
      pdfUrl: "/documents/RSM.pdf",
      thumbnailUrl: "/documents/rsm.png", // Thumbnail image
      documentNumber: "B.L.NO:BL01396912025-2600012882",
      issuedDate: "October 13, 2025",
      issuingAuthority: "Local Government Authority",
    },
  ];

  // Function to handle PDF view
  const handleViewPDF = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  // Function to handle PDF download
  const handleDownloadPDF = (pdfUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section ref={sectionRef} className="relative py-16 min-h-screen overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image - Subtle and Far */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-all duration-1000 ease-out"
          style={{
            backgroundImage: "url('/images/rsm/background.jpeg')",
            transform: isVisible ? "scale(1.05)" : "scale(1)",
          }}
        ></div>

        {/* Floating Documents Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-8 bg-red-200/30 rounded-sm animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Animated Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
            Our <span className="text-red-600">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto transform transition-all duration-700 delay-300">
            <div className={`w-full h-full bg-red-500 transition-all duration-1000 delay-500 ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}></div>
          </div>
          <p className="text-white text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Official documents and certifications that validate our legal standing, 
            tax compliance, and authorization to operate as a trusted business entity.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificatesData.map((certificate, index) => (
            <div 
              key={index} 
              className={`group bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                transform: isVisible ? "translateY(0) rotate(0)" : "translateY(20px) rotate(1deg)",
              }}
            >
              {/* PDF Document Container with Thumbnail Preview */}
              <div className="h-64 bg-gray-100 relative overflow-hidden border-b border-gray-200">
                {/* Thumbnail Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${certificate.thumbnailUrl}')`,
                  }}
                ></div>
                
                {/* PDF Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* PDF Icon */}
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Document Type */}
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full font-semibold mb-2">
                      PDF DOCUMENT
                    </span>
                  </div>
                </div>

                {/* File Info */}
                <div className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1 rounded">
                  {certificate.fileSize && `Size: ${certificate.fileSize}`}
                </div>

                

                
              </div>

              {/* Certificate Details */}
              <div className="p-6 relative">
                {/* Hover Border Effect */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-linear-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {certificate.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {certificate.description}
                </p>

                {/* Certificate Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Document No:</span>
                    <span className="text-gray-800 font-semibold">{certificate.documentNumber}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Issued Date:</span>
                    <span className="text-gray-800">{certificate.issuedDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Authority:</span>
                    <span className="text-gray-800 text-right">{certificate.issuingAuthority}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleViewPDF(certificate.pdfUrl)}
                    className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg hover:bg-red-700 active:scale-95 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View PDF
                  </button>
                  <button
                    onClick={() => handleDownloadPDF(certificate.pdfUrl, certificate.title)}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold transform transition-all duration-300 group-hover:scale-105 hover:border-red-300 hover:bg-red-50 active:scale-95 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            </div>
          ))}
        </div>

        {/* Rest of your content remains the same */}
        {/* ... */}
      </div>

      {/* Custom CSS for Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificates;