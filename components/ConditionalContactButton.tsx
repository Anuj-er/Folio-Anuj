'use client';

import React from 'react';
import { ContactButton } from './Navbar/ContactButton';

export const ConditionalContactButton = () => {
  return (
    <>
      {/* Mobile/Tablet version - Bottom Center */}
      <div className="fixed bottom-4 left-0 right-0 mx-auto w-fit lg:hidden z-50">
        <ContactButton className="text-xs sm:text-sm py-1.5 px-4 sm:px-6" />
      </div>
      
      {/* Desktop version - Top Right */}
      <div className="hidden lg:block fixed top-6 right-6 z-50">
        <ContactButton className="text-base py-1.5 px-6" />
      </div>
    </>
  );
}; 