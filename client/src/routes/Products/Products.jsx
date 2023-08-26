import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "../Products/Products.scss";

const Products = () => {
  const category = useParams();

  return (
    <div className="products">
      <div className="left">
        <div className="categories">
          <p>All</p>
          <p>Accessories</p>
          <p>Tops</p>
          <p>Bottoms</p>
        </div>
      </div>
      <div className="right">
        <List category={category} />
      </div>
    </div>
  );
};

export default Products;
