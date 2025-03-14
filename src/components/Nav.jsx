import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import "../Style/Nav.css";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => setScrolling(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolling(true);
    }
  }, [location.pathname]);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const navClass = location.pathname !== "/" ? "scrolled" : scrolling ? "scrolled" : "transparent";

  return (
    <nav className={`navbar1 ${navClass}`}>
      <div className="container-fluid">
        <Link className="navbar1-brand" to="/">
          <img src={Logo} alt="Logo" className="logo1" />
        </Link>

        <button 
          className={`navbar1-toggler ${navbarOpen ? 'opened' : ''}`} 
          type="button" 
          onClick={toggleNavbar}
        >
          <span className="navbar1-toggler-icon"></span>
        </button>

        <div className={`navbar1-collapse ${navbarOpen ? 'show' : ''}`}>
          <ul className="navbar-nav2">
            <li className="nav-item"><Link className="nav-link2" to="/">Home</Link></li>
            
            <li className="nav-item dropdown">
              <Link className="nav-link2 dropdown-toggle" to="#" role="button">
                Administration
              </Link>
              <ul className="dropdown-menu3">
                <li><Link className="dropdown-item4" to="/ourparish">Parish</Link></li>
                <li><Link className="dropdown-item4" to="/anbiyangal">Anbyangal</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link2 dropdown-toggle" to="#" role="button">
                Gallery
              </Link>
              <ul className="dropdown-menu3">
                <li><Link className="dropdown-item4" to="/images-category">Images</Link></li>
                <li><Link className="dropdown-item4" to="/videos">Videos</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link2" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;