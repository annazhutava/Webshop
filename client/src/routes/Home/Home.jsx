import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import IntroSection from "../../components/IntroSection/IntroSection";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <IntroSection />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
