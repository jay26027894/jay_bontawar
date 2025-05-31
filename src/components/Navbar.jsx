// components/Navbar.jsx
import { useState } from 'react';
import { FcHome } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { FcBusinessContact } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";

import Dock from './Dock';

export default function Navbar() {
  return (
    <>
      {/* Top Bar Title Only (optional) */}
      <nav className=" bg-gray-900 bg-opacity-70 backdrop-blur-md z-20 shadow justify-center">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center items-center">
          <div className="text-pink-400 font-bold text-lg  ">Greetings!</div>
        </div>
      </nav>

      {/* Bottom Dock Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 ">
        <Dock
          items={[
            { icon: <FcHome  size={25} />, label: 'Home', onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
            { icon: <GrProjects  size={18} color='red' />, label: 'Projects', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
            { icon: <FcAbout size={23} />, label: 'About', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
            { icon: <FcBusinessContact size={25} />, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
          ]}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </>
  );
}
