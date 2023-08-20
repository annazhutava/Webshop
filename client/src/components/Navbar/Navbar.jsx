import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          <div className="item">
            <Link className="navbar-link" to="/products">
              Shop
            </Link>
          </div>
          <div className="item">
            <Link className="navbar-link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="navbar-link" to="/">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="item">
            <Link className="navbar-link" to="/">
              Home
            </Link>
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
