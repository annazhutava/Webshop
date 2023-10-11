import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "../FeaturedProducts/FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FeaturedProducts = ({ type }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [visibleCards, setVisibleCards] = useState(0);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showNext = () => {
    if (visibleCards < data?.length - 1) {
      setVisibleCards(visibleCards + 1);
    }
  };

  const showPrev = () => {
    if (visibleCards <= data?.length - 1) {
      setVisibleCards(visibleCards - 1);
    }
  };

  return (
    <div className="featured-products">
      <div className="left">
        <hr />
        <div className="featured">
          <div className="title">
            <h1>Featured products</h1>
          </div>

          <div className="shop-btn">
            <Link to="/products/all">Shop featured</Link>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="mobile-buttons">
          {(isMobileView && visibleCards > 0 && (
            <div className="mobile-button-prev" onClick={showPrev}>
              <KeyboardArrowLeftIcon />
            </div>
          )) ||
            (visibleCards === 0 && (
              <div className="mobile-button-prev-deactivated">
                <KeyboardArrowLeftIcon />
              </div>
            ))}
          {(isMobileView && visibleCards < data?.length - 1 && (
            <div className="mobile-button-next" onClick={showNext}>
              <KeyboardArrowRightIcon />
            </div>
          )) ||
            (visibleCards === data?.length - 1 && (
              <div className="mobile-button-next-deactivated">
                <KeyboardArrowRightIcon />
              </div>
            ))}
        </div>

        {error
          ? "Something went wrong!"
          : loading
          ? "Loading..."
          : data?.map((item, index) =>
              (isMobileView && index === visibleCards) || !isMobileView ? (
                <Card key={item.id} item={item} />
              ) : null
            )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
