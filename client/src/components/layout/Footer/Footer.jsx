import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and IOS Mobile Phones</p>
        <div>
          <img src={playStore} alt="playStore" />
          <img src={appStore} alt="appStore" />
        </div>
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our First Priority</p>
        <p>Copyright © 2022 Ameer Hamza</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us.</h4>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.linkedin.com/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;