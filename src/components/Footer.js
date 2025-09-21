import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/satyamkurum"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/satyamkurum"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/satyamkurum/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="footer-policy-links">
          <ul className="policy-list">
            <li>
              <Link to="/t&c">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy_policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/refund_policy">Refund Policy</Link>
            </li>
            <li>
              <Link to="/return_policy">Return Policy</Link>
            </li>
            <li>
              <Link to="/shipping_policy">Shipping Policy</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;