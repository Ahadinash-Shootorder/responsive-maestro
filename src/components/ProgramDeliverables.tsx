import React from 'react';

export const ProgramDeliverables = () => {
  const deliverables = [
    { text: "8 -10 hours of virtual live sessions", icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-1.png" },
    { text: "8 -10 hours of teamwork and assignments", icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-2.png" },
    { text: "Simulated project-based internship", icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-3.png" },
    { text: "Project evaluation & comprehensive Skills Report", icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-4.png" },
    { text: "Internship Certificate signed by the mentor", icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-5.png" },
    { text: "Merit-based Letter of Recommendation", icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-6.png" },
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-5 py-8 bg-white">
        <div className="mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[32px] leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.5px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[44px] leading-tight">
            Deliverables
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#ec9950] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-[15px] leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-lg py-3.5 px-10 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md">
            Apply Now
          </a>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full px-8 py-12 bg-white">
        <div className="text-center mb-10">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-4xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-5xl">
            Deliverables
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-5 mb-10">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#ef7f1a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-base leading-tight">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl py-4 px-14 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-14 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="mb-10">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[60px] leading-tight">
              Program
            </h2>
            <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[90px]">
              Deliverables
            </div>
          </div>

          {/* Cards Grid - First Row */}
          <div className="grid grid-cols-4 gap-5 mb-5">
            {deliverables.slice(0, 4).map((item, index) => (
              <div key={index} className="relative pt-16">
                <img
                  className="w-[160px] h-[160px] object-cover absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  alt="Icon"
                  src={item.icon}
                />
                <div className="bg-[#133b93] rounded-[16px] pt-20 pb-6 px-4">
                  <p className="[font-family:'Inter',Helvetica] font-bold text-white text-lg text-center leading-tight">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cards Grid - Second Row */}
          <div className="grid grid-cols-2 gap-5 max-w-[600px] mx-auto mb-10">
            {deliverables.slice(4, 6).map((item, index) => (
              <div key={index} className="relative pt-16">
                <img
                  className="w-[160px] h-[160px] object-cover absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  alt="Icon"
                  src={item.icon}
                />
                <div className="bg-[#133b93] rounded-[16px] pt-20 pb-6 px-4">
                  <p className="[font-family:'Inter',Helvetica] font-bold text-white text-lg text-center leading-tight">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#contact-form" className="bg-[#ef7f1a] w-[300px] h-[76px] rounded-[50px] flex items-center justify-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl">
                Apply Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
