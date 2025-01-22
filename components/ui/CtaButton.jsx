import React from "react";
import styles from "./CtaButton.module.css";

const CtaButton = ({ onClick }) => {
  return (
    <button
      className={`btn btn-color-1 ${styles.ctaButton}`}
      onClick={() => (window.location.href = "./#Home")}
    >
      Get Started
    </button>
  );
};

export default CtaButton;
