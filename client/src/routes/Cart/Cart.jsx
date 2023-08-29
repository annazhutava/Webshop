import Product1 from "../../assets/featured-product-1.jpg";
import Product2 from "../../assets/featured-product-2.jpg";
import Product3 from "../../assets/featured-product-3.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../Cart/Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: Product1,
      title: "Hat",
      category: "accessories",
      price: 200,
      size: "S",
    },
    {
      id: 2,
      img: Product2,
      title: "Top",
      category: "tops",
      price: 500,
      size: "M",
    },
    {
      id: 3,
      img: Product3,
      title: "Top",
      category: "tops",
      price: 450,
      size: "S",
    },
  ];

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {data.map((item) => (
        <div className="top" key={item.id}>
          <div className="image">
            <img src={item.img} alt="" />
          </div>
          <div className="details">
            <p>{item.title}</p>
            <span>Size: {item.size}</span>
          </div>
          <div className="quantity">
            <button className="decrease">
              <RemoveIcon />
            </button>
            <span>1</span>

            <button className="increase">
              <AddIcon />
            </button>
          </div>
          <div className="price">${item.price}.00</div>
          <button className="remove-btn">
            <ClearIcon />
          </button>
        </div>
      ))}
      <hr />
      <div className="bottom">
        <div className="cart-summary">
          <div className="total">
            <p>Subtotal</p>
            <p className="subtotal">$200.00</p>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
