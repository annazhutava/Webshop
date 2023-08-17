import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          <div className="item">
            <Link to="/products">Shop</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="item">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="navbar-right">
          <div className="cartIcon">
            <ShoppingCartOutlinedIcon />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
