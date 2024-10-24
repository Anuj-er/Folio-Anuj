'use client';

import React from 'react';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Anushi Rajput",
    role: "HackIndia National Finalist'24",
    body: "Your smart play and teamwork truly made a difference in our success!🤝 ✨",
    img: "/Testamonials/Anushi.jpeg"
  },
  {
    name: "Stephen Simon",
    role: "RD for C# Corner",
    body: "This was always smiling and energetic. Good Luck for your future!🚀",
    img: "/Testamonials/Stephen.jpeg"
  },
  
  {
    name: "Dr. Punit Soni",
    role: "Associate Professor at Chitkara University",
    body: "Well deserved! Keep up the good work.",
    img: "/Testamonials/Dr_punit_sir.jpeg"
  },
  {
    name: "Akanksha Mishra",
    role: "Hackindia Finalist",
    body: "Your support and contributions were a game-changer for the team.",
    img: "/Testamonials/Akanksha.jpeg"
  },
  {
    name: "HTET NE OO",
    role: "Wipro Certified Faculty",
    body: "Keep it up Anuj! You're doing great work.",
    img: "/Testamonials/HTETNEOOmam.jpeg"
  },
  {
    name: "Garvit Pahwa",
    role: "CSE student",
    body: "I would love the opportunity to work with you",
    img: "/Testamonials/garvit.jpeg"
  },
];

const TestimonialCard = ({ img, name, role, body }) => {
  return (
    <figure className={cn(
      "relative w-[300px] cursor-default overflow-hidden rounded-xl border p-4 mx-3",
      "border-white/10 bg-white/5 backdrop-blur-sm",
      "transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10",
      "group"
    )}>
      <div className="flex flex-row items-center gap-3">
        <img 
          className="rounded-full border border-white/10 group-hover:border-white/20 transition-colors" 
          width="40" 
          height="40" 
          alt={`${name}'s profile picture`} 
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            {name}
          </figcaption>
          <p className="text-xs text-white/60">{role}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-white/70 leading-relaxed">
        "{body}"
      </blockquote>
    </figure>
  );
};

const Marquee = ({ children, reverse, className }) => {
  return (
    <div 
      className={cn(
        "flex gap-4 animate-marquee",
        reverse && "animate-marquee-reverse",
        className
      )}
    >
      {children}
      {children}
    </div>
  );
};

const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
          Feedback and insights shared by mentors and classmates I’ve had the privilege to learn from.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 overflow-hidden py-8">
          <Marquee className="[--duration:35s]">
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          
          <Marquee reverse className="[--duration:40s]">
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;