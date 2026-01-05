import React from "react";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer id="mobile-footer" className="w-full">
      {/* Program Fee & Certificate Section */}
      <div className="bg-white px-5 py-8 md:px-8 md:py-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Left - Program Info */}
          <div className="text-center lg:text-left">
            <div className="text-black text-lg md:text-xl mb-1">Program Fee:</div>
            <div className="text-black text-xl md:text-2xl font-bold mb-5">
              INR <span className="text-[#0e416f]">17,500 + 18% GST</span>
            </div>
            <div className="text-black text-lg md:text-xl mb-1">Next Cohorts Starting:</div>
            <div className="text-black text-lg md:text-xl mb-6">
              <span className="font-bold">Jan & Feb</span> (Weekends)
            </div>
            <img
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
              alt="Sample Certificate"
              className="w-full max-w-sm h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
            />
          </div>

          {/* Right - Contact Form (Desktop only) */}
          <div className="hidden lg:block w-[450px]">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#122e6c] py-6 md:py-8 px-5 text-center">
        <p className="text-white text-sm md:text-base mb-3">
          info@mygradcircle.com | www.mygradcircle.com
        </p>
        
        <div className="text-white text-sm md:text-base mb-3">
          <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
          <span className="mx-3">|</span>
          <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
        </div>
        
        <p className="text-white/70 text-xs md:text-sm">
          © Copyright GradCircle, All rights reserved 2025.
        </p>
      </div>

      {/* Mobile Apply Button */}
      <div className="flex lg:hidden">
        <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-lg py-4 w-full text-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200">
          Apply Now
        </a>
      </div>
    </footer>
  );
};
