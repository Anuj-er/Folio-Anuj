'use client';

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const PhotoCard = ({ 
  src, 
  alt,
  className = "" 
}: { 
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        "group relative w-full overflow-hidden rounded-xl sm:rounded-2xl",
        "transition-all duration-300 ease-out hover:scale-[1.02]",
        "cursor-pointer",
        className
      )}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  const photos = [
    {
      src: "./Gallery/second.jpg",
      alt: "with Stephen Simon",
      className: "col-span-1 md:col-span-1 row-span-2 aspect-[3/5] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
    },
    {
      src: "./Gallery/3.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
    {
      src: "./Gallery/4.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
    {
      src: "./Gallery/5.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
    {
      src: "./Gallery/1.png",
      alt: "image",
      className: "col-span-1 md:col-span-1 row-span-2 aspect-[3/5] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
    },
    {
      src: "./Gallery/7.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
    {
      src: "./Gallery/6.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
    {
      src: "./Gallery/8.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
    {
      src: "./Gallery/9.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
    {
      src: "./Gallery/10.jpg",
      alt: "image",
      className: "col-span-1 aspect-[4/3] min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
    },
  ];

  return (
    <section id="gallery" className="relative w-full py-6 sm:py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xl sm:max-w-2xl mx-auto font-light">
            A collection of memorable moments and creative captures
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              {...photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;