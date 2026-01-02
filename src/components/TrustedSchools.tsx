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
    <section className="w-full bg-white py-12 px-4 md:px-6">
      <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl md:text-4xl text-center mb-8 leading-tight">
        Trusted by Students from<br />100+ Schools Globally
      </h2>

      <div className="flex justify-center items-center flex-wrap gap-4 md:gap-8 mb-8 max-w-5xl mx-auto">
        {schools.map((src, index) => (
          <img key={index} src={src} alt="School" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" />
        ))}
      </div>

      <div className="flex justify-center">
        <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl md:text-2xl py-4 md:py-6 px-12 md:px-16 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg">
          Apply Now
        </a>
      </div>
    </section>
  );
};
