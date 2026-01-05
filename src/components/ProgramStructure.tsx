import React from 'react';

export const ProgramStructure = () => {
  const coreComponents = [
    "Live mentor sessions every week",
    "Small group format (5-7 students)",
    "Deep-dive into specific career streams",
    "Project-based learning",
    "Personalized career pathway mapping"
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white py-8 px-5">
        <div className="mb-6">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[32px] leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.5px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[44px] leading-tight">
            Structure
          </div>
        </div>

        <div className="mb-5">
          <div className="bg-[#122e6c] rounded-full py-2.5 px-5 inline-block">
            <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base">
              Core Components
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {coreComponents.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#ec9950] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="relative">
          <div className="absolute -top-4 left-0 text-[#122e6c] text-[100px] [font-family:'Georgia',serif] font-bold leading-none z-10">
            "
          </div>
          
          <div className="border-2 border-[#122e6c] rounded-2xl p-5 pt-12 bg-white">
            <p className="[font-family:'Montserrat',Helvetica] text-base leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                We were pushed to go into every detail. The accountability and depth made it stand out from any school project
              </span>
              <span className="font-bold text-[#122e6c]"> – Riva,</span>
              <span className="text-black"> Kanakia International School, Mumbai</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-white py-10 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-4xl leading-tight">
              Program
            </h2>
            <div className="[-webkit-text-stroke:2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-5xl">
              Structure
            </div>
          </div>

          <div className="bg-[#122e6c] rounded-full py-3 px-6 inline-block mb-6">
            <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
              Core Components
            </span>
          </div>

          <div className="space-y-4 mb-10">
            {coreComponents.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ef7f1a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="[font-family:'Inter',Helvetica] font-normal text-black text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -top-6 left-0 text-[#122e6c] text-[120px] [font-family:'Georgia',serif] font-bold leading-none z-10">
              "
            </div>
            
            <div className="border-2 border-[#122e6c] rounded-2xl p-8 pt-16 bg-white">
              <p className="[font-family:'Montserrat',Helvetica] text-xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  We were pushed to go into every detail. The accountability and depth made it stand out from any school project
                </span>
                <span className="font-bold text-[#122e6c]"> – Riva,</span>
                <span className="text-black"> Kanakia International School, Mumbai</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-14 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="flex gap-12 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[60px] leading-tight">
                Program
              </h2>
              <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[90px] mb-10">
                Structure
              </div>

              <div className="bg-[#122e6c] rounded-[50px] py-5 px-10 inline-block mb-8">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl">
                  Core Components
                </span>
              </div>

              <div className="space-y-5">
                {coreComponents.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img className="w-[28px] h-[28px]" alt="Check" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xl">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0">
              <div className="w-[500px] h-[500px] rounded-full border-[16px] border-[#f36a1e] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Structure"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
