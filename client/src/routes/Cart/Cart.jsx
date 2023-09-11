import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../Cart/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.selectedQuantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {products?.map((item, index) => (
        <div className="top" key={`${item.id}-${item.selectedSize}-${index}`}>
          <div className="image">
            <img src={item.img} alt="" />
          </div>
          <div className="details">
            <p>{item.title}</p>
            <span>Size: {item.selectedSize}</span>
          </div>
          <div className="quantity">
            <button
              className="decrease"
              onClick={() =>
                dispatch(
                  decreaseQuantity({
                    id: item.id,
                    selectedSize: item.selectedSize,
                  })
                )
              }
            >
              <RemoveIcon />
            </button>
            <span>{item.selectedQuantity}</span>

            <button
              className="increase"
              onClick={() =>
                dispatch(
                  increaseQuantity({
                    id: item.id,
                    selectedSize: item.selectedSize,
                  })
                )
              }
            >
              <AddIcon />
            </button>
          </div>
          <div className="price">${item.price}.00</div>
          <button
            className="remove-btn"
            onClick={() =>
              dispatch(
                removeItem({ id: item.id, selectedSize: item.selectedSize })
              )
            }
          >
            <ClearIcon />
          </button>
        </div>
      ))}
      <hr />
      <div className="bottom">
        <div className="cart-summary">
          <div className="total">
            <p>Subtotal</p>
            <p className="subtotal">${totalPrice()}</p>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
