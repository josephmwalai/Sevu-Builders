"use client";


import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const CTABuild = () => {
  // Map container style
  const mapContainerStyle = {
    width: "100%",
    height: "400px", // Adjust height as needed
    borderRadius: "0.5rem",
  };

  // Default center for Nairobi, Kenya
  const center = {
    lat: -1.286389, // Latitude
    lng: 36.817223, // Longitude
  };

  return (
    <div className="w-full min-h-screen bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 flex flex-col">
          <h1 className="text-4xl font-bold text-black mb-8">
          Build Your Future: Time & Cost Projection 
          </h1>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search location..."
              className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Section - Google Maps */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-lg">
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={11}
            >
              {/* Marker at Nairobi */}
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default CTABuild;
