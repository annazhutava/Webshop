import "./IntroSection.scss";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <div className="homepage-description">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci qui
        nostrum fugiat, culpa officia, quod iusto corporis dolorem consectetur
        dicta quaerat repellendus vel optio fugit sed in! Delectus, quam velit.
      </p>
      <Link className="about-link" to="/about">
        Our Story
      </Link>
    </div>
  );
};

export default IntroSection;
