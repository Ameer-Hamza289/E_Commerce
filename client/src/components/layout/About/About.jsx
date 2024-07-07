import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"/>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Founder"
            />
            <Typography>Ameer  Hamza</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is an E-Commerce Wesbite Made By @AmeerHamza.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://github.com/" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a
              href="https://Wa.me/923268842130?text=Hi+there,+my+name+is"
              target="blank"
            >
              <WhatsAppIcon className="whatsappSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;