import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./Maps.module.css";


const mapContainerStyle = {
  width: "100%",
  height: "300px",
};


const center = {
  lat: -37.816279, 
  lng: 144.953735, 
};

const Maps = () => {
  return (
    <section className={styles["maps-container"]}>
      <h3>Our Locations</h3>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Replace with your API key */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

export default Maps;
