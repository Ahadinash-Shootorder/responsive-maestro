import React from 'react';

export const Testimonials = () => {
  return (
    <section className="w-full bg-white">
      {/* Mobile Version */}
      <div className="block md:hidden w-full py-8 px-5">
        {/* Testimonial Card */}
        <div className="relative">
          <div className="absolute -top-4 left-0 text-[#122e6c] text-[100px] [font-family:'Georgia',serif] font-bold leading-none z-10">
            "
          </div>
          
          <div className="border-2 border-[#122e6c] rounded-2xl p-5 pt-12 bg-white">
            <p className="[font-family:'Montserrat',Helvetica] text-base leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
              </span>
              <span className="font-bold text-[#122e6c]"> – Sara,</span>
              <span className="text-black"> Prometheus School, Noida</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full py-10 px-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 left-0 text-[#122e6c] text-[120px] [font-family:'Georgia',serif] font-bold leading-none z-10">
              "
            </div>
            
            <div className="border-2 border-[#122e6c] rounded-2xl p-8 pt-16 bg-white">
              <p className="[font-family:'Montserrat',Helvetica] text-xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
                </span>
                <span className="font-bold text-[#122e6c]"> – Sara,</span>
                <span className="text-black"> Prometheus School, Noida</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-12 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <div className="relative border border-[#122e6c] rounded-[20px] p-10">
            <div className="absolute -top-16 left-8 text-[#122e6c] text-[180px] [font-family:'Georgia',serif] font-bold leading-none">
              "
            </div>
            <p className="[font-family:'Montserrat',Helvetica] text-3xl ml-28 pt-6 leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                Instead of just theory, we worked on realistic case studies,<br />
                applying our learnings like in real life.
              </span>
              <span className="font-bold text-[#122e6c] text-2xl"> – Sara,</span>
              <span className="text-black text-2xl"> Prometheus School, Noida</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
