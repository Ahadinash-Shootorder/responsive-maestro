import React from 'react';

export const SampleProjects = () => {
  const projects = [
    { title: "Market Expansion:", description: "Develop a strategy for an Indian electric scooter brand to enter Southeast Asia." },
    { title: "Equity Research:", description: "Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation." },
    { title: "Healthcare Innovation:", description: "Create a market-entry plan for a next-gen prenatal screening test in India." },
    { title: "Litigation Strategy:", description: "Design a courtroom advocacy plan for a public interest case." },
    { title: "UX Redesign:", description: "Improve user experience for a wearable fitness device through interface and feature innovation." },
    { title: "AI for Social Good:", description: "Build a fake news detection and sentiment analysis system for social media." },
    { title: "Investigative Journalism:", description: "Uncover the truth behind 'healthy' food labels through data and regulatory analysis." },
    { title: "Policy Review:", description: "Evaluate the effectiveness of a government employment scheme introduced 5 years ago." },
  ];

  return (
    <section className="w-full bg-white">
      {/* Mobile */}
      <div className="block md:hidden px-5 py-8">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-2xl mb-4">Sample Projects</h2>
        <p className="text-black text-base mb-6 leading-relaxed">
          Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-3">
              <img className="w-6 h-6 mt-0.5 flex-shrink-0" alt="Check" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
              <p className="text-black text-sm leading-relaxed">
                <span className="font-bold text-[#ef7f1a]">{project.title}</span> {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden max-w-4xl mx-auto px-8 py-10">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-3xl mb-4">Sample Projects</h2>
        <p className="text-black text-lg mb-8 leading-relaxed">
          Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-4">
              <img className="w-7 h-7 mt-0.5 flex-shrink-0" alt="Check" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
              <p className="text-black text-base leading-relaxed">
                <span className="font-bold text-[#ef7f1a]">{project.title}</span> {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block max-w-[1340px] mx-auto px-[50px] py-12">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl mb-6">Sample Projects</h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl mb-8 leading-relaxed">
          Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-4">
              <img className="w-[28px] h-[28px] mt-1 flex-shrink-0" alt="Check" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-xl leading-relaxed">
                <span className="font-bold">{project.title}</span> {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
