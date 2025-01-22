import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import icons for ratings
import styles from "./Card.module.css"; // Import the CSS module

const Card = ({
  title,
  description,
  imageUrl,
  imageUrl2,
  imageUrl3,
  rating,
  status,
  actionLabel,
  extraClasses,
  onClick, // Accept the onClick prop
}) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

    return (
      <div className={styles.rating}>
        {/* Render full stars */}
        {Array.from({ length: fullStars }, (_, index) => (
          <FaStar key={index} className="text-yellow-400 w-4 h-4" />
        ))}
        {/* Render half star */}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 w-4 h-4" />}
      </div>
    );
  };

  // Function to split title into individual letters
  const renderTitleLetters = (title) =>
    title.split("").map((char, index) => (
      <span
        key={index}
        className={`${styles.titleLetter} group-hover:opacity-100 group-hover:translate-y-0`}
        style={{ transitionDelay: `${index * 100}ms` }} // Staggered delay per letter
      >
        {char}
      </span>
    ));

  return (
    <div
      className={`${styles.group} ${extraClasses}`}
      onClick={onClick} // Apply the onClick prop to the container element
    >
      {/* Initial Background Image */}
      <div
        className={styles.bgCover}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Second Image */}
      <div
        className={`${styles.bgCover} ${styles.bgCoverSecond}`}
        style={{ backgroundImage: `url(${imageUrl2})` }}
      ></div>

      {/* Third Image */}
      <div
        className={`${styles.bgCover} ${styles.bgCoverThird}`}
        style={{ backgroundImage: `url(${imageUrl3})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className={styles.gradientOverlay}></div>

      {/* Title (Staggered Letter Animation) */}
      <div className={styles.title}>
        {renderTitleLetters(title)}
      </div>

      {/* Hover Content */}
      <div className={styles.hoverContent}>
        {/* Status Badge */}
        {status && (
          <span className={styles.statusBadge}>
            {status}
          </span>
        )}

        {/* Rating */}
        {rating && renderStars(parseFloat(rating))}

        {/* Description */}
        <p className={styles.description}>{description}</p>

        {/* Action Button */}
        <button className={styles.actionButton}>
          {actionLabel || "Learn More"}
        </button>
      </div>
    </div>
  );
};

export default Card;