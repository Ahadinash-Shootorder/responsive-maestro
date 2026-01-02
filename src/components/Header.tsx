import React from 'react';

export const Header = () => {
  return (
    <div className="w-full">
      {/* Mobile: centered logo */}
      <div className="flex md:hidden justify-center pt-4 pb-2">
        <img
          className="w-[200px] h-auto object-contain"
          alt="Gradcircle white"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
        />
      </div>
      
      {/* Tablet: left aligned */}
      <div className="hidden md:block lg:hidden pt-6 pl-8">
        <img
          className="w-[250px] h-auto object-contain"
          alt="Gradcircle white"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
        />
      </div>
      
      {/* Desktop: left aligned larger */}
      <div className="hidden lg:block pt-6 pl-[50px]">
        <img
          className="w-[310px] h-[54px] object-cover"
          alt="Gradcircle white"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
        />
      </div>
    </div>
  );
};
