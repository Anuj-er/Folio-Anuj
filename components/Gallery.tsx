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
    "group relative w-full h-full",
    "transition-all duration-300 ease-out hover:scale-[1.02]",
    "cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden",
    className
  )}>
    <div className="aspect-[4/3] w-full h-full">
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const Gallery = () => {
  const photos = [
    {
      src: "./Gallery/second.jpg",
      alt: "with Stephen Simon",
      className: "col-span-1 sm:col-span-1 lg:col-span-1 sm:row-span-2 aspect-[9/16]"
    },
    {
      src: "./Gallery/3.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3]"
    },
    {
      src: "./Gallery/4.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3]"
    },
    {
      src: "./Gallery/5.jpg",
      alt: "image",
      className: "col-span-1 sm:col-span-1 lg:col-span-1 sm:row-span-2 aspect-[4/3]"
    },
    {
      src: "./Gallery/6.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3]"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={cn(
                "relative w-full",
                photo.className
              )}
            >
              <PhotoCard
                src={photo.src}
                alt={photo.alt}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Gallery;