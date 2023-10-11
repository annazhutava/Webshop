import "../About/About.scss";
// import Image1 from "../../assets/about-img1.jpg";
import Image2 from "../../assets/about-img2.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="top">
        {/* <div className="image">
          <img src={Image1} alt="" />
        </div> */}
        <h1>About us</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="image">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="about-description">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sequi
              exercitationem voluptate, doloremque quisquam, expedita sed labore
              consectetur ex saepe nobis minus unde numquam. Eaque illo adipisci
              at alias aliquid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
