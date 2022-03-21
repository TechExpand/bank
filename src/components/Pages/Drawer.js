import React, { useState, useEffect } from "react";
import "../assets/css/drawer.css";
import logo from "../assets/images/logo/logo.png";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            <Link to={"/"}>
            <a href="/">Home</a>
            </Link>
          
            <Link to={"/about"}>
            <a href="/">About</a>
            </Link>


            <Link to={"/blog"}>
            <a href="/">Blog</a>
            </Link>


            <Link to={"/contact"}>
            <a href="/">Contact</a>
            </Link>

            <Link to={"/donate"}>
            <button>Donate</button>
            </Link>
          
          
         
          
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
       ☰
      </button>
    </header>
  );
}