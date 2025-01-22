// components/Header.jsx
import React from "react";
import CtaButton from "./CtaButton";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";
import UserSection from "./UserSection";
import styles from "./Header.module.css";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <TopBar />

      <div className={styles.maino}>
      <Logo />
      <NavMenu />
      <CtaButton />
      <UserSection />
      </div>
      
      </header>
  );
};

export default Header;
