import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../Navbar/Navbar.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  // Add state to control the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          {isMobileMenuOpen === false ? (
            <button className="mobile-hamburger-btn" onClick={toggleMobileMenu}>
              <MenuIcon />
            </button>
          ) : (
            <button className="mobile-close-btn" onClick={toggleMobileMenu}>
              <ClearIcon />
            </button>
          )}
          <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/products/all"
                onClick={toggleMobileMenu}
              >
                Shop
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/about"
                onClick={toggleMobileMenu}
              >
                About
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/contact"
                onClick={toggleMobileMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div className="desktop-nav">
            <div className="item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/products/all"
              >
                Shop
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/about"
              >
                About
              </NavLink>
            </div>
            <div className="item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </div>
        </div>
        <div className="navbar-right">
          <NavLink className="cart-icon" to="/cart">
            <ShoppingCartOutlinedIcon fontSize="small" />
            <span>{products.length}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
