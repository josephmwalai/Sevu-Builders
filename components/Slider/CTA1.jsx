"use client";

import React from "react";
import Slider from "./Slider";
import Maps from "./Maps";
import styles from "./CTA1.module.css";

const CTA1 = () => {
  return (
    <div className={styles["cta-container"]}>
      <div className={styles["left-section"]}>
        <Slider />
      </div>
      <div className={styles["right-section"]}>
        <Maps />
      </div>
    </div>
  );
};

export default CTA1;
