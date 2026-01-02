import React from 'react';

export const SampleProjects = () => {
  const projects = [
    { title: "Market Expansion:", description: "Develop a strategy for an Indian electric scooter brand to enter Southeast Asia." },
    { title: "Equity Research:", description: "Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation." },
    { title: "Healthcare Innovation:", description: "Create a market-entry plan for a next-gen prenatal screening test in India." },
    { title: "UX Redesign:", description: "Design a courtroom advocacy plan for a public interest case." },
    { title: "Litigation Strategy:", description: "Improve user experience for a wearable fitness device through interface and feature innovation." },
    { title: "AI for Social Good:", description: "Build a fake news detection and sentiment analysis system for social media." },
    { title: "Investigative Journalism:", description: "Uncover the truth behind 'healthy' food labels through data and regulatory analysis." },
    { title: "Policy Review:", description: "Evaluate the effectiveness of a government employment scheme introduced 5 years ago." },
  ];

  return (
    <section className="w-full bg-white px-6 py-12">
      {/* Mobile */}
      <div className="block md:hidden">
        <div className="relative mb-8">
          <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none ml-1">"</div>
          <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">I loved building our own brand and creating a detailed investor pitch- it felt like the real world.</span>
              <span className="font-bold text-[#122e6c] text-lg"> – Laavanya,</span>
              <span className="text-black text-lg"> The British Co-Ed High School, Patiala</span>
            </p>
          </div>
        </div>
        <h2 className="font-bold text-[#0e416f] text-4xl mt-8 mb-4">Sample Projects</h2>
        <p className="text-black text-lg mb-6 leading-relaxed">Below are examples of real-world problem statements students have tackled.</p>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="font-bold text-[#ef7f1a] text-xl">{project.title}</h3>
              <p className="text-black text-lg leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden max-w-4xl mx-auto">
        <h2 className="font-bold text-[#0e416f] text-4xl mb-4 text-center">Sample Projects</h2>
        <p className="text-black text-lg mb-8 leading-relaxed text-center">Below are examples of real-world problem statements students have tackled.</p>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-4">
              <img className="w-8 h-8 mt-1 flex-shrink-0" alt="Check" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
              <div>
                <h3 className="font-bold text-[#ef7f1a] text-xl">{project.title}</h3>
                <p className="text-black text-lg leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block max-w-[1340px] mx-auto px-[50px]">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl mb-8">Sample Projects</h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[32px] mb-8">Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.</p>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-4">
              <img className="w-[30px] h-[30px] mt-1" alt="Check" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-xl"><span className="font-bold">{project.title}</span> {project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
