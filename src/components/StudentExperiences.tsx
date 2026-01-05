import React from 'react';

export const StudentExperiences = () => {
  return (
    <section className="w-full bg-white">
      {/* Mobile Layout */}
      <div className="block md:hidden px-5 py-8">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-2xl text-center mb-6">
          Student Experiences
        </h2>
        
        <div className="rounded-xl border-2 border-[#122e6c] p-3 overflow-hidden">
          <img
            className="w-full h-auto rounded-lg object-cover"
            alt="Student Experience Video"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
          />
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden px-8 py-10 max-w-3xl mx-auto">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-3xl text-center mb-8">
          Student Experiences
        </h2>
        
        <div className="rounded-2xl border-3 border-[#122e6c] p-4 overflow-hidden">
          <img
            className="w-full h-auto rounded-xl object-cover"
            alt="Student Experience Video"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block py-14">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="relative border border-[#122e6c] rounded-[20px] p-8">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-6">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-4xl text-center">
                Student Experiences
              </h2>
            </div>
            
            <div className="flex justify-center pt-6">
              <img
                className="w-full max-w-[900px] h-auto object-cover rounded-lg"
                alt="Student Experiences"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
