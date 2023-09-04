import { Link } from "react-router-dom";
// import FeaturedProduct1 from "../../assets/featured-product-1.jpg";
// import FeaturedProduct2 from "../../assets/featured-product-2.jpg";
// import FeaturedProduct3 from "../../assets/featured-product-3.jpg";
import Card from "../Card/Card";
import "../FeaturedProducts/FeaturedProducts.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: FeaturedProduct1,
  //   },
  //   {
  //     id: 2,
  //     img: FeaturedProduct2,
  //   },
  //   {
  //     id: 3,
  //     img: FeaturedProduct3,
  //   },
  // ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_REACT_APP_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization:
                "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
            },
          }
        );

        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

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
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
