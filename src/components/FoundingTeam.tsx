import React, { useState, useEffect } from 'react';

export const FoundingTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const teamMembers = [
    {
      name: "Prashant Tibrewal",
      title: "MIT (USA) Alum & Experience Career Coach",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/prashant-tibrewal.png"
    },
    {
      name: "Aditi Arya Kotak",
      title: "Yale University Alum & Miss India 2015",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/aditi-arya-kotak.png"
    },
    {
      name: "Neelabh Prabhat",
      title: "IIT Delhi Alum & Ex-Citibank",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/neelabh-prabhat.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-4 py-8 bg-slate-100">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-3xl text-center mb-6">
          Founding Team
        </h2>

        <div className="p-4 mb-4 overflow-hidden">
          <div className="relative w-full h-[300px]">
            {teamMembers.map((member, index) => (
              <img
                key={index}
                src={member.image}
                alt={member.name}
                className={`absolute inset-0 w-full h-full object-contain mx-auto transition-all duration-500 ease-in-out ${
                  index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{
                  transform: index === activeIndex ? 'translateX(0)' : index < activeIndex ? 'translateX(-100%)' : 'translateX(100%)'
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-4 transition-all duration-500 ease-in-out">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-xl">
            {teamMembers[activeIndex].name}
          </h3>
          <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base mt-1">
            {teamMembers[activeIndex].title}
          </p>
        </div>

        <div className="flex justify-center gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#122e6c]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full px-6 py-12 bg-white">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-5xl text-center mb-12">
          Founding Team
        </h2>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-[#122e6c]"
                />
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-2xl mb-2">
                {member.name}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-lg leading-tight">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16 bg-[#f7f7f7]">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-16">
            Founding Team
          </h2>

          <div className="flex justify-center gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[358px] h-[358px] object-cover mb-6"
                />
                <div className="bg-[#f7f7f7] rounded-[10px] shadow-md p-6">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-xl mb-2">
                    {member.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-black text-xl">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
