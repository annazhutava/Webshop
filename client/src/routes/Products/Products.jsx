import { Link, useParams } from "react-router-dom";
import List from "../../components/List/List";
import "../Products/Products.scss";
import { useState } from "react";

const Products = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="products">
      <div className="left">
        <div className="categories">
          <Link
            className={`category-link ${
              selectedCategory === "all" ? "selected" : ""
            }`}
            to="/products/all"
            onClick={() => handleCategoryClick("all")}
          >
            All
          </Link>
          <Link
            className={`category-link ${
              selectedCategory === "tops" ? "selected" : ""
            }`}
            to="/products/tops"
            onClick={() => handleCategoryClick("tops")}
          >
            Tops
          </Link>
          <Link
            className={`category-link ${
              selectedCategory === "bottoms" ? "selected" : ""
            }`}
            to="/products/bottoms"
            onClick={() => handleCategoryClick("bottoms")}
          >
            Bottoms
          </Link>
          <Link
            className={`category-link ${
              selectedCategory === "accessories" ? "selected" : ""
            }`}
            to="/products/asseccories"
            onClick={() => handleCategoryClick("accessories")}
          >
            Accessories
          </Link>
        </div>
      </div>
      <div className="right">
        <List selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Products;
