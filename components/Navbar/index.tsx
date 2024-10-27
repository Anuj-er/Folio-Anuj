import React from 'react';
import { Item } from './Item';

const Navbar: React.FC = () => {
  return (
    <nav className="-mb-14 flex items-center justify-center pt-3 xs:pt-4 sm:pt-8 text-[#e6e6e6]">
      <div className="z-10 w-fit rounded-full border border-[#161616] bg-[#3b3b3b] bg-opacity-50 shadow-lg backdrop-blur-xl overflow-x-auto max-w-[95vw] sm:max-w-none scrollbar-hide">
        <div className="flex flex-row items-center px-2 xs:px-3 sm:px-5 py-2 xs:py-2.5 sm:py-4 min-w-max">
          {/* Using a flex container with improved responsive spacing */}
          <div className="flex space-x-2 xs:space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-12">
            <Item href={'/'}>
              <span className="text-xs xs:text-sm sm:text-base whitespace-nowrap">Home</span>
            </Item>
            <Item href={'/#about'}>
              <span className="text-xs xs:text-sm sm:text-base whitespace-nowrap">About</span>
            </Item>
            <Item href={'/#journey'}>
              <span className="text-xs xs:text-sm sm:text-base whitespace-nowrap">Journey</span>
            </Item>
            <Item href={'/#Projects'}>
              <span className="text-xs xs:text-sm sm:text-base whitespace-nowrap">Projects</span>
            </Item>
            <Item href={'/#gallery'}>
              <span className="text-xs xs:text-sm sm:text-base whitespace-nowrap">Gallery</span>
            </Item>
            <Item href={'/#contact'}>
              <span className="text-xs xs:text-sm sm:text-base whitespace-nowrap">Contact</span>
            </Item>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;