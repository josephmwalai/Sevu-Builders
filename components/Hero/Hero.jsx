"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./Hero.module.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineFormatPaint, MdOutlineHomeRepairService, MdConstruction } from "react-icons/md";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      title: "Building and Construction",
      description: "Expert solutions for all your building and construction needs.",
      imageUrl: "/img/building.jpg",
      heroTitle: "Building the Future, One Project at a Time",
      heroSubTitle:
        "Transform your vision into reality with our expert building solutions. Discover how we can build your dream today!",
      backgroundImage: "/img/buildingb.jpg",
    },
    {
      title: "Interior and Exterior Design",
      description: "Exceptional design services to enhance your property.",
      imageUrl: "/img/interior.jpg",
      heroTitle: "Creating Timeless Spaces Inside and Out",
      heroSubTitle: "Reimagine your spaces with designs that truly inspire.",
      backgroundImage: "/img/designd.jpg",
    },
    {
      title: "Painting and Tiling",
      description: "Reliable services to restore and improve your spaces.",
      imageUrl: "/img/painting.jpg",
      heroTitle: "Colors and Patterns That Define Your Style",
      heroSubTitle:
        "Add color and texture to your world with flawless painting solutions.",
      backgroundImage: "/img/paintp.jpg",
    },
    {
      title: "Renovations and Repairs",
      description: "Reinventing Spaces, Restoring Functionality.",
      imageUrl: "/img/renovations.jpg",
      heroTitle: "Transforming Old Spaces into New Beginnings",
      heroSubTitle: "Breathe new life into your spaces with expert renovations.",
      backgroundImage: "/img/repairsr.jpg",
    },
    {
      title: "Minor Civil Works",
      description: "Efficient and cost-effective solutions for civil works.",
      imageUrl: "/img/civilworks.jpg",
      heroTitle: "Precision in Every Detail, No Matter the Scale",
      heroSubTitle: "Small projects, big impact! Discover how we can help.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsTransitioning(false);
      }, 600);
    }, 11000);

    return () => clearInterval(interval);
  }, [services.length]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 600);
  };

  const { heroTitle, heroSubTitle, backgroundImage } = services[activeIndex];
  const IconComponent = serviceIcons[activeIndex];

  return (
    <div
      className={`${styles.hero} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{heroTitle}</h1>
        <p className={styles.heroSubtitle}>{heroSubTitle}</p>
        <div className="flex space-x-4">
          <ButtonPrimary icon={IconComponent}>Explore Services</ButtonPrimary>
          <ButtonSecondary>Contact Us</ButtonSecondary>
        </div>
      </div>

      <div className={styles.carousel}>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            extraClasses={`${styles.carouselCard} ${
              index === activeIndex ? styles.activeCard : styles.inactiveCard
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

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
