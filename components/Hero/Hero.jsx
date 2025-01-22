"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./Hero.module.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { FaHammer, FaBuilding } from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineFormatPaint, MdOutlineHomeRepairService, MdConstruction } from "react-icons/md";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      title: "Building and Construction",
      description: "Expert solutions for all your building and construction needs.",
      imageUrl: "/img/building.jpg",
      imageUrl2: "/img/building2.jpg",
      imageUrl3: "/img/building3.jpg",
      rating: 4.5,
      status: "Expert Craftsmanship",
      actionLabel: "Explore Projects",
      heroTitle: "Building the Future, One Project at a Time",
      heroSubTitle:
        "Transform your vision into reality with our expert building solutions. From foundations to finishes, we bring innovation and precision to every project. Discover how we can build your dream today!",
      backgroundImage: "/img/buildingb.jpg",
    },
    {
      title: "Interior and Exterior Design",
      description: "Exceptional painting and tiling services to enhance your property.",
      imageUrl: "/img/interior.jpg",
      imageUrl2: "/img/interior2.jpg",
      imageUrl3: "/img/interior3.jpg",
      rating: 4.5,
      status: "Aesthetic Excellence",
      actionLabel: "Explore Projects",
      heroTitle: "Creating Timeless Spaces Inside and Out",
      heroSubTitle:
        "Reimagine your spaces with designs that blend style, functionality, and personality. Let us craft interiors and exteriors that truly inspire. Explore the possibilities now!",
      backgroundImage: "/img/designd.jpg",
    },
    {
      title: "Painting and Tiling",
      description: "Reliable renovations and repairs to restore and improve your spaces.",
      imageUrl: "/img/painting.jpg",
      imageUrl2: "/img/painting2.jpg",
      imageUrl3: "/img/painting3.jpg",
      rating: 4.5,
      status: "Lasting Impressions",
      actionLabel: "Explore Projects",
      heroTitle: "Colors and Patterns That Define Your Style",
      heroSubTitle:
        "Add color and texture to your world with flawless painting and tiling solutions. We turn walls and floors into stunning works of art. Click to see the difference!",
      backgroundImage: "/img/paintp.jpg",
    },
    {
      title: "Renovations and Repairs",
      description: "Reinventing Spaces, Restoring Functionality.",
      imageUrl: "/img/renovations.jpg",
      imageUrl2: "/img/renovations2.jpg",
      imageUrl3: "/img/renovations3.jpg",
      rating: 4.5,
      status: "Renewed Spaces",
      actionLabel: "Explore Projects",
      heroTitle: "Transforming Old Spaces into New Beginnings",
      heroSubTitle:
        "Breathe new life into your spaces with our renovation and repair services. From refreshing looks to fixing what’s broken, we make it all feel brand new. Learn more today!",
      backgroundImage: "/img/repairsr.jpg",
    },
    {
      title: "Minor Civil Works",
      description: "Efficient and cost-effective solutions for minor civil works.",
      imageUrl: "/img/civilworks.jpg",
      imageUrl2: "/img/civilworks2.jpg",
      imageUrl3: "/img/civilworks3.jpg",
      rating: 4.5,
      status: "Reliable Foundations",
      actionLabel: "Explore Projects",
      heroTitle: "Precision in Every Detail, No Matter the Scale",
      heroSubTitle:
        "Small projects, big impact! Our civil works expertise ensures quality and efficiency in every task, no matter how simple. Discover how we can help your next project.",
      backgroundImage: "/img/civilc.jpg",
    },
  ];

  const serviceIcons = [
    FaBuilding,
    MdOutlineDesignServices,
    MdOutlineFormatPaint,
    MdOutlineHomeRepairService,
    MdConstruction,
  ];

  // Automatically switch active cards every 11 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsTransitioning(false);
      }, 600); // Smooth transition delay
    }, 11000);

    return () => clearInterval(interval);
  }, [services.length]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 600); // Smooth transition delay
  };

  const handleCardClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 600); // Smooth transition delay
  };

  const { heroTitle, heroSubTitle, backgroundImage } = services[activeIndex];
  const IconComponent = serviceIcons[activeIndex];

  return (
    <div
      className={`${styles.hero} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background */}
      <div className={styles.heroBackground} />
      <div className={styles.heroOverlay} />

      {/* Dynamic Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{heroTitle}</h1>
        <p className={styles.heroSubtitle}>{heroSubTitle}</p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <ButtonPrimary icon={IconComponent}>Explore Services</ButtonPrimary>
          <ButtonSecondary>Contact Us</ButtonSecondary>
        </div>
      </div>

      {/* Carousel */}
      <div className={styles.carousel}>
        {services.map((service, index) => (
          <Card
            key={index}
            {...service}
            extraClasses={`${styles.carouselCard} ${
              index === activeIndex ? styles.activeCard : styles.inactiveCard
            }`}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {services.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;