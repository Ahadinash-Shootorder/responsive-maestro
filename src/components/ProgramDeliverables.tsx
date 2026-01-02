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
      <div className="block md:hidden w-full px-5 py-10 bg-[#f7f7f7]">
        <div className="mb-10">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[36px] leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[52px] leading-tight">
            Deliverables
          </div>
        </div>

        <div className="space-y-5 mb-10">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-start gap-3.5">
              <div className="w-5 h-5 bg-[#ec9950] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-[17px] leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl py-4 px-12 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
            Apply Now
          </a>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full px-8 py-16 bg-[#f7f7f7]">
        <div className="text-center mb-14">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-6xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-7xl">
            Deliverables
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-7 mb-14">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-9 h-9 bg-[#ef7f1a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-xl leading-tight">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-2xl py-6 px-16 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="mb-12">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[74px] leading-tight">
              Program
            </h2>
            <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-9xl">
              Deliverables
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {deliverables.slice(0, 4).map((item, index) => (
              <div key={index} className="relative">
                <img
                  className="w-[195px] h-[195px] object-cover absolute -top-6 left-1/2 transform -translate-x-1/2"
                  alt="Icon"
                  src={item.icon}
                />
                <div className="bg-[#133b93] rounded-[19px] pt-24 pb-8 px-6 mt-12">
                  <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl text-center leading-tight">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-[680px] mx-auto mb-12">
            {deliverables.slice(4, 6).map((item, index) => (
              <div key={index} className="relative">
                <img
                  className="w-[195px] h-[195px] object-cover absolute -top-6 left-1/2 transform -translate-x-1/2"
                  alt="Icon"
                  src={item.icon}
                />
                <div className="bg-[#133b93] rounded-[19px] pt-24 pb-8 px-6 mt-12">
                  <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl text-center leading-tight">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#contact-form" className="bg-[#ef7f1a] w-[345px] h-[86px] rounded-[50px] flex items-center justify-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200">
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
