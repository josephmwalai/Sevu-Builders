import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  const [bedrooms, setBedrooms] = useState(1);

  const calculateMonths = (bedrooms) => {
    const baseMonths = 6; // Example: 1 bedroom takes 6 months
    const increment = 1; // Example: Each additional bedroom adds 1 month
    return baseMonths + (bedrooms - 1) * increment;
  };

  const months = calculateMonths(bedrooms);

  return (
    <section className={styles["house-build-slider"]}>
      <p>
        Your Dream Home will take approximately <strong>{months} months</strong> with Sevu Builders.
      </p>
      <div className={styles["slider-container"]}>
        <label htmlFor="bedrooms-slider">Number of Bedrooms: {bedrooms}</label>
        <input
          type="range"
          id="bedrooms-slider"
          min="1"
          max="6"
          value={bedrooms}
          onChange={(e) => setBedrooms(Number(e.target.value))}
          className={styles.slider}
        />
      </div>
    </section>
  );
};

export default Slider;
