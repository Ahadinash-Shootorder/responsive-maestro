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
        <div className="px-5 pt-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[32px] leading-[1.1]">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.5px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[44px] leading-[1.1]">
            Overview
          </div>
        </div>

        {/* Orange Description */}
        <div className="bg-[#ef7f1a] px-5 py-6 mt-4">
          <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[15px] leading-[1.5]">
            Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
          </p>
        </div>

        {/* Student Image */}
        <div className="relative -mt-2">
          <img
            className="w-full h-auto object-cover"
            alt="Student"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
          />
        </div>

        {/* Features List */}
        <div className="px-5 py-8 space-y-5 bg-white">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <img className="w-16 h-16 object-contain flex-shrink-0" alt="Icon" src={item.icon} />
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-[15px] leading-[1.4] flex-1 pt-3">
                {item.text}
              </p>
            </div>
          ))}

          {/* Apply Now Button */}
          <div className="flex justify-center pt-4">
            <a href="#contact-form" className="bg-[#ef7f1a] rounded-full px-14 py-4 hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-lg">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px]">
                Apply Now
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-white py-12 px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-5xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-6xl">
            Overview
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              className="w-full max-w-[350px] h-auto rounded-b-[150px] object-cover"
              alt="Student"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-[#ef7f1a] p-6 rounded-lg">
              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-lg leading-relaxed">
                Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img className="w-12 h-12 object-cover flex-shrink-0" alt="Icon" src={item.icon} />
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-base leading-tight flex-1">
                    {item.text}
                  </p>
                </div>
              ))}

              <div className="flex justify-center pt-4">
                <a href="#contact-form" className="bg-[#ef7f1a] rounded-full px-12 py-3 hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md">
                  <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg">
                    Apply Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="flex gap-12 xl:gap-16 items-start">
            {/* Left - Image */}
            <div className="flex-shrink-0 w-[450px] xl:w-[557px]">
              <img
                className="w-full h-auto aspect-[557/890] rounded-[0px_0px_250px_250px] xl:rounded-[0px_0px_300px_300px] object-cover"
                alt="Student"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
              />
            </div>

            {/* Right - Content */}
            <div className="flex-1 pt-6">
              {/* Title */}
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[60px] xl:text-[74px] leading-tight">
                Program
              </h2>
              <div className="[-webkit-text-stroke:2px_#ef7f1a] xl:[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[80px] xl:text-9xl mb-6">
                Overview
              </div>

              {/* Orange Description Box */}
              <div className="relative mb-8">
                <img
                  className="w-full max-w-[707px] h-auto"
                  alt="Vector"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-2.svg"
                />
                <p className="absolute top-1/2 left-8 transform -translate-y-1/2 [font-family:'Inter',Helvetica] font-bold text-white text-xl xl:text-2xl leading-relaxed max-w-[600px]">
                  Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-5 mb-8">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img className="w-14 h-14 xl:w-[73px] xl:h-[73px] object-cover flex-shrink-0" alt="Icon" src={item.icon} />
                    <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-lg xl:text-2xl leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Apply Now */}
              <a href="#contact-form" className="bg-[#ef7f1a] w-[260px] xl:w-[291px] h-[70px] xl:h-[86px] rounded-[50px] flex items-center justify-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200">
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
