"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa"; // React icon for the three pancakes menu
import { FaUserAlt } from "react-icons/fa"; // React icon for the user
import styles from "./UserSection.module.css";

const UserSection = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const containerRef = useRef(null);

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsPopupVisible(false); // Close the popup if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.container} onClick={togglePopup}>
        <div className={styles.menuIcon}>
          <FaBars className={styles.menuIconSize} />
        </div>
        <div className={styles.bar}></div>
        <div className={styles.circle}>
          <FaUserAlt className={styles.iconSize} />
        </div>
      </div>
      {isPopupVisible && (
        <div className={styles.popup}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Sign Up</li>
            <li className={styles.menuItem}>Login</li>
            <li className={styles.menuItem}>FAQs</li>
            <li className={styles.menuItem}>Help</li>
            <li className={styles.menuItem}>Work at Sevu</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserSection;
