import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Header } from './Header';

export const Hero = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('contact-form');
      const footerSection = document.getElementById('mobile-footer');
      
      if (formSection && footerSection) {
        const formRect = formSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();
        
        const isFormVisible = formRect.top < window.innerHeight && formRect.bottom > 0;
        const isFooterVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
        
        setShowFloatingButton(!isFormVisible && !isFooterVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact-form" className="relative w-full">
      {/* Mobile Layout */}
      <div className="block md:hidden relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ef7f1a] to-[#d66a0a]">
          <img
            className="w-full h-full object-cover opacity-60"
            alt="Background"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 pt-4 px-5 pb-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              className="w-[200px] h-auto object-contain"
              alt="Gradcircle"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-center [font-family:'Inter',Helvetica] font-bold text-white text-[32px] leading-[1.15] mb-5">
            Professional Immersion<br />Internship
          </h1>

          {/* Subtitle */}
          <p className="text-center [font-family:'Inter',Helvetica] font-normal text-white text-[16px] leading-[1.4] mb-6">
            Industry Mentors | Professional<br />Projects | Hands-on Learning
          </p>

          {/* Program Fee */}
          <div className="text-center mb-5">
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] mb-1">
              Program Fee:
            </p>
            <p className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px]">
              INR <span className="text-[20px]">17,500 + 18% GST</span>
            </p>
          </div>

          {/* Contact Form */}
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden relative">
        <div className="w-full min-h-[700px] bg-gradient-to-b from-[#ef7f1a] to-[#d66a0a] relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-[url('https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg')] bg-cover bg-center opacity-60"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[700px] px-8 text-center">
            {/* Logo */}
            <div className="mb-8">
              <img
                className="w-[250px] h-auto object-contain"
                alt="Gradcircle"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
              />
            </div>
            
            {/* Title */}
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-5xl italic leading-tight mb-6">
              Professional Immersion<br /> Internship
            </h1>
            {/* Subtitle */}
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-8 underline decoration-1 underline-offset-4">
              Industry Mentors | Professional Projects | Hands-on Learning
            </p>
            {/* Program Fee */}
            <div className="mb-6">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-2">
                Program Fee:
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl">
                INR <span className="text-4xl">17,500 + 18% GST</span>
              </p>
            </div>
            {/* Next Cohorts */}
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-10">
              Next Cohorts Starting: <span className="font-bold">Jan & Feb</span> (Weekends)
            </p>
            {/* Contact Form */}
            <div className="w-full max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        {/* Background */}
        <div className="relative w-full h-[740px]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Background"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg"
          />
          <img
            className="absolute bottom-0 left-0 w-full h-[266px]"
            alt="Vector"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-1.svg"
          />
          
          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-[50px] pt-[27px]">
            {/* Logo */}
            <img
              className="w-[310px] h-[54px] object-cover mb-12"
              alt="Gradcircle"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
            />
            
            <div className="flex justify-between items-start">
              {/* Left Content */}
              <div className="max-w-[500px]">
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-6xl leading-tight mb-6">
                  Professional Immersion<br />Internship
                </h1>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] underline decoration-1 underline-offset-2 mb-6">
                  Industry Mentors | Professional Projects | Hands-on Learning
                </p>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[22px] mb-6">
                  <span className="font-bold">4-week</span>, mentor-led virtual internship with <br />
                  Industry-Inspired projects and practical career insights
                </p>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl mb-4">
                  Program Fee: INR <span className="font-bold">17,500 + 18% GST</span>
                </p>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl">
                  Next Cohorts Starting: <span className="font-bold">Jan & Feb</span> (Weekends)
                </p>
              </div>
              
              {/* Right Form */}
              <div className="w-[500px]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Apply Now Button - Mobile Only */}
      {showFloatingButton && (
        <a
          href="#contact-form"
          className="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#ef7f1a] text-white font-bold text-lg py-4 w-full text-center shadow-lg hover:bg-[#d66f15] active:bg-[#c06312]"
        >
          Apply Now
        </a>
      )}
    </section>
  );
};
