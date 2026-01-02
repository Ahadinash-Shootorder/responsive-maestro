import React from "react";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer id="mobile-footer" className="w-full">
      {/* Program Fee & Certificate Section */}
      <div className="bg-white px-6 py-10 md:py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Left - Program Info */}
          <div className="text-center lg:text-left">
            <div className="text-black text-xl md:text-2xl mb-2">Program Fee:</div>
            <div className="text-black text-2xl md:text-3xl font-bold mb-6">
              INR <span className="text-[#0e416f]">17,500 + 18% GST</span>
            </div>
            <div className="text-black text-xl md:text-2xl mb-4">Next Cohorts Starting:</div>
            <div className="text-black text-xl md:text-2xl mb-8">
              <span className="font-bold">Jan & Feb</span> (Weekends)
            </div>
            <img
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
              alt="Sample Certificate"
              className="w-full max-w-md h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
            />
          </div>

          {/* Right - Contact Form (Desktop only) */}
          <div className="hidden lg:block w-[500px]">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#122e6c] py-8 md:py-12 px-6 text-center">
        <p className="text-white text-sm md:text-lg mb-4 md:mb-6">
          info@mygradcircle.com | www.mygradcircle.com
        </p>
        
        <div className="text-white text-sm md:text-lg mb-4 md:mb-6">
          <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
          <span className="mx-3 md:mx-4">|</span>
          <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
        </div>
        
        <p className="text-white/70 text-xs md:text-sm">
          © Copyright GradCircle, All rights reserved 2025.
        </p>
      </div>

      {/* Mobile Apply Button */}
      <div className="flex lg:hidden justify-center">
        <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl py-4 w-full text-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg">
          Apply Now
        </a>
      </div>
    </footer>
  );
};
