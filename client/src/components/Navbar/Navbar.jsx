import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
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
        <div className="navbar-center">
          <div className="item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </div>
        </div>
        <div className="navbar-right">
          <div className="cart-icon">
            <ShoppingCartOutlinedIcon fontSize="small" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
