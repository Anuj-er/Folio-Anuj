'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Timeline } from '@/components/ui/timeline';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { getExperiences } from '@/lib/actions';

export default function PreviousWork() {
  const [showAll, setShowAll] = useState(false);
  const [allData, setAllData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);

  // Fetch experiences on mount
  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getExperiences();
      if (data && data.length > 0) {
        // Transform DB data to Timeline format
        const formattedData = data.map((exp: any) => ({
          title: exp.title,
          content: (
            <div>
              <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
                {exp.description}
                {exp.links && exp.links.length > 0 && (
                  <>
                    <br /><br />
                    Check it out{' '}
                    {exp.links.map((link: any, i: number) => (
                      <span key={i}>
                        <Link href={link.url} className="text-gray-300 no-underline" target="_blank" rel="noopener noreferrer">
                          {link.text}
                        </Link>
                        {i < exp.links.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </>
                )}
              </p>
              <div className={`grid ${exp.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mt-4`}>
                {exp.images.map((img: string, i: number) => (
                  <div key={i} className={`relative h-20 md:h-44 ${exp.images.length > 1 ? 'lg:h-60' : 'lg:h-[400px]'}`}>
                    <Image
                      src={img}
                      alt={`${exp.title} image ${i + 1}`}
                      fill
                      className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        }));
        setAllData(formattedData);
        setDisplayData(formattedData.slice(0, 4));
      }
    };
    fetchExperiences();
  }, []);

  // Update display data when showAll changes
  useEffect(() => {
    // Give the timeline a moment to complete any ongoing animations
    // before changing the data
    const timer = setTimeout(() => {
      if (allData.length > 0) {
        setDisplayData(showAll ? allData : allData.slice(0, 4));
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [showAll, allData]);

  const handleToggleView = () => {
    setShowAll(!showAll);

    // Scroll to the button position when collapsing
    if (showAll) {
      // When collapsing (going from show all to show less)
      const element = document.getElementById('view-more-button');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  };

  if (allData.length === 0) return null;

  return (
    <div className="relative w-full bg-black" id="prev-work">
      <Timeline data={displayData} />

      {/* View More/Less Button */}
      <div
        id="view-more-button"
        className="flex justify-center pb-20"
      >
        <button
          onClick={handleToggleView}
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
        >
          {showAll ? (
            <>
              View Less
              <FaChevronUp className="text-xs transition-transform duration-300 group-hover:-translate-y-1" />
            </>
          ) : (
            <>
              View More
              <FaChevronDown className="text-xs transition-transform duration-300 group-hover:translate-y-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}