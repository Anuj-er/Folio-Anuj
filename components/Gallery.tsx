'use client';

import React from 'react';
import { cn } from "@/lib/utils";

const PhotoCard = ({ 
  src, 
  alt, 
  className = "" 
}: { 
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={cn(
    "group relative overflow-hidden rounded-xl sm:rounded-2xl",
    "transition-all duration-300 ease-out hover:scale-[1.02]",
    "cursor-pointer",
    className
  )}>
    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <img 
      src={src} 
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
);

const Gallery = () => {
  const photos = [
    {
      src: "./Gallery/second.jpg",
      alt: "with Stephen Simon",
      className: "col-span-1 sm:row-span-2"
    },
    {
      src: "./Gallery/3.jpg",
      alt: "image",
      className: "col-span-1 sm:row-span-1"
    },
    {
      src: "./Gallery/4.jpg",
      alt: "image",
      className: "col-span-1 sm:row-span-1"
    },
    {
      src: "./Gallery/5.jpg",
      alt: "image",
      className: "col-span-1 sm:row-span-2"
    },
    {
      src: "./Gallery/6.jpg",
      alt: "image",
      className: "col-span-1 sm:row-span-1"
    }
  ];

  return (
    <section id="gallery" className="relative w-full py-10 sm:py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
            A collection of memorable moments and creative captures
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 [&>*]:min-h-[200px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden",
                // Responsive height classes
                index === 0 || index === 3 ? "h-[300px] sm:h-[400px] md:h-[500px]" : "h-[200px] sm:h-[250px] md:h-[300px]",
                photo.className
              )}
            >
              <PhotoCard
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays - visible only on larger screens */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-1/4 bg-gradient-to-r from-black opacity-0 lg:opacity-100" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-1/4 bg-gradient-to-l from-black opacity-0 lg:opacity-100" />
      </div>
    </section>
  );
};

export default Gallery;