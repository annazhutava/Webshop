import "../Product/Product.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const productId = useParams().id;
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  console.log(data);

  const handleSizeSelection = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSelectedQuantity(newValue);
  };

  return (
    <div className="product-page">
      {loading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong..."
      ) : (
        <>
          <div className="product-nav">
            <a href="/products/all">Shop</a>
            <span>&gt;</span>
            <a href={`/product/${productId}`}>{data?.attributes?.title}</a>
          </div>
          <div className="first-section">
            <div className="left">
              <div className="images">
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_API_UPLOAD_URL +
                    data.attributes?.image?.data?.attributes?.url
                  }
                  alt=""
                />
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_API_UPLOAD_URL +
                    data.attributes?.image2?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <div className="product-description">
                <h1>{data?.attributes?.title}</h1>
                <p className="product-price">${data?.attributes?.price}.00</p>
                <p className="product-text">{data?.attributes?.description}</p>
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
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          title: data.attributes.title,
                          price: data.attributes.price,
                          img:
                            import.meta.env.VITE_REACT_APP_API_UPLOAD_URL +
                            data.attributes?.image?.data?.attributes?.url,
                          selectedQuantity,
                          selectedSize,
                        })
                      )
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className="left">
              <div className="product-description">
                <h1>Sizing & fit</h1>
                <p className="product-text">
                  {data?.attributes?.sizingDescription}
                </p>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_API_UPLOAD_URL +
                    data.attributes?.image3?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
