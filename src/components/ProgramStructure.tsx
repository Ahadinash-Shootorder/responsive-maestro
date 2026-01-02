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
      <div className="block md:hidden w-full bg-white py-8 px-4">
        <div className="mb-6">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[38px] -mb-3 leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[52px]">
            Structure
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-[#122e6c] rounded-full py-3 px-6 inline-block">
            <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg">
              Core Components
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {coreComponents.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#ec9950] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="[font-family:'Inter',Helvetica] font-light text-black text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="relative mt-9">
          <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none ml-1">
            "
          </div>
          
          <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                We were pushed to go into every detail. The accountability and depth made it stand out from any school project
              </span>
              <span className="font-bold text-[#122e6c] text-lg"> – Riva,</span>
              <span className="text-black text-lg"> Kanakia International School, Mumbai</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-white py-12 px-6">
        {/* Testimonial */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="text-[#122e6c] text-[150px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal leading-none -mb-16 ml-4">
              "
            </div>
            
            <div className="border-2 border-[#122e6c] rounded-3xl p-8 ml-8 bg-white">
              <p className="[font-family:'Montserrat',Helvetica] font-normal text-2xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
                </span>
                <span className="font-bold text-[#122e6c] text-xl"> – Sara,</span>
                <span className="text-black text-xl"> Prometheus School, Noida</span>
              </p>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-5xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-6xl">
            Structure
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#122e6c] rounded-full py-4 px-8 inline-block mb-8">
            <span className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl">
              Core Components
            </span>
          </div>

          <div className="space-y-6">
            {coreComponents.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ef7f1a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="[font-family:'Inter',Helvetica] font-light text-black text-xl">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16 bg-[#f7f7f7]">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="flex gap-16 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-[40px] text-center mb-12">
                100+ Mentors | 20+ Career Pathways
              </p>

              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[74px] leading-tight">
                Program
              </h2>
              <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-9xl mb-12">
                Structure
              </div>

              <div className="bg-[#122e6c] rounded-[50px] py-6 px-12 inline-block mb-8">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl">
                  Core Components
                </span>
              </div>

              <div className="space-y-6">
                {coreComponents.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img className="w-[30px] h-[30px]" alt="Check" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
                    <span className="[font-family:'Inter',Helvetica] font-light text-black text-2xl">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 relative">
              <div className="w-[600px] h-[600px] bg-white rounded-full border-[20px] border-[#f36a1e] overflow-hidden">
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
