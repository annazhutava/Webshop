import "../Contact/Contact.scss";
import Image from "../../assets/about-img2.jpg";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="left">
        <h1>Contact us</h1>
        <div className="contact-section">
          <div className="contact-info">
            <h2>General Inquiries</h2>
            <p>email@example.com</p>
          </div>
          <div className="contact-info">
            <h2>Press</h2>
            <p>email@example.com</p>
          </div>
          <div className="contact-info">
            <h2>Sales</h2>
            <p>email@example.com</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="right">
        <div className="image">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
