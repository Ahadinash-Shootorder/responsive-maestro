import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [utmParams, setUtmParams] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
      gclid: urlParams.get('gclid') || null,
      fbclid: urlParams.get('fbclid') || null,
    };
    setUtmParams(utmData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.phone && formData.phone.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number (at least 10 digits).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;

      const payload = {
        full_name: fullName,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        product: "GradCircle_OTP Form_Small_SO",
        lead_status: "new",
        note: "Form submission from website",
        timestamp: new Date().toISOString(),
        ...utmParams
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}?access_token=${import.meta.env.VITE_API_ACCESS_TOKEN}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('API Error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[540px] h-auto items-start gap-5 md:gap-[38px] px-5 md:px-[35px] py-7 md:py-[38px] bg-[#000000f5] rounded-[28px] md:rounded-[45px] border border-solid border-black shadow-lg mx-auto">
      <div className="flex flex-col w-full items-start gap-2 relative">
        <div className="relative w-full [font-family:'Inter',Helvetica] font-bold text-white text-[26px] md:text-[30px] tracking-[0] leading-tight">
          Connect With An Expert
        </div>
        <p className="relative w-full opacity-80 [font-family:'Inter',Helvetica] font-normal text-white text-[14px] md:text-[15px] tracking-[-0.16px] leading-normal">
          Let's discuss your plans and find the projects most suitable to your goals
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-start gap-3 md:gap-3.5 relative flex-1">
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-3.5 relative self-stretch w-full">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="flex flex-col items-start justify-center gap-2.5 px-3.5 py-3 relative w-full md:flex-1 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="flex flex-col items-start justify-center gap-2.5 px-3.5 py-3 relative w-full md:flex-1 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
            required
          />
        </div>
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          className="px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
          required
        />
        
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          className="px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
          required
        />
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="flex flex-col h-[100px] md:h-[111px] items-start gap-2.5 px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal resize-none placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
          required
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2.5 px-2.5 py-3.5 relative self-stretch w-full rounded-[5px] bg-[#ef7f1a] hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative [font-family:'Inter',Helvetica] font-semibold text-white text-[15px] tracking-[-0.15px] leading-normal whitespace-nowrap">
            {isSubmitting ? 'Sending...' : 'Submit'}
          </span>
        </button>
      </form>
    </div>
  );
};
