import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "../Card/Card.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <img
          src={
            import.meta.env.VITE_REACT_APP_API_UPLOAD_URL +
            item.attributes?.image?.data?.attributes?.url
          }
          alt=""
        />
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
