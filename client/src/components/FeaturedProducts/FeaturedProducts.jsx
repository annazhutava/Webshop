import FeaturedProduct1 from "../../assets/featured-product-1.jpg";
import FeaturedProduct2 from "../../assets/featured-product-2.jpg";
import FeaturedProduct3 from "../../assets/featured-product-3.jpg";
import "../FeaturedProducts/FeaturedProducts.scss";

const FeaturedProducts = () => {
  const data = [FeaturedProduct1, FeaturedProduct2, FeaturedProduct3];
  return (
    <div className="featured-products">
      <div className="left">
        <hr />
        <h1>Featured products</h1>
        <div className="shop-btn">
          <a href="/products">Shop featured</a>
        </div>
      </div>
      <div className="right">
        <div className="image">
          {data.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
