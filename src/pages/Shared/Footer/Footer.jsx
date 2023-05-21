import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mb-0">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left">
            <img
              src="https://image.spreadshirtmedia.net/image-server/v1/designs/168217885,width=200,height=200.png"
              alt="Website Logo"
              width="60"
              height="60"
              className="mb-2 bg-dark rounded-5"
            />
            <p className="fw-bold">Chef's Toybox</p>
          </Col>
          <Col md={4} className="text-center my-3 my-md-0">
            <h5>Contact Us</h5>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@chefstoybox.com</p>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <div className="me-3">
                <FontAwesomeIcon icon={faFacebook} />
              </div>

              <div className="me-3 text-info">
                <FontAwesomeIcon icon={faTwitter} />
              </div>

              <div className="me-3">
                <FontAwesomeIcon className="text-danger" icon={faInstagram} />
              </div>
            </div>
            <p className="mt-3">134 Main Street, City, State, ZIP</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Chef's Toybox. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
