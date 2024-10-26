import React from 'react';
import { Item } from './Item';

const Navbar: React.FC = () => {
  return (
    <nav className="-mb-14 flex items-center justify-center pt-4 sm:pt-8 text-[#e6e6e6]">
      <div className="z-10 w-fit rounded-full border border-[#161616] bg-[#3b3b3b] bg-opacity-50 shadow-lg backdrop-blur-xl overflow-x-auto max-w-[90vw] sm:max-w-none">
        <div className="flex flex-row items-center px-3 sm:px-5 py-2.5 sm:py-4 min-w-max">
          {/* Using a flex container with responsive spacing */}
          <div className="flex space-x-4 xs:space-x-6 sm:space-x-8 md:space-x-12">
            <Item href={'/'}>
              <span className="text-sm sm:text-base">Home</span>
            </Item>
            <Item href={'/#about'}>
              <span className="text-sm sm:text-base">About</span>
            </Item>
            <Item href={'/#journey'}>
              <span className="text-sm sm:text-base">Journey</span>
            </Item>
            <Item href={'/#Projects'}>
              <span className="text-sm sm:text-base">Projects</span>
            </Item>
            <Item href={'/#gallery'}>
              <span className="text-sm sm:text-base">Gallery</span>
            </Item>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;