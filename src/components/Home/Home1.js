import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home1() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about solving real-world problems using technology, especially where innovation meets impact. I enjoy learning by building, and adapting quickly to emerging tools and frameworks keeps the journey exciting.
              <br />
              <br />
              I'm proficient in programming languages such as
              <i>
                <b className="purple"> C++, JavaScript, Python, and R</b>
              </i>
              , and I love using them to turn ideas into working solutions.
              <br />
            <br />

       <b className="purple">
     <a href="https://huggingface.co/spaces/satyamkurum/rag-chatbot" target="_blank" rel="noopener noreferrer">
            RAG PDF Chatbot
        </a>
            </b>
          <br />
       <b className="purple">
        <a href="https://huggingface.co/spaces/satyamkurum/reddit-persona-generator" target="_blank" rel="noopener noreferrer">
           Reddit Persona Generator
        </a>
        </b>

        <br />


              <br />
              When I’m not experimenting with GenAI or fine-tuning models, I build scalable apps using{" "}
              <b className="purple">Node.js</b> and{" "}
              <i>
                <b className="purple">modern JavaScript frameworks like React.js</b>
              </i>
              , especially for deployment on platforms like{" "}
              <b className="purple">Hugging Face Spaces</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
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
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/satyamkurum"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/satyamkurum/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/satyam.kurum/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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