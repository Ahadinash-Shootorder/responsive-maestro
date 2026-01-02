import React from 'react';

export const FoundedByAlumni = () => {
  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] py-7 px-5 mb-7 shadow-sm">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[30px] text-center leading-tight">
            Founded by<br />Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white shadow-lg px-4 py-6">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[50px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  alt="MIT Sloan"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[40px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  alt="Yale University"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-[70px] h-[70px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  alt="IIT Delhi"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full max-w-5xl mx-auto px-8 py-14">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] rounded-3xl py-10 px-8 mb-10 shadow-md">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-5xl text-center leading-tight">
            Founded by Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white rounded-2xl shadow-lg py-12 px-8 flex items-center justify-center gap-16">
          <div className="flex flex-col items-center">
            <div className="w-[140px] h-[70px] flex items-center justify-center mb-4">
              <img
                className="w-full h-full object-contain"
                alt="MIT Sloan"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-[110px] h-[55px] flex items-center justify-center mb-4">
              <img
                className="w-full h-full object-contain"
                alt="Yale University"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] flex items-center justify-center mb-4">
              <img
                className="w-full h-full object-contain"
                alt="IIT Delhi"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16">
        <div className="max-w-[998px] mx-auto">
          {/* Yellow Header */}
          <div className="bg-[#f8b402] rounded-2xl py-10 px-6 mb-8 shadow-md">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[40px] text-center">
              Founded by Alumni from
            </h2>
          </div>
          
          {/* Logos Container */}
          <div className="bg-white rounded-xl shadow-lg py-8 px-12 flex items-center justify-center gap-16 max-w-[500px] mx-auto">
            <img
              className="w-[115px] h-[60px] object-cover"
              alt="MIT Sloan"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
            />
            <img
              className="w-[102px] h-[38px] object-cover"
              alt="Yale"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
            />
            <img
              className="w-[74px] h-[74px] object-cover"
              alt="IIT Delhi"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
