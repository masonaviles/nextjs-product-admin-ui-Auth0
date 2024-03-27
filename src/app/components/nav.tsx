import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white h-full">
      <div className="px-5 py-4">
        <div className="font-bold text-xl mb-4">Opal</div>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors duration-200">Dashboard</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">Contracts</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300 transition-colors duration-200">Account</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition-colors duration-200">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;