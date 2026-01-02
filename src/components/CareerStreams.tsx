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
    <section className="w-full bg-[#f7f7f7]">
      {/* Mobile Version */}
      <div className="block md:hidden w-full py-8">
        <div className="px-4 mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-3xl text-center leading-tight">
            Sample Career Streams &<br />Mentor Backgrounds
          </h2>
        </div>

        <div className="space-y-0">
          {careerData.map((stream, index) => (
            <div key={index}>
              <div className="bg-[#122e6c] py-3 px-4">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base">
                  {stream.title}
                </span>
              </div>
              
              <div className="bg-white py-2 px-1 flex items-center justify-around flex-wrap gap-4">
                {stream.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    className="h-20 w-auto object-contain max-w-[80px]"
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full py-12">
        <div className="px-6 mb-12">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-4xl text-center leading-tight">
            Sample Career Streams & Mentor Backgrounds
          </h2>
        </div>

        <div className="space-y-0 max-w-6xl mx-auto">
          {careerData.map((stream, index) => (
            <div key={index}>
              <div className="bg-[#122e6c] py-4 px-6 border-l-4 border-[#ef7f1a]">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
                  {stream.title}
                </span>
              </div>
              
              <div className="bg-white py-8 px-6 flex items-center justify-center flex-wrap gap-6">
                {stream.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    className="h-12 w-auto object-contain max-w-[100px]"
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-5xl text-center mb-12">
            Sample Career Streams &<br />Mentor Backgrounds
          </h2>

          <div className="space-y-6">
            {careerData.map((stream, index) => (
              <div key={index} className="flex items-center bg-white/30 rounded-[10px] shadow-md overflow-hidden">
                {/* Title */}
                <div className="bg-[#122e6c] rounded-[10px] py-6 px-8 min-w-[209px] flex-shrink-0">
                  <span className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center block">
                    {stream.title}
                  </span>
                </div>
                
                {/* Description */}
                <div className="bg-[#d9d9d9] rounded-[10px] py-6 px-8 min-w-[400px] mx-4">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl">
                    {stream.description}
                  </p>
                </div>
                
                {/* Logos */}
                <div className="flex items-center gap-8 flex-1 justify-end pr-8">
                  {stream.logos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      className="w-[100px] h-[100px] object-contain"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
