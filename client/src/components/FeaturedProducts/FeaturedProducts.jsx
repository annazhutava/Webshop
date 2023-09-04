import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "../FeaturedProducts/FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featured-products">
      <div className="left">
        <hr />
        <h1>Featured products</h1>
        <div className="shop-btn">
          <Link to="/products/all">Shop featured</Link>
        </div>
      </div>
      <div className="right">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
