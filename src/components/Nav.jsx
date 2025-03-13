import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import Logo from "../images/logo.png";
import "../Style/Nav.css";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    if (location.pathname === "/") {
      // Scroll behavior only for home page
      const handleScroll = () => setScrolling(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Force scrolled state for other pages
      setScrolling(true);
    }
  }, [location.pathname]); // Re-run effect when path changes

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  // Determine navbar class based on location
  const navClass = location.pathname !== "/" ? "scrolled" : scrolling ? "scrolled" : "transparent";

  return (
    <nav className={`navbar navbar-expand-lg ${navClass}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" width="80" height="80" className="logo" />
        </Link>

        <button 
          className={`navbar-toggler custom-toggler ${navbarOpen ? 'opened' : ''}`} 
          type="button" 
          onClick={toggleNavbar}
          aria-expanded={navbarOpen ? 'true' : 'false'}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
            
            {/* Administration Dropdown */}
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Administration
              </Link>
              <ul className={`dropdown-menu ${navClass}`}>
                <li><Link className="dropdown-item" to="/ourparish">Parish</Link></li>
                <li><Link className="dropdown-item" to="/anbiyangal">Anbyangal</Link></li>
              </ul>
            </li>

            {/* Gallery Dropdown */}
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Gallery
              </Link>
              <ul className={`dropdown-menu ${navClass}`}>
                <li><Link className="dropdown-item" to="/images-category">Images</Link></li>
                <li><Link className="dropdown-item" to="/videos">Videos</Link></li>

              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;