import React from 'react';
import { Item } from './Item';

const Navbar: React.FC = () => {
  return (
    <nav className="-mb-14 flex items-center justify-center pt-8 text-[#e6e6e6]">
      <div className="z-10 w-fit rounded-full border border-[#161616] bg-[#3b3b3b] bg-opacity-50 shadow-lg backdrop-blur-xl">
        <div className="flex flex-row items-center space-x-12 px-5 py-4">
          <Item href={'/'}>Home</Item>
          <Item href={'/#about'}>About</Item>
          <Item href={'/#prev-work'}>Previous Work</Item>
          <Item href={'/#prev-work'}>Languages Working</Item>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
