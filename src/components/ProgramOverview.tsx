import React from 'react';

export const ProgramOverview = () => {
  const features = [
    { icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-real-world.png", text: "Real-world simulated projects to build your skills profile" },
    { icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png", text: "Live engagement with mentors from Fortune-500 companies" },
    { icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png", text: "Certificate & Letter of Recommendation from industry mentors" },
    { icon: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-clarity-on-job.png", text: "Clarity on job roles and responsibilities" }
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white">
        {/* Title */}
        <div className="px-5 pt-10 pb-6">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[38px] leading-[1.1]">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[52px] leading-[1.1]">
            Overview
          </div>
        </div>

        {/* Orange Description */}
        <div className="bg-[#ef7f1a] px-6 py-8">
          <p className="[font-family:'Inter',Helvetica] text-white text-[18px] leading-[1.5]">
            Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
          </p>
        </div>

        {/* Student Image */}
        <div className="flex justify-center -mt-4 relative z-10">
          <div className="w-full max-w-[450px] aspect-[3/4] rounded-b-[50%] overflow-hidden shadow-xl relative">
            <div className="absolute top-0 left-0 right-0 h-60 w-full bg-gradient-to-b from-[#ef7f1a] to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover"
              alt="Student"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
            />
          </div>
        </div>

        {/* Features List */}
        <div className="px-4 py-6 space-y-3 bg-white">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white">
                <img className="w-full h-full object-contain" alt="Icon" src={item.icon} />
              </div>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-[16px] leading-[1.4] flex-1 pt-6">
                {item.text}
              </p>
            </div>
          ))}

          {/* Apply Now Button */}
          <div className="flex justify-center pt-6">
            <a href="#contact-form" className="bg-[#ef7f1a] rounded-full px-16 py-4 hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-lg inline-flex items-center justify-center">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[20px]">
                Apply Now
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full max-w-6xl mx-auto px-6 py-14">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-6xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-7xl">
            Overview
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-[#ef7f1a] p-8 rounded-lg">
              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl leading-relaxed">
                Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img className="w-16 h-16 object-cover" alt="Icon" src={item.icon} />
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-lg leading-tight flex-1">
                    {item.text}
                  </p>
                </div>
              ))}

              <div className="flex justify-center pt-6">
                <a href="#contact-form" className="bg-[#ef7f1a] rounded-full px-16 py-4 hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
                    Apply Now
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-b-full overflow-hidden border-4 shadow-lg">
              <img className="w-full h-full object-cover" alt="Student" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-[50px]">
          <div className="flex gap-8 xl:gap-16 items-start">
            {/* Left - Image */}
            <div className="flex-shrink-0 w-[400px] xl:w-[557px]">
              <img
                className="w-full h-auto aspect-[557/890] rounded-[0px_0px_200px_200px] xl:rounded-[0px_0px_300px_300px] object-cover"
                alt="Student"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
              />
            </div>

            {/* Right - Content */}
            <div className="flex-1 pt-8 min-w-0">
              {/* Title */}
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[50px] xl:text-[74px] leading-tight">
                Program
              </h2>
              <div className="[-webkit-text-stroke:2px_#ef7f1a] xl:[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-7xl xl:text-9xl mb-6 xl:mb-8">
                Overview
              </div>

              {/* Orange Description */}
              <div className="bg-[#ef7f1a] rounded-lg p-6 xl:p-8 mb-6 xl:mb-8 max-w-[707px]">
                <p className="[font-family:'Inter',Helvetica] font-bold text-white text-lg xl:text-2xl leading-relaxed">
                  Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 xl:space-y-6 mb-8 xl:mb-10">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 xl:gap-4">
                    <img className="w-14 h-14 xl:w-[73px] xl:h-[73px] object-cover flex-shrink-0" alt="Icon" src={item.icon} />
                    <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-lg xl:text-2xl leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Apply Now */}
              <a href="#contact-form" className="bg-[#ef7f1a] w-[240px] xl:w-[291px] h-[70px] xl:h-[86px] rounded-[50px] flex items-center justify-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xl xl:text-2xl">
                  Apply Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
