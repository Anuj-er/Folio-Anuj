import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import  ShimmerButton  from "@/components/ui/shimmer-button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateEmail = (email: string): string => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!re.test(email)) return "Please enter a valid email";
    return "";
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: !formData.name ? "Name is required" : "",
      email: validateEmail(formData.email),
      message: formData.message.length < 10 ? "Message must be at least 10 characters" : ""
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus('');

    try {
      await emailjs.send(
        'service_9tapsij',
        'template_r207juj',
        {
          to_name: formData.name,
          message: formData.message,
          reply_to: formData.email,
          Date: new Date().toLocaleString()
        },
        'otWehLKvXkO54rSNd'
      );
      await emailjs.send(
        'service_9tapsij',
        'template_icajano',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: new Date().toLocaleString()
        },
        'otWehLKvXkO54rSNd'
      );

      setSubmitStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-16 space-y-2 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70">
            Let's discuss our next project
          </p>
        </div>

        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-1 relative group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent px-0 py-2 text-white placeholder:text-white/60 
                  border-b border-white/40 focus:border-blue-500 focus:outline-none transition-colors"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-1 relative group">
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent px-0 py-2 text-white placeholder:text-white/60 
                  border-b border-white/40 focus:border-blue-500 focus:outline-none transition-colors"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-1 relative group">
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent px-0 py-2 text-white placeholder:text-white/60 
                  border-b border-white/40 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>

            <div className="flex justify-end">
              <ShimmerButton
                className="px-6 py-2 text-sm font-medium"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? '...' : 'Send'}
              </ShimmerButton>
            </div>

            {submitStatus && (
              <div className={`text-center text-sm font-medium ${
                submitStatus.includes('success') ? 'text-green-400' : 'text-red-400'
              }`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;