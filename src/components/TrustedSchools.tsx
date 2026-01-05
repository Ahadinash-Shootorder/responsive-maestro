import React from 'react';

export const TrustedSchools = () => {
  const schools = [
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/images--5-.png",
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/chirec.png",
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/aditya-birla-world-academy.png",
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/gd-geonka-gurugram-school.png",
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/calcutta-international-school-.png",
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/carmel-convent-chandigarh.png",
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/sri-ram-school.png",
    "https://c.animaapp.com/mjmwrwbp4K97wU/img/indus-international-school-logo.png",
  ];

  return (
    <section className="w-full bg-white">
      {/* Mobile Version */}
      <div className="block md:hidden px-5 py-8">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-xl text-center mb-6 leading-tight">
          Trusted by Students from<br />100+ Schools Globally
        </h2>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {schools.map((src, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={src} alt="School" className="w-14 h-14 object-contain" />
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
      <div className="hidden md:block lg:hidden px-8 py-10">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-8 leading-tight">
          Trusted by Students from 100+ Schools Globally
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-6 mb-8 max-w-3xl mx-auto">
          {schools.map((src, index) => (
            <img key={index} src={src} alt="School" className="w-16 h-16 object-contain" />
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl py-4 px-14 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md">
            Apply Now
          </a>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block py-12">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-10 leading-tight">
            Trusted by Students from<br />100+ Schools Globally
          </h2>

          <div className="flex justify-center items-center flex-wrap gap-8 mb-10 max-w-4xl mx-auto">
            {schools.map((src, index) => (
              <img key={index} src={src} alt="School" className="w-20 h-20 object-contain" />
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-2xl py-5 px-16 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
