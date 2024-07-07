import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: ameer.hamza52002@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;