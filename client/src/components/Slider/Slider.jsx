import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SliderImage1 from "../../assets/slider-image-1.jpg";
import SliderImage2 from "../../assets/slider-image-2.jpg";
import SliderImage3 from "../../assets/slider-image-3.jpg";
import SliderImage4 from "../../assets/slider-image-4.jpg";
import "../Slider/Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  });

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
