import Product1 from "../../assets/featured-product-1.jpg";
import Product2 from "../../assets/featured-product-2.jpg";
import Product3 from "../../assets/featured-product-3.jpg";
import Card from "../Card/Card";
import "../List/List.scss";

const List = () => {
  const data = [
    {
      id: 1,
      img: Product1,
      category: "Accessory",
    },
    {
      id: 2,
      img: Product2,
      category: "Top",
    },
    {
      id: 3,
      img: Product3,
      category: "Top",
    },
  ];

  return (
    <div className="list">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
