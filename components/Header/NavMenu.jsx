"use client";

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const NavMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="flex items-center justify-between bg-white rounded-full px-4 py-2 shadow-md max-w-[900px] mx-auto">
      {/* Navigation Links */}
      <div className="flex items-center space-x-4 flex-wrap">
        {/* About Us */}
        <div className="flex flex-col cursor-pointer px-3 py-1 rounded-md text-left transition-all duration-300 ease-in-out flex-shrink-0 hover:bg-gray-100 hover:translate-y-[-2px] hover:shadow-sm">
          <Link href="/about">
            <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-red-600">
              About Us
            </span>
          </Link>
          <span className="text-xs text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-700">
            About Sevu Builders
          </span>
        </div>
        {/* Services */}
        <div className="flex flex-col cursor-pointer px-3 py-1 rounded-md text-left transition-all duration-300 ease-in-out flex-shrink-0 hover:bg-gray-100 hover:translate-y-[-2px] hover:shadow-sm">
          <Link href="/services">
            <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-red-600">
              Services
            </span>
          </Link>
          <span className="text-xs text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-700">
            Checkout Our Services
          </span>
        </div>
        {/* Contact Us */}
        <div className="flex flex-col cursor-pointer px-3 py-1 rounded-md text-left transition-all duration-300 ease-in-out flex-shrink-0 hover:bg-gray-100 hover:translate-y-[-2px] hover:shadow-sm">
          <Link href="/contact">
            <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-red-600">
              Contact Us
            </span>
          </Link>
          <span className="text-xs text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-700">
            Reach Us Today
          </span>
        </div>
        {/* Projects */}
        <div className="flex flex-col cursor-pointer px-3 py-1 rounded-md text-left transition-all duration-300 ease-in-out flex-shrink-0 hover:bg-gray-100 hover:translate-y-[-2px] hover:shadow-sm">
          <Link href="/projects">
            <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-red-600">
              Projects
            </span>
          </Link>
          <span className="text-xs text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-700">
            Your Project Companion
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
