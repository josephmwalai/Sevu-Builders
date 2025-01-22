// Import React and required icons from the respective libraries
import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md'; // Email and Phone icons
import { FaLocationDot } from "react-icons/fa6"; // Location icon
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa'; // Social media icons

const TopBar = () => {
  return (
    <header className="bg-gray-800 text-white py-2"> {/* Header with dark background and padding */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4"> 
        {/* Responsive container: column layout on small screens, row layout on medium+ screens */}
        
        {/* Social Links Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <p className="flex items-center space-x-2">
            <FaFacebook className="text-blue-500" /> {/* Facebook icon */}
            <a href="https://www.facebook.com/Sevu_Builders" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-blue-400">
              Sevu_Builders
            </a>
          </p>
          <p className="flex items-center space-x-2">
            <FaInstagram className="text-pink-500" /> {/* Instagram icon */}
            <a href="https://www.instagram.com/Sevu_builders" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-pink-400">
              Sevu_Builders
            </a>
          </p>
          <p className="flex items-center space-x-2">
            <FaTiktok className="text-gray-500" /> {/* TikTok icon */}
            <a href="https://www.tiktok.com/Sevu_builders" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-gray-300">
              Sevu_Builders
            </a>
          </p>
        </div>

        {/* Contact Info Section */}

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <p className="flex items-center space-x-2">
            <FaLocationDot className="text-red-500" /> 
            
            {/* Location icon */}

            <span>Nairobi, Kenya</span>
          </p>
          <p className="flex items-center space-x-2">
            <MdEmail className="text-yellow-500" />
            
             {/* Email icon */}

            <a href="mailto:info@sevu.co.ke" className="hover:text-yellow-300">
              info@sevu.co.ke
            </a>
          </p>
          <p className="flex items-center space-x-2">
            <MdPhone className="text-green-500" /> 
            
            {/* Phone icon */}

            <a href="tel:+254715554980" className="hover:text-green-300">
              +254 720 103469
            </a>
            {/* <MdPhone className="text-green-500" />  */}
            
            {/* Phone icon */}
            
            {/* <a href="tel:+254700159956" className="hover:text-green-300 ml-2">
              +254 700 159956
            </a> */}
          </p>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
