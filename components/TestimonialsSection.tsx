'use client';

import React from 'react';
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  body: string;
  img: string;
}

const testimonials: Testimonial[] = [
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
    img: "/Testamonials/Punit.jpeg"
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
    img: "/Testamonials/Pahwa.jpeg"
  },
  {
    name: "Miko Matsumura",
    role: "Yale Neuroscience, Managing Partner gCC Venture Capital",
    body: "keep up the good work ser",
    img: "/Testamonials/miko.jpeg"
  },
  {
    name: "Deepshika Gulati",
    role: "CSE student",
    body: "Well deserved! Keep up the good work.",
    img: "/Testamonials/Deepshika.jpeg"
  },

];

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ img, name, role, body }) => {
  return (
    <figure className={cn(
      "relative w-[180px] xs:w-[220px] sm:w-[260px] lg:w-[320px]", // Increased width for large screens
      "h-[140px] xs:h-[150px] sm:h-[160px] lg:h-[180px]", // Increased height for large screens
      "cursor-default rounded-xl border p-2.5 sm:p-4 lg:p-6", // Increased padding for large screens
      "border-white/5 bg-black/10 backdrop-blur-sm",
      "transform transition-all duration-300 hover:scale-[1.02] hover:bg-black/20",
      "group flex flex-col justify-between"
    )}>
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        <div className="shrink-0">
          <img 
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full object-cover border border-white/5 group-hover:border-white/10 transition-all duration-300" 
            alt={`${name}'s profile picture`} 
            src={img}
          />
        </div>
        <div className="flex flex-col min-w-0">
          <figcaption className="text-xs sm:text-sm lg:text-base font-medium text-white/90 truncate">
            {name}
          </figcaption>
          <p className="text-[10px] sm:text-xs lg:text-sm text-white/50 truncate">
            {role}
          </p>
        </div>
      </div>
      <blockquote className="text-[11px] sm:text-xs lg:text-sm text-white/70 leading-relaxed italic line-clamp-3">
        "{body}"
      </blockquote>
      <div className="absolute top-2 right-2 lg:top-3 lg:right-3 opacity-5 text-2xl sm:text-3xl lg:text-4xl font-serif">"</div>
    </figure>
  );
};

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, reverse = false, className }) => {
  return (
    <div 
      className={cn(
        "flex gap-3 sm:gap-4 lg:gap-6 animate-marquee", // Increased gap for large screens
        reverse && "animate-marquee-reverse",
        className
      )}
    >
      {children}
      {children}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-16 overflow-hidden"> {/* Increased padding for large screens */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 lg:mb-12"> {/* Increased margin for large screens */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-white/70 max-w-2xl mx-auto font-light">
            Feedback and insights shared by mentors and classmates I've had the privilege to learn from.
          </p>
        </div>

        <div className="relative flex flex-col gap-4 sm:gap-6 lg:gap-8 overflow-hidden py-4">
          <Marquee 
            className="[--duration:35s] sm:[--duration:40s] lg:[--duration:45s]" 
            reverse={false}
          >
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          
          <Marquee 
            className="[--duration:40s] sm:[--duration:45s] lg:[--duration:50s]" 
            reverse={true}
          >
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;