import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <p>About</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto magnam amet aperiam quaerat doloribus libero vitae
              inventore repudiandae voluptates nulla nihil officiis est nisi
              incidunt, suscipit fuga. Quasi, perferendis animi.
            </span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <p>Title</p>
            <span>Shop</span>
            <span>Contact</span>
          </div>
          <div className="item">
            <p>Info</p>
            <span>FAQs</span>
            <span>Shipping & Returns</span>
            <span>Term Of Use</span>
            <span>Privacy Policy</span>
          </div>
          <div className="item">
            <p>Contact</p>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Youtube</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
