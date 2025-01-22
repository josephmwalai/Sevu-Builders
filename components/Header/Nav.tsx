import React from 'react';

const SearchSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
      <div className="flex-1 mr-4">
        <label htmlFor="searchDestinations" className="block text-gray-700 font-bold mb-2">
          Where
        </label>
        <input
          id="searchDestinations"
          type="text"
          placeholder="Search destinations"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        />
      </div>
      <div className="flex-1 mr-4">
        <label htmlFor="checkInDate" className="block text-gray-700 font-bold mb-2">
          Check in
        </label>
        <input
          id="checkInDate"
          type="date"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        />
      </div>
      <div className="flex-1 mr-4">
        <label htmlFor="checkOutDate" className="block text-gray-700 font-bold mb-2">
          Check out
        </label>
        <input
          id="checkOutDate"
          type="date"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="addGuests" className="block text-gray-700 font-bold mb-2">
          Who
        </label>
        <input
          id="addGuests"
          type="text"
          placeholder="Add guests"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        />
      </div>
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchSection;