// components/Header/Logo.tsx
import React from 'react';
import styles from './Logo.module.css';  // Import CSS module for scoped styles

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img
        src="/images/logo.png"  // Path to the logo image in the public folder
        alt="Sevu Builders Logo"  // Descriptive alt text for accessibility
        className={styles.logo}  // Apply CSS class for spacing
      />
      <span className={styles.text}></span>
    </div>
  );
};

export default Logo;
