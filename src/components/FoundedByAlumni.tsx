import React from 'react';

export const FoundedByAlumni = () => {
  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] py-5 px-5">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[24px] text-center leading-tight">
            Founded by<br />Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white shadow-md px-4 py-5">
          <div className="flex items-center justify-center gap-6">
            <img
              className="w-[90px] h-auto object-contain"
              alt="MIT Sloan"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
            />
            <img
              className="w-[70px] h-auto object-contain"
              alt="Yale University"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
            />
            <img
              className="w-[55px] h-[55px] object-contain"
              alt="IIT Delhi"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
            />
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full max-w-4xl mx-auto px-8 py-10">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] rounded-2xl py-8 px-6 mb-6">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-3xl text-center leading-tight">
            Founded by Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white rounded-xl shadow-lg py-8 px-6 flex items-center justify-center gap-12">
          <img
            className="w-[120px] h-auto object-contain"
            alt="MIT Sloan"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
          />
          <img
            className="w-[90px] h-auto object-contain"
            alt="Yale University"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
          />
          <img
            className="w-[70px] h-[70px] object-contain"
            alt="IIT Delhi"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
          />
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-12">
        <div className="max-w-[900px] mx-auto">
          {/* Yellow Header */}
          <div className="bg-[#f8b402] rounded-2xl py-8 px-6 mb-6">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[36px] text-center">
              Founded by Alumni from
            </h2>
          </div>
          
          {/* Logos Container */}
          <div className="bg-white rounded-xl shadow-lg py-6 px-10 flex items-center justify-center gap-12 max-w-[450px] mx-auto">
            <img
              className="w-[100px] h-auto object-contain"
              alt="MIT Sloan"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
            />
            <img
              className="w-[85px] h-auto object-contain"
              alt="Yale"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
            />
            <img
              className="w-[60px] h-[60px] object-contain"
              alt="IIT Delhi"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
