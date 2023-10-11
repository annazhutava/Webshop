import { Link, useParams } from "react-router-dom";
import List from "../../components/List/List";
import "../Products/Products.scss";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const { category } = useParams();
  const { data, loading, error } = useFetch(`/categories?populate=*`);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Something went wrong!</div>;
  // }

  return (
    <div className="products">
      <div className="left">
        <div className="categories">
          <Link
            className={`category-link ${category === "all" ? "selected" : ""}`}
            to="/products/all"
          >
            All
          </Link>
          {error
            ? "Something went wrong!"
            : loading
            ? "Loading..."
            : data.map((item) => (
                <Link
                  className={`category-link ${
                    category === item.attributes.title ? "selected" : ""
                  }`}
                  key={item.id}
                  to={`/products/${item.attributes.title}`}
                >
                  {item.attributes.title}
                </Link>
              ))}
        </div>
      </div>
      <div className="right">
        <List selectedCategory={category} />
      </div>
    </div>
  );
};

export default Products;
