import "../Product/Product.scss";
import { useState } from "react";
import Image1 from "../../assets/featured-product-1.jpg";
import Image2 from "../../assets/featured-product-2.jpg";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSizeSelection = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSelectedQuantity(newValue);
  };

  return (
    <div className="product-page">
      <div className="first-section">
        <div className="left">
          <div className="images">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="product-description">
            <h1>Title</h1>
            <p className="product-price">$149.00</p>
            <p className="product-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              aspernatur praesentium quis aliquam provident! A, dignissimos
              reprehenderit adipisci distinctio sint suscipit sit, alias vel
              enim ab architecto pariatur, laudantium nemo?
            </p>
            <div className="size-selection">
              <label htmlFor="size">Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={handleSizeSelection}
              >
                <option value="" disabled>
                  Select size
                </option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="quantity-selection">
              <label htmlFor="quantity">Quantity:</label>
              <input
                aria-label="Quantity"
                size="4"
                max="9999"
                min="1"
                value={selectedQuantity}
                type="number"
                step="1"
                className="quantity-input"
                onChange={handleQuantityChange}
              />
            </div>
            <div className="cart-btn">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="left">
          <div className="product-description">
            <h1>Sizing & fit</h1>
            <p className="product-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos maiores dolores corrupti, ea sit nulla asperiores
              distinctio voluptate ex, repellat optio. Dolore sunt fugiat totam.
              Iusto beatae dolor architecto explicabo.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src={Image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
