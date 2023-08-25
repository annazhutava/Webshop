import FeaturedProduct1 from "../../assets/featured-product-1.jpg";
import FeaturedProduct2 from "../../assets/featured-product-2.jpg";
import FeaturedProduct3 from "../../assets/featured-product-3.jpg";
import Card from "../Card/Card";
import "../FeaturedProducts/FeaturedProducts.scss";

const FeaturedProducts = () => {
  const data = [
    {
      id: 1,
      img: FeaturedProduct1,
    },
    {
      id: 2,
      img: FeaturedProduct2,
    },
    {
      id: 3,
      img: FeaturedProduct3,
    },
  ];

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
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
