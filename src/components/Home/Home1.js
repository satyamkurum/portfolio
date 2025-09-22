import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home1() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/satyamkurum"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  GitHub
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/satyamkurum"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  Twitter
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/satyamkurum/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  LinkedIn
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/satyam.kurum/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home1;

