import React, { useState } from 'react';

export const RealStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mentors = [
    {
      name: "Nobin Mattam",
      title: "Talent Acquisition Lead, TESCO",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-5.png",
      badge: "https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-41.svg"
    },
    {
      name: "Satyanshu Singh",
      title: "Filmfare Award Winner & Netflix Fame Writer and Director",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-6.png",
      badge: "https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-41.svg"
    }
  ];

  const testimonials = [
    { heading: "Learning by Doing", quote: "Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.", author: "Sara", school: "Prometheus School, Noida" },
    { heading: "Real-World Experience", quote: "The mentorship program gave me insights into corporate life that no classroom could provide.", author: "Aahana", school: "Lotus Valley International School, Noida" },
    { heading: "Career Clarity", quote: "I now understand what different roles entail and can make informed career decisions.", author: "Rahul", school: "Delhi Public School, Gurgaon" }
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full">
        <div className="bg-gray-50 px-5 py-8">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-xl text-center mb-6">
            Sample Profiles of Industry Mentors
          </h2>

          <div className="flex justify-center gap-6 mb-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-2">
                  <img
                    src={mentor.badge}
                    alt="Badge"
                    className="absolute -top-2 -left-3 w-12 h-10 object-contain z-10"
                  />
                  <img src={mentor.image} alt={mentor.name} className="w-24 h-24 object-contain" />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-xs text-center">
                  {mentor.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-[10px] text-center leading-tight max-w-[120px]">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#122e6c] rounded-lg p-4 flex items-center justify-center gap-3">
            <div className="text-center">
              <div className="text-[#ef7f1a] font-bold text-2xl">20+</div>
              <div className="text-white text-[10px]">UNIQUE INDUSTRIES/<br />FUNCTIONS</div>
            </div>
            <div className="text-white font-bold text-sm px-2">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-2xl">100+</div>
              <div className="text-white text-[10px]">MENTORS</div>
            </div>
          </div>
        </div>
            
        {/* Real Stories */}
        <div className="px-5 py-8 bg-white">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-xl text-center mb-6">
            Real Stories | Real Skills | Real Impact
          </h2>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="relative">
                    <div className="absolute -top-4 left-0 text-[#ef7f1a] text-[80px] [font-family:'Georgia',serif] font-bold leading-none z-10">
                      "
                    </div>
                    <div className="border border-[#ef7f1a] rounded-lg p-5 pt-10 bg-white">
                      <div className="text-black text-sm mb-2 font-medium">{testimonial.heading}</div>
                      <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-sm leading-relaxed mb-3">
                        {testimonial.quote}
                      </p>
                      <p className="text-[#ef7f1a] text-sm">
                        <span className="font-bold">– {testimonial.author},</span> {testimonial.school}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, index) => (
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
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full">
        <div className="bg-gray-50 px-8 py-10">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-8">
            Sample Profiles of Industry Mentors
          </h2>

          <div className="flex justify-center gap-12 mb-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-3">
                  <img
                    src={mentor.badge}
                    alt="Badge"
                    className="absolute -top-3 -left-4 w-16 h-14 object-contain z-10"
                  />
                  <img src={mentor.image} alt={mentor.name} className="w-32 h-32 object-contain" />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-base text-center">
                  {mentor.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-sm text-center leading-tight max-w-[180px]">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#122e6c] rounded-lg p-5 flex items-center justify-center gap-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-[#ef7f1a] font-bold text-3xl">20+</div>
              <div className="text-white text-sm">UNIQUE INDUSTRIES/<br />FUNCTIONS</div>
            </div>
            <div className="text-white font-bold text-2xl">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-3xl">100+</div>
              <div className="text-white text-sm">MENTORS</div>
            </div>
          </div>
        </div>

        <div className="px-8 py-10 bg-white">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-8">
            Real Stories | Real Skills | Real Impact
          </h2>

          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-4 left-0 text-[#ef7f1a] text-[80px] [font-family:'Georgia',serif] font-bold leading-none z-10">
                  "
                </div>
                <div className="border border-[#ef7f1a] rounded-lg p-5 pt-10 bg-white h-full">
                  <div className="text-black text-base mb-2 font-medium">{testimonial.heading}</div>
                  <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-base leading-relaxed mb-3">
                    {testimonial.quote}
                  </p>
                  <p className="text-[#ef7f1a] text-sm">
                    <span className="font-bold">– {testimonial.author},</span> {testimonial.school}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-14">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-10">
            Sample Profiles of Industry Mentors
          </h2>

          <div className="bg-gray-50 rounded-[20px] p-8 mb-12">
            <div className="flex justify-center gap-20 mb-8">
              {mentors.map((mentor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={mentor.badge}
                      alt="Badge"
                      className="absolute -top-3 -left-5 w-[70px] h-[60px] object-contain z-10"
                    />
                    <img src={mentor.image} alt={mentor.name} className="w-[140px] h-[140px] object-contain" />
                  </div>
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-base text-center mt-3">
                    {mentor.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-sm text-center max-w-[200px]">
                    {mentor.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-[#122e6c] rounded-[20px] py-5 px-12 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-[#ef7f1a] font-bold text-4xl">20+</div>
                  <div className="text-white text-sm">UNIQUE INDUSTRIES/<br />FUNCTIONS</div>
                </div>
                <div className="bg-white px-4 py-2 rounded">
                  <span className="[font-family:'Inter',Helvetica] font-bold text-black text-xl">FROM</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-4xl">100+</div>
                  <div className="text-white text-sm">MENTORS</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-8">
            Real Stories | Real Skills | Real Impact
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`relative ${index === 2 ? 'col-span-2 max-w-xl mx-auto' : ''}`}>
                <div className="absolute -top-6 left-4 text-[#ef7f1a] text-[120px] [font-family:'Georgia',serif] font-bold leading-none z-10">
                  "
                </div>
                <div className="border border-[#ef7f1a] rounded-[20px] p-8 pt-14 bg-white">
                  <div className="text-black text-xl mb-3 font-medium ml-20">{testimonial.heading}</div>
                  <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-xl leading-relaxed mb-4 ml-6">
                    {testimonial.quote}
                  </p>
                  <p className="text-[#ef7f1a] text-lg ml-6">
                    <span className="font-bold">– {testimonial.author},</span> {testimonial.school}
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
