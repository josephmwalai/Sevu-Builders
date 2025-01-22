// components/Header/SearchBar.tsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="flex items-center divide-x">
        <button className="px-4 font-medium">Anywhere</button>
        <button className="px-4 font-medium">Any week</button>
        <button className="pl-4 pr-2 text-gray-600">Add guests</button>
      </div>
      <div className="bg-[#FF385C] p-2 rounded-full text-white">
        <Search size={16} />
      </div>
    </div>
  );
};

export default SearchBar;
