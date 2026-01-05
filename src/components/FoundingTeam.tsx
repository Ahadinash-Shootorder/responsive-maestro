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
      <div className="block md:hidden w-full px-5 py-8 bg-gray-50">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-6">
          Founding Team
        </h2>

        <div className="relative overflow-hidden mb-4">
          <div className="h-[280px] relative">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex justify-center transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg">
            {teamMembers[activeIndex].name}
          </h3>
          <p className="[font-family:'Inter',Helvetica] font-normal text-black text-sm mt-1">
            {teamMembers[activeIndex].title}
          </p>
        </div>

        <div className="flex justify-center gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#122e6c]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full px-8 py-10 bg-white">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-3xl text-center mb-10">
          Founding Team
        </h2>

        <div className="flex justify-center gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center flex-1">
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto max-w-[200px] mx-auto object-contain"
                />
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg mb-1">
                {member.name}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-sm leading-tight">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-14 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-12">
            Founding Team
          </h2>

          <div className="flex justify-center gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[300px] h-[300px] object-contain mb-4"
                />
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base">
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
