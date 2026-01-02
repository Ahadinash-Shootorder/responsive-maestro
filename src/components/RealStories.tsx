import React, { useState } from 'react';

export const RealStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mentors = [
    {
      name: "Nobin Mattam",
      title: "Talent Acquisition Lead, TESCO",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-5.png",
      badge: "TESCO",
      badgeImage: "/Tesco.png"
    },
    {
      name: "Satyanshu Singh",
      title: "Filmfare Award Winner & Netflix Fame Writer and Director",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-6.png",
      badge: "NETFLIX",
      badgeImage: "/Netfilx.png"
    }
  ];

  const testimonials = [
    { heading: "Learning by Doing", quote: "Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.", author: "Sara", school: "Prometheus School, Noida" },
    { heading: "Real-World Experience", quote: "The mentorship program gave me insights into corporate life that no classroom could provide.", author: "Aahana", school: "Lotus Valley International School, Noida" },
    { heading: "Career Clarity", quote: "I now understand what different roles entail and can make informed career decisions.", author: "Rahul", school: "Delhi Public School, Gurgaon" },
    { heading: "Skill Development", quote: "The hands-on projects helped me develop practical skills that will be valuable in my future career.", author: "Priya", school: "Modern School, Delhi" },
    { heading: "Industry Connections", quote: "Getting mentored by professionals from top companies opened doors I never knew existed.", author: "Arjun", school: "St. Xavier's School, Mumbai" }
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full">
        <div className="bg-[#f7f7f7] px-4 py-8">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-2xl text-center mb-8">
            Sample Profiles of Industry Mentors
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={mentor.badgeImage}
                    alt={mentor.badge}
                    className="absolute -top-3 -left-4 w-16 h-10 rounded bg-white object-contain z-10"
                  />
                  <img src={mentor.image} alt={mentor.name} className="w-32 h-32" />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-sm text-center mt-2">
                  {mentor.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-xs text-center">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#122e6c] rounded-lg p-4 flex items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-white font-bold text-4xl">20+</div>
              <div className="text-white text-xs">UNIQUE INDUSTRIES/<br />FUNCTIONS</div>
            </div>
            <div className="text-white font-bold">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-4xl">100+</div>
              <div className="text-white text-xs">MENTORS</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative mt-9">
            <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none ml-1">
              "
            </div>
            <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
              <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  The continuity with one mentor for four weeks made it far more engaging than any other program I've attended.
                </span>
                <span className="font-bold text-[#122e6c] text-lg"> – Aahana,</span>
                <span className="text-black text-lg"> Lotus Valley International School, Noida</span>
              </p>
            </div>
          </div>
        </div>
            
        {/* Real Stories */}
        <div className="px-4 py-8 bg-white">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-6">
            Real Stories | Real Skills | Real Impact
          </h2>

          <div className="relative overflow-hidden">
            <div className="absolute -top-5 -left-4 bg-white h-[80px] w-[80px] flex items-center justify-center pt-4 z-40">
              <span className="text-[#ef7f1a] h-[100%] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none">
                "
              </span>
            </div>
            
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full relative">
                  <div className="border border-[#ef7f1a] rounded-lg p-6 mt-6 pt-12 bg-white shadow-sm">
                    <div className="text-black text-lg mb-2">{testimonial.heading}</div>
                    <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-lg leading-relaxed mb-4">
                      {testimonial.quote}
                    </p>
                    <p className="text-[#ef7f1a]">
                      <span className="font-bold">– {testimonial.author},</span> {testimonial.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
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
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full">
        <div className="bg-[#f7f7f7] px-6 py-12">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-4xl text-center mb-12">
            Sample Profiles of Industry Mentors
          </h2>

          <div className="flex justify-center gap-8 mb-12">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <span className="absolute -top-3 left-0 bg-red-600 text-white text-sm px-3 py-1 rounded font-bold">
                    {mentor.badge}
                  </span>
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full border-4 border-[#ef7f1a] object-cover"
                  />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-lg text-center">
                  {mentor.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-sm text-center leading-tight">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#122e6c] rounded-lg p-6 flex items-center justify-center gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-[#ef7f1a] font-bold text-4xl">20+</div>
              <div className="text-white text-sm">UNIQUE INDUSTRIES/<br />FUNCTIONS</div>
            </div>
            <div className="text-white font-bold text-4xl">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-4xl">100+</div>
              <div className="text-white text-sm">MENTORS</div>
            </div>
          </div>
        </div>

        <div className="px-6 py-12 bg-white">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-8">
            Real Stories | Real Skills | Real Impact
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="text-[#122e6c] text-[120px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] leading-none absolute -top-6 left-0">
                "
              </div>
              
              <div className="border-2 border-[#ef7f1a] rounded-2xl p-8 pt-16 bg-white">
                <div className="text-black text-2xl mb-4">Learning by Doing</div>
                <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-xl leading-relaxed mb-6">
                  Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
                </p>
                <p className="text-[#ef7f1a] text-lg">
                  <span className="font-bold">– Sara,</span> Prometheus School, Noida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-4xl text-center mb-12">
            Sample Profiles of Industry Mentors
          </h2>

          <div className="bg-[#f7f7f7] rounded-[20px] p-8 mb-12">
            <div className="flex justify-center gap-16">
              {mentors.map((mentor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-41.svg"
                      alt="Badge"
                      className="absolute -top-3 -left-4 w-[79px] h-[71px] object-cover"
                    />
                    <img src={mentor.image} alt={mentor.name} className="w-[151px] h-[151px] object-cover" />
                  </div>
                  <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-[15px] text-center mt-4">
                    {mentor.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-[15px] text-center">
                    {mentor.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <div className="bg-[#122e6c] rounded-[20px] py-6 px-16 flex items-center gap-8">
                <img src="https://c.animaapp.com/mjmwrwbp4K97wU/img/20-unique-industries.png" alt="20+ Industries" className="w-[269px] h-[149px] object-cover" />
                <div className="bg-white px-4 py-2 rounded">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl">FROM</span>
                </div>
                <img src="https://c.animaapp.com/mjmwrwbp4K97wU/img/100-mentors.png" alt="100+ Mentors" className="w-[269px] h-[149px] object-cover" />
              </div>
            </div>
          </div>

          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-8">
            Real Stories | Real Skills | Real Impact
          </h2>

          <div className="relative border border-solid border-[#122e6c] rounded-[20px] p-12">
            <div className="text-[#122e6c] text-[200px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal leading-none absolute -top-20 left-8">
              "
            </div>
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-4xl ml-32 pt-8">
              <span className="font-semibold italic text-[#f36a1e]">
                The continuity with one mentor for four weeks made it far<br />
                more engaging than any other program I've attended.
              </span>
              <span className="font-bold text-[#122e6c] text-2xl"> – Aahana,</span>
              <span className="text-black text-2xl"> Lotus Valley International School, Noida</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
