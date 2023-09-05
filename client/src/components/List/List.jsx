import Card from "../Card/Card";
import "../List/List.scss";
import useFetch from "../../hooks/useFetch";

const List = ({ selectedCategory }) => {
  const { data, loading, error } = useFetch("/products?populate=*");

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => {
          const categories = item.attributes.categories.data;
          return categories.some(
            (category) => category.attributes.title === selectedCategory
          );
        });

  console.log(filteredData);

  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : filteredData.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
