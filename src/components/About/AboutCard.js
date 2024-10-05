import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Satyam Kurum </span>
            from <span className="purple"> Karnataka, India.</span>
            <br />
            I am Senior year Student at National Institute of Technology Karnataka. <br />
            <br />
            Apart from coding, I Love..
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series/Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Give me a mountain,I’ll climb it. Give me a Katy Perry song,I’ll sing it."{" "}
          </p>
          <footer className="blockquote-footer">Louis Litt </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;