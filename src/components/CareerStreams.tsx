import React from 'react';

export const CareerStreams = () => {
  const careerData = [
    {
      title: "Business & Consulting",
      description: "Strategy Consultant, Business Analyst",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/mc-kinsey-logo-1.png", alt: "McKinsey" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bcg-logo-1.png", alt: "BCG" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pwc-logo-1.png", alt: "PWC" }
      ]
    },
    {
      title: "Technology",
      description: "Product Manager, AI Researcher, Software Architect",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/amazon-logo.png", alt: "Amazon" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/google-logo.png", alt: "Google" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/oracle-logo.png", alt: "Oracle" }
      ]
    },
    {
      title: "Finance",
      description: "Investment Banker, Financial Analyst, Auditor",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/jp-morgan-logo.png", alt: "JP Morgan" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/kpmg-logo.png", alt: "KPMG" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/barclays-logo.png", alt: "Barclays" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ey-logo.png", alt: "EY" }
      ]
    },
    {
      title: "Pharma/Healthcare",
      description: "Strategy Consultant, Business Analyst",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/novartis-logo-1.png", alt: "Novartis" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ag-logo-1.png", alt: "AG" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bristol-myers-logo-1.png", alt: "Bristol Myers" }
      ]
    },
    {
      title: "Legal",
      description: "Product Manager, AI Researcher, Software Architect",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/acm-logo.png", alt: "ACM" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/fox-mandal-logo.png", alt: "Fox Mandal" }
      ]
    },
    {
      title: "Media and Journalism",
      description: "Investment Banker, Financial Analyst, Auditor",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/indian-express-logo.png", alt: "Indian Express" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/adsfactor-pr-logo.png", alt: "Adsfactor PR" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/cnn-news-18-logo.png", alt: "CNN News" }
      ]
    }
  ];

  return (
    <section className="w-full bg-white">
      {/* Mobile Version */}
      <div className="block md:hidden w-full py-8 px-4">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-[22px] text-center leading-tight mb-6">
          Sample Career Streams &<br />Mentor Backgrounds
        </h2>

        <div className="border border-[#122e6c] rounded-lg overflow-hidden">
          {careerData.map((stream, index) => (
            <div key={index}>
              <div className="bg-[#122e6c] py-2.5 px-4">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-sm">
                  {stream.title}
                </span>
              </div>
              
              <div className="bg-white py-4 px-3 flex items-center justify-center gap-4 flex-wrap">
                {stream.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    className="h-8 w-auto object-contain max-w-[70px]"
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-lg text-center mt-6">
          100+ Mentors | 20+ Career Pathways
        </p>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full py-10 px-6">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-3xl text-center leading-tight mb-8">
          Sample Career Streams & Mentor Backgrounds
        </h2>

        <div className="border border-[#122e6c] rounded-lg overflow-hidden max-w-4xl mx-auto">
          {careerData.map((stream, index) => (
            <div key={index} className="flex">
              <div className="bg-[#122e6c] py-4 px-6 w-48 flex-shrink-0 flex items-center">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base">
                  {stream.title}
                </span>
              </div>
              
              <div className="bg-white py-4 px-6 flex items-center justify-center gap-6 flex-1 flex-wrap">
                {stream.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    className="h-10 w-auto object-contain max-w-[90px]"
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-2xl text-center mt-8">
          100+ Mentors | 20+ Career Pathways
        </p>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-12 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-4xl text-center mb-10">
            Sample Career Streams &<br />Mentor Backgrounds
          </h2>

          <div className="border border-[#122e6c] rounded-[10px] overflow-hidden">
            {careerData.map((stream, index) => (
              <div key={index} className="flex items-stretch border-b border-[#122e6c] last:border-b-0">
                {/* Title */}
                <div className="bg-[#122e6c] py-5 px-6 w-[200px] flex-shrink-0 flex items-center">
                  <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg">
                    {stream.title}
                  </span>
                </div>
                
                {/* Description */}
                <div className="bg-[#e8e8e8] py-5 px-6 w-[350px] flex-shrink-0 flex items-center">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-black text-lg">
                    {stream.description}
                  </p>
                </div>
                
                {/* Logos */}
                <div className="bg-white flex items-center gap-6 flex-1 justify-center py-4 px-6">
                  {stream.logos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      className="h-16 w-auto object-contain max-w-[100px]"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-3xl text-center mt-10">
            100+ Mentors | 20+ Career Pathways
          </p>
        </div>
      </div>
    </section>
  );
};
