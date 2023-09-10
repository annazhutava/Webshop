import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "../Card/Card.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="card-link">
      <div className="card">
        <img
          src={
            import.meta.env.VITE_REACT_APP_API_UPLOAD_URL +
            item.attributes?.image?.data?.attributes?.url
          }
          alt=""
        />
        <div className="product-info">
          <p>{item.attributes?.title}</p>
          <span>${item.attributes?.price}.00</span>
        </div>
      </div>
    </Link>
  );
};

// Card.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     img: PropTypes.string.isRequired,
//     // other properties
//   }).isRequired,
// };

export default Card;
