/** @format */

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="flex items-center gap-4 w-full px-[20px] py-[20px]">
      <Link to="/" className="text-[red] cursor-pointer">
        Cylidrical
      </Link>
      <Link to="/threejs" className="text-[red] cursor-pointer">
        Box
      </Link>
      <Link to="/mixer" className="text-[red] cursor-pointer">
        Sphere
      </Link>
    </header>
  );
};

export default Header;
