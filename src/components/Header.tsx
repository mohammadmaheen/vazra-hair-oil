import React from 'react';
import { TopBanner } from './TopBanner';
import { Navbar } from './Navbar';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full z-40 bg-[#fafbf6]">
      <TopBanner />
      <Navbar />
    </header>
  );
};
