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
    "group relative overflow-hidden rounded-2xl",
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
    // {
    //   src: "./Gallery/1.jpg",
    //   alt: "Anuj Himself",
    //   className: "col-span-1 row-span-1"
    // },
    {
      src: "./Gallery/2.jpg",
      alt: "with Stephen Simon",
      className: "col-span-1 row-span-2"
    },
    {
      src: "./Gallery/3.jpg",
      alt: "image",
      className: "col-span-1 row-span-1"
    },
    {
      src: "./Gallery/4.jpg",
      alt: "Workspace",
      className: "col-span-1 row-span-1"
    },
    {
      src: "./Gallery/5.jpg",
      alt: "Underwater",
      className: "col-span-1 row-span-2"
    },
    {
      src: "./Gallery/6.jpg",
      alt: "Night lights",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section id="gallery" className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header section matching testimonials style */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            A collection of memorable moments and creative captures
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden",
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

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black opacity-0 lg:opacity-100" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black opacity-0 lg:opacity-100" />
      </div>
    </section>
  );
};

export default Gallery;