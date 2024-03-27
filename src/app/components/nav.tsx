"use client"

import React from 'react';
import Link from 'next/link';

const Nav = () => {

  return (
    <nav className="bg-gray-800 text-white h-full flex flex-col">
      <h1 className="header-title">Opal</h1>
      <Link href="/" className="hover:text-gray-300 transition-colors duration-200">My Dashboard</Link>
      <Link href="/contracts" className="hover:text-gray-300 transition-colors duration-200">My Contracts</Link>
      <Link href="/generator" className="hover:text-gray-300 transition-colors duration-200">Generator</Link>
      <Link href="/account" className="hover:text-gray-300 transition-colors duration-200">Account</Link>
      <Link href="/contact" className="hover:text-gray-300 transition-colors duration-200">Contact</Link>
    </nav>
  );
};

export default Nav;
