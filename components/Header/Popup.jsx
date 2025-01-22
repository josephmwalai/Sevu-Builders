import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ onClose }) => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>Sign Up</li>
        <li className={styles.menuItem}>Login</li>
        <li className={styles.menuItem}>FAQs</li>
        <li className={styles.menuItem}>Project Details</li>
        <li className={styles.menuItem}>Help</li>
        <li className={styles.menuItem}>Work with Us</li>
      </ul>
    </div>
  );
};

export default Popup;
