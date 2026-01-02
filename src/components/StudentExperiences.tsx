import React from 'react';

export const StudentExperiences = () => {
  return (
    <section className="w-full bg-white">
      {/* Mobile Layout */}
      <div className="block md:hidden px-6 py-12">
        <h2 className="font-bold text-[#122e6c] text-2xl text-center mb-6">Student Experiences</h2>
        
        <div className="rounded-xl border-2 border-[#122e6c] p-4">
          <img
            className="w-full h-auto rounded-lg object-cover"
            alt="Student Experience Video"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
          />
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden px-6 py-12 max-w-4xl mx-auto">
        <h2 className="font-bold text-[#122e6c] text-4xl text-center mb-8">Student Experiences</h2>
        
        <div className="rounded-2xl border-4 border-[#122e6c] p-6">
          <img
            className="w-full h-auto rounded-xl object-cover"
            alt="Student Experience Video"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block py-16">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="relative border border-solid border-[#122e6c] rounded-[20px] p-10">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-8">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-5xl text-center">
                Student Experiences
              </h2>
            </div>
            
            <div className="flex justify-center pt-8">
              <img
                className="w-[960px] h-[540px] object-cover rounded-lg"
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
