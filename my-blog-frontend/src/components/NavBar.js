import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="border-b-4 border-green-700 w-full text-center fixed top-0 bg-green-700 font-bold text-lg text-white">
      <ul>
        <li className="inline-block pt-4 pb-4">
          <Link to='/' className="pl-6 pr-8">Home</Link>
          <Link to='/about' className="pl-6 pr-8">About</Link>
          <Link to='/articles-list' className="pl-6 pr-8">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;