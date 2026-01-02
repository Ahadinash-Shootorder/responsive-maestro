import React from 'react';

export const Testimonials = () => {
  const testimonialCards = [
    { heading: "Learning by Doing", quote: "It gave me hands-on experience in consulting– from research to pitching – something we don't get to do in a classroom.", author: "Devansh", school: "Overseas Family School, Singapore" },
    { heading: "Future-Ready Skillset", quote: "I improved critical skills – research, teamwork, and professional presentations – that apply to any career.", author: "Diya", school: "Indus International School, Pune" },
    { heading: "Prepared for the Real World", quote: "This internship gave me life skills I can use beyond school– a lot of which can be implemented in real life.", author: "Jaskirat", school: "The British Co-Ed High School, Patiala" },
    { heading: "Career Exploration & Clarity", quote: "GradCircle helped me clear my doubts about career options. You think something isn't for you, but after trying it, you realize it is.", author: "Avni", school: "St Constantine's International School, Tanzania" },
    { heading: "Real Industry Exposure", quote: "Corporate and international law now excite me far more than I imagined before starting this program.", author: "Aviraj", school: "Mahindra United World College, Pune" }
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white py-8 px-4">
        <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-xl text-center mb-8">
          100+ Mentors | 20+ Career Pathways
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none ml-1">
            "
          </div>
          
          <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
              </span>
              <span className="font-bold text-[#122e6c] text-lg"> – Sara,</span>
              <span className="text-black text-lg"> Prometheus School, Noida</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-white py-12 px-6">
        <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-3xl text-center mb-12">
          100+ Mentors | 20+ Career Pathways
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="text-[#122e6c] text-[140px] [font-family:'Georgia',serif] font-bold leading-none -mb-14 ml-2">
              "
            </div>
            
            <div className="border-2 border-[#122e6c] rounded-3xl p-8 ml-8 bg-white shadow-md">
              <p className="[font-family:'Montserrat',Helvetica] font-normal text-2xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
                </span>
                <span className="font-bold text-[#122e6c] text-xl"> – Sara,</span>
                <span className="text-black text-xl"> Prometheus School, Noida</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px]">
          {/* Main Testimonial */}
          <div className="relative mb-16">
            <div className="border border-solid border-[#122e6c] rounded-[20px] p-12">
              <div className="text-[#122e6c] text-[200px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal leading-none absolute -top-20 left-8">
                "
              </div>
              <p className="[font-family:'Montserrat',Helvetica] font-normal text-4xl ml-32 pt-8">
                <span className="font-semibold italic text-[#f36a1e]">
                  Instead of just theory, we worked on realistic case studies,<br />
                  applying our learnings like in real life.
                </span>
                <span className="font-bold text-[#122e6c] text-2xl"> – Sara,</span>
                <span className="text-black text-2xl"> Prometheus School, Noida</span>
              </p>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {testimonialCards.slice(0, 4).map((card, index) => (
              <div key={index} className="relative border border-solid border-[#ef7f1a] rounded-[20px] p-8">
                <div className="text-[#ef7f1a] text-[150px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal leading-none absolute -top-12 left-4">
                  "
                </div>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-2xl mb-4 ml-24 bg-white inline-block">
                  {card.heading}
                </div>
                <p className="[font-family:'Montserrat',Helvetica] text-2xl leading-7 ml-8">
                  <span className="font-semibold italic text-[#122e6c]">{card.quote}</span>
                  <br />
                  <span className="font-bold text-[#ef7f1a]">– {card.author},</span>
                  <span className="text-[#ef7f1a]"> {card.school}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Center Card */}
          <div className="flex justify-center">
            <div className="relative border border-solid border-[#ef7f1a] rounded-[20px] p-8 max-w-[650px]">
              <div className="text-[#ef7f1a] text-[150px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal leading-none absolute -top-12 left-4">
                "
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-2xl mb-4 ml-24 bg-white inline-block">
                {testimonialCards[4].heading}
              </div>
              <p className="[font-family:'Montserrat',Helvetica] text-2xl leading-7 ml-8">
                <span className="font-semibold italic text-[#122e6c]">{testimonialCards[4].quote}</span>
                <br />
                <span className="font-bold text-[#ef7f1a]">– {testimonialCards[4].author},</span>
                <span className="text-[#ef7f1a]"> {testimonialCards[4].school}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
