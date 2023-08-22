import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SliderImage1 from "../../assets/slider-image-1.jpg";
import SliderImage2 from "../../assets/slider-image-2.jpg";
import SliderImage3 from "../../assets/slider-image-3.jpg";
import SliderImage4 from "../../assets/slider-image-4.jpg";
import "../Slider/Slider.scss";

const Slider = () => {
  const data = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];

  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <KeyboardArrowLeftIcon />
        </div>
        <div className="icon">
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
