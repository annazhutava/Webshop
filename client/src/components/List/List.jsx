import Product1 from "../../assets/featured-product-1.jpg";
import Product2 from "../../assets/featured-product-2.jpg";
import Product3 from "../../assets/featured-product-3.jpg";
import Card from "../Card/Card";
import "../List/List.scss";

const List = ({ selectedCategory }) => {
  const data = [
    {
      id: 1,
      img: Product1,
      category: "accessories",
    },
    {
      id: 2,
      img: Product2,
      category: "tops",
    },
    {
      id: 3,
      img: Product3,
      category: "tops",
    },
  ];

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="list">
      {filteredData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
